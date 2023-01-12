'use client';
import { usePathname } from 'next/navigation';

const defaultMeta = {
  title: 'TEDxITS 2023',
  siteName: 'TEDxITS 2023',
  description:
    'TEDxITS paves the way to ideas discussion from various perspectives in enjoyable delivery method across Institut Teknologi Sepuluh Nopember (ITS) and Surabaya.',
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://www.tedxits.org'
      : 'http://localhost:3000',
  type: 'website',
  robots: 'follow, index',
  image: '',
  umami_analytics: {
    id: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    src: process.env.NEXT_PUBLIC_ANALYTICS_SRC,
    isActive: process.env.NODE_ENV === 'production',
  },
};

interface IDefaultHeadProps extends Partial<typeof defaultMeta> {
  date?: string;
  templateTitle?: string;
}

interface IFavicons {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
}

const favicons: Array<IFavicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-chrome-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
  },
];

export default function DefaultHead(props: IDefaultHeadProps) {
  const pathname = usePathname();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${pathname}`} />
      <link rel='canonical' href={`${meta.url}${pathname}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta
        name='image'
        property='og:image'
        content={`${meta.url}/api/og?title=${meta.templateTitle}&description=${meta.description}`}
      />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@TEDxITS' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {/* Favicon */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      {/* Analytics */}
      {/* Host your own Umami Analytics and put the credentials on the script tag below */}
      {meta.umami_analytics.isActive &&
        meta.umami_analytics.id &&
        meta.umami_analytics.src && (
          <script
            async
            defer
            data-website-id={meta.umami_analytics.id}
            src={meta.umami_analytics.src}
          ></script>
        )}
    </>
  );
}
