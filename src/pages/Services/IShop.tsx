import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeading from '@/components/sections/SectionHeading'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import { getDealersByType } from '@/data/dealers'

const benefits = ['Produk AC Daikin lengkap & original', 'Konsultasi gratis dengan ahli', 'Instalasi profesional bergaransi', 'Program cicilan 0%', 'Layanan after-sales terpercaya']

export default function IShop() {
  const ishops = getDealersByType('ishop')

  return (
    <PageTransition>
      <PageMeta title="iShop — Dealer Residential Daikin" canonical="/services/ishop" />

      <div className="bg-gradient-to-br from-daikin-blue-dark to-daikin-blue pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Layanan', path: '/services' }, { label: 'iShop' }]} className="text-white/60 mb-6" />
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">iShop</h1>
            <p className="text-white/80 text-xl max-w-2xl">Toko resmi Daikin untuk produk hunian. Pengalaman berbelanja AC terbaik dengan layanan lengkap dari konsultasi hingga instalasi.</p>
          </FadeInUp>
        </div>
      </div>

      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <FadeInLeft>
            <div className="accent-line" />
            <h2 className="section-heading">Mengapa Belanja di iShop?</h2>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-daikin-blue flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {b}
                </li>
              ))}
            </ul>
          </FadeInLeft>
          <FadeInRight>
            <div className="bg-daikin-blue-50 rounded-card h-72 flex items-center justify-center">
              <img src="/images/services/ishop-interior.svg" alt="iShop" className="w-full h-full object-cover rounded-card" loading="lazy" width={600} height={288} />
            </div>
          </FadeInRight>
        </div>

        <SectionHeading title="Lokasi iShop" subtitle="Temukan iShop Daikin terdekat di kota Anda." />
        <FadeInUp stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ishops.map((dealer) => (
            <FadeInItem key={dealer.id}>
              <div className="floating-card p-5">
                <h3 className="font-bold text-charcoal mb-2">{dealer.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{dealer.address}</p>
                <p className="text-sm text-daikin-blue font-medium mb-1">{dealer.phone}</p>
                {dealer.openHours && <p className="text-xs text-gray-400">{dealer.openHours}</p>}
              </div>
            </FadeInItem>
          ))}
        </FadeInUp>
      </section>
    </PageTransition>
  )
}
