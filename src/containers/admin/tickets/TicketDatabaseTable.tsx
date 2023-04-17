'use client';
import { ColumnDef } from '@tanstack/react-table';

import Table from '@/components/table/Table';
import DetailsTicketButton from '@/containers/admin/tickets/DetailsTicketButton';
import VerificationButton from '@/containers/admin/tickets/VerificationButton';

type Ticket = {
  id: string;
  orderingUser: string;
  totalPrice: number;
  status: string;
  paymentProof: string | null;
  verificator: string | null;
};

const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: 'totalPrice',
    header: 'Total Price',
  },
  {
    accessorKey: 'paymentProof',
    header: 'Payment Proof',
  },
  {
    accessorKey: 'verificator',
    header: 'Verificator',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'id',
    header: 'Action',
    cell: (props) => (
      <VerificationButton
        id={props.getValue() as string}
        sourceItem={props.row.original.status}
      />
    ),
  },
  {
    accessorKey: 'id',
    header: '',
    cell: (props) => (
      <DetailsTicketButton
        id={props.getValue() as string}
        sourceItem={props.row.original.status}
      />
    ),
  },
];

export default function LinkDatabaseTable({ data }: { data: Ticket[] | [] }) {
  return <Table data={data} columns={columns} withFilter withPagination />;
}
