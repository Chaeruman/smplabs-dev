import type React from "react"
import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito-sans"
})

export const metadata: Metadata = {
  title: {
    default: "SMP Labschool Jakarta - SMP Labschool UNJ Rawamangun Terbaik",
    template: "%s | SMP Labschool Jakarta",
  },
  description:
    "SMP Labschool Jakarta Rawamangun adalah SMP Labschool UNJ terbaik di Jakarta. SMP Labsraw (SMP Labs Rawamangun) menyediakan pendidikan berkualitas tinggi dengan fasilitas modern dan prestasi akademik terdepan.",
  keywords: [
    "SMP Labschool Jakarta",
    "SMP Labschool Jakarta Rawamangun",
    "SMP Labschool Rawamangun",
    "SMP Labsraw",
    "SMP Jakarta",
    "SMP Labschool UNJ",
    "SMP Labschool UNJ Rawamangun",
    "SMP Labs UNJ",
    "SMP Labs Rawamangun",
    "sekolah menengah pertama jakarta",
    "smp terbaik jakarta",
    "smp negeri jakarta",
    "pendidikan jakarta",
    "sekolah rawamangun",
    "labschool universitas negeri jakarta",
  ],
  authors: [{ name: "SMP Labschool Jakarta" }],
  creator: "SMP Labschool Jakarta",
  publisher: "SMP Labschool Jakarta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://smplabschooljakarta.sch.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://smplabschooljakarta.sch.id",
    title: "SMP Labschool Jakarta - SMP Labschool UNJ Rawamangun Terbaik",
    description:
      "SMP Labschool Jakarta Rawamangun (SMP Labsraw) adalah SMP Labschool UNJ terbaik di Jakarta. SMP Labs Rawamangun dengan pendidikan berkualitas tinggi dan prestasi terdepan.",
    siteName: "SMP Labschool Jakarta",
    images: [
      {
        url: "/banner-labschool.jpg",
        width: 1200,
        height: 630,
        alt: "SMP Labschool Jakarta - SMP Labschool UNJ Rawamangun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMP Labschool Jakarta - SMP Labs UNJ Rawamangun",
    description:
      "SMP Labschool Jakarta Rawamangun (SMP Labsraw) - SMP Labschool UNJ terbaik di Jakarta dengan pendidikan berkualitas tinggi.",
    images: ["/banner-labschool.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "Next.js",
  applicationName: "SMP Labschool Jakarta",
  referrer: "origin-when-cross-origin",
  category: "education",
  classification: "education",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-smp-labschool.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/logo-smp-labschool.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://smplabschooljakarta.sch.id" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.200000;106.816666" />
        <meta name="ICBM" content="-6.200000, 106.816666" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "SMP Labschool Jakarta",
              alternateName: [
                "SMP Labsraw",
                "SMP Labschool UNJ",
                "SMP Labschool Rawamangun",
                "SMP Labs UNJ",
                "SMP Labs Rawamangun",
              ],
              url: "https://smplabschooljakarta.sch.id",
              logo: "https://smplabschooljakarta.sch.id/logo-smp-labschool.png",
              image: "https://smplabschooljakarta.sch.id/banner-labschool.jpg",
              description:
                "SMP Labschool Jakarta Rawamangun (SMP Labsraw) adalah SMP Labschool UNJ terbaik di Jakarta dengan fasilitas modern dan kurikulum berkualitas tinggi.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Pemuda No. 10",
                addressLocality: "Rawamangun",
                addressRegion: "Jakarta Timur",
                postalCode: "13220",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-21-4894563",
                contactType: "customer service",
                availableLanguage: "Indonesian",
              },
              sameAs: ["https://satupemuda.smplabschooljakarta.sch.id/"],
              parentOrganization: {
                "@type": "EducationalOrganization",
                name: "Universitas Negeri Jakarta",
                alternateName: "UNJ",
              },
            }),
          }}
        />
      </head>
      <body className={nunitoSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
