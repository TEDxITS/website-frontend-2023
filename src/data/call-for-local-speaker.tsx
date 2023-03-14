export type CallForLocalSpeakerTabType = {
  title: string;
  component: React.ReactNode;
};

export const callForLocalSpeakerTabs: CallForLocalSpeakerTabType[] = [
  {
    title: 'Call For Local Speaker',
    component: <LandingSection />,
  },
  {
    title: 'Requirements',
    component: <RequirementsSection />,
  },
  {
    title: 'Timeline',
    component: <TimelineSection />,
  },
  {
    title: 'TEDx Commandment',
    component: <CommandmentSection />,
  },
  {
    title: 'Registration Form',
    component: <RegistrationSection />,
  },
];

function LandingSection() {
  return <div>Landing</div>;
}

function RequirementsSection() {
  return (
    <div className='mx-auto flex flex-col items-center p-3'>
      <h2 className='mb-4 text-2xl font-bold'>Requirements</h2>
      <ul className='mb-4 list-decimal pl-6'>
        <li className='mb-2'>Active student or alumni of ITS</li>
        <li className='mb-2'>Proof of study at ITS (PDF)</li>
        <li className='mb-2'>Curriculum Vitae (PDF)</li>
        <li className='mb-2'>
          Essay of max. 500 words explaining about your idea (PDF)
        </li>
        <li className='mb-2'>
          Make two videos that shows your face and can be heard clearly:
          <ul>
            <li className='mb-2'>
              A. 3-5 minutes video of you presenting your own idea and topic for
              TEDx talk. Please keep in mind your idea should belong to one of
              the three subthemes (Tomorrow/7 Years Later/50 Years Later). Let
              your mind go wild!
            </li>
            <li className='mb-2'>B. Twibbon story (details ngikut dari MnB)</li>
          </ul>
        </li>
      </ul>
      <p className='text-sm'>
        Notes: Still unfamiliar with TEDxITS and our themes this year? Visit the
        About and Grand Theme page for more information.
      </p>
    </div>
  );
}

function TimelineSection() {
  return (
    <div className='flex w-full flex-col p-3'>
      <h2 className='mb-4 text-2xl font-bold'>Timeline CFS</h2>
      <ul className='mb-8 list-disc pl-6'>
        <li className='mb-2'>Registration: 17-25 March 2023</li>
        <li className='mb-2'>Extend: 26-30 March 2023</li>
        <li className='mb-2'>Interview Phase: 1-2 April 2023</li>
        <li className='mb-2'>Final Announcement: 4 April 2022</li>
      </ul>
    </div>
  );
}

function CommandmentSection() {
  return <div>Commandment</div>;
}

function RegistrationSection() {
  return <div>Registration</div>;
}
