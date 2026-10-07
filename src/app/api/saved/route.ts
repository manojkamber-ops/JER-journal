import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser, jsonError } from "@/lib/auth";
import { ARTICLES } from "@/data/journal";

async function list(userId: string) {
  const rows = await db.savedArticle.findMany({ where: { userId }, orderBy: { createdAt: "desc" } });
  return rows.map((r) => r.articleId);
}

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return jsonError("Please sign in.", 401);
  return NextResponse.json({ saved: await list(user.id) });
}

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return jsonError("Please sign in to save articles.", 401);
  const { articleId } = await req.json().catch(() => ({}));
  if (!ARTICLES.some((a) => a.id === articleId)) return jsonError("Unknown article.", 404);
  await db.savedArticle.upsert({
    where: { userId_articleId: { userId: user.id, articleId } },
    create: { userId: user.id, articleId },
    update: {},
  });
  return NextResponse.json({ saved: await list(user.id) });
}

export async function DELETE(req: Request) {
  const user = await getCurrentUser();
  if (!user) return jsonError("Please sign in.", 401);
  const articleId = new URL(req.url).searchParams.get("articleId") ?? "";
  await db.savedArticle.deleteMany({ where: { userId: user.id, articleId } });
  return NextResponse.json({ saved: await list(user.id) });
}
