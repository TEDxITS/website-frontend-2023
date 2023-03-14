import { Metadata } from 'next';
import { ImSpinner8 } from 'react-icons/im';

import { generateTemplateMetadata } from '@/utils/metadata';

const metadataObject = generateTemplateMetadata('Loading..', '', '/');
export const metadata: Metadata = {
  ...metadataObject,
};

export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center bg-black'>
      <ImSpinner8 className='h-10 w-10 animate-spin text-cwhite' />
    </div>
  );
}
