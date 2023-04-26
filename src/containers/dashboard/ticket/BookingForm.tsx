import { useRouter } from 'next/navigation';
import React from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
  useWatch,
} from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import Button from '@/components/button/Button';
import BookingTicket from '@/containers/dashboard/ticket/BookingTicket';

import api from '@/utils/api';

import { TicketData, TicketType } from '@/types/dashboard.types';

const ticketSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  email: z.string().email({ message: 'The provided email is not valid' }),
  phoneNumber: z.string().nonempty({ message: 'Phone number is required' }),
  ticketId: z.string().nonempty({ message: 'Ticket type is required' }),
});

type TicketDataType = z.infer<typeof ticketSchema>;

export type TicketArray = {
  tickets: TicketDataType[];
};

const bookTicket = async (data: TicketDataType[]) => {
  try {
    const { data: response } = await api.post('/booking', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default function BookingForm({
  selectedTickets,
  ticketType,
}: {
  selectedTickets: TicketData[];
  ticketType: TicketType;
}) {
  const router = useRouter();
  const methods = useForm<TicketArray>({
    defaultValues: {
      tickets: [
        {
          name: '',
          email: '',
          phoneNumber: '',
          ticketId: selectedTickets[0].id,
        },
      ],
    },
    mode: 'onTouched',
  });
  const { handleSubmit, control } = methods;
  const { fields, append, remove } = useFieldArray<TicketArray>({
    control,
    name: 'tickets',
  });
  const tickets = useWatch({ control, name: 'tickets' });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const [orderSummary, setOrderSummary] = React.useState<{
    [key: string]: number;
  }>({});

  React.useEffect(() => {
    let total = 0;
    const counts: { [key: string]: number } = {};
    tickets.forEach((ticket) => {
      const ticketData = selectedTickets.find(
        (ticketData) => ticketData.id === ticket.ticketId
      );
      if (ticketData) {
        total += ticketData.price;
        const key = JSON.stringify(ticketData);
        counts[key] = counts[key] ? counts[key] + 1 : 1;
      }
    });
    setTotalPrice(total);
    setOrderSummary(counts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickets]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    if (data.tickets.length === 0) {
      toast.error('Please add at least 1 ticket');
      setIsLoading(false);
      return;
    }
    if (data.tickets.length > 5) {
      toast.error('You can only book up to 5 tickets');
      setIsLoading(false);
      return;
    }

    toast.loading('Checking quota...', { id: 'quota' });

    // Fetch all ticket type to get the quota
    const allTicketType = await fetch('/api/ticket')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        toast.error('Failed to fetch ticket quota', { id: 'quota' });
        setIsLoading(false);
        return Promise.reject(res);
      })
      .catch((e) => {
        toast.error('Failed to fetch ticket quota', { id: 'quota' });
        setIsLoading(false);
        return Promise.reject(e);
      });

    // Check if quota is sufficient
    let isQuotaInsufficient = false;
    Object.keys(orderSummary).forEach((key) => {
      const ticketData = JSON.parse(key);
      const ticketType = allTicketType.data.find(
        (ticket: TicketData) => ticket.id === ticketData.id
      );
      if (ticketType) {
        if (ticketType.quota < orderSummary[key]) {
          toast.error(
            `Quota insufficient for ${ticketType.name} ${ticketType.type} ticket. Please reduce the number of tickets`,
            { id: 'quota' }
          );
          isQuotaInsufficient = true;
          return;
        }
      }
    });

    if (isQuotaInsufficient) {
      setIsLoading(false);
      return;
    }

    toast.dismiss('quota');

    const bookTicketPromise = bookTicket(data.tickets);
    toast
      .promise(bookTicketPromise, {
        loading: 'Booking ticket...',
        success: 'Ticket booked successfully',
        error: (e) => e.response.data.message,
      })
      .then((data) => {
        router.push(`/dashboard/history/purchase/${data.data.id}`);
      })
      .catch((e) => e)
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='relative h-full w-full pb-5 text-cwhite'
      >
        {fields.map((ticket, index) => (
          <div key={ticket.id} className='mb-14 text-black'>
            <div className='relative z-30 mb-5 flex items-center justify-between'>
              <h2 className='text-cwhite'>Ticket #{index + 1} Personal Data</h2>
              {index !== 0 && (
                <Button
                  onClick={() => remove(index)}
                  type='button'
                  variant='primary'
                >
                  Remove
                </Button>
              )}
            </div>
            <BookingTicket
              ticketType={ticketType}
              index={index}
              selectedTickets={selectedTickets}
            />
          </div>
        ))}
        <div className='mb-12 flex justify-center'>
          <Button
            onClick={() => {
              if (fields.length < 5) {
                append({
                  name: '',
                  email: '',
                  phoneNumber: '',
                  ticketId: selectedTickets[0].id,
                });
              } else {
                toast.error('You can only book up to 5 tickets');
              }
            }}
            type='button'
          >
            Add Ticket
          </Button>
        </div>
        <h2 className='mb-5 text-cwhite'>Order Summary</h2>
        <div className='noisy mb-4 flex items-center justify-between rounded-xl bg-white p-4 text-black'>
          <ul className='w-full'>
            {Object.keys(orderSummary).map((key) => (
              <li key={key} className='flex justify-between'>
                <span>
                  {orderSummary[key]}x {JSON.parse(key).name}{' '}
                  {JSON.parse(key).type}
                </span>
                <span className='whitespace-nowrap'>
                  Rp. {JSON.parse(key).price * orderSummary[key]}
                </span>
              </li>
            ))}
            <li className='mt-2 flex justify-between border-t-2 border-dashed border-cblack pt-2 font-semibold'>
              <span>Total</span>
              <span>Rp. {totalPrice}</span>
            </li>
          </ul>
        </div>
        <div className='flex justify-end'>
          <Button type='submit' className='' disabled={isLoading}>
            Checkout
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
