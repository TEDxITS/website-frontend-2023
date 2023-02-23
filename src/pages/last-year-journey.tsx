import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import DefaultHead from '@/components/utils/DefaultHead';
import LastYearJourneySection from '@/containers/coba/LastYearJourneySection';
import PreviousSpeakerContainer from '@/containers/coba/PreviousSpeakerContainer';
import StartedConversationContainer from '@/containers/coba/StartedConversationContainer';

export default function JourneyPage() {
  return (
    <>
      <DefaultHead templateTitle="Last Year's Journey" isUsingAppDir={false} />
      <div className='bg-black bg-stars bg-contain bg-repeat'>
        <Header />
        <LastYearJourneySection />
        <StartedConversationContainer />
        <PreviousSpeakerContainer />
        <NormalFooter />
      </div>
    </>
  );
}
