import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LastYearJourneySection from '@/containers/coba/LastYearJourneySection';
import PreviousSpeakerContainer from '@/containers/coba/PreviousSpeakerContainer';
import StartedConversationContainer from '@/containers/coba/StartedConversationContainer';

export default function JourneyPage() {
  return (
    <div className='w-screen overflow-hidden overflow-x-clip bg-black bg-stars bg-contain bg-repeat'>
      <Header />
      <LastYearJourneySection />
      <StartedConversationContainer />
      <PreviousSpeakerContainer />

      <NormalFooter />
    </div>
  );
}
