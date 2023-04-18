'use client';
import { ColumnDef } from '@tanstack/react-table';

import UnstyledLink from '@/components/link/UnstyledLink';
import Table from '@/components/table/Table';
import DetailsTicketButton from '@/containers/admin/tickets/DetailsTicketButton';
import VerificationButton from '@/containers/admin/tickets/VerificationButton';

import { currencyFormat } from '@/utils/currency';

import { BookingData } from '@/types/dashboard.types';

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
    cell: (props) => currencyFormat(props.getValue() as number),
  },
  {
    accessorKey: 'paymentProof',
    header: 'Payment Proof',
    cell: (props) => (
      <UnstyledLink
        href={props.getValue() as string}
        openNewTab
        className='hover:underline'
      >
        {props.getValue() as string}
      </UnstyledLink>
    ),
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

export default function LinkDatabaseTable({ data }: { data: BookingData[] }) {
  return <Table data={data} columns={columns} withFilter withPagination />;
}
