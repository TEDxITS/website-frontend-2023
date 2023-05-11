'use client';
import Head from 'next/head';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { usePathname } from 'next/navigation';

import { BASE_METADATA } from '@/constant/metadata';

const defaultMeta = {
  ...BASE_METADATA,
};

interface IDefaultHeadProps extends Partial<typeof defaultMeta> {
  date?: string;
  templateTitle?: string;
  isUsingAppDir?: boolean;
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
    ? `${props.templateTitle} | ${meta.title}`
    : meta.title;

  if (props.isUsingAppDir)
    return (
      <>
        <title>{meta.title}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
          id='viewportMeta'
        />
        <meta name='robots' content={meta.robots} />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`${meta.alternates.canonical}${pathname}`}
        />
        <link
          rel='canonical'
          href={`${meta.alternates.canonical}${pathname}`}
        />
        {/* Open Graph */}
        <meta property='og:type' content={meta.openGraph.type} />
        <meta property='og:site_name' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta
          name='image'
          property='og:image'
          content={meta.openGraph.images.url}
        />
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@TEDxITS' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.twitter.images.url} />
        {/* Favicon */}
        {favicons.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))}
        {/* Analytics */}
        {/* Host your own Umami Analytics and put the credentials on the script tag below or just use vercel analytics and comment the code below */}
        {/* {meta.umami_analytics.isActive &&
        meta.umami_analytics.id &&
        meta.umami_analytics.src && (
          <script
            async
            defer
            data-website-id={meta.umami_analytics.id}
            src={meta.umami_analytics.src}
          ></script>
        )} */}
      </>
    );
  else {
    return (
      <Head>
        <title>{meta.title}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
          id='viewportMeta'
        />
        <meta name='robots' content={meta.robots} />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`${meta.alternates.canonical}${pathname}`}
        />
        <link
          rel='canonical'
          href={`${meta.alternates.canonical}${pathname}`}
        />
        {/* Open Graph */}
        <meta property='og:type' content={meta.openGraph.type} />
        <meta property='og:site_name' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta
          name='image'
          property='og:image'
          content={meta.openGraph.images.url}
        />
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@TEDxITS' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.twitter.images.url} />
        {/* Favicon */}
        {favicons.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))}
        {/* Analytics */}
        {/* Host your own Umami Analytics and put the credentials on the script tag below or just use vercel analytics and comment the code below */}
        {/* {meta.umami_analytics.isActive &&
        meta.umami_analytics.id &&
        meta.umami_analytics.src && (
          <script
            async
            defer
            data-website-id={meta.umami_analytics.id}
            src={meta.umami_analytics.src}
          ></script>
        )} */}
      </Head>
    );
  }
}
