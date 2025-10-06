"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Search,
  Filter,
  SortAsc,
  Heart,
  Share2,
  Download,
  ZoomIn,
  RotateCcw,
  Star,
} from "lucide-react";

const GalleryGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageRotation, setImageRotation] = useState(0);
  const [touchStart, setTouchStart] = useState<{
    x: number;
    y: number;
    distance?: number;
  } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{
    x: number;
    y: number;
    distance?: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Reduced threshold for better mobile detection
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      id: "semua",
      label: "Semua",
      color: "bg-gradient-to-r from-blue-500 to-purple-500",
    },
    {
      id: "akademik",
      label: "Akademik",
      color: "bg-gradient-to-r from-blue-400 to-blue-500",
    },
    {
      id: "olahraga",
      label: "Olahraga",
      color: "bg-gradient-to-r from-green-400 to-green-500",
    },
    {
      id: "seni",
      label: "Seni & Budaya",
      color: "bg-gradient-to-r from-purple-400 to-pink-500",
    },
    {
      id: "sains",
      label: "Sains",
      color: "bg-gradient-to-r from-orange-400 to-orange-500",
    },
    {
      id: "sosial",
      label: "Sosial",
      color: "bg-gradient-to-r from-pink-400 to-rose-500",
    },
    {
      id: "fasilitas",
      label: "Fasilitas",
      color: "bg-gradient-to-r from-indigo-400 to-indigo-500",
    },
    {
      id: "wisuda",
      label: "Wisuda",
      color: "bg-gradient-to-r from-yellow-400 to-orange-400",
    },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Asesmen Tengah Semester (ATS)",
      description: "Pelaksanaan ATS SMP Labscool Jakarta",
      category: "akademik",
      image:
        "https://drive.google.com/uc?export=view&id=1PVSJCBPP4UcgtS17iK3ZDfSqkXX_RMgo",
      date: "26 September 2025",
      location: "Ruang Ujian",
    },
    {
      id: 2,
      title: "Labswicara",
      description: "Presentasi Hasil Penelitian Pada Karya Tulis Ilmiah",
      category: "Akademik",
      image:
        "https://drive.google.com/uc?export=view&id=1Un_Y7ouxiRQgtHU-GorB3xFOoBV0-Cre",
      date: "22 Agustus 2025",
      location: "Auditorium",
    },
    {
      id: 3,
      title: "Lari Lintas Juang 2025",
      description:
        "Pelaksanaan Lalinju 2025 untuk memeriahkan peringatan 17 Agustus",
      category: "olahraga",
      image:
        "https://drive.google.com/uc?export=view&id=1vUqN8-6tXqrMPeTs9JKuocALxzUMdj-4",
      date: "17 Agustus 2025",
      location: "Aula Sekolah",
    },
    {
      id: 4,
      title: "Prestasi Lomba Basket Floravika",
      description: "Peraihan Juara 2 Kategori Basket Floravika",
      category: "olahraga",
      image:
        "https://drive.google.com/uc?export=view&id=1AI_a4XqMpHG5r3TWzJWFH--s9sHfDoIW",
      date: "5 September 2025",
      location: "olahraga",
    },
    {
      id: 5,
      title: "Adiwiyata",
      description: "Membuat pot bunga berasal dari botol bekas",
      category: "sosial",
      image:
        "https://drive.google.com/uc?export=view&id=1mVlt0KzxeVotQBk8Ou7qAKieYjsXEtuj",
      date: "28 Agustus 2025",
      location: "SMP LABSCHOOL JAKARTA",
    },
    {
      id: 6,
      title: "Peresmian Meja Piket",
      description: "Fasilitas Meja Piket baru",
      category: "fasilitas",
      image:
        "https://drive.google.com/uc?export=view&id=1_ZDGQmxXxYIl16ZEO65bJdk3FmFkfMvS",
      date: "28 Agustus 2025",
      location: "Meja Piket",
    },
    {
      id: 7,
      title: "AYIMUN 18 - MALAYSIA 2025",
      description: "Asian Youth International Model United Nations ke - 18",
      category: "akademik",
      image:
        "https://drive.google.com/uc?export=view&id=1nkVPWoGllYlGjlQ3WQH0Clk1wU_B1wAa",
      date: "31 Agustus 2025",
      location: "Malaysia",
    },
    {
      id: 8,
      title: "Kantin Sehat",
      description:
        "Kantin Sehat Menyediakan Makanan Bergizi dan Berkualitas Tinggi",
      category: "fasilitas",
      image: "/fasilitas-kantin.jpg",
      date: "28 Februari 2025",
      location: "Kantin",
    },
    {
      id: 9,
      title: "Wisuda",
      description: "Pelepasan Tahun Ajaran 2024/2025 ",
      category: "wisuda",
      image: "/wisuda.jpg",
      date: "18 Juli 2025",
      location: "Balai Sudirman",
    },
  ];

  // Filter and sort items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = galleryItems;

    // Filter by category
    if (selectedCategory !== "semua") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.location.toLowerCase().includes(query)
      );
    }

    // Sort items
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;
        case "date":
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case "category":
          comparison = a.category.localeCompare(b.category);
          break;
        default:
          comparison = 0;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [selectedCategory, searchQuery, sortBy, sortOrder]);

  const filteredItems = filteredAndSortedItems;

  const openLightbox = (item: any, index: number) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsZoomed(false);
    setImageRotation(0);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
    setIsDragging(false);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  const toggleFavorite = (itemId: number) => {
    setFavorites((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const shareImage = async (item: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${item.title} - ${window.location.href}`);
      alert("Link berhasil disalin ke clipboard!");
    }
  };

  const downloadImage = (item: any) => {
    const link = document.createElement("a");
    link.href = item.image;
    link.download = `${item.title}.jpg`;
    link.target = "_blank";
    link.click();
  };

  const toggleZoom = () => {
    if (isZoomed) {
      setIsZoomed(false);
      setZoomLevel(1);
      setImagePosition({ x: 0, y: 0 });
    } else {
      setIsZoomed(true);
      setZoomLevel(2);
    }
  };

  const handleWheelZoom = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newZoom = Math.max(0.5, Math.min(3, zoomLevel + delta));
    setZoomLevel(newZoom);
    setIsZoomed(newZoom > 1);
  };

  const handleDoubleClick = () => {
    if (zoomLevel === 1) {
      setZoomLevel(2);
      setIsZoomed(true);
    } else {
      setZoomLevel(1);
      setIsZoomed(false);
      setImagePosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const rotateImage = () => {
    setImageRotation((prev) => (prev + 90) % 360);
  };

  // Touch handlers for mobile swipe gestures and pinch zoom
  const getDistance = (touch1: React.Touch, touch2: React.Touch) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    if (e.touches.length === 1) {
      setTouchStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    } else if (e.touches.length === 2) {
      const distance = getDistance(e.touches[0], e.touches[1]);
      setTouchStart({
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
        distance,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setTouchEnd({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    } else if (e.touches.length === 2) {
      const distance = getDistance(e.touches[0], e.touches[1]);
      setTouchEnd({
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
        distance,
      });
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    // Handle pinch zoom
    if (touchStart.distance && touchEnd.distance) {
      const scale = touchEnd.distance / touchStart.distance;
      const newZoom = Math.max(1, Math.min(2, zoomLevel * scale)); // Simplified zoom range
      setZoomLevel(newZoom);
      setIsZoomed(newZoom > 1);
      return;
    }

    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const isLeftSwipe = deltaX > 30; // Reduced threshold for easier swiping
    const isRightSwipe = deltaX < -30;
    const isUpSwipe = deltaY > 30;
    const isDownSwipe = deltaY < -30;

    // Simplified mobile gestures
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipes for navigation
      if (isLeftSwipe && filteredItems.length > 1) {
        nextImage();
      } else if (isRightSwipe && filteredItems.length > 1) {
        prevImage();
      }
    } else {
      // Vertical swipes for zoom (simplified)
      if (isUpSwipe && zoomLevel === 1) {
        setZoomLevel(2);
        setIsZoomed(true);
      } else if (isDownSwipe && zoomLevel > 1) {
        setZoomLevel(1);
        setIsZoomed(false);
        setImagePosition({ x: 0, y: 0 });
      }
    }
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredItems.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-gray-200 rounded-lg sm:rounded-xl lg:rounded-2xl h-48 sm:h-56 lg:h-64"></div>
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Search and Filter Controls */}
        <div
          className={`mb-6 sm:mb-8 lg:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari foto, kegiatan, atau lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
            {/* Category Filter - Mobile Optimized */}
            <div className="flex overflow-x-auto pb-3 gap-2 sm:gap-3 scrollbar-hide sm:justify-center w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? `${category.color} text-white shadow-lg scale-105`
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-sm"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300"
              >
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urutkan berdasarkan
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="date">Tanggal</option>
                    <option value="title">Judul</option>
                    <option value="category">Kategori</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urutan
                  </label>
                  <select
                    value={sortOrder}
                    onChange={(e) =>
                      setSortOrder(e.target.value as "asc" | "desc")
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="desc">Terbaru dulu</option>
                    <option value="asc">Terlama dulu</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("semua");
                      setSortBy("date");
                      setSortOrder("desc");
                    }}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                  >
                    Reset Filter
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="text-center text-gray-600 text-sm mb-4">
            Menampilkan {filteredItems.length} dari {galleryItems.length} foto
            {searchQuery && ` untuk "${searchQuery}"`}
          </div>
        </div>

        {/* Gallery Grid - Mobile Responsive */}
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <div
                    className="relative h-48 sm:h-56 lg:h-64"
                    onClick={() => openLightbox(item, index)}
                  >
                    <Image
                      src={
                        item.image ||
                        "https://drive.google.com/uc?export=view&id=1PVSJCBPP4UcgtS17iK3ZDfSqkXX_RMgo"
                      }
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Interactive Action Buttons */}
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                          favorites.includes(item.id)
                            ? "bg-red-500 text-white"
                            : "bg-white/80 text-gray-600 hover:bg-white"
                        }`}
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            favorites.includes(item.id) ? "fill-current" : ""
                          }`}
                        />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          shareImage(item);
                        }}
                        className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-white backdrop-blur-sm transition-all duration-300"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${
                          categories.find(
                            (cat) => cat.id === item.category.toLowerCase()
                          )?.color || "bg-gray-500"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Overlay - Mobile Optimized */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Info - Mobile Stack */}
                    <div className="space-y-1 sm:space-y-0 sm:flex sm:items-center text-xs text-white/80 sm:space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="truncate">{item.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada foto untuk kategori ini.
            </p>
          </div>
        )}

        {/* Enhanced Lightbox Modal - Mobile Simplified */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-sm">
            <div className="relative w-full h-full p-1 sm:p-4">
              {/* Top Action Bar - Mobile Simplified */}
              <div className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 flex justify-between items-center z-20">
                <div className="flex gap-1 sm:gap-2">
                  <button
                    onClick={() => toggleFavorite(selectedImage.id)}
                    className={`p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      favorites.includes(selectedImage.id)
                        ? "bg-red-500 text-white"
                        : "bg-black/50 text-white hover:bg-black/70"
                    }`}
                  >
                    <Heart
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${
                        favorites.includes(selectedImage.id)
                          ? "fill-current"
                          : ""
                      }`}
                    />
                  </button>
                  <button
                    onClick={() => shareImage(selectedImage)}
                    className="p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-all duration-300"
                  >
                    <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>

                <button
                  onClick={closeLightbox}
                  className="p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-all duration-300"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>

              {/* Navigation Buttons - Mobile Simplified */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full p-2 sm:left-4 sm:p-3"
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-8 sm:w-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full p-2 sm:right-4 sm:p-3"
                  >
                    <ChevronRight className="h-5 w-5 sm:h-8 sm:w-8" />
                  </button>
                </>
              )}

              {/* Image Container - Full Screen Responsive */}
              <div
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onWheel={handleWheelZoom}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                  cursor: isDragging
                    ? "grabbing"
                    : zoomLevel > 1
                    ? "grab"
                    : "default",
                }}
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${zoomLevel})`,
                    transition: isDragging ? "none" : "transform 0.3s ease-out",
                  }}
                >
                  <Image
                    src={
                      selectedImage.image ||
                      "/placeholder.svg?height=600&width=800"
                    }
                    alt={selectedImage.title}
                    width={1200}
                    height={800}
                    className="object-contain transition-transform duration-300"
                    style={{
                      transform: `rotate(${imageRotation}deg)`,
                      maxWidth: "90vw",
                      maxHeight: "90vh",
                    }}
                    sizes="100vw"
                    priority
                    onDoubleClick={handleDoubleClick}
                  />
                </div>

                {/* Image Controls - Mobile Simplified */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 bg-black/50 backdrop-blur-sm rounded-full p-1 sm:p-2">
                  {/* Mobile: Simple zoom toggle */}
                  <div className="sm:hidden">
                    <button
                      onClick={toggleZoom}
                      className="p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Desktop: Full controls */}
                  <div className="hidden sm:flex gap-2">
                    <button
                      onClick={() => {
                        const newZoom = Math.max(0.5, zoomLevel - 0.5);
                        setZoomLevel(newZoom);
                        setIsZoomed(newZoom > 1);
                        if (newZoom === 1) setImagePosition({ x: 0, y: 0 });
                      }}
                      className="p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                    >
                      <span className="text-sm font-bold">-</span>
                    </button>
                    <div className="px-3 py-2 text-white text-sm font-medium">
                      {Math.round(zoomLevel * 100)}%
                    </div>
                    <button
                      onClick={() => {
                        const newZoom = Math.min(3, zoomLevel + 0.5);
                        setZoomLevel(newZoom);
                        setIsZoomed(newZoom > 1);
                      }}
                      className="p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                    >
                      <span className="text-sm font-bold">+</span>
                    </button>
                    <button
                      onClick={toggleZoom}
                      className="p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </button>
                    <button
                      onClick={rotateImage}
                      className="p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        setZoomLevel(1);
                        setIsZoomed(false);
                        setImagePosition({ x: 0, y: 0 });
                      }}
                      className="p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                    >
                      <span className="text-xs">Reset</span>
                    </button>
                  </div>
                </div>

                {/* Image Info - Mobile Simplified */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-6">
                  {/* Mobile: Simple title only */}
                  <div className="sm:hidden">
                    <h3 className="text-base font-bold text-white mb-2 line-clamp-2">
                      {selectedImage.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-white/80">
                      <span>{selectedImage.date}</span>
                      <span className="px-2 py-1 bg-white/20 rounded-full">
                        {selectedImage.category}
                      </span>
                    </div>
                  </div>

                  {/* Desktop: Full info */}
                  <div className="hidden sm:block">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white flex-1">
                        {selectedImage.title}
                      </h3>
                      <div className="flex items-center gap-1 ml-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm text-white/80">4.8</span>
                      </div>
                    </div>
                    <p className="text-base text-white/90 mb-3 line-clamp-3">
                      {selectedImage.description}
                    </p>

                    {/* Info Grid */}
                    <div className="flex items-center text-sm text-white/80 space-x-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{selectedImage.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{selectedImage.location}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                          {selectedImage.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Counter - Mobile Simplified */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm bg-black/50 rounded-full px-2 py-1 sm:px-3">
                {currentImageIndex + 1} / {filteredItems.length}
              </div>

              {/* Usage Instructions - Desktop Only */}
              <div className="hidden sm:block absolute top-16 right-4 text-white text-xs bg-black/50 rounded-lg px-3 py-2 max-w-xs">
                <div className="font-semibold mb-1">Cara Penggunaan:</div>
                <div className="space-y-1 text-white/80">
                  <div>• Double-click untuk zoom</div>
                  <div>• Scroll mouse untuk zoom</div>
                  <div>• Drag untuk memindahkan gambar</div>
                  <div>• Swipe kiri/kanan untuk navigasi</div>
                </div>
              </div>

              {/* Mobile Instructions - Simple */}
              <div className="sm:hidden absolute top-12 right-2 text-white text-xs bg-black/50 rounded-lg px-2 py-1">
                <div className="text-white/80">
                  Pinch untuk zoom • Swipe untuk navigasi
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
