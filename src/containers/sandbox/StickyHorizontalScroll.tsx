'use client';
import React from 'react';

const calcDynamicHeight = (objectWidth: number) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (
  ref: React.RefObject<HTMLDivElement>,
  setDynamicHeight: React.Dispatch<React.SetStateAction<number | null>>
) => {
  if (ref.current) {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  }
};

const applyScrollListener = (
  ref: React.RefObject<HTMLDivElement>,
  setTranslateX: React.Dispatch<React.SetStateAction<number>>
) => {
  window.addEventListener('scroll', () => {
    if (ref.current) {
      const offsetTop = -ref.current.offsetTop;
      setTranslateX(offsetTop);
    }
  });
};

function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const [dynamicHeight, setDynamicHeight] = React.useState<number | null>(null);
  const [translateX, setTranslateX] = React.useState<number>(0);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const objectRef = React.useRef<HTMLDivElement>(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  React.useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener('resize', resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <div className='relative w-full' style={{ height: `${dynamicHeight}px` }}>
      <div
        className='sticky top-0 h-screen w-full overflow-x-hidden'
        ref={containerRef}
      >
        <div
          className='absolute h-full will-change-transform'
          ref={objectRef}
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SampleCard() {
  return (
    <div
      style={{ width: '100rem' }}
      className='relative mx-20 h-96 shrink-0 bg-black'
    ></div>
  );
}

export default function StickyHorizontalScroll() {
  return (
    <main>
      <div
        style={{
          textAlign: 'center',
          padding: '128px 16px',
          backgroundColor: '#efefef',
        }}
      >
        <h2>Scroll down to reach the horizontal scroll section</h2>
      </div>
      <div className='relative min-h-screen w-full'>
        <HorizontalScroll>
          <div className='relative flex h-full flex-row flex-nowrap items-center justify-start'>
            {Array(5)
              .fill(0)
              .map((_e, i) => (
                <SampleCard key={`sampleCard-${i}`} />
              ))}
          </div>
        </HorizontalScroll>
      </div>
      <div
        style={{
          textAlign: 'center',
          padding: '128px 16px',
          backgroundColor: '#efefef',
        }}
      >
        <h2>You have left the horizontal horizontal scroll section</h2>
      </div>
    </main>
  );
}
