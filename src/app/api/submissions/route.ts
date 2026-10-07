import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { db } from "@/lib/db";
import { getCurrentUser, jsonError, EMAIL_RE } from "@/lib/auth";

const MAX_FILE = 25 * 1024 * 1024;
const ALLOWED = [".pdf", ".doc", ".docx", ".tex", ".zip"];

function text(form: FormData, key: string) {
  const v = form.get(key);
  return typeof v === "string" && v.trim() ? v.trim() : null;
}

async function newReference() {
  const year = new Date().getFullYear();
  for (;;) {
    const ref = `JER-${year}-${Math.floor(1000 + Math.random() * 9000)}`;
    if (!(await db.submission.findUnique({ where: { reference: ref } }))) return ref;
  }
}

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return jsonError("Please sign in.", 401);
  const rows = await db.submission.findMany({
    where: { userId: user.id },
    orderBy: { updatedAt: "desc" },
    select: { id: true, reference: true, status: true, title: true, articleType: true, fileName: true, createdAt: true, updatedAt: true },
  });
  return NextResponse.json({ submissions: rows });
}

export async function POST(req: Request) {
  const user = await getCurrentUser();
  const form = await req.formData();
  const status = form.get("status") === "draft" ? "draft" : "submitted";

  const title = text(form, "title");
  if (!title) return jsonError("Article title is required.");

  const file = form.get("manuscript");
  const hasFile = file instanceof File && file.size > 0;

  if (status === "submitted") {
    const required = ["articleType", "abstract", "keywords", "authorName", "authorEmail"];
    if (required.some((k) => !text(form, k))) return jsonError("Please complete all required fields.");
    if (!EMAIL_RE.test(text(form, "authorEmail")!)) return jsonError("Please enter a valid email address.");
    if (!hasFile) return jsonError("Please attach your manuscript file.");
  }

  let storedFile: string | null = null;
  if (hasFile) {
    const ext = path.extname(file.name).toLowerCase();
    if (!ALLOWED.includes(ext)) return jsonError(`File type not accepted. Use ${ALLOWED.join(", ")}.`);
    if (file.size > MAX_FILE) return jsonError("File is larger than 25 MB.");
    const dir = path.join(process.cwd(), "uploads");
    await mkdir(dir, { recursive: true });
    storedFile = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
    await writeFile(path.join(dir, storedFile), Buffer.from(await file.arrayBuffer()));
  }

  const wordCount = Number.parseInt(text(form, "wordCount") ?? "", 10);
  const sub = await db.submission.create({
    data: {
      reference: await newReference(),
      status,
      userId: user?.id ?? null,
      title,
      articleType: text(form, "articleType"),
      wordCount: Number.isFinite(wordCount) ? wordCount : null,
      abstract: text(form, "abstract"),
      keywords: text(form, "keywords"),
      jelCodes: text(form, "jelCodes"),
      authorName: text(form, "authorName"),
      authorEmail: text(form, "authorEmail"),
      orcid: text(form, "orcid"),
      affiliations: text(form, "affiliations"),
      coverLetter: text(form, "coverLetter"),
      fileName: hasFile ? file.name : null,
      fileSize: hasFile ? file.size : null,
      storedFile,
    },
  });
  return NextResponse.json({ reference: sub.reference, status: sub.status });
}
