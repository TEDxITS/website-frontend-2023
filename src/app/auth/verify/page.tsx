import type { Metadata } from 'next';

import Verify from '@/containers/auth/verify/VerifyAccount';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata(
  'Verify Account',
  '',
  '/verify'
);
export const metadata: Metadata = {
  ...metadataObject,
};

export default async function VerifyUserPage() {
  return (
    <section className='z-20 flex h-[37rem] flex-col items-center justify-center xl:h-full'>
      <h1 className='mb-2 text-center font-baron text-4xl text-cwhite sm:mb-6 sm:text-6xl'>
        Verify Your Account
      </h1>
      <div className='w-11/12 sm:w-1/3'>
        <Verify />
      </div>
    </section>
  );
}
