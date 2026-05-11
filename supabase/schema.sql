create extension if not exists "pgcrypto";

create type poi_category as enum ('Eat', 'Drink', 'Relax', 'Explore');
create type guest_vibe as enum ('burned_out', 'energetic', 'curious');

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

create table public.pois (
  id uuid primary key default gen_random_uuid(),
  host_id uuid not null references public.hosts(id) on delete cascade,
  name text not null,
  category poi_category not null,
  host_tip text not null,
  address text,
  website_url text,
  vibes guest_vibe[] not null default '{}',
  source_transcript text,
  source_audio_path text,
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index pois_host_id_idx on public.pois(host_id);
create index pois_category_idx on public.pois(category);
create index pois_vibes_idx on public.pois using gin(vibes);
create index pois_published_idx on public.pois(host_id, is_published, sort_order);

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

create trigger pois_set_updated_at
before update on public.pois
for each row execute function public.set_updated_at();

alter table public.hosts enable row level security;
alter table public.pois enable row level security;

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
