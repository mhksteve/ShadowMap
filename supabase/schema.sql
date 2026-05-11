create extension if not exists "pgcrypto";

create type stay_category as enum (
  'Boutique Airbnb',
  'Local Guesthouse',
  'Unique Stay',
  'Budget Stay',
  'Luxury Stay',
  'Remote Work Stay',
  'Family Stay',
  'Romantic Stay',
  'Pet-Friendly Stay',
  'Long Stay'
);

create type poi_category as enum (
  'Eat',
  'Drink',
  'Relax',
  'Explore',
  'Shop',
  'Practical',
  'Local Secret',
  'Avoid'
);

create type guest_vibe as enum ('burned_out', 'energetic', 'curious');
create type host_confidence as enum ('must_go', 'reliable', 'niche_pick', 'only_if_nearby');
create type affiliation_status as enum ('none', 'host_partner', 'friend_of_host', 'discount_available');
create type feedback_signal as enum (
  'worth_it',
  'not_worth_it',
  'closed',
  'wrong_info',
  'felt_touristy',
  'too_expensive',
  'unsafe_or_uncomfortable'
);

create table public.hosts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  display_name text not null,
  property_name text,
  guide_slug text not null unique,
  neighborhood text,
  hero_note text,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.stays (
  id uuid primary key default gen_random_uuid(),
  host_id uuid not null references public.hosts(id) on delete cascade,
  title text not null,
  category stay_category not null,
  destination text not null,
  neighborhood text,
  description text,
  booking_url text,
  partner_url text,
  price_note text,
  best_for text[] not null default '{}',
  trust_signals text[] not null default '{}',
  guide_preview text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.pois (
  id uuid primary key default gen_random_uuid(),
  host_id uuid not null references public.hosts(id) on delete cascade,
  stay_id uuid references public.stays(id) on delete set null,
  name text not null,
  category poi_category not null,
  host_tip text not null,
  why_recommended text,
  best_for text[] not null default '{}',
  avoid_if text,
  best_time text,
  address text,
  website_url text,
  vibes guest_vibe[] not null default '{}',
  host_confidence host_confidence not null default 'reliable',
  affiliation affiliation_status not null default 'none',
  last_confirmed_at date,
  guest_positive_count integer not null default 0,
  guest_flag_count integer not null default 0,
  source_transcript text,
  source_audio_path text,
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.poi_feedback (
  id uuid primary key default gen_random_uuid(),
  poi_id uuid not null references public.pois(id) on delete cascade,
  signal feedback_signal not null,
  note text,
  created_at timestamptz not null default now()
);

create index stays_host_id_idx on public.stays(host_id);
create index stays_category_idx on public.stays(category);
create index stays_destination_idx on public.stays(destination);
create index stays_published_idx on public.stays(is_published, destination);
create index pois_host_id_idx on public.pois(host_id);
create index pois_stay_id_idx on public.pois(stay_id);
create index pois_category_idx on public.pois(category);
create index pois_vibes_idx on public.pois using gin(vibes);
create index pois_published_idx on public.pois(host_id, is_published, sort_order);
create index poi_feedback_poi_id_idx on public.poi_feedback(poi_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger hosts_set_updated_at
before update on public.hosts
for each row execute function public.set_updated_at();

create trigger stays_set_updated_at
before update on public.stays
for each row execute function public.set_updated_at();

create trigger pois_set_updated_at
before update on public.pois
for each row execute function public.set_updated_at();

alter table public.hosts enable row level security;
alter table public.stays enable row level security;
alter table public.pois enable row level security;
alter table public.poi_feedback enable row level security;

create policy "Hosts can read their own profile"
on public.hosts for select
using (auth.uid() = user_id);

create policy "Hosts can insert their own profile"
on public.hosts for insert
with check (auth.uid() = user_id);

create policy "Hosts can update their own profile"
on public.hosts for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Published guides are public"
on public.hosts for select
using (is_published = true);

create policy "Hosts can manage their stays"
on public.stays for all
using (
  exists (
    select 1 from public.hosts
    where hosts.id = stays.host_id
    and hosts.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.hosts
    where hosts.id = stays.host_id
    and hosts.user_id = auth.uid()
  )
);

create policy "Published stays are public"
on public.stays for select
using (is_published = true);

create policy "Hosts can manage their POIs"
on public.pois for all
using (
  exists (
    select 1 from public.hosts
    where hosts.id = pois.host_id
    and hosts.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.hosts
    where hosts.id = pois.host_id
    and hosts.user_id = auth.uid()
  )
);

create policy "Published POIs are public"
on public.pois for select
using (is_published = true);

create policy "Guests can leave private POI feedback"
on public.poi_feedback for insert
with check (
  exists (
    select 1 from public.pois
    where pois.id = poi_feedback.poi_id
    and pois.is_published = true
  )
);

create policy "Hosts can read feedback for their POIs"
on public.poi_feedback for select
using (
  exists (
    select 1 from public.pois
    join public.hosts on hosts.id = pois.host_id
    where pois.id = poi_feedback.poi_id
    and hosts.user_id = auth.uid()
  )
);

insert into storage.buckets (id, name, public)
values ('voice-notes', 'voice-notes', false)
on conflict (id) do nothing;

create policy "Hosts can upload voice notes"
on storage.objects for insert
with check (
  bucket_id = 'voice-notes'
  and auth.role() = 'authenticated'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Hosts can read voice notes"
on storage.objects for select
using (
  bucket_id = 'voice-notes'
  and auth.role() = 'authenticated'
  and (storage.foldername(name))[1] = auth.uid()::text
);
