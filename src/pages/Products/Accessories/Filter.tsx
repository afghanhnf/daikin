import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Download, BookOpen, Search, Filter as FilterIcon, 
  X, Check, SlidersHorizontal, Grid, List, ShieldCheck, FileText, ChevronLeft, 
  Info, Wind, Sliders, Wifi, MoreHorizontal, Settings, ExternalLink, Activity, Building2, Factory, Plane, ZoomIn
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface FilterProduct {
  id: string
  name: string
  model: string
  brand: 'sakura' | 'aaf'
  brandLabel: string
  type: 'pre' | 'medium' | 'hepa' | 'ulpa' | 'carbon'
  typeLabel: string
  application: 'hospital' | 'factory' | 'building' | 'public'
  applicationLabel: string
  description: string
  efficiency: string
  specs: { label: string; value: string }[]
  tags: string[]
  badge?: string
}

const FILTER_PRODUCTS_DATA: FilterProduct[] = [
  {
    id: '1',
    name: 'AstroCel II HEPA Filter',
    model: 'AAF-AC2-H14',
    brand: 'aaf',
    brandLabel: 'AAF',
    type: 'hepa',
    typeLabel: 'HEPA Filter',
    application: 'hospital',
    applicationLabel: 'Rumah Sakit & Lab',
    description: 'Filter HEPA efisiensi ultra tinggi H14 dengan bingkai aluminium anoda murni. Sangat ideal untuk ruang operasi rumah sakit dan laboratorium bersih.',
    efficiency: '99.995% pada 0.3μm',
    specs: [
      { label: 'Kelas Efisiensi', value: 'EN1822 H14' },
      { label: 'Initial Resistance', value: '120 Pa' },
      { label: 'Max Temperature', value: '70°C' }
    ],
    tags: ['H14 HEPA', 'Cleanroom', '99.995%'],
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Sakura Heavy Duty Pre-Filter Panel',
    model: 'SAK-PF-M8',
    brand: 'sakura',
    brandLabel: 'Sakura HVAC',
    type: 'pre',
    typeLabel: 'Pre-Filter',
    application: 'factory',
    applicationLabel: 'Pabrik Manufaktur',
    description: 'Panel pre-filter lipat sintetis tahan cuaca dan debu kasar industri. Melindungi sistem AHU dari tumpukan partikel besar.',
    efficiency: 'MERV 8 (G4)',
    specs: [
      { label: 'Kelas Efisiensi', value: 'ISO Coarse 65%' },
      { label: 'Initial Resistance', value: '55 Pa' },
      { label: 'Material', value: 'Synthetic Pleated' }
    ],
    tags: ['MERV 8', 'Reusable', 'G4 Panel'],
    badge: 'Popular'
  },
  {
    id: '3',
    name: 'MegaCel III ULPA Filter',
    model: 'AAF-MC3-U15',
    brand: 'aaf',
    brandLabel: 'AAF',
    type: 'ulpa',
    typeLabel: 'ULPA Filter',
    application: 'hospital',
    applicationLabel: 'Rumah Sakit & Lab',
    description: 'Filter ULPA tingkat lanjut U15 untuk ruang bersih bebas partikel tingkat mikro terendah seperti laboratorium semikonduktor & isolasi medis.',
    efficiency: '99.9995% pada 0.12μm',
    specs: [
      { label: 'Kelas Efisiensi', value: 'EN1822 U15' },
      { label: 'Initial Resistance', value: '140 Pa' },
      { label: 'Frame', value: 'Extruded Aluminum' }
    ],
    tags: ['U15 ULPA', '0.12μm', 'Ultra Clean'],
    badge: 'High Spec'
  },
  {
    id: '4',
    name: 'Sakura Medium Bag Filter',
    model: 'SAK-BF-M14',
    brand: 'sakura',
    brandLabel: 'Sakura HVAC',
    type: 'medium',
    typeLabel: 'Medium Filter',
    application: 'building',
    applicationLabel: 'Komersial & Gedung',
    description: 'Filter kantong berkapasitas kantung tinggi untuk menangkap debu halus pada sistem sirkulasi udara gedung perkantoran dan mall.',
    efficiency: 'MERV 14 (F8)',
    specs: [
      { label: 'Kelas Efisiensi', value: 'ePM1 70%' },
      { label: 'Initial Resistance', value: '90 Pa' },
      { label: 'Jumlah Pocket', value: '6 Pocket' }
    ],
    tags: ['MERV 14', 'F8 Bag', 'High Dust Capacity']
  },
  {
    id: '5',
    name: 'VariCel VXL Compact HEPA',
    model: 'AAF-VCV-H13',
    brand: 'aaf',
    brandLabel: 'AAF',
    type: 'hepa',
    typeLabel: 'HEPA Filter',
    application: 'public',
    applicationLabel: 'Transportasi & Bandara',
    description: 'Filter HEPA bentuk V-bank kompak untuk debit udara tinggi pada sistem sirkulasi terminal bandara, stasiun, dan pabrik kimia.',
    efficiency: '99.95% pada 0.3μm',
    specs: [
      { label: 'Kelas Efisiensi', value: 'EN1822 H13' },
      { label: 'Airflow Capacity', value: '3400 m³/h' },
      { label: 'Frame', value: 'ABS Plastic' }
    ],
    tags: ['V-Bank', 'High Airflow', 'H13 HEPA'],
    badge: 'High Airflow'
  },
  {
    id: '6',
    name: 'Sakura Activated Carbon Gas Filter',
    model: 'SAK-CF-90',
    brand: 'sakura',
    brandLabel: 'Sakura HVAC',
    type: 'carbon',
    typeLabel: 'Carbon & Gas Phase',
    application: 'factory',
    applicationLabel: 'Pabrik Manufaktur',
    description: 'Filter karbon aktif untuk menyerap bau busuk, gas beracun, dan senyawa organik mudah menguap (VOC) pada pabrik kimia & farmasi.',
    efficiency: 'Penyerapan VOC 95%',
    specs: [
      { label: 'Media', value: 'Extruded Active Carbon' },
      { label: 'Initial Resistance', value: '75 Pa' },
      { label: 'Aplikasi', value: 'Gas & Odor Control' }
    ],
    tags: ['Active Carbon', 'Odor Control', 'VOC Removal']
  }
]

