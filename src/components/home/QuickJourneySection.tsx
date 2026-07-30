import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ShieldCheck, MapPin, Building2, ChevronRight } from 'lucide-react'

interface QuickJourneyCard {
  id: string
  icon: React.FC<{ className?: string }>
  title: string
  description: string
  ctaText: string
  link: string
}

const cards: QuickJourneyCard[] = [
  {
    id: 'card-1',
    icon: Home,
    title: 'Rekomendasi AC mu',
    description: 'Temukan AC yang sesuai kebutuhan ruanganmu',
    ctaText: 'Panduan Memilih AC',
    link: '/solutions/ac-recommendation',
  },
  {
    id: 'card-2',
    icon: ShieldCheck,
    title: 'Jaminan & Garansi',
    description: 'Cek garansi, informasi servis dan buku penggunaan',
    ctaText: 'Jaminan & Garansi',
    link: '/services/warranty',
  },
  {
    id: 'card-3',
    icon: MapPin,
    title: 'Cari Dealer Resmi',
    description: 'Temukan dealer resmi Daikin terdekat di kota Anda',
    ctaText: 'Cari Dealer',
    link: '/information/find-dealer',
  },
  {
    id: 'card-4',
    icon: Building2,
    title: 'Tentang Daikin',
    description: 'Informasi profil, teknologi, solusi, inovasi, berita, dan karir',
    ctaText: 'Jelajahi Daikin',
    link: '/all-about',
  },
]

export const QuickJourneySection: React.FC = () => {
  return (
    <section className="-mt-10 sm:-mt-14 md:-mt-16 relative z-30 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-8 sm:mb-12">
      {/* Compact Floating Connected Bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="bg-white/95 backdrop-blur-md rounded-2xl border border-gray-100 shadow-[0_12px_36px_rgba(0,151,224,0.10),0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {cards.map((card) => {
            const IconComponent = card.icon
            return (
              <Link
                key={card.id}
                to={card.link}
                className="group relative p-3.5 sm:p-4 md:py-4.5 md:px-5 flex items-center gap-3.5 hover:bg-daikin-blue-50/50 transition-colors duration-200"
              >
                {/* Top accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-daikin-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Left: Icon Badge */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-daikin-blue-50 text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-sm">
                  <IconComponent className="w-5 h-5 stroke-[1.75]" />
                </div>

                {/* Right: Text Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-bold font-display text-charcoal group-hover:text-daikin-blue transition-colors duration-200 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-sans text-gray-500 mt-0.5 leading-normal">
                    {card.description}
                  </p>
                </div>

                {/* Far Right: Arrow Action */}
                <div className="w-6 h-6 rounded-full bg-daikin-blue-50/80 group-hover:bg-daikin-blue group-hover:text-white flex items-center justify-center transition-all duration-200 flex-shrink-0 transform group-hover:translate-x-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-daikin-blue group-hover:text-white transition-colors" />
                </div>
              </Link>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default QuickJourneySection
