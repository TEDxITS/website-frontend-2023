import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LastYearJourneySection from '@/containers/about/LastYearJourneySection';
import PreviousSpeakerContainer from '@/containers/about/PreviousSpeakerContainer';
import StartedConversationContainer from '@/containers/about/StartedConversationContainer';

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
