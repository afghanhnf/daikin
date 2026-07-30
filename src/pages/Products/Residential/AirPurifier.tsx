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

interface AirPurifierProduct {
  id: string
  name: string
  subtitle: string
  description: string
  badges?: string[]
  link: string
}

const AIR_PURIFIER_PRODUCTS: AirPurifierProduct[] = [
  {
    id: 'mc80zvm7',
    name: 'MC80ZVM7',
    subtitle: 'Pet Mode dan STREAMER Technology',
    description: 'Air Purifier flagship dengan fitur Pet Mode khusus untuk pemilik hewan peliharaan & teknologi Streamer ganda.',
    badges: ['Pet Mode', 'Double Streamer', 'HEPA Filter'],
    link: '/products/residential/air-purifier/mc80zvm7'
  },
  {
    id: 'mck70zvm',
    name: 'MCK70ZVM',
    subtitle: 'Pet Mode dan STREAMER Technology',
    description: 'Pembersih udara dengan penambahan fitur humidifikasi (kelembapan) dan filter HEPA Elektrostatis.',
    badges: ['Humidifying', 'Pet Mode', 'Streamer'],
    link: '#'
  },
  {
    id: 'mck55tvm',
    name: 'MCK55TVM',
    subtitle: 'STREAMER dan HEPA Filter Elektrostatis',
    description: 'Air Purifier tower ramping dengan fungsi pelembap udara dan penyaring HEPA efisiensi tinggi.',
    badges: ['Slim Tower', 'Humidifier', 'Quiet'],
    link: '#'
  },
  {
    id: 'mc555avm4',
    name: 'MC555AVM4',
    subtitle: 'STREAMER dan HEPA Filter',
    description: 'Pembersih udara berdesain tower ringkas dengan jangkauan luas untuk ruang keluarga & perkantoran.',
    badges: ['Tower Design', 'Streamer', 'Plasma Ion'],
    link: '#'
  },
  {
    id: 'mc55uvm',
    name: 'MC55UVM',
    subtitle: 'STREAMER dan HEPA Filter Elektrostatis',
    description: 'Pembersih udara Streamer dengan Plasma Ion aktif dan pengoperasian sangat tenang hingga 19 dB(A).',
    badges: ['Active Plasma Ion', 'Electrostatic HEPA'],
    link: '#'
  },
  {
    id: 'mc40uvm',
    name: 'MC40UVM',
    subtitle: 'STREAMER dan HEPA Filter Elektrostatis',
    description: 'Air Purifier ukuran menengah dengan sensor debu PM2.5 & sensor bau sensitif presisi tinggi.',
    badges: ['PM2.5 Sensor', 'Deodorizing Filter'],
    link: '#'
  },
  {
    id: 'mc30yvm7',
    name: 'MC30YVM7',
    subtitle: 'STREAMER dan HEPA Filter Elektrostatis',
    description: 'Air Purifier kompak dengan desain cube modern yang sangat serasi untuk kamar tidur dan ruang kerja.',
    badges: ['Compact Cube', 'Streamer Tech'],
    link: '#'
  },
  {
    id: 'mcq30zvm',
    name: 'MCQ30ZVM',
    subtitle: 'HEPA Filter Elektrostatis',
    description: 'Pembersih udara ekonomis dengan penyaring HEPA efisiensi tinggi untuk ruangan kecil.',
    badges: ['Economical', 'Electrostatic HEPA'],
    link: '#'
  }
]

