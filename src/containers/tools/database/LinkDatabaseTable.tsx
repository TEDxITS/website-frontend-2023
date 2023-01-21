import DeleteExample from '@/containers/tools/database/DeleteExample';

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
    <section>
      <h1 className='text-cwhite'>Short Link Database</h1>
      <p className='text-cwhite'>{JSON.stringify(allUrl)}</p>
      {allUrl.data &&
        allUrl.data.map((url) => <DeleteExample key={url.id} id={url.id} />)}
    </section>
  );
}
