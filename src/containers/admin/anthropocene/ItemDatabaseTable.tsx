'use client';
import { Anthropocene } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { MdContentCopy } from 'react-icons/md';

import UnderlineLink from '@/components/link/UnderlineLink';
import UnstyledLink from '@/components/link/UnstyledLink';
import Table from '@/components/table/Table';
import DeleteItemButton from '@/containers/admin/anthropocene/DeleteItemButton';

import copyToClipboard from '@/utils/copy';

const columns: ColumnDef<Anthropocene>[] = [
  {
    accessorKey: 'src',
    header: 'Source',
    cell: (props) =>
      props.getValue() ? (
        <UnstyledLink
          href={props.getValue() as string}
          openNewTab
          className='hover:underline'
        >
          {props.getValue() as string}
        </UnstyledLink>
      ) : (
        <p>-</p>
      ),
  },
  {
    accessorKey: 'caption',
    header: 'Caption',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'thumbnail',
    header: 'Thumbnail',
    cell: (props) =>
      props.getValue() ? (
        <UnderlineLink href={props.getValue() as string}>
          {props.getValue() as string}
        </UnderlineLink>
      ) : (
        <p>-</p>
      ),
  },
  {
    accessorKey: 'id',
    header: 'Action',
    cell: (props) => (
      <div className='flex'>
        <button
          className='w-1/2 p-1 transition duration-300 hover:-translate-y-1'
          onClick={() =>
            copyToClipboard(props.row.original.src as string, 'Source item')
          }
        >
          <MdContentCopy className='h-5 w-5 text-green-500 ' />
        </button>
        <DeleteItemButton
          id={props.getValue() as string}
          sourceItem={props.row.original.src as string}
        />
      </div>
    ),
  },
];

export default function ItemDatabaseTable({
  data,
}: {
  data: Anthropocene[] | [];
}) {
  return <Table data={data} columns={columns} withFilter withPagination />;
}
