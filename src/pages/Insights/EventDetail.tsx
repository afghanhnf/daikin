import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Calendar, Clock, MapPin, User, ArrowLeft, ArrowRight,
  Share2, Copy, Check, Facebook, Twitter, Linkedin, MessageCircle,
  FileText, Sparkles, Tag, ChevronLeft, ChevronRight
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import { formatDate } from '@/utils/formatters'
import { getEventBySlug, getAdjacentEvents, getRelatedEvents } from '@/data/events'

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'id'

  const [copied, setCopied] = useState(false)

  const event = getEventBySlug(slug || '')

  if (!event) {
    return (
      <PageTransition>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-36 pb-20">
          <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-daikin-blue mb-4">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold font-display text-charcoal mb-2">
            Laporan Kegiatan Tidak Ditemukan
          </h1>
          <p className="text-slate-500 text-sm mb-6 max-w-md">
            Laporan kegiatan atau event yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
          </p>
          <Link
            to="/insights/events"
            className="px-6 py-2.5 bg-daikin-blue text-white font-bold text-xs rounded-xl hover:bg-daikin-blue-dark transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Laporan Kegiatan</span>
          </Link>
        </div>
      </PageTransition>
    )
  }

  const { prev, next } = getAdjacentEvents(event.slug)
  const relatedEvents = getRelatedEvents(event.slug, event.category, 3)

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareUrl = encodeURIComponent(window.location.href)
  const shareTitle = encodeURIComponent(event.title[lang])

  return (
    <PageTransition>
      <PageMeta
        title={`${event.title[lang]} | Laporan Kegiatan Daikin`}
        description={event.excerpt[lang]}
        canonical={`/insights/events/${event.slug}`}
      />

      {/* ── 1. HERO BANNER (MODEL PAGE BANNER) ────────────────────────────────── */}
      <div className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-br from-[#061834] via-daikin-blue-dark to-[#007bbf] text-white">
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }} 
        />
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Wawasan', path: '/insights' },
              { label: 'Laporan Kegiatan', path: '/insights/events' },
              { label: event.badge }
            ]}
            className="text-white/80 mb-6"
          />

          <FadeInUp>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-white/15 backdrop-blur-md border border-white/20 text-cyan-200 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                {event.badge}
              </span>
              <span className="text-white/80 text-xs flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(event.date, lang)}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-display tracking-tight">
              {event.title[lang]}
            </h1>

            <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-3xl font-sans">
              {event.excerpt[lang]}
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── 2. ARTICLE CONTENT AREA ───────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-slate-50 min-h-[60vh]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          
          {/* Main Cover Image */}
          <FadeInUp className="mb-12 rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
            <img
              src={event.coverImage}
              alt={event.title[lang]}
              className="w-full max-h-[480px] object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80'
              }}
            />
          </FadeInUp>

          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Main Report Body */}
            <div className="lg:col-span-8 space-y-8 bg-white p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-xs">
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-charcoal prose-p:text-slate-600 prose-p:leading-relaxed text-sm md:text-base">
                <div className="whitespace-pre-line">
                  {event.content[lang]}
                </div>
              </div>

              {/* Share Options */}
              <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-daikin-blue" />
                  Bagikan Laporan Ini:
                </span>
                
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                    title="Bagikan ke WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-sky-50 text-sky-500 hover:bg-sky-100 transition-colors"
                    title="Bagikan ke Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    title="Bagikan ke LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopy}
                    className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center gap-1.5 text-xs font-bold"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Tersalin' : 'Salin Tautan'}</span>
                  </button>
                </div>
              </div>

              {/* Prev / Next Navigation */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                {prev ? (
                  <Link
                    to={`/insights/events/${prev.slug}`}
                    className="p-4 rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/50 transition-all flex flex-col group"
                  >
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                      <ChevronLeft className="w-3.5 h-3.5" /> Laporan Sebelumnya
                    </span>
                    <span className="text-xs font-bold text-charcoal group-hover:text-daikin-blue transition-colors line-clamp-1">
                      {prev.title[lang]}
                    </span>
                  </Link>
                ) : <div />}

                {next ? (
                  <Link
                    to={`/insights/events/${next.slug}`}
                    className="p-4 rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/50 transition-all flex flex-col items-end text-right group"
                  >
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                      Laporan Selanjutnya <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-bold text-charcoal group-hover:text-daikin-blue transition-colors line-clamp-1">
                      {next.title[lang]}
                    </span>
                  </Link>
                ) : <div />}
              </div>

            </div>

            {/* Sidebar Event Summary Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xs space-y-5">
                <h3 className="font-extrabold font-display text-charcoal text-base border-b border-slate-100 pb-3">
                  Ringkasan Kegiatan
                </h3>

                <div className="space-y-4 text-xs font-sans text-slate-600">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-charcoal block">Tanggal Pelaksanaan</span>
                      <span>{formatDate(event.date, lang)}</span>
                    </div>
                  </div>

                  {event.time && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-charcoal block">Waktu</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-charcoal block">Lokasi Kegiatan</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {event.speaker && (
                    <div className="flex items-start gap-3">
                      <User className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-charcoal block">Penyelenggara / Pembicara</span>
                        <span>{event.speaker}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to="/insights/events"
                    className="w-full py-3 bg-sky-50 text-daikin-blue hover:bg-daikin-blue hover:text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Lihat Semua Laporan Kegiatan</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Related Event Reports */}
          {relatedEvents.length > 0 && (
            <div className="mt-16 space-y-8">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <h3 className="text-2xl font-extrabold font-display text-charcoal">
                  Laporan Kegiatan Lainnya
                </h3>
                <Link
                  to="/insights/events"
                  className="text-xs font-bold text-daikin-blue hover:text-daikin-blue-dark inline-flex items-center gap-1"
                >
                  <span>Lihat Semua</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedEvents.map((item) => (
                  <Link
                    key={item.id}
                    to={`/insights/events/${item.slug}`}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col group h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                      <img
                        src={item.coverImage}
                        alt={item.title[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-[#003B71] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                        {item.badge}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-[11px] font-medium text-slate-400 block">
                          {formatDate(item.date, lang)}
                        </span>
                        <h4 className="font-bold font-display text-charcoal text-sm group-hover:text-daikin-blue transition-colors line-clamp-2">
                          {item.title[lang]}
                        </h4>
                        <p className="text-xs text-slate-500 font-sans line-clamp-2 font-light">
                          {item.excerpt[lang]}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-daikin-blue group-hover:gap-2 transition-all">
                        <span>Baca Selengkapnya</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </PageTransition>
  )
}
