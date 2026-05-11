# Shadow Map

Shadow Map is a boutique Airbnb host concierge. Hosts record voice notes about their local area, the app transcribes those notes, extracts points of interest, and publishes a private-feeling public guide for guests.

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
