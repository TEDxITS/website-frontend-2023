'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';

import CircularStarfieldContainer from '@/containers/stars/CircularStarfieldContainer';

import FullTEDLogo from '@/assets/logo/FullTEDLogo';
import { getUrl } from '@/utils/short-url';

// The Server Way
// import { redirect } from 'next/navigation';
// import React from 'react';
// import ExternalRedirect from '@/components/utils/ExternalRedirect';

// import prisma from '@/utils/prisma';
// import createResponse from '@/utils/response';

// async function getUrl(short_url: string) {
//   try {
//     const result = await prisma.url.findUnique({
//       where: {
//         short_url: short_url,
//       },
//     });
//     if (result) {
//       return createResponse(200, 'The url retrieved successfully', result);
//     }
//     return createResponse(
//       404,
//       'There is no url that matched with the short url',
//       null
//     );
//   } catch (e) {
//     return createResponse(500, 'Internal Server Error', null);
//   }
// }

// export default async function LinkShortenerPage({
//   params,
// }: {
//   params: { short_url: string };
// }) {
//   const data = await getUrl(params.short_url);

//   if (data.data && data.data.url) {
//     return <ExternalRedirect url={data.data.url} />;
//   }
//   redirect('/links');
// }

// The Client Way
export default function ShortUrlPage({
  params,
}: {
  params: { short_url: string };
}) {
  const router = useRouter();
  React.useEffect(() => {
    getUrl(params.short_url || '')
      .then((data) => {
        if (data.data && data.data.url) {
          location.replace(data.data.url);
          return;
        }
      })
      .catch((err) => {
        router.push('/links');
        toast.error(err.message);
      });
  }, [params.short_url, router]);
  return (
    <CircularStarfieldContainer>
      <main className='relative h-screen w-screen bg-black'>
        <div className='absolute z-30 flex h-full w-full flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <FullTEDLogo variant='text' className='h-16 w-72' />
            <h2 className='mb-20 font-baron text-green-300'>LINK SHORTENER</h2>
            <div className='w-fit'>
              <p className='typewriter-fast font-medium text-green-200'>
                Loading...
              </p>
            </div>
          </div>
        </div>
      </main>
    </CircularStarfieldContainer>
  );
}
