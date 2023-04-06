import Image from 'next/image';

import BackButton from '@/components/button/BackButton';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

import bgTexturedPaper from '~/images/background/bg-textured-paper.jpg';

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
    <div>
      <div className='mx-auto w-10/12'>
        <BackButton />
      </div>
      <div className='relative mx-auto h-full w-10/12 shadow-lg shadow-black/50'>
        <Image
          src={bgTexturedPaper}
          alt='textured paper'
          fill
          className='absolute object-cover'
          placeholder='blur'
        />
        <div className='relative z-20 mx-12 lg:mx-24 lg:flex'>
          {itemDetail.data.type === 'photo' && (
            <>
              <div className='my-auto w-full lg:w-3/4'>
                <Image
                  src={itemDetail.data.src || ''}
                  width={500}
                  height={500}
                  alt='image'
                  className='mx-auto w-full object-contain lg:my-16'
                />
              </div>
              <div className='mx-auto w-full lg:w-1/4'>
                <p className='my-16 text-xl font-semibold md:text-3xl lg:ml-10'>
                  {itemDetail.data.caption}
                </p>
              </div>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis illo ipsam error deserunt voluptas, reiciendis
                  doloribus eos nobis voluptatum laudantium mollitia incidunt
                  vero maiores accusantium odit vel nostrum! Cumque,
                  reprehenderit!
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
