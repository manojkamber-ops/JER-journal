import { SANITY_PAPERS_DATASET, SANITY_PROJECT_ID } from "@/lib/sanity-papers";

// JPEG copy of a paper figure stored in Sanity, served from this site so PDFs built in the browser can embed it
// (Sanity's CDN does not allow cross-origin reads from the website). Only this project's images are served.
const ALLOWED = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_PAPERS_DATASET}/`;

export async function GET(request: Request) {
  const src = new URL(request.url).searchParams.get("src") ?? "";
  if (!src.startsWith(ALLOWED) || !/^[\w./:-]+$/.test(src)) return new Response("Not found", { status: 404 });
  const res = await fetch(`${src}?fm=jpg&q=85&w=1600&bg=ffffff`);
  if (!res.ok) return new Response("Not found", { status: 404 });
  return new Response(res.body, {
    headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=86400, s-maxage=604800, immutable" },
  });
}
