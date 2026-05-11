import { NextResponse } from "next/server";
import { getOpenAI } from "@/lib/openai/client";

const poiSchema = {
  name: "poi_extraction",
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      pois: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          properties: {
            name: { type: "string" },
            category: { type: "string", enum: ["Eat", "Drink", "Relax", "Explore"] },
            host_tip: { type: "string" },
            vibes: {
              type: "array",
              items: {
                type: "string",
                enum: ["burned_out", "energetic", "curious"]
              }
            }
          },
          required: ["name", "category", "host_tip", "vibes"]
        }
      }
    },
    required: ["pois"]
  },
  strict: true
} as const;

export async function POST(request: Request) {
  const { text } = await request.json();

  if (!text || typeof text !== "string") {
    return NextResponse.json({ error: "Missing transcript text." }, { status: 400 });
  }

  const response = await getOpenAI().chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "Extract boutique local-guide POIs from host notes. Preserve the host's specific tip and assign mood relevance."
      },
      {
        role: "user",
        content: text
      }
    ],
    response_format: {
      type: "json_schema",
      json_schema: poiSchema
    }
  });

  const content = response.choices[0]?.message.content;

  if (!content) {
    return NextResponse.json({ error: "No POIs extracted." }, { status: 422 });
  }

  return NextResponse.json(JSON.parse(content));
}
