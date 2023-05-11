'use client';

import { useQuery } from '@tanstack/react-query';

import { localApi } from '@/utils/local-api';

export default function MerchGridContainer() {
  const merchQuery = useQuery({
    queryKey: ['merch'],
    queryFn: async () => {
      try {
        const { data } = await localApi.get(`/merch`);
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  });

  return (
    <section className='text-cwhite'>{JSON.stringify(merchQuery.data)}</section>
  );
}
