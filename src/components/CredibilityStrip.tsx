"use client";

import Image from "next/image";
import * as BrandLogos from "@/assets/svgs/brands";
import { useEffect } from "react";

export default function CredibilityStrip() {
  const height = 36;
  const gap = 40;
  const logos = Object.entries(BrandLogos);

  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  // Calculate total width for animation
  let totalWidth = 0;
  logos.forEach(([, Logo]) => {
    totalWidth += (Logo.width * height) / Logo.height + gap;
  });

  // Animation duration based on width (slower for more logos)
  const duration = Math.max(20, Math.floor(totalWidth / 50));

  // Keyframes for right-to-left scrolling
  const scrollStyle = `
    @keyframes scroll-logos-rtl {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${totalWidth}px); }
    }
  `;

  // Inject keyframes into the document
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = scrollStyle;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, [scrollStyle]);

  return (
    <div className="relative my-15 w-full overflow-hidden">
      <ul
        className="flex items-center"
        style={{
          width: `${totalWidth * 2}px`,
          gap: `${gap}px`,
          animation: `scroll-logos-rtl ${duration}s linear infinite`,
        }}
      >
        {allLogos.map(([name, Logo], index) => (
          <li key={index} className="flex items-center gap-8">
            <Image
              src={Logo}
              alt={name}
              height={height}
              className="opacity-60 grayscale-100 saturate-0"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
