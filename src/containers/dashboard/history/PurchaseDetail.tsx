import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';

import { BOOKING_STATUS } from '@/constant/ticket';
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
    <div className='mb-5 w-full'>
      {onDetailPage && (
        <h2 className='mb-5 font-baron text-cwhite'>PURCHASE DETAIL</h2>
      )}
      <div className='noisy flex flex-col items-center justify-between gap-3 rounded-md bg-white py-3 px-5 sm:grow sm:flex-row'>
        <div className='w-full'>
          <p className='mb-2'>
            Purchase ID:{' '}
            <span className='mb-2 font-semibold sm:text-lg'>{booking.id}</span>
          </p>

          <div className='flex flex-col gap-2 border-t-2 border-dashed border-cblack pt-2 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <p>Status:</p>
              <div
                className={clsxm(
                  'rounded-md px-2 py-1',
                  booking.status === BOOKING_STATUS.MENUNGGU_PEMBAYARAN
                    ? 'bg-red-200 text-red-800'
                    : booking.status === BOOKING_STATUS.MENUNGGU_VERIFIKASI
                    ? 'bg-yellow-200 text-yellow-800'
                    : booking.status === BOOKING_STATUS.KUOTA_HABIS
                    ? 'bg-blue-200 text-blue-800'
                    : 'bg-green-200 text-green-800'
                )}
              >
                <p className='font-semibold sm:text-lg'>
                  {booking.status === BOOKING_STATUS.MENUNGGU_PEMBAYARAN
                    ? 'Waiting for Payment'
                    : booking.status === BOOKING_STATUS.MENUNGGU_VERIFIKASI
                    ? 'Waiting for Admin Verification'
                    : booking.status === BOOKING_STATUS.KUOTA_HABIS
                    ? 'Out of Quota'
                    : 'Verified'}
                </p>
              </div>
            </div>

            {booking.status === BOOKING_STATUS.MENUNGGU_PEMBAYARAN && (
              <div>
                <p>Pay Before:</p>
                <p className='font-semibold sm:text-lg'>
                  {new Date(booking.deadline).toLocaleTimeString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </p>
              </div>
            )}

            {!onDetailPage && (
              <div>
                <UnstyledLink
                  href={`/dashboard/history/purchase/${booking.id}`}
                >
                  <Button variant='primary' className='w-full'>
                    <p className='w-full text-center'>
                      {booking.status === BOOKING_STATUS.MENUNGGU_PEMBAYARAN
                        ? 'Pay Now'
                        : 'View Details'}
                    </p>
                  </Button>
                </UnstyledLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
