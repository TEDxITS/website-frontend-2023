import Image from 'next/image';
import BlueEye from 'public/images/tickets/thankyou-page/blue-eye.png';
import GreenSplash from 'public/images/tickets/thankyou-page/green-splash.png';
import TyAtas from 'public/images/tickets/thankyou-page/ty-atas.png';
import TyBawah from 'public/images/tickets/thankyou-page/ty-bawah.png';

function ThankyouPage() {
  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden overflow-x-clip bg-contain bg-repeat p-8 text-cwhite'>
      <Image
        src={TyAtas}
        alt='TyAtas'
        className='absolute -top-32 -right-28 -z-20 h-auto w-auto'
      />
      <Image
        src={TyBawah}
        alt='TyAtas'
        className='absolute -left-16 -bottom-24 -z-20 h-auto w-auto'
      />
      <div className='flex h-3/6 max-w-screen-md flex-col items-center justify-center gap-3'>
        <span className='relative text-center font-baron text-[40px] leading-[45px] md:text-[70px] md:leading-[60px]'>
          <Image
            src={BlueEye}
            alt='BlueEye'
            width={100}
            className='absolute top-1/3 right-1/2'
          />
          <Image
            src={GreenSplash}
            alt='GreenSplash'
            width={100}
            className='absolute -top-10 -right-10'
          />
          THANK YOU FOR YOUR PURCHASE
        </span>
        <span className='text-center text-lg leading-6'>
          Your purchase is successful. The e-ticket will be delivered to your
          email. Please wait 2x24 hours for the verification process
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

export default ThankyouPage;
