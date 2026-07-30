import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, X, 
  Building, Wind, Settings, Play, ShieldCheck, Sliders,
  Sparkles, FileText, MapPin
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface PackagedProduct {
  id: string
  name: string
  model: string
  typeCategory: 'floor-standing-direct' | 'floor-standing-duct' | 'duct-type' | 'water-cooled'
  typeLabel: string
  capacity: string
  description: string
  link: string
}

const PACKAGED_PRODUCTS: PackagedProduct[] = [
  // 1. Floor Standing Direct Air Blow
  {
    id: 'fvgr-series',
    name: 'Floor Standing Type - Direct Air Blow',
    model: 'FVGR200PY1(4) / FVGR250PY1(4)',
    typeCategory: 'floor-standing-direct',
    typeLabel: 'Floor Standing - Direct Blow',
    capacity: '68,000 - 91,000 BTU/h',
    description: 'AC Packaged tipe berdiri hembusan langsung (Direct Air Blow) tanpa ducting untuk pendinginan cepat pada fasilitas area terbuka besar.',
    link: '#'
  },

  // 2. Floor Standing Duct Connection
  {
    id: 'fvpr-series',
    name: 'Floor Standing Type - Duct Connection',
    model: 'FVPR250PY1(4) / FVPR400PY1(4) / FVPR500PY1(4)',
    typeCategory: 'floor-standing-duct',
    typeLabel: 'Floor Standing - Duct Connection',
    capacity: '91,000 - 171,000 BTU/h',
    description: 'AC Packaged tipe berdiri sambungan ducting (Duct Connection) dengan fan Belt Drive untuk penyebaran suhu merata di pabrik.',
    link: '#'
  },

  // 3. Duct Type
  {
    id: 'fdr-series',
    name: 'Duct Type High Static Pressure',
    model: 'FDR200PY1(4) / FDR250PY1(4) / FDR400PY1(4) / FDR500PY1(4)',
    typeCategory: 'duct-type',
    typeLabel: 'High Static Duct Type',
    capacity: '68,000 - 171,000 BTU/h',
    description: 'Unit AC Packaged tersembunyi tipe ducting tekanan statis tinggi (hingga 147 Pa) untuk sistem pendinginan terpusat area industri.',
    link: '#'
  },

  // 4. Water Cooled Packaged
  {
    id: 'uatq-series',
    name: 'Water Cooled Packaged Series',
    model: 'UATQ / Water Cooled Series',
    typeCategory: 'water-cooled',
    typeLabel: 'Water Cooled System',
    capacity: '100,000 - 240,000 BTU/h',
    description: 'Sistem Packaged pendingin berbasis media air (Water Cooled) dengan efisiensi energi optimal untuk gedung pabrik bertingkat.',
    link: '#'
  }
]

