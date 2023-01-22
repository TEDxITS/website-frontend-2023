import Table from '@/components/table/Table';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

async function getAllUrl(keyword?: string) {
  try {
    const result = await prisma.url.findMany({
      where: {
        OR: [
          {
            short_url: {
              contains: keyword,
              mode: 'insensitive',
            },
          },
          {
            url: {
              contains: keyword,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
    if (result) {
      return createResponse(200, 'The urls retrieved successfully', result);
    }
    return createResponse(
      404,
      keyword
        ? 'There is no urls that matched with the keywords'
        : 'There is no urls',
      null
    );
  } catch (e) {
    return createResponse(500, 'Internal Server Error', null);
  }
}

export default async function LinkDatabaseTable({
  keyword,
}: {
  keyword: string;
}) {
  const allUrl = await getAllUrl(keyword);
  return (
    <section className='lg:px-24 '>
      <h1 className='pb-4 text-cwhite'>Short Link Database</h1>
      <div className='overflow-auto'>
        <Table urlData={allUrl.data} />
      </div>
    </section>
  );
}
