'use client';
import { Tab } from '@headlessui/react';
import React from 'react';

import { callForLocalSpeakerTabs } from '@/data/call-for-local-speaker';

import clsxm from '@/utils/clsxm';

export default function CFLSTabs() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleNext = () => {
    if (selectedIndex === callForLocalSpeakerTabs.length - 1) {
      return;
    }
    setSelectedIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (selectedIndex === 0) {
      return;
    }
    setSelectedIndex((prev) => prev - 1);
  };

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <div className='w-full space-y-8'>
        <Tab.Panels className='bb noisy flex flex-col rounded-lg bg-cblue py-7 px-24'>
          <section className='bb h-[24rem] overflow-y-auto bg-white'>
            {callForLocalSpeakerTabs.map((tab) => (
              <Tab.Panel key={tab.title}>{tab.component}</Tab.Panel>
            ))}
          </section>
          <section>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </section>
        </Tab.Panels>
        <Tab.List className='grid grid-cols-2 sm:grid-cols-4'>
          {callForLocalSpeakerTabs.map((tab) => (
            <Tab
              key={tab.title}
              className={clsxm(
                tab.title === 'Call For Local Speaker' && 'hidden'
              )}
            >
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
}
