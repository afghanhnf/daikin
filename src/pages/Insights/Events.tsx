import { useState, useMemo, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Calendar, MapPin, Clock, Search, ArrowRight,
  ChevronLeft, ChevronRight, X, Sparkles, Video, Info, FileText, Image as ImageIcon
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { formatDate } from '@/utils/formatters'
import { eventArticles } from '@/data/events'
import { cn } from '@/utils/cn'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const ITEMS_PER_PAGE = 6

export default function Events() {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'id'

  const [activeTab, setActiveTab] = useState<'all' | 'expo' | 'webinar' | 'csr'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return eventArticles.filter((evt) => {
      let matchTab = true
      if (activeTab === 'expo') matchTab = evt.category === 'expo'
      if (activeTab === 'webinar') matchTab = evt.category === 'webinar'
      if (activeTab === 'csr') matchTab = evt.category === 'csr' || evt.category === 'workshop'

      const matchSearch =
        searchQuery.trim() === '' ||
        evt.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.excerpt[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.location.toLowerCase().includes(searchQuery.toLowerCase())

      return matchTab && matchSearch
    })
  }, [activeTab, searchQuery, lang])

  // Pagination calculation
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE) || 1
  const paginatedEvents = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredEvents.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredEvents, currentPage])

  const handleTabChange = (tabKey: any) => {
    setActiveTab(tabKey)
    setCurrentPage(1)
  }

  const handleSearchChange = (val: string) => {
    setSearchQuery(val)
    setCurrentPage(1)
  }

  return (
    <PageTransition>
      <PageMeta
        title="Laporan Kegiatan & Event | Daikin Indonesia"
        description="Dokumentasi dan laporan resmi berbagai kegiatan, pameran HVAC, seminar teknis, serta aktivitas sosial Daikin Indonesia."
        canonical="/insights/events"
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
              { label: 'Laporan Kegiatan' }
            ]}
            className="text-white/80 mb-8"
          />

          <div className="max-w-3xl">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                <FileText className="w-4 h-4 text-cyan-200" />
                Dokumentasi & Liputan Resmi
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-display">
                Laporan Kegiatan & Event <br />
                <span className="text-daikin-blue-light font-light">Daikin Indonesia</span>
              </h1>

              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl font-sans">
                Dokumentasi dan laporan resmi berbagai kegiatan, pameran HVAC, seminar teknis, serta aktivitas sosial Daikin Indonesia.
              </p>
            </FadeInUp>
          </div>
        </div>
      </div>

      {/* ── 2. PAGE CONTENT AREA ──────────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-12 md:py-16 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 custom-scrollbar">
              {[
                { key: 'all', label: 'Semua Laporan', icon: Calendar },
                { key: 'expo', label: 'Pameran & Expo', icon: Sparkles },
                { key: 'webinar', label: 'Webinar & Seminar', icon: Video },
                { key: 'csr', label: 'Workshop & CSR', icon: FileText },
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
                        ? 'bg-daikin-blue text-white shadow-2xs'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-charcoal border border-slate-200/70'
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
                placeholder="Cari laporan kegiatan..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-charcoal placeholder:text-slate-400 focus:outline-none focus:border-daikin-blue transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Report Articles Grid (Article Style Cards) */}
          {filteredEvents.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-slate-200/90 text-center max-w-lg mx-auto my-8 shadow-2xs">
              <Info className="w-10 h-10 text-daikin-blue mx-auto mb-3" />
              <h3 className="text-lg font-bold font-display text-charcoal mb-1">Laporan Tidak Ditemukan</h3>
              <p className="text-xs text-slate-500 mb-4 font-sans font-light">Coba cari dengan kata kunci lain atau ubah kategori filter.</p>
              <button
                onClick={() => { setActiveTab('all'); setSearchQuery(''); setCurrentPage(1) }}
                className="px-4 py-2 bg-daikin-blue text-white text-xs font-bold rounded-xl hover:bg-daikin-blue-dark transition-all"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <>
              <FadeInUp stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedEvents.map((event) => (
                  <FadeInItem key={event.id}>
                    <Link
                      to={`/insights/events/${event.slug}`}
                      className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col h-full group"
                    >
                      {/* Empty Image Placeholder Container (Images Kosongan) */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100/90 border-b border-slate-200/60 flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center text-slate-300 gap-1">
                          <ImageIcon className="w-8 h-8 opacity-40" />
                          <span className="text-[10px] font-semibold text-slate-400">Daikin Event</span>
                        </div>
                        
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="bg-[#003B71] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-2xs">
                            {event.badge}
                          </span>
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 flex flex-col flex-1 bg-white justify-between space-y-4">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2 text-xs text-slate-400 font-sans font-medium">
                            <Calendar className="w-3.5 h-3.5 text-daikin-blue" />
                            <span>{formatDate(event.date, lang)}</span>
                          </div>

                          <h3 className="font-extrabold font-display text-charcoal text-base leading-snug group-hover:text-daikin-blue transition-colors line-clamp-2">
                            {event.title[lang]}
                          </h3>

                          <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 font-light">
                            {event.excerpt[lang]}
                          </p>
                        </div>

                        {/* Location info & Read article action */}
                        <div className="space-y-3 pt-3 border-t border-slate-100">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-sans truncate">
                            <MapPin className="w-3.5 h-3.5 text-daikin-blue flex-shrink-0" />
                            <span className="truncate">{event.location}</span>
                          </div>

                          <div className="flex items-center text-xs font-bold text-daikin-blue group-hover:gap-2 transition-all">
                            <span>Baca Selengkapnya</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>

                      </div>

                    </Link>
                  </FadeInItem>
                ))}
              </FadeInUp>

              {/* Pagination Numbers (1, 2, >) */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-daikin-blue hover:text-daikin-blue disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-all"
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
                            ? 'bg-daikin-blue text-white shadow-2xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-daikin-blue hover:text-daikin-blue'
                        )}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-daikin-blue hover:text-daikin-blue disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-all"
                    aria-label="Next Page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </PageTransition>
  )
}
