import type { Metadata } from "next"
import ActivitiesPageClient from "./ActivitiesPageClient"

export const metadata: Metadata = {
  title: "SMP Labschool Jakarta - Kegiatan",
  description:
    "Kegiatan SMP Labschool Jakarta Rawamangun - SMP Labschool UNJ dengan agenda terlengkap. SMP Labsraw (SMP Labs Rawamangun) menyelenggarakan berbagai event akademik dan non-akademik berkualitas.",
  keywords: [
    "kegiatan SMP Labschool Jakarta",
    "agenda SMP Labsraw",
    "event SMP Labschool Rawamangun",
    "acara SMP Labs UNJ",
    "kegiatan siswa SMP Jakarta",
    "program SMP Labschool UNJ Rawamangun",
    "timeline SMP Labs Rawamangun",
  ],
  openGraph: {
    title: "SMP Labschool Jakarta - Kegiatan",
    description:
      "Kegiatan dan agenda terbaru SMP Labschool Jakarta Rawamangun. SMP Labsraw (SMP Labs Rawamangun) dengan event akademik dan non-akademik berkualitas.",
    url: "https://smplabschooljakarta.sch.id/kegiatan",
  },
  alternates: {
    canonical: "https://smplabschooljakarta.sch.id/kegiatan",
  },
}

export default function ActivitiesPage() {
  return <ActivitiesPageClient />
}
