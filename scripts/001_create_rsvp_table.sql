-- Create RSVP tracking table for XV años invitation
create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  phone_number text not null,
  attending boolean default true,
  number_of_guests integer default 1,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table public.rsvps enable row level security;

-- Allow anyone to view RSVPs (for real-time count display)
create policy "rsvps_select_all"
  on public.rsvps for select
  using (true);

-- Allow anyone to insert RSVPs (public invitation)
create policy "rsvps_insert_all"
  on public.rsvps for insert
  with check (true);

-- Create index for faster queries
create index if not exists rsvps_created_at_idx on public.rsvps(created_at desc);
