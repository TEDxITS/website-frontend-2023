import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import NewThemeContainer from '@/containers/coba/NewThemeContainer';
import SpeakerContainer from '@/containers/coba/SpeakerContainer';
import StartedConversationContainer from '@/containers/coba/StartedConversationContainer';
import StarterKitContainer from '@/containers/coba/StarterKitContainer';

export default function AboutPage() {
  return (
    <div className='w-screen overflow-x-clip bg-black bg-stars bg-contain bg-repeat'>
      <Header />
      <StarterKitContainer />
      <StartedConversationContainer />
      <SpeakerContainer />
      <NewThemeContainer />

      <NormalFooter />
    </div>
  );
}
