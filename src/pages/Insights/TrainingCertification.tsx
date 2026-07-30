import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap,
  Award,
  Clock,
  MapPin,
  CheckCircle,
  Users,
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  BookOpen,
  Building,
  Info,
  ShieldCheck
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { trainingArticles, TrainingArticle } from '@/data/training'
import { cn } from '@/utils/cn'

const ITEMS_PER_PAGE = 3

export default function TrainingCertification() {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'id'

  const [activeTab, setActiveTab] = useState<'all' | 'technician' | 'dealer' | 'project'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProg, setSelectedProg] = useState<TrainingArticle | null>(null)
  
  // Registration Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', batch: 'Gelombang 1 (Agustus 2026)' })
  const [isRegistered, setIsRegistered] = useState(false)

  // Filtered training courses
  const filteredPrograms = useMemo(() => {
    return trainingArticles.filter((prog) => {
      const matchTab = activeTab === 'all' || prog.category === activeTab
      const matchSearch =
        searchQuery.trim() === '' ||
        prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchTab && matchSearch
    })
  }, [activeTab, searchQuery])

  // Pagination calculation
  const totalPages = Math.ceil(filteredPrograms.length / ITEMS_PER_PAGE) || 1
  const paginatedPrograms = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredPrograms.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredPrograms, currentPage])

  const handleTabChange = (tabKey: any) => {
    setActiveTab(tabKey)
    setCurrentPage(1)
  }

  const handleSearchChange = (val: string) => {
    setSearchQuery(val)
    setCurrentPage(1)
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setIsRegistered(true)
    }
  }

  const closeModal = () => {
    setSelectedProg(null)
    setIsRegistered(false)
    setFormData({ name: '', email: '', phone: '', company: '', batch: 'Gelombang 1 (Agustus 2026)' })
  }

  return (
    <PageTransition>
      <PageMeta
        title="Training & Sertifikasi - Daikin Indonesia"
        description="Program pelatihan dan sertifikasi kompetensi teknisi HVAC resmi standar internasional dari Daikin National Training Center Indonesia."
        canonical="/insights/training"
      />

      {/* ── Page Hero Header ────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#003B71] via-[#0072CE] to-[#0097E0] text-white pt-36 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb
            items={[{ label: 'Insights', path: '/insights' }, { label: 'Training & Sertifikasi' }]}
            className="text-white/80 mb-6"
          />

          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-3 text-sky-100">
              <GraduationCap className="w-4 h-4 text-[#0097E0] bg-white rounded-full p-0.5" /> Daikin National Training Center
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Training & Sertifikasi
            </h1>

            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
              Tingkatkan kompetensi dan profesionalisme Anda bersama program pelatihan resmi teknisi tata udara Daikin Indonesia berstandar internasional.
            </p>
          </FadeInUp>
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
                { key: 'all', label: 'Semua Program', icon: BookOpen },
                { key: 'technician', label: 'Sertifikasi Teknisi', icon: Award },
                { key: 'dealer', label: 'Training Sales & Dealer', icon: Users },
                { key: 'project', label: 'Manajemen Proyek', icon: Building },
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
                placeholder="Cari program pelatihan..."
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

          {/* Training Grid (3 Compact Cards per Row with Fixed Thumbnail Images) */}
          {filteredPrograms.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-gray-100 text-center max-w-lg mx-auto my-8 shadow-xs">
              <Info className="w-10 h-10 text-[#0097E0] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Program Tidak Ditemukan</h3>
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
                {paginatedPrograms.map((prog) => (
                  <FadeInItem key={prog.id}>
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                      
                      {/* Fixed Thumbnail Image Container */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                        <img
                          src={prog.coverImage}
                          alt={prog.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Clean Badges (Daikin Dark Blue / Emerald - No Yellow) */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="bg-[#003B71] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
                            {prog.level}
                          </span>
                          <span className={cn(
                            'text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-xs',
                            prog.badge === 'Terbuka' ? 'bg-emerald-600 text-white' : 'bg-gray-700 text-white'
                          )}>
                            {prog.badge}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-5 flex flex-col flex-1 bg-white">
                        
                        {/* Title */}
                        <h3 className="font-extrabold text-gray-900 text-sm md:text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#0097E0] transition-colors">
                          {prog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
                          {prog.excerpt}
                        </p>

                        {/* Meta Duration & Location */}
                        <div className="space-y-1.5 text-xs text-gray-600 pb-4 border-b border-gray-100">
                          <div className="flex items-center gap-1.5 font-semibold text-[#0097E0]">
                            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                            <span>Durasi: {prog.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-500 truncate">
                            <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                            <span className="truncate">{prog.location}</span>
                          </div>
                        </div>

                        {/* Card Action */}
                        <div className="pt-4">
                          <button
                            onClick={() => setSelectedProg(prog)}
                            className="w-full py-2.5 bg-[#0097E0] hover:bg-[#0080BD] text-white text-xs font-bold rounded-xl transition-all shadow-2xs flex items-center justify-center gap-1.5"
                          >
                            <GraduationCap className="w-4 h-4" />
                            <span>Daftar Pelatihan / Detail</span>
                          </button>
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

          {/* Interactive Modal Registration & Course Detail */}
          <AnimatePresence>
            {selectedProg && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-gray-100 relative overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 p-2 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {isRegistered ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle className="w-9 h-9" />
                      </div>
                      <h3 className="text-2xl font-black text-gray-900">Pendaftaran Terkirim!</h3>
                      <p className="text-xs md:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                        Terima kasih <strong>{formData.name}</strong>. Tim Daikin Training Center akan menghubungi Anda via email <strong>{formData.email}</strong> untuk verifikasi jadwal.
                      </p>
                      <button
                        onClick={closeModal}
                        className="px-6 py-3 bg-[#0097E0] text-white font-bold text-xs rounded-xl hover:bg-[#0080BD] transition-all"
                      >
                        Selesai
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#0097E0] text-[11px] font-bold uppercase tracking-wider mb-3">
                        <GraduationCap className="w-3.5 h-3.5" /> Detail & Pendaftaran Training
                      </div>

                      <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">
                        {selectedProg.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {selectedProg.excerpt}
                      </p>

                      {/* Course Highlights */}
                      <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-5 space-y-2">
                        <h4 className="text-[11px] font-bold uppercase text-gray-500 tracking-wider mb-2">Kurikulum Pelatihan:</h4>
                        <ul className="space-y-1.5 text-xs text-gray-700">
                          {selectedProg.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-2 text-[11px] text-gray-500 border-t border-gray-200/80 flex items-center gap-1.5 mt-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
                          <span>Syarat: {selectedProg.prerequisite}</span>
                        </div>
                      </div>

                      <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">Nama Lengkap *</label>
                          <input
                            type="text"
                            required
                            placeholder="Masukkan nama lengkap..."
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-[#0097E0]"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                            <input
                              type="email"
                              required
                              placeholder="nama@email.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-[#0097E0]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">No. WhatsApp *</label>
                            <input
                              type="tel"
                              required
                              placeholder="0812xxxxxxx"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-[#0097E0]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">Pilihan Gelombang Pelatihan</label>
                          <select
                            value={formData.batch}
                            onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-[#0097E0]"
                          >
                            <option value="Gelombang 1 (Agustus 2026)">Gelombang 1 (Agustus 2026)</option>
                            <option value="Gelombang 2 (September 2026)">Gelombang 2 (September 2026)</option>
                            <option value="Gelombang 3 (Oktober 2026)">Gelombang 3 (Oktober 2026)</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 mt-2"
                        >
                          <span>Kirim Pendaftaran Pelatihan</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  )}

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
            Ingin Mengadakan In-House Training Untuk Tim Perusahaan Anda?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Daikin Indonesia menyediakan program pelatihan kustom untuk teknisi gedung, kontraktor proyek, dan staf teknis institusi.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm transition-all shadow-md"
            >
              Hubungi Daikin Training Center
            </Link>
          </div>
        </div>
      </div>

    </PageTransition>
  )
}