export default function PackagedACPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false)

  return (
    <PageTransition>
      <PageMeta title="Daikin Air Cooled Packaged Inverter - Solusi AC Industri & Pabrik" canonical="/products/commercial/packaged" />

      {/* Hero Section */}
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
              <Link to="/products/commercial" className="hover:text-white transition-colors">Commercial</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">Packaged Air Conditioner</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                <ShieldCheck className="w-4 h-4 text-cyan-200" />
                Industrial HVAC Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                Air Cooled Packaged Inverter
              </h1>
              <p className="text-cyan-100 text-lg md:text-xl font-medium mb-6">
                Solusi AC Industri & Pabrik Terkemuka untuk Kontrol Suhu Presisi
              </p>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                Sistem AC Packaged Daikin menawarkan kontrol iklim dan suhu yang tepat untuk memenuhi standar ketat pada fasilitas industri, pabrik manufaktur, gudang logistik, dan ruangan khusus dengan efisiensi energi tertinggi.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products/e-catalogue"
                  className="px-8 py-3.5 bg-white text-daikin-blue border-2 border-daikin-blue rounded-xl font-bold text-sm hover:bg-daikin-blue hover:text-white transition-all shadow-sm"
                >
                  Lihat Katalog
                </Link>
                <button
                  onClick={() => setIsSpecModalOpen(true)}
                  className="px-8 py-3.5 bg-white/20 backdrop-blur-md text-white border-2 border-white/40 rounded-xl font-bold text-sm hover:bg-white hover:text-daikin-blue transition-all shadow-sm"
                >
                  Spesifikasi Teknis
                </button>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Clean Empty Thumbnail Box for Product Lineup */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                <span className="text-xs opacity-60 mt-1">(Daikin Air Cooled Packaged Inverter Series)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Main Catalog & Filter Section */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

          <FadeInUp className="text-center mb-16">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Katalog Produk Resmi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-[1.35] mb-4">
              Rangkaian Packaged Air Conditioner
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Pilih tipe unit AC Packaged Daikin di bawah ini sesuai kebutuhan instalasi dan kontrol suhu area fasilitas Anda.
            </p>
          </FadeInUp>

          {/* Direct 4-Column Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PACKAGED_PRODUCTS.map((prod) => (
              <FadeInUp key={prod.id}>
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-daikin-blue transition-all flex flex-col justify-between h-full group p-5 text-center">
                  <div>
                    {/* Product Sample Image Thumbnail Box */}
                    <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-3.5 border border-gray-100 flex items-center justify-center p-2.5 relative overflow-hidden group-hover:border-daikin-blue/30 transition-colors">
                      <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-200"></div>
                    </div>

                    {/* Model & Name */}
                    <h3 className="font-black text-daikin-blue text-lg mb-1 group-hover:text-daikin-blue-dark transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-gray-500 font-semibold text-xs mb-3">
                      {prod.typeLabel} • {prod.capacity}
                    </p>

                    {/* User-friendly Description */}
                    <p className="text-gray-600 text-xs leading-relaxed mb-6">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex justify-center">
                    {/* Lite Outline Button Link */}
                    <Link
                      to={prod.link}
                      className="w-full py-2.5 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all text-center shadow-2xs"
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

      {/* Section Spesifikasi (Popup Trigger Model) */}
      <div className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <FadeInUp className="max-w-2xl mx-auto mb-10">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Spesifikasi Lengkap
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-4">
              Spesifikasi Teknis Packaged Air Conditioner
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Klik tombol di bawah ini untuk melihat detail tabel spesifikasi lengkap seluruh tipe Packaged Inverter (FVGR, FVPR, FDR Series).
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="inline-block bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-xl w-full">
              <div className="w-full aspect-[21/9] bg-gray-50 rounded-xl mb-6 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-4">
                <FileText className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-gray-400 font-bold text-xs">Pratinjau Lembar Spesifikasi (Air Cooled Packaged Inverter)</span>
              </div>

              <button
                onClick={() => setIsSpecModalOpen(true)}
                className="w-full py-3.5 bg-white text-daikin-blue border-2 border-daikin-blue rounded-xl font-bold text-sm hover:bg-daikin-blue hover:text-white transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Lihat Spesifikasi Lengkap (Popup Table)
              </button>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Section Video Packaged AC */}
      <div className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-daikin-blue-dark via-daikin-blue-dark/80 to-[#1c242b] opacity-80 z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-cyan-300 font-bold text-xs uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-white/20">
              Video Demo Teknologi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Keunggulan Inovasi Packaged Air Conditioner
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Saksikan bagaimana keandalan pendinginan Daikin Packaged Air Conditioner mendukung kebutuhan fasilitas industri, pabrik manufaktur, dan gudang logistik.
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
              <span className="mt-3 text-white text-xs font-bold tracking-wider uppercase">Tonton Video Packaged AC</span>
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
              Dapatkan unit Daikin Packaged Air Conditioner melalui jaringan dealer resmi terpercaya atau berkonsultasi langsung dengan tim profesional kami untuk perencanaan sistem HVAC pabrik & industri Anda.
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

      {/* Section Kategori Lainnya (Commercial Solutions Categorization + Quick Actions) */}
      <div className="py-20 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">Kategori Lainnya</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. SkyAir */}
            <FadeInUp delay={0.1}>
              <Link to="/products/commercial/skyair" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">SkyAir</h3>
                  <p className="text-gray-500 text-xs">AC Komersial Cassette & Duct</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            {/* 2. VRV Outdoor Unit */}
            <FadeInUp delay={0.2}>
              <Link to="/products/commercial/vrv" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Settings className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">VRV Outdoor Unit</h3>
                  <p className="text-gray-500 text-xs">Sistem AC Sentral Terkemuka</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            {/* 3. Control System */}
            <FadeInUp delay={0.3}>
              <Link to="/products/commercial#controllersystem" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Sliders className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Control System</h3>
                  <p className="text-gray-500 text-xs">iTM, Reiri & MARUTTO Cloud</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            {/* 4. Lihat Promo Lainnya */}
            <FadeInUp delay={0.4}>
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

            {/* 5. Lihat Katalog */}
            <FadeInUp delay={0.5}>
              <Link to="/products/e-catalogue" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Lihat Katalog</h3>
                  <p className="text-gray-500 text-xs">Unduh Katalog Resmi Produk</p>
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
              <span className="text-white/60 text-xs font-medium">Video Player Placeholder (Demonstrasi Daikin Packaged AC)</span>
            </div>
          </div>
        </div>
      )}

      {/* Modal Popup Tabel Spesifikasi Teknis */}
      {isSpecModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 md:p-8 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-200 my-8">
            <button 
              onClick={() => setIsSpecModalOpen(false)}
              className="absolute right-6 top-6 text-gray-400 hover:text-charcoal p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="px-3 py-1 bg-blue-50 text-daikin-blue font-bold text-xs uppercase tracking-wider rounded-full inline-block mb-2">
                Tabel Spesifikasi Resmi
              </span>
              <h3 className="text-2xl font-bold text-charcoal">
                Spesifikasi Teknis Daikin Air Cooled Packaged Inverter
              </h3>
            </div>

            {/* Spec Image Thumbnail Placeholder */}
            <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center mb-6">
              <FileText className="w-12 h-12 text-gray-400 mb-3" />
              <span className="text-gray-500 font-bold text-sm">Sample Specification Image Sheet Placeholder</span>
              <span className="text-gray-400 text-xs mt-1">(Gambar Tabel Spesifikasi Resmi Daikin Air Cooled Packaged Inverter Series)</span>
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => setIsSpecModalOpen(false)}
                className="px-6 py-2.5 bg-daikin-blue text-white rounded-xl font-bold text-xs hover:bg-daikin-blue-dark transition-colors"
              >
                Tutup Spesifikasi
              </button>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
