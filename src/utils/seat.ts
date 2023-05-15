export const getSeatOpenDate = (ticketName: string) => {
  if (ticketName === 'Normal' || ticketName === 'Booth')
    return new Date('2023-05-15T19:00:00');
  if (ticketName === 'Pre Sale' || ticketName === 'Early Bird')
    return new Date('2023-05-18T19:00:00');
  return new Date('2023-05-15T19:00:00');
};
