'use client';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';

import { callForLocalSpeakerTabs } from '@/data/call-for-local-speaker';

import {
  BottomGamepad,
  LeftGamepad,
  RightGamepad,
} from '@/containers/call-for-local-speaker/parts/Gamepad';

import clsxm from '@/utils/clsxm';

import bgOrnament from '~/images/call-for-local-speaker/bg-ornament.png';
import bgOrnament4 from '~/images/call-for-local-speaker/bg-ornament-4.png';

export default function CFLSTabs({
  initialTabIndex,
}: {
  initialTabIndex: string | number;
}) {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(
    parseInt(initialTabIndex.toString())
  );
  const [isMouseOnTabScreen, setIsMouseOnTabScreen] = React.useState(false);
  const [isScrollingPaused, setIsScrollingPaused] = React.useState(false);
  const scrollableRef = React.useRef<HTMLDivElement>(null);
  const gamepadRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isMouseOnTabScreen || isScrollingPaused) return;

    const scrollable = scrollableRef.current;
    if (!scrollable) return;

    const intervalId = setInterval(() => {
      scrollable.scrollTop = scrollable.scrollTop + 1;
    }, 50);

    return () => clearInterval(intervalId);
  }, [isMouseOnTabScreen, isScrollingPaused]);

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

  const scrollUp = () => {
    const scrollable = scrollableRef.current;
    if (!scrollable) return;

    scrollable.scrollTop = scrollable.scrollTop - 20;
  };

  const scrollDown = () => {
    const scrollable = scrollableRef.current;
    if (!scrollable) return;

    scrollable.scrollTop = scrollable.scrollTop + 20;
  };

  const pauseScroll = () => {
    setIsScrollingPaused((prev) => !prev);
  };

  const goToFirstTab = () => {
    setSelectedIndex(0);
  };

  const scrollToGamepad = () => {
    // NOTE: Pause the inside screen scroll first if we want to scroll to some element
    setIsScrollingPaused(true);
    const gamepad = gamepadRef.current;
    if (!gamepad) return;

    window.scrollTo(0, gamepad.offsetTop);
  };

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <div className='relative w-full' ref={gamepadRef}>
        <Image
          src={bgOrnament}
          alt='ornament'
          className='absolute -top-24 -right-56'
          placeholder='blur'
        />
        <Image
          src={bgOrnament4}
          alt='ornament'
          className='absolute bottom-28 -left-32'
          placeholder='blur'
        />
        <Tab.Panels className='noisy relative mb-16 flex flex-col rounded-lg bg-[#4080A4] shadow-lg shadow-black sm:mb-28 md:flex-row md:rounded-[6rem] md:py-5'>
          <LeftGamepad
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            scrollUp={scrollUp}
            scrollDown={scrollDown}
            pauseScroll={pauseScroll}
            isScrollingPaused={isScrollingPaused}
          />
          <section className='w-full rounded-xl bg-[#457493] py-5 px-5 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] sm:px-10 md:w-[70%]'>
            <div
              className='question h-[25rem] overflow-y-auto border-[10px] border-black bg-white'
              ref={scrollableRef}
              onMouseEnter={() => {
                if (window.innerWidth < 768) return;
                setIsMouseOnTabScreen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth < 768) return;
                setIsMouseOnTabScreen(false);
              }}
              onClick={() => setIsMouseOnTabScreen((prev) => !prev)}
            >
              {callForLocalSpeakerTabs.map((tab) => (
                <Tab.Panel key={tab.title} className='h-full'>
                  {tab.component}
                </Tab.Panel>
              ))}
            </div>
          </section>
          <RightGamepad goToFirstTab={goToFirstTab} />
          {/* Gamepad for Tablet and Mobile View */}
          <BottomGamepad
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            scrollUp={scrollUp}
            scrollDown={scrollDown}
            pauseScroll={pauseScroll}
            isScrollingPaused={isScrollingPaused}
            goToFirstTab={goToFirstTab}
          />
        </Tab.Panels>
        <Tab.List className='relative grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4'>
          {callForLocalSpeakerTabs.map((tab) => (
            <Tab
              onClick={scrollToGamepad}
              key={tab.title}
              className={clsxm(
                'flex flex-col items-center gap-y-4 transition-transform ease-in-out hover:-translate-y-5',
                tab.title === 'Call For Local Speaker' && 'hidden'
              )}
            >
              <div className='w-fit rounded-full bg-cwhite p-6 shadow-lg shadow-black/50 sm:p-8'>
                <div className='relative h-10 w-10 sm:h-16 sm:w-16'>
                  <Image
                    src={tab.icon}
                    alt={tab.title}
                    fill
                    className='absolute object-contain'
                  />
                </div>
              </div>
              <p className='text-center font-semibold'>{tab.title}</p>
            </Tab>
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
}
