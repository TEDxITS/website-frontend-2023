'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

import copyToClipboard from '@/utils/copy';
import { deleteShortUrl } from '@/utils/short-url';

interface IShortLinkCardProps {
  id: string;
  url: string;
  short_url: string;
}

export default function ShortLinkCard({
  id,
  url,
  short_url,
}: IShortLinkCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const deleteShortLink = async () => {
    setIsLoading(true);
    const deleteShortUrlPromise = deleteShortUrl(id);
    toast
      .promise(deleteShortUrlPromise, {
        loading: 'Loading..',
        success: (data) => data.message,
        error: (e) => e.message,
      })
      .then(() => router.refresh())
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <h4>{url}</h4>
      <p>{short_url}</p>
      <button onClick={async () => await copyToClipboard(short_url)}>
        copy
      </button>
      <button onClick={() => deleteShortLink()} disabled={isLoading}>
        delete
      </button>
    </div>
  );
}
