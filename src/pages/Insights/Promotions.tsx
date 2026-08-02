import { useState, useMemo, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Tag,
  Gift,
  Zap,
  Check,
  Copy,
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Store,
  Sparkles,
  Info,
  Clock,
  BookOpen,
  Image as ImageIcon
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { formatShortDate } from '@/utils/formatters'
import { promotionArticles, PromotionArticle } from '@/data/promotions'
import { cn } from '@/utils/cn'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const ITEMS_PER_PAGE = 3

export default function Promotions() {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'id'

  const [activeTab, setActiveTab] = useState<'all' | 'inverter' | 'cashback' | 'tradein' | 'bundle'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPromo, setSelectedPromo] = useState<PromotionArticle | null>(null)
  const [copiedCode, setCopiedCode] = useState(false)

  // Filtered promotions list
  const filteredPromotions = useMemo(() => {
    return promotionArticles.filter((promo) => {
      const matchTab = activeTab === 'all' || promo.category === activeTab
      const matchSearch =
        searchQuery.trim() === '' ||
        promo.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
        promo.excerpt[lang].toLowerCase().includes(searchQuery.toLowerCase())
      return matchTab && matchSearch
    })
  }, [activeTab, searchQuery, lang])

  // Pagination calculation
  const totalPages = Math.ceil(filteredPromotions.length / ITEMS_PER_PAGE) || 1
  const paginatedPromotions = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredPromotions.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredPromotions, currentPage])

  const handleTabChange = (tabKey: any) => {
    setActiveTab(tabKey)
    setCurrentPage(1)
  }

  const handleSearchChange = (val: string) => {
    setSearchQuery(val)
    setCurrentPage(1)
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2500)
  }

  return (
    <PageTransition>
      <PageMeta
        title="Promosi & Penawaran Spesial - Daikin Indonesia"
        description="Pusat promosi resmi AC Daikin: penawaran Mid-Year Sale, cashback, gratis biaya instalasi, serta subsidi tukar tambah AC."
        canonical="/insights/promotions"
      />

      {/* ── 1. HERO BANNER (MODEL PAGE BANNER) ────────────────────────────────── */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#061834] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        {/* Radial dots grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }} 
        />

        {/* Ambient background glow */}
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Wawasan', path: '/insights' },
              { label: 'Berita & Informasi', path: '/insights/news' },
              { label: 'Promosi Spesial' }
            ]}
            className="text-white/80 mb-8"
          />

          <div className="max-w-3xl">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                <Gift className="w-4 h-4 text-cyan-200" />
                Penawaran Resmi Daikin Indonesia
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-display">
                Promosi Spesial <br />
                <span className="text-daikin-blue-light font-light">Promo & Penawaran Eksklusif</span>
              </h1>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl font-sans">
                Dapatkan info penawaran menarik, diskon produk Inverter, garansi ekstra, cashback, serta program tukar tambah dari dealer iShop resmi Daikin.
              </p>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* ── Page Content ──────────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Controls Bar: Category Filters & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 custom-scrollbar">
              {[
                { key: 'all', label: 'Semua Promo', icon: Tag },
                { key: 'inverter', label: 'Promo Inverter', icon: Zap },
                { key: 'cashback', label: 'Cashback & Pasang', icon: Gift },
                { key: 'tradein', label: 'Tukar Tambah', icon: Sparkles },
                { key: 'bundle', label: 'Paket Bundle', icon: BookOpen },
              ].map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    className={cn(
                      'px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap',
                      isActive
                        ? 'bg-[#0097E0] text-white shadow-xs'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/60'
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Cari promo..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#0097E0] transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Promo Grid (3 Compact Cards per Row with Fixed Thumbnail Images) */}
          {filteredPromotions.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-gray-100 text-center max-w-lg mx-auto my-8 shadow-xs">
              <Info className="w-10 h-10 text-[#0097E0] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Promo Tidak Ditemukan</h3>
              <p className="text-xs text-gray-500 mb-4">Coba cari dengan kata kunci lain atau pilih filter kategori berbeda.</p>
              <button
                onClick={() => { setActiveTab('all'); setSearchQuery(''); setCurrentPage(1) }}
                className="px-4 py-2 bg-[#0097E0] text-white text-xs font-bold rounded-xl"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <>
              <FadeInUp stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedPromotions.map((promo) => (
                  <FadeInItem key={promo.id}>
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                      
                      {/* Empty Image Placeholder Container (Images Kosongan) */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100/90 border-b border-slate-200/60 flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center text-slate-300 gap-1">
                          <ImageIcon className="w-8 h-8 opacity-40" />
                          <span className="text-[10px] font-semibold text-slate-400">Daikin Promotion</span>
                        </div>
                        
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="bg-[#003B71] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-2xs">
                            {promo.badge}
                          </span>
                          {promo.discount && (
                            <span className="bg-[#0097E0] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-2xs">
                              {promo.discount}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-5 flex flex-col flex-1 bg-white">
                        
                        {/* Title */}
                        <Link to={`/insights/promotions/${promo.slug}`}>
                          <h3 className="font-extrabold text-gray-900 text-sm md:text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#0097E0] transition-colors">
                            {promo.title[lang]}
                          </h3>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                          {promo.excerpt[lang]}
                        </p>

                        {/* Validity Date */}
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium pb-4 border-b border-gray-100">
                          <Calendar className="w-3.5 h-3.5 text-[#0097E0]" />
                          <span>Berlaku s/d <strong className="text-gray-800">{formatShortDate(promo.validUntil)}</strong></span>
                        </div>

                        {/* Card Actions */}
                        <div className="pt-4 flex items-center justify-between gap-2">
                          <button
                            onClick={() => setSelectedPromo(promo)}
                            className="text-xs font-bold text-[#0097E0] hover:text-[#0072CE] flex items-center gap-1 transition-colors"
                          >
                            <span>Quick Detail</span>
                          </button>

                          <Link
                            to={`/insights/promotions/${promo.slug}`}
                            className="px-3.5 py-2 bg-[#0097E0] hover:bg-[#0080BD] text-white text-xs font-bold rounded-xl transition-all shadow-2xs flex items-center gap-1.5"
                          >
                            <span>Baca Artikel</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                      </div>

                    </div>
                  </FadeInItem>
                ))}
              </FadeInUp>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:border-[#0097E0] hover:text-[#0097E0] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-all"
                    aria-label="Previous Page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={cn(
                          'w-9 h-9 rounded-xl text-xs font-bold transition-all',
                          currentPage === page
                            ? 'bg-[#0097E0] text-white shadow-xs'
                            : 'bg-white border border-gray-200 text-gray-700 hover:border-[#0097E0] hover:text-[#0097E0]'
                        )}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:border-[#0097E0] hover:text-[#0097E0] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-all"
                    aria-label="Next Page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}

          {/* Quick Detail Modal */}
          <AnimatePresence>
            {selectedPromo && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
                >
                  <button
                    onClick={() => setSelectedPromo(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 p-2 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0097E0] text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Gift className="w-3.5 h-3.5" /> Detail Ringkas Promo
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">
                    {selectedPromo.title[lang]}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-5">
                    {selectedPromo.excerpt[lang]}
                  </p>

                  {/* Promo Code */}
                  {selectedPromo.code && (
                    <div className="bg-sky-50/80 border border-sky-200/80 p-4 rounded-2xl mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Kode Voucher</p>
                        <p className="text-lg font-black text-[#0097E0] tracking-wide">{selectedPromo.code}</p>
                      </div>
                      <button
                        onClick={() => handleCopyCode(selectedPromo.code!)}
                        className={cn(
                          'px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all',
                          copiedCode ? 'bg-emerald-600 text-white' : 'bg-[#0097E0] text-white hover:bg-[#0080BD]'
                        )}
                      >
                        {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedCode ? 'Tersalin!' : 'Salin Kode'}</span>
                      </button>
                    </div>
                  )}

                  {/* Terms */}
                  <div className="mb-6 space-y-1.5 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <h4 className="text-xs font-extrabold uppercase text-gray-700 tracking-wider flex items-center gap-1.5 mb-2">
                      <Info className="w-4 h-4 text-[#0097E0]" /> Syarat & Ketentuan:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {selectedPromo.terms.map((term, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0097E0] mt-1.5 flex-shrink-0" />
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/insights/promotions/${selectedPromo.slug}`}
                      onClick={() => setSelectedPromo(null)}
                      className="flex-1 py-3 bg-[#0097E0] hover:bg-[#0080BD] text-white text-xs font-bold rounded-xl text-center transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Baca Artikel Selengkapnya</span>
                    </Link>
                    <Link
                      to="/services/ishop"
                      onClick={() => setSelectedPromo(null)}
                      className="py-3 px-5 border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold rounded-xl text-center transition-all flex items-center justify-center gap-1.5"
                    >
                      <Store className="w-4 h-4 text-[#0097E0]" />
                      <span>Dealer Terdekat</span>
                    </Link>
                  </div>

                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* ── Bottom Call To Action Banner ──────────────────────────────── */}
      <div className="bg-[#003B71] text-white py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Ingin Mengklaim Promo Daikin Atau Konsultasi Kebutuhan AC?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Kunjungi dealer resmi Daikin iShop terdekat di kota Anda atau hubungi tim layanan pelanggan resmi kami.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/services/ishop"
              className="px-6 py-3.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Store className="w-4 h-4" />
              <span>Temukan Dealer iShop Terdekat</span>
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl border border-white/40 hover:bg-white/10 text-white font-bold text-xs md:text-sm transition-all"
            >
              Hubungi Customer Service
            </Link>
          </div>
        </div>
      </div>

    </PageTransition>
  )
}
