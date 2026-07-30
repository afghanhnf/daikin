import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Play, ShieldCheck, Award, Sparkles, 
  FileText, MapPin, X, ChevronLeft, Wind, Eye, Zap, Volume2, Wifi, 
  Layers, Home, Image as ImageIcon
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

// Photo Gallery Carousel Items
const GALLERY_ITEMS = [
  { id: 1, title: 'ALPHA Inverter Indoor Unit View', subtitle: 'Desain Premium Minimalis Modern' },
  { id: 2, title: 'Streamer & Gin-ION Air Purification Technology', subtitle: 'Teknologi Udara Bersih & Bebas Virus' },
  { id: 3, title: 'Outdoor Unit Blue Fin & Grey Hairpin Coating', subtitle: 'Perlindungan Korosi Ekstra Durabilitas High Quality' },
  { id: 4, title: 'Built-in Wi-Fi Mobile App Integration', subtitle: 'Kendali Pintar Dari Mana Saja' }
]

export default function AlphaInverterPage() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false)
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)

  const handlePrevSlide = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setActiveGalleryIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1))
  }

  return (
    <PageTransition>
      <PageMeta title="Daikin ALPHA Inverter (FTKM Series) - AC Single Split Premium" canonical="/products/residential/alpha-inverter" />

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
              <Link to="/products/residential/single-split" className="hover:text-white transition-colors">Single Split</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">ALPHA Inverter</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                Nusantara Prestige Series • Buatan Indonesia
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                ALPHA Inverter
              </h1>
              <p className="text-amber-300 font-extrabold text-lg md:text-xl mb-4 tracking-wider">
                FTKM Series
              </p>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                AC Single Split Inverter premium buatan Indonesia dengan teknologi Streamer & Gin-ION Filter pemurni udara mutakhir, Blue Fin Coating, Grey Hairpin, dan kontrol cerdas Built-In Wi-Fi.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/products/e-catalogue"
                  className="px-7 py-3.5 bg-white text-daikin-blue rounded-xl font-bold text-sm hover:bg-cyan-50 transition-all shadow-md flex items-center gap-2 group"
                >
                  <FileText className="w-4 h-4" />
                  <span>Lihat Katalog</span>
                </Link>
                <button
                  onClick={() => setIsSpecModalOpen(true)}
                  className="px-7 py-3.5 bg-white/15 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-sm hover:bg-white hover:text-daikin-blue transition-all shadow-sm flex items-center gap-2"
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
                <span className="text-xs opacity-60 mt-1">(ALPHA Inverter FTKM Series Product Photo)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Sub-Hero Logo & Feature Badge Bar */}
      <div className="py-5 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-daikin-blue text-base md:text-lg tracking-tight uppercase">Nusantara Prestige</span>
            <span className="text-slate-300 font-light">|</span>
            <span className="font-semibold text-slate-500 text-xs md:text-sm tracking-wider uppercase">Alpha Inverter</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Refrigerant R-32
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Inverter Technology
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Buatan Indonesia
            </span>
            <span className="px-3.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70 hover:bg-sky-50/80 hover:text-daikin-blue hover:border-sky-200/80 transition-all duration-200">
              Garansi 5 Thn Kompresor
            </span>
          </div>
        </div>
      </div>

      {/* Photo Gallery & Long Image Slider Section */}
      <div className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block">
              Galeri Produk & visualisai
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-charcoal">
              Galeri Foto <span className="text-daikin-blue">ALPHA Inverter</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm">
              Geser untuk melihat detail tampilan produk, unit indoor, outdoor, dan visualisasi teknologi.
            </p>
          </FadeInUp>

          {/* Interactive Slide Gallery Component */}
          <div className="relative w-full aspect-[21/9] bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 group">
            {/* Gallery Slide Display Area (Empty Container Placeholder) */}
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

            {/* Previous / Next Arrow Controls */}
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

            {/* Slide Dots Indicator */}
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
              Teknologi & Keunggulan
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">FITUR UTAMA</h2>
          </FadeInUp>

          {/* Feature 1: Streamer & Gin-ION Filter */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-daikin-blue px-3.5 py-1.5 rounded-lg text-xs font-bold">
                  <Wind className="w-4 h-4" />
                  <span>Pemurni Udara Ganda</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                  Streamer & Gin-ION Filter
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Kombinasi teknologi Streamer pemurni udara yang menonaktifkan virus, bakteri, dan bau tak sedap dengan Gin-ION Filter untuk kualitas udara kamar tidur yang lebih sehat dan bersih secara berkelanjutan.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Streamer & Gin-ION Filter Feature Image</span>
              </div>
            </FadeInUp>
          </div>

          {/* Feature 2: Blue Fin Coating */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp delay={0.2} className="order-2 lg:order-1">
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Blue Fin Coating Feature Image</span>
              </div>
            </FadeInUp>
            <FadeInUp className="order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-daikin-blue px-3.5 py-1.5 rounded-lg text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Perlindungan Anti Korosi</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                  Blue Fin Coating
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Lapisan pelindung hidrofilik Blue Fin pada penukar panas outdoor unit untuk mencegah korosi dari cuaca ekstrim dan usia pakai lebih panjang.
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Feature 3: Grey Hairpin */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-daikin-blue px-3.5 py-1.5 rounded-lg text-xs font-bold">
                  <Award className="w-4 h-4" />
                  <span>Ketahanan Pipa Tembaga</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                  Grey Hairpin
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Desain pipa tembaga Grey Hairpin dengan perlakuan anti karat khusus untuk keandalan pendinginan optimal jangka panjang.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Grey Hairpin Feature Image</span>
              </div>
            </FadeInUp>
          </div>

          {/* Feature 4: Built In Wi-Fi */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp delay={0.2} className="order-2 lg:order-1">
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-6 text-center text-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider">Built In Wi-Fi Feature Image</span>
              </div>
            </FadeInUp>
            <FadeInUp className="order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-daikin-blue px-3.5 py-1.5 rounded-lg text-xs font-bold">
                  <Wifi className="w-4 h-4" />
                  <span>Konektivitas Pintar</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
                  Built In Wi-Fi
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Fitur pengontrol cerdas terintegrasi (Built-in Wi-Fi) yang memungkinkan Anda mengatur suhu dan menjadwalkan operasional AC dari smartphone di mana saja.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Additional Features Grid */}
      <div className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-charcoal">FITUR LAINNYA</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeInUp delay={0.1}>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                  <Wind className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-charcoal text-base">Coanda Airflow</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Hembusan udara nyaman melengkung sepanjang plafon tanpa menembak langsung ke tubuh.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-charcoal text-base">Intelligent Eye</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Sensor inframerah yang mendeteksi gerakan manusia untuk menghemat energi secara otomatis.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-charcoal text-base">Low Watt Mode</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Mode operasional hemat energi watt rendah untuk konsumsi listrik minimal.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                  <Volume2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-charcoal text-base">Quiet Operation</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Pengoperasian unit indoor dan outdoor yang sangat tenang hingga 19 dB(A).
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Video Terkait Section */}
      <div className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">VIDEO TERKAIT</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Video 1 */}
            <FadeInUp delay={0.1} className="h-full">
              <div 
                onClick={() => setActiveVideoUrl('Daikin Inverter FAQs - Perbedaan Normal & Fast Cooling Mode')}
                className="bg-white/10 rounded-2xl p-4 border border-white/20 cursor-pointer group hover:border-white/40 transition-all h-full flex flex-col justify-between"
              >
                <div className="aspect-video w-full bg-black/40 rounded-xl overflow-hidden relative flex items-center justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-daikin-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="h-10 flex items-center justify-center text-center">
                  <h4 className="font-bold text-white text-sm leading-snug">
                    Daikin Inverter FAQs - Perbedaan Normal & Fast Cooling Mode
                  </h4>
                </div>
              </div>
            </FadeInUp>

            {/* Video 2 */}
            <FadeInUp delay={0.2} className="h-full">
              <div 
                onClick={() => setActiveVideoUrl('Fungsi Super PCB Pada AC Daikin')}
                className="bg-white/10 rounded-2xl p-4 border border-white/20 cursor-pointer group hover:border-white/40 transition-all h-full flex flex-col justify-between"
              >
                <div className="aspect-video w-full bg-black/40 rounded-xl overflow-hidden relative flex items-center justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-daikin-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="h-10 flex items-center justify-center text-center">
                  <h4 className="font-bold text-white text-sm leading-snug">
                    Fungsi Super PCB Pada AC Daikin
                  </h4>
                </div>
              </div>
            </FadeInUp>

            {/* Video 3 */}
            <FadeInUp delay={0.3} className="h-full">
              <div 
                onClick={() => setActiveVideoUrl('Tips Perawatan AC Daikin')}
                className="bg-white/10 rounded-2xl p-4 border border-white/20 cursor-pointer group hover:border-white/40 transition-all h-full flex flex-col justify-between"
              >
                <div className="aspect-video w-full bg-black/40 rounded-xl overflow-hidden relative flex items-center justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-daikin-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="h-10 flex items-center justify-center text-center">
                  <h4 className="font-bold text-white text-sm leading-snug">
                    Tips Perawatan AC Daikin
                  </h4>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">SPESIFIKASI</h2>
          </FadeInUp>

          <FadeInUp>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-xs max-w-4xl mx-auto text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Tabel Spesifikasi Teknis Lengkap</h3>
                <p className="text-gray-600 text-xs md:text-sm max-w-xl mx-auto">
                  Informasi kapasitas pendinginan (PK/Btu/h), konsumsi daya (Watt), dimensi unit indoor & outdoor untuk model FTKM20, FTKM25, FTKM35, FTKM50, FTKM60, FTKM71 Series.
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

      {/* Related Nusantara Prestige Products */}
      <div className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-8">
          <FadeInUp className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-charcoal">
              PILIHAN PRODUK <span className="text-daikin-blue">NUSANTARA PRESTIGE</span> LAINNYA
            </h3>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 text-center space-y-4">
              <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border border-dashed border-gray-200"></div>
              <div>
                <h4 className="font-black text-daikin-blue text-lg">BETA Inverter</h4>
                <p className="text-gray-500 text-xs font-semibold">FTKC Series</p>
              </div>
              <Link to="#" className="inline-block w-full py-2 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all">
                Lihat Detail
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 text-center space-y-4">
              <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border border-dashed border-gray-200"></div>
              <div>
                <h4 className="font-black text-daikin-blue text-lg">Super Mini Split (SMS)</h4>
                <p className="text-gray-500 text-xs font-semibold">FTC Series</p>
              </div>
              <Link to="#" className="inline-block w-full py-2 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all">
                Lihat Detail
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Inverter Products */}
      <div className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-8">
          <FadeInUp className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-charcoal">
              PILIHAN PRODUK <span className="text-daikin-blue">INVERTER</span> LAINNYA
            </h3>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 text-center space-y-3">
              <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border border-dashed border-gray-200"></div>
              <div>
                <h4 className="font-black text-daikin-blue text-base">ZETA Inverter</h4>
                <p className="text-gray-500 text-xs font-semibold">FTXZ Series</p>
              </div>
              <Link to="#" className="inline-block w-full py-2 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all">
                Lihat Detail
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 text-center space-y-3">
              <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border border-dashed border-gray-200"></div>
              <div>
                <h4 className="font-black text-daikin-blue text-base">STAR Inverter</h4>
                <p className="text-gray-500 text-xs font-semibold">FTKC Series</p>
              </div>
              <Link to="#" className="inline-block w-full py-2 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all">
                Lihat Detail
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 text-center space-y-3">
              <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border border-dashed border-gray-200"></div>
              <div>
                <h4 className="font-black text-daikin-blue text-base">FLASH Inverter</h4>
                <p className="text-gray-500 text-xs font-semibold">FTKQ Series</p>
              </div>
              <Link to="#" className="inline-block w-full py-2 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all">
                Lihat Detail
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 text-center space-y-3">
              <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border border-dashed border-gray-200"></div>
              <div>
                <h4 className="font-black text-daikin-blue text-base">FTKF Inverter</h4>
                <p className="text-gray-500 text-xs font-semibold">FTKF Series</p>
              </div>
              <Link to="#" className="inline-block w-full py-2 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all">
                Lihat Detail
              </Link>
            </div>
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
              Dapatkan produk AC ALPHA Inverter Daikin melalui jaringan dealer resmi terpercaya atau berkonsultasi langsung dengan tim profesional kami.
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

      {/* Section Kategori Lainnya (Unified Grid 6 Cards) */}
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
                ALPHA Inverter - FTKM Series
              </div>
              <h3 className="text-2xl font-bold text-charcoal">Tabel Spesifikasi Teknis</h3>

              {/* Empty Image Container Placeholder for Specification Table from Screenshot */}
              <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-gray-400">
                <FileText className="w-10 h-10 mb-2 text-gray-300" />
                <span className="text-xs font-bold uppercase tracking-wider">Tabel Spesifikasi Technical Specification Table Placeholder</span>
                <span className="text-[11px] text-gray-400 mt-1">(FTKM20, FTKM25, FTKM35, FTKM50, FTKM60, FTKM71 Series)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-charcoal rounded-2xl max-w-3xl w-full p-4 relative border border-white/20">
            <button 
              onClick={() => setActiveVideoUrl(null)}
              className="absolute right-4 top-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full bg-black rounded-xl flex items-center justify-center">
              <span className="text-white/60 text-xs font-medium">{activeVideoUrl}</span>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
