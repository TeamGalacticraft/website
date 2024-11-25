export interface Modrinth {
  client_side: string;
  server_side: string;
  game_versions: string[];
  id: string;
  slug: string;
  project_type: string;
  team: string;
  organization: null;
  title: string;
  description: string;
  body: string;
  body_url: null;
  published: string;
  updated: string;
  approved: string;
  queued: null;
  status: string;
  requested_status: null;
  moderator_message: null;
  license: ModrinthLicense;
  downloads: number;
  followers: number;
  categories: string[];
  additional_categories: string[];
  loaders: string[];
  versions: string[];
  icon_url: string;
  issues_url: string;
  source_url: string;
  wiki_url: null;
  discord_url: string;
  donation_urls: string[];
  gallery: string[];
  color: number;
  thread_id: string;
  monetization_status: string;
}

interface ModrinthLicense {
  id: string;
  name: string;
  url: null;
}
