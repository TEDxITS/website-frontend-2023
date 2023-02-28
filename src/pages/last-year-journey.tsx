import { NormalFooter } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import DefaultHead from '@/components/utils/DefaultHead';
import LastYearJourneySection from '@/containers/about/LastYearJourneySection';
import PreviousSpeakerContainer from '@/containers/about/PreviousSpeakerContainer';
import StartedConversationContainer from '@/containers/about/StartedConversationContainer';

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
