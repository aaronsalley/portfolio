export default function Positioning() {
  return (
    <section className='relative flex flex-col h-screen items-center justify-center bg-salley-black text-salley-white'>
      <div className='flex flex-col gap-6 max-w-2xs sm:max-w-xl text-center'>
        <p className='uppercase font-serif font-medium text-center text-5xl sm:text-8xl'>
          Why work{' '}
          <span className='block font-[oswald] font-semibold'>with us?</span>
        </p>
        <p className='font-sans sm:text-lg'>
          Unlike studios that focus on a single specific creative discipline, we
          emphasize high-end design and production, while bridging the gap
          between strategy and creation.
        </p>
      </div>
    </section>
  );
}
