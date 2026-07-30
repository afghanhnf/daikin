import React from 'react'
import Breadcrumb from './Breadcrumb'
import { cn } from '@/utils/cn'

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: { label: string; path?: string }[]
  className?: string
  children?: React.ReactNode
}

export default function PageHeader({ title, subtitle, breadcrumbs, className, children }: PageHeaderProps) {
  return (
    <div className={cn(
      "relative bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue text-white overflow-hidden",
      "pt-32 pb-16 lg:pt-40 lg:pb-24",
      className
    )}>
      {/* Decorative background elements for premium feel */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} className="text-white/80" />
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
