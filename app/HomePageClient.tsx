"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import VisionSection from "@/components/home/VisionSection";
import StatsSection from "@/components/home/StatsSection";
import NewsSection from "@/components/home/NewsSection";
import FloatingActionButton from "@/components/ui/FloatingActionButton";
import ParticleBackground from "@/components/ui/ParticleBackground";
import ProgressBar from "@/components/ui/ProgressBar";
import AnnouncementSection from "@/components/home/AnnouncementSection";

export default function HomePageClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="text-center">
          <div className="spinner w-16 h-16 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">
            SMP Labschool Jakarta
          </h2>
          <p className="text-blue-200">Memuat halaman...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 relative">
      <ProgressBar />
      <ParticleBackground />
      <HeroSection />
      <VisionSection />
      <StatsSection />
      <AnnouncementSection />
      {/* <NewsSection /> */}
      <FloatingActionButton />
    </div>
  );
}
