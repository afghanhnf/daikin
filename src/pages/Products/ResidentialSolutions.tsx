import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ProductCard from '@/components/sections/ProductCard'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { getProductsByCategory } from '@/data/products'

const pkFilters = ['Semua', '0.5 PK', '1 PK', '1.5 PK', '2 PK']

export default function ResidentialSolutions() {
  const [inverterOnly, setInverterOnly] = useState(false)
  const [pkFilter, setPkFilter] = useState('Semua')
  const allProducts = getProductsByCategory('residential')

  const filtered = allProducts.filter((p) => {
    if (inverterOnly && !p.isInverter) return false
    if (pkFilter !== 'Semua') {
      const pk = parseFloat(pkFilter)
      if (p.specs.pk !== pk) return false
    }
    return true
  })

  return (
    <PageTransition>
      <PageMeta title="Produk Residential" canonical="/products/residential" />

      <div className="bg-gradient-to-br from-daikin-blue-dark to-daikin-blue pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Produk', path: '/products' }, { label: 'Residential Solutions' }]} className="text-white/60 mb-6" />
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Residential Solutions</h1>
            <p className="text-white/80 text-xl max-w-2xl">AC inverter dan standar untuk hunian — hemat energi, udara bersih, dan kontrol cerdas.</p>
          </FadeInUp>
        </div>
      </div>

      <section className="section-container">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-soft-gray rounded-card">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {pkFilters.map((f) => (
              <button
                key={f}
                onClick={() => setPkFilter(f)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                  pkFilter === f
                    ? 'bg-daikin-blue text-white border-daikin-blue'
                    : 'bg-white text-gray-600 border-soft-gray-2 hover:border-daikin-blue hover:text-daikin-blue'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 cursor-pointer ml-auto">
            <input
              type="checkbox"
              checked={inverterOnly}
              onChange={(e) => setInverterOnly(e.target.checked)}
              className="w-4 h-4 accent-daikin-blue rounded"
            />
            <span className="text-sm font-medium text-gray-600">Inverter Only</span>
          </label>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">Tidak ada produk yang sesuai filter.</div>
        ) : (
          <FadeInUp stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <FadeInItem key={product.id}>
                <ProductCard product={product} />
              </FadeInItem>
            ))}
          </FadeInUp>
        )}
      </section>
    </PageTransition>
  )
}
