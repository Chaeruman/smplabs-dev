// components/gallery-dialog.tsx
"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

type GalleryDialogProps = {
  trigger: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  photos: { src: string; alt?: string }[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function GalleryDialog({
  trigger,
  title,
  description,
  photos,
  open,
  onOpenChange,
}: GalleryDialogProps) {
  const [idx, setIdx] = React.useState(0);
  const total = photos.length;

  const go = (n: number) => setIdx((p) => (p + n + total) % total);
  const goTo = (n: number) => setIdx(((n % total) + total) % total);

  // keyboard: ← / → to navigate
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  // simple touch/drag swipe
  const startX = React.useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) =>
    (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
    startX.current = null;
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content
          className="
            fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-4xl
            -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-2xl
            focus:outline-none
          "
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 p-4 sm:p-5 border-b">
            <Dialog.Title className="text-lg font-semibold text-slate-900">
              {title}
            </Dialog.Title>
            <Dialog.Close
              className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-slate-100 focus:outline-none"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          {/* Description */}
          {description ? (
            <div className="px-4 sm:px-5 pt-3 text-sm text-slate-700">
              {typeof description === "string" ? (
                <p className="leading-relaxed">{description}</p>
              ) : (
                description
              )}
            </div>
          ) : null}

          {/* Carousel */}
          <div className="p-4 sm:p-5">
            <div
              className="relative w-full overflow-hidden rounded-lg bg-slate-100"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {/* Slides */}
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${idx * 100}%)` }}
              >
                {photos.map((p, i) => (
                  <div
                    key={i}
                    className="min-w-full aspect-video bg-black/5 flex items-center justify-center"
                  >
                    {/* Use next/image if you’re in Next.js */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.src}
                      alt={p.alt ?? `${title} - ${i + 1}`}
                      className="h-full w-full object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>

              {/* Controls */}
              {total > 1 && (
                <>
                  <button
                    aria-label="Previous"
                    onClick={() => go(-1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    aria-label="Next"
                    onClick={() => go(1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          i === idx
                            ? "bg-white shadow ring-1 ring-black/10"
                            : "bg-white/50 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
