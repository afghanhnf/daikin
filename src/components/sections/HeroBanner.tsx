import React from 'react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface HeroBannerProps {
  title: string
  subtitle?: string
  imagePath: string
  breadcrumbItems: BreadcrumbItem[]
}

export default function HeroBanner({ title, subtitle, imagePath, breadcrumbItems }: HeroBannerProps) {
  return (
    <div className="relative pt-36 pb-28 overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imagePath} 
          alt={title} 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-daikin-blue-dark/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-daikin-blue-dark/95 via-daikin-blue-dark/60 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <Breadcrumb
          items={breadcrumbItems}
          className="text-white mb-8"
        />
        <FadeInUp>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">{title}</h1>
          {subtitle && (
            <p className="text-white/90 text-xl max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </FadeInUp>
      </div>
    </div>
  )
}
