import Image from "next/image";
import Link from "next/link";
import link_out from "@/assets/svgs/link_out.svg";
import { CaseStudy } from "@/data/cases";

export default function CarouselCard({ item }: { item: CaseStudy }) {
  return (
    <li className="w-full max-w-[800px] flex flex-col items-start z-0">
      <Link href={item.url} className="w-full">
        <div className="relative flex justify-center items-center">
          <Image
            src={item.image}
            alt={item.client}
            width={800}
            height={400}
            className="rounded-2xl aspect-[7/5] object-cover w-full"
          />
          {item.url && !item.url.startsWith("/") && (
            <Image
              src={link_out}
              alt=""
              className="absolute z-10 w-[8cqmin] h-auto"
            />
          )}
        </div>
        <h3 className="flex items-center text-[3.2cqmin]/[.8em] font-light tracking-tighter my-[1em]">
          {item.title}{" "}
          <small className="h-[1em] text-[50%] mx-[.4em]">for </small>
          <Image
            src={item.clientLogo}
            alt={item.client}
            width={100}
            height={50}
            className="inline-block h-[1em] w-auto saturate-0"
          />
        </h3>
      </Link>
    </li>
  );
}
