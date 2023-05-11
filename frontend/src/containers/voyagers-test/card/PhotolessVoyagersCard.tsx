import Image, { StaticImageData } from 'next/image';

import AnimatedCardContainer, {
  AnimatedCardContainerProps,
} from '@/containers/voyagers-test/card/AnimatedCardContainer';

import clsxm from '@/utils/clsxm';

interface PhotolessVoyagersCardProps
  extends Omit<AnimatedCardContainerProps, 'children'> {
  card: StaticImageData;
}

export default function PhotolessVoyagersCard({
  card,
  delay = 0,
  rotateFrom = 0,
  x = '100%',
  className,
  helperFn = () => undefined,
}: PhotolessVoyagersCardProps) {
  return (
    <AnimatedCardContainer
      delay={delay}
      rotateFrom={rotateFrom}
      x={x}
      helperFn={helperFn}
    >
      <Image
        className={clsxm('absolute', className)}
        fill
        style={{ objectFit: 'contain' }}
        src={card}
        alt='card'
        placeholder='blur'
        priority={true}
      />
    </AnimatedCardContainer>
  );
}
