import ContactHero from "@/components/contact/ContactHero"
import ContactInfo from "@/components/contact/ContactInfo"
import ContactForm from "@/components/contact/ContactForm"
import ContactMap from "@/components/contact/ContactMap"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SMP Labschool Jakarta - Kontak",
  description:
    "Kontak SMP Labschool Jakarta Rawamangun - SMP Labschool UNJ terbaik di Jakarta. Hubungi SMP Labsraw (SMP Labs Rawamangun) untuk informasi pendaftaran dan informasi sekolah.",
  keywords: [
    "kontak SMP Labschool Jakarta",
    "alamat SMP Labsraw Rawamangun",
    "telepon SMP Labschool UNJ",
    "email SMP Labs Rawamangun",
    "lokasi SMP Jakarta",
    "informasi SMP Labschool UNJ Rawamangun",
    "pendaftaran SMP Labs UNJ",
  ],
  openGraph: {
    title: "SMP Labschool Jakarta - Kontak",
    description:
      "Kontak SMP Labschool Jakarta Rawamangun. SMP Labsraw (SMP Labs Rawamangun) - alamat, telepon, email, dan informasi lengkap.",
    url: "https://smplabschooljakarta.sch.id/kontak",
  },
  alternates: {
    canonical: "https://smplabschooljakarta.sch.id/kontak",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  )
}
