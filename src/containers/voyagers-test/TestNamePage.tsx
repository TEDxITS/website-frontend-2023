import Button from '@/components/button/Button';

import { useTestContext } from '@/context/TestContext';

export default function TestNamePage() {
  const { nextStep, setUserName, userName } = useTestContext();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  return (
    <section className='flex h-full w-full flex-col items-center justify-center px-4 sm:px-0'>
      <h1 className='mb-5 text-center font-quaker text-4xl text-cwhite shadow-lg sm:text-6xl'>
        Hello...
      </h1>
      <p className='text-cwhite'>{userName}</p>
      <label htmlFor='name' className='text-white'>
        Your Name:
      </label>
      <div className='mb-6 border-b-2 border-cwhite'>
        <input
          type='text'
          id='name'
          className='border-transparent bg-transparent text-white focus:border-0 focus:border-transparent focus:outline-none focus:outline-0 focus:ring-0'
          onChange={handleNameChange}
          value={userName}
        />
      </div>
      <Button className='px-10' onClick={nextStep}>
        <p className='text-xl sm:text-2xl'>Start the quiz</p>
      </Button>
    </section>
  );
}
