import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, ArrowRight, Search, X, Play, ShieldCheck, 
  Sparkles, FileText, MapPin, Wind, Zap, Calculator, Award,
  CheckCircle2, Info, Home, Layers, Shield
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { lazy, Suspense } from 'react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface SingleSplitProduct {
  id: string
  name: string
  model: string
  categoryGroup: 'inverter' | 'non-inverter'
  categoryLabel: string
  badges?: string[]
  description: string
  link: string
}

const NUSANTARA_PRODUCTS = [
  {
    id: 'alpha-inverter',
    name: 'ALPHA Inverter',
    model: 'FTKM Series',
    badges: ['Streamer', 'Coanda Airflow', 'Inverter', 'Built-in Wi-Fi'],
    description: 'AC Inverter premium buatan Indonesia dilengkapi teknologi Streamer pemurni udara dan hembusan Coanda nyaman.',
    link: '/products/residential/alpha-inverter'
  },
  {
    id: 'beta-inverter',
    name: 'BETA Inverter',
    model: 'FTKC Series',
    badges: ['Inverter', 'Intelligent Eye', 'Quiet Operation', 'Deodorizing Filter'],
    description: 'AC Inverter hemat listrik buatan Indonesia dengan sensor Intelligent Eye dan operasional sangat tenang.',
    link: '#'
  },
  {
    id: 'super-mini-split-sms',
    name: 'Super Mini Split (SMS)',
    model: 'FTC Series',
    badges: ['Super PCB', 'Refrigerant R-32', 'Anti-Corrosion', 'Fast Cooling'],
    description: 'AC Non-Inverter tangguh buatan Indonesia dengan Super PCB tahan fluktuasi voltase listrik.',
    link: '#'
  }
]

const MAIN_SINGLE_SPLIT_PRODUCTS: SingleSplitProduct[] = [
  // INVERTER SERIES
  {
    id: 'zeta-inverter',
    name: 'ZETA Inverter',
    model: 'FTXZ Series',
    categoryGroup: 'inverter',
    categoryLabel: 'Inverter Series',
    badges: ['Urusara 7', 'Desiccant Humidifier', 'Streamer'],
    description: 'AC Inverter flagship buatan Jepang dengan pengatur kelembapan alami dan pemurni udara Streamer.',
    link: '#'
  },
  {
    id: 'star-inverter',
    name: 'STAR Inverter',
    model: 'FTKC Series',
    categoryGroup: 'inverter',
    categoryLabel: 'Inverter Series',
    badges: ['Inverter', 'Intelligent Eye', 'Low Watt'],
    description: 'AC Inverter efisiensi energi tinggi dengan Intelligent Eye untuk kenyamanan sehari-hari keluarga Anda.',
    link: '#'
  },
  {
    id: 'flash-inverter',
    name: 'FLASH Inverter',
    model: 'FTKQ Series',
    categoryGroup: 'inverter',
    categoryLabel: 'Inverter Series',
    badges: ['Inverter', 'Super PCB', 'Fast Cooling'],
    description: 'AC Inverter terjangkau dengan pendinginan cepat serta perlindungan Super PCB terhadap tegangan tak stabil.',
    link: '#'
  },
  {
    id: 'ftkf-inverter',
    name: 'FTKF Inverter',
    model: 'FTKF Series',
    categoryGroup: 'inverter',
    categoryLabel: 'Inverter Series',
    badges: ['Inverter', 'Compact Size', 'Quiet'],
    description: 'AC Inverter kompak hemat daya yang sangat ideal untuk kamar tidur dan ruang kerja Anda.',
    link: '#'
  },

  // NON-INVERTER SERIES
  {
    id: 'super-mini-split',
    name: 'Super Mini Split',
    model: 'FTC Series',
    categoryGroup: 'non-inverter',
    categoryLabel: 'Non-Inverter Series',
    badges: ['R-32', 'Anti-Corrosion', 'High Cooling'],
    description: 'AC Standard hemat energi buatan Indonesia dengan sirip hidrofilik anti korosi.',
    link: '#'
  },
  {
    id: 'lite',
    name: 'Lite',
    model: 'FTP Series',
    categoryGroup: 'non-inverter',
    categoryLabel: 'Non-Inverter Series',
    badges: ['Compact Design', 'Eco Friendly', 'R-32'],
    description: 'AC Standard dengan desain ringkas dan hemat biaya untuk ruangan kamar tidur kecil.',
    link: '#'
  },
  {
    id: 'breeze',
    name: 'Breeze',
    model: 'FTV Series',
    categoryGroup: 'non-inverter',
    categoryLabel: 'Non-Inverter Series',
    badges: ['Gentle Breeze', 'Quiet', 'Turbo Cool'],
    description: 'AC Standard dengan hembusan udara lembut dan operasional tenang untuk kenyamanan optimal.',
    link: '#'
  }
]

