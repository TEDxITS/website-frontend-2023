import '../styles/globals.css';

import Toast from '@/components/toast/Toast';
import AuthProvider from '@/components/utils/AuthProvider';

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
    <html lang='en' suppressHydrationWarning={true}>
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
