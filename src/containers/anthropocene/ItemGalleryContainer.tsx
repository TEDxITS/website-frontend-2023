import ItemGallery from '@/containers/anthropocene/ItemGallery';

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

export default async function ItemGalleryContainer() {
  const items = await getItems();
  if (!items.data) {
    return (
      <p className='py-10 text-center text-lg'>
        {items.status} | {items.message}
      </p>
    );
  }
  return <ItemGallery items={items.data} />;
}
