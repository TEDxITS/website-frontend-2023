import type { Metadata } from 'next';

import { generateTemplateMetadata } from '@/utils/metadata';
import FullTEDLogo from '@/assets/logo/FullTEDLogo';

const metadataObject = generateTemplateMetadata('Dashboard', '', '/dashboard');
export const metadata: Metadata = {
  ...metadataObject,
};

export default function YourPurchasePage() {
  return (
    <section className='layout z-20'>
      <h1 className='mb-5 font-baron text-cwhite'>YOUR PURCHASE</h1>

      <div>
        <h2 className='mb-5 font-baron text-cwhite'>Personal Data</h2>

        <div className='flex flex-col lg:flex-row justify-between h-[520px] gap-4 '>
          {/* Receipt */}
          <div className="flex flex-col bg-[url('/images/purchase/bg-receipt.png')] bg-cover w-[380px] h-full">
            <div className='flex flex-row justify-center items-center border-dashed border-b-2 border-cblack mx-4'>
              <FullTEDLogo className='h-24 w-48' />
              <p className='text-3xl font-thin text-cblack'>
                <span>&#169;</span>2023
              </p>
            </div>
            <div className='flex flex-col mx-4 items-center justify-center'>
              <h3 className='uppercase font-baron text-center mt-4 mb-8'>RECEIPT</h3>
              <div className='flex w-full justify-between'>
                <div>
                  <p className='font-baron text-xl uppercase'>DESCRIPTION</p>
                </div>
                <div>
                  <p className='font-baron text-xl uppercase'>PRICE</p>
                </div>
              </div>
              <ul className='text-sm mt-4'>
                <li className='flex justify-between'>
                  Early Bird Ticket<span>.................................</span>Rp.80.000,00
                </li>
                <li className='flex justify-between'>
                  Kit <span>..........................................</span>Rp.105.000,00
                </li>
                <li className='flex justify-between mb-2'>
                  ____________________________________________+
                </li>
                <li className='flex justify-between font-bold mb-4'>
                  Total <span>..................................Rp.185.000,00</span>
                </li>
              </ul>
            </div>
            <div className='w-full flex flex-col items-center justify-center my-4 px-4'>
              <h3 className='text-4xl font-baron font-bold my-4 border-b-2 w-full pb-4 text-center border-dashed border-cblack'>
                THANK YOU!
              </h3>
              <small className='text-[.65rem] text-center font-semibold'><span>&#169;</span>2023 All Rights Reserved <br /> This independent <span className='font-bold text-cred'>TEDx</span> event is operated under license from TED.</small>

            </div>
          </div>

          {/* Payment Method */}
          <div className="flex flex-row w-full h-full bg-[url('/images/purchase/bg-payment-method.png')] bg-cover">
            <div className='border-r-2 border-cblack my-4'>
              <FullTEDLogo className='-rotate-90 w-32 h-full' />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-center items-center w-full border-b-2 border-cblack'>
                <h3 className='uppercase font-baron text-4xl text-cblack text-center my-6'>Payment Method</h3>
              </div>
              <ul className='px-8 py-4 mb-8 border-b-2 border-cblack'>
                <li className='flex '>
                  1363122830 <span>..........................................</span>BCA a/n Gek Weda
                </li>
                <li className='flex '>
                  1299877186 <span>..........................................</span>BCA a/n I Ayu Pradnya Widyanti Sandhi
                </li>
                <li className='flex '>
                  081238300488 <span>......................................</span>BCA a/n I Ayu Pradnya Widyanti Sandhi
                </li>
              </ul>
              <div className='w-full flex justify-center items-center'>
                <form className="flex flex-col lg:flex-row items-center px-4">
                  <div className='flex flex-col items-center space-y-6 h-[84px]'>
                    <div className="shrink-0">
                      <h3 className='text-base font-baron font-bold text-cblack'>UPLOAD YOUR PAYMENT PROOF!</h3>
                    </div>
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input type="file" className="block w-full text-ms text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-cblack
      hover:file:bg-slate-100
    "/>
                    </label>
                  </div>
                  <div className='flex flex-col items-center space-y-6 h-[84px]'>
                    <div className="shrink-0">
                      <h3 className='text-base font-baron font-bold text-cblack'>Before the times runs out</h3>
                    </div>
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <p>
                        00:00:00
                      </p>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
