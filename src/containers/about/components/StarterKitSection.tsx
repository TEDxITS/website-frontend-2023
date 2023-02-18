export default function StarterKitSection() {
  return (
    <div className='z-10 flex min-h-screen flex-col justify-center p-14 sm:p-28'>
      <h2 className='mb-14 font-baron text-4xl text-white sm:mb-24 sm:text-6xl'>
        TED AND TEDX STARTER KIT
      </h2>

      <div className='flex flex-col gap-14 md:flex-row'>
        <div className='flex w-full flex-col items-center rounded-3xl bg-gray-100 bg-opacity-20 p-7 shadow-sm backdrop-blur-sm md:w-1/2'>
          <h2 className='pb-7 font-baron text-cred'>
            TED<span className='font-primary'>x</span>
          </h2>
          <p className='text-justify text-xl text-cwhite'>
            TEDx is a grassroots initiative, created in the spirit of TED's
            overall mission to reach and discover "Ideas Worth Spreading" TEDx
            brings the spirit of TED to local communities around the globe
            through TEDx events. These events are organized by passionate
            individuals who seek to uncover new ideas and to share the latest
            research in their local areas that spark conversations in their
            communities.
          </p>
        </div>

        <div className='flex w-full flex-col items-center rounded-3xl bg-gray-100 bg-opacity-20 p-7 shadow-sm backdrop-blur-sm md:w-1/2'>
          <h2 className='pb-7 font-baron text-cred'>
            TED<span className='font-primary'>x</span>
            <span className='text-cwhite'>ITS</span>
          </h2>
          <p className='text-justify text-xl text-cwhite'>
            TEDx aims to become an experience for individuals to delve into a
            journey of self-awareness by being reflective of one's self to
            discover one's passion and thrive in the respective field in order
            to give impact to others, and ultimately, the whole world
          </p>
        </div>
      </div>
    </div>
  );
}
