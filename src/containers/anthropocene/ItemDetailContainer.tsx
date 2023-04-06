/* eslint-disable @next/next/no-img-element */
import BackButton from '@/components/button/BackButton';

import clsxm from '@/utils/clsxm';
import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

function convertYoutubeLinkToEmbed(link: string) {
  const videoId = link.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    return `https://www.youtube.com/embed/${videoId.substring(
      0,
      ampersandPosition
    )}`;
  }
  return `https://www.youtube.com/embed/${videoId}`;
}

async function getItemById(id: string) {
  try {
    const result = await prisma.anthropocene.findUnique({
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

export default async function ItemDetailContainer({
  itemId,
}: {
  itemId: string;
}) {
  const itemDetail = await getItemById(itemId);
  if (!itemDetail.data) {
    return (
      <p className='py-10 text-center text-lg'>
        {itemDetail.status} | {itemDetail.message}
      </p>
    );
  }

  return (
    <div className='py-10 sm:mb-16 md:h-screen'>
      <div className='mx-auto mb-10 flex w-10/12 justify-end'>
        <BackButton />
      </div>
      <div className='relative mx-auto h-[90%] w-10/12'>
        <div className='relative z-20 h-full md:flex'>
          {itemDetail.data.type === 'photo' && (
            <>
              <div
                className={clsxm(
                  'relative mb-5 flex h-full w-full justify-center p-3 sm:mb-0',
                  itemDetail.data.caption && 'md:w-3/4'
                )}
              >
                <img
                  src={itemDetail.data.src || ''}
                  alt='image'
                  className='border-[20px] border-cwhite bg-cwhite object-contain shadow-xl'
                />
              </div>
              {itemDetail.data.caption && (
                <div className='mx-auto w-full bg-textured-paper p-3 shadow-lg shadow-black/50 sm:p-5 md:w-1/4'>
                  <p className='text-xl font-semibold md:text-3xl'>
                    {itemDetail.data.caption}
                  </p>
                </div>
              )}
            </>
          )}
          {itemDetail.data.type === 'video' && (
            <>
              <div className='my-auto w-full lg:w-3/4'>
                <iframe
                  title='Embedded Video'
                  src={convertYoutubeLinkToEmbed(itemDetail.data.src || '')}
                  allowFullScreen
                  className='my-16 h-[500px] w-full object-contain'
                />
              </div>
              <div className='mx-auto w-full lg:w-1/4'>
                <p className='my-16 ml-10 text-xl font-semibold md:text-3xl'>
                  {itemDetail.data.caption}
                </p>
              </div>
            </>
          )}
          {itemDetail.data.type === 'caption' && (
            <div className='mx-auto my-16 min-h-full'>
              <p className='text-center text-xl font-semibold md:text-3xl'>
                {itemDetail.data.caption}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
