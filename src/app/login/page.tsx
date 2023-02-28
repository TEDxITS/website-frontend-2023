import type { Metadata } from 'next';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata('Login', '', '/login');
export const metadata: Metadata = {
  ...metadataObject,
};

export default function LoginPage() {
  return (
    <main className='flex h-screen items-center justify-center bg-cblack'>
      <h1 className='font-baron text-cwhite'>Login</h1>
      <UnstyledLink href='/'>
        <Button>Back</Button>
      </UnstyledLink>
    </main>
  );
}
