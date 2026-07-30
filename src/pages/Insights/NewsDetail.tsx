import { useState, useEffect, useRef, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar, Clock, User, ArrowLeft, ArrowRight,
  Tag, Share2, Copy, Check,
  Facebook, Twitter, Instagram, Linkedin, ChevronLeft, ChevronRight,
  Search, Mail, CheckCircle, List, Sparkles, X, MessageCircle
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'
import { formatDate, formatShortDate } from '@/utils/formatters'
import { getNewsBySlug, getAdjacentArticles, getRelatedArticles, estimateReadTime } from '@/data/news'
import { cn } from '@/utils/cn'

// ─── Custom Threads Icon ────────────────────────────────────────────────

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24.004c-3.16 0-5.748-.86-7.484-2.487C3.01 19.941 2.2 17.48 2.2 14.37c0-3.327.91-5.992 2.706-7.92C6.772 4.45 9.47 3.447 12.72 3.447c3.272 0 5.922 1.002 7.876 2.98 1.838 1.86 2.76 4.444 2.76 7.68 0 3.237-.922 5.821-2.76 7.681-1.954 1.978-4.604 2.98-7.876 2.98zm-2.023-14.86c-1.393.28-2.408 1.258-2.408 2.59 0 1.488 1.267 2.617 3.013 2.617 1.05 0 2.016-.402 2.72-1.135V9.458c-.68-.262-1.636-.372-3.325-.314zm3.325 5.932c-.89.664-1.99.996-3.19.996-2.57 0-4.48-1.748-4.48-4.11 0-2.28 1.766-4.024 4.094-4.27 2.08-.22 3.576.017 4.54.507v-.472c0-2.02-.94-3.11-2.812-3.11-1.378 0-2.396.48-2.88 1.344l-1.362-.876C8.243 3.65 9.94 2.72 12.39 2.72c3.22 0 4.88 1.943 4.88 5.485v6.52c0 .944.33 1.38 1.05 1.38.38 0 .84-.14 1.28-.42l.73 1.38c-.75.56-1.68.86-2.61.86-1.57 0-2.52-.92-2.52-2.55v-.42c-.75.77-1.89 1.18-3.08 1.18z" />
    </svg>
  )
}

// ─── Category config ─────────────────────────────────────────────────

const CATEGORY_LABELS: Record<string, string> = {
  news: 'Berita', event: 'Event', training: 'Training', csr: 'CSR', promotion: 'Promo',
}

const CATEGORY_COLORS: Record<string, string> = {
  news:      'bg-daikin-blue text-white',
  event:     'bg-emerald-600 text-white',
  training:  'bg-violet-600 text-white',
  csr:       'bg-green-700 text-white',
  promotion: 'bg-amber-500 text-white',
}

const COVER_GRADIENT: Record<string, string> = {
  news:      'from-daikin-blue-dark to-daikin-blue',
  event:     'from-emerald-600 to-teal-700',
  training:  'from-violet-600 to-purple-700',
  csr:       'from-green-700 to-emerald-900',
}

interface TocItem {
  id: string
  text: string
  level: number
}

function extractToc(text: string): TocItem[] {
  const lines = text.split('\n')
  const toc: TocItem[] = []
  lines.forEach((line) => {
    const trimmed = line.trim()
    if (trimmed.startsWith('## ')) {
      const headingText = trimmed.slice(3)
      const id = headingText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      toc.push({ id, text: headingText, level: 2 })
    } else if (trimmed.startsWith('### ')) {
      const headingText = trimmed.slice(4)
      const id = headingText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      toc.push({ id, text: headingText, level: 3 })
    }
  })
  return toc
}

// ─── Markdown renderer with TOC IDs ──────────────────────────────────

