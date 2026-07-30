import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Store, MapPin, Phone, Clock, ArrowRight, ShieldCheck, CheckCircle2,
  Wrench, Headphones, Award, ExternalLink, Play, Search,
  ShoppingCart, Instagram, ChevronRight, RefreshCw,
  LayoutGrid, List, CheckSquare, Square, Filter, X, MessageCircle,
  Navigation, Check, Radio, ThumbsUp, Info
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInRight } from '@/components/animations/FadeInLeft'
import PichonKunHelper from '@/components/sections/PichonKunHelper'
import { ishopStores } from '@/data/ishopDealers'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

// ── 1. CORE SERVICES DATA ─────────────────────────────────────────────────────
const coreServices = [
  {
    icon: Headphones,
    title: 'Konsultasi AC',
    desc: 'Bimbingan ahli gratis untuk menghitung kapasitas PK dan tipe AC yang paling hemat untuk ruangan Anda.',
    color: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    icon: Wrench,
    title: 'Pemasangan Presisi',
    desc: 'Instalasi standar resmi Daikin dengan perpipaan berkualitas tinggi & perlengkapan vakum profesional.',
    color: 'from-blue-500/20 to-daikin-blue/10'
  },
  {
    icon: RefreshCw,
    title: 'Perawatan Berkala',
    desc: 'Layanan pembersihan filter, cuci evaporator, dan pengecekan kesehatan unit secara berkala.',
    color: 'from-sky-500/20 to-cyan-500/10'
  },
  {
    icon: ShieldCheck,
    title: 'Perbaikan Resmi',
    desc: 'Penanganan gangguan teknis dengan suku cadang original Daikin & jaminan garansi purnajual.',
    color: 'from-indigo-500/20 to-daikin-blue/10'
  }
]

// ── 2. INSTAGRAM FEED POSTS DATA ──────────────────────────────────────────────
const instagramPosts = [
  {
    id: 1,
    title: 'Awas! Jangan Asal Pilih Ukuran AC',
    category: 'Tips & Panduan',
    desc: 'Ketahui rumus perhitungan PK sesuai luas ruangan agar dingin maksimal dan tidak boros listrik.',
    tag: 'Tips AC',
    likes: '1.2k',
    gradient: 'from-blue-600 via-cyan-600 to-teal-700'
  },
  {
    id: 2,
    title: 'Fitur Rahasia Remote AC Daikin',
    category: 'Fitur Cerdas',
    desc: 'Maksimalkan mode Economode dan Quiet Operation untuk kenyamanan tidur tanpa suara bising.',
    tag: 'Fitur Remote',
    likes: '980',
    gradient: 'from-sky-700 via-daikin-blue to-indigo-800'
  },
  {
    id: 3,
    title: 'AC Daikin Daya Watt Terendah',
    category: 'Rekomendasi Hemat',
    desc: 'Rekomendasi seri Inverter Multi-S dan FTKC untuk tagihan listrik rumah tangga yang ultra hemat.',
    tag: 'Low Watt',
    likes: '2.4k',
    gradient: 'from-cyan-700 via-blue-800 to-slate-900'
  },
  {
    id: 4,
    title: 'Nikmati Udara Sehat Bebas Virus',
    category: 'Teknologi Udara',
    desc: 'Bagaimana teknologi Streamer membunuh 99.9% virus dan bakteri di dalam ruangan keluarga.',
    tag: 'Air Quality',
    likes: '3.1k',
    gradient: 'from-emerald-700 via-teal-800 to-cyan-900'
  }
]

// ── 3. WHY ISHOP DIFFERENT (3 FEATURE CARDS) ──────────────────────────────────
const whyChooseIShop = [
  {
    title: 'Layanan Konsultasi Sesuai Kebutuhan',
    desc: 'Kami mendengarkan kebutuhan spesifik ruangan rumah Anda untuk merekomendasikan unit AC yang efisien dan tahan lama.',
    tag: 'Konsultasi Presisi',
    icon: Headphones,
    accentBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/30',
    cardGradient: 'from-slate-900 via-daikin-blue-dark to-slate-950'
  },
  {
    title: 'Pemasangan Teknis Tersertifikasi',
    desc: 'Seluruh tim installer iShop telah lulus ujian sertifikasi resmi Daikin Indonesia dengan standar pengerjaan rapi & aman.',
    tag: 'Teknisi Resmi',
    icon: Award,
    accentBg: 'bg-sky-500/10 text-sky-400 border-sky-400/30',
    cardGradient: 'from-[#031d33] via-[#004f8c] to-[#041c30]'
  },
  {
    title: 'Produk Asli & Garansi Resmi',
    desc: 'Jaminan unit 100% original bergaransi resmi Daikin dilengkapi Sertifikat Dealership Resmi untuk ketenangan Anda.',
    tag: 'Garansi Total',
    icon: ShieldCheck,
    accentBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-400/30',
    cardGradient: 'from-slate-950 via-teal-950 to-slate-900'
  }
]

