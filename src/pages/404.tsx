import { useRouter } from 'next/navigation';
import React from 'react';

import '../styles/globals.css';

export default function NotFound() {
  const router = useRouter();
  React.useEffect(() => {
    router.push('/coming-soon');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
