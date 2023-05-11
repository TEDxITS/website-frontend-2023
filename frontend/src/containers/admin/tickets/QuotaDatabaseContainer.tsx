import QuotaDatabaseTable from '@/containers/admin/tickets/QuotaDatabaseTable';

import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

import { TicketData } from '@/types/dashboard.types';

async function getAllTicketType() {
  try {
    const result = await prisma.ticket.findMany();
    return createResponse(200, 'The tickets retrieved successfully', result);
  } catch (e) {
    return createResponse(500, 'Internal Server Error', null);
  }
}

export async function QuotaDatabaseContainer() {
  const { data } = await getAllTicketType();

  return <QuotaDatabaseTable data={(data as TicketData[] | null) || []} />;
}
