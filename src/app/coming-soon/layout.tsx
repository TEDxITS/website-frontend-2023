// const inter = Inter({
//   variable: '--font-inter',
//   subsets: ['latin'],
// });

export default function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='relative h-screen w-screen overflow-hidden border-2 border-black bg-black'>
      {children}
    </section>
  );
}
