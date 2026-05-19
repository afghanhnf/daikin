import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import { formatDate } from '@/utils/formatters'
import { getNewsBySlug } from '@/data/news'

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'id'

  const article = getNewsBySlug(slug ?? '')

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Artikel tidak ditemukan</h2>
          <Link to="/insights/news" className="btn-primary inline-flex">Kembali ke Berita</Link>
        </div>
      </div>
    )
  }

  return (
    <PageTransition>
      <PageMeta
        title={article.title[lang]}
        description={article.excerpt[lang]}
        canonical={`/insights/news/${article.slug}`}
        ogImage={article.coverImage}
      />

      <div className="pt-24 pb-4 px-4 md:px-8 max-w-4xl mx-auto">
        <Breadcrumb items={[{ label: 'Insights', path: '/insights' }, { label: 'Berita', path: '/insights/news' }, { label: article.title[lang] }]} className="mb-6" />
      </div>

      <article className="max-w-4xl mx-auto px-4 md:px-8 pb-16">
        <FadeInUp>
          <div className="h-72 md:h-96 rounded-card overflow-hidden mb-8 bg-soft-gray">
            <img src={article.coverImage} alt={article.title[lang]} className="w-full h-full object-cover" loading="eager" width={800} height={384} />
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDate(article.publishedAt)}</div>
            {article.author && <div className="flex items-center gap-1.5"><User className="w-4 h-4" />{article.author}</div>}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">{article.title[lang]}</h1>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p>{article.content[lang]}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-soft-gray-2">
            <Tag className="w-4 h-4 text-gray-400 mt-0.5" />
            {article.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-soft-gray text-gray-600 text-xs rounded-full">{tag}</span>
            ))}
          </div>
        </FadeInUp>

        <div className="mt-10">
          <Link to="/insights/news" className="inline-flex items-center gap-2 text-daikin-blue font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Semua Berita
          </Link>
        </div>
      </article>
    </PageTransition>
  )
}
