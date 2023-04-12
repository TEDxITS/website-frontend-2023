'use client';
import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Our Pilots',
  '',
  '/our-pilots'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function OurPilotsPage() {
  return <section></section>;
}
