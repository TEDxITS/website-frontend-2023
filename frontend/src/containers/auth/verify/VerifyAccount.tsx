'use client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

import api from '@/utils/api';

export default function Verify() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams ? searchParams.get('token') : '';

  React.useEffect(() => {
    async function fetchData() {
      try {
        await api.get(`/auth/verify-account/${token}`);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    fetchData()
      .then(() => toast.success('Verification successful'))
      .catch((e) => toast.error(e.response.data.message))
      .finally(() => router.push('/auth/login'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className='text-center text-white'>
        Please wait while we verify your information
      </p>
    </div>
  );
}
