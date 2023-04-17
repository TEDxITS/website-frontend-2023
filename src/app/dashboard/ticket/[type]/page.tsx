import type { Metadata } from 'next';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import BookingFormContainer from '@/containers/dashboard/ticket/BookingFormContainer';

import { generateTemplateMetadata } from '@/utils/metadata';

import { TicketType } from '@/types/dashboard.types';

function toTitleCase(str: string): string {
  const words = str.split('-');
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
}

export async function generateMetadata({
  params,
}: {
  params: { type: string };
}): Promise<Metadata> {
  const pageTitle = `Buy ${toTitleCase(params.type)} Ticket`;
  const metadataObject = generateTemplateMetadata(
    pageTitle,
    '',
    '/dashboard/ticket'
  );
  return metadataObject;
}

const validParams = ['early-bird', 'pre-sale', 'normal'];

export default function BookingPage({ params }: { params: { type: string } }) {
  const isParamValid = validParams.includes(params.type);

  if (!isParamValid) {
    return (
      <section className='layout z-20 flex flex-col items-center p-5'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          TICKET NOT FOUND
        </h1>
        <p className='mb-6 text-center text-cwhite'>
          Unfortunately, the ticket type you are looking for is not available or
          not exist. Please check back later.
        </p>
        <UnstyledLink href='/dashboard/ticket'>
          <Button>&larr; Back</Button>
        </UnstyledLink>
      </section>
    );
  }

  return (
    <section className='layout z-20 p-5'>
      <h1 className='mb-10 text-center font-baron text-cwhite'>BUY TICKET</h1>
      <BookingFormContainer
        ticketType={toTitleCase(params.type) as TicketType}
      />
    </section>
  );
}
