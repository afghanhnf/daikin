import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Play, ShieldCheck, Award, Sparkles, 
  FileText, MapPin, X, ChevronLeft, Wind, Zap, Volume2, 
  Layers, Home, Image as ImageIcon, RotateCcw, Wrench
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

// Photo Gallery Carousel Items
const GALLERY_ITEMS = [
  { id: 1, title: 'Multi-S 3 Connection System View', subtitle: '1 Outdoor Unit Melayani 3 Indoor Units' },
  { id: 2, title: 'Aplikasi Pemasangan Balkon Apartemen', subtitle: 'Hemat Tempat Hingga 66% Ruang Outdoor' },
  { id: 3, title: 'Low Watt Mode 800W Control', subtitle: 'Hemat Listrik Maksimal Tanpa Takut Listrik Turun' }
]

export default function MultiS3ConnectionPage() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handlePrevSlide = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setActiveGalleryIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1))
  }

  return (
    <PageTransition>
      <PageMeta title="Daikin Multi-S 3 Connection - AC Multi Split 3 Indoor 1 Outdoor" canonical="/products/residential/multi-split/multi-s-3-connection" />

      {/* Hero Header Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-r from-[#0097e6] to-[#00b0f0]">
        <Suspense fallback={null}><AirParticles color="white" /></Suspense>
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <nav className="flex items-center space-x-2 text-white/70 mb-8 text-sm font-medium tracking-wide flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products" className="hover:text-white transition-colors">Produk</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products/residential" className="hover:text-white transition-colors">AC Hunian</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products/residential/multi-split" className="hover:text-white transition-colors">Multi Split</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">Multi-S 3 Connection</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                Multi-S Series • 3 Indoor 1 Outdoor
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md uppercase">
                MULTI-S 3 CONNECTION
              </h1>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                Menjawab kebutuhan area hunian di Indonesia, Daikin hadirkan sistem Multi-S 3 Connection. Dengan 3 keunggulan utama yaitu hemat tempat, hemat energi, dan hemat listrik. Hanya dengan 1 outdoor dapat mengoperasikan 3 unit indoor sekaligus, mengonsumsi daya listrik minimum 800 Watt (Low Watt Mode Level 2).
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/products/e-catalogue"
                  className="px-6 py-3 bg-white text-daikin-blue rounded-xl font-bold text-xs md:text-sm hover:bg-cyan-50 transition-all shadow-md flex items-center gap-2 group"
                >
                  <FileText className="w-4 h-4" />
                  <span>Lihat Katalog</span>
                </Link>
                <button
                  onClick={() => setIsSpecModalOpen(true)}
                  className="px-6 py-3 bg-white/15 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-xs md:text-sm hover:bg-white hover:text-daikin-blue transition-all shadow-sm flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Spesifikasi Teknis</span>
                </button>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Empty Glassmorphic Thumbnail Container Placeholder */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                <span className="text-xs opacity-60 mt-1">(Multi-S 3 Connection Product Photo & Outdoor Connection)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Sub-Hero Badge Bar */}
      <div className="py-5 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-daikin-blue text-base md:text-lg tracking-tight uppercase">MULTI-S SERIES</span>
            <span className="text-slate-300 font-light">|</span>
            <span className="font-semibold text-slate-500 text-xs md:text-sm tracking-wider uppercase">3 Connection</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              1 Outdoor Unit
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              3 Indoor Units
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Low Watt 800W
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Refrigerant R-32
            </span>
          </div>
        </div>
      </div>

      {/* Photo Gallery & Visual Slider Section */}
      <div className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block">
              Galeri Produk & Visualisai
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-charcoal">
              Galeri Foto <span className="text-daikin-blue">Multi-S 3 Connection</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm">
              Geser untuk melihat detail tampilan produk, unit indoor, outdoor, dan visualisasi efisiensi tempat.
            </p>
          </FadeInUp>

          {/* Interactive Slide Gallery Component */}
          <div className="relative w-full aspect-[21/9] bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 group">
            {/* Gallery Slide Area */}
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="w-full h-full rounded-2xl border-2 border-dashed border-daikin-blue/30 flex flex-col items-center justify-center p-6 text-daikin-blue">
                <ImageIcon className="w-12 h-12 mb-3 text-daikin-blue/60" />
                <h3 className="font-bold text-lg text-charcoal mb-1">
                  {GALLERY_ITEMS[activeGalleryIndex].title}
                </h3>
                <p className="text-gray-500 text-xs max-w-md">
                  {GALLERY_ITEMS[activeGalleryIndex].subtitle}
                </p>
                <span className="mt-4 px-3 py-1 bg-daikin-blue/10 text-daikin-blue text-[11px] font-bold rounded-full">
                  Foto Slide {activeGalleryIndex + 1} dari {GALLERY_ITEMS.length}
                </span>
              </div>
            </div>

            {/* Arrows Controls */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md text-charcoal hover:bg-daikin-blue hover:text-white flex items-center justify-center transition-all border border-gray-100 z-10"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-md text-charcoal hover:bg-daikin-blue hover:text-white flex items-center justify-center transition-all border border-gray-100 z-10"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-white/80 backdrop-blur-xs px-4 py-2 rounded-full border border-gray-200/80">
              {GALLERY_ITEMS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveGalleryIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${activeGalleryIndex === idx ? 'w-8 bg-daikin-blue' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Features Section (Extracted from Screenshot) */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-16">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Keunggulan Utama
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">Fitur Utama</h2>
          </FadeInUp>

          {/* Feature 1: Hemat Tempat */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-daikin-blue px-3.5 py-1.5 rounded-lg text-xs font-bold">
                  <Home className="w-4 h-4" />
                  <span>Efisiensi Area Balkon</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                  Hemat Tempat
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Hanya dengan 1 unit outdoor dapat mengoperasikan 3 unit indoor sekaligus. Menghemat ruang secara signifikan, sangat ideal untuk tempat outdoor/balkon apartemen yang terbatas.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Hemat Tempat Feature Image</span>
              </div>
            </FadeInUp>
          </div>

          {/* Feature 2: Hemat Energi */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp delay={0.2} className="order-2 lg:order-1">
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Hemat Energi Feature Image</span>
              </div>
            </FadeInUp>
            <FadeInUp className="order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-daikin-blue px-3.5 py-1.5 rounded-lg text-xs font-bold">
                  <Zap className="w-4 h-4" />
                  <span>Kontrol Inverter Cerdas</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                  Hemat Energi
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Daya listrik menyesuaikan pendinginan pada ruangan secara otomatis. Suhu udara tetap stabil dan nyaman sesuai dengan kebutuhan tiap ruangan.
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Feature 3: Hemat Daya Listrik */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-daikin-blue px-3.5 py-1.5 rounded-lg text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Low Watt Mode 800W</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                  Hemat Daya Listrik
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Saat 3 unit AC dinyalakan dalam satu waktu bersamaan, Anda bisa mengoperasikan listrik hanya hingga 800 Watt (Low Watt Level 2) agar aman dari risiko listrik turun.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Hemat Daya Listrik Feature Image</span>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Additional Features Grid (Extracted from Screenshot) */}
      <div className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-charcoal">Fitur Lainnya</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <FadeInUp delay={0.1}>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                  <Wind className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-charcoal text-sm">Hembusan Udara Nyaman</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Fitur untuk mencegah hembusan udara dingin langsung mengenai tubuh. Aliran udara menyebar merata.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-charcoal text-sm">Inverter Bertenaga</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Fungsi Powerful untuk memberikan kinerja pendinginan maksimum dalam waktu 20 menit saat awal menyala.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                  <Volume2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-charcoal text-sm">Operasi Hening</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Tingkat kebisingan unit indoor dan outdoor rendah hingga 19 dB(A) dengan mengaktifkan mode Quiet.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-charcoal text-sm">Mode Menyala Otomatis</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  AC akan mengingat pengaturan sebelumnya saat listrik menyala kembali setelah padam.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs text-center space-y-3 h-full col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-charcoal text-sm">Diagnosa Mandiri</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Kode error fungsi untuk mendeteksi kerusakan pada remote control untuk kemudahan penanganan.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Spesifikasi</h2>
          </FadeInUp>

          <FadeInUp>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-xs max-w-4xl mx-auto text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Tabel Spesifikasi Teknis Multi-S 3 Connection</h3>
                <p className="text-gray-600 text-xs md:text-sm max-w-xl mx-auto">
                  Informasi kapasitas pendinginan, konsumsi listrik 800W, serta spesifikasi Unit Indoor (CTKC Series) & Unit Outdoor (MKC30RVM4).
                </p>
              </div>
              <button
                onClick={() => setIsSpecModalOpen(true)}
                className="px-8 py-3.5 bg-daikin-blue text-white rounded-xl font-bold text-sm hover:bg-daikin-blue-dark transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Lihat Tabel Spesifikasi (Popup)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Section Side-by-Side: Lihat Produk Terkait (Multi-S 2) & Video Terkait (1 Video) */}
      <div className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Lihat Produk Lainnya (Multi-S 2 Connection) */}
            <FadeInUp>
              <div className="space-y-6 text-center">
                <h3 className="text-xl font-extrabold text-charcoal uppercase tracking-wider">
                  Lihat Produk Lainnya
                </h3>

                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all p-6 text-center space-y-4 max-w-lg mx-auto">
                  <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-4">
                    <span className="text-xs font-bold text-gray-400 uppercase">Daikin Multi-S 2 Connection Photo</span>
                  </div>
                  <div>
                    <h4 className="font-black text-daikin-blue text-xl">Daikin Multi-S 2 Connection</h4>
                    <p className="text-gray-500 text-xs font-semibold">1 Outdoor • 2 Indoor</p>
                  </div>
                  <Link 
                    to="#" 
                    className="inline-block w-full py-3 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all shadow-2xs"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </FadeInUp>

            {/* Right Column: Video Terkait (Enlarged Card) */}
            <FadeInUp delay={0.2}>
              <div className="space-y-6 text-center">
                <h3 className="text-xl font-extrabold text-charcoal uppercase tracking-wider">
                  VIDEO TERKAIT
                </h3>

                <div 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="bg-charcoal text-white rounded-3xl p-5 border border-gray-200 shadow-lg cursor-pointer group hover:border-daikin-blue transition-all max-w-lg mx-auto"
                >
                  <div className="aspect-[16/9] w-full bg-black/50 rounded-2xl overflow-hidden relative flex items-center justify-center mb-4 border border-white/10">
                    <div className="w-16 h-16 rounded-full bg-daikin-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </div>
                  <h4 className="font-bold text-white text-base leading-snug">
                    Daikin Multi-S: Lebih Hemat Tempat, Energi & Listrik
                  </h4>
                </div>
              </div>
            </FadeInUp>

          </div>
        </div>
      </div>

      {/* Section Bottom CTA (Light Blue Gradient) */}
      <div className="py-20 text-center bg-gradient-to-br from-blue-50 via-cyan-50/80 to-sky-100/60 border-t border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeInUp className="space-y-3">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-white/80 px-4 py-1.5 rounded-full inline-block mb-1 border border-blue-200/60 shadow-2xs">
              Jaringan Layanan Resmi
            </span>
            <h3 className="text-3xl font-bold text-charcoal">Produk Tersedia di:</h3>
            <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed mb-6">
              Dapatkan produk AC Multi-S 3 Connection Daikin melalui jaringan dealer resmi terpercaya atau berkonsultasi langsung dengan tim profesional kami.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-1">
              <Link 
                to="/services/ishop" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 bg-daikin-blue text-white font-bold text-sm rounded-xl hover:bg-daikin-blue-dark transition-all shadow-md hover:shadow-lg group"
              >
                <MapPin className="w-4 h-4" />
                <span>Dealer Resmi Daikin</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-sm rounded-xl hover:bg-daikin-blue hover:text-white transition-all shadow-2xs hover:shadow-sm group"
              >
                <Sparkles className="w-4 h-4" />
                <span>Konsultasi Perencanaan Sistem</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Section Kategori Lainnya (Unified 6 Grid Cards) */}
      <div className="py-20 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">Kategori Lainnya</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Single Split */}
            <FadeInUp delay={0.1}>
              <Link to="/products/residential/single-split" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Home className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Single Split</h3>
                  <p className="text-gray-500 text-xs">AC Single Split Hunian</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            {/* 2. Multi Split */}
            <FadeInUp delay={0.2}>
              <Link to="/products/residential/multi-split" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Home className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Multi Split</h3>
                  <p className="text-gray-500 text-xs">AC Multi Outdoor Hunian</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            {/* 3. Air Purifier */}
            <FadeInUp delay={0.3}>
              <Link to="/products/residential/air-purifier" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Air Purifier</h3>
                  <p className="text-gray-500 text-xs">Pembersih Udara Streamer</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            {/* 4. VRV Home Series */}
            <FadeInUp delay={0.4}>
              <Link to="/products/residential/vrv-home" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">VRV Home Series</h3>
                  <p className="text-gray-500 text-xs">AC Sentral Premium Hunian</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            {/* 5. Lihat Promo Lainnya */}
            <FadeInUp delay={0.5}>
              <Link to="/promotions" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Lihat Promo Lainnya</h3>
                  <p className="text-gray-500 text-xs">Penawaran & Promo Spesial</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            {/* 6. Temukan Dealer */}
            <FadeInUp delay={0.6}>
              <Link to="/services/ishop" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Temukan Dealer</h3>
                  <p className="text-gray-500 text-xs">Cari Lokasi Dealer Terdekat</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Specification Popup Modal */}
      {isSpecModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 relative border border-gray-200 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsSpecModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-charcoal p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-daikin-blue px-3 py-1 rounded-full text-xs font-bold">
                Multi-S 3 Connection (MKC30RVM4 & CTKC Series)
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Tabel Spesifikasi Teknis</h3>

              {/* Empty Image Container Placeholder for Specification Table from Screenshot */}
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-gray-400">
                <FileText className="w-10 h-10 mb-2 text-gray-300" />
                <span className="text-xs font-bold uppercase tracking-wider">Tabel Spesifikasi Technical Specification Table Placeholder</span>
                <span className="text-[11px] text-gray-400 mt-1">(Unit Indoor & Unit Outdoor Multi-S 3 Connection)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal rounded-2xl max-w-3xl w-full p-4 relative border border-white/20">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute right-4 top-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full bg-black rounded-xl flex items-center justify-center">
              <span className="text-white/60 text-xs font-medium">Video Player Placeholder (Daikin Multi-S: Lebih Hemat Tempat, Energi & Listrik)</span>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
