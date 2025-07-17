import Image, { StaticImageData } from 'next/image';

export default function FloatingImagesSection({
  images,
  children,
}: {
  images?: StaticImageData[] | string[];
  children?: React.ReactNode;
}) {
  return (
    <section className='will-stick flex flex-col items-center justify-center min-h-screen bg-salley-black text-salley-white overflow-x-clip w-[100vw] relative'>
      <div className='flex flex-col gap-4 z-10 justify-center items-center mx-4'>
        {children}
      </div>
      {images &&
        images.map((image, index) => {
          if (index > 5) return null;

          return (
            <Image
              src={image}
              alt='Portfolio Image'
              className={['absolute object-cover', ...style.image[index]].join(
                ' '
              )}
              key={index}
            />
          );
        })}
    </section>
  );
}

const style = {
  image: [
    // TODO: Add fix for iPhone SE, Samsung Galaxy S8+
    [
      'aspect-ratio-108/561',
      'w-[calc(205/320*100vi)]',
      'translate-x-[50vi]',
      '-translate-y-[calc(400px-108/561*100vi)]',
      'max-w-[464px]',
      'lg:translate-x-[512px]',
      'lg:-translate-y-[234px]',
    ],
    [
      'aspect-ratio-141/561',
      'w-[calc(130/320*100vi)]',
      'translate-x-[42vi]',
      'translate-y-[calc(141/561*100vi)]',
      'max-w-[301px]',
      'md:translate-y-[193px]',
      'lg:translate-x-[429.66px]',
    ],
    // TODO: Add fix for iPhone SE, iPhone 14 Pro Max, Samsung Galaxy S8+, Samsung Galaxy S20 Ultra, Pixel 7, iPad mini, iPad Air, Surface Pro 7, Surface Duo, Asus ZenBook Fold, Samsung Galaxy A51/71,
    // Nest Hub, Nest Hub Max
    [
      'aspect-ratio-141/561',
      'w-[calc(205/320*100vi)]',
      'translate-x-[0vi]',
      'translate-y-[calc(400px-141/561*50vi)]',
      'max-w-[495.516px]',
      'lg:-translate-x-[0px]',
      'lg:translate-y-[0px]',
      'lg:bottom-[-30px]',
    ],
    [
      'aspect-ratio-109/561',
      'w-[calc(120/320*100vi)]',
      '-translate-x-[50vi]',
      'translate-y-[calc(10vi)]',
      'max-w-[281.32px]',
      'lg:-translate-x-[511.5px]',
      'lg:translate-y-[102.3px]',
    ],
    [
      'aspect-ratio-117/561',
      'w-[calc(180/320*100vi)]',
      '-translate-x-[50vi]',
      '-translate-y-[calc(19vi)]',
      'max-w-[496px]',
      'lg:-translate-x-[511px]',
      'lg:-translate-y-[153px]',
    ],
  ],
};
