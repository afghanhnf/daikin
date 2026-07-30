import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Building2, Award, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Store } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeading from '@/components/sections/SectionHeading'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import PichonKunHelper from '@/components/sections/PichonKunHelper'
import WaveBackground from '@/components/animations/WaveBackground'

interface DealerTypeCard {
  id: string
  badge: string
  badgeColor: string
  title: string
  subtitle: string
  description: string
  icon: React.FC<{ className?: string }>
  iconBg: string
  iconColor: string
  highlights: string[]
  targetAudience: string
  ctaText: string
  path: string
  gradient: string
}

const dealerTypes: DealerTypeCard[] = [
  {
    id: 'ishop',
    badge: 'AC Hunian & Rumah',
    badgeColor: 'bg-daikin-blue-50 text-daikin-blue border-daikin-blue/20',
    title: 'Daikin iShop',
    subtitle: 'Dealer Resmi AC Hunian & Keluarga',
    description: 'Toko resmi Daikin yang berfokus melayani kebutuhan AC rumah tinggal, apartemen, dan hunian keluarga. Didukung teknisi bersertifikat resmi, jaminan unit original 100%, serta garansi resmi Daikin Indonesia.',
    icon: Home,
    iconBg: 'bg-daikin-blue-50',
    iconColor: 'text-daikin-blue',
    highlights: [
      'Khusus produk AC Residensial (Single Split, Multi-Split, Air Purifier)',
      'Teknisi instalasi tersertifikasi resmi iShop Daikin dengan pengerjaan rapi',
      'Konsultasi gratis penentuan kapasitas PK sesuai luas & kondisi ruangan',
      'Ruang pamer showroom fisik untuk menguji langsung keheningan & hembusan dingin AC'
    ],
    targetAudience: 'Rumah Tinggal, Apartemen, & Ruangan Keluarga',
    ctaText: 'Masuk ke Dealer iShop',
    path: '/services/ishop',
    gradient: 'from-daikin-blue to-daikin-blue-dark'
  },
  {
    id: 'proshop',
    badge: 'Komersial & Hunian Mewah',
    badgeColor: 'bg-amber-50 text-amber-900 border-amber-300/80 font-bold',
    title: 'Daikin ProShop',
    subtitle: 'Dealer Spesialis AC Komersial & Proyek',
    description: 'Dealer spesialis pendingin udara kelas premium dan komersial. Menyediakan layanan konsultasi tata udara kustom dengan analisis desain 3D (3D Airflow Design) untuk hunian mewah, ruko, kantor, restoran, dan tempat usaha.',
    icon: Building2,
    iconBg: 'bg-amber-100/90',
    iconColor: 'text-amber-600',
    highlights: [
      'Khusus AC Komersial (VRV Home, SkyAir Cassette, Ducted, Packaged AC)',
      'Analisis & Perancangan Tata Udara 3D (3D Air Flow Design)',
      'Tim Engineer & Installer spesialis proyek berketerampilan tinggi',
      'Integrasi estetika arsitektur interior dengan pendinginan presisi terintegrasi'
    ],
    targetAudience: 'Hunian Mewah, Ruko, Perkantoran, Restoran, & Ruang Usaha',
    ctaText: 'Masuk ke Dealer ProShop',
    path: '/services/proshop',
    gradient: 'from-amber-400 via-amber-500 to-yellow-600'
  },
  {
    id: 'vrv',
    badge: 'Sistem VRV & Gedung Bertingkat',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    title: 'VRV Certified Dealer',
    subtitle: 'Dealer Terotorisasi Sistem VRV Proyek Besar',
    description: 'Dealer dengan tingkat sertifikasi kualifikasi tertinggi dari Daikin Industries. Berfokus pada perancangan teknis kompleks, komisioning, dan pemeliharaan sistem Daikin VRV untuk gedung bertingkat & proyek skala besar.',
    icon: Award,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    highlights: [
      'Kualifikasi & Sertifikasi Resmi Tertinggi Daikin VRV (Variable Refrigerant Volume)',
      'Spesialis penanganan proyek skala besar (Gedung Perkantoran, Hotel, Rumah Sakit, Pabrik, Mall)',
      'Perencanaan sistem tata udara gedung kompleks & efisiensi daya maksimal',
      'Kontrak layanan pemeliharaan berkala & jaminan dukungan suku cadang resmi VRV'
    ],
    targetAudience: 'Gedung Perkantoran, Hotel, Rumah Sakit, Pabrik, & Mall',
    ctaText: 'Masuk ke VRV Certified Dealer',
    path: '/services/vrv-dealer',
    gradient: 'from-teal-600 to-cyan-800'
  }
]

