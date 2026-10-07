import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jsonError, EMAIL_RE } from "@/lib/auth";
import { saveEntry } from "@/lib/sanity";
import { ARTICLES } from "@/data/journal";
import { applyLivePapers } from "@/data/live-papers";
import { fetchSanityPapers } from "@/lib/sanity-papers";

/** "Request the full paper" form on abstract-only articles. */
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const organisation = String(body.organisation ?? "").trim() || null;
  const purpose = String(body.purpose ?? "").trim() || null;
  const message = String(body.message ?? "").trim() || null;
  const articleId = String(body.articleId ?? "");
  // Papers added in Sanity are only known once the current issue has been read from Sanity
  if (!ARTICLES.some((a) => a.id === articleId)) applyLivePapers(await fetchSanityPapers());
  const article = ARTICLES.find((a) => a.id === articleId);
  if (!article) return jsonError("Unknown article.");
  if (!name) return jsonError("Please enter your name.");
  if (!EMAIL_RE.test(email)) return jsonError("Please enter a valid email address.");

  const corresponding = (article.authors.find((a) => a.corresponding) ?? article.authors[0])?.name ?? null;
  try {
    const id = await saveEntry(
      { _type: "fullTextRequest", articleId: article.id, articleTitle: article.title, doi: article.doi, correspondingAuthor: corresponding, name, email, organisation, purpose, message, status: "new" },
      () =>
        db.contactMessage.create({
          data: {
            name,
            email,
            organisation,
            subject: `Full-text request: ${article.title}`,
            message: [`Article: ${article.title} (DOI ${article.doi})`, `Corresponding author: ${corresponding}`, `Purpose: ${purpose ?? "-"}`, message ? `\n${message}` : ""].join("\n"),
          },
        }),
    );
    return NextResponse.json({ ok: true, id });
  } catch {
    return jsonError("Your request could not be sent. Please try again later.", 502);
  }
}
