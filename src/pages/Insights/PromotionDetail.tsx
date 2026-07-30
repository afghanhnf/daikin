import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Calendar,
  Tag,
  ArrowLeft,
  ArrowRight,
  Gift,
  Copy,
  Check,
  Store,
  Clock,
  Info,
  Share2,
  MessageCircle,
  Facebook,
  Twitter
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import { formatDate, formatShortDate } from '@/utils/formatters'
import { getPromotionBySlug, promotionArticles } from '@/data/promotions'
import { cn } from '@/utils/cn'

export default function PromotionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'id'

  const promo = getPromotionBySlug(slug ?? '')
  const [copiedCode, setCopiedCode] = useState(false)

  if (!promo) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-[#F8FAFC]">
        <div className="text-center bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mx-auto mb-4">
            <Gift className="w-7 h-7 text-[#0097E0]" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Promo Tidak Ditemukan</h2>
          <p className="text-gray-500 mb-6 text-xs leading-relaxed">Promo yang Anda cari mungkin telah berakhir atau tidak tersedia saat ini.</p>
          <Link to="/insights/promotions" className="inline-flex items-center gap-2 bg-[#0097E0] text-white font-bold text-xs px-5 py-3 rounded-xl hover:bg-[#0080BD] transition-colors shadow-sm">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Semua Promo
          </Link>
        </div>
      </div>
    )
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2500)
  }

  const otherPromos = promotionArticles.filter((p) => p.slug !== promo.slug).slice(0, 3)

  return (
    <PageTransition>
      <PageMeta
        title={`${promo.title[lang]} - Promo Daikin Indonesia`}
        description={promo.excerpt[lang]}
        canonical={`/insights/promotions/${promo.slug}`}
        ogImage={promo.coverImage}
      />

      {/* ── Page Hero Header ────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-[#003B71] via-[#0072CE] to-[#0097E0] text-white pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <Link
            to="/insights/promotions"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold transition-colors group mb-6 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Daftar Promo
          </Link>

          <FadeInUp>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#0097E0] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                {promo.badge}
              </span>
              {promo.discount && (
                <span className="bg-white/20 text-white text-[11px] font-extrabold px-3 py-1 rounded-full backdrop-blur-xs">
                  {promo.discount}
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl mb-4 tracking-tight">
              {promo.title[lang]}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/80 text-xs md:text-sm font-medium">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-white/70" /> Dipublikasikan {formatDate(promo.publishedAt)}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-300 font-bold" /> Berlaku s/d {formatShortDate(promo.validUntil)}</span>
            </div>
          </FadeInUp>

        </div>
      </div>

      {/* ── Main Content Area ──────────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cover & Markdown Article */}
            <main className="lg:col-span-8 space-y-6">
              
              {/* Cover Image */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={promo.coverImage}
                    alt={promo.title[lang]}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Main Article Container */}
              <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-6">
                
                {/* Excerpt Lead */}
                <div className="text-sm md:text-base text-gray-700 leading-relaxed font-semibold pb-5 border-b border-gray-100 bg-sky-50/50 p-4 rounded-2xl border-l-4 border-[#0097E0]">
                  {promo.excerpt[lang]}
                </div>

                {/* Voucher Code Box */}
                {promo.code && (
                  <div className="bg-sky-50/80 border border-sky-200 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Kode Voucher Official</p>
                      <p className="text-xl font-black text-[#0097E0] tracking-wide">{promo.code}</p>
                    </div>
                    <button
                      onClick={() => handleCopyCode(promo.code!)}
                      className={cn(
                        'px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs',
                        copiedCode ? 'bg-emerald-600 text-white' : 'bg-[#0097E0] hover:bg-[#0080BD] text-white'
                      )}
                    >
                      {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedCode ? 'Voucher Tersalin!' : 'Salin Kode Voucher'}</span>
                    </button>
                  </div>
                )}

                {/* Syarat & Ketentuan */}
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-gray-700 tracking-wider flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-[#0097E0]" /> Syarat & Ketentuan Promo:
                  </h4>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                    {promo.terms.map((term, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0097E0] mt-2 flex-shrink-0" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Article Body Content */}
                <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed text-sm md:text-base pt-2">
                  {promo.content[lang].split('\n').map((para, i) => {
                    if (para.startsWith('# ')) return <h1 key={i} className="text-2xl font-black text-gray-900 mt-6 mb-4">{para.slice(2)}</h1>
                    if (para.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3 border-b border-gray-100 pb-2">{para.slice(3)}</h2>
                    if (para.startsWith('- ')) return <li key={i} className="ml-4 text-xs md:text-sm text-gray-700 my-1">{para.slice(2)}</li>
                    if (para.startsWith('> ')) return <blockquote key={i} className="my-4 italic border-l-4 border-[#0097E0] pl-4 text-gray-600 bg-sky-50/40 py-2 rounded-r-xl">{para.slice(2)}</blockquote>
                    if (para.trim() === '') return null
                    return <p key={i} className="my-3 text-xs md:text-sm text-gray-700 leading-relaxed">{para}</p>
                  })}
                </div>

                {/* Action CTA */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services/ishop"
                    className="flex-1 py-3.5 bg-[#0097E0] hover:bg-[#0080BD] text-white font-bold text-xs md:text-sm rounded-xl text-center transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Store className="w-4 h-4" />
                    <span>Cari Dealer iShop Terdekat Untuk Klaim Promo</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="py-3.5 px-6 border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-xs md:text-sm rounded-xl text-center transition-all"
                  >
                    Tanya CS Daikin
                  </Link>
                </div>

              </article>

            </main>

            {/* Right Column: Promo Info & Other Promos */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Promo Overview Box */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#0097E0]" /> Ringkasan Promo
                </h4>
                
                <div className="space-y-3 text-xs text-gray-600">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-400 font-medium">Kategori Promo:</span>
                    <span className="font-bold text-gray-800 uppercase">{promo.category}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-400 font-medium">Batas Waktu:</span>
                    <span className="font-bold text-emerald-600">{formatShortDate(promo.validUntil)}</span>
                  </div>
                  {promo.discount && (
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <span className="text-gray-400 font-medium">Keuntungan:</span>
                      <span className="font-extrabold text-[#0097E0]">{promo.discount}</span>
                    </div>
                  )}
                </div>

                <Link
                  to="/services/ishop"
                  className="w-full py-3 bg-[#0097E0] hover:bg-[#0080BD] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Store className="w-4 h-4" />
                  <span>Klaim Ke Dealer Official</span>
                </Link>
              </div>

              {/* Other Promos */}
              {otherPromos.length > 0 && (
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Promo Spesial Lainnya
                  </h4>

                  <div className="space-y-3">
                    {otherPromos.map((item) => (
                      <Link
                        key={item.id}
                        to={`/insights/promotions/${item.slug}`}
                        className="group flex gap-3 p-2.5 rounded-xl hover:bg-sky-50/60 transition-all border border-gray-100"
                      >
                        <img
                          src={item.coverImage}
                          alt={item.title[lang]}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-gray-800 group-hover:text-[#0097E0] transition-colors line-clamp-2 leading-snug">
                            {item.title[lang]}
                          </p>
                          <p className="text-[10px] text-emerald-600 font-semibold mt-1">
                            s/d {formatShortDate(item.validUntil)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </aside>

          </div>

        </div>
      </div>

    </PageTransition>
  )
}
