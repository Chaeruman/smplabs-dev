// components/flipbook-dialog.tsx
"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React from "react";

type FlipbookDialogProps = {
  /** The clickable thing that opens the modal. E.g., your <AnnouncementCard.Button> */
  trigger: React.ReactNode;
  /** Heyzine embed URL, e.g. https://heyzine.com/flip-book/XXXXX?embed=1 */
  flipbookUrl: string;
  /** Title shown in the modal header and iframe title */
  title: string;
  /** Announcement description (can be plain text or JSX) */
  description?: React.ReactNode;
  /** Optional: controlled open state */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function FlipbookDialog({
  trigger,
  flipbookUrl,
  title,
  description,
  open,
  onOpenChange,
}: FlipbookDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content
          className="
            fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-4xl
            -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-2xl
            focus:outline-none
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
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

          {/* Description (optional) */}
          {description ? (
            <div className="px-4 sm:px-5 pt-3 text-sm text-slate-700">
              {typeof description === "string" ? (
                <p className="leading-relaxed">{description}</p>
              ) : (
                description
              )}
            </div>
          ) : null}

          {/* Flipbook iframe */}
          <div className="p-4 sm:p-5">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-100">
              <iframe
                title={title}
                src={flipbookUrl}
                className="h-full w-full border-0"
                allow="fullscreen; clipboard-write"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
