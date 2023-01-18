import { animated, config, useSpring, useSprings } from '@react-spring/web';
import React from 'react';

import '../styles/globals.css';

import PagesLayout from '@/components/utils/PagesLayout';
import UseChainExample from '@/containers/sandbox/UseChainExample';
import UseTransitionExample from '@/containers/sandbox/UseTransitionExample';

// Due to some unknown issues with react-spring, app dir is currently unusable with react-spring (even with use-client)
export default function SandboxPages() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const spring = useSpring({
    from: { x: 0 },
    to: { x: 200 },
  });

  const [springs] = useSprings(items.length, (i) => ({
    from: { opacity: 0.5, x: -100 },
    to: { opacity: 1, x: 0 },
    config: config.wobbly,
    delay: i * 100,
  }));

  return (
    <PagesLayout title='Sandbox with Pages Directory'>
      <section>
        <div>
          <animated.div
            style={{
              width: 80,
              height: 80,
              background: '#ff6d6d',
              borderRadius: 8,
              ...spring,
            }}
          />
        </div>
        <div>
          {springs.map((props, i) => (
            <animated.div key={i} style={props}>
              {items[i]}
            </animated.div>
          ))}
        </div>
        <UseTransitionExample />
        <UseChainExample />
      </section>
    </PagesLayout>
  );
}
