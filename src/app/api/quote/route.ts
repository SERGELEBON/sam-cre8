import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "name, phone and message are required" },
        { status: 400 }
      );
    }

    const record = {
      name,
      phone,
      email: String(body?.email ?? "").trim(),
      company: String(body?.company ?? "").trim(),
      subject: String(body?.subject ?? "").trim(),
      service: String(body?.service ?? "").trim(),
      message,
      createdAt: new Date().toISOString(),
    };

    // Persist to SQLite if Prisma model exists; otherwise just log.
    try {
      await db.quoteRequest.create({ data: record });
    } catch {
      // Table may not exist yet — fail soft so the form still succeeds.
      console.warn("[quote] DB write skipped:", (record as any).name, phone);
    }

    console.log("[quote] received:", name, phone, record.service);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[quote] error:", e);
    return NextResponse.json(
      { ok: false, error: "server error" },
      { status: 500 }
    );
  }
}
