import clsxm from '@/utils/clsxm';

export default function CircularStarfieldContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={clsxm(
        'relative h-screen w-screen overflow-hidden bg-cblack',
        className
      )}
    >
      {children}
      <div className='starfield'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </main>
  );
}
