'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import CaseStudyCard from './CaseStudyCard';
import { CaseStudy } from '@/data/getMDX';

export default function CaseStudyGrid({ posts }: { posts: CaseStudy[] }) {
  // Get search params
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('cat') ?? '';
  const tagParam = searchParams.get('tag') ?? '';

  // List of unique categories and tags
  const categories = useMemo(() => {
    const unique = new Set(posts.map((item) => item.category).filter(Boolean));
    return ['All', ...unique];
  }, [posts]);
  const tags = useMemo(() => {
    const unique = new Set(
      posts.reduce((acc, item) => {
        item.tags && item.tags.forEach((tag) => acc.push(tag));
        return acc;
      }, [] as string[])
    );
    return ['All', ...unique];
  }, [posts]);

  // Normalized maps for categories and tags
  const normalizedCategories = useMemo(() => {
    return new Map(
      categories.map((category) => [
        category && category.toLowerCase().trim(),
        category,
      ])
    );
  }, [categories]);
  const normalizedTags = useMemo(() => {
    return new Map(tags.map((tag) => [tag.toLowerCase().trim(), tag]));
  }, [tags]);

  // Initial active category and tag based on URL params
  const initialCategory = useMemo(() => {
    const normalized = categoryParam.toLowerCase().trim();
    if (!normalized) return categories[0];
    if (normalized === 'all') return 'All';
    return normalizedCategories.get(normalized) ?? categories[0];
  }, [categoryParam, categories, normalizedCategories]);
  const initialTag = useMemo(() => {
    const normalized = tagParam.toLowerCase().trim();
    if (!normalized) return tags[0];
    if (normalized === 'all') return 'All';
    return normalizedTags.get(normalized) ?? tags[0];
  }, [tagParam, tags, normalizedTags]);

  // Active category and tag states
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState(initialTag);

  // Sync active category and tag with URL param changes
  useEffect(() => {
    if (!categoryParam) return;
    const normalized = categoryParam.toLowerCase().trim();
    const nextCategory =
      normalized === 'all' ? 'All' : normalizedCategories.get(normalized);
    if (nextCategory && nextCategory !== activeCategory) {
      setActiveCategory(nextCategory);
    }
  }, [activeCategory, categoryParam, normalizedCategories, posts]);
  useEffect(() => {
    const normalized = tagParam.toLowerCase().trim();
    if (!normalized) {
      if (activeTag !== 'All') {
        setActiveTag('All');
      }
      return;
    }
    const nextTag =
      normalized === 'all' ? 'All' : normalizedTags.get(normalized);
    if (nextTag && nextTag !== activeTag) {
      setActiveTag(nextTag);
    }
  }, [activeTag, tagParam, normalizedTags, posts]);

  // Filtered case studies based on active category and tag
  const filteredCaseStudies = posts.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;
    const matchesTag =
      activeTag === 'All' ||
      (item.tags &&
        item.tags.some((tag) => tag.toLowerCase() === activeTag.toLowerCase()));
    return matchesCategory && matchesTag;
  });

  const renderFilters = () => (
    <div className="text-center">
      {categories.map((category) => {
        const isActive = activeTag === 'All' && category === activeCategory;
        const isDimmed =
          hoveredCategory !== null && hoveredCategory !== category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => {
              if (activeTag !== 'All') {
                setActiveTag('All');
                router.replace(pathname);
              }
              setActiveCategory(category);
            }}
            onMouseEnter={() => setHoveredCategory(category ?? null)}
            onMouseLeave={() => setHoveredCategory(null)}
            style={{
              fontSize: 'clamp(1rem, 2.5vi, 6rem)',
            }}
            className={[
              "font-serif transition not-last:after:content-[', ']",
              isDimmed ? 'opacity-40' : 'opacity-100',
              isActive
                ? 'text-salley-dark'
                : 'text-salley-dark/60 hover:text-salley-dark',
            ].join(' ')}
          >
            {category}
          </button>
        );
      })}
    </div>
  );

  const renderCaseStudiesList = () => (
    <ul className="mx-4 my-20 grid grid-cols-2 gap-4 md:mx-14 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {filteredCaseStudies.map((caseStudy, index: number) => (
        <CaseStudyCard key={index} {...caseStudy} />
      ))}
    </ul>
  );

  if (posts.length === 0) {
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
