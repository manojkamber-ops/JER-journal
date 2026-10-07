import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jsonError, EMAIL_RE } from "@/lib/auth";
import { createHash } from "crypto";
import { sanityWriter } from "@/lib/sanity";

const sanityAlertId = (email: string) => `alert-${createHash("sha256").update(email).digest("hex").slice(0, 24)}`;

// Subscribe an email to content alerts. Topics are merged with any existing subscription.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = String(body.email ?? "").trim().toLowerCase();
  const topics: string[] = Array.isArray(body.topics) ? body.topics.map(String).filter(Boolean) : [];
  if (!EMAIL_RE.test(email)) return jsonError("Please enter a valid email address.");
  if (topics.length === 0) return jsonError("Choose at least one alert type.");

  const name = body.name ? String(body.name) : null;
  const sanity = sanityWriter();
  let merged = topics;
  let saved = false;

  // Sanity: one document per subscriber, topics merged with any earlier subscription
  if (sanity) {
    try {
      const id = sanityAlertId(email);
      const prior = await sanity.getDocument<{ topics?: string[] }>(id);
      merged = Array.from(new Set([...(prior?.topics ?? []), ...topics]));
      await sanity.createOrReplace({ _id: id, _type: "alertSubscription", email, name, topics: merged, active: true, updatedAt: new Date().toISOString() });
      saved = true;
    } catch (e) {
      console.error("Sanity write failed:", e);
    }
  }
  try {
    const existing = await db.alertSubscription.findUnique({ where: { email } });
    merged = Array.from(new Set([...(existing?.topics.split(",").filter(Boolean) ?? []), ...merged]));
    await db.alertSubscription.upsert({
      where: { email },
      create: { email, name, topics: merged.join(",") },
      update: { topics: merged.join(",") },
    });
    saved = true;
  } catch (e) {
    if (!saved) return jsonError("Your subscription could not be saved. Please try again later.", 502);
  }
  return NextResponse.json({ email, topics: merged });
}

export async function GET(req: Request) {
  const email = (new URL(req.url).searchParams.get("email") ?? "").toLowerCase();
  const sub = email ? await db.alertSubscription.findUnique({ where: { email } }) : null;
  return NextResponse.json({ topics: sub?.topics.split(",").filter(Boolean) ?? [] });
}

export async function DELETE(req: Request) {
  const email = (new URL(req.url).searchParams.get("email") ?? "").toLowerCase();
  await db.alertSubscription.deleteMany({ where: { email } });
  return NextResponse.json({ ok: true });
}
