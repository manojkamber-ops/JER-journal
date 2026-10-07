import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser, jsonError, publicUser } from "@/lib/auth";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ user: null, saved: [] });
  const saved = await db.savedArticle.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    select: { articleId: true },
  });
  return NextResponse.json({ user: publicUser(user), saved: saved.map((s) => s.articleId) });
}

// Update profile (name / affiliation)
export async function PATCH(req: Request) {
  const user = await getCurrentUser();
  if (!user) return jsonError("Please sign in.", 401);
  const body = await req.json().catch(() => ({}));
  const name = String(body.name ?? "").trim();
  if (!name) return jsonError("Name cannot be empty.");
  const updated = await db.user.update({
    where: { id: user.id },
    data: { name, affiliation: String(body.affiliation ?? "").trim() || null },
  });
  return NextResponse.json({ user: publicUser(updated) });
}
