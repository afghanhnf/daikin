import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Download, BookOpen, Search, Filter, 
  X, Check, SlidersHorizontal, Grid, List, Wrench, Gauge, Zap, 
  RotateCcw, ShieldCheck, FileText, ChevronLeft, Info, Wind, Sliders, Wifi, MoreHorizontal, Settings, ExternalLink
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface ToolProduct {
  id: string
  name: string
  model: string
  category: 'manifold' | 'vacuum' | 'flaring' | 'leak' | 'electrical'
  categoryLabel: string
  description: string
  specs: { label: string; value: string }[]
  tags: string[]
  badge?: string
  isDigital?: boolean
  isCompact?: boolean
  isHighPrecision?: boolean
}

const PRODUCTS_DATA: ToolProduct[] = [
  {
    id: '1',
    name: 'Digital Gauge Manifold 4-Way',
    model: 'TA122MB-1',
    category: 'manifold',
    categoryLabel: 'Gauge Manifold',
    description: 'Manifold pengukur digital presisi tinggi mendukung berbagai jenis refrigerant (R32, R410A, R134a, R22) dengan layar backlight digital.',
    specs: [
      { label: 'Tekanan Maksimum', value: '5.0 MPa' },
      { label: 'Kompatibilitas', value: 'R32 / R410A / R134a' },
      { label: 'Port Size', value: '1/4" & 3/8" SAE' }
    ],
    tags: ['R32/R410A', 'Backlight LCD', '4-Way'],
    badge: 'Popular',
    isDigital: true,
    isHighPrecision: true
  },
  {
    id: '2',
    name: 'Analog Manifold Double Gauge Set',
    model: 'TA124KVH-2',
    category: 'manifold',
    categoryLabel: 'Gauge Manifold',
    description: 'Manifold analog klasik Tasco Japan dengan pelindung karet anti-shock, katup kran kuningan presisi tinggi.',
    specs: [
      { label: 'Ukuran Dial', value: '80 mm' },
      { label: 'Refrigerant', value: 'R32 / R410A' },
      { label: 'Selang', value: '150 cm (3 warna)' }
    ],
    tags: ['Anti-Shock', '80mm Dial', 'High Durability'],
    isCompact: true
  },
  {
    id: '3',
    name: 'Ultra Mini Vacuum Pump 2-Stage',
    model: 'TA150SB-2',
    category: 'vacuum',
    categoryLabel: 'Vacuum Pump',
    description: 'Pompa vakum 2-stage super ringan dan ringkas. Ideal untuk teknisi lapangan dengan performa vakum ekstra dalam.',
    specs: [
      { label: 'Displacement', value: '40 L/min' },
      { label: 'Ultimate Vacuum', value: '15 Micron' },
      { label: 'Berat Netto', value: '4.3 kg' }
    ],
    tags: ['Lightweight', '2-Stage', '4.3 kg'],
    badge: 'Best Seller',
    isCompact: true,
    isHighPrecision: true
  },
  {
    id: '4',
    name: 'High Performance Vacuum Pump',
    model: 'TA150SW',
    category: 'vacuum',
    categoryLabel: 'Vacuum Pump',
    description: 'Pompa vakum kapasitas besar dengan oli indikator transparan dan fitur pencegah backflow oli otomatis.',
    specs: [
      { label: 'Displacement', value: '100 L/min' },
      { label: 'Ultimate Vacuum', value: '10 Micron' },
      { label: 'Motor Power', value: '250W' }
    ],
    tags: ['Anti-Backflow', '100L/min', 'Heavy Duty'],
    isHighPrecision: true
  },
  {
    id: '5',
    name: 'Electric Cordless Flaring Tool',
    model: 'TA550SF-2',
    category: 'flaring',
    categoryLabel: 'Flaring & Tube',
    description: 'Alat pemekar pipa tembaga elektrik tanpa kabel. Menghasilkan flaring sempurna secara cepat dan konsisten dalam 5 detik.',
    specs: [
      { label: 'Ukuran Pipa', value: '1/4", 3/8", 1/2", 5/8", 3/4"' },
      { label: 'Waktu Flare', value: '5 Detik' },
      { label: 'Baterai', value: 'Li-ion 10.8V' }
    ],
    tags: ['Cordless', 'Fast 5s', 'Auto-Stop'],
    badge: 'Pro Choice',
    isDigital: true,
    isCompact: true
  },
  {
    id: '6',
    name: 'Eccentric Ratchet Flaring Tool',
    model: 'TA550G',
    category: 'flaring',
    categoryLabel: 'Flaring & Tube',
    description: 'Flaring tool manual ratchet dengan mekanisme eksentrik, memastikan ketebalan dinding pipa terjaga tanpa retak.',
    specs: [
      { label: 'Mekanisme', value: 'Eccentric Cone' },
      { label: 'Ukuran Pipa', value: '1/4" - 3/4"' },
      { label: 'Material', value: 'Forged Steel' }
    ],
    tags: ['Ratchet', 'Eccentric Cone', 'Precision'],
    isHighPrecision: true
  },
  {
    id: '7',
    name: 'High Sensitivity Leak Detector',
    model: 'TA430MB',
    category: 'leak',
    categoryLabel: 'Leak Detector',
    description: 'Detektor kebocoran freon dengan sensor pemanas inframerah ultra-sensitif untuk mendeteksi semua jenis halogenated refrigerant.',
    specs: [
      { label: 'Sensitivitas', value: '3 g/tahun' },
      { label: 'Respon Time', value: '< 1 detik' },
      { label: 'Panjang Probe', value: '40 cm Flexible' }
    ],
    tags: ['IR Sensor', '3g/yr Sensitivity', 'Flexible Probe'],
    badge: 'High Accuracy',
    isDigital: true,
    isHighPrecision: true
  },
  {
    id: '8',
    name: 'Digital Clamp Meter AC/DC',
    model: 'TA451KC',
    category: 'electrical',
    categoryLabel: 'Electrical & Meter',
    description: 'Tang ampere digital True-RMS kompak khusus untuk pengukuran beban kompresor dan pengecekan kelistrikan AC.',
    specs: [
      { label: 'Arus AC/DC', value: '0 - 600A' },
      { label: 'Tegangan', value: '600V AC/DC' },
      { label: 'Fitur', value: 'True-RMS, Data Hold' }
    ],
    tags: ['True-RMS', 'Auto-Range', 'Compact'],
    isDigital: true,
    isCompact: true
  },
  {
    id: '9',
    name: 'Infrared Laser Thermometer',
    model: 'TA410S',
    category: 'electrical',
    categoryLabel: 'Electrical & Meter',
    description: 'Termometer non-kontak inframerah dengan dual laser pointer untuk pengukuran suhu kisi-kisi dan pipa AC secara cepat.',
    specs: [
      { label: 'Rentang Suhu', value: '-50°C ~ +550°C' },
      { label: 'Rasio Jarak', value: '12:1' },
      { label: 'Akurasi', value: '± 1.5%' }
    ],
    tags: ['Dual Laser', 'Non-Contact', 'Fast Read'],
    isDigital: true,
    isHighPrecision: true
  }
]

