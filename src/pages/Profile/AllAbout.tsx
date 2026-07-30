import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2, Globe, Clock, Leaf, Zap, Wind, Award, ShieldCheck, 
  BookOpen, Calculator, Sparkles, FileText, Heart, TrendingUp, Users, 
  Briefcase, ArrowRight, CheckCircle2, ChevronRight 
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeading from '@/components/sections/SectionHeading'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import WaveBackground from '@/components/animations/WaveBackground'
import PichonKunHelper from '@/components/sections/PichonKunHelper'

interface InfoCardItem {
  id: string
  title: string
  description: string
  icon: React.FC<{ className?: string }>
  iconBg: string
  iconColor: string
  path: string
  badge?: string
}

interface InfoCategorySection {
  categoryId: string
  categoryTitle: string
  categorySubtitle: string
  cards: InfoCardItem[]
}

const categories: InfoCategorySection[] = [
  {
    categoryId: 'company',
    categoryTitle: 'Perusahaan & Filosofi',
    categorySubtitle: 'Profil, filosofi brand, sejarah, dan komitmen keberlanjutan Daikin.',
    cards: [
      {
        id: 'glance',
        title: 'Sekilas Daikin',
        description: 'Ringkasan fakta utama pencapaian dan jejak langkah Daikin di dunia & Indonesia.',
        icon: Building2,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/profile/about',
        badge: 'Profil Utama'
      },
      {
        id: 'daikin-group',
        title: 'Daikin Group & Filosofi',
        description: 'Filosofi bisnis, prinsip manajemen, dan jaringan global Daikin Industries, Ltd. Osaka.',
        icon: Globe,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/profile/daikin-group'
      },
      {
        id: 'history',
        title: 'Sejarah Kami (Sejak 1924)',
        description: 'Perjalanan satu abad Daikin menyempurnakan kualitas udara dunia sejak 1924.',
        icon: Clock,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/profile/history'
      },
      {
        id: 'csr',
        title: 'Daikin Impact (CSR)',
        description: 'Komitmen tanggung jawab sosial lingkungan dan kontribusi keberlanjutan Daikin.',
        icon: Leaf,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/profile/csr'
      }
    ]
  },
  {
    categoryId: 'technology',
    categoryTitle: 'Teknologi & Sertifikasi',
    categorySubtitle: 'Inovasi pendingin udara terdepan, teknologi pemurni, dan sertifikasi resmi.',
    cards: [
      {
        id: 'tech-overview',
        title: 'Teknologi & Inovasi',
        description: 'Inovasi teknologi pendinginan dan efisiensi energi terdepan khas Daikin.',
        icon: Zap,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/profile/technology'
      },
      {
        id: 'streamer',
        title: 'Streamer Technology',
        description: 'Teknologi pemurni udara eksklusif yang aktif mengeliminasi 99.9% virus & bakteri.',
        icon: Wind,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/profile/streamer',
        badge: 'Inovasi Unggulan'
      },
      {
        id: 'tkdn',
        title: 'Sertifikasi TKDN',
        description: 'Bukti komitmen produksi lokal Indonesia berstandar Tingkat Komponen Dalam Negeri.',
        icon: Award,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/profile/tkdn'
      },
      {
        id: 'pipa-ac',
        title: 'Inovasi Pipa AC DSP',
        description: 'DSP Insulation Pipe standar tinggi untuk pemasangan AC bebas kebocoran & kondensasi.',
        icon: ShieldCheck,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/products/dsp-pipe'
      }
    ]
  },
  {
    categoryId: 'campaigns',
    categoryTitle: 'Kampanye & Solusi Pintar',
    categorySubtitle: 'Kampanye global Daikin dan alat pintar rekomendasi pendingin udara.',
    cards: [
      {
        id: 'ideal-air',
        title: 'The Ideal Air Campaign',
        description: 'Inspirasi dan filosofi Daikin dalam menghadirkan udara ideal di setiap momen hidup.',
        icon: Sparkles,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/campaign/ideal-air',
        badge: 'Kampanye Global'
      },
      {
        id: 'power-to-create',
        title: 'The Power to Create',
        description: 'Inovasi 4 elemen utama udara (Suhu, Kelembapan, Kebersihan, Aliran Udara).',
        icon: TrendingUp,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/campaign/power-to-create'
      },
      {
        id: 'perfecting-air',
        title: 'Cerita Perfecting The Air',
        description: 'Kisah nyata tantangan tata udara di berbagai negara dan solusi inovatif Daikin.',
        icon: Heart,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/campaign/perfecting-air'
      },
      {
        id: 'ac-calc',
        title: 'Kalkulator AC Pintar',
        description: 'Hitung kebutuhan PK AC ruangan Anda secara presisi dalam 3 langkah mudah.',
        icon: Calculator,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/solutions/ac-recommendation',
        badge: 'Alat Rekomendasi'
      }
    ]
  },
  {
    categoryId: 'career-services',
    categoryTitle: 'Karir & Pelayanan',
    categorySubtitle: 'Bergabung bersama keluarga Daikin Indonesia dan layanan bantuan pelanggan terpadu.',
    cards: [
      {
        id: 'careers',
        title: 'Karir di Daikin',
        description: 'Temukan berbagai peluang karir menarik dan bertumbuh bersama Daikin Indonesia.',
        icon: Briefcase,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/careers',
        badge: 'Peluang Karir'
      },
      {
        id: 'warranty',
        title: 'Jaminan & Garansi Resmi',
        description: 'Perlindungan garansi resmi kompresor & sparepart terlengkap hingga 3-5 tahun.',
        icon: ShieldCheck,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/services/warranty'
      },
      {
        id: 'find-dealer',
        title: 'Cari Dealer Resmi & ProShop',
        description: 'Temukan toko iShop, Daikin ProShop, dan Dealer Resmi terdekat di kota Anda.',
        icon: Building2,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/information/find-dealer'
      },
      {
        id: 'dealer-partner',
        title: 'Kemitraan Dealer Resmi',
        description: 'Informasi dan persyaratan lengkap bergabung menjadi mitra Dealer Resmi Daikin.',
        icon: Users,
        iconBg: 'bg-daikin-blue-50',
        iconColor: 'text-daikin-blue',
        path: '/information/dealer'
      }
    ]
  }
]

