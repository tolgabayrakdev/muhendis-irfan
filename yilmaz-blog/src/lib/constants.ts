import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.jpeg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://muhendisirfan.com',
  author: {
    avatar,
    name: 'İrfan YILMAZ',
    headline: 'Yüksek İnşaat Mühendisi',
    username: 'muhendisirfan',
    location: 'Türkiye'
  },
  seo: {
    title: 'Irfan YILMAZ — Insaat Muhendisi',
    description: 'Merhaba, ben İrfan Yılmaz. Kişisel bloguma hosgeldiniz.',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@muhendisirfan'
    },
    robots: 'noindex, nofollow',
  }
};