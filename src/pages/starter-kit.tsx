import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import DefaultHead from '@/components/utils/DefaultHead';
import StarterKitSection from '@/containers/coba/StarterKitSection';

export default function AboutPage() {
  return (
    <>
      <DefaultHead
        templateTitle='TED and TEDx Starter Kit'
        isUsingAppDir={false}
      />
      <div className='bg-black bg-stars bg-contain bg-repeat'>
        <Header />
        <StarterKitSection />
        <NormalFooter />
      </div>
    </>
  );
}
