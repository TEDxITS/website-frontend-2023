'use client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

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
    <div className='bg-cwhite'>
      <p>{id}</p>
      <button onClick={deleteUrl}>Delete</button>
    </div>
  );
}
