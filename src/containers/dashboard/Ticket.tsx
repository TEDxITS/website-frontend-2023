import clsxm from '@/utils/clsxm';

import { TicketType } from '@/types/dashboard.types';

type TicketProps = {
  children: React.ReactNode;
  type: TicketType;
};

export default function Ticket({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative flex w-full flex-col md:flex-row'>{children}</div>
  );
}

export function TicketLeftSide({ children, type }: TicketProps) {
  return (
    <div
      className={clsxm(
        'relative w-full rounded-t-3xl border-b-2 border-r-0 border-dashed border-black md:w-[75%] md:rounded-l-3xl md:border-b-0 md:border-r-2',
        type === 'Early Bird' || type === 'Pre Event 3'
          ? 'noisy bg-white'
          : type === 'Pre Sale'
          ? 'bg-gradient-to-b from-cyellow via-corange to-cpink md:bg-gradient-to-r'
          : 'bg-gradient-50-years-to-tr'
      )}
    >
      <div className='absolute -top-8 flex h-auto w-full justify-center md:top-auto md:-left-5 md:h-full md:w-auto md:items-center'>
        <div className='h-16 w-16 rounded-full bg-black md:h-12 md:w-12'></div>
      </div>
      <div className='absolute -left-6 right-auto -bottom-6 h-12 w-12 rounded-full bg-black md:-right-6 md:left-auto md:-top-5'></div>
      <div className='absolute -right-6 -bottom-6 h-12 w-12 rounded-full bg-black md:-bottom-5'></div>
      <div
        className={clsxm(
          type === 'Early Bird' || type === 'Pre Event 3'
            ? 'border-black text-black'
            : 'border-white text-white'
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function TicketRightSide({ children, type }: TicketProps) {
  return (
    <div
      className={clsxm(
        'w-full rounded-b-3xl md:w-[25%] md:rounded-r-3xl',
        type === 'Early Bird'
          ? 'noisy bg-cred'
          : type === 'Pre Sale'
          ? 'bg-gradient-to-b from-cpink to-cblue md:bg-gradient-to-r'
          : type === 'Normal' || type === 'Booth'
          ? 'bg-gradient-50-years-to-br'
          : 'bg-cgreen'
      )}
    >
      <div className='absolute -right-5 hidden h-full items-center md:flex'>
        <div className='h-12 w-12 rounded-full bg-black'></div>
      </div>
      <div className='absolute -bottom-8 block flex w-full justify-center md:hidden'>
        <div className='h-16 w-16 rounded-full bg-black'></div>
      </div>
      {children}
    </div>
  );
}
