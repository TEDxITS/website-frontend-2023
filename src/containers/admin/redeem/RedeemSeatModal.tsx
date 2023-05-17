import React from 'react';

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';
import SeatingContainer from '@/containers/dashboard/history/SeatingContainer';

export default function RedeemSeatModal({
  bookingDetailsId,
}: {
  bookingDetailsId: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button
        variant='primary'
        className='bg-cblue'
        onClick={() => setIsOpen(true)}
      >
        Pick Seat
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} className='max-w-5xl'>
        <SeatingContainer
          bookingDetailsId={bookingDetailsId}
          isOnModal
          setIsSeatModelOpen={setIsOpen}
        />
      </Modal>
    </>
  );
}