// ── 4. RECOMMENDED INVERTER AC PRODUCTS ───────────────────────────────────────
const inverterProducts = [
  {
    id: 'stkc-series',
    name: 'STKC Series (Smile Inverter)',
    pk: '0.5 - 2 PK',
    desc: 'Lini Inverter terfavorit keluarga Indonesia dengan efisiensi energi tinggi dan fitur mode Smile Airflow.',
    link: '/products/residential/single-split',
    image: '/images/products/smile_ac.webp',
    cspf: '5 Star CSPF'
  },
  {
    id: 'ftkm-series',
    name: 'FTKM Series (Premium Inverter)',
    pk: '1 - 3 PK',
    desc: 'Inverter kasta tertinggi berteknologi Intelligent Eye yang mendeteksi pergerakan manusia di dalam ruangan.',
    link: '/products/residential/single-split',
    image: '/images/products/flash_ac.png',
    cspf: '5.8 CSPF Rating'
  },
  {
    id: 'ftkz-series',
    name: 'FTKZ Series (Alpha Inverter)',
    pk: '1 - 2.5 PK',
    desc: 'Top-tier Inverter Daikin dengan integrasi Streamer pemurni udara & kontrol Wi-Fi Daikin Mobile Controller.',
    link: '/products/residential/single-split',
    image: '/images/products/vrv_ac.webp',
    cspf: 'Top Energy Saver'
  },
  {
    id: 'air-purifier',
    name: 'Daikin Air Purifier (MC80ZVM7)',
    pk: 'Coverage 62m²',
    desc: 'Pemurni udara mandiri dengan filter HEPA elektrostatik ganda & Streamer pembinasa virus 99.9%.',
    link: '/products/residential/air-purifier',
    image: '/images/products/smile_ac.webp',
    cspf: 'Pure Air Tech'
  }
]

// ── 5. LOCATION CATEGORIES GRID DATA ─────────────────────────────────────────
const locationCategories = [
  {
    name: 'DKI JAKARTA',
    cities: ['Jakarta Barat', 'Jakarta Selatan', 'Jakarta Utara', 'Jakarta Pusat', 'Jakarta Timur']
  },
  {
    name: 'BANTEN',
    cities: ['Kota Tangerang', 'Serang', 'Serpong', 'Tangerang', 'Tangerang Selatan']
  },
  {
    name: 'BEKASI',
    cities: ['Bekasi Timur', 'Kota Bekasi']
  },
  {
    name: 'JAWA BARAT',
    cities: ['Bandung', 'Kota Bandung', 'Kota Sukabumi', 'Purwakarta']
  },
  {
    name: 'JAWA TENGAH',
    cities: ['Kota Pekalongan', 'Semarang']
  },
  {
    name: 'JAWA TIMUR',
    cities: ['Kota Batu', 'Surabaya']
  },
  {
    name: 'SUMATERA BARAT',
    cities: ['PADANG']
  },
  {
    name: 'SUMATERA SELATAN',
    cities: ['Kota Palembang']
  },
  {
    name: 'BALI',
    cities: ['Denpasar', 'Badung']
  },
  {
    name: 'GORONTALO',
    cities: ['Gorontalo']
  },
  {
    name: 'KEPULAUAN RIAU',
    cities: ['Kota Batam']
  },
  {
    name: 'NUSA TENGGARA BARAT',
    cities: ['Mataram']
  },
  {
    name: 'RIAU',
    cities: ['Pekanbaru']
  },
  {
    name: 'SUMATERA UTARA',
    cities: ['Medan']
  }
]

