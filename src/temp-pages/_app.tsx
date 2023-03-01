import localFont from '@next/font/local';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

import Toast from '@/components/toast/Toast';
import { AnalyticsProvider } from '@/components/utils/AnalyticsProvider';

// Fonts use in Next js 13
const baron = localFont({
  src: [
    {
      path: '../../public/fonts/baron-neue/regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-baron',
});

const quaker = localFont({
  src: [
    {
      path: '../../public/fonts/quaker-free/quaker-free.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-quaker',
});

const futura = localFont({
  src: [
    {
      path: '../../public/fonts/futura/regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura/medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura/semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura/bold-3.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-futura',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${baron.variable} ${futura.variable} ${quaker.variable}`}>
      <Component {...pageProps} />
      <AnalyticsProvider />
      <Toast />
    </main>
  );
}

export default MyApp;
