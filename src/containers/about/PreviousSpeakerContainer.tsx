import RandomStarfieldContainer from '@/containers/stars/RandomStarfieldContainer';

export default function PreviousSpeakerContainer() {
  return (
    <RandomStarfieldContainer className='h-[200vh] bg-black' zAxis={2}>
      <div className='absolute z-10 h-full w-full bg-transparent-stars bg-cover'>
        <div className='absolute z-20 h-full w-full bg-hue'>
          {/* Start Here */}
        </div>
      </div>
    </RandomStarfieldContainer>
  );
}
