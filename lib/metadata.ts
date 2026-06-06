import type { Metadata } from 'next';
import { keywords, site } from './site';

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
};

export function createMetadata({ title, description, path, image = '/og-nuvyababy.jpg', type = 'website' }: SeoInput): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, type, images: [{ url: image, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] }
  };
}
