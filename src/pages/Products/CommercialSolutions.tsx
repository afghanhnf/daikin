import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeading from '@/components/sections/SectionHeading'
import ProductCard from '@/components/sections/ProductCard'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { getProductsByCategory } from '@/data/products'

export default function CommercialSolutions() {
  const products = getProductsByCategory('commercial')

  return (
    <PageTransition>
      <PageMeta title="Commercial Solutions" canonical="/products/commercial" />

      <div className="bg-gradient-to-br from-daikin-blue-dark to-daikin-blue pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Produk', path: '/products' }, { label: 'Commercial Solutions' }]} className="text-white mb-6" />
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Commercial Solutions</h1>
            <p className="text-white/80 text-xl max-w-2xl">Sistem VRV, Sky Air, dan solusi HVAC-R untuk gedung perkantoran, hotel, mall, dan fasilitas industri.</p>
          </FadeInUp>
        </div>
      </div>

      <section className="section-container">
        <SectionHeading title="Produk Komersial" subtitle="Solusi pendingin udara skala besar dengan efisiensi dan fleksibilitas tinggi." />
        <FadeInUp stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <FadeInItem key={product.id}>
              <ProductCard product={product} />
            </FadeInItem>
          ))}
        </FadeInUp>

        <div className="mt-16 bg-daikin-blue-50 rounded-card p-8">
          <h3 className="text-xl font-bold text-charcoal mb-3">Butuh Konsultasi Proyek?</h3>
          <p className="text-gray-600 mb-4">Tim ahli Daikin siap membantu merancang solusi HVAC-R terbaik untuk proyek Anda.</p>
          <a href="/services/proshop" className="btn-primary inline-flex items-center gap-2">Hubungi ProShop</a>
        </div>
      </section>
    </PageTransition>
  )
}
