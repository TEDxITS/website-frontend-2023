import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import StarterKitSection from '@/containers/coba/StarterKitSection';

export default function AboutPage() {
  return (
    <div className='w-screen overflow-hidden overflow-x-clip bg-black bg-stars bg-contain bg-repeat'>
      <Header />
      <StarterKitSection />
      <NormalFooter />
    </div>
  );
}
