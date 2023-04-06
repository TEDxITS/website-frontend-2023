'use client';
import { useRouter } from 'next/navigation';

import Button from '@/components/button/Button';

export default function BackButton() {
  const router = useRouter();
  return (
    <Button variant='primary' onClick={() => router.push('/anthropocene')}>
      ← Back
    </Button>
  );
}
