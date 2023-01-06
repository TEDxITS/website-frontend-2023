'use client';
import { usePathname } from 'next/navigation';

const defaultMeta = {
  title: 'Personal Next.Js Starter',
  siteName: 'Personal Next.Js Starter',
  description:
    'Get started with your next project quickly with this personal Next.js starter template, featuring TypeScript and Tailwind CSS for efficient and scalable development. Perfect for creating modern and performant web applications.',
  url: '',
  type: 'website',
  robots: 'follow, index',
  image: '',
  umami_analytics: {
    id: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    src: process.env.NEXT_PUBLIC_ANALYTICS_SRC,
    isActive: process.env.NODE_ENV === 'development' ? false : true,
  },
};

interface IDefaultHeadProps extends Partial<typeof defaultMeta> {
  date?: string;
  templateTitle?: string;
}

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
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@TEDxITS' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {/* Favicon */}
      <link rel='icon' href='/favicon.ico' />
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
