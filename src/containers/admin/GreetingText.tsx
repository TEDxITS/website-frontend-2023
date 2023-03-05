'use client';

export default function GreetingText() {
  const dayTime =
    new Date().getHours() < 12
      ? 'Morning'
      : new Date().getHours() < 18
      ? 'Afternoon'
      : 'Evening';

  return <h1 className='mb-5 font-baron text-cwhite'>Good {dayTime}!</h1>;
}
