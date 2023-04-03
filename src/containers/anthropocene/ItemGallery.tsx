'use client';
import { Anthropocene } from '@prisma/client';
import { useEffect, useState } from 'react';

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
    setFilterItem(filtered);
  }, [type, items]);

  return (
    <div className='p-2'>
      <div className='inline-flex items-center gap-2'>
        <p className='mr-1 text-lg font-semibold max-md:text-sm'>Filter by:</p>
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
      <div>
        {type === 'all'
          ? items.map((item) => (
              <div key={item.type}>
                <h1>Tipe file: {item.type}</h1>
                <p>{item.id}</p>
              </div>
            ))
          : filterItem.map((item) => (
              <div key={item.id}>
                <h1>Tipe file: {item.type}</h1>
                <p>{item.id}</p>
              </div>
            ))}
      </div>
    </div>
  );
}
