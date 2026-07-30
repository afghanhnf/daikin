import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Play, ShieldCheck, Award, Sparkles, 
  FileText, MapPin, X, ChevronLeft, Eye, Zap, 
  Layers, Home, Image as ImageIcon, Smartphone, HeartHandshake
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

// Photo Gallery Carousel Items
const GALLERY_ITEMS = [
  { id: 1, title: 'MC80ZVM7 Flagship Unit View', subtitle: 'Pembersih Udara Khusus Hewan Peliharaan & Twin Streamer' },
  { id: 2, title: 'Daikin Eye Air Quality Sensor Display', subtitle: 'Indikator Kebersihan Udara Real-Time Berubah Warna' },
  { id: 3, title: 'Pet Mode & Mobile Smart App Control', subtitle: 'Kontrol Jarak Jauh Bebas Bulu dan Bau Hewan Peliharaan' }
]

export default function MC80ZVM7Page() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false)
  const [activeVideoTitle, setActiveVideoTitle] = useState<string | null>(null)

  const handlePrevSlide = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setActiveGalleryIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1))
  }

  return (
    <PageTransition>
      <PageMeta title="Daikin MC80ZVM7 - Air Purifier Pet Mode & Twin Streamer" canonical="/products/residential/air-purifier/mc80zvm7" />

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
              <Link to="/products/residential/air-purifier" className="hover:text-white transition-colors">Air Purifier</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">MC80ZVM7</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                Air Purifier Flagship • Pet Mode & Twin Streamer
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md uppercase">
                MC80ZVM7
              </h1>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                Air Purifier Daikin MC80ZVM7 dirancang khusus dengan fitur Pet Mode untuk mengatasi masalah bulu dan bau hewan peliharaan. Dilengkapi dengan teknologi Twin Streamer (Streamer Ganda), filter HEPA Elektrostatis, dan indikator kualitas udara cerdas Daikin Eye untuk menyaring serta membersihkan udara ruangan secara cepat dan efisien.
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
              {/* Clean Empty Thumbnail Box Placeholder */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                <span className="text-xs opacity-60 mt-1">(Daikin Air Purifier MC80ZVM7 Unit Photo)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Sub-Hero Badge Bar */}
      <div className="py-5 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-daikin-blue text-base md:text-lg tracking-tight uppercase">DAIKIN AIR PURIFIER</span>
            <span className="text-slate-300 font-light">|</span>
            <span className="font-semibold text-slate-500 text-xs md:text-sm tracking-wider uppercase">MC80ZVM7</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Pet Mode Special
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Twin Streamer Discharge
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Electrostatic HEPA
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Daikin Eye Sensor
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Daikin Smart App
            </span>
          </div>
        </div>
      </div>

      {/* Photo Gallery Carousel Section */}
      <div className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block">
              Galeri Produk & Visualisasi
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-charcoal">
              Galeri Foto <span className="text-daikin-blue">MC80ZVM7</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm">
              Geser untuk melihat detail indikator Daikin Eye, fitur Pet Mode, dan kontrol aplikasi seluler.
            </p>
          </FadeInUp>

          {/* Interactive Slide Gallery Component */}
          <div className="relative w-full aspect-[21/9] bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 group">
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
              Keunggulan Inovasi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">Fitur Utama</h2>
          </FadeInUp>

          {/* Feature 1: DAIKIN EYE */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-daikin-blue px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
                  <Eye className="w-4 h-4" />
                  <span>DAIKIN EYE Sensor</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                  Pantau kualitas udara dengan sensor & indikator cerdas
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Mendeteksi tingkat kebersihan udara (PM2.5, bau, dan debu) secara real-time. Lampu indikator Daikin Eye berubah warna sesuai dengan kualitas udara ruangan untuk memberikan kenyamanan dan ketenangan pikiran Anda secara visual.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">DAIKIN EYE Feature Diagram Image</span>
              </div>
            </FadeInUp>
          </div>

          {/* Feature 2: PET MODE */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp delay={0.2} className="order-2 lg:order-1">
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">PET MODE Feature Image</span>
              </div>
            </FadeInUp>
            <FadeInUp className="order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-amber-200">
                  <HeartHandshake className="w-4 h-4" />
                  <span>PET MODE Special</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                  Nikmati Kesenangan Bersama Hewan Kesayangan, Tanpa Bulu dan Bau Mengganggu
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Hapus bulu dan bau hewan kesayangan yang melayang mengganggu dengan mengaktifkan fitur Pet Mode. Kemampuan air purifier meningkatkan kecepatan aliran udara secara berkala (interval 5 menit), meningkatkan sirkulasi udara dalam ruang yang membantu cepat menangkap bulu hewan yang berterbangan. Bersamaan dengan ini, deodorizing filter bekerja menghilang bau mengganggu.
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Feature 3: MOBILE SMARTAPP */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-purple-200">
                  <Smartphone className="w-4 h-4" />
                  <span>MOBILE SMARTAPP AD</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                  Kendalikan Darimana saja, Kapan Saja
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Dengan aplikasi Daikin Mobile Controller, Anda dapat memantau dan mengontrol air purifier kapan saja dan dari mana saja secara jarak jauh via smartphone. Atur jadwal pengoperasian, periksa kualitas udara ruang, serta dapatkan notifikasi pemeliharaan filter dengan mudah.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">MOBILE SMARTAPP Feature Image</span>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Feature Icons Grid (Extracted from Screenshot) */}
      <div className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInUp delay={0.1}>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">Filter HEPA Elektrostatis</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Filter HEPA kinerja tinggi yang menangkap 99.97% partikel halus hingga 0.3 mikron dengan daya tarik elektrostatis yang tidak mudah tersumbat.
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center shrink-0">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">Teknologi STREAMER</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Pelepasan Twin Streamer (Streamer Ganda) melumpuhkan virus, bakteri, dan menguraikan zat berbahaya pada filter secara aktif.
                  </p>
                </div>
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
                <h3 className="text-xl font-bold text-charcoal mb-2">Tabel Spesifikasi Teknis Air Purifier MC80ZVM7</h3>
                <p className="text-gray-600 text-xs md:text-sm max-w-xl mx-auto">
                  Informasi jangkauan area (hingga 62 m²), daya konsumsi listrik, tingkat kebisingan, dimensi unit, dan jenis penyaring udara.
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

      {/* Video Terkait Section (3 Videos Extracted from Screenshot) */}
      <div className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-2">
              Media Informasi
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-charcoal uppercase tracking-wider">
              VIDEO TERKAIT
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Video 1 */}
            <FadeInUp delay={0.1} className="h-full">
              <div 
                onClick={() => setActiveVideoTitle('Teknologi Streamer Daikin')}
                className="bg-charcoal text-white rounded-3xl p-4 border border-gray-200 shadow-md cursor-pointer group hover:border-daikin-blue transition-all h-full flex flex-col justify-between"
              >
                <div className="aspect-video w-full bg-black/50 rounded-2xl overflow-hidden relative flex items-center justify-center mb-3">
                  <div className="w-14 h-14 rounded-full bg-daikin-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="h-10 flex items-center justify-center text-center">
                  <h4 className="font-bold text-white text-sm leading-snug">
                    Teknologi Streamer Daikin
                  </h4>
                </div>
              </div>
            </FadeInUp>

            {/* Video 2 */}
            <FadeInUp delay={0.2} className="h-full">
              <div 
                onClick={() => setActiveVideoTitle('Daikin Indonesia | Daikin Air Purifier Demo')}
                className="bg-charcoal text-white rounded-3xl p-4 border border-gray-200 shadow-md cursor-pointer group hover:border-daikin-blue transition-all h-full flex flex-col justify-between"
              >
                <div className="aspect-video w-full bg-black/50 rounded-2xl overflow-hidden relative flex items-center justify-center mb-3">
                  <div className="w-14 h-14 rounded-full bg-daikin-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="h-10 flex items-center justify-center text-center">
                  <h4 className="font-bold text-white text-sm leading-snug">
                    Daikin Indonesia | Daikin Air Purifier Demo
                  </h4>
                </div>
              </div>
            </FadeInUp>

            {/* Video 3 */}
            <FadeInUp delay={0.3} className="h-full">
              <div 
                onClick={() => setActiveVideoTitle('Daikin Indonesia | Review Daikin Air Purifier MC80ZVM7')}
                className="bg-charcoal text-white rounded-3xl p-4 border border-gray-200 shadow-md cursor-pointer group hover:border-daikin-blue transition-all h-full flex flex-col justify-between"
              >
                <div className="aspect-video w-full bg-black/50 rounded-2xl overflow-hidden relative flex items-center justify-center mb-3">
                  <div className="w-14 h-14 rounded-full bg-daikin-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="h-10 flex items-center justify-center text-center">
                  <h4 className="font-bold text-white text-sm leading-snug">
                    Daikin Indonesia | Review Daikin Air Purifier MC80ZVM7
                  </h4>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Produk Terkait Lainnya Section (5 Air Purifier Cards from Screenshot) */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-charcoal uppercase tracking-wider">
              PRODUK TERKAIT LAINNYA
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* 1. MCK70ZVM */}
            <FadeInUp delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 text-center space-y-4 hover:border-daikin-blue transition-all">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center p-3">
                  <span className="text-xs font-bold text-gray-400 uppercase">MCK70ZVM Photo</span>
                </div>
                <div>
                  <h4 className="font-black text-daikin-blue text-lg">MCK70ZVM</h4>
                  <p className="text-gray-500 text-xs font-semibold">Pet Mode dan STREAMER Technology</p>
                </div>
                <Link 
                  to="#" 
                  className="inline-block w-full py-2.5 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all shadow-2xs"
                >
                  Lihat Detail
                </Link>
              </div>
            </FadeInUp>

            {/* 2. MC55UVM */}
            <FadeInUp delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 text-center space-y-4 hover:border-daikin-blue transition-all">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center p-3">
                  <span className="text-xs font-bold text-gray-400 uppercase">MC55UVM Photo</span>
                </div>
                <div>
                  <h4 className="font-black text-daikin-blue text-lg">MC55UVM</h4>
                  <p className="text-gray-500 text-xs font-semibold">STREAMER Technology</p>
                </div>
                <Link 
                  to="#" 
                  className="inline-block w-full py-2.5 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all shadow-2xs"
                >
                  Lihat Detail
                </Link>
              </div>
            </FadeInUp>

            {/* 3. MC30YVM7 */}
            <FadeInUp delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 text-center space-y-4 hover:border-daikin-blue transition-all">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center p-3">
                  <span className="text-xs font-bold text-gray-400 uppercase">MC30YVM7 Photo</span>
                </div>
                <div>
                  <h4 className="font-black text-daikin-blue text-lg">MC30YVM7</h4>
                  <p className="text-gray-500 text-xs font-semibold">STREAMER Technology</p>
                </div>
                <Link 
                  to="#" 
                  className="inline-block w-full py-2.5 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all shadow-2xs"
                >
                  Lihat Detail
                </Link>
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
              Dapatkan Air Purifier Daikin MC80ZVM7 melalui jaringan dealer resmi terpercaya atau berkonsultasi langsung dengan tim profesional kami.
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

      {/* Section Kategori Lainnya (Unified 6 Grid Cards with Air Purifier hidden) */}
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

            {/* 3. VRV Home Series */}
            <FadeInUp delay={0.3}>
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

            {/* 4. Super Multi NX R32 */}
            <FadeInUp delay={0.4}>
              <Link to="/products/residential/super-multi-nx" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Super Multi NX R32</h3>
                  <p className="text-gray-500 text-xs">AC Multi Split 1 Outdoor Hingga 5 Indoor</p>
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
                Air Purifier Flagship MC80ZVM7
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Tabel Spesifikasi Teknis</h3>

              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-gray-400">
                <FileText className="w-10 h-10 mb-2 text-gray-300" />
                <span className="text-xs font-bold uppercase tracking-wider">Technical Specification Table Placeholder</span>
                <span className="text-[11px] text-gray-400 mt-1">(Daya Listrik, Dimensi Unit 600x395x287mm, Jangkauan 62m², Kebisingan 19-53 dB)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {activeVideoTitle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal rounded-2xl max-w-3xl w-full p-4 relative border border-white/20">
            <button 
              onClick={() => setActiveVideoTitle(null)}
              className="absolute right-4 top-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full bg-black rounded-xl flex items-center justify-center">
              <span className="text-white/60 text-xs font-medium">{activeVideoTitle}</span>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
