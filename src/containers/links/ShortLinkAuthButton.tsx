'use client';
import { signIn, signOut } from 'next-auth/react';

export function SignInButton() {
  return (
    <button className=' w-full' onClick={() => signIn('google')}>
      Sign In
    </button>
  );
}

export function SignOutButton() {
  return (
    <button className=' w-full' onClick={() => signOut()}>
      Sign Out
    </button>
  );
}
