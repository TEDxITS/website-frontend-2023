'use client';
import { ColumnDef } from '@tanstack/react-table';

import Table from '@/components/table/Table';

import { TicketData } from '@/types/dashboard.types';

const columns: ColumnDef<TicketData>[] = [
  {
    accessorKey: 'name',
    header: 'Ticket',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'quota',
    header: 'Quota',
  },
];

export default function QuotaDatabaseTable({ data }: { data: TicketData[] }) {
  return <Table data={data} columns={columns} withFilter withPagination />;
}
