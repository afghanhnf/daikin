import { useState, useMemo, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  BookOpen,
  CheckCircle,
  Sparkles,
  User,
  Newspaper,
  Tag,
  GraduationCap,
  Heart,
  Calendar
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { newsArticles, estimateReadTime, promotions, events } from '@/data/news'
import { formatShortDate } from '@/utils/formatters'
import { cn } from '@/utils/cn'

// ─── Category List Config ─────────────────────────────────────────────

const CATEGORIES = [
  { key: 'all',      label: 'Semua Kategori', icon: Newspaper },
  { key: 'news',     label: 'Berita & Update', icon: Newspaper },
  { key: 'event',    label: 'Event & Pameran', icon: Tag },
  { key: 'training', label: 'Training & Sertifikasi', icon: GraduationCap },
  { key: 'csr',      label: 'Daikin Impact (CSR)', icon: Heart },
]

export default function News() {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'id'

  // State Management
  const [search, setSearch]             = useState('')
  const [activeTab, setActiveTab]       = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [emailInput, setEmailInput]     = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Sorted Articles by Date (Newest first)
  const sortedArticles = useMemo(
    () => [...newsArticles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    []
  )

  // Featured Slides (Top 4 articles for the top Carousel)
  const featuredArticles = useMemo(() => sortedArticles.slice(0, 4), [sortedArticles])

  // Auto-play for Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [featuredArticles.length])

  // Filtered Articles based on Search or Active Category Tab
  const filteredArticles = useMemo(() => {
    let list = sortedArticles
    if (activeTab !== 'all') {
      list = list.filter((a) => a.category === activeTab)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (a) =>
          a.title[lang].toLowerCase().includes(q) ||
          a.excerpt[lang].toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return list
  }, [sortedArticles, activeTab, search, lang])

  // Latest Articles Grid (6 items)
  const latestArticles = useMemo(() => filteredArticles.slice(0, 6), [filteredArticles])

  // Category Specific Articles ("Infografis & Panduan HVAC")
  const categoryArticles = useMemo(() => {
    return sortedArticles.filter((a) => a.category === 'training' || a.category === 'csr').slice(0, 3)
  }, [sortedArticles])

  // Category Article Count
  const countByCategory = useMemo(() => {
    return CATEGORIES.reduce<Record<string, number>>((acc, cat) => {
      acc[cat.key] = cat.key === 'all' ? newsArticles.length : newsArticles.filter((a) => a.category === cat.key).length
      return acc
    }, {})
  }, [])

  const asideRef = useRef<HTMLElement>(null)
  const [sidebarTranslateY, setSidebarTranslateY] = useState(0)

  // Dynamic JS Scroll Tracking for Guaranteed Sticky Sidebar
  useEffect(() => {
    const handleScroll = () => {
      if (!asideRef.current) return
      const aside = asideRef.current
      const parentGrid = aside.parentElement
      if (!parentGrid) return

      // Measure grid container relative to viewport
      const gridRect = parentGrid.getBoundingClientRect()
      const asideHeight = aside.offsetHeight
      const navbarOffset = 110 // Top navbar clearance

      if (gridRect.top > navbarOffset) {
        setSidebarTranslateY(0)
      } else {
        const maxTranslate = Math.max(0, parentGrid.offsetHeight - asideHeight)
        const currentTranslate = Math.min(Math.abs(gridRect.top - navbarOffset), maxTranslate)
        setSidebarTranslateY(currentTranslate)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailInput.trim()) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmailInput('')
      }, 4000)
    }
  }

  const currentFeatured = featuredArticles[currentSlide]

  return (
    <PageTransition>
      <PageMeta
        title="Berita & Update - Daikin Indonesia"
        description="Pusat informasi resmi Daikin Indonesia: berita terbaru, artikel teknologi AC, event, serta panduan tata udara."
        canonical="/insights/news"
      />

      {/* ── Page Hero Header ────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#003B71] via-[#0072CE] to-[#0097E0] text-white pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb
            items={[{ label: 'Insights', path: '/insights' }, { label: 'Berita & Update' }]}
            className="text-white/80 mb-6"
          />

          <FadeInUp>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                Media & Informasi Official
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Berita & Update
            </h1>

            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
              Ikuti berita terbaru, siaran pers, peluncuran produk, dan inisiatif terkini dari Daikin Indonesia.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── Page Content Body ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ══════════════════════════════════════════════════════════
                LEFT SIDEBAR: Sticky Search Box, Category Navigation & Subscribe
               ══════════════════════════════════════════════════════════ */}
            <aside
              ref={asideRef}
              style={{ transform: `translateY(${sidebarTranslateY}px)` }}
              className="lg:col-span-4 xl:col-span-3 space-y-6 self-start transition-transform duration-75 ease-out"
            >
              
              {/* Search Box on Side Menu */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3 px-1 flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#0097E0]" /> Cari Artikel
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center gap-2.5"
                >
                  <div className="relative w-full flex items-center">
                    <input
                      type="text"
                      placeholder="Cari berita, kata kunci..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-3.5 pr-8 py-2.5 rounded-xl border border-gray-200 text-xs md:text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#0097E0] transition-all"
                    />
                    {search && (
                      <button
                        type="button"
                        onClick={() => setSearch('')}
                        className="absolute right-2.5 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#0097E0] hover:bg-[#0080BD] text-white text-xs font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center flex-shrink-0"
                  >
                    Cari
                  </button>
                </form>
              </div>

              {/* Kategori Navigation Box */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2 px-1">
                  Kategori
                </h3>
                <div className="space-y-1.5 max-h-[280px] overflow-y-auto pr-1 custom-scrollbar">
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon
                    const isActive = activeTab === cat.key
                    return (
                      <button
                        key={cat.key}
                        onClick={() => setActiveTab(cat.key)}
                        className={cn(
                          'w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left',
                          isActive
                            ? 'bg-[#0097E0]/10 text-[#0097E0] border-l-4 border-[#0097E0]'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        )}
                      >
                        <span className="flex items-center gap-2.5 truncate">
                          <Icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="truncate">{cat.label}</span>
                        </span>
                        <span
                          className={cn(
                            'text-[10px] font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center',
                            isActive ? 'bg-[#0097E0] text-white' : 'bg-gray-100 text-gray-500'
                          )}
                        >
                          {countByCategory[cat.key]}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Subscribe Box */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-2 text-[#0097E0] mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Langganan Artikel</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Dapatkan update berita terkini, info promo, dan artikel tata udara langsung ke email Anda.
                </p>

                {isSubscribed ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs p-3.5 rounded-xl flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Terima kasih! Anda berhasil berlangganan.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      required
                      placeholder="Masukkan alamat email..."
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#0097E0]"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs transition-all text-center shadow-sm"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

            </aside>


            {/* ══════════════════════════════════════════════════════════
                RIGHT MAIN CONTENT: Slide Blog, Artikel Terbaru, CTA, dll.
               ══════════════════════════════════════════════════════════ */}
            <main className="lg:col-span-8 xl:col-span-9 space-y-12">

              {/* ── 1. Slide Blog (Featured Slider) ───────────────────── */}
              {currentFeatured && (
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm group relative">
                  <div className="grid md:grid-cols-12 items-stretch h-[340px] md:h-[360px]">
                    
                    {/* Featured Image */}
                    <div className="md:col-span-7 relative overflow-hidden bg-gray-100 h-full">
                      <img
                        src={currentFeatured.coverImage}
                        alt={currentFeatured.title[lang]}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-[#003B71] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Daikin Spotlight
                      </div>
                    </div>

                    {/* Featured Content */}
                    <div className="md:col-span-5 p-6 md:p-7 flex flex-col justify-between bg-white h-full overflow-hidden">
                      <div>
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                          <span className="capitalize font-semibold text-[#0097E0]">
                            {currentFeatured.category}
                          </span>
                          <span>•</span>
                          <span>{estimateReadTime(currentFeatured.content[lang])} mins read</span>
                        </div>

                        <Link to={`/insights/news/${currentFeatured.slug}`}>
                          <h2 className="text-base md:text-lg font-extrabold text-gray-900 hover:text-[#0097E0] transition-colors leading-snug mb-2 line-clamp-3">
                            {currentFeatured.title[lang]}
                          </h2>
                        </Link>

                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4 font-normal">
                          {currentFeatured.excerpt[lang]}
                        </p>
                      </div>

                      {/* Author & Read Link */}
                      <div>
                        <div className="flex items-center gap-2.5 text-xs text-gray-500 mb-3">
                          <div className="w-5 h-5 rounded-full bg-[#0097E0]/10 text-[#0097E0] flex items-center justify-center font-bold text-[9px]">
                            DK
                          </div>
                          <span className="font-semibold text-gray-800 text-xs">
                            {currentFeatured.author || 'Daikin Indonesia'}
                          </span>
                        </div>

                        <Link
                          to={`/insights/news/${currentFeatured.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#0097E0] hover:text-[#0072CE] group-hover:gap-3 transition-all"
                        >
                          Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>
                  </div>

                  {/* Slider Controls (Dots & Navigation Buttons) */}
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2">
                      {featuredArticles.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={cn(
                            'h-2 rounded-full transition-all duration-300',
                            currentSlide === idx ? 'w-8 bg-[#0097E0]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                          )}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Prev / Next Arrows */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1))}
                        className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#0097E0] hover:text-[#0097E0] flex items-center justify-center transition-colors shadow-sm"
                        aria-label="Slide sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredArticles.length)}
                        className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#0097E0] hover:text-[#0097E0] flex items-center justify-center transition-colors shadow-sm"
                        aria-label="Slide berikutnya"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              )}


              {/* ── 2. Artikel Terbaru Section ────────────────────────── */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200">
                  <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                    Artikel Terbaru
                  </h2>
                  <button
                    onClick={() => setActiveTab('all')}
                    className="text-xs md:text-sm font-bold text-[#0097E0] hover:text-[#0072CE] flex items-center gap-1 transition-all"
                  >
                    Lihat semuanya <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 3-Column Articles Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {latestArticles.map((article) => (
                    <div
                      key={article.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group"
                    >
                      <Link to={`/insights/news/${article.slug}`} className="flex flex-col h-full">
                        
                        {/* Cover Image */}
                        <div className="relative overflow-hidden bg-gray-100 aspect-[16/10]">
                          <img
                            src={article.coverImage}
                            alt={article.title[lang]}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>

                        {/* Article Info */}
                        <div className="p-5 flex flex-col flex-1 bg-white">
                          <div className="text-[11px] font-bold text-gray-400 capitalize mb-1">
                            {article.category}
                          </div>

                          <h3 className="font-bold text-[#0097E0] text-sm md:text-base leading-snug mb-2 line-clamp-2 group-hover:underline transition-all">
                            {article.title[lang]}
                          </h3>

                          <div className="text-[11px] text-gray-400 font-normal mb-3 flex items-center gap-1.5">
                            <span>{formatShortDate(article.publishedAt)}</span>
                            <span>•</span>
                            <span>{estimateReadTime(article.content[lang])} mins read</span>
                          </div>

                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
                            {article.excerpt[lang]}
                          </p>

                          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                            <div className="flex items-center gap-1.5 truncate">
                              <User className="w-3 h-3 text-[#0097E0]" />
                              <span className="truncate">{article.author || 'Daikin Indonesia'}</span>
                            </div>
                          </div>
                        </div>

                      </Link>
                    </div>
                  ))}
                </div>
              </div>


              {/* ── 3. Banner CTA Interstitial (E-book / Catalog) ─────── */}
              <div className="bg-gradient-to-r from-[#003B71] via-[#0072CE] to-[#0097E0] rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 transform translate-x-10 pointer-events-none" />
                
                <div className="grid md:grid-cols-12 gap-6 items-center relative z-10">
                  <div className="md:col-span-8 space-y-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      <BookOpen className="w-3.5 h-3.5 text-white" /> E-Katalog & Panduan AC 2026
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                      Katalog Resmi & Panduan Hemat Energi Daikin
                    </h3>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-xl">
                      Unduh katalog produk lengkap, spesifikasi AC Inverter, serta tips perawatan dan efisiensi listrik langsung dari pakar Daikin.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/services/support"
                        className="inline-flex items-center gap-2 bg-white text-[#003B71] hover:bg-gray-100 font-extrabold text-xs md:text-sm px-5 py-3 rounded-xl transition-all shadow-sm"
                      >
                        Lihat Katalog Selengkapnya <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="md:col-span-4 hidden md:flex items-center justify-center">
                    <div className="w-32 h-40 bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 p-4 flex flex-col items-center justify-center text-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                      <Sparkles className="w-8 h-8 text-amber-300 mb-2" />
                      <span className="text-xs font-bold text-white">Catalog 2026</span>
                      <span className="text-[10px] text-white/70 mt-1">Free PDF Download</span>
                    </div>
                  </div>
                </div>
              </div>


              {/* ── 4. Panduan & Artikel Berdasarkan Kategori ────────── */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200">
                  <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                    Training & Program CSR
                  </h2>
                  <Link
                    to="/insights/training"
                    className="text-xs md:text-sm font-bold text-[#0097E0] hover:text-[#0072CE] flex items-center gap-1 transition-all"
                  >
                    Lihat semuanya <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryArticles.map((article) => (
                    <div
                      key={article.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group"
                    >
                      <Link to={`/insights/news/${article.slug}`} className="flex flex-col h-full">
                        <div className="relative overflow-hidden bg-gray-100 aspect-[16/10]">
                          <img
                            src={article.coverImage}
                            alt={article.title[lang]}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5 flex flex-col flex-1 bg-white">
                          <span className="text-[11px] font-bold text-[#0097E0] uppercase tracking-wider mb-1">
                            {article.category}
                          </span>
                          <h3 className="font-bold text-gray-900 text-sm md:text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#0097E0] transition-colors">
                            {article.title[lang]}
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
                            {article.excerpt[lang]}
                          </p>
                          <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-400">
                            <span>{formatShortDate(article.publishedAt)}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>


              {/* ── 5. Promosi & Events Terkini Section ───────────────── */}
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                {/* Promo Spotlight */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-orange-500 bg-orange-50 px-2.5 py-1 rounded-md">
                      Promosi Aktif
                    </span>
                    <Link to="/insights/promotions" className="text-xs font-bold text-[#0097E0] hover:underline">
                      Lihat Semua
                    </Link>
                  </div>
                  {promotions.slice(0, 2).map((promo) => (
                    <div key={promo.id} className="flex gap-4 items-start p-2 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {promo.discount || 'PROMO'}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs md:text-sm">{promo.title[lang]}</h4>
                        <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5">{promo.description[lang]}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Event Spotlight */}
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Event Mendatang
                    </span>
                    <Link to="/insights/events" className="text-xs font-bold text-[#0097E0] hover:underline">
                      Lihat Semua
                    </Link>
                  </div>
                  {events.slice(0, 2).map((evt) => (
                    <div key={evt.id} className="flex gap-4 items-start p-2 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex flex-col items-center justify-center flex-shrink-0">
                        <Calendar className="w-4 h-4" />
                        <span className="text-[9px] font-bold uppercase mt-0.5">EVENT</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs md:text-sm">{evt.title[lang]}</h4>
                        <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5">{evt.description[lang]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              {/* ── 6. Bottom CTA Section ─────────────────────────────── */}
              <div className="bg-[#003B71] text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
                <h3 className="text-2xl font-black tracking-tight">
                  Butuh Solusi Tata Udara Terbaik Untuk Hunian Anda?
                </h3>
                <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
                  Konsultasikan kebutuhan AC Residential, Commercial, atau Multi-Split Anda secara gratis bersama tim ahli Daikin Indonesia.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link
                    to="/services/ishop"
                    className="px-6 py-3 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm transition-all shadow-md"
                  >
                    Temukan Dealer Terdekat
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-xl border border-white/40 hover:bg-white/10 text-white font-bold text-xs md:text-sm transition-all"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>

            </main>

          </div>

        </div>
      </div>
    </PageTransition>
  )
}
