import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import { BOOKING_STATUS } from '@/containers/dashboard/history/UserPurchasesContainer';

import clsxm from '@/utils/clsxm';

import { BookingData } from '@/types/dashboard.types';

export default function PurchaseDetail({
  booking,
  onDetailPage = false,
}: {
  booking: BookingData;
  onDetailPage?: boolean;
}) {
  return (
    <div className='mb-10 w-full'>
      {onDetailPage && (
        <h2 className='mb-5 font-baron text-cwhite'>PURCHASE DETAIL</h2>
      )}
      <div className='noisy flex flex-col items-center justify-between gap-3 rounded-md bg-white py-3 px-5 sm:grow sm:flex-row'>
        <div>
          <p>Purchase ID:</p>
          <p className='mb-2 font-semibold sm:text-lg'>{booking.id}</p>
          <div className='flex flex-col gap-x-2 sm:flex-row sm:items-center'>
            <p>Status:</p>
            <div
              className={clsxm(
                'rounded-md px-2 py-1',
                booking.status === BOOKING_STATUS.MENUNGGU_PEMBAYARAN
                  ? 'bg-red-200 text-red-800'
                  : booking.status === BOOKING_STATUS.MENUNGGU_VERIFIKASI
                  ? 'bg-yellow-200 text-yellow-800'
                  : 'bg-green-200 text-green-800'
              )}
            >
              <p className='font-semibold sm:text-lg'>
                {booking.status === BOOKING_STATUS.MENUNGGU_PEMBAYARAN
                  ? 'Waiting for Payment'
                  : booking.status === BOOKING_STATUS.MENUNGGU_VERIFIKASI
                  ? 'Waiting for Admin Verification'
                  : 'Verified'}
              </p>
            </div>
          </div>
        </div>
        {!onDetailPage && (
          <div>
            <UnstyledLink href={`/dashboard/history/purchase/${booking.id}`}>
              <Button variant='primary'>
                {booking.status === BOOKING_STATUS.MENUNGGU_PEMBAYARAN
                  ? 'Pay Now'
                  : 'View Details'}
              </Button>
            </UnstyledLink>
          </div>
        )}
      </div>
    </div>
  );
}
