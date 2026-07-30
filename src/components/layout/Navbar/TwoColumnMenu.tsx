import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Building2, Zap, ArrowRight, BookOpen, Megaphone, Lightbulb } from 'lucide-react'
import type { NavChild } from '@/types/navigation'
import { cn } from '@/utils/cn'

const categoryIconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2,
  Zap,
  BookOpen,
  Megaphone,
  Lightbulb,
}

const categoryStyle: Record<string, { iconBg: string; iconText: string; labelText: string }> = {
  Building2: {
    iconBg:    'bg-daikin-blue-50',
    iconText:  'text-daikin-blue',
    labelText: 'text-daikin-blue',
  },
  Zap: {
    iconBg:    'bg-amber-50',
    iconText:  'text-amber-500',
    labelText: 'text-amber-600',
  },
  BookOpen: {
    iconBg:    'bg-violet-50',
    iconText:  'text-violet-500',
    labelText: 'text-violet-600',
  },
  Megaphone: {
    iconBg:    'bg-rose-50',
    iconText:  'text-rose-500',
    labelText: 'text-rose-600',
  },
  Lightbulb: {
    iconBg:    'bg-emerald-50',
    iconText:  'text-emerald-500',
    labelText: 'text-emerald-600',
  }
}

interface Group {
  label: string
  categoryIcon: string
  items: NavChild[]
}

function parseGroups(items: NavChild[]): Group[] {
  const groups: Group[] = []
  let current: Group | null = null
  for (const item of items) {
    if (item.isDivider) {
      if (current) groups.push(current)
      current = { label: item.groupLabel ?? '', categoryIcon: item.categoryIcon ?? '', items: [] }
    } else if (current) {
      current.items.push(item)
    }
  }
  if (current) groups.push(current)
  return groups
}

interface TwoColumnMenuProps {
  items: NavChild[]
  footerLink?: {
    title: string
    description: string
    buttonText: string
    path: string
  }
  footerLinks?: Array<{
    title: string
    description: string
    buttonText: string
    path: string
  }>
  onClose: () => void
}

export default function TwoColumnMenu({ items, footerLink, footerLinks, onClose }: TwoColumnMenuProps) {
  const { t } = useTranslation('nav')
  const location = useLocation()
  const groups = parseGroups(items)
  
  const colCount = groups.length
  const widthClass = colCount >= 3 ? "w-[900px]" : "w-[540px]"
  const gridClass = colCount >= 3 ? "grid-cols-3" : "grid-cols-2"
  const actionLinks = footerLinks ?? (footerLink ? [footerLink] : [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className={cn("absolute top-full mt-2 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100 z-50 overflow-hidden", widthClass, colCount >= 3 ? "-left-[340px]" : "left-0")}
    >
      <div className={cn("grid divide-x divide-gray-100", gridClass)}>
        {groups.map((group) => {
          const Icon   = categoryIconMap[group.categoryIcon]
          const style  = categoryStyle[group.categoryIcon] ?? categoryStyle.Building2

          return (
            <div key={group.label} className="p-3">
              {/* Category header */}
              <div className="px-2 py-2 mb-1">
                <span className={`text-xs font-bold ${style.labelText} uppercase tracking-widest whitespace-nowrap`}>
                  {group.label}
                </span>
              </div>

              {/* Menu items */}
              <div className="space-y-0.5">
                {group.items.map((item) =>
                  item.disabled ? (
                    <div
                      key={item.path}
                      className="px-2 py-2 rounded-lg pointer-events-none cursor-default"
                    >
                      <div className="text-sm font-semibold text-charcoal leading-tight">{t(item.labelKey)}</div>
                      {item.description && (
                        <div className="text-xs text-gray-400 mt-0.5 leading-snug">{item.description}</div>
                      )}
                    </div>
                  ) : (() => {
                    const isActive = location.pathname === item.path;
                    return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      className={cn(
                        "group flex items-start justify-between gap-2 px-2 py-2 rounded-lg transition-colors duration-150",
                        isActive ? "bg-daikin-blue-50" : "hover:bg-daikin-blue-50"
                      )}
                    >
                      <div className="min-w-0">
                        <div className={cn(
                          "text-sm font-semibold transition-colors leading-tight",
                          isActive ? "text-daikin-blue" : "text-charcoal group-hover:text-daikin-blue"
                        )}>
                          {t(item.labelKey)}
                        </div>
                        {item.description && (
                          <div className={cn(
                            "text-xs mt-0.5 leading-snug",
                            isActive ? "text-gray-500" : "text-gray-400"
                          )}>{item.description}</div>
                        )}
                      </div>
                      <ArrowRight className={cn(
                        "w-3.5 h-3.5 mt-0.5 flex-shrink-0 transition-all duration-200",
                        isActive
                          ? "text-daikin-blue opacity-100 translate-x-0"
                          : "text-gray-300 group-hover:text-daikin-blue opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                      )} />
                    </Link>
                    )
                  })()
                )}
              </div>
            </div>
          )
        })}
      </div>

      {actionLinks.length > 0 && (
        <div className="bg-daikin-blue-50/50 p-3 mt-1 border-t border-gray-100">
          <div className={cn("grid gap-2", actionLinks.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
            {actionLinks.map((action) => (
              <Link
                key={action.path}
                to={action.path}
                onClick={onClose}
                className="flex min-w-0 items-center justify-between gap-2 bg-white hover:bg-daikin-blue hover:shadow-md hover:-translate-y-0.5 rounded-xl px-3 py-2.5 border border-daikin-blue/10 transition-all duration-300 group"
              >
                <div className="min-w-0">
                  <div className="truncate text-xs font-bold text-daikin-blue-dark group-hover:text-white transition-colors">{action.title}</div>
                  <div className="truncate text-[10px] text-daikin-blue/70 group-hover:text-white/80 transition-colors mt-0.5">{action.description}</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 text-daikin-blue group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
