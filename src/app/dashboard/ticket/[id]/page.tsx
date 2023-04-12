import TicketForm from '@/containers/dashboard/ticket/BookingForm';

export default function BookingPage() {
  return (
    <section className='layout z-20 p-5'>
      <h1 className='mb-10 text-center font-baron text-cwhite'>BUY TICKET</h1>
      <div className='pb-16'>
        <TicketForm />
      </div>
    </section>
  );
}
