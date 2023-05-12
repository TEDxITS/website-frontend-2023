'use client';

import { useQuery } from '@tanstack/react-query';

import MerchCarouselContainer from '@/containers/dashboard/merch/MerchCarouselContainer';
import MerchItemContainer from '@/containers/dashboard/merch/MerchItemContainer';

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

  if (merchQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (merchQuery.isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className='flex min-h-screen w-full flex-col p-4 text-white'>
      <span className='mx-auto text-2xl'>Merch Catalogue</span>
      <MerchCarouselContainer merchandise={merchQuery.data.data} />
      <MerchItemContainer merchandise={merchQuery.data.data} />
    </div>
  );
}
