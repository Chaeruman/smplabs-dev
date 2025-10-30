// components/announcement-card.tsx
import React, { createContext, useContext, useMemo, useState } from "react";
import Image from "next/image";
import { Eye, ArrowRight } from "lucide-react";
import { FlipbookDialog } from "../FlipbookDialog";
import { GalleryDialog } from "./GalleryDialog";

type Activity = {
  id: number | string;
  title: string;
  description: string;
  category: string;
  image?: string | null;
  flipbookUrl?: string;
  photos?: { src: string; alt?: string }[];
};

type CardCtx = {
  activity: Activity;
  hovered: boolean;
  setHovered: (v: boolean) => void;
};

const Ctx = createContext<CardCtx | null>(null);
const useCard = () => {
  const v = useContext(Ctx);
  if (!v)
    throw new Error(
      "AnnouncementCard subcomponent must be used inside <AnnouncementCard.Root>"
    );
  return v;
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Akademik: "from-blue-400 to-blue-500",
    Seni: "from-purple-400 to-pink-500",
    Sosial: "from-green-400 to-green-500",
    Olahraga: "from-orange-400 to-orange-500",
    Sains: "from-indigo-400 to-indigo-500",
    Bahasa: "from-rose-400 to-rose-500",
  };
  return `bg-gradient-to-r ${colors[category] ?? "from-gray-400 to-gray-500"}`;
};

/* ---------------- Root ---------------- */
type RootProps = React.PropsWithChildren<{
  activity: Activity;
  className?: string;
}>;

function Root({ activity, className, children }: RootProps) {
  const [hovered, setHovered] = useState(false);

  const value = useMemo<CardCtx>(
    () => ({ activity, hovered, setHovered }),
    [activity, hovered]
  );

  return (
    <Ctx.Provider value={value}>
      <div
        className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group h-full relative ${
          className ?? ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </div>
    </Ctx.Provider>
  );
}

/* ---------------- Image (hero) ---------------- */
type ImageProps = {
  className?: string;
  heightClass?: string; // tailor card height
};
function HeroImage({ className, heightClass = "h-40 sm:h-48" }: ImageProps) {
  const { activity, hovered } = useCard();
  const src = activity.image || "/placeholder.svg?height=250&width=400";
  return (
    <div className="relative">
      <div className={`relative ${heightClass}`}>
        <Image
          src={src}
          alt={activity.title}
          fill
          className={`object-cover transition-all duration-700 ${
            hovered ? "scale-105" : "scale-100"
          } ${className ?? ""}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

/* ---------------- Badge (category) ---------------- */
function Badge({ className }: { className?: string }) {
  const { activity } = useCard();
  return (
    <div
      className={`absolute top-2 sm:top-3 left-2 sm:left-3 ${className ?? ""}`}
    >
      <span
        className={`${getCategoryColor(
          activity.category
        )} text-white px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
      >
        {activity.category}
      </span>
    </div>
  );
}

/* ---------------- Body (content area padding) ---------------- */
function Body({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`p-4 sm:p-5 ${className ?? ""}`}>{children}</div>;
}

/* ---------------- Title ---------------- */
function Title({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  const { activity } = useCard();
  return (
    <h3
      className={`text-base sm:text-lg font-bold text-blue-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300 ${
        className ?? ""
      }`}
    >
      {children ?? activity.title}
    </h3>
  );
}

/* ---------------- Description ---------------- */
function Description({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  const { activity } = useCard();
  return (
    <p
      className={`text-sm text-gray-700 mb-3 sm:mb-4 line-clamp-3 group-hover:text-gray-800 transition-colors duration-300 ${
        className ?? ""
      }`}
    >
      {children ?? activity.description}
    </p>
  );
}

/* ---------------- Button ---------------- */
type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
  className?: string;
}>;
function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2.5 sm:py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-lg group btn-animate hover:scale-105 relative overflow-hidden ${
        className ?? ""
      }`}
    >
      <span className="relative z-10">{children ?? "Lihat Detail"}</span>
      <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}

/* ---------------- Export as compound ---------------- */
export const AnnouncementCard = Object.assign(Root, {
  Image: HeroImage,
  Badge,
  Body,
  Title,
  Description,
  Button,
});

/* ---------------- Optional List wrapper ---------------- */
type ListProps = {
  announcements: Activity[];
  className?: string;
};
export function AnnouncementList({ announcements, className }: ListProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 ${
        className ?? ""
      }`}
    >
      {announcements.map((activity, i) => (
        <div
          key={activity.id}
          className="transition-all duration-1000 opacity-0 translate-y-10"
          style={{ animation: `fadeInUp 0.8s ease forwards ${i * 0.12}s` }} // simple CSS-based delay
        >
          <AnnouncementCard activity={activity}>
            <div className="relative">
              <AnnouncementCard.Image />
              <AnnouncementCard.Badge />
            </div>

            <AnnouncementCard.Body>
              <AnnouncementCard.Title />
              <AnnouncementCard.Description />
              {"photos" in activity ? (
                <GalleryDialog
                  title={activity.title}
                  description={activity.description}
                  photos={activity.photos!}
                  trigger={
                    <AnnouncementCard.Button>
                      Lihat Galeri
                    </AnnouncementCard.Button>
                  }
                />
              ) : (
                <FlipbookDialog
                  title={activity.title}
                  description={activity.description}
                  flipbookUrl={activity.flipbookUrl!}
                  trigger={
                    <AnnouncementCard.Button>
                      Lihat Detail
                    </AnnouncementCard.Button>
                  }
                />
              )}
            </AnnouncementCard.Body>
          </AnnouncementCard>
        </div>
      ))}
    </div>
  );
}
