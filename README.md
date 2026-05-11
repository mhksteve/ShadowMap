# Shadow Map

Shadow Map is a trusted stay and local-guide platform. Guests can either find a place to stay with a host-backed local guide, or open a Shadow Map for a place they have already booked.

The product is built around three ideas:

- Host knowledge
- AI organisation
- Trust signals

## Stack

- Next.js App Router
- Tailwind CSS
- Supabase Auth, Database, and Storage
- OpenAI Whisper transcription
- GPT-4o mood and POI extraction

## Local Setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and fill in Supabase and OpenAI keys.
3. Apply `supabase/schema.sql` in your Supabase SQL editor.
4. Run `npm run dev`.

## Folder Structure

```txt
app/
  (auth)/login/
  dashboard/
  stays/
  stays/[stayId]/
  guide/[hostId]/
  api/
    voice-notes/transcribe/
    voice-notes/extract-pois/
components/
  dashboard/
  guide/
lib/
  openai/
  supabase/
supabase/
  schema.sql
```

## Product Paths

- `Find a place to stay`: browse trusted stays with guide previews and host signals.
- `Already have a place`: open a host guide and filter local recommendations by mood.

## Trust Layer

The schema includes stays, POIs, host confidence, affiliation disclosure, freshness fields, and private guest feedback signals. AI should organise host knowledge, not invent places.

## Demo Data

`lib/demo-data.ts` currently powers the stay cards, stay detail pages, and `/guide/demo-host`. The stay names are fictional; the outbound Airbnb, Booking.com, Google Maps, and Wikimedia links are temporary sample links so the product feels complete before real hosts exist.

When real data is ready, replace that file with Supabase queries for:

- Published stays
- Host profiles
- Stay booking links
- POIs
- Guest feedback
- Trust signals
- Media/source attribution
