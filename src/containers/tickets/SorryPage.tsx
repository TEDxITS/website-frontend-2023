import Image from 'next/image';
import BlueEmot from 'public/images/tickets/sorry-page/blue-emot.png';
import GreenThunder from 'public/images/tickets/sorry-page/green-thunder.png';
import SorryAtas from 'public/images/tickets/sorry-page/sorry-atas.png';
import SorryBawah from 'public/images/tickets/sorry-page/sorry-bawah.png';
import OWhite from 'public/images/tickets/sorry-page/white-o.png';

function SorryPage() {
  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden overflow-x-clip bg-contain bg-repeat p-8 text-cwhite'>
      <Image
        src={SorryAtas}
        alt='SorryAtas'
        className='absolute -top-8 -left-8 -z-20 h-auto w-auto'
      />
      <Image
        src={SorryBawah}
        alt='SorryBawah'
        className='absolute -right-20 -bottom-8 -z-20 h-auto w-auto'
      />
      <div className='flex h-4/6 max-w-screen-md flex-col items-center justify-center gap-2 md:gap-5'>
        <span className='flex scale-75 items-center justify-center self-center font-baron text-[100px] md:scale-100 '>
          <Image src={GreenThunder} alt='GreenThunder' width={60} />
          S
          <Image src={OWhite} alt='OWhite' width={80} />
          RRY
          <Image src={BlueEmot} alt='BlueEmot' width={80} />
        </span>
        <span className='text-center text-lg leading-6'>
          Your purchase is not successful. This might happen due to the system
          error or the tickets have been sold out
        </span>
      </div>

      <div className='flex h-1/6 flex-col items-center justify-center text-xs md:text-sm'>
        <span className='text-center'>
          If you have further questions, kindly reach out
        </span>
        <span className='text-center'>
          Line ID : knytlth (Kinaya) | Whatsapp : 085836649611 (Kinaya)
        </span>
      </div>
    </div>
  );
}

export default SorryPage;
