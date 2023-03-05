import LinkDatabaseTable from '@/containers/admin/links/LinkDatabaseTable';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

async function getAllUrl() {
  try {
    const result = await prisma.url.findMany();
    if (result.length > 0) {
      return createResponse(200, 'The urls retrieved successfully', result);
    }
    return createResponse(404, 'There is no urls', result);
  } catch (e) {
    return createResponse(500, 'Internal Server Error', null);
  }
}

export default async function LinkDatabaseContainer() {
  const allUrl = await getAllUrl();
  if (!allUrl.data) {
    return (
      <p className='py-10 text-center text-lg text-cwhite'>
        {allUrl.status} | {allUrl.message}
      </p>
    );
  }
  return <LinkDatabaseTable data={allUrl.data ? allUrl.data : []} />;
}
