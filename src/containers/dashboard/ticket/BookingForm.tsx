'use client';
import { RadioGroup } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

import Button from '@/components/button/Button';

import api from '@/utils/api';

const ticketSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  email: z.string().email({ message: 'The provided email is not valid' }),
  phoneNumber: z.string().nonempty({ message: 'Phone number is required' }),
  dob: z.string().nonempty({ message: 'Date of birth is required' }),
});

type TicketDataType = z.infer<typeof ticketSchema>;

type TicketArray = {
  tickets: TicketDataType[];
};

const ticketFormInitialValue: TicketDataType[] = [
  { name: '', email: '', phoneNumber: '', dob: '' },
];

const bookTicket = async (data: TicketDataType[]) => {
  try {
    const { data: response } = await api.post('/api/book-ticket', data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default function TicketForm() {
  const router = useRouter();
  const methods = useForm<TicketArray>({
    defaultValues: { tickets: ticketFormInitialValue },
    mode: 'onTouched',
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const { fields, append, remove } = useFieldArray<TicketArray>({
    control,
    name: 'tickets',
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [plan, setPlan] = React.useState('startup');

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const bookTicketPromise = bookTicket(data.tickets);
    toast
      .promise(bookTicketPromise, {
        loading: 'Loading..',
        success: 'Ticket booked successfully',
        error: (e) => e.message,
      })
      .then(() => {
        router.push('/');
      })
      .catch((e) => e)
      .finally(() => {
        setIsLoading(false);
        methods.reset();
      });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='relative h-full w-full text-cwhite'
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
            <div className='relative flex w-full flex-col md:flex-row'>
              <div className='noisy relative w-full rounded-t-3xl border-b-2 border-r-0 border-dashed border-black bg-white md:w-[75%] md:rounded-l-3xl md:border-b-0 md:border-r-2'>
                <div className='absolute -top-8 flex h-auto w-full justify-center md:top-auto md:-left-5 md:h-full md:w-auto md:items-center'>
                  <div className='h-16 w-16 rounded-full bg-black md:h-12 md:w-12'></div>
                </div>
                <div className='absolute -left-6 right-auto -bottom-6 h-12 w-12 rounded-full bg-black md:-right-6 md:left-auto md:-top-5'></div>
                <div className='absolute -right-6 -bottom-6 h-12 w-12 rounded-full bg-black md:-bottom-5'></div>
                <div className='bb relative flex py-10 px-2 md:py-5 md:px-10'>
                  <div
                    className='rotate-180 border-l-2 border-black pl-4 text-center font-baron text-3xl font-medium'
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    EARLY BIRD TICKET
                  </div>
                  <div className='grow'>
                    <div className='border-b-2 border-black px-4 pb-4'>
                      <h1 className='font-baron font-medium'>BOARDING PASS</h1>
                    </div>
                    <div className='flex flex-col gap-10 p-4 md:flex-row'>
                      <div className='w-full md:w-1/2'>
                        <div className='mb-3 flex flex-col'>
                          <label
                            htmlFor={`tickets[${index}].name`}
                            className='font-quaker'
                          >
                            Name
                          </label>
                          <input
                            id={`tickets[${index}].name`}
                            type='text'
                            {...methods.register(`tickets.${index}.name`, {
                              required: 'Name is required',
                            })}
                            className='border-b-2 border-black bg-transparent pb-1.5 focus:outline-none'
                          />
                          {errors?.tickets?.[index]?.name && (
                            <p className='text-cred'>
                              {errors.tickets[index]?.name?.message}
                            </p>
                          )}
                        </div>
                        <div className='mb-3 flex flex-col'>
                          <label
                            htmlFor={`tickets[${index}].email`}
                            className='font-quaker'
                          >
                            Email
                          </label>
                          <input
                            id={`tickets[${index}].email`}
                            type='email'
                            {...methods.register(`tickets.${index}.email`, {
                              required: 'Email is required',
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'The provided email is not valid',
                              },
                            })}
                            className='border-b-2 border-black bg-transparent pb-1.5 focus:outline-none'
                          />
                          {errors?.tickets?.[index]?.email && (
                            <p className='text-cred'>
                              {errors.tickets[index]?.email?.message}
                            </p>
                          )}
                        </div>
                        <div className='flex flex-col'>
                          <label
                            htmlFor={`tickets[${index}].phoneNumber`}
                            className='font-quaker'
                          >
                            Phone Number
                          </label>
                          <input
                            id={`tickets[${index}].phoneNumber`}
                            type='text'
                            {...methods.register(
                              `tickets.${index}.phoneNumber`,
                              {
                                required: 'Phone number is required',
                              }
                            )}
                            className='border-b-2 border-black bg-transparent pb-1.5 focus:outline-none'
                          />
                          {errors?.tickets?.[index]?.phoneNumber && (
                            <p className='text-cred'>
                              {errors.tickets[index]?.phoneNumber?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className='flex w-full flex-col justify-center gap-5 md:w-1/2'>
                        <RadioGroup value={plan} onChange={setPlan}>
                          <RadioGroup.Label className='text-center font-quaker'>
                            Ticket Type
                          </RadioGroup.Label>
                          <div className='flex items-center space-x-4'>
                            <RadioGroup.Option value='startup'>
                              {({ checked }) => (
                                <div className='flex items-center'>
                                  <div
                                    className={`h-4 w-4 ${
                                      checked ? 'bg-blue-500' : 'bg-gray-400'
                                    } flex items-center justify-center rounded-full`}
                                  >
                                    {checked && (
                                      <svg
                                        className='h-3 w-3 text-white'
                                        viewBox='0 0 12 12'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                      >
                                        <path
                                          d='M2 7.5L4.5 10L10 2'
                                          stroke='currentColor'
                                          strokeWidth='2'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                        />
                                      </svg>
                                    )}
                                  </div>
                                  <div className='ml-3 text-sm font-medium'>
                                    With Kit
                                  </div>
                                </div>
                              )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value='business'>
                              {({ checked }) => (
                                <div className='flex items-center'>
                                  <div
                                    className={`h-4 w-4 ${
                                      checked ? 'bg-blue-500' : 'bg-gray-400'
                                    } flex items-center justify-center rounded-full`}
                                  >
                                    {checked && (
                                      <svg
                                        className='h-3 w-3 text-white'
                                        viewBox='0 0 12 12'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                      >
                                        <path
                                          d='M2 7.5L4.5 10L10 2'
                                          stroke='currentColor'
                                          strokeWidth='2'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                        />
                                      </svg>
                                    )}
                                  </div>
                                  <div className='ml-3 text-sm font-medium'>
                                    Without Kit
                                  </div>
                                </div>
                              )}
                            </RadioGroup.Option>
                          </div>
                        </RadioGroup>
                        <div>
                          <p className='font-quaker'>Price</p>
                          <p className='font-baron text-[1rem] sm:text-[1.5rem]'>
                            Rp. 5000000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='noisy w-full rounded-b-3xl bg-cred md:w-[25%] md:rounded-r-3xl'>
                <div className='absolute -right-5 hidden h-full items-center md:flex'>
                  <div className='h-12 w-12 rounded-full bg-black'></div>
                </div>
                <div className='absolute -bottom-8 block flex w-full justify-center md:hidden'>
                  <div className='h-16 w-16 rounded-full bg-black'></div>
                </div>
                <div className='relative px-10 py-5'>
                  <div className='border-b-2 border-white px-4 pb-4'>
                    <p className='text-center text-xl font-medium text-white'>
                      Information About Kit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='mb-12 flex justify-center'>
          <Button
            onClick={() =>
              append({ name: '', email: '', phoneNumber: '', dob: '' })
            }
            type='button'
            className='text-cpurple border-cpurple hover:bg-cpurple rounded-md hover:text-white'
          >
            Add Ticket
          </Button>
        </div>
        <h2 className='mb-2 text-cwhite'>Order Summary</h2>
        <div className='noisy mb-4 flex items-center justify-between bg-white p-3 text-black'>
          <div className=''>
            <ul>
              <li>1x Early Bird with Kit</li>
              <li>1x Early Bird without Kit</li>
              <li className='font-semibold'>Total</li>
            </ul>
          </div>
          <ul>
            <li>Rp. 50000</li>
            <li>Rp. 50000</li>
            <li className='font-semibold'>Rp. 400000</li>
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
