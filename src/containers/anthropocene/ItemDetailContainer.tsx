import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

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
  return <>{JSON.stringify(itemDetail.data)}</>;
}
