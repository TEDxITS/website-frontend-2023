import { StaticImageData } from 'next/image';
import Link from 'next/link';

import UnstyledLink from '@/components/link/UnstyledLink';

import commandmentIcon from '~/images/call-for-local-speaker/commandment.png';
import registrationIcon from '~/images/call-for-local-speaker/registration-form.png';
import requirementsIcon from '~/images/call-for-local-speaker/requirements.png';
import timelineIcon from '~/images/call-for-local-speaker/timeline.png';

export type CallForLocalSpeakerTabType = {
  title: string;
  component: React.ReactNode;
  icon: StaticImageData;
};

export const callForLocalSpeakerTabs: CallForLocalSpeakerTabType[] = [
  {
    title: 'Call For Local Speaker',
    component: <LandingSection />,
    icon: requirementsIcon,
  },
  {
    title: 'Requirements',
    component: <RequirementsSection />,
    icon: requirementsIcon,
  },
  {
    title: 'Timeline',
    component: <TimelineSection />,
    icon: timelineIcon,
  },
  {
    title: 'TEDx Commandment',
    component: <CommandmentSection />,
    icon: commandmentIcon,
  },
  {
    title: 'Registration Form',
    component: <RegistrationSection />,
    icon: registrationIcon,
  },
];

function LandingSection() {
  return (
    <div className='flex h-full flex-col items-center justify-center bg-black bg-transparent-stars'>
      <h1 className='mb-10 text-center font-baron text-4xl text-green-300 sm:text-5xl md:text-6xl'>
        CALL FOR
        <br />
        LOCAL SPEAKER!
      </h1>
      <h2 className='rounded-full border border-green-300 px-5 py-2 text-center font-semibold text-green-300'>
        TEDxITS 2023
      </h2>
    </div>
  );
}

function RequirementsSection() {
  return (
    <div className='question flex flex-col items-center bg-black bg-transparent-stars py-5 px-2 text-green-300 sm:px-8'>
      <h2 className='mb-5 font-baron font-bold sm:text-4xl'>REQUIREMENTS</h2>
      <ul className='mb-4 list-decimal pl-6 font-vt323 text-lg font-normal sm:text-2xl'>
        <li className='mb-2'>Active student or alumni of ITS</li>
        <li className='mb-2'>Proof of study at ITS (PDF)</li>
        <li className='mb-2'>Curriculum Vitae (PDF)</li>
        <li className='mb-2'>
          Essay of max. 500 words explaining about your idea (PDF)
        </li>
        <li className='mb-2'>
          Make two videos that shows your face and can be heard clearly:
        </li>
        <ul>
          <li className='mb-2'>
            A. 3-5 minutes video of you presenting your own idea and topic for
            TEDx talk. Please keep in mind your idea should belong to one of the
            three subthemes (Tomorrow/7 Years Later/50 Years Later). Let your
            mind go wild!
          </li>
          <li className='mb-2'>B. Twibbon story (details ngikut dari MnB)</li>
        </ul>
        <li>
          Compile the requirements of points 2, 3, 4, 5a and upload them to your
          Google Drive folder (make sure that the folder is accessible for
          everyone). For point 5b, Upload it on your Instagram as a Reels and
          tag @tedxits (Make sure that your account is public). Keep the link
          and submit it on the registration form.
        </li>
      </ul>
      <p className='font-vt323'>
        Notes: Still unfamiliar with TEDxITS and our themes this year? Visit the
        About and Grand Theme page for more information.
      </p>
    </div>
  );
}

function TimelineSection() {
  return (
    <div className='flex min-h-full flex-col items-center bg-black bg-transparent-stars py-5 px-2 text-green-300 sm:px-8'>
      <h2 className='mb-5 font-baron font-bold sm:text-4xl'>TIMELINE</h2>
      <ul className='text-center font-vt323 text-lg sm:text-2xl'>
        <li className='mb-4'>
          Registration:
          <br />
          <span className='text-xl'>17-25 March 2023</span>
        </li>
        <li className='mb-4'>
          Extend:
          <br />
          <span className='text-xl'>26-30 March 2023</span>
        </li>
        <li className='mb-4'>
          Interview Phase:
          <br />
          <span className='text-xl'>1-2 April 2023</span>
        </li>
        <li className='mb-1'>
          Final Announcement:
          <br />
          <span className='text-xl'>4 April 2022</span>
        </li>
      </ul>
    </div>
  );
}

function CommandmentSection() {
  return (
    <div className='flex flex-col items-center bg-black bg-transparent-stars py-5 px-2 text-green-300 sm:px-8'>
      <h2 className='mb-5 text-center font-baron font-bold sm:text-4xl'>
        BEFORE YOU REGISTER...
      </h2>
      <p className='mb-2 font-vt323 text-lg sm:text-2xl'>
        Here are some resources that will help you as a candidate TEDx talk
        speaker!
      </p>
      <p className='mb-4 font-vt323 text-lg sm:text-2xl'>
        Chris Anderson’s TED talk on the secret to great public speaking{' '}
        <UnstyledLink
          className='hover:underline'
          href='https://www.youtube.com/watch?v=-FOCpMAww28'
        >
          (click here)
        </UnstyledLink>
      </p>

      <p className='font-vt323 text-2xl sm:text-3xl'>The TED Commandments</p>
      <div className='my-3 w-full border-b-2 border-green-300'></div>
      <ul className='mb-4 list-decimal pl-6 font-vt323 text-lg font-normal sm:text-2xl'>
        <li className='mb-2'>
          Dream big. Strive to create the best talk you have ever given. Reveal
          something never seen and heard before.
        </li>
        <li className='mb-2'>
          Show us the real you. Share your passions, your dreams, your fears. Be
          vulnerable. Talk about failure as well as success.
        </li>
        <li className='mb-2'>
          Discuss complex issues in plain talk. Don’t try to dazzle people with
          your intellect or speak in abstractions. Explain everything. Give
          examples. Tell stories. Be specific.
        </li>
        <li className='mb-2'>
          Connect with people’s emotions. Make us laugh! Make us cry!
        </li>
        <li className='mb-2'>
          Don’t flaunt your ego. Don’t boast. It’s the surest way to switch
          everyone’s attention off.
        </li>
        <li className='mb-2'>
          No selling from the stage! Unless TED specifically asks you to do so,
          do not talk about your company or organization.
        </li>
        <li className='mb-2'>
          Feel free to comment on other speakers’ talks. to praise or to
          criticize. Controversy energizes! Enthusiastic endorsement is
          powerful!
        </li>
        <li className='mb-2'>
          Don’t read your talk. Notes are fine. If the choice is between reading
          or rambling, then read.
        </li>
        <li className='mb-2'>
          End your talk on time. Doing otherwise is to steal time from the
          speakers who follow you. We won’t allow it.
        </li>
        <li className='mb-2'>
          Rehearse your talk in front of a trusted friend for timing, clarity,
          and impact.
        </li>
      </ul>
    </div>
  );
}

function RegistrationSection() {
  return (
    <div className='flex h-full flex-col items-center justify-center bg-black bg-transparent-stars'>
      <h1 className='mb-10 text-center font-baron text-4xl text-green-300 sm:text-5xl md:text-6xl'>
        BE THE NEXT TEDxITS LOCAL SPEAKER!
      </h1>
      <Link
        href='/call-for-local-speaker/register'
        className='rounded-full border border-green-300 px-5 py-2 text-center text-2xl font-semibold text-green-300 hover:bg-green-300 hover:text-black'
      >
        Register Here
      </Link>
    </div>
  );
}
