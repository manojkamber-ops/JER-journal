import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createSession, hashPassword, jsonError, publicUser, EMAIL_RE } from "@/lib/auth";
import { sanityWriter } from "@/lib/sanity";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");
  const affiliation = String(body.affiliation ?? "").trim() || null;

  if (!name) return jsonError("Please enter your name.");
  if (!EMAIL_RE.test(email)) return jsonError("Please enter a valid email address.");
  if (password.length < 8) return jsonError("Password must be at least 8 characters.");
  if (await db.user.findUnique({ where: { email } })) {
    return jsonError("An account with this email already exists. Please sign in.", 409);
  }

  const user = await db.user.create({
    data: { name, email, affiliation, passwordHash: hashPassword(password) },
  });
  await createSession(user.id);
  // Mirror the new reader in Sanity (name, email, affiliation only; never the password). Failure must not block sign-up.
  await sanityWriter()
    ?.create({ _type: "readerAccount", name, email, affiliation, registeredAt: new Date().toISOString() })
    .catch((e) => console.error("Sanity write failed:", e));
  return NextResponse.json({ user: publicUser(user) });
}
