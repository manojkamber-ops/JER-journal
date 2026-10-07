import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jsonError, EMAIL_RE } from "@/lib/auth";
import { saveEntry } from "@/lib/sanity";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const organisation = String(body.organisation ?? "").trim() || null;
  if (!name || !subject || !message) return jsonError("Please complete all required fields.");
  if (!EMAIL_RE.test(email)) return jsonError("Please enter a valid email address.");

  try {
    const id = await saveEntry({ _type: "contactMessage", name, email, organisation, subject, message, status: "new" }, () =>
      db.contactMessage.create({ data: { name, email, subject, message, organisation } }),
    );
    return NextResponse.json({ ok: true, id });
  } catch {
    return jsonError("Your message could not be saved. Please try again later.", 502);
  }
}
