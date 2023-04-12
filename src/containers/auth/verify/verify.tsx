'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import api from '@/utils/api';

export default function Verify() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams ? searchParams.get('token') : null;

  useEffect(() => {
    async function fetchData() {
      try {
        await api.get(`/auth/verify-account/${token}`);
        router.push('/auth/login');
      } catch (error) {
        return Promise.reject(error);
      } finally {
        router.push('/auth/login');
        setIsLoading(false);
      }
    }
    fetchData();
  }, [isLoading, router, token]);
  return (
    <div>{isLoading ? <p>Loading...</p> : <p>Verification complete!</p>}</div>
  );
}
