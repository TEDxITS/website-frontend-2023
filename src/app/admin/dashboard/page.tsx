import type { Metadata } from 'next';

import GreetingText from '@/containers/admin/GreetingText';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Admin Dashboard',
  '',
  '/admin'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default function DashboardPage() {
  return (
    <section className='layout z-20'>
      <GreetingText />
    </section>
  );
}
