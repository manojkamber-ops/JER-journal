// Server-side Sanity access for the website's forms, using Sanity's HTTP API directly (no extra package).
// Only imported by API routes, so the write token stays on the server. When SANITY_API_WRITE_TOKEN is not set,
// the forms keep using the local Prisma database only.

const projectId = process.env.SANITY_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "oy0g1kj5";
const dataset = process.env.SANITY_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

export const SANITY_API_VERSION = "2025-01-01";
export const sanityEnabled = Boolean(projectId && token);

type Doc = Record<string, unknown> & { _type: string; _id?: string };

class SanityWriter {
  private base = `https://${projectId}.api.sanity.io/v${SANITY_API_VERSION}`;
  private headers = { Authorization: `Bearer ${token}` };

  private async mutate(mutations: unknown[]) {
    const res = await fetch(`${this.base}/data/mutate/${dataset}?returnIds=true`, {
      method: "POST",
      headers: { ...this.headers, "Content-Type": "application/json" },
      body: JSON.stringify({ mutations }),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Sanity mutate failed: ${res.status} ${await res.text()}`);
    return (await res.json()) as { results: { id: string }[] };
  }

  /** Creates a document with a generated id; returns the id. */
  async create(doc: Doc): Promise<string> {
    return (await this.mutate([{ create: doc }])).results[0].id;
  }

  /** Creates the document or replaces the one with the same _id. */
  async createOrReplace(doc: Doc & { _id: string }): Promise<string> {
    return (await this.mutate([{ createOrReplace: doc }])).results[0].id;
  }

  async getDocument<T = Record<string, unknown>>(id: string): Promise<T | null> {
    const res = await fetch(`${this.base}/data/doc/${dataset}/${encodeURIComponent(id)}`, { headers: this.headers, cache: "no-store" });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Sanity read failed: ${res.status}`);
    const body = (await res.json()) as { documents?: T[] };
    return body.documents?.[0] ?? null;
  }

  /** Uploads a file to Sanity's asset store; returns the asset document id. */
  async uploadFile(bytes: Buffer, filename: string, contentType?: string): Promise<string> {
    const res = await fetch(`${this.base}/assets/files/${dataset}?filename=${encodeURIComponent(filename)}`, {
      method: "POST",
      headers: { ...this.headers, "Content-Type": contentType || "application/octet-stream" },
      body: new Uint8Array(bytes),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Sanity upload failed: ${res.status} ${await res.text()}`);
    return ((await res.json()) as { document: { _id: string } }).document._id;
  }
}

let writer: SanityWriter | null = null;

/** Write client, or null when Sanity is not configured. */
export function sanityWriter(): SanityWriter | null {
  if (!sanityEnabled) return null;
  writer ??= new SanityWriter();
  return writer;
}

/**
 * Stores a form entry in Sanity (when configured) and in the local database. Succeeds if at least one of the two
 * stores accepted it, so the forms keep working on hosts without a writable database (e.g. Vercel with SQLite).
 */
export async function saveEntry(doc: Doc, saveLocally: () => Promise<unknown>) {
  const sanity = sanityWriter();
  let sanityId: string | null = null;
  let sanityError: unknown = null;
  if (sanity) {
    try {
      sanityId = await sanity.create({ ...doc, submittedAt: new Date().toISOString() });
    } catch (e) {
      sanityError = e;
      console.error("Sanity write failed:", e);
    }
  }
  try {
    await saveLocally();
  } catch (e) {
    if (!sanityId) throw sanityError ?? e;
  }
  return sanityId;
}
