import type { Metadata } from 'next';

import Button from '@/components/button/Button';
import UnstyledLink from '@/components/link/UnstyledLink';
import BookingFormContainer from '@/containers/dashboard/ticket/BookingFormContainer';

import { generateTemplateMetadata } from '@/utils/metadata';
import prisma from '@/utils/prisma';
import createResponse from '@/utils/response';

import { TicketData, TicketType } from '@/types/dashboard.types';

// Revalidate on every request (same as getServerSideProps)
export const dynamic = 'force-dynamic';

function toTitleCase(str: string): string {
  const words = str.split('-');
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(' ');
}

const validParams = ['early-bird', 'pre-sale', 'normal'];

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

async function getAllTicketType() {
  try {
    const result = await prisma.ticket.findMany();
    return createResponse(200, 'The tickets retrieved successfully', result);
  } catch (e) {
    return createResponse(500, 'Internal Server Error', null);
  }
}

export default async function BookingPage({
  params,
}: {
  params: { type: string };
}) {
  const { data } = await getAllTicketType();
  const isParamValid = validParams.includes(params.type);

  if (!isParamValid || !data) {
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

  const filteredTickets = data.filter(
    (ticket) => ticket.name === toTitleCase(params.type) && ticket.quota > 0
  );

  if (filteredTickets.length === 0) {
    return (
      <section className='layout z-20 flex flex-col items-center p-5'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          TICKET SOLD OUT
        </h1>
        <p className='mb-6 text-center text-cwhite'>
          Unfortunately, the ticket type you are looking for is sold out. Please
          check back later.
        </p>
        <UnstyledLink href='/dashboard/ticket'>
          <Button>&larr; Back</Button>
        </UnstyledLink>
      </section>
    );
  }

  if (
    new Date(filteredTickets[0].dateOpen) > new Date() ||
    new Date(filteredTickets[0].dateClose) < new Date()
  ) {
    return (
      <section className='layout z-20 flex flex-col items-center p-5'>
        <h1 className='mb-10 text-center font-baron text-cwhite'>
          TICKET SELLING PERIOD HAS NOT STARTED OR HAS ENDED
        </h1>
        <p className='mb-6 text-center text-cwhite'>
          Unfortunately, the ticket type you are looking for is not available at
          the moment. Please check back later.
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
        selectedTickets={filteredTickets as unknown as TicketData[]}
        ticketType={toTitleCase(params.type) as TicketType}
      />
    </section>
  );
}
