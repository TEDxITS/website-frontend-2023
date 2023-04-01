import ItemDatabaseTable from '@/containers/admin/anthropocene/ItemDatabaseTable';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

async function getItems() {
  try {
    const result = await prisma.anthropocene.findMany();
    if (result) {
      return createResponse(200, 'The items retrieved successfully', result);
    }
    return createResponse(404, 'The items not found', result);
  } catch (e) {
    return createResponse(500, 'Internal Server Error', null);
  }
}

export default async function ItemDatabaseContainer() {
  const items = await getItems();
  if (!items.data) {
    return (
      <p className='py-10 text-center text-lg text-cwhite'>
        {items.status} | {items.message}
      </p>
    );
  }
  return <ItemDatabaseTable items={items.data} />;
}
