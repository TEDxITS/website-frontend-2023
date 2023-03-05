'use client';
import { ColumnDef } from '@tanstack/react-table';
import { MdContentCopy } from 'react-icons/md';

import UnderlineLink from '@/components/link/UnderlineLink';
import UnstyledLink from '@/components/link/UnstyledLink';
import Table from '@/components/table/Table';
import DeleteButton from '@/containers/admin/links/DeleteButton';

import copyToClipboard from '@/utils/copy';

import { ShortUrl } from '@/types/short-url.types';

type ShortUrlTableProps = Omit<ShortUrl, 'created_at'>;

const columns: ColumnDef<ShortUrlTableProps>[] = [
  {
    accessorKey: 'url',
    header: 'Source Url',
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
    accessorKey: 'short_url',
    header: 'Shortened Url',
    cell: (props) => (
      <UnderlineLink href={('/links/' + props.getValue()) as string}>
        {'tedxits.org/links/' + props.getValue()}
      </UnderlineLink>
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
            copyToClipboard(
              window.location.origin + '/links/' + props.row.original.short_url
            )
          }
        >
          {/* <button type='button'> */}
          <MdContentCopy className='h-5 w-5 text-green-500 ' />
        </button>
        <DeleteButton
          id={props.getValue() as string}
          shortUrl={props.row.original.short_url}
        />
      </div>
    ),
  },
];

export default function LinkDatabaseTable({ data }: { data: ShortUrl[] | [] }) {
  return <Table data={data} columns={columns} withFilter withPagination />;
}
