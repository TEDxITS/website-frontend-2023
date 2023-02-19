import GrandThemeContainer from '@/containers/about/GrandThemeContainer';
import PreviousSpeakerContainer from '@/containers/about/PreviousSpeakerContainer';
import StartedConversationContainer from '@/containers/about/StartedConversationContainer';
import StarterKitContainer from '@/containers/about/StarterKitContainer';

export default function AboutPage() {
  return (
    <div className='bg-black'>
      <StarterKitContainer />
      <StartedConversationContainer />
      <PreviousSpeakerContainer />
      <GrandThemeContainer />
    </div>
  );
}
