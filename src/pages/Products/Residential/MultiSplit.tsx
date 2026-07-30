import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Play, ShieldCheck, Award, Sparkles, 
  FileText, MapPin, X, Home, Wind, Layers, Zap, Info
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function MultiSplitPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <PageTransition>
      <PageMeta title="Daikin Multi Split (Multi-S) - Solusi AC Multi Indoor" canonical="/products/residential/multi-split" />

      {/* Hero Header Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-r from-[#0097e6] to-[#00b0f0]">
        <Suspense fallback={null}><AirParticles color="white" /></Suspense>
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <nav className="flex items-center space-x-2 text-white/70 mb-8 text-sm font-medium tracking-wide">
              <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products" className="hover:text-white transition-colors">Produk</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products/residential" className="hover:text-white transition-colors">AC Hunian</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">Multi Split</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                Solusi Hemat Tempat & Hemat Listrik
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                Multi Split (Multi-S)
              </h1>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                AC Multi S DAIKIN hemat listrik dengan 1 unit outdoor terhubung 2 atau 3 unit indoor sekaligus. DAIKIN Multi S Lebih Hemat TEMPAT, ENERGI dan TAGIHAN LISTRIK.
              </p>

              <Link
                to="/products/e-catalogue"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-daikin-blue rounded-xl font-bold text-sm hover:bg-cyan-50 transition-all shadow-md group"
              >
                <FileText className="w-4 h-4" />
                <span>Lihat Katalog</span>
              </Link>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Clean Empty Thumbnail Box for Banner Image Placeholder */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                <span className="text-xs opacity-60 mt-1">(Daikin Multi-S 3 Indoor 1 Outdoor Illustration)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Main Product Cards Section (No filter bar needed as requested) */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 space-y-16">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Solusi AC Hunian Ringkas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Pilihan Seri <span className="text-daikin-blue">Multi-S</span>
            </h2>
          </FadeInUp>

          {/* 2 Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card 1: MULTI-S 2 CONNECTION */}
            <FadeInUp delay={0.1}>
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-daikin-blue transition-all flex flex-col justify-between h-full group p-8 text-center">
                <div>
                  <h3 className="text-2xl font-black text-daikin-blue uppercase tracking-wide mb-2 group-hover:text-daikin-blue-dark transition-colors">
                    MULTI-S 2 CONNECTION
                  </h3>
                  <p className="text-gray-500 font-bold text-xs mb-6 uppercase tracking-wider">
                    1 Outdoor Unit • 2 Indoor Units
                  </p>

                  {/* Empty Thumbnail Container Box */}
                  <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl mb-6 border border-gray-200 flex items-center justify-center p-4 relative overflow-hidden group-hover:border-daikin-blue/30 transition-colors">
                    <div className="w-full h-full bg-white rounded-xl border-2 border-dashed border-gray-200"></div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    Solusi hemat tempat untuk hunian apartemen & rumah dengan 1 outdoor terhubung ke 2 unit indoor. Menghemat daya listrik hingga 50% dan ruang balkon outdoor Anda.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-center">
                  <Link
                    to="#"
                    className="w-full py-3 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-sm rounded-xl hover:bg-daikin-blue hover:text-white transition-all text-center shadow-2xs"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </FadeInUp>

            {/* Card 2: MULTI-S 3 CONNECTION */}
            <FadeInUp delay={0.2}>
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-daikin-blue transition-all flex flex-col justify-between h-full group p-8 text-center">
                <div>
                  <h3 className="text-2xl font-black text-daikin-blue uppercase tracking-wide mb-2 group-hover:text-daikin-blue-dark transition-colors">
                    MULTI-S 3 CONNECTION
                  </h3>
                  <p className="text-gray-500 font-bold text-xs mb-6 uppercase tracking-wider">
                    1 Outdoor Unit • 3 Indoor Units
                  </p>

                  {/* Empty Thumbnail Container Box */}
                  <div className="w-full aspect-[4/3] bg-gray-50 rounded-2xl mb-6 border border-gray-200 flex items-center justify-center p-4 relative overflow-hidden group-hover:border-daikin-blue/30 transition-colors">
                    <div className="w-full h-full bg-white rounded-xl border-2 border-dashed border-gray-200"></div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    Sistem pendingin udara efisien 1 unit outdoor melayani 3 unit indoor secara simultan. Kontrol suhu independen di setiap kamar tidur dan ruang keluarga.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-center">
                  <Link
                    to="/products/residential/multi-split/multi-s-3-connection"
                    className="w-full py-3 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-sm rounded-xl hover:bg-daikin-blue hover:text-white transition-all text-center shadow-2xs"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </FadeInUp>

          </div>
        </div>
      </div>

      {/* Video Demo Section */}
      <div className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-daikin-blue-dark via-daikin-blue-dark/80 to-[#1c242b] opacity-80 z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp className="text-center max-w-4xl mx-auto mb-12">
            <span className="text-cyan-300 font-bold text-xs uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-white/20">
              Video Informasi Produk
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Keunggulan Inovasi <span className="whitespace-nowrap">Daikin Multi-S</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Lihat bagaimana 1 unit outdoor Daikin Multi-S dapat mendinginkan 2 hingga 3 ruangan sekaligus dengan daya listrik yang sangat hemat.
            </p>
          </FadeInUp>

          <div 
            onClick={() => setIsVideoModalOpen(true)}
            className="aspect-[21/9] w-full max-w-5xl mx-auto bg-white/10 rounded-2xl overflow-hidden relative shadow-lg group border border-white/20 backdrop-blur-xs cursor-pointer flex items-center justify-center transition-all hover:border-white/40"
          >
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-daikin-blue text-white flex items-center justify-center shadow-md group-hover:bg-white group-hover:text-daikin-blue group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
              <span className="mt-3 text-white text-xs font-bold tracking-wider uppercase">Tonton Video Multi-S</span>
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
              Dapatkan produk AC Multi Split Daikin melalui jaringan dealer resmi terpercaya atau berkonsultasi langsung dengan tim profesional kami.
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

      {/* Section Kategori Lainnya (Unified 6 Grid Cards with Multi Split hidden) */}
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

            {/* 2. Air Purifier */}
            <FadeInUp delay={0.2}>
              <Link to="/products/residential/air-purifier" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Air Purifier</h3>
                  <p className="text-gray-500 text-xs">Pembersih Udara Teknologi Streamer</p>
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
                  <p className="text-gray-500 text-xs">AC Sentral Premium Hunian Mewah</p>
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
                  <p className="text-gray-500 text-xs">Penawaran & Promo Spesial Daikin</p>
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
              <span className="text-white/60 text-xs font-medium">Video Player Placeholder (Demonstrasi Daikin Multi-S)</span>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
