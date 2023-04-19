'use client';

import { useAuthStore } from '@/store/useAuthStore';

export default function GreetingText() {
  const user = useAuthStore((state) => state.user);

  return <h1 className='mb-10 font-baron text-cwhite'>Hi, {user?.name}!</h1>;
}