export default function AllAbout() {
  return (
    <PageTransition>
      <PageMeta
        title="Pusat Informasi & Perusahaan | Daikin Indonesia"
        description="Jelajahi seluruh informasi lengkap Daikin Indonesia: Profil perusahaan, sejarah, filosofi, teknologi unggulan, kampanye global, karir, dan jaringan dealer resmi."
        canonical="/all-about"
      />

      {/* ── Hero Header ─────────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-daikin-blue-dark via-[#005580] to-daikin-blue pt-32 pb-24 lg:pt-40 lg:pb-32 text-white overflow-hidden">
        <WaveBackground color="white" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Perusahaan', path: '/profile/about' },
              { label: 'Pusat Informasi Tentang Daikin' }
            ]}
            className="text-white/80 mb-6"
          />

          <FadeInUp className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-cyan-200 border border-white/20">
              <Building2 className="w-3.5 h-3.5 text-cyan-300" />
              PORTAL INFORMASI TERPADU DAIKIN
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
              Tentang Daikin Indonesia
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed">
              Jelajahi seluruh direktori informasi perusahaan, profil bisnis, teknologi pendingin terdepan, kampanye global, hingga peluang karir dan layanan purna jual kami.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── Directory Grid Content ──────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          {categories.map((sec) => (
            <section key={sec.categoryId} className="space-y-6">
              <div className="border-b border-gray-200/80 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-charcoal">
                    {sec.categoryTitle}
                  </h2>
                  <p className="text-xs sm:text-sm font-sans text-gray-500 mt-1">
                    {sec.categorySubtitle}
                  </p>
                </div>
              </div>

              <FadeInUp stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sec.cards.map((card) => {
                  const Icon = card.icon
                  return (
                    <FadeInItem key={card.id}>
                      <Link
                        to={card.path}
                        className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-daikin-blue/40 transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden"
                      >
                        {/* Hover Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-daikin-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs ${card.iconBg}`}>
                              <Icon className={`w-6 h-6 ${card.iconColor}`} />
                            </div>
                            {card.badge && (
                              <span className="text-[10px] font-bold uppercase tracking-wider text-daikin-blue bg-daikin-blue-50 px-2.5 py-1 rounded-md border border-daikin-blue/15">
                                {card.badge}
                              </span>
                            )}
                          </div>

                          <div>
                            <h3 className="text-base font-bold font-display text-charcoal group-hover:text-daikin-blue transition-colors leading-snug">
                              {card.title}
                            </h3>
                            <p className="text-xs font-sans text-gray-500 leading-relaxed mt-2">
                              {card.description}
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-daikin-blue">
                          <span>Buka Informasi</span>
                          <div className="w-7 h-7 rounded-full bg-daikin-blue-50 group-hover:bg-daikin-blue group-hover:text-white flex items-center justify-center transition-colors">
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </FadeInItem>
                  )
                })}
              </FadeInUp>
            </section>
          ))}
        </div>
      </div>

      {/* ── Assistant Floating Component ───────────────────────────────── */}
      <PichonKunHelper />
    </PageTransition>
  )
}