export default function AirFilterPage() {
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedApps, setSelectedApps] = useState<string[]>([])
  const [sortOption, setSortOption] = useState<'featured' | 'name-asc' | 'model-asc'>('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<FilterProduct | null>(null)
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<{ title: string; subtitle: string; photoLabel: string } | null>(null)

  const itemsPerPage = 6

  // Handlers for Checkboxes
  const toggleType = (typeId: string) => {
    setSelectedTypes(prev => prev.includes(typeId) ? prev.filter(t => t !== typeId) : [...prev, typeId])
    setCurrentPage(1)
  }

  const toggleBrand = (brandId: string) => {
    setSelectedBrands(prev => prev.includes(brandId) ? prev.filter(b => b !== brandId) : [...prev, brandId])
    setCurrentPage(1)
  }

  const toggleApp = (appId: string) => {
    setSelectedApps(prev => prev.includes(appId) ? prev.filter(a => a !== appId) : [...prev, appId])
    setCurrentPage(1)
  }

  const resetAllFilters = () => {
    setSearchQuery('')
    setSelectedTypes([])
    setSelectedBrands([])
    setSelectedApps([])
    setSortOption('featured')
    setCurrentPage(1)
  }

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return FILTER_PRODUCTS_DATA.filter(product => {
      // Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase()
        const matchName = product.name.toLowerCase().includes(query)
        const matchModel = product.model.toLowerCase().includes(query)
        const matchDesc = product.description.toLowerCase().includes(query)
        const matchBrand = product.brandLabel.toLowerCase().includes(query)
        const matchType = product.typeLabel.toLowerCase().includes(query)
        if (!matchName && !matchModel && !matchDesc && !matchBrand && !matchType) return false
      }

      // Type Filter
      if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) return false

      // Brand Filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false

      // Application Filter
      if (selectedApps.length > 0 && !selectedApps.includes(product.application)) return false

      return true
    }).sort((a, b) => {
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name)
      if (sortOption === 'model-asc') return a.model.localeCompare(b.model)
      return 0
    })
  }, [searchQuery, selectedTypes, selectedBrands, selectedApps, sortOption])

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredProducts.slice(start, start + itemsPerPage)
  }, [filteredProducts, currentPage])

  return (
    <PageTransition>
      <PageMeta 
        title="Daikin Air Filter (Sakura + AAF) - Filter Udara Resmi" 
        canonical="/products/accessories/filter" 
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
              <span className="text-white font-semibold">Air Filter</span>
            </nav>
            
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                <ShieldCheck className="w-4 h-4 text-cyan-200" />
                Sakura HVAC • AAF Certified
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                DAIKIN AIR FILTER
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Solusi penyaringan udara komprehensif dari Sakura HVAC & AAF (American Air Filter) untuk rumah tangga, komersial, rumah sakit, hingga industri skala besar.
              </p>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Thumbnail Container (Clean glassmorphic, no text/icons inside) */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-[2rem] border border-white/30 backdrop-blur-sm overflow-hidden" />
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Brand Partners Profile Section (Sakura & AAF) */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center mb-12">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Official Air Filtration Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-[1.35] mb-4">
              PemberSIH Udara Berteknologi Tinggi
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Memenuhi standar efisiensi filtrasi tertinggi untuk melindungi kesehatan manusia, efisiensi energi sistem AC, dan proses manufaktur presisi.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sakura HVAC Card */}
            <FadeInUp delay={0.1}>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-1.5 bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xs">
                      SAKURA HVAC
                    </span>
                    <span className="text-xs font-bold text-gray-400">Japanese Engineering</span>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal">Sakura HVAC Air Filter</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Menawarkan solusi udara bersih yang komprehensif untuk peralatan industri dan rumah tangga, dengan kualitas dan kinerja terbaik mulai dari pembersih udara hingga filter efisiensi tinggi. Dirancang memenuhi tuntutan tertinggi kebutuhan modern.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-200/60 mt-6 flex flex-wrap gap-2 text-xs font-semibold text-gray-600">
                  <span className="bg-white px-3 py-1 rounded-lg border border-gray-200">Pre-Filter Panel</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-gray-200">Medium Bag Filter</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-gray-200">Carbon Active Filter</span>
                </div>
              </div>
            </FadeInUp>

            {/* AAF Card */}
            <FadeInUp delay={0.2}>
              <div className="bg-gradient-to-br from-gray-50 to-cyan-50/30 rounded-3xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-1.5 bg-daikin-blue text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-xs">
                      AAF (AMERICAN AIR FILTER)
                    </span>
                    <span className="text-xs font-bold text-gray-400">Global Filtration Leader</span>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal">AAF International Filter</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Menyediakan berbagai macam filter kelas dunia untuk kebutuhan AC tingkat tinggi seperti Pre-Filter, HEPA Filter (H13/H14) hingga ULPA Filter (U15) yang menjamin ruang steril bebas kontaminasi partikel.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-200/60 mt-6 flex flex-wrap gap-2 text-xs font-semibold text-gray-600">
                  <span className="bg-white px-3 py-1 rounded-lg border border-gray-200">HEPA H13/H14</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-gray-200">ULPA U15/U16</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-gray-200">Cleanroom Standard</span>
                </div>
              </div>
            </FadeInUp>
          </div>
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
                placeholder="Cari filter, tipe (HEPA, ULPA, MERV)..."
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
                Filter {(selectedTypes.length + selectedBrands.length + selectedApps.length) > 0 && `(${selectedTypes.length + selectedBrands.length + selectedApps.length})`}
              </button>

              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-xs font-medium hidden sm:inline">Urutkan:</span>
                <select
                  value={sortOption}
                  onChange={(e: any) => setSortOption(e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl px-3 py-2.5 font-medium focus:outline-none focus:border-daikin-blue cursor-pointer"
                >
                  <option value="featured">Pilihan Utama</option>
                  <option value="name-asc">Nama Produk (A - Z)</option>
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
                  <FilterIcon className="w-4 h-4 text-daikin-blue" />
                  Filter Produk
                </h3>
                {(selectedTypes.length > 0 || selectedBrands.length > 0 || selectedApps.length > 0 || searchQuery) && (
                  <button
                    onClick={resetAllFilters}
                    className="text-xs text-daikin-blue hover:underline flex items-center gap-1 font-semibold"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Brand Checkboxes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Brand</h4>
                <div className="space-y-2.5">
                  {[
                    { id: 'sakura', label: 'Sakura HVAC' },
                    { id: 'aaf', label: 'AAF (American Air Filter)' }
                  ].map(brand => (
                    <label key={brand.id} className="flex items-center gap-3 text-sm text-gray-600 hover:text-charcoal cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.id)}
                        onChange={() => toggleBrand(brand.id)}
                        className="w-4 h-4 rounded text-daikin-blue border-gray-300 focus:ring-daikin-blue cursor-pointer"
                      />
                      <span className="group-hover:text-daikin-blue transition-colors font-medium">
                        {brand.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Type Checkboxes */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Tipe / Efisiensi</h4>
                <div className="space-y-2.5">
                  {[
                    { id: 'pre', label: 'Pre-Filter (G4 / MERV 8)' },
                    { id: 'medium', label: 'Medium Filter (F8 / MERV 14)' },
                    { id: 'hepa', label: 'HEPA Filter (H13 / H14)' },
                    { id: 'ulpa', label: 'ULPA Filter (U15)' },
                    { id: 'carbon', label: 'Carbon & Gas Phase' }
                  ].map(type => (
                    <label key={type.id} className="flex items-center gap-3 text-sm text-gray-600 hover:text-charcoal cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type.id)}
                        onChange={() => toggleType(type.id)}
                        className="w-4 h-4 rounded text-daikin-blue border-gray-300 focus:ring-daikin-blue cursor-pointer"
                      />
                      <span className="group-hover:text-daikin-blue transition-colors font-medium text-xs">
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Application Checkboxes */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Bidang Aplikasi</h4>
                <div className="space-y-2.5">
                  {[
                    { id: 'hospital', label: 'Rumah Sakit & Lab' },
                    { id: 'factory', label: 'Pabrik Manufaktur' },
                    { id: 'building', label: 'Komersial & Gedung' },
                    { id: 'public', label: 'Transportasi & Bandara' }
                  ].map(app => (
                    <label key={app.id} className="flex items-center gap-3 text-sm text-gray-600 hover:text-charcoal cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedApps.includes(app.id)}
                        onChange={() => toggleApp(app.id)}
                        className="w-4 h-4 rounded text-daikin-blue border-gray-300 focus:ring-daikin-blue cursor-pointer"
                      />
                      <span className="group-hover:text-daikin-blue transition-colors font-medium text-xs">
                        {app.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Display */}
            <main className="flex-1 w-full">
              
              {/* Product Count */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-500">
                  Menampilkan <strong className="text-charcoal">{filteredProducts.length}</strong> produk filter udara
                </span>
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
                  <Wind className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-charcoal mb-1">Filter Tidak Ditemukan</h4>
                  <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                    Coba ubah kata kunci atau bersihkan opsi filter untuk menemukan produk yang sesuai.
                  </p>
                  <button
                    onClick={resetAllFilters}
                    className="inline-flex items-center gap-2 bg-daikin-blue text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-daikin-blue-dark transition-colors"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                /* Cards Grid / List */
                <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                  {paginatedProducts.map((product) => (
                    <FadeInUp key={product.id}>
                      {viewMode === 'grid' ? (
                        /* GRID CARD */
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 p-6 flex flex-col justify-between h-full group overflow-hidden">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-4">
                              <span className={`px-3 py-1 font-bold text-[11px] uppercase tracking-wider rounded-full ${
                                product.brand === 'aaf' ? 'bg-daikin-blue/10 text-daikin-blue' : 'bg-red-50 text-red-600'
                              }`}>
                                {product.brandLabel}
                              </span>
                              {product.badge && (
                                <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[10px] uppercase tracking-wider rounded-md">
                                  {product.badge}
                                </span>
                              )}
                            </div>

                            <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-cyan-50/50 rounded-xl mb-4 flex flex-col items-center justify-center p-4 border border-gray-100 group-hover:border-daikin-blue/20 transition-colors">
                              <Wind className="w-12 h-12 text-daikin-blue opacity-80 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-xs font-mono font-bold text-gray-500 mt-2 bg-white/80 px-2 py-0.5 rounded border border-gray-200">
                                {product.model}
                              </span>
                            </div>

                            <h3 className="font-bold text-charcoal text-base mb-2 group-hover:text-daikin-blue transition-colors line-clamp-1">
                              {product.name}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                              {product.description}
                            </p>

                            <div className="bg-gray-50 rounded-xl p-3 space-y-1.5 mb-4 text-xs">
                              <div className="flex items-center justify-between text-gray-600">
                                <span className="text-gray-400 font-medium">Efisiensi:</span>
                                <span className="font-bold text-daikin-blue">{product.efficiency}</span>
                              </div>
                              {product.specs.map((spec, idx) => (
                                <div key={idx} className="flex items-center justify-between text-gray-600">
                                  <span className="text-gray-400 font-medium">{spec.label}:</span>
                                  <span className="font-semibold text-charcoal">{spec.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>

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
                        /* CLEAN DEDICATED LIST CARD */
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 p-5 flex flex-col md:flex-row items-center gap-6 group overflow-hidden">
                          <div className="w-full md:w-44 h-36 bg-gradient-to-br from-gray-50 to-cyan-50/50 rounded-xl flex flex-col items-center justify-center p-3 border border-gray-100 group-hover:border-daikin-blue/20 shrink-0">
                            <Wind className="w-10 h-10 text-daikin-blue opacity-80 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-[11px] font-mono font-bold text-gray-500 mt-2 bg-white/80 px-2 py-0.5 rounded border border-gray-200">
                              {product.model}
                            </span>
                          </div>

                          <div className="flex-1 space-y-2 text-left w-full">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className={`px-2.5 py-0.5 font-bold text-[10px] uppercase tracking-wider rounded-full ${
                                product.brand === 'aaf' ? 'bg-daikin-blue/10 text-daikin-blue' : 'bg-red-50 text-red-600'
                              }`}>
                                {product.brandLabel}
                              </span>
                              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 font-bold text-[10px] rounded">
                                {product.typeLabel}
                              </span>
                            </div>

                            <h3 className="font-bold text-charcoal text-base group-hover:text-daikin-blue transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                              {product.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-3 text-xs pt-1 text-gray-600">
                              <span className="inline-flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 text-daikin-blue font-bold">
                                Efisiensi: {product.efficiency}
                              </span>
                            </div>
                          </div>

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
                    className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition-colors"
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
                    className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Application Areas Showcase */}
      <div className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <FadeInUp className="text-center mb-12">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Application Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-[1.35] mb-4">
              Bidang Aplikasi Air Filter
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Diterapkan secara khusus untuk standar higienis dan persyaratan pembersihan udara terbaik di berbagai sektor industri.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sector 1 */}
            <FadeInUp delay={0.1}>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/80 shadow-sm space-y-4 hover:border-daikin-blue transition-all flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center">
                    <Activity className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">
                    Bangunan, Rumah Sakit & Laboratorium
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Menjamin kebersihan udara tingkat tinggi untuk ruang operasi, ICU, laboratorium farmasi, serta gedung perkantoran guna mencegah penyebaran bakteri & virus.
                  </p>
                  <div className="text-xs font-bold text-daikin-blue">HEPA H13/H14 & ULPA Certified</div>
                </div>

                {/* Sample Photo Thumbnails with Popup Modal trigger */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200/60">
                  <button 
                    onClick={() => setSelectedPhotoModal({
                      title: 'Bangunan, Rumah Sakit & Laboratorium',
                      subtitle: 'Penerapan Filter HEPA H14 pada Ruang Operasi Steril & Lab Farmasi',
                      photoLabel: 'Sampel Foto Penerapan 1'
                    })}
                    className="w-full h-28 bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex items-center justify-center relative group/img cursor-pointer hover:border-daikin-blue hover:shadow-md transition-all text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-daikin-blue/5 to-transparent group-hover/img:from-daikin-blue/15 transition-colors"></div>
                    <div className="relative z-10 flex items-center gap-1.5 text-[11px] font-bold text-gray-500 group-hover/img:text-daikin-blue transition-colors">
                      <span>Sampel Foto 1</span>
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedPhotoModal({
                      title: 'Bangunan, Rumah Sakit & Laboratorium',
                      subtitle: 'Penerapan Filter Medium F8 pada Sistem Sirkulasi Udara Gedung',
                      photoLabel: 'Sampel Foto Penerapan 2'
                    })}
                    className="w-full h-28 bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex items-center justify-center relative group/img cursor-pointer hover:border-daikin-blue hover:shadow-md transition-all text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-daikin-blue/5 to-transparent group-hover/img:from-daikin-blue/15 transition-colors"></div>
                    <div className="relative z-10 flex items-center gap-1.5 text-[11px] font-bold text-gray-500 group-hover/img:text-daikin-blue transition-colors">
                      <span>Sampel Foto 2</span>
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>
              </div>
            </FadeInUp>

            {/* Sector 2 */}
            <FadeInUp delay={0.2}>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/80 shadow-sm space-y-4 hover:border-daikin-blue transition-all flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center">
                    <Factory className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">
                    Pabrik Manufaktur & Cleanroom
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Melindungi proses manufaktur mikroelektronika, otomotif, makanan & minuman dari partikel debu halus dan polutan kimia berbahaya.
                  </p>
                  <div className="text-xs font-bold text-daikin-blue">ISO Cleanroom Class 1 - 8</div>
                </div>

                {/* Sample Photo Thumbnails with Popup Modal trigger */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200/60">
                  <button 
                    onClick={() => setSelectedPhotoModal({
                      title: 'Pabrik Manufaktur & Cleanroom',
                      subtitle: 'Instalasi Pre-Filter & HEPA pada Ruang Bersih Industri Semikonduktor',
                      photoLabel: 'Sampel Foto Penerapan 1'
                    })}
                    className="w-full h-28 bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex items-center justify-center relative group/img cursor-pointer hover:border-daikin-blue hover:shadow-md transition-all text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-daikin-blue/5 to-transparent group-hover/img:from-daikin-blue/15 transition-colors"></div>
                    <div className="relative z-10 flex items-center gap-1.5 text-[11px] font-bold text-gray-500 group-hover/img:text-daikin-blue transition-colors">
                      <span>Sampel Foto 1</span>
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedPhotoModal({
                      title: 'Pabrik Manufaktur & Cleanroom',
                      subtitle: 'Sistem Filter Karbon Aktif Penyerap Gas Kimia & Bau Industri',
                      photoLabel: 'Sampel Foto Penerapan 2'
                    })}
                    className="w-full h-28 bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex items-center justify-center relative group/img cursor-pointer hover:border-daikin-blue hover:shadow-md transition-all text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-daikin-blue/5 to-transparent group-hover/img:from-daikin-blue/15 transition-colors"></div>
                    <div className="relative z-10 flex items-center gap-1.5 text-[11px] font-bold text-gray-500 group-hover/img:text-daikin-blue transition-colors">
                      <span>Sampel Foto 2</span>
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>
              </div>
            </FadeInUp>

            {/* Sector 3 */}
            <FadeInUp delay={0.3}>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/80 shadow-sm space-y-4 hover:border-daikin-blue transition-all flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-daikin-blue/10 text-daikin-blue flex items-center justify-center">
                    <Plane className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">
                    Stasiun MRT, Bandara & Power Station
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Menangani sirkulasi udara debit masif di ruang publik dan fasilitas berat seperti pembangkit listrik, pabrik kimia, dan infrastruktur transportasi.
                  </p>
                  <div className="text-xs font-bold text-daikin-blue">High Volume V-Bank Filter</div>
                </div>

                {/* Sample Photo Thumbnails with Popup Modal trigger */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200/60">
                  <button 
                    onClick={() => setSelectedPhotoModal({
                      title: 'Stasiun MRT, Bandara & Power Station',
                      subtitle: 'Penggunaan Filter V-Bank Kapasitas Debit Udara Besar di Terminal Bandara',
                      photoLabel: 'Sampel Foto Penerapan 1'
                    })}
                    className="w-full h-28 bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex items-center justify-center relative group/img cursor-pointer hover:border-daikin-blue hover:shadow-md transition-all text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-daikin-blue/5 to-transparent group-hover/img:from-daikin-blue/15 transition-colors"></div>
                    <div className="relative z-10 flex items-center gap-1.5 text-[11px] font-bold text-gray-500 group-hover/img:text-daikin-blue transition-colors">
                      <span>Sampel Foto 1</span>
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <button 
                    onClick={() => setSelectedPhotoModal({
                      title: 'Stasiun MRT, Bandara & Power Station',
                      subtitle: 'Sistem Filter Heavy Duty pada Fasilitas Pembangkit Listrik & Sub-Stasiun',
                      photoLabel: 'Sampel Foto Penerapan 2'
                    })}
                    className="w-full h-28 bg-white rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden flex items-center justify-center relative group/img cursor-pointer hover:border-daikin-blue hover:shadow-md transition-all text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-daikin-blue/5 to-transparent group-hover/img:from-daikin-blue/15 transition-colors"></div>
                    <div className="relative z-10 flex items-center gap-1.5 text-[11px] font-bold text-gray-500 group-hover/img:text-daikin-blue transition-colors">
                      <span>Sampel Foto 2</span>
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>
              </div>
            </FadeInUp>
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
            Temukan Daikin Part Supplier
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
                  <Settings className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Insulasi AC</h3>
                  <p className="text-gray-500 text-xs">DSP Insulation</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeInUp>
            
            {/* Recommend Tools */}
            <FadeInUp delay={0.4}>
              <Link to="/products/accessories/tools" className="group flex items-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4">
                  <Settings className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Daikin Recommend Tools</h3>
                  <p className="text-gray-500 text-xs">Toolkit Resmi Tasco</p>
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

            <span className={`px-3 py-1 font-bold text-xs uppercase tracking-wider rounded-full inline-block mb-3 ${
              selectedDetailProduct.brand === 'aaf' ? 'bg-daikin-blue/10 text-daikin-blue' : 'bg-red-50 text-red-600'
            }`}>
              {selectedDetailProduct.brandLabel} • {selectedDetailProduct.typeLabel}
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

            <div className="bg-blue-50/70 rounded-xl p-3 text-xs mb-4">
              <span className="text-gray-500 font-medium">Rating Efisiensi: </span>
              <span className="font-bold text-daikin-blue">{selectedDetailProduct.efficiency}</span>
            </div>

            <h4 className="font-bold text-charcoal text-xs uppercase tracking-wider mb-3">Spesifikasi Filter:</h4>
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

      {/* Sample Photo Preview Modal */}
      {selectedPhotoModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedPhotoModal(null)}
              className="absolute right-6 top-6 text-gray-400 hover:text-charcoal p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-daikin-blue/10 text-daikin-blue font-bold text-xs uppercase tracking-wider rounded-full">
                Sampel Penerapan Filter
              </span>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-1">
              {selectedPhotoModal.title}
            </h3>
            <p className="text-gray-500 text-xs mb-6">
              {selectedPhotoModal.subtitle}
            </p>

            {/* Photo Container Placeholder (Clean, no text/icons inside) */}
            <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-100 to-blue-50/60 rounded-2xl border border-gray-200 shadow-inner relative overflow-hidden mb-6" />

            <div className="flex justify-end">
              <button 
                onClick={() => setSelectedPhotoModal(null)}
                className="px-6 py-2.5 bg-daikin-blue text-white rounded-xl font-bold text-xs hover:bg-daikin-blue-dark transition-colors"
              >
                Tutup Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
