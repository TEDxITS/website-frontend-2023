'use client';

import { useQuery } from '@tanstack/react-query';

import MerchCarouselContainer from '@/containers/dashboard/merch/MerchCarouselContainer';
import MerchItemContainer from '@/containers/dashboard/merch/MerchItemContainer';

import { localApi } from '@/utils/local-api';

import TedIcon from '~/images/logo/tedxits-text-white.svg';

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
    <div className='z-20 flex min-h-screen w-full flex-col items-center gap-3 px-7 py-3 text-white'>
      <TedIcon className='h-14 w-20 md:h-20 md:w-20' />
      <div className='bg-gradient-50-years-to-r lg:-px-8 z-10 flex rounded-3xl py-1 px-4 md:mb-3 md:py-2 md:px-6 lg:mb-4 lg:py-3'>
        <span className='mx-auto block text-center font-quaker text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
          Cosmo Venture Pack
        </span>
      </div>
      <MerchCarouselContainer merchandise={merchQuery.data.data} />
      <MerchItemContainer merchandise={merchQuery.data.data} />
    </div>
  );
}
