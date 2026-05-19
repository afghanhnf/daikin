import { useState } from 'react'
import { Search } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import NewsCard from '@/components/sections/NewsCard'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { newsArticles } from '@/data/news'

const categories = ['Semua', 'news', 'csr', 'training', 'event']
const categoryLabels: Record<string, string> = { news: 'Berita', csr: 'CSR', training: 'Training', event: 'Event' }

export default function News() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filtered = newsArticles.filter((a) => {
    const matchCat = activeCategory === 'Semua' || a.category === activeCategory
    const matchSearch = !search || a.title.id.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <PageTransition>
      <PageMeta title="Berita & Update" canonical="/insights/news" />

      <div className="bg-gradient-to-br from-daikin-blue-dark to-daikin-blue pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Insights', path: '/insights' }, { label: 'Berita & Update' }]} className="text-white mb-6" />
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Berita & Update</h1>
            <p className="text-white/80 text-xl max-w-2xl">Ikuti berita dan perkembangan terbaru dari Daikin Indonesia.</p>
          </FadeInUp>
        </div>
      </div>

      <section className="section-container">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari berita..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-9"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 text-sm rounded-btn border transition-all ${
                  activeCategory === cat ? 'bg-daikin-blue text-white border-daikin-blue' : 'bg-white border-soft-gray-2 text-gray-600 hover:border-daikin-blue'
                }`}
              >
                {cat === 'Semua' ? 'Semua' : categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">Tidak ada berita yang sesuai pencarian.</div>
        ) : (
          <FadeInUp stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <FadeInItem key={article.id}><NewsCard article={article} /></FadeInItem>
            ))}
          </FadeInUp>
        )}
      </section>
    </PageTransition>
  )
}
