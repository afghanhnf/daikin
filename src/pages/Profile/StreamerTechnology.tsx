import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Play, ShieldCheck, Award, Sparkles, 
  FileText, MapPin, X, Wind, Zap, Layers, RefreshCw, CheckCircle2, Plus, Info
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function StreamerTechnology() {
  const [activeVideoTitle, setActiveVideoTitle] = useState<string | null>(null)

  return (
    <PageTransition>
      <PageMeta title="Fresh & Pure Daikin Air - Solusi Udara Segar & Bersih" canonical="/profile/streamer" />

      {/* Hero Header Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-r from-[#0097e6] to-[#00b0f0]">
        <Suspense fallback={null}><AirParticles color="white" /></Suspense>
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <nav className="flex items-center space-x-2 text-white/70 mb-8 text-sm font-medium tracking-wide flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/profile/about" className="hover:text-white transition-colors">Tentang Kami</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">Fresh & Pure Daikin Air</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                Solusi Kualitas Udara Total • Streamer & Ventilation
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight drop-shadow-md">
                Fresh & Pure Daikin Air
              </h1>
              <p className="text-cyan-100 font-extrabold text-lg md:text-xl mb-4 tracking-wider uppercase">
                Fresh Air • Pure Air
              </p>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mb-6">
                Sebagai pelopor industri pendingin udara dunia, DAIKIN berkomitmen menghadirkan kualitas udara terbaik untuk hunian dan bangunan Anda melalui kombinasi sempurna sistem ventilasi udara segar (Fresh Air) dan pemurni udara Streamer (Pure Air).
              </p>

              <div className="inline-block px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-xl border border-white/30 text-white font-bold text-sm tracking-wider uppercase">
                Fresh & Pure, DAIKIN AIR
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Clean Empty Thumbnail Box Placeholder */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                <span className="text-xs opacity-60 mt-1">(Fresh & Pure Daikin Air Banner Illustration)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Intro Commitment Banner */}
      <div className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <FadeInUp className="space-y-4">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block">
              Komitmen Udara Sehat
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-charcoal leading-tight">
              Lingkungan Hidup Bebas Polutan untuk Keluarga Anda
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
              Perpaduan teknologi pendistribusian udara luar ruangan yang disaring (Fresh Air) dan dekomposisi virus serta bakteri secara aktif (Pure Air) menjadikan ruangan Anda tempat teraman untuk bernapas setiap hari.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* SECTION 1: DAIKIN "Fresh" Air (Ventilation System) */}
      <div className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-16">
          <FadeInUp className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-blue-100/70 px-4 py-1.5 rounded-full inline-block">
              Ventilation System
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-charcoal">
              DAIKIN <span className="text-daikin-blue font-bold">'Fresh'</span> Air
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Sistem sirkulasi dan suplai udara segar outdoor yang menyegarkan ruangan dan membuang karbon dioksida (CO2) serta polutan dalam ruangan.
            </p>
          </FadeInUp>

          {/* 2 Main Pillars of Fresh Air */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pilar 1 */}
            <FadeInUp delay={0.1}>
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xs space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal">
                    1. Suplai Udara Segar (Outdoor Air Supply)
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Mengalirkan udara segar dari luar ke dalam ruangan yang telah disaring secara berkelanjutan untuk menggantikan udara pengap.
                  </p>
                </div>
                {/* Empty Image Container Placeholder */}
                <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-4">
                  <span className="text-xs font-bold text-gray-400 uppercase">Outdoor Air Supply Diagram Image</span>
                </div>
              </div>
            </FadeInUp>

            {/* Pilar 2 */}
            <FadeInUp delay={0.2}>
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xs space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center">
                    <Wind className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal">
                    2. Buang Udara Kotor (Exhaust Air System)
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Membuang udara kotor, kelembapan berlebih, dan gas berbahaya (CO2 & VOC) keluar dari ruangan secara efisien.
                  </p>
                </div>
                {/* Empty Image Container Placeholder */}
                <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-4">
                  <span className="text-xs font-bold text-gray-400 uppercase">Exhaust Air System Diagram Image</span>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Fresh Air Video Card */}
          <FadeInUp>
            <div 
              onClick={() => setActiveVideoTitle('DAIKIN PURE AIR - Bebas Virus, Bakteri, dan Bau')}
              className="bg-charcoal text-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-xl cursor-pointer group hover:border-daikin-blue transition-all max-w-4xl mx-auto"
            >
              <div className="aspect-[21/9] w-full bg-black/50 rounded-2xl overflow-hidden relative flex items-center justify-center mb-4 border border-white/10">
                <div className="w-16 h-16 rounded-full bg-daikin-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-cyan-300 font-bold text-xs uppercase tracking-wider mb-1 block">Video Demonstrasi Fresh Air</span>
                <h4 className="font-bold text-white text-lg md:text-xl">
                  DAIKIN PURE AIR - Bebas Virus, Bakteri, dan Bau
                </h4>
              </div>
            </div>
          </FadeInUp>

          {/* Fresh Air Product Lineup Formula */}
          <FadeInUp className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-charcoal">Formula Kombinasi Produk Fresh Air</h3>
              <p className="text-gray-500 text-xs mt-1">DAIKIN Air Conditioning + DAIKIN Fresh Air Ventilation</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-4">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200"></div>
                <div>
                  <h4 className="font-bold text-charcoal text-base">Heat Reclaim Ventilator</h4>
                  <p className="text-gray-500 text-xs font-semibold">VAM Series</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-4">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200"></div>
                <div>
                  <h4 className="font-bold text-charcoal text-base">VKM Series</h4>
                  <p className="text-gray-500 text-xs font-semibold">Ventilator dengan Humidifikasi</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-4">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200"></div>
                <div>
                  <h4 className="font-bold text-charcoal text-base">Outdoor Air Processing Unit</h4>
                  <p className="text-gray-500 text-xs font-semibold">OAPU System</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-4">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200"></div>
                <div>
                  <h4 className="font-bold text-charcoal text-base">Air Handling Unit</h4>
                  <p className="text-gray-500 text-xs font-semibold">AHU Commercial</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* SECTION 2: DAIKIN "Pure" Air (Air Purification System) */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-16">
          <FadeInUp className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-blue-100/70 px-4 py-1.5 rounded-full inline-block">
              Air Purification System
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-charcoal">
              DAIKIN <span className="text-daikin-blue font-bold">'Pure'</span> Air
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Teknologi pemurnian udara berbasis Streamer & HEPA filter untuk mengeliminasi virus, bakteri, alergen, dan bau tak sedap secara tuntas.
            </p>
          </FadeInUp>

          {/* 2 Main Pillars of Pure Air */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pilar 1 */}
            <FadeInUp delay={0.1}>
              <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-xs space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal">
                    1. Teknologi Streamer Plasma (Streamer Discharge)
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Pelepasan elektron kecepatan tinggi yang menguraikan struktur protein virus, bakteri, dan jamur secara aktif hingga 99.9%.
                  </p>
                </div>
                {/* Empty Image Container Placeholder */}
                <div className="w-full aspect-[16/9] bg-white rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-4">
                  <span className="text-xs font-bold text-gray-400 uppercase">Streamer Discharge Plasma Diagram Image</span>
                </div>
              </div>
            </FadeInUp>

            {/* Pilar 2 */}
            <FadeInUp delay={0.2}>
              <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-xs space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal">
                    2. Filter HEPA Elektrostatis (Electrostatic HEPA Filter)
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Menangkap 99.97% partikel halus hingga ukuran 0.3 mikron termasuk PM2.5 dengan serat elektrostatik yang tidak mudah tersumbat.
                  </p>
                </div>
                {/* Empty Image Container Placeholder */}
                <div className="w-full aspect-[16/9] bg-white rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center p-4">
                  <span className="text-xs font-bold text-gray-400 uppercase">Electrostatic HEPA Filter Diagram Image</span>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* 2 Pure Air Video Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            <FadeInUp delay={0.1} className="h-full">
              <div 
                onClick={() => setActiveVideoTitle('Uji Efektivitas Teknologi Streamer Daikin Melumpuhkan Virus')}
                className="bg-charcoal text-white rounded-3xl p-6 border border-gray-200 shadow-lg cursor-pointer group hover:border-daikin-blue transition-all h-full flex flex-col justify-between"
              >
                <div className="aspect-[16/9] w-full bg-black/50 rounded-2xl overflow-hidden relative flex items-center justify-center mb-4 border border-white/10">
                  <div className="w-14 h-14 rounded-full bg-daikin-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="h-12 flex items-center justify-center text-center">
                  <h4 className="font-bold text-white text-base leading-snug">
                    Uji Efektivitas Teknologi Streamer Daikin Melumpuhkan Virus
                  </h4>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2} className="h-full">
              <div 
                onClick={() => setActiveVideoTitle('Demo Penyerapan Bau & Partikel PM2.5 Oleh HEPA Filter')}
                className="bg-charcoal text-white rounded-3xl p-6 border border-gray-200 shadow-lg cursor-pointer group hover:border-daikin-blue transition-all h-full flex flex-col justify-between"
              >
                <div className="aspect-[16/9] w-full bg-black/50 rounded-2xl overflow-hidden relative flex items-center justify-center mb-4 border border-white/10">
                  <div className="w-14 h-14 rounded-full bg-daikin-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="h-12 flex items-center justify-center text-center">
                  <h4 className="font-bold text-white text-base leading-snug">
                    Demo Penyerapan Bau & Partikel PM2.5 Oleh HEPA Filter
                  </h4>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Pure Air Lineup Recommendation */}
          <FadeInUp className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-charcoal">Rekomendasi Lineup Produk Pure Air</h3>
              <p className="text-gray-500 text-xs mt-1">AC Single Split Streamer + Daikin Air Purifier</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-4">
                <div className="w-full aspect-[4/3] bg-white rounded-xl border-2 border-dashed border-gray-200"></div>
                <div>
                  <h4 className="font-bold text-daikin-blue text-base">MC80ZVM7 / MCK70ZVM</h4>
                  <p className="text-gray-500 text-xs font-semibold">Pet Mode & Double Streamer</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-4">
                <div className="w-full aspect-[4/3] bg-white rounded-xl border-2 border-dashed border-gray-200"></div>
                <div>
                  <h4 className="font-bold text-daikin-blue text-base">MCK55TVM / MC55UVM</h4>
                  <p className="text-gray-500 text-xs font-semibold">Tower Streamer & Humidifier</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-4">
                <div className="w-full aspect-[4/3] bg-white rounded-xl border-2 border-dashed border-gray-200"></div>
                <div>
                  <h4 className="font-bold text-daikin-blue text-base">MC30YVM7</h4>
                  <p className="text-gray-500 text-xs font-semibold">Compact Cube Streamer</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-xs text-center space-y-4">
                <div className="w-full aspect-[4/3] bg-white rounded-xl border-2 border-dashed border-gray-200"></div>
                <div>
                  <h4 className="font-bold text-daikin-blue text-base">ALPHA Inverter (FTKM)</h4>
                  <p className="text-gray-500 text-xs font-semibold">AC Streamer Single Split</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Section Bottom CTA (Light Blue Gradient) */}
      <div className="py-20 text-center bg-gradient-to-br from-blue-50 via-cyan-50/80 to-sky-100/60 border-t border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeInUp className="space-y-3">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-white/80 px-4 py-1.5 rounded-full inline-block mb-1 border border-blue-200/60 shadow-2xs">
              Jaringan Layanan Resmi
            </span>
            <h3 className="text-3xl font-bold text-charcoal">Solusi Udara Segar & Bersih Hunian Anda</h3>
            <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed mb-6">
              Konsultasikan perencanaan ventilasi dan pemurni udara Daikin bersama tim ahli profesional atau kunjungi jaringan dealer resmi terdekat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-1">
              <Link 
                to="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 bg-daikin-blue text-white font-bold text-sm rounded-xl hover:bg-daikin-blue-dark transition-all shadow-md hover:shadow-lg group"
              >
                <Sparkles className="w-4 h-4" />
                <span>Konsultasi Perencanaan Sistem</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services/ishop" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-sm rounded-xl hover:bg-daikin-blue hover:text-white transition-all shadow-2xs hover:shadow-sm group"
              >
                <MapPin className="w-4 h-4" />
                <span>Temukan Dealer Resmi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </div>

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
