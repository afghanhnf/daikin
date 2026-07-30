import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, X, ShieldCheck, Wind, Sparkles, 
  CheckCircle2, FileText, MapPin, ExternalLink, Info, Sliders, Layers
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface OtherSkyAirProduct {
  id: string
  model: string
  name: string
  description: string
  link: string
}

const OTHER_SKYAIR_PRODUCTS: OtherSkyAirProduct[] = [
  {
    id: 'fcfc',
    model: 'FCFC',
    name: 'Ceiling Mounted Cassette Round Flow',
    description: 'AC Cassette hembusan melingkar hemat energi dengan sensor pintar.',
    link: '#'
  },
  {
    id: 'fdlf',
    model: 'FDLF',
    name: 'Duct Connection Low Static Pressure - Height Compact',
    description: 'AC tersembunyi tipis & ringkas fleksibel untuk rongga plafon terbatas.',
    link: '#'
  },
  {
    id: 'fdbf',
    model: 'FDBF',
    name: 'Duct Connection Low Static Pressure - Width Compact',
    description: 'Solusi AC Duct ramping dengan lebar ringkas untuk instalasi tersembunyi.',
    link: '#'
  },
  {
    id: 'fhfc',
    model: 'FHFC',
    name: 'Ceiling Suspended',
    description: 'AC langit-langit tanpa rongga plafon khusus dengan hembusan udara jangkauan jauh.',
    link: '#'
  },
  {
    id: 'fffc',
    model: 'FFFC',
    name: 'Compact Multi Flow Cassette',
    description: 'AC Cassette kompak ukuran 60x60 cm yang pas pada grid plafon perkantoran.',
    link: '#'
  },
  {
    id: 'fbfc',
    model: 'FBFC',
    name: 'Duct Connection Middle Static Pressure',
    description: 'AC Duct tekanan statis menengah untuk distribusi udara tersembunyi yang tenang.',
    link: '#'
  }
]

