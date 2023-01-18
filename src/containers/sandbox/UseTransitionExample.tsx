import { animated, useTransition } from '@react-spring/web';
import * as React from 'react';
import { useState } from 'react';

export default function UseTransitionExample() {
  const [route, setRoute] = useState(1);
  const data = [
    { id: 1, name: 'satu' },
    { id: 2, name: 'dua' },
  ];

  const transition = useTransition(route, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });

  return (
    <section>
      <button onClick={() => setRoute(0)}>Go home</button>
      <button onClick={() => setRoute(1)}>Go contact</button>
      <div className='flex justify-center border-2 border-red-400 p-10'>
        {transition((style, item) => (
          <animated.div style={style}>{data[item].name}</animated.div>
        ))}
      </div>
    </section>
  );
}
