import InstagramLogoIllustration from '@/assets/svg/InstagramLogoIllustration';
import LinkedinLogoIllustration from '@/assets/svg/LinkedinLogoIllustration';
import TwitterLogoIllustration from '@/assets/svg/TwitterLogoIllustration';

export type LinkType = {
  href: string;
  label: React.ReactNode;
};

export const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/voyagers-test', label: 'Try Me!' },
  { href: '/coming-soon', label: 'Login' },
];

export const aboutLinks = [
  { href: '/starter-kit', label: 'TED and TEDx Starter Kit' },
  { href: '/last-year-journey', label: 'Last Year’s Journey' },
  { href: '/grand-theme', label: 'Grand Theme' },
];

type SoialMediaLinkType = LinkType & {
  logo: React.ReactNode;
};

export const socialMediaLinks: SoialMediaLinkType[] = [
  {
    href: 'https://www.instagram.com/tedxits/',
    label: 'Instagram',
    logo: (
      <InstagramLogoIllustration
        className='h-8 hover:cursor-pointer md:h-7'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://twitter.com/TEDxITS',
    label: 'Twitter',
    logo: (
      <TwitterLogoIllustration
        className='h-8 hover:cursor-pointer md:h-7'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/company/tedxits/',
    label: 'LinkedIn',
    logo: (
      <LinkedinLogoIllustration
        className='h-8 hover:cursor-pointer md:h-7'
        pathClassName='duration-150 transition-all'
      />
    ),
  },
];
