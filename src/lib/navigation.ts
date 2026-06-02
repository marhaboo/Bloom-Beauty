export function searchHref(query: string): string {
  return `/search?q=${encodeURIComponent(query)}`;
}

export function blogTagHref(tag: string): string {
  return `/blog?tag=${encodeURIComponent(tag)}`;
}

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/",
  pinterest: "https://www.pinterest.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  telegram: "https://t.me/",
} as const;