function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split('\n')
  const nodes: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const raw = lines[i]
    const line = raw.trim()

    if (line === '') { i++; continue }

    if (line.startsWith('### ')) {
      const headingText = line.slice(4)
      const id = headingText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      nodes.push(
        <h3 id={id} key={i} className="text-lg font-bold text-gray-900 mt-8 mb-3 leading-snug scroll-mt-32">
          {headingText}
        </h3>
      )
    } else if (line.startsWith('## ')) {
      const headingText = line.slice(3)
      const id = headingText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      nodes.push(
        <h2 id={id} key={i} className="text-xl md:text-2xl font-extrabold text-gray-900 mt-10 mb-4 leading-snug pb-2 border-b border-gray-100 scroll-mt-32">
          {headingText}
        </h2>
      )
    } else if (line.startsWith('# ')) {
      nodes.push(<h1 key={i} className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-6 mb-5 leading-tight">{line.slice(2)}</h1>)
    } else if (line.startsWith('> ')) {
      nodes.push(
        <blockquote key={i} className="my-6 pl-5 border-l-4 border-[#0097E0] bg-[#0097E0]/5 rounded-r-xl py-4 pr-5">
          <p className="text-gray-700 italic leading-relaxed text-[15px]">{line.slice(2)}</p>
        </blockquote>
      )
    } else if (line.startsWith('- ')) {
      const items: string[] = [line.slice(2)]
      while (i + 1 < lines.length && lines[i + 1].trim().startsWith('- ')) {
        i++
        items.push(lines[i].trim().slice(2))
      }
      nodes.push(
        <ul key={i} className="my-4 space-y-2 pl-1">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-700 text-[15px] leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0097E0] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )
    } else {
      nodes.push(
        <p key={i} className="text-gray-700 leading-relaxed text-[15px] my-4">{line}</p>
      )
    }

    i++
  }
  return nodes
}

// ─── Share buttons ───────────────────────────────────────────────────

