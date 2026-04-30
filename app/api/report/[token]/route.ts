import { NextRequest, NextResponse } from "next/server";
import { dbLeadEngine } from "@/lib/db";
import { operationsReports } from "@/lib/db/schema/lead-engine";
import { eq } from "drizzle-orm";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  if (!token || !/^[0-9a-f-]{36}$/i.test(token)) {
    return NextResponse.json({ error: "Invalid token" }, { status: 400 });
  }

  try {
    const rows = await dbLeadEngine
      .select()
      .from(operationsReports)
      .where(eq(operationsReports.token, token))
      .limit(1);

    if (!rows.length) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    const row = rows[0];

    return NextResponse.json({
      name: row.name,
      level: row.level,
      levelLabel: row.levelLabel,
      painTag: row.painTag,
      segmentB: row.segmentB,
      answers: row.answers,
      template: row.template,
      synthesis: row.synthesis,
      createdAt: row.createdAt,
    });
  } catch (err) {
    console.error("Report fetch error:", err);
    return NextResponse.json({ error: "Failed to load report" }, { status: 500 });
  }
}
