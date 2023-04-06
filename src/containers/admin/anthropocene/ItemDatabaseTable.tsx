'use client';
import { Anthropocene } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';

import UnderlineLink from '@/components/link/UnderlineLink';
import UnstyledLink from '@/components/link/UnstyledLink';
import Table from '@/components/table/Table';
import DeleteItemButton from '@/containers/admin/anthropocene/DeleteItemButton';
import EditItemModal from '@/containers/admin/anthropocene/EditItemModal';

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
      <div className='flex gap-x-2'>
        <EditItemModal initialValue={props.row.original} />
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
