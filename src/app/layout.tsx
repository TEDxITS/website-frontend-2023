import { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import localFont from 'next/font/local';

import '../styles/globals.css';

import Toast from '@/components/toast/Toast';
import { AnalyticsProvider } from '@/components/utils/AnalyticsProvider';
import ReactQueryWrapper from '@/components/utils/ReactQueryWrapper';

import StoreInitializer from '@/store/StoreInitializer';

import { BASE_METADATA } from '@/constant/metadata';
import FirebaseAuthProvider from '@/context/FirebaseAuthContext';

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

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
});

export const metadata: Metadata = {
  ...BASE_METADATA,
};

// export const dynamic = 'auto';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await getCurrentUser();
  return (
    <html
      lang='en'
      suppressHydrationWarning={true}
      className={`${baron.variable} ${futura.variable} ${quaker.variable} ${vt323.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='overflow-x-hidden'>
        <ReactQueryWrapper>
          <StoreInitializer />
          <FirebaseAuthProvider>
            <Toast />
            <AnalyticsProvider />
            {children}
          </FirebaseAuthProvider>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
