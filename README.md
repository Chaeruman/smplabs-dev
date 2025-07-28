# SMP Labschool Jakarta - Website

Website resmi SMP Labschool Jakarta yang dibangun dengan Next.js dan teknologi modern.

## 📋 Deskripsi

Website SMP Labschool Jakarta adalah platform digital yang menyediakan informasi lengkap tentang sekolah, termasuk profil sekolah, kegiatan, ekstrakurikuler, galeri, dan informasi kontak. Website ini dirancang dengan fokus pada user experience yang optimal dan responsif di berbagai perangkat.

## ✨ Fitur

- **Halaman Beranda**: Hero section, visi misi, statistik sekolah, dan berita terbaru
- **Halaman Tentang**: Profil lengkap SMP Labschool Jakarta
- **Halaman Kegiatan**: Informasi kegiatan sekolah dan acara
- **Halaman Ekstrakurikuler**: Daftar dan informasi ekstrakurikuler yang tersedia
- **Halaman Galeri**: Galeri foto kegiatan dan acara sekolah
- **Halaman Kontak**: Informasi kontak dan lokasi sekolah
- **Responsif**: Optimized untuk desktop, tablet, dan mobile
- **SEO Optimized**: Meta tags, sitemap, dan struktur yang SEO-friendly
- **Modern UI**: Menggunakan Tailwind CSS dan Radix UI components

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## 🚀 Instalasi

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) atau npm

### Setup

1. Clone repository
```bash
git clone <repository-url>
cd smplabs-landing
```

2. Install dependencies
```bash
pnpm install
# atau
npm install
```

3. Run development server
```bash
pnpm dev
# atau
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📁 Struktur Project

```
smplabs-landing/
├── app/                    # Next.js app directory
│   ├── galeri/            # Halaman galeri
│   ├── kegiatan/          # Halaman kegiatan
│   ├── kontak/            # Halaman kontak
│   ├── tentang/           # Halaman tentang
│   ├── ekstrakurikuler/   # Halaman ekstrakurikuler
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── home/              # Homepage components
│   ├── layout/            # Layout components
│   ├── ui/                # Reusable UI components
│   └── [pages]/           # Page-specific components
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
└── styles/                 # Additional styles
```

## 🎨 Komponen

Website ini menggunakan komponen yang modular dan reusable:

- **Layout Components**: Header, Footer, Navigation
- **Home Components**: HeroSection, VisionSection, StatsSection, NewsSection
- **UI Components**: Button, Card, Modal, dan komponen Radix UI lainnya

## 📱 Responsive Design

Website dioptimalkan untuk berbagai ukuran layar:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Scripts

  ```bash
  # Development
  pnpm dev
  
  # Build untuk production
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint
```

## 🌐 Deployment

Website ini di-deploy menggunakan Vercel dan dapat diakses di:
**https://smplabschooljakarta.sch.id**

## 📄 License

Project ini dikembangkan untuk SMP Labschool Jakarta.

## 🤝 Kontribusi

Untuk kontribusi atau pertanyaan, silakan hubungi tim pengembang.

---

**SMP Labschool Jakarta** - Mendidik Generasi Unggul untuk Masa Depan
