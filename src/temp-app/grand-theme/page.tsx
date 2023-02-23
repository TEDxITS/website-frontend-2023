import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import GrandThemeContainer from '@/containers/coba/GrandThemeContainer';

export default function GrandTheme() {
  return (
    <div>
      <div className='w-screen overflow-hidden overflow-x-clip bg-black bg-stars bg-contain bg-repeat'>
        <Header />
        <GrandThemeContainer />
        <NormalFooter />
      </div>
    </div>
  );
}
