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
      <div className='flex items-center justify-center gap-3 text-xl font-bold'>
        <TedIcon className='h-14 w-20 md:h-20 md:w-20' />
        <span>Merch Vol. 2</span>
      </div>
      <div className='bg-gradient-50-years-to-r z-20 mb-10 flex items-center justify-center rounded-[3rem] py-2 px-5 md:mb-0 md:py-4 md:px-10'>
        <span className='mx-auto flex items-center justify-center text-center font-quaker text-3xl sm:text-3xl md:text-4xl lg:text-7xl'>
          Cosmo Venture Pack
        </span>
      </div>
      <MerchCarouselContainer merchandise={merchQuery.data.data} />
      <MerchItemContainer merchandise={merchQuery.data.data} />
    </div>
  );
}
