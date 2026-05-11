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
            category: {
              type: "string",
              enum: [
                "Eat",
                "Drink",
                "Relax",
                "Explore",
                "Shop",
                "Practical",
                "Local Secret",
                "Avoid"
              ]
            },
            host_tip: { type: "string" },
            why_recommended: { type: "string" },
            best_for: {
              type: "array",
              items: { type: "string" }
            },
            avoid_if: { type: "string" },
            best_time: { type: "string" },
            host_confidence: {
              type: "string",
              enum: ["must_go", "reliable", "niche_pick", "only_if_nearby"]
            },
            affiliation: {
              type: "string",
              enum: ["none", "host_partner", "friend_of_host", "discount_available"]
            },
            vibes: {
              type: "array",
              items: {
                type: "string",
                enum: ["burned_out", "energetic", "curious"]
              }
            }
          },
          required: [
            "name",
            "category",
            "host_tip",
            "why_recommended",
            "best_for",
            "avoid_if",
            "best_time",
            "host_confidence",
            "affiliation",
            "vibes"
          ]
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
          "Extract boutique local-guide POIs from host notes. Only include places the host explicitly mentioned. Preserve the host's specific tip, assign mood relevance, include honest caveats, and mark vague or promotional claims as lower confidence."
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
