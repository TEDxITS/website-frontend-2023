import { useRouter } from 'next/navigation';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';

export default function RegistrationClosedModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='noisy border-[10px] border-cgray bg-black'
    >
      <div className='z-20 flex flex-col items-center justify-center'>
        <h1 className='text-center font-baron text-xl text-cwhite sm:text-4xl'>
          Coming Soon
        </h1>
        <p className='mt-4 mb-5 text-center text-base font-medium text-cwhite sm:text-lg'>
          TEDxITS 2023 Main Event registration is not open yet.
          <br />
          Stay tuned for updates on our social media.
        </p>
        <Button
          variant='primary'
          className='px-9 text-base xs:text-xl'
          onClick={() => router.push('/')}
        >
          Back
        </Button>
      </div>
    </Modal>
  );
}
