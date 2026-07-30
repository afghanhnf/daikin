import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, X, ShieldCheck, Wind, Sparkles, 
  CheckCircle2, FileText, MapPin, Building, Settings, Sliders, Cpu, Zap, ShieldAlert
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface OtherVRVProduct {
  id: string
  model: string
  name: string
  description: string
  link: string
}

const OTHER_VRV_PRODUCTS: OtherVRVProduct[] = [
  {
    id: 'vrv-6x',
    model: 'VRV 6X',
    name: 'VRV Single Outdoor Unit',
    description: 'Sistem VRV 6X dengan efisiensi beban parsial unggulan dan pengisian freon otomatis.',
    link: '#'
  },
  {
    id: 'vrv-iv-s',
    model: 'VRV IV S',
    name: 'VRV Compact Outdoor Unit',
    description: 'VRV IV S bodi ringkas slim outdoor unit ideal untuk hunian mewah dan ruko.',
    link: '#'
  },
  {
    id: 'vrv-q',
    model: 'VRV Q',
    name: 'VRV Retrofit Outdoor Unit',
    description: 'Sistem VRV Q retrofit canggih tanpa perlu membongkar pipa lama.',
    link: '#'
  },
  {
    id: 'vrv-hrhw',
    model: 'VRV HRHW',
    name: 'VRV Water Cooled Unit',
    description: 'VRV Water Cooled dengan pemulihan panas terintegrasi (Heat Recovery).',
    link: '#'
  },
  {
    id: 'vrv-iv-w',
    model: 'VRV IV W',
    name: 'VRV Water Cooled Unit',
    description: 'VRV IV W sistem pendingin media air ringkas untuk gedung bertingkat.',
    link: '#'
  }
]

