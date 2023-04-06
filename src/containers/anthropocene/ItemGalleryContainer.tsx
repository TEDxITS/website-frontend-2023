import AddItemModal from '@/containers/admin/anthropocene/AddItemModal';
import ItemGallery from '@/containers/anthropocene/ItemGallery';

import { getCurrentUser } from '@/utils/firebase/server';
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
  const user = await getCurrentUser();
  if (!items.data) {
    return (
      <p className='py-10 text-center text-lg'>
        {items.status} | {items.message}
      </p>
    );
  }
  return (
    <>
      {user && user.role === 'admin' && (
        <div className='layout my-2 flex justify-end'>
          <AddItemModal />
        </div>
      )}
      <ItemGallery items={items.data} userRole={user?.role} />;
    </>
  );
}
