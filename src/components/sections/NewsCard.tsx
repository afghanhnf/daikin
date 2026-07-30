import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Calendar, ArrowRight, User } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { formatShortDate } from '@/utils/formatters'
import type { NewsArticle } from '@/types/news'

interface NewsCardProps {
  article: NewsArticle
  featured?: boolean
}

const categoryMeta: Record<string, {
  label: string
  variant: 'blue' | 'gray' | 'new' | 'promo'
  gradient: string
  bgLabel: string
}> = {
  news:      { label: 'Berita',   variant: 'blue',  gradient: 'from-daikin-blue-dark to-daikin-blue',  bgLabel: 'NEWS'     },
  promotion: { label: 'Promo',    variant: 'promo',  gradient: 'from-amber-500 to-orange-600',          bgLabel: 'PROMO'    },
  event:     { label: 'Event',    variant: 'new',    gradient: 'from-emerald-600 to-teal-700',           bgLabel: 'EVENT'    },
  training:  { label: 'Training', variant: 'gray',   gradient: 'from-violet-600 to-purple-700',          bgLabel: 'TRAINING' },
  csr:       { label: 'CSR',      variant: 'gray',   gradient: 'from-green-700 to-emerald-900',          bgLabel: 'CSR'      },
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'id'

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      <Link to={`/insights/news/${article.slug}`} className="flex flex-col h-full">

        {/* Cover Thumbnail */}
        <div className={`relative overflow-hidden bg-gray-100 ${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
          <img
            src={article.coverImage}
            alt={article.title[lang]}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Card Body */}
        <div className="p-5 md:p-6 flex flex-col flex-1 bg-white">
          {/* Title */}
          <h3 className="font-bold text-[#0097E0] text-base md:text-[17px] leading-snug mb-2 line-clamp-2 group-hover:text-daikin-blue-dark transition-colors">
            {article.title[lang]}
          </h3>

          {/* Meta (oleh Author - Date) */}
          <div className="text-[12px] text-gray-400 font-normal mb-3">
            oleh {article.author || 'Daikin Indonesia'} · {formatShortDate(article.publishedAt)}
          </div>

          {/* Excerpt */}
          <p className="text-xs md:text-[13px] text-gray-400 leading-relaxed line-clamp-3 font-normal mb-4 flex-1">
            {article.excerpt[lang]}
          </p>
        </div>
      </Link>
    </div>
  )
}
