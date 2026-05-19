import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Zap, ArrowRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import type { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'id'

  return (
    <Card padding="none" className="overflow-hidden group">
      <Link to={`/products/${product.slug}`}>
        <div className="relative h-52 bg-soft-gray overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name[lang]}
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={400}
            height={208}
          />
          {product.badge && (
            <div className="absolute top-3 left-3">
              <Badge variant={product.badge === 'new' ? 'new' : product.badge === 'bestseller' ? 'bestseller' : 'promo'}>
                {product.badge === 'new' ? 'Baru' : product.badge === 'bestseller' ? 'Terlaris' : 'Promo'}
              </Badge>
            </div>
          )}
          {product.isInverter && (
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-daikin-blue text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              <Zap className="w-3 h-3" />
              Inverter
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">{product.subcategory}</div>
          <h3 className="font-bold text-charcoal mb-1 group-hover:text-daikin-blue transition-colors">{product.name[lang]}</h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.tagline[lang]}</p>
          <div className="flex items-center justify-end">
            <span className="text-daikin-blue opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium">
              Detail <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </Card>
  )
}
