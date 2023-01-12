import localFont from '@next/font/local';

import '../styles/globals.css';

import Toast from '@/components/toast/Toast';
import AuthProvider from '@/components/utils/AuthProvider';

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
      path: '../../public/fonts/futura/bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-futura',
});

// const inter = Inter({
//   variable: '--font-inter',
//   subsets: ['latin'],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning={true}
      className={`${baron.variable} ${futura.variable} ${quaker.variable}`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <AuthProvider>
          <Toast />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