export default function SingleSplitPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'all' | 'inverter' | 'non-inverter'>('all')
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const filteredMainProducts = useMemo(() => {
    return MAIN_SINGLE_SPLIT_PRODUCTS.filter(p => {
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase()
        const matchName = p.name.toLowerCase().includes(q)
        const matchModel = p.model.toLowerCase().includes(q)
        const matchDesc = p.description.toLowerCase().includes(q)
        if (!matchName && !matchModel && !matchDesc) return false
      }
      if (activeTab !== 'all' && p.categoryGroup !== activeTab) {
        return false
      }
      return true
    })
  }, [searchQuery, activeTab])

  return (
    <PageTransition>
      <PageMeta title="AC Single Split - Daikin Residential Solutions" canonical="/products/residential/single-split" />

      {/* Hero Header Section with Warranty Details */}
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
              <span className="text-white font-semibold">Single Split</span>
            </nav>

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
                Resmi Buatan Indonesia & Jaminan Garansi Resmi
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md uppercase">
                Garansi Panjang Makin Tenang
              </h1>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
                Pilihan AC Single Split Daikin menghadirkan kenyamanan udara dingin presisi, efisiensi energi tertinggi, serta garansi perlindungan penuh untuk ketenangan hunian Anda.
              </p>

              {/* Warranty Highlights Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-white text-center">
                  <ShieldCheck className="w-6 h-6 mx-auto mb-1 text-amber-300" />
                  <span className="text-xs font-bold block">5 TAHUN GARANSI</span>
                  <span className="text-[10px] text-cyan-100">Kompresor & Spare Part</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-white text-center">
                  <Shield className="w-6 h-6 mx-auto mb-1 text-amber-300" />
                  <span className="text-xs font-bold block">3 TAHUN GARANSI</span>
                  <span className="text-[10px] text-cyan-100">Jasa Service Resmi</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-white text-center col-span-2 sm:col-span-1">
                  <Award className="w-6 h-6 mx-auto mb-1 text-amber-300" />
                  <span className="text-xs font-bold block">JAPAN QUALITY</span>
                  <span className="text-[10px] text-cyan-100">Pabrik Indonesia</span>
                </div>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
              {/* Clean Empty Thumbnail Box for Banner Image Placeholder */}
              <div className="relative z-10 w-full h-full bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                <span className="text-xs opacity-60 mt-1">(Daikin Single Split Lineup - Garansi Panjang)</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Copy Penjelasan Nusantara Prestige & Featured Nusantara Cards (Above Filter) */}
      <div className="py-16 bg-gradient-to-b from-blue-50/60 via-white to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          
          {/* Nusantara Prestige Copy Paragraph */}
          <FadeInUp className="text-center max-w-4xl mx-auto space-y-4">
            <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-daikin-blue/10 px-4 py-1.5 rounded-full inline-block">
              Kebanggaan Indonesia
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-charcoal leading-tight">
              NUSANTARA <span className="text-daikin-blue">PRESTIGE</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <strong>NUSANTARA PRESTIGE</strong> merupakan seri perdana AC hunian DAIKIN buatan Indonesia. Lahir dari pabrik AC hunian skala produksi penuh pertama di Indonesia, proses produksi seri AC ini menggunakan teknologi mutakhir dan di bawah supervisi DAIKIN global. Berpadu dengan kelengkapan fitur di dalamnya yang dibuat untuk menjawab tantangan penggunaan AC di Indonesia, keberadaannya menjadi cerminan semangat DAIKIN di dalam namanya. Menjadikannya kebanggaan bagi Nusantara.
            </p>
          </FadeInUp>

          {/* Nusantara Prestige Product Cards (Moved ABOVE Filter Bar) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {NUSANTARA_PRODUCTS.map((prod) => (
              <FadeInUp key={prod.id}>
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-daikin-blue transition-all flex flex-col justify-between h-full group p-6 text-center">
                  <div>
                    {/* Empty Thumbnail Box */}
                    <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-4 border border-gray-100 flex items-center justify-center p-3 relative overflow-hidden group-hover:border-daikin-blue/30 transition-colors">
                      <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-200"></div>
                    </div>

                    {/* Badges */}
                    {prod.badges && (
                      <div className="flex flex-wrap gap-1.5 justify-center mb-3">
                        {prod.badges.map((b, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-blue-50 text-daikin-blue text-[10px] font-bold rounded">
                            {b}
                          </span>
                        ))}
                      </div>
                    )}

                    <h4 className="font-black text-daikin-blue text-xl mb-1 group-hover:text-daikin-blue-dark transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-gray-500 font-semibold text-xs mb-3">
                      {prod.model}
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

      {/* Filter & Search Bar */}
      <div className="py-8 bg-gray-50/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari tipe AC Single Split (ZETA, STAR, FLASH...)"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-daikin-blue transition-colors shadow-2xs"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-charcoal">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Tabs (Without Nusantara Prestige as requested) */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all ${activeTab === 'all'
                    ? 'bg-daikin-blue text-white border-daikin-blue shadow-2xs'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-daikin-blue'
                  }`}
              >
                Semua Single Split
              </button>
              <button
                onClick={() => setActiveTab('inverter')}
                className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all ${activeTab === 'inverter'
                    ? 'bg-daikin-blue text-white border-daikin-blue shadow-2xs'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-daikin-blue'
                  }`}
              >
                Inverter Series
              </button>
              <button
                onClick={() => setActiveTab('non-inverter')}
                className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all ${activeTab === 'non-inverter'
                    ? 'bg-daikin-blue text-white border-daikin-blue shadow-2xs'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-daikin-blue'
                  }`}
              >
                Non-Inverter Series
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Product Catalog Section (Consolidated 1 Section without Dividers) */}
      <div className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">

          {filteredMainProducts.length === 0 ? (
            <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200/80 my-4">
              <Info className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-charcoal mb-1">Tidak Ada Produk Yang Cocok</h3>
              <p className="text-gray-500 text-xs mb-4">Coba sesuaikan kata kunci atau pilih kategori lain.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="px-4 py-2 bg-daikin-blue text-white font-bold text-xs rounded-xl hover:bg-daikin-blue-dark transition-colors"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMainProducts.map((prod) => (
                <FadeInUp key={prod.id}>
                  <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-md hover:border-daikin-blue transition-all flex flex-col justify-between h-full group p-5 text-center">
                    <div>
                      {/* Empty Thumbnail Box */}
                      <div className="w-full aspect-[4/3] bg-gray-50 rounded-xl mb-3.5 border border-gray-100 flex items-center justify-center p-2.5 relative overflow-hidden group-hover:border-daikin-blue/30 transition-colors">
                        <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-200"></div>
                      </div>

                      {/* Badges */}
                      {prod.badges && (
                        <div className="flex flex-wrap gap-1 justify-center mb-2">
                          {prod.badges.map((b, idx) => (
                            <span key={idx} className="px-1.5 py-0.5 bg-blue-50 text-daikin-blue text-[9px] font-bold rounded">
                              {b}
                            </span>
                          ))}
                        </div>
                      )}

                      <h4 className="font-black text-daikin-blue text-lg mb-0.5 group-hover:text-daikin-blue-dark transition-colors">
                        {prod.name}
                      </h4>
                      <p className="text-gray-500 font-semibold text-xs mb-3">
                        {prod.model}
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
          )}

          {/* CTA Banner: Temukan Kenapa Lebih Baik Pakai AC Inverter (Moved BELOW Product Section) */}
          <FadeInUp>
            <div className="bg-gradient-to-r from-[#0097e6] to-[#00b0f0] rounded-2xl p-6 md:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 hidden sm:flex">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold">
                    Temukan Kenapa Lebih Baik Pakai AC Inverter
                  </h4>
                  <p className="text-cyan-100 text-xs md:text-sm mt-0.5">
                    Hitung estimasi penghematan tagihan listrik bulanan Anda dengan DAIKIN Inverter Calculator.
                  </p>
                </div>
              </div>

              <Link
                to="/solutions/ac-calculator"
                className="px-6 py-3 bg-white text-daikin-blue rounded-xl font-bold text-xs md:text-sm hover:bg-cyan-50 transition-all shadow-md shrink-0 flex items-center gap-2 group"
              >
                <span>DAIKIN INVERTER CALCULATOR</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInUp>

        </div>
      </div>

      {/* Section Video Single Split */}
      <div className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-daikin-blue-dark via-daikin-blue-dark/80 to-[#1c242b] opacity-80 z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-cyan-300 font-bold text-xs uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-white/20">
              Video Demo Produk
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Keunggulan Inovasi AC Single Split Daikin
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Saksikan teknologi hembusan Coanda, sensor pintar Intelligent Eye, dan efisiensi Inverter Daikin untuk kenyamanan hunian Anda.
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
              <span className="mt-3 text-white text-xs font-bold tracking-wider uppercase">Tonton Video Single Split</span>
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
              Dapatkan produk AC Single Split Daikin melalui jaringan dealer resmi terpercaya atau berkonsultasi langsung dengan tim profesional kami.
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

      {/* Section Kategori Lainnya (Residential Categories with Single Split hidden) */}
      <div className="py-20 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <FadeInUp>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">Kategori Lainnya</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Multi Split */}
            <FadeInUp delay={0.1}>
              <Link to="/products/residential/multi-split" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Home className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Multi Split</h3>
                  <p className="text-gray-500 text-xs">AC Multi Outdoor untuk Hunian Minimalis</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-daikin-blue group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </Link>
            </FadeInUp>

            {/* 2. Air Purifier */}
            <FadeInUp delay={0.2}>
              <Link to="/products/residential/air-purifier" className="group flex items-center p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-daikin-blue transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue/10 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors mr-4 shrink-0">
                  <Wind className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-charcoal group-hover:text-daikin-blue transition-colors">Air Purifier</h3>
                  <p className="text-gray-500 text-xs">Pembersih Udara Teknologi Streamer</p>
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
                  <p className="text-gray-500 text-xs">AC Sentral Premium Hunian Mewah</p>
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
                  <p className="text-gray-500 text-xs">Penawaran & Promo Spesial Daikin</p>
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
              <span className="text-white/60 text-xs font-medium">Video Player Placeholder (Demonstrasi AC Single Split Daikin)</span>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  )
}