export default function AirPurifierPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <PageTransition>
      <PageMeta title="Daikin Air Purifier - Pilihan Tepat Udara Lebih Sehat" canonical="/products/residential/air-purifier" />

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
              <span className="text-white font-semibold">Air Purifier</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                Air Purifier • Streamer Technology
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight drop-shadow-md">
                Pilihan Tepat Udara Lebih Sehat
              </h1>
              <p className="text-cyan-100 font-extrabold text-lg md:text-xl mb-4 tracking-wider">
                Daikin Air Purifier Lineup
              </p>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                Pilihan Air Purifier Daikin terbaik dengan HEPA filter untuk menjaga kualitas udara dalam ruang dari berbagai partikel merugikan kesehatan yang melayang bersama udara yang Anda hirup. Pilihan pemurni udara Daikin sesuai dengan luas ruang pada hunian Anda.
              </p>

              <Link
                to="/products/e-catalogue"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-daikin-blue rounded-xl font-bold text-sm hover:bg-cyan-50 transition-all shadow-md group"
              >
                <FileText className="w-4 h-4" />
                <span>Lihat Katalog Air Purifier</span>
              </Link>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Clean Empty Thumbnail Box for Banner Image Placeholder */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                <span className="text-xs opacity-60 mt-1">(Daikin Air Purifier Lineup - MC80ZVM7, MCK70ZVM, MC55UVM)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Main Product Catalog Section (8 Cards Grid) */}
      <div className="py-20 bg-gray-50/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Solusi Udara Higenis
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Katalog Produk <span className="text-daikin-blue">Air Purifier</span>
            </h2>
          </FadeInUp>

          {/* 8 Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AIR_PURIFIER_PRODUCTS.map((prod, idx) => (
              <FadeInUp key={prod.id} delay={0.05 * idx}>
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-daikin-blue transition-all flex flex-col justify-between h-full group p-5 text-center">
                  <div>
                    {/* Empty Thumbnail Box */}
                    <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-4 border border-gray-100 flex items-center justify-center p-3 relative overflow-hidden group-hover:border-daikin-blue/30 transition-colors">
                      <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-200"></div>
                    </div>

                    <h4 className="font-black text-daikin-blue text-xl mb-1 group-hover:text-daikin-blue-dark transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-gray-500 font-bold text-xs mb-3 leading-snug">
                      {prod.subtitle}
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed mb-6">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex justify-center">
                    <Link
                      to={prod.link}
                      className="w-full py-2 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all text-center shadow-2xs"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>

      {/* Unified Dark Background Section: Video Demo (Top) + Fresh & Pure (Bottom) with Animated Bubbles */}
      <div className="relative py-24 bg-gradient-to-b from-[#0c1821] via-[#102230] to-[#0d161f] text-white overflow-hidden">
        {/* Floating Glowing Air/Streamer Bubble Accents */}
        <div className="absolute top-12 left-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute top-1/2 right-12 w-96 h-96 bg-daikin-blue/20 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none" />
        <div className="absolute bottom-12 left-1/3 w-80 h-80 bg-sky-400/15 rounded-full blur-2xl animate-pulse delay-1000 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10 space-y-24">
          
          {/* Top Subsection: Video Demo (Keunggulan Teknologi Pemurni Udara Daikin Streamer) */}
          <div className="space-y-12">
            <FadeInUp className="text-center max-w-4xl mx-auto">
              <span className="text-cyan-300 font-bold text-xs uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-white/20">
                Video Informasi Produk
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                Keunggulan Teknologi Pemurni Udara Daikin Streamer
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Saksikan bagaimana pelepasan plasma Streamer menguraikan berbagai jenis polutan udara, bakteri, dan alergen secara tuntas.
              </p>
            </FadeInUp>

            <FadeInUp>
              <div 
                onClick={() => setIsVideoModalOpen(true)}
                className="aspect-[21/9] w-full max-w-5xl mx-auto bg-white/10 rounded-3xl overflow-hidden relative shadow-2xl group border border-white/20 backdrop-blur-xs cursor-pointer flex items-center justify-center transition-all hover:border-white/40"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-daikin-blue text-white flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-daikin-blue group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="mt-4 text-white text-xs md:text-sm font-bold tracking-wider uppercase">Tonton Video Air Purifier Streamer</span>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Bottom Subsection: Fresh & Pure Daikin Air (No Divider) */}
          <div className="pt-8 text-center flex flex-col items-center">
            <FadeInUp className="max-w-3xl space-y-6">
              <span className="text-cyan-300 font-bold text-xs uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/20">
                Perlindungan Udara Keluarga
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md sm:whitespace-nowrap">
                Fresh & Pure Daikin Air
              </h2>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto drop-shadow">
                Teknologi Streamer Daikin terbukti efektif melumpuhkan virus, bakteri, dan bau tidak sedap secara aktif untuk perlindungan harian rumah tangga Anda.
              </p>
              <div className="pt-2">
                <Link
                  to="/profile/streamer"
                  className="inline-flex items-center gap-2.5 px-9 py-4 bg-daikin-blue text-white rounded-xl font-bold text-sm hover:bg-white hover:text-daikin-blue transition-all shadow-xl group"
                >
                  <span>Lebih Lanjut</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              Dapatkan produk Air Purifier Daikin melalui jaringan dealer resmi terpercaya atau berkonsultasi langsung dengan tim profesional kami.
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
              <span className="text-white/60 text-xs font-medium">Video Player Placeholder (Keunggulan Teknologi Pemurni Udara Daikin Streamer)</span>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
