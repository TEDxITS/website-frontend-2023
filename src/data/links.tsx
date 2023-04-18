import InstagramLogoIllustration from '@/assets/svg/InstagramLogoIllustration';
import LinkedinLogoIllustration from '@/assets/svg/LinkedinLogoIllustration';
import TwitterLogoIllustration from '@/assets/svg/TwitterLogoIllustration';

export type LinkType = {
  href: string;
  label: React.ReactNode;
};

export const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/order-now', label: 'Order Now' },
];

export const aboutLinks = [
  { href: '/starter-kit', label: 'TED and TEDx Starter Kit' },
  { href: '/last-year-journey', label: 'Last Year’s Journey' },
  { href: '/grand-theme', label: 'Grand Theme' },
];

export const eventLinks = [
  { href: '/anthropocene', label: 'Anthropocene' },
  { href: '/CFLS', label: 'Call for Local Speaker' },
  { href: '/voyagers-test', label: 'Voyagers Test' },
];

export const orderLinks = [{ href: '/ticket', label: 'Ticket' }];

export const adminDashboardLinks = [
  {
    href: '/admin/dashboard',
    label: 'Home',
    segment: null,
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-5 w-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
        />
      </svg>
    ),
  },
  {
    href: '/admin/dashboard/links',
    label: 'Links',
    segment: 'links',
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-5 w-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
        />
      </svg>
    ),
  },
  {
    href: '/admin/dashboard/anthropocene',
    label: 'Anthropocene',
    segment: 'anthropocene',
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-5 w-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
        />
      </svg>
    ),
  },
  {
    href: '/admin/dashboard/ticket',
    label: 'Ticket',
    segment: 'ticket',
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-5 w-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z'
        />
      </svg>
    ),
  },
];

export const dashboardLinks = [
  {
    href: '/dashboard',
    label: 'Home',
    segment: null,
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-5 w-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
        />
      </svg>
    ),
  },
  {
    href: '/dashboard/ticket',
    label: 'Ticket',
    segment: 'ticket',
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-5 w-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z'
        />
      </svg>
    ),
  },
  {
    href: '/dashboard/history',
    label: 'Your Purchase',
    segment: 'history',
    logo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-5 w-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
        />
      </svg>
    ),
  },
];

export const adminToolsLink = [
  {
    href: '/tools',
    label: 'Link Shortener',
  },
];

export const dashboardInformationLink = [
  {
    href: '/dashboard/information/benefit',
    label: 'Benefit',
  },
  {
    href: '/dashboard/information/our-pilots',
    label: 'Our Pilots',
  },
  {
    href: '/dashboard/information/tutorial',
    label: 'Tutorial',
  },
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

export const darkSocialMediaLinks: SoialMediaLinkType[] = [
  {
    href: 'https://www.instagram.com/tedxits/',
    label: 'Instagram',
    logo: (
      <InstagramLogoIllustration
        className='h-8 hover:cursor-pointer md:h-7'
        pathClassName='duration-150 transition-all fill-black'
      />
    ),
  },
  {
    href: 'https://twitter.com/TEDxITS',
    label: 'Twitter',
    logo: (
      <TwitterLogoIllustration
        className='h-8 hover:cursor-pointer md:h-7'
        pathClassName='duration-150 transition-all fill-black'
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/company/tedxits/',
    label: 'LinkedIn',
    logo: (
      <LinkedinLogoIllustration
        className='h-8 hover:cursor-pointer md:h-7'
        pathClassName='duration-150 transition-all fill-black'
      />
    ),
  },
];
