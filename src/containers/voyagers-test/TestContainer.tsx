'use client';
import { redirect } from 'next/navigation';
import React from 'react';

import Questions from '@/containers/voyagers-test/Questions';
import TestDownloadPage from '@/containers/voyagers-test/TestDownloadPage';
import TestLandingPage from '@/containers/voyagers-test/TestLandingPage';
import TestNamePage from '@/containers/voyagers-test/TestNamePage';
import TestResultPage from '@/containers/voyagers-test/TestResultPage';

import { useTestContext } from '@/context/TestContext';

export default function TestContainer() {
  const { step } = useTestContext();
  if (step === 0) {
    return <TestLandingPage />;
  } else if (step === 1) {
    return <TestNamePage />;
  } else if (step === 2) {
    return (
      <div className='h-full w-full overflow-y-auto'>
        <Questions />
      </div>
    );
  } else if (step === 3) {
    return <TestResultPage />;
  } else if (step === 4) {
    return <TestDownloadPage />;
  } else {
    redirect('/coming-soon');
  }
}
