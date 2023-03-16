import clsxm from '@/utils/clsxm';

export default function CFLSTitle({ className }: { className?: string }) {
  return (
    <div
      className={clsxm(
        'relative bg-white p-8 shadow-lg shadow-black/50',
        className
      )}
    >
      <div className='border border-black py-5 px-8 md:py-10'>
        <h1 className='text-center font-quaker text-3xl sm:text-4xl md:text-[3.3rem] md:leading-tight'>
          ARE <span className='font-baron text-cblue'>YOU</span> THE ONE
          <br />
          WE'RE LOOKING FOR?
        </h1>
      </div>
    </div>
  );
}