export default function VRV6APage() {
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false)

  return (
    <PageTransition>
      <PageMeta title="Daikin VRV 6A Series (RXQ-BY14) - Detail Produk Commercial" canonical="/products/commercial/vrv/vrv-6a" />

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
              <Link to="/products/commercial/vrv" className="hover:text-white transition-colors">VRV</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">VRV 6A Series</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                VRV Single Outdoor Series
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                VRV 6A Series (RXQ-BY14)
              </h1>
              <p className="text-cyan-100 text-base md:text-lg font-medium mb-6">
                Perubahan skala penuh untuk efisiensi energi dan kinerja hemat energi
              </p>
              <p className="text-white/90 text-sm md:text-base font-light leading-relaxed max-w-xl mb-8">
                Hadirnya seri VRV 6A lebih hemat energi, dimungkinkan dengan menggunakan tingkat efisiensi operasional pengoperasian beban parsial (rasio pendinginan), dan konsumsi daya kompresor yang lebih efisien serta fleksibilitas pemipaan panjang yang lebih fleksibel. Desain baru struktur bodi pendingin dapat disesuaikan pada berbagai tipe gedung tinggi, proyek gedung menengah dan perkantoran.
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
                <span className="text-xs opacity-60 mt-1">(Daikin VRV 6A Series RXQ-BY14)</span>
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

            {/* Feature 1: Lebih Kuat, Lebih Ringkas */}
            <FadeInUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Empty Thumbnail Box */}
                <div className="aspect-video w-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-gray-400 font-bold text-xs">Sample Image Placeholder</span>
                  <span className="text-gray-400 text-[11px] mt-1">(Lebih Tahan Angin dan Getaran)</span>
                </div>

                <div className="space-y-4">
                  <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md inline-block">
                    Lebih Kuat, Lebih Ringkas
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal">Lebih Tahan Angin dan Getaran</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Gambaran perancangan bodi chassis baru fleksibel mampu menahan getaran dan beban angin kuat di area luar gedung perkantoran atau apartemen tinggi.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Pelindung chasis berbahan kekuatan tinggi</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Struktur dudukan kokoh tahan getaran ekstrim</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Feature 2: Kinerja Tinggi, Lebih Hemat Energi */}
            <FadeInUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                <div className="space-y-4 lg:order-1">
                  <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md inline-block">
                    Kinerja Tinggi, Lebih Hemat Energi
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal">Kolaborasi Teknologi Hardware dan Software Terbaru</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Kolaborasi Teknologi Hardware dan Software udara lebih hemat energi serta efisiensi optimal unit AC komersial dengan menggunakan kompresor Scroll baru dan VRT Smart Control II.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <Zap className="w-5 h-5 text-daikin-blue mb-1" />
                      <span className="font-bold text-charcoal text-xs block mb-1">Teknologi Hardware</span>
                      <span className="text-[11px] text-gray-500">Kompresor Scroll Baru Efisien</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <Cpu className="w-5 h-5 text-daikin-blue mb-1" />
                      <span className="font-bold text-charcoal text-xs block mb-1">Teknologi Software</span>
                      <span className="text-[11px] text-gray-500">VRT Smart Control II</span>
                    </div>
                  </div>
                </div>

                {/* Empty Thumbnail Box */}
                <div className="aspect-video w-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 text-center lg:order-2">
                  <span className="text-gray-400 font-bold text-xs">Sample Image Placeholder</span>
                  <span className="text-gray-400 text-[11px] mt-1">(Kompresor Scroll Baru + VRT Smart Control II)</span>
                </div>
              </div>
            </FadeInUp>

            {/* Feature 3: Awet, Stabil dan Andal */}
            <FadeInUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Empty Thumbnail Box */}
                <div className="aspect-video w-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-gray-400 font-bold text-xs">Sample Image Placeholder</span>
                  <span className="text-gray-400 text-[11px] mt-1">(Kotak Komponen Listrik Bersegel IP55)</span>
                </div>

                <div className="space-y-4">
                  <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md inline-block">
                    Awet, Stabil dan Andal
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal">Kotak Komponen Listrik Bersegel IP55</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Unit AC dapat beroperasi optimal walaupun di luar ruangan dan lindungi komponen dari debu dan serangga dengan Kotak Komponen Listrik Bersegel IP55 serta penstabilan suhu dengan pendinginan freon.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Proteksi IP55 tahan air, debu & serangga</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Pendinginan komponen kelistrikan berbasis freon</span>
                    </div>
                  </div>
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
              Spesifikasi Teknis Daikin VRV 6A
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Klik tombol di bawah ini untuk melihat detail tabel spesifikasi lengkap varian model VRV 6A Series.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="inline-block bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-xl w-full">
              <div className="w-full aspect-[21/9] bg-gray-50 rounded-xl mb-6 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-4">
                <FileText className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-gray-400 font-bold text-xs">Pratinjau Tabel Spesifikasi (VRV 6A Series)</span>
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

      {/* Section Pilihan Produk Terkait Lainnya */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center mb-16">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Produk Terkait
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-[1.35]">
              Pilihan Produk Terkait Lainnya
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {OTHER_VRV_PRODUCTS.map((prod, i) => (
              <FadeInUp key={prod.id} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-daikin-blue transition-all flex flex-col justify-between h-full group p-6 text-center">
                  <div>
                    {/* Empty Thumbnail Box */}
                    <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-4 border border-gray-100 flex items-center justify-center p-3 relative overflow-hidden group-hover:border-daikin-blue/30 transition-colors">
                      <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-200"></div>
                    </div>

                    <h3 className="font-black text-daikin-blue text-base mb-1 group-hover:text-daikin-blue-dark transition-colors">
                      {prod.model}
                    </h3>
                    <p className="text-gray-500 font-semibold text-xs mb-3">
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

      {/* Section Bottom CTA (Light Blue Gradient) */}
      <div className="py-20 text-center bg-gradient-to-br from-blue-50 via-cyan-50/80 to-sky-100/60 border-t border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeInUp className="space-y-4">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-white/80 px-4 py-1.5 rounded-full inline-block mb-1 border border-blue-200/60 shadow-2xs">
              Jaringan Layanan Resmi
            </span>
            <h3 className="text-3xl font-bold text-charcoal">Produk Tersedia di:</h3>
            <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed mb-6">
              Dapatkan produk Daikin VRV 6A Series melalui jaringan dealer resmi terpercaya atau berkonsultasi langsung dengan tim profesional kami untuk perencanaan sistem HVAC gedung Anda.
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

            {/* 2. Control System */}
            <FadeInUp delay={0.2}>
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

            {/* 3. Packaged Air Conditioner */}
            <FadeInUp delay={0.3}>
              <Link to="/products/commercial/packaged" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Packaged Air Conditioner</h3>
                  <p className="text-gray-500 text-xs">AC Industrial & Pabrik</p>
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
                Spesifikasi Teknis Daikin VRV 6A Series (RXQ-BY14)
              </h3>
            </div>

            {/* Spec Image Thumbnail Placeholder */}
            <div className="w-full aspect-[16/9] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center mb-6">
              <FileText className="w-12 h-12 text-gray-400 mb-3" />
              <span className="text-gray-500 font-bold text-sm">Sample Specification Image Sheet Placeholder</span>
              <span className="text-gray-400 text-xs mt-1">(Gambar Tabel Spesifikasi Resmi Daikin VRV 6A Series)</span>
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
