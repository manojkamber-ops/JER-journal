import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jsonError, EMAIL_RE } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  if (!name || !subject || !message) return jsonError("Please complete all required fields.");
  if (!EMAIL_RE.test(email)) return jsonError("Please enter a valid email address.");

  const saved = await db.contactMessage.create({
    data: { name, email, subject, message, organisation: String(body.organisation ?? "").trim() || null },
  });
  return NextResponse.json({ id: saved.id });
}
