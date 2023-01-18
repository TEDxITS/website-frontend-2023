import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from '@react-spring/web';

const data = ['hi', 'there!'];

export default function UseChainExample() {
  const springRef = useSpringRef();
  const springs = useSpring({
    ref: springRef,
    from: { size: '20%' },
    to: { size: '50%' },
  });

  const transRef = useSpringRef();
  const transitions = useTransition(data, {
    ref: transRef,
    from: { scale: 0 },
    enter: { scale: 1 },
    leave: { scale: 0 },
  });

  useChain([springRef, transRef]);

  return (
    <animated.div
      style={{
        height: springs.size,
        width: springs.size,
        background: 'blue',
      }}
    >
      {transitions((style, item) => (
        <animated.div
          style={{
            width: '120px',
            height: '120px',
            background: 'green',
            ...style,
          }}
        >
          {item}
        </animated.div>
      ))}
    </animated.div>
  );
}
