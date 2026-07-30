import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Search, X, Grid, List, ChevronLeft, 
  Building, Wind, Settings, Play, ShieldCheck, Sliders, Info,
  Sparkles, FileText, MapPin, Zap, RefreshCw, Cpu
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface VRVProduct {
  id: string
  name: string
  model: string
  category: 'single-outdoor' | 'multi-outdoor'
  categoryLabel: string
  description: string
  link: string
}

const VRV_PRODUCTS: VRVProduct[] = [
  {
    id: 'vrv-6a',
    name: 'VRV 6A',
    model: 'VRV 6A',
    category: 'single-outdoor',
    categoryLabel: 'VRV Single Outdoor Unit',
    description: 'Generasi terbaru VRV 6A Inverter dengan efisiensi energi tertinggi, pengoperasian sangat tenang, dan kontrol temperatur pintar.',
    link: '/products/commercial/vrv/vrv-6a'
  },
  {
    id: 'vrv-6x',
    name: 'VRV 6X',
    model: 'VRV 6X',
    category: 'single-outdoor',
    categoryLabel: 'VRV Single Outdoor Unit',
    description: 'Sistem VRV 6X dengan efisiensi beban parsial unggulan dan fitur pengisian freon otomatis untuk gedung perkantoran modern.',
    link: '#'
  },
  {
    id: 'vrv-x',
    name: 'VRV X',
    model: 'VRV X',
    category: 'multi-outdoor',
    categoryLabel: 'VRV Multi Outdoor Unit',
    description: 'Seri VRV X flagship dengan teknologi VRT (Variable Refrigerant Temperature) untuk pendinginan gedung tinggi hemat listrik.',
    link: '#'
  },
  {
    id: 'vrv-a',
    name: 'VRV A',
    model: 'VRV A',
    category: 'multi-outdoor',
    categoryLabel: 'VRV Multi Outdoor Unit',
    description: 'Seri VRV A standar emas komersial dengan keandalan operasional tinggi dan daya tahan ekstrim di berbagai kondisi iklim.',
    link: '#'
  },
  {
    id: 'vrv-iv-s',
    name: 'VRV IV S',
    model: 'VRV IV S',
    category: 'multi-outdoor',
    categoryLabel: 'VRV Compact Outdoor Unit',
    description: 'VRV IV S bodi ringkas slim outdoor unit yang sangat ideal untuk hunian mewah, ruko, dan perkantoran skala menengah.',
    link: '#'
  },
  {
    id: 'vrv-q',
    name: 'VRV Q',
    model: 'VRV Q',
    category: 'multi-outdoor',
    categoryLabel: 'VRV Retrofit Outdoor Unit',
    description: 'Sistem VRV Q retrofit canggih yang memungkinkan penggantian unit AC lama tanpa perlu membongkar jalur pipa existing.',
    link: '#'
  },
  {
    id: 'vrv-hrhw',
    name: 'VRV HRHW',
    model: 'VRV HRHW',
    category: 'multi-outdoor',
    categoryLabel: 'VRV Water Cooled Unit',
    description: 'VRV Water Cooled dengan pemulihan panas terintegrasi (Heat Recovery) dan sistem pendinginan berbasis media air efisien.',
    link: '#'
  },
  {
    id: 'vrv-iv-w',
    name: 'VRV IV W',
    model: 'VRV IV W',
    category: 'multi-outdoor',
    categoryLabel: 'VRV Water Cooled Unit',
    description: 'VRV IV W sistem pendingin media air ringkas untuk aplikasi gedung tinggi bertingkat banyak dengan efisiensi tinggi.',
    link: '#'
  }
]