export default function IShop() {
  const [activeCategory, setActiveCategory] = useState<string | null>('DKI JAKARTA')
  const [selectedCities, setSelectedCities] = useState<string[]>([
    'Jakarta Barat', 'Jakarta Selatan', 'Jakarta Utara', 'Jakarta Pusat', 'Jakarta Timur'
  ])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Handle Category Selection
  const handleCategorySelect = (catName: string) => {
    if (activeCategory === catName) {
      setActiveCategory(null)
      setSelectedCities([])
    } else {
      setActiveCategory(catName)
      const catObj = locationCategories.find(c => c.name === catName)
      if (catObj) {
        setSelectedCities([...catObj.cities])
      } else {
        setSelectedCities([])
      }
    }
  }

  // Handle Sub-city Checkbox Toggle
  const handleCityToggle = (cityName: string) => {
    if (selectedCities.includes(cityName)) {
      setSelectedCities(selectedCities.filter(c => c !== cityName))
    } else {
      setSelectedCities([...selectedCities, cityName])
    }
  }

  // Handle Toggle All Cities for Active Category
  const handleToggleAllCities = () => {
    if (!activeCategory) return
    const catObj = locationCategories.find(c => c.name === activeCategory)
    if (!catObj) return

    const allCities = catObj.cities
    const isAllSelected = allCities.every(c => selectedCities.includes(c))
    if (isAllSelected) {
      setSelectedCities(selectedCities.filter(c => !allCities.includes(c)))
    } else {
      const merged = Array.from(new Set([...selectedCities, ...allCities]))
      setSelectedCities(merged)
    }
  }

  // Filter stores
  const filteredStores = ishopStores.filter(store => {
    // 1. Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase()
      const matchName = store.name.toLowerCase().includes(q)
      const matchAddr = store.address.toLowerCase().includes(q)
      const matchCity = store.city.toLowerCase().includes(q)
      const matchRegion = store.region.toLowerCase().includes(q)
      if (!matchName && !matchAddr && !matchCity && !matchRegion) return false
    }

    // 2. Active Category (e.g. DKI JAKARTA)
    if (activeCategory) {
      const catObj = locationCategories.find(c => c.name === activeCategory)
      if (catObj) {
        const isRegionMatch = store.region.toUpperCase().includes(activeCategory) ||
          (activeCategory === 'BEKASI' && store.city.toLowerCase().includes('bekasi'))
        const isCityInCat = catObj.cities.some(c =>
          store.city.toLowerCase().includes(c.toLowerCase()) ||
          store.address.toLowerCase().includes(c.toLowerCase())
        )
        if (!isRegionMatch && !isCityInCat) return false
      }
    }

    // 3. Selected Cities Checkboxes
    if (selectedCities.length > 0 && activeCategory) {
      const isCityMatched = selectedCities.some(c =>
        store.city.toLowerCase().includes(c.toLowerCase()) ||
        store.address.toLowerCase().includes(c.toLowerCase())
      )
      if (!isCityMatched) return false
    }

    return true
  })

  return (
    <PageTransition>
      <PageMeta
        title="Daikin iShop Residential - Solusi AC Hebat untuk Hunian Anda"
        description="Temukan jaringan toko resmi Daikin iShop untuk konsultasi AC residential, instalasi teknisi tersertifikasi, dan jaminan produk 100% original bergaransi resmi."
        canonical="/services/ishop"
      />

      {/* ── 1. HERO BANNER SECTION ────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#041d33] via-daikin-blue-dark to-[#005a9c] text-white pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        {/* Ambient Radial Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            items={[{ label: 'Layanan', path: '/services' }, { label: 'Daikin iShop Residential' }]}
            className="text-cyan-200/90 mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-sm">
                  Daikin iShop Official • Partner AC Hunian
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight">
                  SOLUSI AC HEBAT <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white">
                    UNTUK HUNIAN IMPIAN ANDA
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="text-base sm:text-lg text-blue-100/90 font-light leading-relaxed max-w-2xl">
                  Nikmati pengalaman berbelanja AC hunian terpercaya melalui toko resmi <strong className="text-cyan-300 font-semibold">Daikin iShop</strong>. Didukung konsultasi gratis, teknisi teruji, serta jaminan produk original 100%.
                </p>
              </FadeInUp>

              {/* 3 Quick Value Highlights */}
              <FadeInUp delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-center gap-3">
                    <Headphones className="w-6 h-6 text-cyan-300 shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-white">Konsultasi</span>
                      <span className="text-[10px] text-blue-100/80">Ahli AC Profesional</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-center gap-3">
                    <Wrench className="w-6 h-6 text-cyan-300 shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-white">Teknisi Resmi</span>
                      <span className="text-[10px] text-blue-100/80">Tersertifikasi Daikin</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-cyan-300 shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-white">Garansi Resmi</span>
                      <span className="text-[10px] text-blue-100/80">100% Produk Original</span>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              {/* Action Buttons */}
              <FadeInUp delay={0.4}>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="#pilih-tempat"
                    className="px-6 py-3.5 bg-daikin-blue hover:bg-daikin-blue-light text-white font-extrabold text-xs rounded-xl shadow-lg transition-colors border border-white/20 inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Cari iShop Terdekat</span>
                  </a>

                  <Link
                    to="/information/find-dealer"
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-cyan-200 border border-white/20 rounded-xl font-extrabold text-xs transition-colors backdrop-blur-md inline-flex items-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Direktori Lengkap Dealer</span>
                  </Link>
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Graphic Card */}
            <div className="lg:col-span-5">
              <FadeInRight delay={0.2}>
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="w-full aspect-[16/10] bg-gradient-to-br from-slate-900 via-daikin-blue-dark to-slate-900 rounded-2xl border border-white/20 flex flex-col items-center justify-center p-6 text-center text-white shadow-inner relative overflow-hidden">
                    <Store className="w-12 h-12 text-cyan-300 mb-3 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-extrabold text-sm tracking-wider uppercase text-cyan-200">Official Daikin iShop</span>
                    <span className="text-xs text-blue-100/70 mt-1">Sertifikat Dealership Resmi Residential</span>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="text-blue-100/90">Layanan Residential:</span>
                    <span className="text-xs font-extrabold text-cyan-300 bg-cyan-400/10 px-3 py-1.5 rounded-lg border border-cyan-300/30 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-300" />
                      Terpercaya di Indonesia
                    </span>
                  </div>
                </div>
              </FadeInRight>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. LAYANAN KAMI (CORE SERVICES GRID) ──────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
              Layanan iShop
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Layanan Lengkap untuk AC Hunian Anda
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Daikin iShop hadir mendampingi seluruh kebutuhan AC rumah Anda, mulai dari pemilihan produk hingga purnajual.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service, idx) => {
            const IconComp = service.icon
            return (
              <FadeInItem key={idx}>
                <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-daikin-blue/30 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-daikin-blue-50 text-daikin-blue flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-extrabold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 text-xs font-semibold text-daikin-blue flex items-center gap-1">
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 text-daikin-blue group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </FadeInItem>
            )
          })}
        </FadeInUp>
      </section>

      {/* ── 3. INSTAGRAM FEED SHOWCASE ────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50/80 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
                  <Instagram className="w-3.5 h-3.5" /> Media & Informasi
                </div>
                <h2 className="text-3xl font-extrabold text-charcoal tracking-tight">
                  Instagram Post & Edukasi AC
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md mt-2 md:mt-0">
                Simak tips terbaru seputar perawatan AC, teknologi inverter hemat listrik, dan rekomendasi tempat di Instagram resmi kami.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col justify-between">
                {/* Empty Clean Thumbnail Placeholder Box */}
                <div className="w-full aspect-[4/3] bg-slate-900 p-5 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group-hover:bg-slate-800 transition-colors border-b border-slate-800">
                  <Instagram className="w-8 h-8 text-cyan-300/70 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-200">Thumbnail Image Placeholder</span>
                  <span className="text-[9px] text-gray-400 mt-1">({post.tag}) • @daikinindonesia</span>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-sky-50 text-daikin-blue border border-sky-100">
                        {post.tag}
                      </span>
                      <span className="text-[10px] font-semibold text-gray-400 flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3 text-gray-400" /> {post.likes}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-sm text-charcoal line-clamp-2 mb-2 group-hover:text-daikin-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {post.desc}
                    </p>
                  </div>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-daikin-blue hover:text-daikin-blue-dark flex items-center gap-1 pt-2 border-t border-gray-100"
                  >
                    <span>Lihat di Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MENGAPA iShop BERBEDA? (3 FEATURE VISUAL CARDS) ────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
              Keunggulan iShop
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Mengapa iShop Berbeda dari Toko Biasa?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Pengalaman belanja komprehensif yang dirancang untuk kenyamanan jangka panjang hunian Anda.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseIShop.map((card, idx) => {
            const IconComponent = card.icon
            return (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
                  {/* Styled Gradient Feature Graphic Header */}
                  <div className={`w-full aspect-[16/10] bg-gradient-to-br ${card.cardGradient} p-6 flex flex-col items-center justify-center text-center text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-cyan-300" />
                    </div>
                    <span className="font-extrabold text-xs tracking-widest uppercase text-cyan-200">{card.tag}</span>
                    <span className="text-[11px] text-blue-100/70 mt-1">Standar Daikin Japan Official</span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border inline-block mb-3 ${card.accentBg}`}>
                        {card.tag}
                      </span>
                      <h3 className="text-lg font-extrabold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 text-xs font-bold text-daikin-blue flex items-center gap-1">
                      <span>Jaminan Kualitas iShop</span>
                      <ArrowRight className="w-3.5 h-3.5 text-daikin-blue group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </FadeInUp>
            )
          })}
        </div>
      </section>

      {/* ── 5. MEDIA SHOWCASE CARDS (PROMO, EXPERIENCE SHOWROOM, VIDEO) ───────── */}
      <section className="py-16 bg-gray-50/80 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Promo Card */}
            <div className="bg-gradient-to-br from-daikin-blue-dark via-daikin-blue to-sky-600 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div>
                <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-white/20 text-cyan-200 border border-white/20 inline-block mb-4">
                  Spesial Promo iShop
                </span>
                <h3 className="text-xl font-extrabold mb-2">Penawaran & Cashback iShop</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed mb-6">
                  Dapatkan penawaran voucher belanja & garansi kompresor tambahan setiap pembelian unit Inverter.
                </p>
              </div>
              <Link to="/insights/promotions" className="px-4 py-2.5 bg-white text-daikin-blue rounded-xl font-extrabold text-xs self-start hover:bg-cyan-50 transition-colors inline-flex items-center gap-1.5">
                <span>Lihat Promo Terbaru</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Showroom Experience Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-daikin-blue-dark rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div>
                <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-white/20 text-cyan-200 border border-white/20 inline-block mb-4">
                  Experience Zone
                </span>
                <h3 className="text-xl font-extrabold mb-2">Showroom iShop Terdekat</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed mb-6">
                  Kunjungi ruang pamer iShop untuk menguji langsung tingkat keheningan & hembusan dingin AC Daikin.
                </p>
              </div>
              <a href="#pilih-tempat" className="px-4 py-2.5 bg-white text-daikin-blue rounded-xl font-extrabold text-xs self-start hover:bg-cyan-50 transition-colors inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-daikin-blue" />
                <span>Kunjungi Showroom</span>
              </a>
            </div>

            {/* Video Showcase Card */}
            <div className="bg-gradient-to-br from-cyan-900 via-daikin-blue-dark to-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div>
                <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-white/20 text-cyan-200 border border-white/20 inline-block mb-4">
                  Video Edukasi
                </span>
                <h3 className="text-xl font-extrabold mb-2">Video Profil & Panduan AC</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed mb-6">
                  Tonton panduan interaktif memilih AC Inverter & demo fitur Streamer pemurni udara.
                </p>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-4 py-2.5 bg-white text-daikin-blue rounded-xl font-extrabold text-xs self-start hover:bg-cyan-50 transition-colors inline-flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-daikin-blue" />
                <span>Tonton Video Showcase</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PETA SEBARAN iShop INDONESIA (INTERACTIVE MAP COMPONENT) ───────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
              Jaringan Nasional
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Peta Sebaran iShop di Seluruh Indonesia
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Jaringan dealer iShop resmi Daikin siap melayani kebutuhan pendinginan udara keluarga Anda di kota-kota besar Indonesia. Klik wilayah pada peta di bawah untuk memfilter lokasi.
            </p>
          </div>
        </FadeInUp>

        {/* Interactive Vector Map Display Container */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Province Nodes Vector Visualization */}
          <div className="w-full aspect-[21/9] bg-gradient-to-br from-slate-950 via-slate-900 to-[#041e36] rounded-2xl border border-slate-800 flex flex-col items-center justify-between p-6 relative overflow-hidden">
            <div className="flex items-center justify-between w-full text-xs text-cyan-200/80">
              <span className="font-bold tracking-wider uppercase flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                Peta Jaringan iShop Indonesia
              </span>
              <span className="text-[11px] bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300 font-extrabold">
                1200+ Store Terdaftar
              </span>
            </div>

            {/* Indonesia Region Node Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full my-6 z-10">
              {[
                { name: 'DKI JAKARTA', count: '450+ Dealer', regionKey: 'DKI JAKARTA' },
                { name: 'BANTEN', count: '120+ Dealer', regionKey: 'BANTEN' },
                { name: 'BEKASI', count: '140+ Dealer', regionKey: 'BEKASI' },
                { name: 'JAWA BARAT', count: '210+ Dealer', regionKey: 'JAWA BARAT' },
                { name: 'JAWA TENGAH', count: '160+ Dealer', regionKey: 'JAWA TENGAH' },
                { name: 'JAWA TIMUR', count: '180+ Dealer', regionKey: 'JAWA TIMUR' },
                { name: 'BALI', count: '60+ Dealer', regionKey: 'BALI' },
                { name: 'SUMATERA UTARA', count: '90+ Dealer', regionKey: 'SUMATERA UTARA' },
                { name: 'KEPULAUAN RIAU', count: '45+ Dealer', regionKey: 'KEPULAUAN RIAU' },
                { name: 'LAINNYA', count: '150+ Dealer', regionKey: 'SUMATERA BARAT' }
              ].map((node) => {
                const isActive = activeCategory === node.regionKey
                return (
                  <button
                    key={node.name}
                    onClick={() => handleCategorySelect(node.regionKey)}
                    className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between backdrop-blur-md ${
                      isActive
                        ? 'bg-cyan-500/30 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 ring-2 ring-cyan-400/40'
                        : 'bg-white/5 hover:bg-white/15 border-white/10 text-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-gray-400'}`} />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-300">{node.count}</span>
                    </div>
                    <span className="text-xs font-extrabold truncate">{node.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Bottom Region Quick Summary */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-gray-400 w-full pt-2 border-t border-slate-800">
              <span className="font-semibold text-cyan-200">Cakupan Wilayah Resmi:</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-gray-300">Jawa</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-gray-300">Sumatera</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-gray-300">Bali & NTB</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-gray-300">Kalimantan</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-gray-300">Sulawesi</span>
            </div>
          </div>
        </div>

        {/* ── B. INTEGRATED LITE PROVINCE CATEGORIES GRID ── */}
        <div id="pilih-tempat" className="mt-12 scroll-mt-28">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-charcoal flex items-center gap-2">
              <MapPin className="w-4 h-4 text-daikin-blue" />
              Pilih Wilayah / Provinsi:
            </span>
            {activeCategory && (
              <button
                onClick={() => {
                  setActiveCategory(null)
                  setSelectedCities([])
                }}
                className="text-xs font-bold text-daikin-blue hover:text-daikin-blue-dark flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Tampilkan Semua Wilayah</span>
              </button>
            )}
          </div>

          {/* Lite Cards Grid - Title Only */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
            {locationCategories.map((cat) => {
              const isActive = activeCategory === cat.name
              return (
                <button
                  key={cat.name}
                  onClick={() => handleCategorySelect(cat.name)}
                  className={`px-3.5 py-3 rounded-xl text-center transition-all duration-200 flex items-center justify-center font-extrabold text-xs tracking-wide shadow-2xs ${
                    isActive
                      ? 'bg-[#0097e6] text-white shadow-md shadow-sky-500/20 border border-[#0086cd] ring-2 ring-sky-400/40'
                      : 'bg-white hover:bg-sky-50/80 text-charcoal border border-gray-200/90 hover:border-daikin-blue/40'
                  }`}
                >
                  <span className="truncate">{cat.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── B. SUB-CITY CHECKBOX FILTER TOOLBAR ────────────────────────────── */}
        {activeCategory && (
          <div className="bg-white rounded-2xl p-5 border border-sky-100 shadow-xs mb-8 mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-gray-100">
              <span className="text-xs font-bold text-charcoal flex items-center gap-2">
                <Filter className="w-4 h-4 text-daikin-blue" />
                Filter Kota Spesifik di <strong className="text-daikin-blue">{activeCategory}</strong>:
              </span>

              {/* Select All Checkbox */}
              {(() => {
                const catObj = locationCategories.find(c => c.name === activeCategory)
                if (!catObj) return null
                const isAllSelected = catObj.cities.every(c => selectedCities.includes(c))
                return (
                  <button
                    onClick={handleToggleAllCities}
                    className="text-xs font-bold text-daikin-blue hover:text-daikin-blue-dark flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    {isAllSelected ? (
                      <CheckSquare className="w-4 h-4 text-daikin-blue" />
                    ) : (
                      <Square className="w-4 h-4 text-gray-400" />
                    )}
                    <span>Pilih Semua {activeCategory}</span>
                  </button>
                )
              })()}
            </div>

            {/* Individual City Checkboxes */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {locationCategories
                .find(c => c.name === activeCategory)
                ?.cities.map((city) => {
                  const isChecked = selectedCities.includes(city)
                  return (
                    <button
                      key={city}
                      onClick={() => handleCityToggle(city)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                        isChecked
                          ? 'bg-daikin-blue text-white shadow-xs'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200/80 border border-gray-200'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Square className="w-3.5 h-3.5 text-gray-400" />
                      )}
                      <span>{city}</span>
                    </button>
                  )
                })}
            </div>
          </div>
        )}

        {/* ── C. SEARCH BAR & GRID / LIST VIEW SWITCH ────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 mt-8">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4.5 h-4.5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari nama toko, alamat, atau wilayah dealer i-Shop..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-daikin-blue text-xs font-semibold text-charcoal bg-white shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
            <span className="text-xs font-bold text-gray-500 hidden sm:inline">Tampilan:</span>
            <div className="flex items-center gap-1 bg-white border border-gray-200 p-1.5 rounded-2xl shadow-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-daikin-blue text-white shadow-xs'
                    : 'text-gray-500 hover:text-daikin-blue hover:bg-gray-50'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === 'list'
                    ? 'bg-daikin-blue text-white shadow-xs'
                    : 'text-gray-500 hover:text-daikin-blue hover:bg-gray-50'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Result Count Banner */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
          <span>
            Menampilkan <strong className="text-charcoal font-bold">{filteredStores.length}</strong> toko i-Shop
            {activeCategory && ` di ${activeCategory}`}
            {selectedCities.length > 0 && ` (${selectedCities.length} kota terpilih)`}
          </span>
        </div>

        {/* ── D. STORES RESULT DISPLAY (GRID VS LIST VIEW WITH DIRECT PAGE REDIRECT LINK) ── */}
        {filteredStores.length > 0 ? (
          viewMode === 'grid' ? (
            /* GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStores.map((store) => (
                <div key={store.id} className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Visual Branded Store Card Header */}
                    <div className="w-full aspect-[16/9] bg-gradient-to-br from-slate-900 via-daikin-blue-dark to-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center text-white p-4 mb-4 relative overflow-hidden group-hover:border-cyan-400/40 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-300/30 flex items-center justify-center mb-2">
                        <Store className="w-5 h-5 text-cyan-300" />
                      </div>
                      <span className="text-[11px] font-extrabold tracking-wider uppercase text-cyan-200">Official Daikin iShop</span>
                      <span className="text-[9px] text-blue-100/70 mt-0.5 font-semibold">Verified Dealer Partner</span>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-sky-50 text-daikin-blue border border-sky-100">
                        {store.region} • {store.city}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" /> Dealer Resmi
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors">
                      {store.name}
                    </h3>

                    <div className="space-y-2 mb-4 text-xs text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-daikin-blue shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{store.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-daikin-blue font-semibold">
                        <Phone className="w-4 h-4 shrink-0 text-daikin-blue" />
                        <span>{store.phone}</span>
                      </div>
                      {store.openHours && (
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock className="w-4 h-4 shrink-0" />
                          <span>{store.openHours}</span>
                        </div>
                      )}
                    </div>

                    {/* Services List Badges */}
                    {store.services && store.services.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5 pt-2 border-t border-gray-100">
                        {store.services.map((serv, sIdx) => (
                          <span key={sIdx} className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-600 bg-gray-50 px-2 py-1 rounded-md border border-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            {serv}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions Toolbar: Informasi Lebih Lanjut + Navigation & Contacts */}
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    {/* PAGE REDIRECT LINK UNTUK INFORMASI LEBIH LANJUT */}
                    <Link
                      to={`/services/ishop/dealer/${store.id}`}
                      className="w-full py-2.5 px-3 rounded-xl bg-sky-50/80 hover:bg-sky-100 text-daikin-blue border border-sky-200/90 font-extrabold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <Info className="w-4 h-4 text-daikin-blue" />
                      <span>Informasi Lebih Lanjut</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-auto text-daikin-blue" />
                    </Link>

                    <div className="flex items-center gap-2 pt-1">
                      <a
                        href={store.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2 px-2 rounded-xl bg-daikin-blue-50 hover:bg-daikin-blue text-daikin-blue hover:text-white border border-daikin-blue/20 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Google Maps</span>
                      </a>
                      <a
                        href={`https://wa.me/${store.whatsapp || '6281234567890'}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      <a
                        href={store.shopeeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-1.5 px-2 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200 font-bold text-[10px] flex items-center justify-center gap-1 transition-colors"
                      >
                        <ShoppingCart className="w-3 h-3" />
                        <span>Shopee</span>
                      </a>
                      <a
                        href={store.tokopediaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-[10px] flex items-center justify-center gap-1 transition-colors"
                      >
                        <Store className="w-3 h-3" />
                        <span>Tokopedia</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* LIST VIEW */
            <div className="space-y-4">
              {filteredStores.map((store) => (
                <div
                  key={store.id}
                  className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    {/* Visual Image Header Box */}
                    <div className="w-full sm:w-44 aspect-[16/10] bg-gradient-to-br from-slate-900 via-daikin-blue-dark to-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center text-white p-3 shrink-0 relative overflow-hidden group-hover:border-cyan-400/40 transition-colors">
                      <Store className="w-6 h-6 text-cyan-300 mb-1 opacity-90" />
                      <span className="text-[10px] font-extrabold tracking-wider uppercase text-cyan-200">Official iShop</span>
                      <span className="text-[8px] text-blue-100/70">Verified Dealer</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-sky-50 text-daikin-blue border border-sky-100">
                          {store.region} • {store.city}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          Dealer Resmi Terdaftar
                        </span>
                      </div>

                      <h3 className="text-base font-extrabold text-charcoal group-hover:text-daikin-blue transition-colors">
                        {store.name}
                      </h3>

                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-3.5 h-3.5 text-daikin-blue shrink-0 mt-0.5" />
                          <span>{store.address}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs">
                          <span className="text-daikin-blue font-semibold flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" />
                            {store.phone}
                          </span>
                          {store.openHours && (
                            <span className="text-gray-500 flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {store.openHours}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Services List Badges */}
                      {store.services && store.services.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {store.services.map((serv, sIdx) => (
                            <span key={sIdx} className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-600 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                              {serv}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action buttons on right */}
                  <div className="shrink-0 flex flex-col gap-2 w-full md:w-52 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                    <Link
                      to={`/services/ishop/dealer/${store.id}`}
                      className="w-full py-2.5 px-3 rounded-xl bg-sky-50/80 hover:bg-sky-100 text-daikin-blue border border-sky-200/90 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Info className="w-4 h-4 text-daikin-blue" />
                      <span>Informasi Lebih Lanjut</span>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={store.shopeeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="py-1.5 px-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 font-bold text-[10px] flex items-center justify-center gap-1 hover:bg-orange-100 transition-colors"
                      >
                        <ShoppingCart className="w-3 h-3" />
                        <span>Shopee</span>
                      </a>
                      <a
                        href={store.tokopediaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="py-1.5 px-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px] flex items-center justify-center gap-1 hover:bg-emerald-100 transition-colors"
                      >
                        <Store className="w-3 h-3" />
                        <span>Tokopedia</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          /* EMPTY STATE */
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-xs">
            <Store className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-extrabold text-charcoal mb-1">Tidak ada toko i-Shop ditemukan</h3>
            <p className="text-xs text-gray-500 mb-4">Coba ubah kata kunci pencarian atau bersihkan filter wilayah.</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory(null)
                setSelectedCities([])
              }}
              className="px-4 py-2 bg-daikin-blue text-white rounded-xl font-bold text-xs hover:bg-daikin-blue-dark transition-colors inline-flex items-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Semua Filter</span>
            </button>
          </div>
        )}
      </section>

      {/* ── 8. PILIHAN AC DAIKIN INVERTER (PRODUCT CATALOG GRID) ─────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200/60">
        <FadeInUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
              Rekomendasi Produk
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Pilihan AC Daikin Inverter Favorit Keluarga
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Temukan jajaran AC hemat energi dengan fitur terdepan di toko resmi iShop.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inverterProducts.map((prod) => (
            <div key={prod.id} className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Product Image Graphic Card */}
                <div className="w-full aspect-square bg-gradient-to-br from-sky-50/80 via-white to-blue-50/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center mb-5 border border-gray-100 group-hover:border-daikin-blue/30 transition-colors relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-daikin-blue text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                    {prod.cspf}
                  </div>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-3/4 max-h-32 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <span className="text-[11px] font-extrabold text-daikin-blue mt-3 bg-sky-100/80 px-2.5 py-0.5 rounded-md">
                    Kapasitas: {prod.pk}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors">
                  {prod.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {prod.desc}
                </p>
              </div>

              <Link
                to={prod.link}
                className="w-full py-2.5 bg-sky-50/80 hover:bg-sky-100 text-daikin-blue border border-sky-200/90 rounded-xl font-extrabold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Lihat Detail Produk</span>
                <ChevronRight className="w-4 h-4 text-daikin-blue" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. PLACEMENT VIDEO SHOWCASE (WITH INTERACTIVE MODAL) ─────────────── */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
              <Play className="w-3.5 h-3.5 fill-cyan-300" /> Video Showcase
            </div>
            <h2 className="text-3xl font-extrabold mb-4">Mengenal Pengalaman Berbelanja di iShop</h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-10">
              Saksikan komitmen Daikin iShop dalam memberikan solusi AC terbaik untuk kenyamanan hunian Anda.
            </p>

            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="max-w-4xl mx-auto aspect-[16/9] bg-gradient-to-br from-slate-950 via-daikin-blue-dark to-slate-900 rounded-3xl border border-slate-700 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="w-16 h-16 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-3 z-10">
                <Play className="w-6 h-6 fill-slate-950 ml-1" />
              </div>
              <span className="font-extrabold text-sm text-white z-10">Klik untuk Memutar Video Profil Daikin iShop</span>
              <span className="text-xs text-cyan-300 mt-1 z-10">Durasi: 2:45 • Standar Pelayanan Dealer Resmi</span>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── 10. MENGENAL LEBIH LANJUT DAIKIN iShop (PROFILE & CERTIFICATE) ──── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-2">
              Profil & Sertifikasi
            </div>
            <h2 className="text-3xl font-extrabold text-charcoal">
              Mengenal Lebih Lanjut Daikin iShop
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              <strong className="text-charcoal font-semibold">Daikin iShop</strong> diluncurkan pada tahun 2004 sebagai bentuk respon Daikin Indonesia terhadap kebutuhan konsumen yang menginginkan toko spesialis AC hunian yang terpercaya.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Setiap toko iShop memegang Sertifikat Dealership Resmi Daikin dan dipimpin oleh tim terlatih yang mampu memberikan rekomendasi beban pendinginan presisi, pemasangan profesional, serta jaminan suku cadang original.
            </p>
            <div className="pt-2">
              <Link
                to="/information/find-dealer"
                className="inline-flex items-center gap-2 text-xs font-bold text-daikin-blue hover:text-daikin-blue-dark"
              >
                <span>Temukan Jaringan Dealer iShop Terdekat</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 via-daikin-blue-dark to-slate-900 rounded-3xl p-8 text-white text-center border border-slate-800 shadow-xl relative overflow-hidden">
              <Award className="w-12 h-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="font-extrabold text-lg text-cyan-200 mb-2">Certificate of Dealership</h3>
              <p className="text-xs text-blue-100/80 leading-relaxed mb-4">
                Sertifikat resmi yang diterbitkan oleh PT Daikin Airconditioning Indonesia sebagai bukti otentikasi dealer resmi terdaftar.
              </p>
              <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/15">
                Garansi Resmi Daikin 100%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. CALL TO ACTION (CTA) BANNER ───────────────────────────────────── */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="bg-gradient-to-r from-daikin-blue-dark via-daikin-blue to-cyan-600 rounded-3xl text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl text-center lg:text-left">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                  Konsultasi & Belanja Resmi
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Kunjungi Daikin iShop Terdekat Hari Ini
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 font-light leading-relaxed">
                  Dapatkan konsultasi gratis dengan spesialis AC Daikin dan wujudkan udara bersih & dingin hemat di rumah Anda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <a
                  href="#pilih-tempat"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-daikin-blue-dark rounded-xl font-extrabold text-xs hover:bg-cyan-50 transition-colors shadow-lg"
                >
                  <MapPin className="w-4 h-4 text-daikin-blue" />
                  <span>Pilih Lokasi Toko</span>
                </a>
                <Link
                  to="/information/find-dealer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-100 border border-cyan-300/40 rounded-xl font-extrabold text-xs transition-colors shadow-lg"
                >
                  <Search className="w-4 h-4" />
                  <span>Cari Semua Dealer</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* ── VIDEO SHOWCASE INTERACTIVE MODAL ───────────────────────────────────── */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-3xl w-full shadow-2xl relative text-white"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Play className="w-4 h-4 fill-cyan-400" /> Video Profil Resmi
              </div>
              <h3 className="text-xl font-extrabold mb-4">Pengalaman Berbelanja AC di Daikin iShop</h3>

              {/* Video Player Display Container */}
              <div className="w-full aspect-[16/9] bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden mb-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mb-3 text-cyan-300 animate-pulse">
                  <Play className="w-8 h-8 fill-cyan-300 ml-1" />
                </div>
                <span className="text-sm font-extrabold text-white">Memutar Video Showcase iShop</span>
                <span className="text-xs text-gray-400 mt-1">Layanan Resmi Pemasangan & Konsultasi Spesialis AC</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-300 pt-2 border-t border-slate-800">
                <span>✓ Teknisi Tersertifikasi Daikin</span>
                <span>✓ Unit 100% Original & Bergaransi</span>
                <span>✓ Layanan Konsultasi Gratis</span>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="px-4 py-1.5 bg-daikin-blue text-white font-bold rounded-lg text-xs hover:bg-daikin-blue-dark transition-colors"
                >
                  Tutup Video
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* PichonKun Mascot Helper */}
      <PichonKunHelper message="Pilihlah toko resmi Daikin iShop untuk jaminan unit AC original, garansi resmi Daikin, dan pemasangan oleh teknisi tersertifikasi! 🛒🏠" />
    </PageTransition>
  )
}
