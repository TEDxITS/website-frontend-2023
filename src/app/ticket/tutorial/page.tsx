import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Ticket Purchase Tutorial',
  '',
  '/ticket/tutorial'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function TutorialPage() {
  return <section></section>;
}
