/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';

import clsxm from '@/utils/clsxm';
import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

async function getItemById(id: string) {
  try {
    const result = await prisma.pEGallery.findUnique({
      where: { id: id },
    });
    if (result) {
      return createResponse(200, 'The item retrieved successfully', result);
    }
    return createResponse(404, 'The item not found', result);
  } catch (e) {
    return createResponse(500, 'Internal Server Error', null);
  }
}

export default async function ArtDetail({ itemId }: { itemId: string }) {
  const itemDetail = await getItemById(itemId);
  if (!itemDetail.data) {
    return (
      <p className='py-10 text-center text-lg'>
        {itemDetail.status} | {itemDetail.message}
      </p>
    );
  }
  return (
    <div className='py-10 text-cwhite sm:mb-16 md:h-screen'>
      <div className='flex items-center justify-center space-x-20 px-7 max-md:flex-col max-md:space-x-0 max-md:space-y-10 sm:px-0'>
        {itemDetail.data.src && (
          <Image
            src={itemDetail.data.src}
            alt='image'
            className='border-[20px] border-cwhite bg-cwhite object-contain shadow-xl'
            width={300}
            height={300}
          />
        )}
        <div
          className={clsxm(
            'space-y-10 max-md:w-full max-md:flex-col max-md:items-center max-md:space-y-5',
            itemDetail?.data?.src ? 'w-2/5 ' : 'w-1/2 text-center'
          )}
        >
          <h1>{itemDetail.data.name}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: itemDetail.data.description || '',
            }}
            className='text-justify'
          />
        </div>
      </div>
    </div>
  );
}
