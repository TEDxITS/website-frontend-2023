'use client';

import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import { MdContentCopy } from 'react-icons/md';

import DeleteExample from '@/containers/tools/database/DeleteButton';

import copyToClipboard from '@/utils/copy';

export default function Table({ urlData }: { urlData: any }) {
  const [originUrl, setOriginUrl] = useState('tedxits.com');
  useEffect(() => setOriginUrl(window.location.origin), []);
  // if (typeof window !== "undefined") {
  // }

  return (
    <table className='w-full table-auto border-collapse border border-cwhite text-cwhite'>
      <thead>
        <tr>
          <th className=' border border-cwhite'>Source URL</th>
          <th className=' border border-cwhite'>Shorten URL</th>
          <th className=' border border-cwhite'>Action</th>
        </tr>
      </thead>
      <tbody>
        {urlData.map((url: any) => {
          return (
            <tr key={url.id}>
              <td className='border border-cwhite text-center'>
                <Link
                  target='_blank'
                  href={url.url}
                  className='cursor-newtab hover:underline'
                >
                  {url.url}
                </Link>
              </td>
              <td className='break-words border border-cwhite text-center'>
                <Link
                  target='_blank'
                  href={originUrl + '/links/' + url.short_url}
                  className=' cursor-newtab break-words hover:text-cred hover:underline'
                >
                  {originUrl + '/links/' + url.short_url}
                </Link>
              </td>
              <td className='border border-cwhite p-4 md:px-6 md:py-4'>
                <div className='flex justify-around gap-4'>
                  <button
                    onClick={() =>
                      copyToClipboard(originUrl + '/links/' + url.short_url)
                    }
                  >
                    {/* <button type='button'> */}
                    <MdContentCopy className='h-5 w-5 text-green-200  transition duration-300 hover:-translate-y-1' />
                  </button>
                  <DeleteExample id={url.id} />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
