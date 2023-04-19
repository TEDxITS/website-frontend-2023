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
    cell: (props) => (
      <span
        className={`${
          (props.getValue() as string) == 'TERVERIFIKASI'
            ? 'bg-cgreen/30 text-cgreen'
            : (props.getValue() as string) == 'MENUNGGU_PEMBAYARAN'
            ? 'bg-cred/30 text-cred'
            : 'bg-cyellow/30 text-cyellow'
        } overflow-visible rounded-3xl px-4 py-3 text-xs font-medium text-cwhite`}
      >
        {props.getValue() as string}
      </span>
    ),
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
