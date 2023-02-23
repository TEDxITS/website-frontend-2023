import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import DefaultHead from '@/components/utils/DefaultHead';
import GrandThemeContainer from '@/containers/coba/GrandThemeContainer';

export default function GrandTheme() {
  return (
    <>
      <DefaultHead templateTitle='Grand Theme' isUsingAppDir={false} />
      <div className='bg-black bg-stars bg-contain bg-repeat'>
        <Header />
        <GrandThemeContainer />
        <NormalFooter />
      </div>
    </>
  );
}
