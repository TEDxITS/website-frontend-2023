'use client';
import { Anthropocene } from '@prisma/client';

interface ItemGalleryProps {
  items: Anthropocene[];
}

export default function ItemGallery({ items }: ItemGalleryProps) {
  return <>{JSON.stringify(items)}</>;
}
