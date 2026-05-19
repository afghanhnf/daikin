export type ProductCategory = 'residential' | 'commercial' | 'accessory' | 'spare-part'
export type ProductBadge = 'new' | 'bestseller' | 'promo'

export interface ProductSpec {
  pk: number
  btu: number
  voltage: number
  coverage_m2: number
  powerInput?: number
  cop?: number
}

export interface Product {
  id: string
  slug: string
  category: ProductCategory
  subcategory: string
  name: { id: string; en: string }
  tagline: { id: string; en: string }
  description: { id: string; en: string }
  imageUrl: string
  specs: ProductSpec
  features: string[]
  isInverter: boolean
  badge?: ProductBadge
  priceRange: string
  relatedIds?: string[]
}