export default function SkyAirFCFGPage() {
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false)

  return (
    <PageTransition>
      <PageMeta title="Daikin KIRIU FCFG - Surround Cassette SkyAir" canonical="/products/commercial/skyair/fcfg" />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-r from-[#0097e6] to-[#00b0f0]">
        <Suspense fallback={null}><AirParticles color="white" /></Suspense>
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/pattern.png')] bg-repeat" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <nav className="flex flex-wrap items-center space-x-2 text-white/70 mb-8 text-sm font-medium tracking-wide">
              <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products" className="hover:text-white transition-colors">Produk</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products/commercial" className="hover:text-white transition-colors">Commercial</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/products/commercial/skyair" className="hover:text-white transition-colors">SkyAir</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">FCFG (KIRIU)</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                <ShieldCheck className="w-4 h-4 text-cyan-200" />
                SkyAir Inverter R-32 Series
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                KIRIU - Surround Cassette
              </h1>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                Memiliki desain yang estetik cocok untuk segala ruang, DAIKIN KIRIU juga mampu menghembuskan udara merata ke seluruh sudut ruang. Dilengkapi dengan DAIKIN Triple Method, sehingga mampu meningkatkan kualitas udara di dalam ruangan.
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
              {/* Clean Empty Thumbnail Box for Product Image */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                <span className="text-xs opacity-60 mt-1">(Daikin KIRIU - Surround Cassette FCFG)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Section Fitur Utama */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center mb-16">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Inovasi Terdepan
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-[1.35]">
              Fitur Utama
            </h2>
          </FadeInUp>

          <div className="space-y-20">

            {/* Feature 1: Surround Airflow */}
            <FadeInUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Empty Thumbnail Box */}
                <div className="aspect-video w-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-gray-400 font-bold text-xs">Sample Image Placeholder</span>
                  <span className="text-gray-400 text-[11px] mt-1">(Surround Airflow & Coanda Technology)</span>
                </div>

                <div className="space-y-4">
                  <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md inline-block">
                    Kenyamanan Aliran Udara
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal">Surround Airflow</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Aliran udara yang dihembuskan dapat menjangkau ke seluruh sudut ruang. Hembusan udara tidak langsung dengan menggunakan Coanda Technology sehingga hembusan udara yang dihasilkan lebih nyaman.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Hembusan tidak langsung yang lembut di kulit</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Distribusi pendinginan merata di seluruh ruangan</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Feature 2: Desain Estetik */}
            <FadeInUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                <div className="space-y-4 lg:order-1">
                  <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md inline-block">
                    Harmoni Interior
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal">Desain Estetik</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Dirancang agar dapat menyatu dengan berbagai macam interior dengan cakupan udara yang lebih merata ke seluruh sudut ruang.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                      <span className="font-bold text-charcoal text-xs block mb-1">1. Wide Coverage</span>
                      <span className="text-[11px] text-gray-500">Cakupan hembusan meluas</span>
                    </div>
                    <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                      <span className="font-bold text-charcoal text-xs block mb-1">2. Draftless Control</span>
                      <span className="text-[11px] text-gray-500">Bebas hembusan dingin menusuk</span>
                    </div>
                    <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                      <span className="font-bold text-charcoal text-xs block mb-1">3. Fast Cooling</span>
                      <span className="text-[11px] text-gray-500">Pendinginan cepat & responsif</span>
                    </div>
                    <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                      <span className="font-bold text-charcoal text-xs block mb-1">4. Uniform Distribution</span>
                      <span className="text-[11px] text-gray-500">Suhu konsisten di tiap sudut</span>
                    </div>
                  </div>
                </div>

                {/* Empty Thumbnail Box */}
                <div className="aspect-video w-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 text-center lg:order-2">
                  <span className="text-gray-400 font-bold text-xs">Sample Image Placeholder</span>
                  <span className="text-gray-400 text-[11px] mt-1">(Desain Estetik & 4 Pilar Keunggulan)</span>
                </div>
              </div>
            </FadeInUp>

            {/* Feature 3: Smart & Healthy (DAIKIN TRIPLE METHOD) */}
            <FadeInUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Empty Thumbnail Box */}
                <div className="aspect-video w-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-gray-400 font-bold text-xs">Sample Image Placeholder</span>
                  <span className="text-gray-400 text-[11px] mt-1">(DAIKIN TRIPLE METHOD: Streamer, Gin-ION & Plasma Ion)</span>
                </div>

                <div className="space-y-4">
                  <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md inline-block">
                    Kualitas Udara Sehat
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal">Smart & Healthy</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Dilengkapi dengan DAIKIN Triple Method diantaranya STREAMER Technology, Gin-ION Filter, dan Plasma Ion yang mampu meningkatkan kualitas udara di dalam ruangan.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>STREAMER Technology: Memecah virus, bakteri, dan bau tidak sedap</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Gin-ION Filter: Lapisan perak anti-mikroba efektif</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

          </div>

          {/* Key Badges / Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16">
            <FadeInUp delay={0.1}>
              <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue text-white flex items-center justify-center shrink-0 font-black text-sm">
                  R32
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-base mb-1">Refrigerant R-32</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Ramah lingkungan dengan potensi pemanasan global (GWP) rendah serta tingkat efisiensi energi pendinginan terbaik.
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue text-white flex items-center justify-center shrink-0 font-black text-xs">
                  PM2.5
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-base mb-1">PM2.5 Filter</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Filter penyaring partikel mikro halus PM2.5 yang efektif menjaga kebersihan dan kesegaran udara ruangan bisnis Anda.
                  </p>
                </div>
              </div>
            </FadeInUp>
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
              Spesifikasi Teknis Daikin KIRIU FCFG
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Klik tombol di bawah ini untuk melihat detail tabel spesifikasi lengkap seluruh varian kapasitas model FCFG.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="inline-block bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-xl w-full">
              {/* Empty Specification Preview Box */}
              <div className="w-full aspect-[21/9] bg-gray-50 rounded-xl mb-6 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-4">
                <FileText className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-gray-400 font-bold text-xs">Pratinjau Tabel Spesifikasi (FCFG Series)</span>
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

      {/* Section Jelajahi Rangkaian SkyAir Lainnya */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center mb-16">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Rangkaian Produk Lainnya
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-[1.35]">
              Jelajahi Rangkaian SkyAir Lainnya
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {OTHER_SKYAIR_PRODUCTS.map((prod, i) => (
              <FadeInUp key={prod.id} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-daikin-blue transition-all flex flex-col justify-between h-full group p-6 text-center">
                  <div>
                    {/* Empty Thumbnail Box */}
                    <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-4 border border-gray-100 flex items-center justify-center p-3 relative overflow-hidden group-hover:border-daikin-blue/30 transition-colors">
                      <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-200"></div>
                    </div>

                    <h3 className="font-black text-charcoal text-base mb-1 group-hover:text-daikin-blue transition-colors">
                      {prod.model}
                    </h3>
                    <p className="text-daikin-blue font-semibold text-xs mb-3">
                      {prod.name}
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
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

      {/* Section Bottom CTA: Dealer & Consultation */}
      <div className="py-20 text-center bg-gradient-to-br from-blue-50 via-cyan-50/80 to-sky-100/60 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeInUp className="space-y-4">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-white/80 px-4 py-1.5 rounded-full inline-block mb-1 border border-blue-200/60 shadow-2xs">
              Jaringan Layanan Resmi
            </span>
            <h3 className="text-3xl font-bold text-charcoal">Produk Tersedia di:</h3>
            <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed mb-6">
              Dapatkan produk Daikin KIRIU FCFG melalui jaringan dealer resmi terpercaya atau berkonsultasi langsung dengan tim profesional kami untuk perencanaan sistem HVAC bangunan Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-2">
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
                Spesifikasi Teknis Daikin KIRIU (FCFG Series)
              </h3>
            </div>

            {/* Spec Image Thumbnail Placeholder */}
            <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center mb-6">
              <FileText className="w-12 h-12 text-gray-400 mb-3" />
              <span className="text-gray-500 font-bold text-sm">Sample Specification Image Sheet Placeholder</span>
              <span className="text-gray-400 text-xs mt-1">(Gambar Tabel Spesifikasi Resmi Daikin KIRIU FCFG)</span>
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
