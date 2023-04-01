'use client';
import { Anthropocene } from '@prisma/client';

interface ItemDatabaseTableProps {
  items: Anthropocene[];
}

export default function ItemDatabaseTable({ items }: ItemDatabaseTableProps) {
  return <p className='text-white'>{JSON.stringify(items)}</p>;
}
