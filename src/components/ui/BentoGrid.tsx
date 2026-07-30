import React from 'react'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  )
}

interface BentoGridItemProps {
  className?: string
  title: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  index?: number
}

export function BentoGridItem({ className, title, description, header, icon, index = 0 }: BentoGridItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-2xl flex flex-col space-y-4 border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-6 overflow-hidden relative group hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300",
        "bg-white border-gray-100/50 text-charcoal", // Default styles
        className
      )}
    >
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-daikin-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {header && <div className="mb-2 relative z-10">{header}</div>}
      
      <div className="flex items-center gap-3 relative z-10">
        {icon && (
          <div className="flex-shrink-0 text-daikin-blue p-2 bg-daikin-blue/5 rounded-lg group-hover:bg-daikin-blue group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        )}
        <div className={cn("font-bold text-xl tracking-tight transition-colors duration-300", 
          className?.includes('text-white') ? "group-hover:text-daikin-blue-light" : "group-hover:text-daikin-blue"
        )}>
          {title}
        </div>
      </div>
      
      {description && (
        <div className={cn("text-sm md:text-base font-normal leading-relaxed relative z-10",
          className?.includes('text-white') ? "text-white/70" : "text-gray-600"
        )}>
          {description}
        </div>
      )}
    </motion.div>
  )
}
