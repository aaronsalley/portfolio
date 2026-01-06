"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/assets/cases";

export default function CaseStudies() {
  const categories = useMemo(() => {
    const unique = new Set(caseStudies.map((item) => item.category));
    return ["All", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const filteredCaseStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

  const renderFilters = () => (
    <div className="text-center">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        const isDimmed =
          hoveredCategory !== null && hoveredCategory !== category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            style={{
              fontSize: "clamp(1rem, 2.5vi, 6rem)",
            }}
            className={[
              "transition font-serif not-last:after:content-[', ']",
              isDimmed ? "opacity-40" : "opacity-100",
              isActive
                ? "text-soft-charcol"
                : "text-soft-charcol/60 hover:text-soft-charcol",
            ].join(" ")}
          >
            {category}
          </button>
        );
      })}
    </div>
  );

  const renderCaseStudiesList = () => (
    <ul className="grid gap-4 my-20 mx-4 md:mx-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {filteredCaseStudies.map(
        ({ image, category, title, url }, index: number) => {
          return (
            <Link
              key={title}
              href={url}
              target="_blank" // TODO: Remove target when local
              rel="noopener noreferrer" // TODO: Remove rel when local
            >
              <article className="pb-20">
                <Image
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  className={"object-cover aspect-[2/3] w-full h-auto pb-2"}
                />
                <p className={`font-sans text-sm pb-4`}>{category}</p>
                <h3 className={`font-sans text-xl`}>{title}</h3>
              </article>
            </Link>
          );
        },
      )}
    </ul>
  );

  if (caseStudies.length === 0) {
    return <p className="text-center">No projects available at the moment.</p>;
  }

  return (
    <div className="my-40">
      {renderFilters()}
      {filteredCaseStudies.length === 0 ? (
        <p className="text-center">No projects in this category yet.</p>
      ) : (
        renderCaseStudiesList()
      )}
    </div>
  );
}
