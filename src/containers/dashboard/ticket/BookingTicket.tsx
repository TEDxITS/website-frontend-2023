import { RadioGroup } from '@headlessui/react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import Ticket, {
  TicketLeftSide,
  TicketRightSide,
} from '@/containers/dashboard/Ticket';
import { TicketArray } from '@/containers/dashboard/ticket/BookingForm';

import clsxm from '@/utils/clsxm';

import { TicketData, TicketType } from '@/types/dashboard.types';

export default function BookingTicket({
  selectedTickets,
  ticketType,
  index,
}: {
  selectedTickets: TicketData[];
  ticketType: TicketType;
  index: number;
}) {
  const methods = useFormContext<TicketArray>();
  const {
    control,
    formState: { errors },
  } = methods;

  const [selectedTicket, setSelectedTicket] = React.useState<TicketData | null>(
    selectedTickets[0]
  );

  return (
    <>
      <input
        id={`tickets[${index}].ticketId`}
        type='hidden'
        {...methods.register(`tickets.${index}.ticketId`)}
      />

      <Ticket>
        <TicketLeftSide type={ticketType}>
          <div className='relative flex border-inherit py-10 px-2 md:py-5 md:px-10'>
            <div
              className='rotate-180 border-l-2 border-inherit pl-4 text-center font-baron text-3xl font-medium'
              style={{ writingMode: 'vertical-rl' }}
            >
              {ticketType} TICKET
            </div>
            <div className='grow border-inherit'>
              <div className='border-b-2 border-inherit px-4 pb-4'>
                <h1 className='font-baron font-medium'>BOARDING PASS</h1>
              </div>
              <div className='flex flex-col gap-10 border-inherit p-4 md:flex-row'>
                <div className='w-full border-inherit md:w-1/2'>
                  <div className='mb-3 flex flex-col border-inherit'>
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
                      className='border-b-2 border-inherit bg-transparent pb-1.5 focus:outline-none'
                    />
                    {errors?.tickets?.[index]?.name && (
                      <p
                        className={clsxm(
                          ticketType === 'Early Bird'
                            ? 'text-cred'
                            : 'text-red-100'
                        )}
                      >
                        {errors.tickets[index]?.name?.message}
                      </p>
                    )}
                  </div>
                  <div className='mb-3 flex flex-col border-inherit'>
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
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'The provided email is not valid',
                        },
                      })}
                      className='border-b-2 border-inherit bg-transparent pb-1.5 focus:outline-none'
                    />
                    {errors?.tickets?.[index]?.email && (
                      <p
                        className={clsxm(
                          ticketType === 'Early Bird'
                            ? 'text-cred'
                            : 'text-red-100'
                        )}
                      >
                        {errors.tickets[index]?.email?.message}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-col border-inherit'>
                    <label
                      htmlFor={`tickets[${index}].phoneNumber`}
                      className='font-quaker'
                    >
                      Phone Number
                    </label>
                    <input
                      id={`tickets[${index}].phoneNumber`}
                      type='text'
                      {...methods.register(`tickets.${index}.phoneNumber`, {
                        required: 'Phone number is required',
                      })}
                      className='border-b-2 border-inherit bg-transparent pb-1.5 focus:outline-none'
                    />
                    {errors?.tickets?.[index]?.phoneNumber && (
                      <p
                        className={clsxm(
                          ticketType === 'Early Bird'
                            ? 'text-cred'
                            : 'text-red-100'
                        )}
                      >
                        {errors.tickets[index]?.phoneNumber?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className='flex w-full flex-col justify-center gap-5 md:w-1/2'>
                  <Controller
                    control={control}
                    name={`tickets.${index}.ticketId`}
                    render={({ field: { onChange } }) => (
                      <RadioGroup
                        value={selectedTicket}
                        onChange={(e: TicketData) => {
                          onChange(e.id);
                          setSelectedTicket(e);
                        }}
                      >
                        <RadioGroup.Label className='text-center font-quaker'>
                          Ticket Type
                        </RadioGroup.Label>
                        <div className='flex items-center space-x-4'>
                          {selectedTickets.map((ticket) => (
                            <RadioGroup.Option key={ticket.id} value={ticket}>
                              {({ checked }) => (
                                <div className='flex items-center'>
                                  <div
                                    className={`h-6 w-6 ${
                                      checked ? 'bg-blue-500' : 'bg-gray-400'
                                    } flex cursor-pointer items-center justify-center rounded-full p-0.5`}
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
                                    {ticket.name}
                                  </div>
                                </div>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    )}
                  />

                  <div>
                    <p className='font-quaker'>Price</p>
                    <p className='font-baron text-[1rem] sm:text-[1.5rem]'>
                      Rp. {selectedTicket?.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TicketLeftSide>
        <TicketRightSide type={ticketType}>
          <div className='relative px-10 py-5'>
            <div className='border-b-2 border-white px-4 pb-4'>
              <p className='text-center text-xl font-medium text-white'>
                Information About Kit
              </p>
            </div>
          </div>
        </TicketRightSide>
      </Ticket>
    </>
  );
}
