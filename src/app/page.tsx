'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function HomePage() {
  const router = useRouter();
  React.useEffect(() => {
    router.push('/coming-soon');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
