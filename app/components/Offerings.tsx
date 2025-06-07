import Image, { StaticImageData } from 'next/image';

export default function Offerings({
  offerings,
}: {
  offerings: {
    title: string;
    description: string;
    imageUrl: string | StaticImageData;
  }[];
}) {
  return (
    <section className='mx-auto pt-17 pb-32 max-w-3xs sm:max-w-2xl lg:max-w-3xl xl:max-w-5xl'>
      <h3 className='font-sans uppercase'>Our Features</h3>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {offerings.map((offering, index) => (
          <div key={index}>
            <Image
              src={offering.imageUrl}
              alt={offering.title}
              className='aspect-3/4 object-cover w-auto'
            />
            <h4 className='font-serif font-medium text-3xl xl:text-4xl'>
              {offering.title}
            </h4>
            <p className='font-sans'>{offering.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
