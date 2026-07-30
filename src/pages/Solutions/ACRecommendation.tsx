import { useState, useMemo, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calculator, ArrowRight, CheckCircle2,
  Wind, Search, Layers, Zap, ShieldCheck,
  X, Eye, BookOpen, Package, LayoutGrid, List, ChevronLeft, ChevronRight, MapPin
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import AirParticles from '@/components/animations/AirParticles'
import PichonKunHelper from '@/components/sections/PichonKunHelper'

// ─── Data Types ─────────────────────────────────────────────────────────────

interface DaikinProduct {
  id: string
  name: string
  series: string
  category: 'single-split' | 'multi-split' | 'skyair' | 'vrv' | 'air-purifier' | 'accessories'
  categoryName: string
  pkRange: string
  minPkNum: number
  maxPkNum: number
  btuRange: string
  wattage: string
  type: 'Inverter' | 'Non-Inverter' | 'Streamer Tech' | 'VRV' | 'Commercial'
  badge?: string
  badgeColor?: string
  features: string[]
  description: string
  linkPath: string
  imageBg: string
}

// ─── Products Dataset (Harmonized Daikin Blue Tones) ──────────────────────────

const DAIKIN_PRODUCTS: DaikinProduct[] = [
  // ── 1. SINGLE SPLIT (HUNIAN) ──────────────────────────────────────────────
  {
    id: 'ftkm-alpha',
    name: 'Daikin FTKM Alpha Inverter',
    series: 'Premium Inverter Series',
    category: 'single-split',
    categoryName: 'Single Split (Hunian)',
    pkRange: '½ – 3 PK',
    minPkNum: 0.5,
    maxPkNum: 3.0,
    btuRange: '5.100 – 24.200 BTU/h',
    wattage: '180W – 1.850W',
    type: 'Inverter',
    badge: 'Premium Best Seller',
    badgeColor: 'bg-daikin-blue text-white',
    features: ['Teknologi Streamer Air Purifier', 'Sensor Intelligent Eye 2 Area', 'Super Quiet 19 dB', 'Freon R-32 Ramah Lingkungan'],
    description: 'AC Inverter kasta tertinggi Daikin yang dilengkapi penjernih udara Streamer bawaan dan efisiensi listrik ekstra tinggi.',
    linkPath: '/products/residential/alpha-inverter',
    imageBg: 'from-[#0a1526] to-[#0080cb]',
  },
  {
    id: 'ftkq-flash',
    name: 'Daikin FTKQ Flash Inverter',
    series: 'Super Hemat Inverter',
    category: 'single-split',
    categoryName: 'Single Split (Hunian)',
    pkRange: '½ – 2½ PK',
    minPkNum: 0.5,
    maxPkNum: 2.5,
    btuRange: '5.000 – 20.500 BTU/h',
    wattage: '220W – 1.680W',
    type: 'Inverter',
    badge: 'Paling Populer',
    badgeColor: 'bg-sky-600 text-white',
    features: ['Super PCB Tahan Lonjakan Listrik (130V-264V)', 'Mode Low Watt 200W', 'Filter Anti-Bakteri Gin-ION', 'Mode Cooling Powerful'],
    description: 'Pilihan hemat listrik terfavorit keluarga Indonesia dengan perlindungan tegangan listrik tahan banting.',
    linkPath: '/products/residential/single-split',
    imageBg: 'from-daikin-blue-dark to-sky-700',
  },
  {
    id: 'ftkc-smile',
    name: 'Daikin FTKC Smile Inverter',
    series: 'Comfort Inverter Series',
    category: 'single-split',
    categoryName: 'Single Split (Hunian)',
    pkRange: '½ – 3 PK',
    minPkNum: 0.5,
    maxPkNum: 3.0,
    btuRange: '5.100 – 24.200 BTU/h',
    wattage: '250W – 1.750W',
    type: 'Inverter',
    badge: 'Kenyamanan Maksimal',
    badgeColor: 'bg-cyan-700 text-white',
    features: ['Intelligent Eye Sensor', 'Mode Econo Hemat Listrik', 'Operation Quiet Mode', 'Filter Titanium Apatite'],
    description: 'Menjaga kelembapan dan suhu ruangan tetap seimbang dan efisien dengan hembusan kurva Smile khas Daikin.',
    linkPath: '/products/residential/single-split',
    imageBg: 'from-sky-700 to-blue-900',
  },
  {
    id: 'ftxz-urusara',
    name: 'Daikin FTXZ Urusara 7',
    series: 'Flagship 7-Star Control',
    category: 'single-split',
    categoryName: 'Single Split (Hunian)',
    pkRange: '1 – 2 PK',
    minPkNum: 1.0,
    maxPkNum: 2.0,
    btuRange: '8.500 – 18.000 BTU/h',
    wattage: '110W – 1.350W',
    type: 'Inverter',
    badge: 'Buatan Jepang (Japan Made)',
    badgeColor: 'bg-daikin-blue-dark text-white',
    features: ['Pengatur Kelembapan Ururu & Sarara', 'Pembersihan Filter Otomatis', 'Air Supply Fresh Outdoor', 'Dual Air Intake System'],
    description: 'AC paling canggih di dunia dengan kendali pendinginan, pemanas, penyesuai kelembapan, dan pertukaran udara segar.',
    linkPath: '/products/residential/single-split',
    imageBg: 'from-[#0a1526] to-daikin-blue',
  },
  {
    id: 'ftp-breeze',
    name: 'Daikin Breeze Series (FTP)',
    series: 'Standard AC - Buatan Indonesia',
    category: 'single-split',
    categoryName: 'Single Split (Hunian)',
    pkRange: '½ – 1 PK',
    minPkNum: 0.5,
    maxPkNum: 1.0,
    btuRange: '5.000 – 9.000 BTU/h',
    wattage: '390W – 780W',
    type: 'Non-Inverter',
    badge: 'Ekonomis & Tangguh',
    badgeColor: 'bg-blue-600 text-white',
    features: ['Desain Kompak & Elegan', 'Sirip Blue Fin Anti-Korosi', 'Garansi 3 Tahun Kompresor', 'Buatan Pabrik Indonesia'],
    description: 'Pendingin udara tangguh dan ekonomis cocok untuk pemakaian standar hunian.',
    linkPath: '/products/residential/single-split',
    imageBg: 'from-blue-700 to-cyan-900',
  },
  {
    id: 'ftv-standard',
    name: 'Daikin FTV Standard Series R32',
    series: 'Standard AC Daya Dingin Cepat',
    category: 'single-split',
    categoryName: 'Single Split (Hunian)',
    pkRange: '½ – 2½ PK',
    minPkNum: 0.5,
    maxPkNum: 2.5,
    btuRange: '5.000 – 22.000 BTU/h',
    wattage: '380W – 1.900W',
    type: 'Non-Inverter',
    badge: 'Dingin Cepat (Turbo)',
    badgeColor: 'bg-daikin-blue text-white',
    features: ['Mode Turbo Cooling', 'Auto Restart Memory', 'Saringan Sarang Lebah Anti-Debu', 'Freon R-32 Ramah Lingkungan'],
    description: 'Menghasilkan pendinginan kilat seketika begitu dinyalakan dengan tingkat keandalan tinggi.',
    linkPath: '/products/residential/single-split',
    imageBg: 'from-daikin-blue-dark to-sky-700',
  },

  // ── 2. MULTI SPLIT (HUNIAN) ──────────────────────────────────────────────
  {
    id: 'super-multi-nx',
    name: 'Daikin Super Multi NX R32',
    series: 'Solusi Multi-Room Hunian',
    category: 'multi-split',
    categoryName: 'Multi Split (Hunian)',
    pkRange: '1 Outdoor untuk 2–5 Indoor',
    minPkNum: 1.0,
    maxPkNum: 4.0,
    btuRange: '14.000 – 34.000 BTU/h',
    wattage: 'Menyesuaikan Beban Ruang',
    type: 'Inverter',
    badge: 'Hemat Tempat Outdoor',
    badgeColor: 'bg-daikin-blue text-white',
    features: ['1 Outdoor Terhubung hingga 5 Indoor', 'Kontrol Suhu Tiap Ruangan Mandiri', 'Teknologi Inverter Canggih', 'Bebas Pilihan Kombinasi Wall/Duct'],
    description: 'Solusi hemat tempat untuk rumah atau apartemen dengan meminimalkan jumlah unit outdoor di balkon.',
    linkPath: '/products/residential/super-multi-nx',
    imageBg: 'from-[#0a1526] to-[#0080cb]',
  },
  {
    id: 'multi-s3',
    name: 'Daikin Multi-S 3 Connection',
    series: 'Hunian Apartemen Modern',
    category: 'multi-split',
    categoryName: 'Multi Split (Hunian)',
    pkRange: '1 Outdoor untuk 2–3 Indoor',
    minPkNum: 0.75,
    maxPkNum: 3.0,
    btuRange: '10.000 – 21.000 BTU/h',
    wattage: 'Daya Hemat Listrik Terkontrol',
    type: 'Inverter',
    badge: 'Spesialis Apartemen',
    badgeColor: 'bg-cyan-700 text-white',
    features: ['Cocok untuk Daya Listrik Terbatas', 'Mode Daya Rendah Otomatis', 'Pengoperasian Senyap', 'Desain Outdoor Ringkas'],
    description: 'Dirancang khusus untuk apartemen di Indonesia yang memiliki keterbatasan daya dan ruang balkon.',
    linkPath: '/products/residential/multi-s-3-connection',
    imageBg: 'from-sky-700 to-blue-900',
  },
  {
    id: 'multi-s2',
    name: 'Daikin Multi-S 2 Connection',
    series: 'Hemat Listrik 2 Ruangan',
    category: 'multi-split',
    categoryName: 'Multi Split (Hunian)',
    pkRange: '1 Outdoor untuk 2 Indoor',
    minPkNum: 0.5,
    maxPkNum: 2.0,
    btuRange: '8.000 – 16.000 BTU/h',
    wattage: 'Listrik Hemat s/d 380W',
    type: 'Inverter',
    badge: 'Paling Ringkas 2 Ruang',
    badgeColor: 'bg-sky-600 text-white',
    features: ['Hemat Listrik Hingga 50%', 'Cukup 1 Unit Outdoor', 'Operasi Low Watt Mode', 'Bebas Buka-Tutup AC Mandiri'],
    description: 'Solusi ideal untuk mendinginkan kamar utama dan kamar anak sekaligus menggunakan 1 outdoor saja.',
    linkPath: '/products/residential/multi-split',
    imageBg: 'from-daikin-blue-dark to-sky-700',
  },

  // ── 3. SKYAIR (KOMERSIAL) ────────────────────────────────────────────────
  {
    id: 'skyair-fcfg',
    name: 'Daikin SkyAir Inverter Cassette (FCFG)',
    series: 'Komersial & Bisnis High-End',
    category: 'skyair',
    categoryName: 'Sky Air (Komersial)',
    pkRange: '2 – 6 PK',
    minPkNum: 2.0,
    maxPkNum: 6.0,
    btuRange: '18.000 – 55.000 BTU/h',
    wattage: '1.400W – 5.200W',
    type: 'Commercial',
    badge: 'Standar Bisnis & Kafe',
    badgeColor: 'bg-daikin-blue text-white',
    features: ['Hembusan Udara 360° Round Flow', 'Teknologi Sensing Vane Pintar', 'Pembersihan Filter Otomatis (Optional)', 'Desain Langit-Langit Rapi'],
    description: 'Pilihan utama resto, kantor, showroom, dan kafe modern dengan penyebaran dingin merata ke segala sudut.',
    linkPath: '/products/commercial/skyair/fcfg',
    imageBg: 'from-blue-700 to-cyan-900',
  },
  {
    id: 'skyair-fdbf',
    name: 'Daikin SkyAir Duct Inverter (FDBF)',
    series: 'Hidden Concealed Duct',
    category: 'skyair',
    categoryName: 'Sky Air (Komersial)',
    pkRange: '2 – 6 PK',
    minPkNum: 2.0,
    maxPkNum: 6.0,
    btuRange: '18.000 – 55.000 BTU/h',
    wattage: '1.500W – 5.300W',
    type: 'Commercial',
    badge: 'Estetika Mewah',
    badgeColor: 'bg-[#0a1526] text-white',
    features: ['Unit Tersembunyi di Plafon', 'Tingkat Kebisingan Rendah', 'ESP Pengaturan Tekanan Udara', 'Sangat Nyaman Tanpa Hembusan Langsung'],
    description: 'Menyatu sempurna dengan desain interior tanpa terlihat fisik unit AC di dinding atau plafon.',
    linkPath: '/products/commercial/skyair',
    imageBg: 'from-[#0a1526] to-[#004f7a]',
  },

  // ── 4. VRV SYSTEM (GEDUNG & RUMAH MEWAH) ──────────────────────────────────
  {
    id: 'vrv-home',
    name: 'Daikin VRV Home Series',
    series: 'Sistem Central Hunian Mewah',
    category: 'vrv',
    categoryName: 'VRV System (Gedung & Mewah)',
    pkRange: '4 – 10 PK',
    minPkNum: 4.0,
    maxPkNum: 10.0,
    btuRange: '38.000 – 96.000 BTU/h',
    wattage: 'Variabel Beban Otomatis',
    type: 'VRV',
    badge: 'Central Luxury Home',
    badgeColor: 'bg-daikin-blue text-white',
    features: ['1 Outdoor untuk Seluruh Rumah Mewah', 'Bebas Pilih Jenis Indoor (Duct, Cassette, Wall)', 'Freon VRT Smart Control', 'Sistem Pipa Hingga 100m'],
    description: 'Sistem tata udara terpusat paling canggih untuk hunian bertingkat, mansion, dan tempat tinggal premium.',
    linkPath: '/products/residential/vrv-home',
    imageBg: 'from-daikin-blue-dark to-sky-700',
  },
  {
    id: 'vrv-6a',
    name: 'Daikin VRV 6A Commercial',
    series: 'Solusi Gedung & Perkantoran',
    category: 'vrv',
    categoryName: 'VRV System (Gedung & Mewah)',
    pkRange: '6 – 60+ PK (Kapasitas Besar)',
    minPkNum: 6.0,
    maxPkNum: 60.0,
    btuRange: '54.000 – 600.000+ BTU/h',
    wattage: 'High Efficiency Inverter Compressor',
    type: 'VRV',
    badge: 'Standar Perkantoran Modern',
    badgeColor: 'bg-daikin-blue-dark text-white',
    features: ['Teknologi VRT Smart Energy Saving', 'Integrasi Smart Building (BMS)', 'Kapasitas Skalabel Kompak', 'Sertifikasi Bangunan Hijau (Green Building)'],
    description: 'Sistem VRF/VRV Generasi Ke-6 Daikin untuk gedung bertingkat tinggi, hotel, rumah sakit, dan mall.',
    linkPath: '/products/commercial/vrv/vrv-6a',
    imageBg: 'from-[#0a1526] to-[#0080cb]',
  },

  // ── 5. AIR PURIFIER (PEMBERSIH UDARA) ──────────────────────────────────────
  {
    id: 'mc80zvm7',
    name: 'Daikin Air Purifier MC80ZVM7',
    series: 'Double Streamer & HEPA Electrostatic',
    category: 'air-purifier',
    categoryName: 'Air Purifier (Pembersih Udara)',
    pkRange: 'Cakupan Ruang s/d 62 m²',
    minPkNum: 0,
    maxPkNum: 0,
    btuRange: 'CADR Tinggi (Pembersih Udara)',
    wattage: '9W – 80W (Sangat Hemat)',
    type: 'Streamer Tech',
    badge: 'Flagship Air Purifier',
    badgeColor: 'bg-cyan-700 text-white',
    features: ['Teknologi Twin Streamer Daikin', 'Filter HEPA Elektrostatik Tahan 10 Tahun', 'Deodorizing Filter Anti-Bau', 'Sensor Debu PM2.5 & Virus/Bakteri'],
    description: 'Pembersih udara tercanggih dengan teknologi Twin Streamer untuk menonaktifkan virus, alergen, dan kuman hingga 99.9%.',
    linkPath: '/products/residential/air-purifier/mc80zvm7',
    imageBg: 'from-sky-600 to-blue-800',
  },
  {
    id: 'mc55uvm6',
    name: 'Daikin Air Purifier MC55UVM6',
    series: 'Streamer Compact Series',
    category: 'air-purifier',
    categoryName: 'Air Purifier (Pembersih Udara)',
    pkRange: 'Cakupan Ruang s/d 41 m²',
    minPkNum: 0,
    maxPkNum: 0,
    btuRange: 'CADR Efisien Ruang Keluarga',
    wattage: '8W – 37W',
    type: 'Streamer Tech',
    badge: 'Favorit Keluarga',
    badgeColor: 'bg-daikin-blue text-white',
    features: ['Teknologi Flash Streamer', 'Filter HEPA Elektrostatik', 'Operasi Sangat Senyap 19 dB', 'Remote Control Nirkabel'],
    description: 'Pembersih udara berdesain tower ringkas yang cocok untuk kamar tidur dan ruang keluarga.',
    linkPath: '/products/residential/air-purifier',
    imageBg: 'from-daikin-blue-dark to-sky-700',
  }
]

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ACRecommendationPage() {
  const productsRef = useRef<HTMLDivElement>(null)

  // Catalog State
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [inverterOnlyFilter, setInverterOnlyFilter] = useState<boolean>(false)
  const [streamerFilter, setStreamerFilter] = useState<boolean>(false)

  // View Mode & Pagination State
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const ITEMS_PER_PAGE = 9

  // Quick Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState<DaikinProduct | null>(null)

  // Filter Catalog Products
  const filteredProducts = useMemo(() => {
    return DAIKIN_PRODUCTS.filter(p => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase()
        const matchName = p.name.toLowerCase().includes(q)
        const matchSeries = p.series.toLowerCase().includes(q)
        const matchDesc = p.description.toLowerCase().includes(q)
        const matchFeature = p.features.some(f => f.toLowerCase().includes(q))
        if (!matchName && !matchSeries && !matchDesc && !matchFeature) return false
      }

      if (inverterOnlyFilter && p.type !== 'Inverter') return false
      if (streamerFilter && !p.features.some(f => f.toLowerCase().includes('streamer'))) return false

      return true
    })
  }, [activeCategory, searchQuery, inverterOnlyFilter, streamerFilter])

  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery, inverterOnlyFilter, streamerFilter])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE))
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredProducts, currentPage])

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <PageTransition>
      <PageMeta
        title="Temukan Solusi AC Daikin & Rekomendasi Pintar | Daikin Indonesia"
        description="Panduan interaktif dan kalkulator AC pintar Daikin untuk membantu pengguna baru menentukan tipe AC, daya PK, serta melihat katalog seluruh produk Daikin secara lengkap."
        canonical="/solutions/ac-recommendation"
      />

      <div className="bg-gray-50 min-h-screen pb-20">

        {/* ── 1. HERO BANNER ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#007bbf] text-white pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8">
          <AirParticles color="white" />

          <div className="max-w-7xl mx-auto relative z-10">
            <Breadcrumb
              items={[
                { label: 'Solusi', path: '/solutions' },
                { label: 'Temukan Solusi AC', path: '/solutions/ac-recommendation' },
              ]}
              className="text-white/80 mb-8"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch text-left">

              {/* LEFT COLUMN: Header Text & 3 Choice Cards */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-5xl font-bold font-display tracking-tight leading-tight text-white"
                  >
                    Temukan Solusi AC Daikin <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white font-light">
                      Yang Tepat & Presisi
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-base sm:text-lg font-sans text-blue-100/90 font-light leading-relaxed max-w-2xl"
                  >
                    Bingung memilih kapasitas PK atau jenis AC? Gunakan kalkulator interaktif kami untuk mendapatkan rekomendasi instan, atau jelajahi katalog lengkap produk Daikin sesuai kebutuhan Anda.
                  </motion.p>
                </div>

                {/* TRIPLE ACTION CARDS (Choice Hub) */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left"
                >
                  {/* CARD A: Calculator */}
                  <Link
                    to="/solutions/ac-calculator"
                    className="group cursor-pointer p-5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-cyan-300/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Calculator className="w-5 h-5 text-cyan-300" />
                      </div>
                      <h3 className="text-base font-bold font-display text-white group-hover:text-cyan-200 transition-colors">
                        Kalkulator AC Pintar
                      </h3>
                      <p className="mt-1.5 text-xs font-sans text-blue-100/80 leading-snug">
                        Hitung kebutuhan PK & kelayakan daya listrik.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center font-semibold text-xs text-cyan-300 group-hover:text-cyan-200">
                      <span>Buka Kalkulator</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>

                  {/* CARD B: Catalog */}
                  <div
                    onClick={scrollToProducts}
                    className="group cursor-pointer p-5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-cyan-300/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Layers className="w-5 h-5 text-cyan-300" />
                      </div>
                      <h3 className="text-base font-bold font-display text-white group-hover:text-cyan-200 transition-colors">
                        Katalog Produk
                      </h3>
                      <p className="mt-1.5 text-xs font-sans text-blue-100/80 leading-snug">
                        Jelajahi Single Split, SkyAir & VRV.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center font-semibold text-xs text-cyan-300 group-hover:text-cyan-200">
                      <span>Lihat Katalog</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* CARD C: Guide */}
                  <Link
                    to="/solutions/how-to-choose"
                    className="group cursor-pointer p-5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-cyan-300/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-5 h-5 text-cyan-300" />
                      </div>
                      <h3 className="text-base font-bold font-display text-white group-hover:text-cyan-200 transition-colors">
                        Panduan Memilih AC
                      </h3>
                      <p className="mt-1.5 text-xs font-sans text-blue-100/80 leading-snug">
                        Langkah mudah memilih AC bagi pemula.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center font-semibold text-xs text-cyan-300 group-hover:text-cyan-200">
                      <span>Buka Panduan</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>

              </div>

              {/* RIGHT COLUMN: 4 Image Thumbnails */}
              <div className="lg:col-span-5 h-full flex flex-col justify-end pt-2 lg:pt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-2 gap-3.5 h-full"
                >
                  {/* Thumbnail Slot 1 */}
                  <div className="group h-44 sm:h-52 lg:h-[210px] rounded-2xl relative overflow-hidden transition-all duration-300 shadow-xl border border-white/20">
                    <img 
                      src="/images/kenali/inovasi-technology.jpg" 
                      alt="Teknologi Inverter" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold font-display text-white">
                      Inverter Pintar
                    </span>
                  </div>

                  {/* Thumbnail Slot 2 */}
                  <div className="group h-44 sm:h-52 lg:h-[210px] rounded-2xl relative overflow-hidden transition-all duration-300 shadow-xl border border-white/20">
                    <img 
                      src="/images/kenali/kualitas-produk.webp" 
                      alt="Kualitas Produk" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold font-display text-white">
                      Kualitas Jepang
                    </span>
                  </div>

                  {/* Thumbnail Slot 3 */}
                  <div className="group h-44 sm:h-52 lg:h-[210px] rounded-2xl relative overflow-hidden transition-all duration-300 shadow-xl border border-white/20">
                    <img 
                      src="/images/kenali/mitra.jpg" 
                      alt="Jaringan Dealer" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold font-display text-white">
                      Jaringan Dealer
                    </span>
                  </div>

                  {/* Thumbnail Slot 4 */}
                  <div className="group h-44 sm:h-52 lg:h-[210px] rounded-2xl relative overflow-hidden transition-all duration-300 shadow-xl border border-white/20">
                    <img 
                      src="/images/kenali/purna-jual.jpg" 
                      alt="Layanan Purna Jual" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold font-display text-white">
                      Garansi Resmi
                    </span>
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </section>

        {/* ── 2. CATALOG SECTION ────────────────────────────────────────────── */}
        <section ref={productsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <FadeInUp>
            <div className="text-left mb-8">
              <span className="text-xs font-bold text-daikin-blue uppercase tracking-widest block mb-1">
                Katalog & Rekomendasi Terintegrasi
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal">
                Jelajahi Produk Daikin
              </h2>
              <p className="mt-2 text-xs sm:text-sm font-sans text-gray-500">
                Pilih dari lini produk Hunian (Single/Multi Split), Komersial (SkyAir), Sistem Central (VRV), hingga Pembersih Udara (Air Purifier).
              </p>
            </div>

            {/* SEARCH & FILTERS BAR */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200/80 mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">

                {/* Search Bar */}
                <div className="relative flex-1 w-full">
                  <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari produk Daikin (misal: Inverter, SkyAir, Streamer, Cassette)..."
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-daikin-blue focus:outline-none text-xs sm:text-sm font-sans text-charcoal"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Checkbox Toggles */}
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <label className="flex items-center gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100 px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700">
                    <input
                      type="checkbox"
                      checked={inverterOnlyFilter}
                      onChange={(e) => setInverterOnlyFilter(e.target.checked)}
                      className="rounded text-daikin-blue focus:ring-daikin-blue w-4 h-4"
                    />
                    <span>Hanya Inverter</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100 px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700">
                    <input
                      type="checkbox"
                      checked={streamerFilter}
                      onChange={(e) => setStreamerFilter(e.target.checked)}
                      className="rounded text-daikin-blue focus:ring-daikin-blue w-4 h-4"
                    />
                    <span>Teknologi Streamer</span>
                  </label>
                </div>

              </div>

              {/* CATEGORY TAB PILLS & VIEW MODE SWITCH */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {[
                    { id: 'all', label: 'Semua Produk' },
                    { id: 'single-split', label: 'Single Split (Hunian)' },
                    { id: 'multi-split', label: 'Multi Split' },
                    { id: 'skyair', label: 'Sky Air (Komersial)' },
                    { id: 'vrv', label: 'VRV System' },
                    { id: 'air-purifier', label: 'Air Purifier' },
                  ].map(cat => {
                    const isActive = activeCategory === cat.id
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${isActive
                          ? 'bg-daikin-blue text-white shadow-sm'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                          }`}
                      >
                        {cat.label}
                      </button>
                    )
                  })}
                </div>

                {/* View Switch Buttons */}
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl border border-gray-200 self-end sm:self-auto flex-shrink-0">
                  <button
                    onClick={() => setViewMode('grid')}
                    title="Tampilan Grid"
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'grid'
                        ? 'bg-white text-daikin-blue shadow-sm font-bold'
                        : 'text-gray-400 hover:text-gray-700'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    title="Tampilan List"
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'list'
                        ? 'bg-white text-daikin-blue shadow-sm font-bold'
                        : 'text-gray-400 hover:text-gray-700'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* PRODUCT DISPLAY GRID */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 my-8">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold font-display text-gray-700">Tidak ada produk yang sesuai filter</h3>
                <p className="text-xs text-gray-500 font-sans mt-1">Coba sesuaikan kata kunci pencarian atau hapus filter di atas.</p>
                <button
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); setInverterOnlyFilter(false); setStreamerFilter(false); }}
                  className="mt-4 px-4 py-2 bg-daikin-blue text-white rounded-xl text-xs font-bold hover:bg-daikin-blue-dark"
                >
                  Reset Semua Filter
                </button>
              </div>
            ) : (
              <div>
                {/* 1. GRID VIEW MODE */}
                {viewMode === 'grid' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl border border-gray-200/80 hover:border-daikin-blue/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                      >
                        <div>
                          {/* Product Header Container */}
                          <div className={`h-40 bg-gradient-to-r ${product.imageBg} p-4 flex flex-col justify-between relative overflow-hidden`}>
                            <div className="flex items-center justify-between relative z-10">
                              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 text-charcoal backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                                {product.categoryName}
                              </span>
                              {product.badge && (
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${product.badgeColor || 'bg-daikin-blue text-white'}`}>
                                  {product.badge}
                                </span>
                              )}
                            </div>

                            <div className="relative z-10">
                              <span className="text-[10px] font-bold text-cyan-200 uppercase tracking-wider block">
                                {product.series}
                              </span>
                              <h3 className="text-lg font-bold font-display text-white leading-snug">
                                {product.name}
                              </h3>
                            </div>
                          </div>

                          {/* Product Content Body */}
                          <div className="p-5 space-y-4">
                            {/* Spec Bar */}
                            <div className="flex items-center justify-between text-xs bg-daikin-blue-50/60 p-2.5 rounded-xl border border-daikin-blue/10">
                              <div>
                                <span className="text-[10px] text-gray-500 block font-semibold">Kapasitas PK:</span>
                                <span className="font-bold text-charcoal">{product.pkRange}</span>
                              </div>
                              <div className="text-right">
                                <span className="text-[10px] text-gray-500 block font-semibold">Daya Listrik:</span>
                                <span className="font-bold text-daikin-blue">{product.wattage}</span>
                              </div>
                            </div>

                            <p className="text-xs font-sans text-gray-600 leading-relaxed line-clamp-2">
                              {product.description}
                            </p>

                            {/* Feature Tags */}
                            <div className="space-y-1.5">
                              {product.features.map((feat, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs font-sans text-gray-700">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-daikin-blue mt-0.5 flex-shrink-0" />
                                  <span className="text-[11px] font-medium leading-tight">{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Actions Footer */}
                        <div className="p-5 pt-0 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedProduct(product)}
                            className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            Detail Cepat
                          </button>
                          <Link
                            to={product.linkPath}
                            className="flex-1 py-2.5 bg-daikin-blue hover:bg-daikin-blue-dark text-white rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            Halaman Produk
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* 2. LIST VIEW MODE */}
                {viewMode === 'list' && (
                  <div className="flex flex-col gap-4">
                    {paginatedProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl border border-gray-200/80 hover:border-daikin-blue/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col sm:flex-row"
                      >
                        <div className={`w-full sm:w-64 h-44 sm:h-auto bg-gradient-to-br ${product.imageBg} p-5 flex flex-col justify-between relative flex-shrink-0`}>
                          <div className="flex items-center justify-between relative z-10">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 text-charcoal px-2.5 py-1 rounded-lg border border-white/20">
                              {product.categoryName}
                            </span>
                          </div>

                          <div className="relative z-10">
                            <span className="text-[10px] font-bold text-cyan-200 uppercase tracking-wider block">
                              {product.series}
                            </span>
                            <h3 className="text-lg font-bold font-display text-white leading-snug">
                              {product.name}
                            </h3>
                          </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div>
                            <p className="text-xs font-sans text-gray-600 leading-relaxed">
                              {product.description}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                              {product.features.map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-1.5 text-xs font-sans text-gray-700">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-daikin-blue flex-shrink-0" />
                                  <span className="text-[11px] font-medium">{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-6 text-xs">
                              <div>
                                <span className="text-[10px] text-gray-400 block font-semibold">Kapasitas:</span>
                                <span className="font-bold text-charcoal">{product.pkRange}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-gray-400 block font-semibold">Daya Listrik:</span>
                                <span className="font-bold text-daikin-blue">{product.wattage}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => setSelectedProduct(product)}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Detail Cepat</span>
                              </button>
                              <Link
                                to={product.linkPath}
                                className="px-4 py-2 bg-daikin-blue hover:bg-daikin-blue-dark text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                              >
                                <span>Halaman Produk</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* PAGINATION CONTROLS */}
                {totalPages > 1 && (
                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-xs font-medium text-gray-500">
                      Menampilkan <span className="font-bold text-charcoal">{(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}</span> dari <span className="font-bold text-charcoal">{filteredProducts.length}</span> produk Daikin
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-xl border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed text-gray-600 transition-colors"
                        title="Halaman Sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                            currentPage === pageNum
                              ? 'bg-daikin-blue text-white shadow-md'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {pageNum}
                        </button>
                      ))}

                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-xl border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed text-gray-600 transition-colors"
                        title="Halaman Berikutnya"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </FadeInUp>
        </section>

        {/* ── 3. INVERTER BENEFIT BANNER ───────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <FadeInUp>
            <div className="bg-gradient-to-r from-[#0a1526] via-daikin-blue-dark to-[#0080cb] rounded-3xl text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                    Mengapa Memilih AC Inverter Daikin?
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold font-display leading-tight">
                    Hemat Listrik Hingga 60% dengan Suhu Konsisten Nyaman
                  </h3>
                  <p className="text-sm sm:text-base font-sans text-blue-100/90 font-light leading-relaxed">
                    Berbeda dengan AC konvensional (Non-Inverter) yang kompresornya mati-nyala berulang kali, teknologi Inverter Daikin secara cerdas menyesuaikan kecepatan kompresor sesuai beban suhu ruangan.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                      <Zap className="w-6 h-6 text-cyan-300 mb-2" />
                      <h4 className="text-sm font-bold font-display">Hemat Listrik</h4>
                      <p className="text-xs font-sans text-blue-100/80 mt-1">Konsumsi daya turun otomatis saat suhu ideal tercapai.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                      <Wind className="w-6 h-6 text-cyan-300 mb-2" />
                      <h4 className="text-sm font-bold font-display">Suhu Stabilitas</h4>
                      <p className="text-xs font-sans text-blue-100/80 mt-1">Tidak ada lonjakan suhu panas-dingin secara mendadak.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                      <ShieldCheck className="w-6 h-6 text-cyan-300 mb-2" />
                      <h4 className="text-sm font-bold font-display">Kompresor Awet</h4>
                      <p className="text-xs font-sans text-blue-100/80 mt-1">Mengurangi aus mesin karena tidak ada kejut hentakan listrik.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-center">
                  <h4 className="text-base font-bold font-display text-white mb-2">Butuh Bimbingan Langsung?</h4>
                  <p className="text-xs font-sans text-blue-100 mb-6 leading-relaxed">
                    Kunjungi Daikin ProShop resmi atau temukan dealer resmi terdekat di kota Anda untuk konsultasi & instalasi bersertifikat.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      to="/services/proshop"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-daikin-blue rounded-xl font-bold text-xs hover:bg-cyan-50 transition-colors shadow-lg"
                    >
                      <span>Cari Daikin ProShop</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/information/find-dealer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-xl font-bold text-xs transition-colors shadow-lg"
                    >
                      <MapPin className="w-4 h-4 text-cyan-300" />
                      <span>Temukan Dealer Resmi</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </FadeInUp>
        </section>

      </div>

      {/* ── QUICK DETAIL MODAL ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-gray-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-5 top-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold text-daikin-blue uppercase tracking-widest">
                {selectedProduct.categoryName}
              </span>
              <h3 className="text-2xl font-bold font-display text-charcoal mt-1 mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-xs font-sans text-gray-500 font-medium mb-4">
                Seri: {selectedProduct.series}
              </p>

              <div className="grid grid-cols-2 gap-3 bg-daikin-blue-50/60 p-4 rounded-2xl mb-6">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold block">Rentang Kapasitas</span>
                  <span className="text-sm font-bold text-daikin-blue-dark">{selectedProduct.pkRange}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold block">Rentang BTU</span>
                  <span className="text-sm font-bold text-daikin-blue-dark">{selectedProduct.btuRange}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold block">Daya Listrik</span>
                  <span className="text-sm font-bold text-daikin-blue-dark">{selectedProduct.wattage}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold block">Tipe Kompresor</span>
                  <span className="text-sm font-bold text-daikin-blue-dark">{selectedProduct.type}</span>
                </div>
              </div>

              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Fitur Unggulan:</h4>
              <ul className="space-y-2 mb-6">
                {selectedProduct.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-sans text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs font-sans text-gray-600 leading-relaxed mb-6 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                {selectedProduct.description}
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold text-xs"
                >
                  Tutup
                </button>
                <Link
                  to={selectedProduct.linkPath}
                  className="flex-1 py-3 bg-daikin-blue hover:bg-daikin-blue-dark text-white rounded-xl font-bold text-xs text-center shadow-md flex items-center justify-center gap-1.5"
                >
                  Buka Halaman Spesifikasi Lengkap
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <PichonKunHelper message="Gunakan kalkulator pintar kami atau cari produk Daikin yang sesuai dengan luas ruangan Anda! ❄️🏠" />
    </PageTransition>
  )
}