export default function Tools() {
  // Filters & State
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [sortOption, setSortOption] = useState<'featured' | 'name-asc' | 'model-asc'>('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeGuideTab, setActiveGuideTab] = useState<number>(0)
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<ToolProduct | null>(null)

  const itemsPerPage = 6

  // Handlers for Checkboxes
  const toggleCategory = (catId: string) => {
    setSelectedCategories(prev => 
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    )
    setCurrentPage(1)
  }

  const toggleFeature = (featKey: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featKey) ? prev.filter(f => f !== featKey) : [...prev, featKey]
    )
    setCurrentPage(1)
  }

  const resetAllFilters = () => {
    setSearchQuery('')
    setSelectedCategories([])
    setSelectedFeatures([])
    setSortOption('featured')
    setCurrentPage(1)
  }

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(product => {
      // Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase()
        const matchName = product.name.toLowerCase().includes(query)
        const matchModel = product.model.toLowerCase().includes(query)
        const matchDesc = product.description.toLowerCase().includes(query)
        const matchCategory = product.categoryLabel.toLowerCase().includes(query)
        if (!matchName && !matchModel && !matchDesc && !matchCategory) return false
      }

      // Category Checkbox Filter
      if (selectedCategories.length > 0) {
        if (!selectedCategories.includes(product.category)) return false
      }

      // Feature Checkbox Filter
      if (selectedFeatures.length > 0) {
        for (const feat of selectedFeatures) {
          if (feat === 'digital' && !product.isDigital) return false
          if (feat === 'compact' && !product.isCompact) return false
          if (feat === 'precision' && !product.isHighPrecision) return false
        }
      }

      return true
    }).sort((a, b) => {
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name)
      if (sortOption === 'model-asc') return a.model.localeCompare(b.model)
      return 0 // default 'featured'
    })
  }, [searchQuery, selectedCategories, selectedFeatures, sortOption])

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredProducts.slice(start, start + itemsPerPage)
  }, [filteredProducts, currentPage])

  // Guide Steps Data
  const guideSteps = [
    {
      title: 'Persiapan & Kalibrasi Nilai Nol',
      desc: 'Pastikan kran katup merah (High) dan biru (Low) dalam posisi tertutup rapat. Periksa jarum pengukur dalam kondisi nol presisi.',
      tip: 'Gunakan kacamata pelindung & sarung tangan keselamatan sebelum melakukan pengecekan.'
    },
    {
      title: 'Koneksi Selang ke Unit AC',
      desc: 'Hubungkan selang biru (Low) ke port servis suction unit, dan selang kuning ke pompa vakum Tasco Japan.',
      tip: 'Pastikan seal karet O-ring pada selang dalam keadaan utuh & tidak aus.'
    },
    {
      title: 'Proses Evakuasi / Vacuuming',
      desc: 'Nyalakan pompa vakum, buka katup Low. Jalankan evakuasi minimal 15-20 menit hingga tekanan mencapai -30 inHg (-0.1 MPa / 500 micron).',
      tip: 'Tutup katup Low terlebih dahulu sebelum mematikan sakelar pompa vakum untuk mencegah oli tertarik balik.'
    },
    {
      title: 'Uji Tahan Tekanan & Pengisian',
      desc: 'Amati dial gauge selama 5-10 menit. Jika jarum tidak naik, sistem kedap air & siap dilakukan pengisian freon R32/R410A.',
      tip: 'Gunakan timbangan digital Tasco saat pengisian refrigerant cair agar sesuai takaran spesifikasi pabrik.'
    }
  ]

  return (
    <PageTransition>
      <PageMeta 
        title="Daikin Recommend Tools (Tasco Japan) - Perkakas AC Resmi" 
        canonical="/products/accessories/tools" 
      />

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
              <Link to="/products/accessories" className="hover:text-white transition-colors">Aksesoris</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">Daikin Recommend Tools</span>
            </nav>
            
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                Partner Resmi Tasco Japan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                DAIKIN RECOMMEND TOOLS
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Perkakas teknisi AC profesional bersertifikasi Jepang. Dirancang presisi tinggi untuk instalasi, vakum, dan perawatan sistem pendingin Daikin.
              </p>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Thumbnail Container */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-[2rem] border border-white/30 backdrop-blur-sm overflow-hidden" />
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Main Catalog & Filter Section */}
      <div className="py-16 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Top Control Bar: Search & Sort */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                placeholder="Cari perkakas, model (misal: TA122MB)..."
                className="w-full pl-11 pr-10 py-3 bg-gray-50 rounded-xl text-sm border border-gray-200 focus:outline-none focus:border-daikin-blue focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle & Layout / Sort Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 bg-daikin-blue/10 text-daikin-blue font-semibold text-sm rounded-xl hover:bg-daikin-blue/20 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter {(selectedCategories.length + selectedFeatures.length) > 0 && `(${selectedCategories.length + selectedFeatures.length})`}
              </button>

              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-xs font-medium hidden sm:inline">Urutkan:</span>
                <select
                  value={sortOption}
                  onChange={(e: any) => setSortOption(e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-daikin-blue cursor-pointer"
                >
                  <option value="featured">Pilihan Utama</option>
                  <option value="name-asc">Nama (A - Z)</option>
                  <option value="model-asc">Kode Model</option>
                </select>

                {/* View Mode Switcher */}
                <div className="hidden sm:flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white text-daikin-blue shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    title="Tampilan Grid"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white text-daikin-blue shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    title="Tampilan List"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Layout: Sidebar Filters + Products Display */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Sidebar Filter Panel (Desktop Sticky & Mobile Drawer) */}
            <aside 
              className={`lg:w-64 w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6 lg:block lg:sticky lg:top-28 shrink-0 ${
                mobileFilterOpen ? 'block' : 'hidden'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="font-bold text-charcoal flex items-center gap-2 text-base">
                  <Filter className="w-4 h-4 text-daikin-blue" />
                  Filter Perkakas
                </h3>
                {(selectedCategories.length > 0 || selectedFeatures.length > 0 || searchQuery) && (
                  <button
                    onClick={resetAllFilters}
                    className="text-xs text-daikin-blue hover:underline flex items-center gap-1 font-semibold"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>

              {/* Category Checkboxes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Kategori Produk</h4>
                <div className="space-y-2.5">
                  {[
                    { id: 'manifold', label: 'Gauge Manifold' },
                    { id: 'vacuum', label: 'Vacuum Pump' },
                    { id: 'flaring', label: 'Flaring & Tube Tool' },
                    { id: 'leak', label: 'Leak Detector' },
                    { id: 'electrical', label: 'Electrical & Meter' }
                  ].map(cat => (
                    <label 
                      key={cat.id} 
                      className="flex items-center gap-3 text-sm text-gray-600 hover:text-charcoal cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        className="w-4 h-4 rounded text-daikin-blue border-gray-300 focus:ring-daikin-blue cursor-pointer"
                      />
                      <span className="group-hover:text-daikin-blue transition-colors font-medium">
                        {cat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Feature Checkboxes */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Fitur Khusus</h4>
                <div className="space-y-2.5">
                  {[
                    { id: 'digital', label: 'Digital Display' },
                    { id: 'compact', label: 'Super Compact / Ringan' },
                    { id: 'precision', label: 'Akurasi Tinggi (Infrared/JIS)' }
                  ].map(feat => (
                    <label 
                      key={feat.id} 
                      className="flex items-center gap-3 text-sm text-gray-600 hover:text-charcoal cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(feat.id)}
                        onChange={() => toggleFeature(feat.id)}
                        className="w-4 h-4 rounded text-daikin-blue border-gray-300 focus:ring-daikin-blue cursor-pointer"
                      />
                      <span className="group-hover:text-daikin-blue transition-colors font-medium">
                        {feat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Info Box Sidebar */}
              <div className="pt-4 border-t border-gray-100 bg-daikin-blue/5 rounded-xl p-4 text-xs text-gray-600 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-daikin-blue">
                  <Info className="w-4 h-4" /> Garansi Resmi Tasco
                </div>
                <p className="leading-relaxed">Semua perlengkapan diuji dengan standar ketat pabrikan Jepang.</p>
              </div>
            </aside>

            {/* Product Display Area */}
            <main className="flex-1 w-full">
              
              {/* Active Filter Badges */}
              {(selectedCategories.length > 0 || selectedFeatures.length > 0 || searchQuery) && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-medium text-gray-400">Filter Aktif:</span>
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 text-charcoal rounded-full text-xs font-medium shadow-sm">
                      "{searchQuery}"
                      <X className="w-3.5 h-3.5 text-gray-400 hover:text-red-500 cursor-pointer" onClick={() => setSearchQuery('')} />
                    </span>
                  )}
                  {selectedCategories.map(cat => (
                    <span key={cat} className="inline-flex items-center gap-1.5 px-3 py-1 bg-daikin-blue/10 border border-daikin-blue/20 text-daikin-blue rounded-full text-xs font-medium">
                      {cat.toUpperCase()}
                      <X className="w-3.5 h-3.5 hover:text-red-500 cursor-pointer" onClick={() => toggleCategory(cat)} />
                    </span>
                  ))}
                  {selectedFeatures.map(feat => (
                    <span key={feat} className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-xs font-medium">
                      {feat.toUpperCase()}
                      <X className="w-3.5 h-3.5 hover:text-red-500 cursor-pointer" onClick={() => toggleFeature(feat)} />
                    </span>
                  ))}
                </div>
              )}

              {/* Product Count Label */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-500">
                  Menampilkan <strong className="text-charcoal">{filteredProducts.length}</strong> produk perkakas
                </span>
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
                  <Wrench className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-charcoal mb-1">Perkakas Tidak Ditemukan</h4>
                  <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                    Coba sesuaikan kata kunci pencarian atau matikan beberapa filter untuk menemukan produk yang Anda inginkan.
                  </p>
                  <button
                    onClick={resetAllFilters}
                    className="inline-flex items-center gap-2 bg-daikin-blue text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-daikin-blue-dark transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Reset Semua Filter
                  </button>
                </div>
              ) : (
                /* Product Cards Grid / List */
                <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                  {paginatedProducts.map((product) => (
                    <FadeInUp key={product.id}>
                      {viewMode === 'grid' ? (
                        /* GRID CARD LAYOUT */
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 p-6 flex flex-col justify-between h-full group overflow-hidden">
                          <div>
                            {/* Top Card Bar */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                              <span className="px-3 py-1 bg-daikin-blue/10 text-daikin-blue font-bold text-[11px] uppercase tracking-wider rounded-full">
                                {product.categoryLabel}
                              </span>
                              {product.badge && (
                                <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[10px] uppercase tracking-wider rounded-md">
                                  {product.badge}
                                </span>
                              )}
                            </div>

                            {/* Product Visual Container */}
                            <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-xl mb-4 flex flex-col items-center justify-center p-4 border border-gray-100 group-hover:border-daikin-blue/20 transition-colors relative overflow-hidden">
                              {product.category === 'manifold' && <Gauge className="w-12 h-12 text-daikin-blue opacity-80 group-hover:scale-110 transition-transform duration-300" />}
                              {product.category === 'vacuum' && <Wind className="w-12 h-12 text-cyan-600 opacity-80 group-hover:scale-110 transition-transform duration-300" />}
                              {product.category === 'flaring' && <Wrench className="w-12 h-12 text-indigo-600 opacity-80 group-hover:scale-110 transition-transform duration-300" />}
                              {product.category === 'leak' && <Zap className="w-12 h-12 text-amber-600 opacity-80 group-hover:scale-110 transition-transform duration-300" />}
                              {product.category === 'electrical' && <Sliders className="w-12 h-12 text-emerald-600 opacity-80 group-hover:scale-110 transition-transform duration-300" />}
                              
                              <span className="text-xs font-mono font-bold text-gray-500 mt-2 bg-white/80 px-2 py-0.5 rounded border border-gray-200">
                                {product.model}
                              </span>
                            </div>

                            {/* Title & Description */}
                            <h3 className="font-bold text-charcoal text-base mb-2 group-hover:text-daikin-blue transition-colors line-clamp-1">
                              {product.name}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                              {product.description}
                            </p>

                            {/* Specs Preview */}
                            <div className="bg-gray-50 rounded-xl p-3 space-y-1.5 mb-4 text-xs">
                              {product.specs.map((spec, idx) => (
                                <div key={idx} className="flex items-center justify-between text-gray-600">
                                  <span className="text-gray-400 font-medium">{spec.label}:</span>
                                  <span className="font-semibold text-charcoal">{spec.value}</span>
                                </div>
                              ))}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-6">
                              {product.tags.map((tag, idx) => (
                                <span key={idx} className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="pt-4 border-t border-gray-100">
                            <button
                              onClick={() => setSelectedDetailProduct(product)}
                              className="w-full py-2.5 px-4 bg-daikin-blue/10 text-daikin-blue hover:bg-daikin-blue hover:text-white rounded-xl font-bold text-xs transition-colors text-center"
                            >
                              Detail Specs
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* CLEAN DEDICATED LIST CARD LAYOUT */
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 p-5 flex flex-col md:flex-row items-center gap-6 group overflow-hidden">
                          {/* Left: Thumbnail Icon Box */}
                          <div className="w-full md:w-44 h-36 bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-xl flex flex-col items-center justify-center p-3 border border-gray-100 group-hover:border-daikin-blue/20 shrink-0">
                            {product.category === 'manifold' && <Gauge className="w-10 h-10 text-daikin-blue opacity-80 group-hover:scale-110 transition-transform duration-300" />}
                            {product.category === 'vacuum' && <Wind className="w-10 h-10 text-cyan-600 opacity-80 group-hover:scale-110 transition-transform duration-300" />}
                            {product.category === 'flaring' && <Wrench className="w-10 h-10 text-indigo-600 opacity-80 group-hover:scale-110 transition-transform duration-300" />}
                            {product.category === 'leak' && <Zap className="w-10 h-10 text-amber-600 opacity-80 group-hover:scale-110 transition-transform duration-300" />}
                            {product.category === 'electrical' && <Sliders className="w-10 h-10 text-emerald-600 opacity-80 group-hover:scale-110 transition-transform duration-300" />}
                            
                            <span className="text-[11px] font-mono font-bold text-gray-500 mt-2 bg-white/80 px-2 py-0.5 rounded border border-gray-200">
                              {product.model}
                            </span>
                          </div>

                          {/* Center: Info & Specs */}
                          <div className="flex-1 space-y-2 text-left w-full">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2.5 py-0.5 bg-daikin-blue/10 text-daikin-blue font-bold text-[10px] uppercase tracking-wider rounded-full">
                                {product.categoryLabel}
                              </span>
                              {product.badge && (
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-[10px] uppercase tracking-wider rounded">
                                  {product.badge}
                                </span>
                              )}
                            </div>

                            <h3 className="font-bold text-charcoal text-base group-hover:text-daikin-blue transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                              {product.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-3 text-xs pt-1 text-gray-600">
                              {product.specs.map((spec, idx) => (
                                <span key={idx} className="inline-flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                                  <span className="text-gray-400 font-medium">{spec.label}:</span>
                                  <span className="font-bold text-charcoal">{spec.value}</span>
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right: Action Button */}
                          <div className="w-full md:w-36 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                            <button
                              onClick={() => setSelectedDetailProduct(product)}
                              className="w-full py-3 px-4 bg-daikin-blue/10 text-daikin-blue hover:bg-daikin-blue hover:text-white rounded-xl font-bold text-xs transition-colors text-center"
                            >
                              Detail Specs
                            </button>
                          </div>
                        </div>
                      )}
                    </FadeInUp>
                  ))}
                </div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                        currentPage === page
                          ? 'bg-daikin-blue text-white shadow-sm scale-105'
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Tasco Japan Profile Section */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/40 rounded-3xl p-8 md:p-14 border border-gray-200/80 shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Column: Brand Highlight */}
            <div className="lg:w-5/12 text-center lg:text-left">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-daikin-blue/10 px-4 py-1.5 rounded-full text-daikin-blue text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  Official Recommendation
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-[1.35] md:leading-[1.35] mb-5">
                  Mengapa Harus Menggunakan Tasco Japan?
                </h2>
                <p className="text-daikin-blue font-semibold text-base md:text-lg leading-relaxed mb-6">
                  Kami menyediakan alat berkualitas tinggi dengan menguatkan Tasco Japan.
                </p>
                <div>
                  <a 
                    href="http://www.tascojapan.co.jp/en/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-daikin-blue font-bold text-sm bg-white px-5 py-3 rounded-xl border border-daikin-blue/30 shadow-xs hover:bg-daikin-blue hover:text-white transition-colors group"
                  >
                    <span>Kunjungi Situs Resmi Tasco Japan</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right Column: Detailed Description Card & Features */}
            <div className="lg:w-7/12 space-y-6">
              <FadeInUp delay={0.2}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-4">
                  <p className="text-gray-600 text-base leading-relaxed">
                    <strong className="text-charcoal font-bold">TASCO Japan</strong> memiliki pengalaman <strong className="text-daikin-blue">45 tahun</strong> dalam bidang tata udara khususnya penyediaan alat instalasi AC yang berkualitas di Jepang.
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Saat ini TASCO Japan sudah memperluas dan mengembangkan bisnisnya hingga ke seluruh negara dengan desain asli dari Jepang. Untuk menjaga kualitas yang baik di setiap pekerjaan, <strong className="text-charcoal font-bold">PT Daikin Airconditioning Indonesia</strong> merekomendasikan menggunakan produk TASCO Japan.
                  </p>
                </div>
              </FadeInUp>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FadeInUp delay={0.3}>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 text-center space-y-1">
                    <div className="text-daikin-blue font-black text-2xl">45+ Tahun</div>
                    <div className="text-gray-500 text-xs font-medium">Pengalaman Industri</div>
                  </div>
                </FadeInUp>
                <FadeInUp delay={0.4}>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 text-center space-y-1">
                    <div className="text-daikin-blue font-black text-2xl">Desain Asli</div>
                    <div className="text-gray-500 text-xs font-medium">Jepang (JIS Standard)</div>
                  </div>
                </FadeInUp>
                <FadeInUp delay={0.5}>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 text-center space-y-1">
                    <div className="text-daikin-blue font-black text-2xl">Daikin Official</div>
                    <div className="text-gray-500 text-xs font-medium">Rekomendasi Resmi</div>
                  </div>
                </FadeInUp>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Interactive Usage Guide ("Cara Menggunakan Gauge Manifold") */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center mb-12">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Standard Operating Procedure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Panduan Penggunaan Gauge Manifold Tasco
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto mt-3">
              Langkah tepat pengukuran dan proses vakum untuk menjaga kualitas pendinginan AC Daikin secara optimal.
            </p>
          </FadeInUp>

          {/* Tab Selection */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {guideSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGuideTab(idx)}
                className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
                  activeGuideTab === idx
                    ? 'bg-daikin-blue text-white shadow-md'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200/60'
                }`}
              >
                <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                  activeGuideTab === idx ? 'bg-white text-daikin-blue' : 'bg-gray-200 text-gray-700'
                }`}>
                  {idx + 1}
                </span>
                {step.title.split('&')[0]}
              </button>
            ))}
          </div>

          {/* Active Guide Content Display */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-2xl bg-daikin-blue text-white flex items-center justify-center font-black text-3xl shrink-0 shadow-lg shadow-daikin-blue/20">
              0{activeGuideTab + 1}
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-charcoal">
                {guideSteps[activeGuideTab].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {guideSteps[activeGuideTab].desc}
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl text-amber-900 text-xs font-medium flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Tips Profesional:</strong> {guideSteps[activeGuideTab].tip}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brochure Section */}
      <div className="pt-24 pb-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <FadeInUp>
                <h2 className="text-3xl font-bold text-charcoal mb-6">View brochure &<br />certificates</h2>
                <button className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl group">
                  DOWNLOAD BROCHURE
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </button>
              </FadeInUp>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <FadeInUp key={i} delay={i * 0.1}>
                  <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm aspect-[3/4] flex items-center justify-center cursor-pointer hover:border-daikin-blue hover:shadow-md transition-all">
                    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-gray-300" />
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bottom Button (Lite Style) */}
      <div className="py-16 text-center bg-white">
        <FadeInUp>
          <Link 
            to="/dealers" 
            className="inline-flex items-center gap-3 bg-white text-daikin-blue border-2 border-daikin-blue px-10 py-4 rounded-full font-bold hover:bg-daikin-blue hover:text-white transition-all hover:shadow-lg group text-lg shadow-sm"
          >
            Temukan Daikin Part Shop
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeInUp>
      </div>

      {/* Other Categories Section (Accessories Specific) */}
      <div className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">Kategori Lainnya</h2>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Pipa AC */}
            <FadeInUp delay={0.1}>
              <Link to="/products/accessories/pipa" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Pipa AC</h3>
                  <p className="text-gray-500 text-xs">DSP & RIFO Multilayer</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>

            {/* Refrigerant */}
            <FadeInUp delay={0.2}>
              <Link to="/products/accessories/refrigerant" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Refrigerant</h3>
                  <p className="text-gray-500 text-xs">R-32 & R-410A</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
            
            {/* Insulasi AC */}
            <FadeInUp delay={0.3}>
              <Link to="/products/accessories/insulasi" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Insulasi AC</h3>
                  <p className="text-gray-500 text-xs">DSP Insulation</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
            
            {/* Filter */}
            <FadeInUp delay={0.4}>
              <Link to="/products/accessories/filter" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Sliders className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Air Filter</h3>
                  <p className="text-gray-500 text-xs">Saringan Udara</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>

            {/* Smart Connection */}
            <FadeInUp delay={0.5}>
              <Link to="/products/accessories/smart-connection" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Wifi className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Smart Connection</h3>
                  <p className="text-gray-500 text-xs">DGT & Header Pack</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>

            {/* Lainnya */}
            <FadeInUp delay={0.6}>
              <Link to="/products/accessories/others" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <MoreHorizontal className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Lainnya</h3>
                  <p className="text-gray-500 text-xs">Aksesoris Lain</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* Detail Modal Popup */}
      {selectedDetailProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedDetailProduct(null)}
              className="absolute right-6 top-6 text-gray-400 hover:text-charcoal p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 bg-daikin-blue/10 text-daikin-blue font-bold text-xs uppercase tracking-wider rounded-full inline-block mb-3">
              {selectedDetailProduct.categoryLabel}
            </span>
            <h3 className="text-2xl font-bold text-charcoal mb-1">
              {selectedDetailProduct.name}
            </h3>
            <span className="text-sm font-mono font-bold text-daikin-blue block mb-4">
              Model: {selectedDetailProduct.model}
            </span>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {selectedDetailProduct.description}
            </p>

            <h4 className="font-bold text-charcoal text-xs uppercase tracking-wider mb-3">Spesifikasi Lengkap:</h4>
            <div className="bg-gray-50 rounded-2xl p-4 space-y-2 mb-6 text-xs">
              {selectedDetailProduct.specs.map((s, i) => (
                <div key={i} className="flex justify-between py-1 border-b border-gray-200/60 last:border-0">
                  <span className="text-gray-500 font-medium">{s.label}</span>
                  <span className="font-bold text-charcoal">{s.value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setSelectedDetailProduct(null)}
                className="flex-1 py-3 bg-daikin-blue text-white rounded-xl font-bold text-xs hover:bg-daikin-blue-dark transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
