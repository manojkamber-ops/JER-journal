import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createSession, jsonError, publicUser, verifyPassword } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");

  const user = await db.user.findUnique({ where: { email } });
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return jsonError("Incorrect email or password.", 401);
  }
  await createSession(user.id);
  return NextResponse.json({ user: publicUser(user) });
}