export default function FindDealer() {
  return (
    <PageTransition>
      <PageMeta 
        title="Cari Dealer Resmi - iShop, ProShop & VRV Certified Dealer Daikin" 
        description="Temukan perbedaan dan layanan dari dealer resmi Daikin Indonesia: iShop untuk hunian, ProShop untuk komersial, dan VRV Certified Dealer untuk proyek gedung."
        canonical="/information/find-dealer" 
      />

      {/* ── Modern Premium Hero Banner ─────────────────────────────── */}
      <div className="relative pt-36 pb-32 overflow-hidden bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#007bbf] text-white">
        {/* Dot pattern & ambient glows */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }} 
        />
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-40 -bottom-40 w-[600px] h-[600px] bg-daikin-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb 
            items={[{ label: 'Layanan & Dealer', path: '/services' }, { label: 'Cari Dealer Resmi' }]} 
            className="text-white/80 mb-8" 
          />

          <div className="max-w-3xl">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-sky-400/15 text-cyan-200 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md border border-cyan-300/25 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                DAIKIN OFFICIAL DEALER NETWORK
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
                Jaringan Dealer Resmi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white font-light">
                  Daikin Indonesia
                </span>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/90 leading-relaxed">
                Pilih tipe dealer resmi Daikin yang sesuai dengan skala kebutuhan Anda. Kami mengelompokkan dealer resmi menjadi 3 kategori spesialis untuk menjamin kualitas konsultasi, produk original, dan teknisi bersertifikat.
              </p>
            </FadeInUp>
          </div>
        </div>

        {/* Wave shape transition to body section */}
        <WaveBackground />
      </div>

      {/* ── Main Section: 3 Feature Comparison Cards ───────────────── */}
      <section className="py-16 md:py-24 bg-soft-gray/50 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <SectionHeading
            title="Pilih Kategori Dealer Sesuai Kebutuhan Anda"
            subtitle="Pahami perbedaan utama antara iShop, ProShop, dan VRV Certified Dealer sebelum melanjutkan ke halaman rincian lokasi."
            centered
            className="mb-12"
          />

          <FadeInUp stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {dealerTypes.map((dealer) => {
              const IconComponent = dealer.icon
              const isProShop = dealer.id === 'proshop'

              return (
                <FadeInItem key={dealer.id} className="h-full">
                  <div className={`bg-white rounded-2xl border ${isProShop ? 'border-amber-300/80 shadow-[0_8px_30px_rgba(217,119,6,0.08)] hover:shadow-[0_16px_40px_rgba(217,119,6,0.20)] hover:border-amber-500' : 'border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(0,151,224,0.12)] hover:border-daikin-blue/30'} transition-all duration-300 flex flex-col justify-between h-full overflow-hidden group relative`}>
                    
                    {/* Top Accent Gradient Header Line */}
                    <div className={`h-2 w-full bg-gradient-to-r ${dealer.gradient}`} />

                    <div className="p-6 sm:p-8 flex-1 flex flex-col">
                      {/* Badge & Icon Header */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${dealer.badgeColor}`}>
                          {dealer.badge}
                        </span>
                        <div className={`w-12 h-12 rounded-xl ${dealer.iconBg} ${dealer.iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                          <IconComponent className="w-6 h-6 stroke-[1.75]" />
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h2 className={`text-2xl font-bold font-display ${isProShop ? 'text-charcoal group-hover:text-amber-600' : 'text-charcoal group-hover:text-daikin-blue'} transition-colors duration-200 mb-1`}>
                        {dealer.title}
                      </h2>
                      <p className={`text-xs font-semibold ${isProShop ? 'text-amber-700' : 'text-daikin-blue'} mb-4`}>
                        {dealer.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm font-sans text-gray-600 leading-relaxed mb-6">
                        {dealer.description}
                      </p>

                      {/* Highlights List */}
                      <div className="pt-5 border-t border-gray-100 mb-6 flex-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3.5">
                          Keunggulan & Karakteristik:
                        </p>
                        <ul className="space-y-2.5">
                          {dealer.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-gray-700">
                              <CheckCircle2 className={`w-4 h-4 ${isProShop ? 'text-amber-500' : 'text-daikin-blue'} flex-shrink-0 mt-0.5`} />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Target Audience Box */}
                      <div className={`${isProShop ? 'bg-amber-50/70 border-amber-200/60' : 'bg-soft-gray/80 border-gray-150'} rounded-xl p-3.5 mb-6 border`}>
                        <p className="text-[11px] font-semibold uppercase text-gray-400 tracking-wider">
                          Direkomendasikan Untuk:
                        </p>
                        <p className={`text-xs font-bold font-sans ${isProShop ? 'text-amber-900' : 'text-charcoal'} mt-0.5`}>
                          {dealer.targetAudience}
                        </p>
                      </div>
                    </div>

                    {/* Redirect CTA Footer */}
                    <div className="p-6 pt-0">
                      <Link
                        to={dealer.path}
                        className={isProShop 
                          ? "w-full text-center flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all py-3.5 text-sm"
                          : "btn-primary w-full text-center flex items-center justify-center gap-2 group-hover:bg-daikin-blue-dark transition-colors py-3.5 text-sm"
                        }
                      >
                        <span>{dealer.ctaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                  </div>
                </FadeInItem>
              )
            })}
          </FadeInUp>

        </div>
      </section>

      {/* ── Dual Bottom Callout Cards (2 Cards Kiri & Kanan) ───────────────── */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Card 1: Jaminan & Garansi Resmi (Kiri) */}
            <div className="bg-gradient-to-br from-daikin-blue-50 via-sky-50/70 to-white rounded-2xl p-6 sm:p-8 border border-daikin-blue/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-daikin-blue text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-daikin-blue uppercase tracking-wider block">
                      Perlindungan Konsumen
                    </span>
                    <h3 className="text-lg font-bold font-display text-charcoal leading-snug">
                      Jaminan Pembelian & Garansi Resmi
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed mb-6">
                  Seluruh unit AC yang dibeli dari jaringan dealer resmi (iShop, ProShop, & VRV Certified) dijamin 100% original dengan garansi unit dan kompresor terdaftar secara nasional.
                </p>
              </div>

              <div className="pt-4 border-t border-daikin-blue/10">
                <Link 
                  to="/services/warranty" 
                  className="btn-secondary w-full text-center flex items-center justify-center gap-2 py-3 text-xs sm:text-sm"
                >
                  <span>Cek Ketentuan Garansi</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Bergabung Menjadi Dealer (Kanan) */}
            <div className="bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#0080cb] text-white rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-md text-cyan-300 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider block">
                      Kemitraan Bisnis
                    </span>
                    <h3 className="text-lg font-bold font-display text-white leading-snug">
                      Mitra Dealer Resmi Daikin
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-sans text-blue-100/90 leading-relaxed mb-6">
                  Kembangkan bisnis pendingin udara Anda bersama Daikin Indonesia. Dapatkan dukungan pelatihan teknis, sertifikasi resmi, dan pasokan produk terjamin.
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 relative z-10">
                <Link 
                  to="/information/dealer" 
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-white text-daikin-blue hover:bg-daikin-blue-50 font-bold font-display text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  <span>Daftar Menjadi Dealer</span>
                  <ArrowRight className="w-4 h-4 text-daikin-blue group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Assistant Widget */}
      <PichonKunHelper message="Pilihlah iShop untuk AC rumah hunian, ProShop untuk AC komersial/ruko, atau VRV Dealer untuk gedung proyek besar! 🏠🏢" />
    </PageTransition>
  )
}
