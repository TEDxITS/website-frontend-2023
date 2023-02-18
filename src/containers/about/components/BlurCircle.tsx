import clsxm from '@/utils/clsxm';

interface BlurCircleProps {
  h: string;
  w: string;
  textSize: string;
  colorFrom: string;
  colorTo: string;
  blurSize: string;
  scalingSize: number;
  angka: number;
}

export default function BlurCircle(props: BlurCircleProps) {
  return (
    <>
      <span
        className={clsxm(
          `peer z-10 flex h-[${props.h}] w-[${props.w}] cursor-pointer items-center justify-center rounded-full text-[${props.textSize}] text-cwhite duration-500 hover:scale-[${props.scalingSize}]`
        )}
      >
        {props.angka}
      </span>
      <span
        className={clsxm(
          `absolute z-0 h-[${props.h}] w-[${props.w}] cursor-pointer rounded-full bg-gradient-to-br from-${props.colorFrom} to-${props.colorTo} blur${props.blurSize} duration-500 peer-hover:scale-[${props.scalingSize}]`
        )}
      ></span>
    </>
  );
}
