import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata('Dashboard', '', '/dashboard');
export const metadata: Metadata = {
  ...metadataObject,
};

export default function ProfilePage() {
  return (
    <section className='layout z-20'>
      <h1 className='mb-5 font-baron text-cwhite'>PROFILE</h1>
    </section>
  );
}
