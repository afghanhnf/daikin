import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Zap, Check, Phone } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import ProductCard from '@/components/sections/ProductCard'
import { getProductBySlug, products } from '@/data/products'

export default function ProductDetail() {
  const { productSlug } = useParams<{ productSlug: string }>()
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'id'

  const product = getProductBySlug(productSlug ?? '')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Produk tidak ditemukan</h2>
          <Link to="/products" className="btn-primary inline-flex">Kembali ke Produk</Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => product.relatedIds?.includes(p.id))

  return (
    <PageTransition>
      <PageMeta
        title={product.name[lang]}
        description={product.tagline[lang]}
        canonical={`/products/${product.slug}`}
      />

      <div className="pt-24 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <Breadcrumb items={[
          { label: 'Produk', path: '/products' },
          { label: product.subcategory, path: `/products/${product.category}` },
          { label: product.name[lang] }
        ]} className="mb-6" />
      </div>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeInLeft>
            <div className="bg-soft-gray rounded-card overflow-hidden h-96 flex items-center justify-center">
              <img
                src={product.imageUrl}
                alt={product.name[lang]}
                className="w-full h-full object-contain p-8"
                loading="eager"
                width={500}
                height={384}
              />
            </div>
          </FadeInLeft>

          <FadeInRight>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-daikin-blue uppercase tracking-wide">{product.subcategory}</span>
              {product.badge && (
                <Badge variant={product.badge === 'new' ? 'new' : product.badge === 'bestseller' ? 'bestseller' : 'promo'}>
                  {product.badge === 'new' ? 'Baru' : product.badge === 'bestseller' ? 'Terlaris' : 'Promo'}
                </Badge>
              )}
              {product.isInverter && (
                <div className="flex items-center gap-1 bg-daikin-blue text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  <Zap className="w-3 h-3" />
                  Inverter
                </div>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">{product.name[lang]}</h1>
            <p className="text-xl text-daikin-blue font-semibold mb-4">{product.tagline[lang]}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description[lang]}</p>

            {/* Specs */}
            <div className="bg-soft-gray rounded-card p-5 mb-6">
              <h3 className="font-bold text-charcoal mb-3">Spesifikasi Utama</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-gray-500">Kapasitas:</span> <span className="font-semibold">{product.specs.pk} PK ({product.specs.btu} BTU)</span></div>
                <div><span className="text-gray-500">Voltase:</span> <span className="font-semibold">{product.specs.voltage}V</span></div>
                <div><span className="text-gray-500">Cakupan Ruangan:</span> <span className="font-semibold">~{product.specs.coverage_m2} m²</span></div>
                {product.specs.powerInput && <div><span className="text-gray-500">Daya Input:</span> <span className="font-semibold">{product.specs.powerInput}W</span></div>}
                {product.specs.cop && <div><span className="text-gray-500">COP:</span> <span className="font-semibold">{product.specs.cop}</span></div>}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-bold text-charcoal mb-3">Fitur Unggulan</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-daikin-blue flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>


            <div className="flex flex-wrap gap-3">
              <Button size="lg">
                <Phone className="w-5 h-5" />
                Hubungi Dealer
              </Button>
              <Link to="/services/ishop">
                <Button variant="secondary" size="lg">Cari iShop Terdekat</Button>
              </Link>
            </div>
          </FadeInRight>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-bg-light">
          <div className="section-container">
            <h2 className="text-2xl font-bold text-charcoal mb-8">Produk Terkait</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  )
}
