import { NextResponse } from "next/server";
import { getOpenAI } from "@/lib/openai/client";

export async function POST(request: Request) {
  const formData = await request.formData();
  const audio = formData.get("audio");

  if (!(audio instanceof File)) {
    return NextResponse.json({ error: "Missing audio file." }, { status: 400 });
  }

  const transcription = await getOpenAI().audio.transcriptions.create({
    file: audio,
    model: "whisper-1"
  });

  return NextResponse.json({ text: transcription.text });
}
