'use client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

import { deleteShortUrl } from '@/utils/short-url';

export default function DeleteExample({ id }: { id: string }) {
  const router = useRouter();
  const deleteUrl = async () => {
    const deleteShortUrlPromise = deleteShortUrl(id);
    toast
      .promise(deleteShortUrlPromise, {
        loading: 'Loading..',
        success: 'Short link generated successfully',
        error: (e) => e.message,
      })
      .then(() => {
        router.refresh();
      })
      .catch((e) => e);
  };
  return (
    <>
      <button onClick={deleteUrl}>
        <MdDelete className='h-5 w-5 text-cred transition duration-300 hover:-translate-y-1' />
      </button>
    </>
  );
}
