import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata('Ticket', '', '/ticket');
export const metadata: Metadata = {
  ...metadataObject,
};

export default async function TicketPage() {
  return <section></section>;
}