export default function VRVPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategoryTab, setActiveCategoryTab] = useState<'all' | 'single-outdoor' | 'multi-outdoor'>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const itemsPerPage = 8

  const filteredProducts = useMemo(() => {
    return VRV_PRODUCTS.filter(product => {
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase()
        const matchName = product.name.toLowerCase().includes(q)
        const matchModel = product.model.toLowerCase().includes(q)
        const matchDesc = product.description.toLowerCase().includes(q)
        const matchCat = product.categoryLabel.toLowerCase().includes(q)
        if (!matchName && !matchModel && !matchDesc && !matchCat) return false
      }
      if (activeCategoryTab !== 'all' && product.category !== activeCategoryTab) {
        return false
      }
      return true
    })
  }, [searchQuery, activeCategoryTab])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredProducts.slice(start, start + itemsPerPage)
  }, [filteredProducts, currentPage])

  return (
    <PageTransition>
      <PageMeta title="Daikin VRV Outdoor Unit - Green Building Solutions" canonical="/products/commercial/vrv" />

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
              <span className="text-white font-semibold">VRV Outdoor Unit</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                <ShieldCheck className="w-4 h-4 text-cyan-200" />
                Daikin Centralized AC System
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                Green Building Solutions
              </h1>
              <p className="text-cyan-100 text-lg md:text-xl font-medium mb-6 italic">
                Exceeding Boundaries with Innovative Energy Savings
              </p>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                Sistem AC VRV (Variable Refrigerant Volume) sentral Daikin menghadirkan fleksibilitas desain tinggi, pendinginan hemat energi presisi, dan keandalan terbaik untuk gedung komersial bertingkat.
              </p>

              {/* Banner Key Highlights Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
                <div className="bg-white/15 backdrop-blur-md p-3 rounded-xl border border-white/20 text-white text-center">
                  <Zap className="w-5 h-5 mx-auto mb-1 text-cyan-200" />
                  <span className="text-[11px] font-bold block">Energy Savings</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md p-3 rounded-xl border border-white/20 text-white text-center">
                  <RefreshCw className="w-5 h-5 mx-auto mb-1 text-cyan-200" />
                  <span className="text-[11px] font-bold block">Auto Ref Charge</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md p-3 rounded-xl border border-white/20 text-white text-center">
                  <ShieldCheck className="w-5 h-5 mx-auto mb-1 text-cyan-200" />
                  <span className="text-[11px] font-bold block">High Reliability</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md p-3 rounded-xl border border-white/20 text-white text-center">
                  <Cpu className="w-5 h-5 mx-auto mb-1 text-cyan-200" />
                  <span className="text-[11px] font-bold block">Smart Controller</span>
                </div>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Clean Empty Thumbnail Box for Covering */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                <span className="text-xs opacity-60 mt-1">(Daikin VRV Outdoor Unit Lineup)</span>
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
              Outdoor Unit
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Jelajahi rangkaian lengkap Daikin VRV Outdoor Unit untuk berbagai skala proyek bangunan komersial Anda.
            </p>
          </FadeInUp>

          {/* Filter Bar & Category Tabs */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 mb-12 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  placeholder="Cari model VRV Outdoor..."
                  className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-daikin-blue transition-colors shadow-2xs"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-charcoal">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* View Switcher */}
              <div className="flex items-center gap-2 self-end md:self-auto">
                <span className="text-xs font-bold text-gray-400 uppercase mr-2">Tampilan:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-xl border transition-all ${viewMode === 'grid' ? 'bg-daikin-blue text-white border-daikin-blue shadow-2xs' : 'bg-white text-gray-500 border-gray-200 hover:border-daikin-blue'
                    }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 rounded-xl border transition-all ${viewMode === 'list' ? 'bg-daikin-blue text-white border-daikin-blue shadow-2xs' : 'bg-white text-gray-500 border-gray-200 hover:border-daikin-blue'
                    }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="pt-4 border-t border-gray-200/80">
              <span className="font-bold text-charcoal uppercase tracking-wider text-[11px] block mb-3">
                Kategori Produk:
              </span>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => { setActiveCategoryTab('all'); setCurrentPage(1); }}
                  className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all ${activeCategoryTab === 'all'
                      ? 'bg-daikin-blue text-white border-daikin-blue shadow-2xs'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-daikin-blue'
                    }`}
                >
                  Semua VRV Outdoor Unit
                </button>

                <button
                  onClick={() => { setActiveCategoryTab('single-outdoor'); setCurrentPage(1); }}
                  className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all ${activeCategoryTab === 'single-outdoor'
                      ? 'bg-daikin-blue text-white border-daikin-blue shadow-2xs'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-daikin-blue'
                    }`}
                >
                  VRV Single Outdoor (VRV 6)
                </button>

                <button
                  onClick={() => { setActiveCategoryTab('multi-outdoor'); setCurrentPage(1); }}
                  className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all ${activeCategoryTab === 'multi-outdoor'
                      ? 'bg-daikin-blue text-white border-daikin-blue shadow-2xs'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-daikin-blue'
                    }`}
                >
                  VRV Multi Outdoor Series
                </button>
              </div>
            </div>
          </div>

          {/* Product Cards Grid / List */}
          {paginatedProducts.length === 0 ? (
            <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200/80 my-8">
              <Info className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-charcoal mb-1">Tidak Ada Produk Yang Cocok</h3>
              <p className="text-gray-500 text-xs mb-4">Coba sesuaikan kata kunci atau pilih kategori lain.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategoryTab('all'); }}
                className="px-4 py-2 bg-daikin-blue text-white font-bold text-xs rounded-xl hover:bg-daikin-blue-dark transition-colors"
              >
                Reset Filter
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedProducts.map((prod) => (
                <FadeInUp key={prod.id}>
                  <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-daikin-blue transition-all flex flex-col justify-between h-full group p-6 text-center">
                    <div>
                      {/* Product Sample Image Thumbnail Box */}
                      <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-4 border border-gray-100 flex items-center justify-center p-3 relative overflow-hidden group-hover:border-daikin-blue/30 transition-colors">
                        <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-200"></div>
                      </div>

                      {/* Model & Name */}
                      <h3 className="font-black text-daikin-blue text-xl mb-1 group-hover:text-daikin-blue-dark transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-gray-500 font-semibold text-xs mb-3">
                        {prod.categoryLabel}
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
                        className="w-full py-2 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all text-center shadow-2xs"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          ) : (
            <div className="space-y-4 mb-12">
              {paginatedProducts.map((prod) => (
                <FadeInUp key={prod.id}>
                  <div className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:shadow-md hover:border-daikin-blue transition-all flex flex-col md:flex-row items-center gap-6">
                    {/* List View Image Box */}
                    <div className="w-full md:w-44 aspect-[4/3] bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center p-3 shrink-0">
                      <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center p-2 text-center">
                        <span className="text-gray-400 font-bold text-xs">{prod.model}</span>
                      </div>
                    </div>

                    <div className="flex-grow space-y-1.5">
                      <span className="px-2 py-0.5 bg-blue-50 text-daikin-blue font-bold text-[10px] uppercase rounded inline-block">
                        {prod.categoryLabel}
                      </span>
                      <h3 className="font-black text-charcoal text-lg">{prod.name}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{prod.description}</p>
                    </div>

                    {/* Lite Outline Button Link */}
                    <Link
                      to={prod.link}
                      className="px-6 py-2.5 bg-white text-daikin-blue border-2 border-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all shrink-0 self-end md:self-center text-center shadow-2xs"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </FadeInUp>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-xl border border-gray-200 disabled:opacity-30 hover:border-daikin-blue transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-xl font-bold text-xs transition-all ${currentPage === page ? 'bg-daikin-blue text-white shadow-2xs' : 'bg-white text-gray-600 border border-gray-200 hover:border-daikin-blue'
                    }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl border border-gray-200 disabled:opacity-30 hover:border-daikin-blue transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Section Video VRV */}
      <div className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-daikin-blue-dark via-daikin-blue-dark/80 to-[#1c242b] opacity-80 z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-cyan-300 font-bold text-xs uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-white/20">
              Video Demo Teknologi
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Keunggulan Inovasi Daikin VRV
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Saksikan bagaimana teknologi Daikin VRV Outdoor Unit mengoptimalkan pendinginan gedung tinggi secara presisi dan efisien.
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
              <span className="mt-3 text-white text-xs font-bold tracking-wider uppercase">Tonton Video VRV</span>
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
              Dapatkan unit Daikin VRV Outdoor melalui jaringan dealer resmi terpercaya atau berkonsultasi langsung dengan tim profesional kami untuk perencanaan sistem HVAC gedung Anda.
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
              <span className="text-white/60 text-xs font-medium">Video Player Placeholder (Demonstrasi Daikin VRV Outdoor)</span>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
