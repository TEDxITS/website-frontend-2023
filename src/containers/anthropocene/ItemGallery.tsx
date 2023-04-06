'use client';
import { Anthropocene } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import bgTexturedPaper from '~/images/background/bg-textured-paper.jpg';
/* eslint-disable @next/next/no-img-element */

interface ItemGalleryProps {
  items: Anthropocene[];
}

export default function ItemGallery({ items }: ItemGalleryProps) {
  const [type, setType] = useState<string>('all');
  const [filterItem, setFilterItem] = useState<Anthropocene[]>([]);

  const filter = [
    { type: 'all' },
    { type: 'video' },
    { type: 'photo' },
    { type: 'caption' },
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
    <div className='min-h-screen w-full sm:px-5 lg:px-10'>
      <div className='inline-flex w-full flex-col items-center gap-2'>
        <p className='mr-1 text-lg font-semibold max-md:text-sm'>Filter by:</p>
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
      <div className='mx-auto mt-3 grid w-fit grid-cols-1 gap-7 pt-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-1 xl:gap-y-10 min-[1650px]:grid-cols-5'>
        {filterItem.map((item) => {
          if (item.type === 'caption') {
            return (
              <Link key={item.id} href={`/anthropocene/${item.id}`}>
                <div className=' h-80 w-80 overflow-hidden transition delay-200 duration-200 ease-in hover:scale-110'>
                  <div className='relative mx-auto h-72 w-64 bg-white p-3 shadow-lg md:w-72'>
                    <Image
                      src={bgTexturedPaper}
                      alt='textured paper'
                      fill
                      className='absolute z-0 object-cover opacity-100'
                      placeholder='blur'
                    />
                    <div className='relative flex h-full w-full items-center'>
                      <div className='relative mx-auto border border-black p-4'>
                        <h1 className='mx-auto text-center text-xl font-semibold'>
                          {item.caption}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          } else if (item.type === 'photo') {
            return (
              <Link key={item.id} href={`/anthropocene/${item.id}`}>
                <div className=' h-80 w-80 overflow-hidden transition delay-200 duration-200 ease-in hover:scale-110'>
                  <div className='relative mx-auto h-72 w-64 bg-white p-3 shadow-lg md:w-72'>
                    <Image
                      src={bgTexturedPaper}
                      alt='textured paper'
                      fill
                      className='absolute z-0 object-cover opacity-100'
                      placeholder='blur'
                    />
                    <div className='relativ flex h-full items-center'>
                      <img alt={item.caption} src={item.src} className='z-10' />
                    </div>
                    <div className='mx-auto mt-4 flex w-full text-base'>
                      <span className='mx-auto font-primary font-semibold text-cblack'>
                        {' '}
                        {item.caption}{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          } else if (item.type === 'video') {
            return (
              <Link key={item.id} href={`/anthropocene/${item.id}`}>
                <div className=' h-80 w-80 overflow-hidden transition delay-200 duration-200 ease-in hover:scale-110'>
                  <div className='relative mx-auto h-72 w-64 bg-white p-3 shadow-lg md:w-72'>
                    <Image
                      src={bgTexturedPaper}
                      alt='textured paper'
                      fill
                      className='absolute z-0 object-cover opacity-100'
                      placeholder='blur'
                    />
                    <div className='relativ flex h-full items-center'>
                      <img
                        alt={item.caption}
                        src={item.thumbnail}
                        className='z-10'
                      />
                    </div>
                    <div className='mx-auto mt-4 flex w-full text-base'>
                      <span className='mx-auto font-primary font-semibold text-cblack'>
                        {' '}
                        {item.caption}{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
