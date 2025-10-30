"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnnouncementList } from "./ui/AnnouncementCard";

const AnnouncementSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // const [isVisible, setIsVisible] = useState(false);
  // // Force show for debugging
  // const [forceShow, setForceShow] = useState(false);

  // useEffect(() => {
  //   // Force show after 2 seconds for debugging
  //   const timer = setTimeout(() => {
  //     setForceShow(true);
  //   }, 2000);

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         // Add visible class to animate-on-scroll elements
  //         const animatedElements =
  //           entry.target.querySelectorAll(".animate-on-scroll");
  //         animatedElements.forEach((el, index) => {
  //           setTimeout(() => {
  //             el.classList.add("visible");
  //           }, index * 200);
  //         });
  //       }
  //     },
  //     { threshold: 0.1 } // Reduced threshold
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     observer.disconnect();
  //     clearTimeout(timer);
  //   };
  // }, []);

  // Always show fallback news if no data
  const fallbackNews = [
    {
      id: 1,
      title: "Prestasi Gemilang di Olimpiade Matematika Nasional",
      excerpt:
        "Siswa SMP Labschool Jakarta meraih medali emas dalam kompetisi matematika tingkat nasional.",
      date: "15 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Prestasi",
    },
    {
      id: 2,
      title: "Program Literasi Digital untuk Siswa",
      excerpt:
        "Meluncurkan program baru untuk meningkatkan kemampuan literasi digital siswa.",
      date: "10 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Program",
    },
    {
      id: 3,
      title: "Kegiatan Bakti Sosial di Panti Asuhan",
      excerpt:
        "Siswa dan guru berpartisipasi dalam kegiatan bakti sosial untuk membantu sesama.",
      date: "5 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kegiatan",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Informasi PSB 2025/2026",
      description:
        "Panduan Penerimaan Siswa Baru tahun ajaran 2025/2026: jadwal pendaftaran, syarat dokumen, alur seleksi, dan ketentuan daftar ulang.",
      category: "Akademik",
      image: "/placeholder.svg?height=250&width=400&text=PSB",
      flipbookUrl: "https://heyzine.com/flip-book/12d7edcf6f.html",
    },
    {
      id: 2,
      title: "PPSBB: Penguatan Sains, Bahasa, & Budaya",
      description:
        "Program pembinaan prestasi lintas bidang (olimpiade sains, debat bahasa, dan seni-budaya). Jadwal seleksi internal & modul pelatihan.",
      category: "Sains",
      image: "/placeholder.svg?height=250&width=400&text=PPSBB",
      flipbookUrl: "https://heyzine.com/flip-book/e4a9804c3d.html",
    },
    {
      id: 3,
      title: "UKBI: Uji Kemahiran Berbahasa Indonesia",
      description:
        "Sosialisasi UKBI: materi uji, contoh soal, cara pendaftaran, serta tips mencapai peringkat Unggul/Mahir. Terbuka untuk kelas IX–XII.",
      category: "Bahasa",
      image: "/placeholder.svg?height=250&width=400&text=UKBI",
      photos: [
        {
          src: "/misbud/misbud-image-1.jpeg",
          alt: "Simulasi UKBI di lab bahasa",
        },
        {
          src: "/misbud/misbud-image-2.jpeg",
          alt: "Sesi briefing peserta UKBI",
        },
        {
          src: "/misbud/misbud-image-3.jpeg",
          alt: "Pembahasan contoh soal UKBI",
        },
      ],
    },
    {
      id: 4,
      title: "Misbud: Misi Budaya & Pentas Kesenian",
      description:
        "Tim kesenian sekolah (musik, tari, teater) tampil dalam agenda misi budaya. Rincian tema, jadwal latihan, dan kebutuhan kostum/properti.",
      category: "Seni",
      image: "/placeholder.svg?height=250&width=400&text=Misbud",
      photos: [
        { src: "/misbud/misbud-image-1.jpeg", alt: "Latihan tari tradisional" },
        { src: "/misbud/misbud-image-2.jpeg", alt: "Pentas musik kolaboratif" },
        {
          src: "/misbud/misbud-image-3.jpeg",
          alt: "Gladi bersih teater sekolah",
        },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
            Informasi Terkini
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Ikuti perkembangan terbaru dan berbagai kegiatan menarik di SMP
            Labschool Jakarta
          </p>
        </div>

        <AnnouncementList announcements={announcements} />

        <div className="text-center mt-8 sm:mt-12 animate-on-scroll">
          <Link
            href="/kegiatan"
            className="btn-primary btn-animate hover:scale-105 transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
          >
            Lihat Semua Kegiatan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
