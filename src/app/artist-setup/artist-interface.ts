export interface Artist {
  name?: string;
  facebook_page_url?: string;
  image_url?: string;
  datetime?: Date;
  venue: Venue;
}

export interface Venue {
  country?: string;
  city?: string;
  name?: string;
}
