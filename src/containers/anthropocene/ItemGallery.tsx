'use client';
import { Anthropocene } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import UnstyledLink from '@/components/link/UnstyledLink';
import AddItemModal from '@/containers/admin/anthropocene/AddItemModal';
import DeleteItemButton from '@/containers/admin/anthropocene/DeleteItemButton';
import EditItemModal from '@/containers/admin/anthropocene/EditItemModal';

import { useFirebaseAuthContext } from '@/context/FirebaseAuthContext';

import bgTexturedPaper from '~/images/background/bg-textured-paper.jpg';
/* eslint-disable @next/next/no-img-element */

interface ItemGalleryProps {
  items: Anthropocene[];
}

export default function ItemGallery({ items }: ItemGalleryProps) {
  const { user } = useFirebaseAuthContext();
  const userRole = user?.role;
  const [type, setType] = useState<string>('all');
  const [filterItem, setFilterItem] = useState<Anthropocene[]>([]);

  const filter = [
    { type: 'all' },
    { type: 'video' },
    { type: 'photo' },
    { type: 'caption' },
    { type: 'article' },
  ];

  useEffect(() => {
    const filtered = items.filter((data) => data.type.includes(type));
    if (type === 'all') {
      setFilterItem(items);
    } else {
      setFilterItem(filtered);
    }
  }, [type, items]);

  return (
    <>
      {userRole === 'admin' && (
        <div className='layout my-2 flex justify-end'>
          <AddItemModal />
        </div>
      )}
      <div className='min-h-screen w-full sm:px-5 lg:px-10'>
        <div className='inline-flex w-full flex-col items-center gap-2'>
          <p className='mr-1 text-lg font-semibold max-md:text-sm'>
            Filter by:
          </p>
          <div className=''>
            {filter.map((item) => (
              <div key={item.type} className='mx-2 inline-flex max-md:mx-1'>
                <button
                  className={`cursor-pointer rounded bg-white px-3 py-1.5 font-bold uppercase tracking-wide hover:bg-opacity-75 focus:bg-red-500 focus:text-white max-md:px-1.5 max-md:text-xs ${
                    type === item.type ? 'bg-red-500 text-white' : ''
                  }`}
                  onClick={() => setType(item.type)}
                >
                  {item.type}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className='mx-auto mt-3 grid w-fit grid-cols-1 gap-5 p-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {filterItem.map((item) => {
            if (item.type === 'caption') {
              return (
                <div key={item.id}>
                  <div className='w-56 overflow-hidden transition duration-200 ease-in hover:scale-110'>
                    <div className='relative mx-auto h-64 w-56 bg-white p-3 shadow-lg md:w-56'>
                      <Image
                        src={bgTexturedPaper}
                        alt='textured paper'
                        fill
                        className='absolute z-0 object-cover opacity-100'
                        placeholder='blur'
                      />
                      <div className='relative flex h-full w-full items-center'>
                        <div className='relative mx-auto p-4'>
                          <h1 className='mx-auto text-center font-baron text-xl font-semibold'>
                            {item.caption}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  {userRole === 'admin' && (
                    <div className='mt-5 flex justify-end gap-x-2'>
                      <EditItemModal initialValue={item} />
                      <DeleteItemButton
                        id={item.id}
                        sourceItem={item.src || ''}
                      />
                    </div>
                  )}
                </div>
              );
            } else if (item.type === 'article') {
              return (
                <div key={item.id}>
                  <UnstyledLink href={item.articleSrc || ''} openNewTab>
                    <div className='w-56 transition duration-200 ease-in hover:scale-110'>
                      <div className='relative mx-auto h-64 w-56 bg-white p-3 shadow-lg md:w-56'>
                        <Image
                          src={bgTexturedPaper}
                          alt='textured paper'
                          fill
                          className='absolute z-0 object-cover opacity-100'
                          placeholder='blur'
                        />
                        <div className='relative flex flex h-full items-center justify-center'>
                          <img
                            alt={item.caption}
                            src={item.thumbnail || ''}
                            className='h-full w-full object-contain'
                          />
                        </div>
                      </div>
                    </div>
                  </UnstyledLink>
                  {userRole === 'admin' && (
                    <div className='mt-5 flex justify-end gap-x-2'>
                      <EditItemModal initialValue={item} />
                      <DeleteItemButton
                        id={item.id}
                        sourceItem={item.src || ''}
                      />
                    </div>
                  )}
                </div>
              );
            } else if (item.type === 'photo') {
              return (
                <div key={item.id}>
                  <Link href={`/anthropocene/${item.id}`}>
                    <div className='w-56 transition duration-200 ease-in hover:scale-110'>
                      <div className='relative mx-auto h-64 w-56 bg-white p-3 shadow-lg md:w-56'>
                        <Image
                          src={bgTexturedPaper}
                          alt='textured paper'
                          fill
                          className='absolute z-0 object-cover opacity-100'
                          placeholder='blur'
                        />
                        <div className='relative flex flex h-full items-center justify-center'>
                          <img
                            alt={item.caption}
                            src={item.thumbnail || ''}
                            className='h-full w-full object-contain'
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  {userRole === 'admin' && (
                    <div className='mt-5 flex justify-end gap-x-2'>
                      <EditItemModal initialValue={item} />
                      <DeleteItemButton
                        id={item.id}
                        sourceItem={item.src || ''}
                      />
                    </div>
                  )}
                </div>
              );
            } else if (item.type === 'video') {
              return (
                <div key={item.id}>
                  <Link href={`/anthropocene/${item.id}`}>
                    <div className='w-56 transition duration-200 ease-in hover:scale-110'>
                      <div className='relative mx-auto h-64 w-56 bg-white p-3 shadow-lg md:w-56'>
                        <Image
                          src={bgTexturedPaper}
                          alt='textured paper'
                          fill
                          className='absolute z-0 object-cover opacity-100'
                          placeholder='blur'
                        />
                        <div className='relative flex flex h-full items-center justify-center'>
                          <img
                            alt={item.caption}
                            src={item.thumbnail || ''}
                            className='h-full w-full object-contain'
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                  {userRole === 'admin' && (
                    <div className='mt-5 flex justify-end gap-x-2'>
                      <EditItemModal initialValue={item} />
                      <DeleteItemButton
                        id={item.id}
                        sourceItem={item.src || ''}
                      />
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
