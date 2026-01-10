"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { posts } from "@/data/cases";
import CarouselCard from "./CarouselCard";

const featuredCases = posts.slice(0, 4);

export default function Carousel() {
  const slides = useMemo(() => {
    if (featuredCases.length === 0) return [];
    const first = featuredCases[0];
    const last = featuredCases[featuredCases.length - 1];
    return [last, ...featuredCases, first];
  }, []);

  const [index, setIndex] = useState(slides.length > 1 ? 1 : 0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const pointerStartX = useRef<number | null>(null);
  const activePointerId = useRef<number | null>(null);

  const prev = () => {
    if (slides.length <= 1) return;
    setIndex((i) => Math.max(i - 1, 0));
  };
  const next = () => {
    if (slides.length <= 1) return;
    setIndex((i) => Math.min(i + 1, slides.length - 1));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = event.touches[0]?.clientX ?? null;
    touchStartX.current = startX;
    pointerStartX.current = startX;
    setDragOffset(0);
    setIsDragging(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const currentX = event.touches[0]?.clientX ?? touchStartX.current;
    const deltaX = currentX - touchStartX.current;
    if (Math.abs(deltaX) > 8) {
      event.preventDefault();
    }
    setDragOffset(deltaX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchEndX - touchStartX.current;
    touchStartX.current = null;
    pointerStartX.current = null;
    setIsDragging(false);
    setDragOffset(0);

    if (Math.abs(deltaX) < 60) return;
    if (deltaX > 0) {
      prev();
      return;
    }
    next();
  };

  const handleTouchCancel = () => {
    touchStartX.current = null;
    pointerStartX.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    if (event.button !== 0) return;
    activePointerId.current = event.pointerId;
    pointerStartX.current = event.clientX;
    setDragOffset(0);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    if (activePointerId.current !== event.pointerId) return;
    if (pointerStartX.current === null) return;
    setDragOffset(event.clientX - pointerStartX.current);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    if (activePointerId.current !== event.pointerId) return;
    if (pointerStartX.current === null) return;
    const deltaX = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    activePointerId.current = null;
    setIsDragging(false);
    setDragOffset(0);
    event.currentTarget.releasePointerCapture(event.pointerId);
    if (Math.abs(deltaX) < 60) return;
    if (deltaX > 0) {
      prev();
      return;
    }
    next();
  };

  const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== event.pointerId) return;
    pointerStartX.current = null;
    activePointerId.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  const translateX = `translateX(calc((100% - var(--slide-size)) / 2 + (var(--slide-size) + var(--slide-gap)) * -${index} + ${dragOffset}px))`;

  const handleTransitionEnd = () => {
    if (slides.length <= 1) return;
    if (index === 0) {
      setIsJumping(true);
      setIndex(slides.length - 2);
      return;
    }
    if (index === slides.length - 1) {
      setIsJumping(true);
      setIndex(1);
    }
  };

  useEffect(() => {
    if (!isJumping) return;
    const frame = requestAnimationFrame(() => {
      setIsJumping(false);
    });
    return () => cancelAnimationFrame(frame);
  }, [isJumping]);

  return (
    <div className="relative w-full">
      <div
        className="overflow-hidden select-none cursor-grab active:cursor-grabbing touch-pan-y [--slide-size:min(800px,60vw)] [--slide-gap:6%] md:[--slide-gap:4%]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerCancel}
        onPointerCancel={handlePointerCancel}
      >
        <div
          className="flex gap-[var(--slide-gap)]"
          style={{
            transform: translateX,
            transition:
              isDragging || isJumping ? "none" : "transform 300ms ease",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((item, itemIndex) => (
            <ul
              key={`${item.client}-${itemIndex}`}
              className="w-[var(--slide-size)] shrink-0 flex justify-center"
            >
              <CarouselCard item={item} />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
