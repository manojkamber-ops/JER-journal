import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jsonError, EMAIL_RE } from "@/lib/auth";

// Subscribe an email to content alerts. Topics are merged with any existing subscription.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = String(body.email ?? "").trim().toLowerCase();
  const topics: string[] = Array.isArray(body.topics) ? body.topics.map(String).filter(Boolean) : [];
  if (!EMAIL_RE.test(email)) return jsonError("Please enter a valid email address.");
  if (topics.length === 0) return jsonError("Choose at least one alert type.");

  const existing = await db.alertSubscription.findUnique({ where: { email } });
  const merged = Array.from(new Set([...(existing?.topics.split(",").filter(Boolean) ?? []), ...topics]));
  const sub = await db.alertSubscription.upsert({
    where: { email },
    create: { email, name: body.name ? String(body.name) : null, topics: merged.join(",") },
    update: { topics: merged.join(",") },
  });
  return NextResponse.json({ email: sub.email, topics: merged });
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
