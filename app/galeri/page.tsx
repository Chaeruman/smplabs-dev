import GalleryHero from "@/components/gallery/GalleryHero"
import GalleryGrid from "@/components/gallery/GalleryGrid"
import GalleryStats from "@/components/gallery/GalleryStats"

export const metadata = {
  title: "Galeri - SMP Labschool Jakarta",
  description: "Koleksi foto kegiatan dan fasilitas SMP Labschool Jakarta.",
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
