import GalleryHero from "@/components/gallery/GalleryHero"
import GalleryGrid from "@/components/gallery/GalleryGrid"
import GalleryStats from "@/components/gallery/GalleryStats"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SMP Labschool Jakarta - Galeri",
  description:
    "Galeri SMP Labschool Jakarta Rawamangun - SMP Labschool UNJ dengan dokumentasi terlengkap. SMP Labsraw (SMP Labs Rawamangun) menampilkan foto kegiatan siswa dan fasilitas sekolah terbaik.",
  keywords: [
    "galeri SMP Labschool Jakarta",
    "foto SMP Labsraw",
    "dokumentasi SMP Labschool Rawamangun",
    "galeri SMP Labs UNJ",
    "foto siswa SMP Jakarta",
    "dokumentasi SMP Labschool UNJ Rawamangun",
    "album SMP Labs Rawamangun",
  ],
  openGraph: {
    title: "SMP Labschool Jakarta - Galeri",
    description:
      "Galeri foto dan dokumentasi SMP Labschool Jakarta Rawamangun. SMP Labsraw (SMP Labs Rawamangun) dengan koleksi momen berharga siswa dan kegiatan sekolah.",
    url: "https://smplabschooljakarta.sch.id/galeri",
  },
  alternates: {
    canonical: "https://smplabschooljakarta.sch.id/galeri",
  },
}

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <GalleryHero />
      <GalleryGrid />
      <GalleryStats />
    </div>
  )
}