function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  const encodedUrl   = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200/80 hover:bg-emerald-600 hover:text-white',
    },
    {
      label: 'Instagram',
      icon: Instagram,
      href: `https://www.instagram.com/`,
      color: 'bg-pink-50 text-pink-600 border-pink-200/80 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white',
    },
    {
      label: 'Threads',
      icon: ThreadsIcon,
      href: `https://www.threads.net/intent/post?text=${encodedTitle}%20${encodedUrl}`,
      color: 'bg-stone-100 text-stone-800 border-stone-200 hover:bg-black hover:text-white',
    },
    {
      label: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-sky-50 text-sky-500 border-sky-200/80 hover:bg-black hover:text-white',
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-blue-50 text-blue-600 border-blue-200/80 hover:bg-blue-700 hover:text-white',
    },
    {
      label: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200/80 hover:bg-indigo-600 hover:text-white',
    },
  ]

  return (
    <div className="space-y-3.5">
      {/* Icon-only social share buttons grid */}
      <div className="grid grid-cols-6 gap-2">
        {shareLinks.map(({ label, icon: Icon, href, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Bagikan ke ${label}`}
            aria-label={`Bagikan ke ${label}`}
            className={cn(
              'h-10 w-full flex items-center justify-center rounded-xl border text-sm transition-all duration-200 hover:scale-105 shadow-xs',
              color
            )}
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      {/* Salin Link Button */}
      <button
        onClick={handleCopy}
        aria-label="Salin link artikel"
        className={cn(
          'w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-xs font-bold transition-all duration-200 shadow-xs',
          copied
            ? 'bg-emerald-50 text-emerald-600 border-emerald-300'
            : 'border-gray-200 text-gray-700 bg-gray-50 hover:bg-[#0097E0] hover:text-white hover:border-[#0097E0]'
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span key="check" initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" /> Link Tersalin!
            </motion.span>
          ) : (
            <motion.span key="copy" initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-2">
              <Copy className="w-4 h-4 text-[#0097E0]" /> Salin Link Artikel
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}

// ─── Read progress bar ────────────────────────────────────────────────

function ReadProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    function onScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      setPct(total > 0 ? Math.min(100, (scrollTop / total) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gray-200/60">
      <motion.div
        className="h-full bg-[#0097E0] rounded-r-full"
        style={{ width: `${pct}%` }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
      />
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { i18n } = useTranslation()
  const lang: 'id' | 'en' = i18n.language?.startsWith('en') ? 'en' : 'id'

  const [search, setSearch]             = useState('')
  const [activeToc, setActiveToc]       = useState('')
  const [emailInput, setEmailInput]     = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const article  = getNewsBySlug(slug ?? '')
  const adjacent = slug ? getAdjacentArticles(slug) : { prev: null, next: null }
  const related  = slug ? getRelatedArticles(slug, 3) : []

  const toc = useMemo(() => (article ? extractToc(article.content[lang]) : []), [article, lang])

  // Track active heading on scroll
  useEffect(() => {
    if (toc.length === 0) return
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160
      for (let i = toc.length - 1; i >= 0; i--) {
        const el = document.getElementById(toc[i].id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveToc(toc[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [toc])

  const scrollToToc = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const leftAsideRef  = useRef<HTMLElement>(null)
  const rightAsideRef = useRef<HTMLElement>(null)
  const [leftTranslateY, setLeftTranslateY]   = useState(0)
  const [rightTranslateY, setRightTranslateY] = useState(0)

  // Dynamic JS Scroll Tracking for Left & Right Sidebars
  useEffect(() => {
    const handleScroll = () => {
      const navbarOffset = 110

      if (leftAsideRef.current) {
        const leftAside = leftAsideRef.current
        const parentGrid = leftAside.parentElement
        if (parentGrid) {
          const gridRect = parentGrid.getBoundingClientRect()
          const asideHeight = leftAside.offsetHeight
          if (gridRect.top > navbarOffset) {
            setLeftTranslateY(0)
          } else {
            const maxTranslate = Math.max(0, parentGrid.offsetHeight - asideHeight)
            const currentTranslate = Math.min(Math.abs(gridRect.top - navbarOffset), maxTranslate)
            setLeftTranslateY(currentTranslate)
          }
        }
      }

      if (rightAsideRef.current) {
        const rightAside = rightAsideRef.current
        const parentGrid = rightAside.parentElement
        if (parentGrid) {
          const gridRect = parentGrid.getBoundingClientRect()
          const asideHeight = rightAside.offsetHeight
          if (gridRect.top > navbarOffset) {
            setRightTranslateY(0)
          } else {
            const maxTranslate = Math.max(0, parentGrid.offsetHeight - asideHeight)
            const currentTranslate = Math.min(Math.abs(gridRect.top - navbarOffset), maxTranslate)
            setRightTranslateY(currentTranslate)
          }
        }
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

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-[#F8FAFC]">
        <div className="text-center bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mx-auto mb-4">
            <ArrowLeft className="w-7 h-7 text-[#0097E0]" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Artikel tidak ditemukan</h2>
          <p className="text-gray-500 mb-6 text-xs leading-relaxed">Artikel yang Anda cari mungkin sudah dipindahkan atau tidak tersedia saat ini.</p>
          <Link to="/insights/news" className="inline-flex items-center gap-2 bg-[#0097E0] text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-[#0080BD] transition-colors shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Semua Berita
          </Link>
        </div>
      </div>
    )
  }

  const readTime = estimateReadTime(article.content[lang])
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const catLabel = CATEGORY_LABELS[article.category] ?? article.category
  const catColor = CATEGORY_COLORS[article.category] ?? 'bg-gray-600 text-white'

  return (
    <PageTransition>
      <ReadProgress />
      <PageMeta
        title={`${article.title[lang]} - Daikin Indonesia`}
        description={article.excerpt[lang]}
        canonical={`/insights/news/${article.slug}`}
        ogImage={article.coverImage}
      />

      {/* ── Page Hero Header ────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-[#003B71] via-[#0072CE] to-[#0097E0] text-white pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <Link
            to="/insights/news"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold transition-colors group mb-6 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Berita & Update
          </Link>

          <FadeInUp>
            <span className={cn('inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3 shadow-sm', catColor)}>
              {catLabel}
            </span>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl mb-4 tracking-tight">
              {article.title[lang]}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/80 text-xs md:text-sm font-medium">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-white/70" />{formatDate(article.publishedAt)}</span>
              {article.author && <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-white/70" />{article.author}</span>}
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-white/70" />{readTime} mins read</span>
            </div>
          </FadeInUp>

        </div>
      </div>

      {/* ── Main Content Area ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ══════════════════════════════════════════════════════════
                1. LEFT SIDEBAR: Search & Table of Contents (Sticky)
               ══════════════════════════════════════════════════════════ */}
            <aside
              ref={leftAsideRef}
              style={{ transform: `translateY(${leftTranslateY}px)` }}
              className="lg:col-span-3 space-y-6 self-start order-2 lg:order-1 transition-transform duration-75 ease-out"
            >
              
              {/* Quick Search */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3 px-1 flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#0097E0]" /> Cari Berita
                </h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (search.trim()) window.location.href = `/insights/news`
                  }}
                  className="flex items-center gap-2.5"
                >
                  <input
                    type="text"
                    placeholder="Cari artikel..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#0097E0]"
                  />
                  <Link
                    to="/insights/news"
                    className="px-4 py-2.5 bg-[#0097E0] hover:bg-[#0080BD] text-white text-xs font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center flex-shrink-0"
                  >
                    Cari
                  </Link>
                </form>
              </div>

              {/* Table of Contents (Daftar Isi) */}
              {toc.length > 0 && (
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                    <List className="w-4 h-4 text-[#0097E0]" /> Daftar Isi Artikel
                  </h4>
                  <nav className="space-y-1 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar text-xs">
                    {toc.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToToc(item.id)}
                        className={cn(
                          'w-full text-left py-1.5 px-2.5 rounded-lg transition-all line-clamp-2 block leading-relaxed',
                          item.level === 3 ? 'pl-5 text-[11px]' : 'font-medium',
                          activeToc === item.id
                            ? 'bg-[#0097E0]/10 text-[#0097E0] font-bold border-l-2 border-[#0097E0]'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        )}
                      >
                        {item.text}
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* Back to All News Button */}
              <Link
                to="/insights/news"
                className="w-full flex items-center justify-center gap-2 text-xs font-bold text-[#0097E0] bg-white hover:bg-[#0097E0] hover:text-white p-3 rounded-2xl border border-gray-200 transition-all shadow-sm group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Semua Berita Daikin
              </Link>

            </aside>


            {/* ══════════════════════════════════════════════════════════
                2. MIDDLE COLUMN: News Detail Content
               ══════════════════════════════════════════════════════════ */}
            <main className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              
              {/* Cover Image Box */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={article.coverImage}
                    alt={article.title[lang]}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Main Article Content Container */}
              <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
                
                {/* Excerpt Lead Paragraph */}
                <div className="text-sm md:text-base text-gray-700 leading-relaxed font-semibold mb-6 pb-6 border-b border-gray-100 bg-sky-50/50 p-4 rounded-2xl border-l-4 border-[#0097E0]">
                  {article.excerpt[lang]}
                </div>

                {/* Rendered Body */}
                <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
                  {renderMarkdown(article.content[lang])}
                </div>

                {/* Author Card */}
                {article.author && (
                  <div className="mt-10 p-5 bg-gradient-to-r from-sky-50 to-blue-50/40 rounded-2xl border border-sky-100 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0097E0] text-white font-bold flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                      DK
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#0097E0] uppercase tracking-wider mb-0.5">Penulis & Redaksi</p>
                      <h5 className="font-bold text-gray-900 text-xs md:text-sm">{article.author}</h5>
                      <p className="text-[11px] text-gray-500">Official Daikin Airconditioning Indonesia</p>
                    </div>
                  </div>
                )}

                {/* Adjacent Navigation */}
                {(adjacent.prev || adjacent.next) && (
                  <div className="grid sm:grid-cols-2 gap-4 pt-8 mt-8 border-t border-gray-100">
                    {adjacent.prev ? (
                      <Link
                        to={`/insights/news/${adjacent.prev.slug}`}
                        className="group flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200/80 hover:border-[#0097E0] hover:bg-[#0097E0]/5 transition-all text-left"
                      >
                        <div className="w-8 h-8 rounded-xl bg-gray-100 group-hover:bg-[#0097E0] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors text-gray-500">
                          <ChevronLeft className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Sebelumnya</p>
                          <p className="text-xs font-bold text-gray-800 group-hover:text-[#0097E0] transition-colors leading-snug line-clamp-1">
                            {adjacent.prev.title[lang]}
                          </p>
                        </div>
                      </Link>
                    ) : <div />}

                    {adjacent.next && (
                      <Link
                        to={`/insights/news/${adjacent.next.slug}`}
                        className="group flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200/80 hover:border-[#0097E0] hover:bg-[#0097E0]/5 transition-all text-right sm:flex-row-reverse"
                      >
                        <div className="w-8 h-8 rounded-xl bg-gray-100 group-hover:bg-[#0097E0] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors text-gray-500">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Berikutnya</p>
                          <p className="text-xs font-bold text-gray-800 group-hover:text-[#0097E0] transition-colors leading-snug line-clamp-1">
                            {adjacent.next.title[lang]}
                          </p>
                        </div>
                      </Link>
                    )}
                  </div>
                )}

              </article>
            </main>


            {/* ══════════════════════════════════════════════════════════
                3. RIGHT SIDEBAR: Promo Banner, Subscribe, Share & Tags (Sticky)
               ══════════════════════════════════════════════════════════ */}
            <aside
              ref={rightAsideRef}
              style={{ transform: `translateY(${rightTranslateY}px)` }}
              className="lg:col-span-3 space-y-6 self-start order-3 transition-transform duration-75 ease-out"
            >
              
              {/* Promotional Banner Card */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src="/images/promotions/daikin-promo-banner.png"
                    alt="Promo AC Daikin 2026"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow-sm">
                    Promo Spesial
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-2.5">
                  <h4 className="font-extrabold text-gray-900 text-xs md:text-sm leading-snug">
                    Promo Mid-Year Daikin Inverter 2026
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Dapatkan diskon hingga 30% + gratis biaya instalasi di dealer resmi Daikin iShop.
                  </p>
                  <Link
                    to="/insights/promotions"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0097E0] hover:text-[#0072CE] transition-colors pt-1"
                  >
                    Klaim Promo <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Social Share Box */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#0097E0]" /> Bagikan Artikel
                </h4>
                <ShareButtons url={shareUrl} title={article.title[lang]} />
              </div>

              {/* Article Tags / Topik */}
              {article.tags && article.tags.length > 0 && (
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#0097E0]" /> Tag & Topik
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-50 hover:bg-[#0097E0]/10 hover:text-[#0097E0] border border-gray-200/80 text-gray-600 text-xs font-semibold rounded-xl cursor-pointer transition-all"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Subscribe Box */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-2 text-[#0097E0] mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Langganan Artikel</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Dapatkan info berita & promo Daikin langsung ke email Anda.
                </p>

                {isSubscribed ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Terima kasih! Berhasil berlangganan.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2.5">
                    <input
                      type="email"
                      required
                      placeholder="Email Anda..."
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#0097E0]"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs transition-all shadow-sm"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

            </aside>

          </div>

        </div>
      </div>

      {/* ── Related Articles Section (Artikel Lainnya) ────────────────── */}
      {related.length > 0 && (
        <div className="bg-white py-14 border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold text-[#0097E0] uppercase tracking-wider">Rekomendasi Bacaan</span>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mt-0.5">Artikel Lainnya</h3>
              </div>
              <Link
                to="/insights/news"
                className="text-xs md:text-sm font-bold text-[#0097E0] hover:text-[#0072CE] flex items-center gap-1 transition-all"
              >
                Lihat Semua Berita <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group"
                >
                  <Link to={`/insights/news/${rel.slug}`} className="flex flex-col h-full">
                    <div className="relative overflow-hidden bg-gray-100 aspect-[16/10]">
                      <img
                        src={rel.coverImage}
                        alt={rel.title[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1 bg-white">
                      <h4 className="font-bold text-[#0097E0] text-sm md:text-base leading-snug mb-2 line-clamp-2 group-hover:underline transition-all">
                        {rel.title[lang]}
                      </h4>
                      <p className="text-xs text-gray-400 font-normal mb-3">
                        {formatShortDate(rel.publishedAt)}
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
                        {rel.excerpt[lang]}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* ── Bottom Call To Action Banner ──────────────────────────────── */}
      <div className="bg-[#003B71] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Ingin Solusi Tata Udara Terbaik Untuk Rumah Atau Kantor Anda?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Dapatkan rekomendasi AC Daikin Inverter dan penawaran terbaik dari dealer resmi Daikin Indonesia.
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
              Hubungi Tim Daikin
            </Link>
          </div>
        </div>
      </div>

    </PageTransition>
  )
}
