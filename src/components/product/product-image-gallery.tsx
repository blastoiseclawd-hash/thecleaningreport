"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import type { ProductImage } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: ProductImage[];
  productName: string;
  className?: string;
  frameClassName?: string;
  imageSizes?: string;
  priority?: boolean;
}

function normalizeImages(images: ProductImage[]) {
  const seen = new Set<string>();

  return images.filter((image) => {
    const url = image.url?.trim();
    if (!url) return false;
    if (url.includes("PKplay-button")) return false;
    if (seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}

export function ProductImageGallery({
  images,
  productName,
  className,
  frameClassName,
  imageSizes = "(min-width: 1280px) 320px, (min-width: 768px) 40vw, 100vw",
  priority = false,
}: ProductImageGalleryProps) {
  const galleryImages = useMemo(() => normalizeImages(images), [images]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (galleryImages.length === 0) {
    return (
      <div
        className={cn(
          "relative min-h-[18rem] overflow-hidden rounded-md border border-[#d7c5b3] bg-[radial-gradient(circle_at_center,#f2e4d5_0%,#e6d2be_56%,#d6b898_100%)]",
          frameClassName,
          className,
        )}
      />
    );
  }

  const selected = galleryImages[Math.min(selectedIndex, galleryImages.length - 1)];

  return (
    <div className={cn("grid gap-4", className)}>
      <div
        className={cn(
          "relative min-h-[18rem] overflow-hidden rounded-md border border-[#d7c5b3] bg-[radial-gradient(circle_at_center,#f2e4d5_0%,#e6d2be_56%,#d6b898_100%)]",
          frameClassName,
        )}
      >
        <div className="absolute inset-x-7 top-7 bottom-7 rounded-[999px] border border-white/40 bg-white/18" />
        <Image
          src={selected.url}
          alt={selected.alt || `${productName} product photo`}
          fill
          className="object-contain p-8 drop-shadow-[0_28px_34px_rgba(35,21,15,0.24)]"
          sizes={imageSizes}
          priority={priority}
        />
      </div>

      {galleryImages.length > 1 ? (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {galleryImages.map((image, index) => {
            const isActive = index === selectedIndex;

            return (
              <button
                key={`${image.url}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  "relative h-20 w-20 shrink-0 overflow-hidden rounded-sm border bg-[#fffaf3] transition-colors",
                  isActive
                    ? "border-[#6f875f] ring-1 ring-[#8ea087]"
                    : "border-[#d7c5b3] hover:border-[#a9b39f]",
                )}
                aria-label={`Show ${productName} image ${index + 1}`}
                aria-pressed={isActive}
              >
                <Image
                  src={image.url}
                  alt={image.alt || `${productName} thumbnail ${index + 1}`}
                  fill
                  className="object-contain p-2"
                  sizes="80px"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
