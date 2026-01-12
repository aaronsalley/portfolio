import { Metadata } from "next";
import PostList from "@/components/PostList";
import { fetchPosts } from "@/data/fetchPosts";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description: `Capabilities and services focused on product invention, strategic clarity, and building systems that scale without losing coherence.`,
};

export default async function ServicesPage() {
  const posts = await fetchPosts();

  const renderServices = () => {
    return (
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <li
            key={service.title}
            className="p-8 rounded-2xl bg-salley-light/50 border border-salley-primary/30"
          >
            <div className="flex justify-center items-center h-[5rem] aspect-square bg-salley-dark rounded-full mb-[2rem] *:h-[3rem] *:w-auto *:text-salley-light">
              {service.image}
            </div>
            <h2 className="text-2xl my-[.5em]">{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <main className="bg-salley-primary/10">
        <div className="flex flex-col gap-15 mx-10 max-w-7xl lg:mx-auto mt-40">
          <header className="text-center lg:max-w-3/4 lg:mx-auto">
            <h1 className="text-5xl font-serif pb-[.5em]">
              Bespoke Solutions Tailored to Your Needs
            </h1>
            <p>
              I work at the intersection of product invention, strategy, and
              execution—most often where complexity has outpaced clarity and
              something new needs to be defined. My approach combines creative
              ambition with a builder’s understanding of how systems are
              actually made, allowing ideas to move cleanly from intent to
              implementation.
            </p>
          </header>
          {renderServices()}
          <p className="text-center lg:max-w-3/4 lg:mx-auto">
            I work best with teams who value clarity, restraint, and long-term
            thinking. Engagements are selective by design, shaped by context
            rather than scope. The aim is not more output—but better decisions,
            stronger systems, and work that endures.
          </p>
        </div>
      </main>
      <aside>
        <PostList posts={posts} />
      </aside>
      <CTA />
    </>
  );
}

type Service = {
  title: string;
  description: string;
  image?: React.ReactElement<SVGSVGElement> | string;
  link?: string;
};

const services: Service[] = [
  {
    title: "Product Strategy & Advisory",
    description:
      "For founders and executives navigating high-stakes decisions. I help shape product direction, portfolio choices, and roadmap priorities—surfacing the decisions that matter most and creating alignment before momentum is lost.",
    image: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          r="12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <polygon
          points="14,5 16,13 23,14 16,15 14,23 12,15 5,14 12,13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "0→1 Product Leadership",
    description:
      "For moments when something new needs to exist. I lead early-stage product definition through launch, pairing original thinking with disciplined execution so new products can move from concept to reality without friction.",
    image: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M14 4V10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 18V24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 14H10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 14H24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="3" fill="currentColor" />
        <path
          d="M8.22 8.22L11.5 11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.78 8.22L16.5 11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8.22 19.78L11.5 16.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.78 19.78L16.5 16.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Platform & Experience Modernization",
    description:
      "For organizations outgrowing their systems. I reframe fragmented platforms and experiences into cohesive, scalable products—simplifying architecture, workflows, and interfaces while preserving what already works.",
    image: (
      <svg
        width="27"
        height="31"
        viewBox="0 0 27 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3391_1692)">
          <path
            d="M14.0762 25.7246C14.1445 25.7051 14.2031 25.6758 14.2715 25.6367L21.918 21.2812C22.8262 20.7637 23.3145 20.2363 23.3145 18.8203V11.2129C23.3145 10.9199 23.2949 10.6856 23.2363 10.4707L14.0762 15.7051V25.7246ZM12.7383 25.7246V15.7051L3.57812 10.4707C3.51953 10.6856 3.5 10.9199 3.5 11.2129V18.8203C3.5 20.2363 3.99805 20.7637 4.89648 21.2812L12.5527 25.6367C12.6113 25.6758 12.6699 25.7051 12.7383 25.7246ZM13.4121 14.5332L17.582 12.1699L8.33398 6.88672L4.75 8.92773C4.53516 9.04492 4.35938 9.16211 4.20312 9.30859L13.4121 14.5332ZM18.9395 11.3984L22.6113 9.30859C22.4648 9.16211 22.2891 9.04492 22.0742 8.92773L15.1797 5.00195C14.584 4.66016 13.9883 4.47461 13.4121 4.47461C12.8262 4.47461 12.2305 4.66016 11.6348 5.00195L9.65234 6.125L18.9395 11.3984Z"
            fill="currentColor"
          />
          <path
            d="M13.5 0C14.3284 0 15 0.671573 15 1.5C15 1.51242 14.9983 1.52476 14.998 1.53711L24.5781 7.06836C24.8326 6.86955 25.152 6.75 25.5 6.75C26.3284 6.75 27 7.42157 27 8.25C27 8.85544 26.6405 9.37534 26.124 9.6123V20.8867C26.6407 21.1236 27 21.6444 27 22.25C27 23.0784 26.3284 23.75 25.5 23.75C25.1518 23.75 24.8327 23.6297 24.5781 23.4307L14.9814 28.9707C14.8746 29.6943 14.2533 30.25 13.5 30.25C12.7466 30.25 12.1244 29.6944 12.0176 28.9707L2.4209 23.4307C2.16645 23.6294 1.84789 23.75 1.5 23.75C0.671573 23.75 0 23.0784 0 22.25C0 21.6444 0.359305 21.1236 0.875977 20.8867V9.6123C0.359504 9.37534 0 8.85544 0 8.25C0 7.42157 0.671573 6.75 1.5 6.75C1.84768 6.75 2.16652 6.86983 2.4209 7.06836L12.001 1.53711C12.0007 1.52477 12 1.51241 12 1.5C12 0.671573 12.6716 0 13.5 0ZM14.6318 2.48145C14.3568 2.79834 13.9525 3 13.5 3C13.0472 3 12.6422 2.79862 12.3672 2.48145L2.95996 7.91211C2.98502 8.02083 3 8.13367 3 8.25C3 8.94839 2.52216 9.53315 1.87598 9.7002V20.7988C2.52228 20.9658 3 21.5515 3 22.25C3 22.366 2.98488 22.4785 2.95996 22.5869L12.2363 27.9424C12.5029 27.5261 12.969 27.25 13.5 27.25C14.0308 27.25 14.4961 27.5264 14.7627 27.9424L24.0391 22.5869C24.0142 22.4785 24 22.3659 24 22.25C24 21.5515 24.4777 20.9658 25.124 20.7988V9.7002C24.4778 9.53315 24 8.94839 24 8.25C24 8.13374 24.014 8.02076 24.0391 7.91211L14.6318 2.48145Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_3391_1692">
            <rect width="27" height="30.25" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Decision Facilitation",
    description:
      "For teams at an inflection point. I step in when progress has stalled, assumptions need to be challenged, or clarity has eroded—helping teams reset direction and move forward with confidence.",
    image: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3393_1743)">
          <path
            d="M0 7.79297C0 12.0898 3.49609 15.5859 7.79297 15.5859C9.49219 15.5859 11.0449 15.0391 12.3242 14.1211L17.1289 18.9355C17.3535 19.1602 17.6465 19.2676 17.959 19.2676C18.623 19.2676 19.082 18.7695 19.082 18.1152C19.082 17.8027 18.9648 17.5195 18.7598 17.3145L13.9844 12.5098C14.9902 11.2012 15.5859 9.57031 15.5859 7.79297C15.5859 3.49609 12.0898 0 7.79297 0C3.49609 0 0 3.49609 0 7.79297ZM1.66992 7.79297C1.66992 4.41406 4.41406 1.66992 7.79297 1.66992C11.1719 1.66992 13.916 4.41406 13.916 7.79297C13.916 11.1719 11.1719 13.916 7.79297 13.916C4.41406 13.916 1.66992 11.1719 1.66992 7.79297Z"
            fill="currentColor"
          />
          <path
            d="M4.7168 7.16797H10.9082C11.2891 7.16797 11.582 6.86523 11.582 6.48438C11.582 6.10352 11.2891 5.80078 10.9082 5.80078H4.7168C4.32617 5.80078 4.0332 6.10352 4.0332 6.48438C4.0332 6.86523 4.32617 7.16797 4.7168 7.16797ZM4.7168 9.77539H9.20898C9.58984 9.77539 9.90234 9.48242 9.90234 9.10156C9.90234 8.7207 9.58984 8.4082 9.20898 8.4082H4.7168C4.32617 8.4082 4.0332 8.7207 4.0332 9.10156C4.0332 9.48242 4.32617 9.77539 4.7168 9.77539Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_3393_1743">
            <rect width="19.4434" height="19.2676" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Interim / Embedded Leadership",
    description:
      "For periods of transition or growth. I partner closely with teams as embedded leadership, bringing senior product judgment, technical fluency, and steady momentum where it’s needed most.",
    image: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          r="12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="8"
          y="16"
          width="12"
          height="4"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="11"
          y="10"
          width="6"
          height="6"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="14" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
];
