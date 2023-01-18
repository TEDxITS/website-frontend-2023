import { AppProps } from 'next/app';

import { baron, futura, quaker } from '@/app/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${baron.variable} ${futura.variable} ${quaker.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
