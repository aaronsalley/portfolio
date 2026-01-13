import Image from 'next/image';
import Link from 'next/link';
import link_out from '../../public/svgs/link_out.svg';
import { CaseStudy } from '@/data/getMDX';

export default function CarouselCard({ item }: { item: CaseStudy }) {
  return (
    <li className="z-0 flex w-full max-w-200 flex-col items-start">
      <Link href={item.slug && `/portfolio/${item.slug}`} className="w-full">
        <div className="relative flex items-center justify-center">
          {item.feature_image && (
            <Image
              src={item.feature_image}
              alt={item.client_name}
              width={800}
              height={400}
              className="aspect-7/5 h-auto w-full rounded-2xl object-cover"
            />
          )}
          {item.slug && !item.slug.startsWith('/') && (
            <Image
              src={link_out}
              alt=""
              className="absolute z-10 h-auto w-[8cqmin]"
            />
          )}
        </div>
        <h3 className="my-[1em] flex items-center text-[3.2cqmin]/[.8em] font-light tracking-tighter">
          {item.title}{' '}
          <small className="mx-[.4em] h-[1em] text-[50%]">
            for <span className="hidden">{item.client_name}</span>
          </small>
          <Image
            src={item.client_logo ?? ''}
            alt={item.client_name}
            width={100}
            height={50}
            className="inline-block h-[1em] w-auto saturate-0"
          />
        </h3>
      </Link>
    </li>
  );
}
