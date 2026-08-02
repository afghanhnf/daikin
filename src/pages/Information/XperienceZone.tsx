import React, { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Store, MapPin, Phone, Mail, Clock, ArrowRight, Sparkles,
  Wind, Cpu, Building2, Users, ChevronRight, Image as ImageIcon
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

interface ShowroomLocation {
  id: string
  city: string
  name: string
  address: string
  phone: string
  email: string
  hours: string
  mapQuery: string
}

const showroomLocations: ShowroomLocation[] = [
  {
    id: 'jakarta',
    city: 'Jakarta',
    name: 'Daikin Xperience Zone Menara Astra',
    address: 'Menara Astra Lt. 7 & 8, Jl. Jend. Sudirman Kav. 5-6, Karet Tengsin, Jakarta Pusat 10220',
    phone: '(021) 8665 6886',
    email: 'xperience-jakarta@daikin.co.id',
    hours: 'Senin - Jumat: 08:30 - 17:30 WIB',
    mapQuery: 'https://maps.google.com/?q=Menara+Astra+Jakarta'
  },
  {
    id: 'tangerang',
    city: 'Tangerang',
    name: 'Daikin Xperience Zone Alam Sutera',
    address: 'Jl. Jalur Sutera Kav 29 D No. 36-37, Alam Sutera, Tangerang 15320 - Banten',
    phone: '(021) 5314 1195',
    email: 'xperience-tangerang@daikin.co.id',
    hours: 'Senin - Sabtu: 09:00 - 18:00 WIB',
    mapQuery: 'https://maps.google.com/?q=Alam+Sutera+Tangerang'
  },
  {
    id: 'surabaya',
    city: 'Surabaya',
    name: 'Daikin Xperience Zone Surabaya',
    address: 'Jl. Kombes Pol. Moh. Duryat No. 29-31, Tegalsari, Surabaya, Jawa Timur 60262',
    phone: '(031) 2971 2098',
    email: 'xperience-surabaya@daikin.co.id',
    hours: 'Senin - Sabtu: 09:00 - 18:00 WIB',
    mapQuery: 'https://maps.google.com/?q=Jl+Kombes+Pol+Moh+Duryat+Surabaya'
  },
  {
    id: 'medan',
    city: 'Medan',
    name: 'Daikin Xperience Zone Medan',
    address: 'Jl. H. Adam Malik No 18 E, Silalas, Medan Barat, Medan 20114',
    phone: '(061) 4200 8866',
    email: 'xperience-medan@daikin.co.id',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    mapQuery: 'https://maps.google.com/?q=Jl+Adam+Malik+Medan'
  },
  {
    id: 'bandung',
    city: 'Bandung',
    name: 'Daikin Xperience Zone Bandung',
    address: 'Jl. BKR No. 23 Pasirluyu, Regol, Bandung 40254 - Jawa Barat',
    phone: '(022) 5225 150',
    email: 'xperience-bandung@daikin.co.id',
    hours: 'Senin - Sabtu: 09:00 - 18:00 WIB',
    mapQuery: 'https://maps.google.com/?q=Jl+BKR+Bandung'
  },
  {
    id: 'bali',
    city: 'Bali',
    name: 'Daikin Xperience Zone Bali',
    address: 'Jl. Buluh Indah No. 51X - Pemecutan Kaja, Denpasar Utara, Bali 80118',
    phone: '(0361) 9005 514',
    email: 'xperience-bali@daikin.co.id',
    hours: 'Senin - Sabtu: 09:00 - 17:30 WITA',
    mapQuery: 'https://maps.google.com/?q=Jl+Buluh+Indah+Denpasar+Bali'
  },
  {
    id: 'pekanbaru',
    city: 'Pekanbaru',
    name: 'Daikin Xperience Zone Pekanbaru',
    address: 'Jl. Soekarno Hatta No. 3-5 Tangkerang Barat, Marpoyan Damai, Pekanbaru 28282',
    phone: '(0761) 561 139',
    email: 'xperience-pekanbaru@daikin.co.id',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    mapQuery: 'https://maps.google.com/?q=Jl+Soekarno+Hatta+Pekanbaru'
  },
  {
    id: 'palembang',
    city: 'Palembang',
    name: 'Daikin Xperience Zone Palembang',
    address: 'Jl. Veteran No. 88-89, Kuto Batu, Ilir Timur II, Palembang 30126',
    phone: '(0711) 319 776',
    email: 'xperience-palembang@daikin.co.id',
    hours: 'Senin - Sabtu: 08:30 - 17:00 WIB',
    mapQuery: 'https://maps.google.com/?q=Jl+Veteran+Palembang'
  }
]

export default function XperienceZone() {
  const [selectedCityId, setSelectedCityId] = useState<string>('all')

  const filteredShowrooms = selectedCityId === 'all'
    ? showroomLocations
    : showroomLocations.filter((s) => s.id === selectedCityId)

  return (
    <PageTransition>
      <PageMeta
        title="Daikin Xperience Zone | Showroom & Konsultasi Tata Udara Resmi"
        description="Kunjungi Daikin Xperience Zone terdekat untuk mencoba produk AC langsung, berkonsultasi dengan insinyur spesialis, dan merancang tata udara hunian impian Anda."
        canonical="/information/xperience-zone"
      />

      {/* ── 1. HERO BANNER (MODEL PAGE BANNER) ────────────────────────────────── */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#061834] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        {/* Radial dots grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
          }} 
        />

        {/* Ambient background glow */}
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <Breadcrumb
            items={[
              { label: 'Informasi', path: '/information' },
              { label: 'Xperience Zone' }
            ]}
            className="text-white/80 mb-8"
          />

          <FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Title & Text */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  Daikin Official Showroom
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-display">
                  Xperience Zone <br />
                  <span className="text-daikin-blue-light font-light">Showroom & Konsultasi Langsung</span>
                </h1>

                <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl font-sans">
                  Dapatkan pengalaman secara langsung untuk mencoba produk tata udara Daikin dan berkonsultasi dengan tim ahli dalam memilih produk yang sesuai dengan kebutuhan Anda.
                </p>
              </div>

              {/* Right Column: Sample Banner Image Placeholder */}
              <div className="lg:col-span-5">
                <div className="w-full aspect-[4/3] bg-white/10 backdrop-blur-md rounded-3xl border-2 border-dashed border-white/25 p-6 flex flex-col items-center justify-center text-center group hover:border-white/40 transition-all shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 text-cyan-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xs md:text-sm font-extrabold text-white mb-1 tracking-wider uppercase font-display">
                    [Banner Image Placeholder]
                  </h4>
                  <p className="text-[11px] text-white/70 max-w-xs leading-relaxed font-sans font-light">
                    Foto Interior Showroom Daikin Xperience Zone & Area Konsultasi Interaktif Tata Udara
                  </p>
                </div>
              </div>

            </div>
          </FadeInUp>
        </div>
      </div>

      {/* ── 2. WHY VISIT XPERIENCE ZONE (4 FEATURE HIGHLIGHTS) ───────────────── */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100 inline-block">
              Pengalaman Interaktif
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-charcoal tracking-tight">
              Mengapa Mengunjungi Daikin Xperience Zone?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans font-light">
              Xperience Zone hadir untuk memberikan gambaran nyata performa AC Daikin sebelum Anda memutuskan membeli.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <FadeInUp delay={0.05}>
              <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-4 h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-daikin-blue flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    <Wind className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-display text-base text-charcoal">Live Air Experience</h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed font-light">
                    Uji coba langsung keheningan suara AC Inverter, kelembutan hembusan Coanda Airflow, serta kesegaran teknologi Streamer.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-bold text-daikin-blue flex items-center gap-1">
                  <span>Demo Aliran Udara</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </FadeInUp>

            {/* Feature 2 */}
            <FadeInUp delay={0.1}>
              <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-4 h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-daikin-blue flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-display text-base text-charcoal">Konsultasi Insinyur HVAC</h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed font-light">
                    Bawa denah rumah atau gedung Anda untuk simulasi kalkulasi beban pendinginan (Btu/h) secara akurat dan gratis.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-bold text-daikin-blue flex items-center gap-1">
                  <span>Saran Ahli Bebas Biaya</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </FadeInUp>

            {/* Feature 3 */}
            <FadeInUp delay={0.15}>
              <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-4 h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-daikin-blue flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-display text-base text-charcoal">Display Produk Premium</h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed font-light">
                    Lihat jajaran lengkap Daikin Emura, Urusara 7, VRV Home Series, serta Air Purifier terbaru dalam bentuk instalasi nyata.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-bold text-daikin-blue flex items-center gap-1">
                  <span>Lini Produk Lengkap</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </FadeInUp>

            {/* Feature 4 */}
            <FadeInUp delay={0.2}>
              <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all space-y-4 h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-daikin-blue flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-display text-base text-charcoal">Smart Home Integration</h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed font-light">
                    Simulasi kontrol AC jarak jauh melalui aplikasi Daikin Mobile Controller dan pengintegrasian dengan sistem otomasi rumah.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-bold text-daikin-blue flex items-center gap-1">
                  <span>Uji Coba Aplikasi</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </FadeInUp>

          </div>

        </div>
      </section>

      {/* ── 3. SHOWROOM DIRECTORY (SEAMLESS CITY TABS & CLEAN PLACEHOLDER CARDS) ──── */}
      <section className="py-16 md:py-24 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-white px-3.5 py-1 rounded-full border border-slate-200 inline-block shadow-2xs">
              Lokasi Showroom Resmi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-charcoal tracking-tight">
              Temukan Xperience Zone Terdekat
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-sans font-light">
              Pilih kota Anda untuk melihat alamat lengkap, jam operasional, dan lokasi showroom Daikin.
            </p>

            {/* Seamless Single-Line City Filter Tabs */}
            <div className="pt-4">
              <div className="bg-white rounded-2xl p-1.5 border border-slate-200 shadow-2xs flex flex-wrap lg:flex-nowrap items-center justify-between gap-1 max-w-4xl mx-auto">
                <button
                  onClick={() => setSelectedCityId('all')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex-1 min-w-[70px] ${
                    selectedCityId === 'all'
                      ? 'bg-daikin-blue text-white shadow-2xs'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-charcoal'
                  }`}
                >
                  Semua Kota
                </button>
                {showroomLocations.map((s) => {
                  const isActive = selectedCityId === s.id
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedCityId(s.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex-1 min-w-[70px] ${
                        isActive
                          ? 'bg-daikin-blue text-white shadow-2xs'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-charcoal'
                      }`}
                    >
                      {s.city}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Showroom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredShowrooms.map((showroom) => (
              <FadeInUp key={showroom.id}>
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col h-full group">
                  
                  {/* Card Placeholder Image (Kosongan) */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 flex flex-col items-center justify-center text-center p-4 border-b border-slate-200/60">
                    <div className="w-12 h-12 rounded-2xl bg-white text-slate-400 flex items-center justify-center shadow-2xs mb-2 group-hover:scale-105 transition-transform">
                      <Store className="w-6 h-6 text-[#0097E0]" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-display">
                      Xperience Zone {showroom.city}
                    </span>
                    <div className="absolute top-3 left-3 bg-[#003B71] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-2xs">
                      {showroom.city}
                    </div>
                  </div>

                  {/* Card Body Details */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-extrabold font-display text-charcoal text-lg group-hover:text-daikin-blue transition-colors">
                          {showroom.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium mt-1">
                          <Clock className="w-3.5 h-3.5 text-daikin-blue flex-shrink-0" />
                          <span>{showroom.hours}</span>
                        </div>
                      </div>

                      {/* Contact Info Table */}
                      <div className="space-y-2.5 text-xs text-slate-600 font-sans border-t border-slate-100 pt-4">
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-light">{showroom.address}</span>
                        </div>
                        <div className="flex items-center gap-2.5 font-semibold text-daikin-blue">
                          <Phone className="w-4 h-4 flex-shrink-0 text-daikin-blue" />
                          <span>{showroom.phone}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-slate-500">
                          <Mail className="w-4 h-4 flex-shrink-0 text-slate-400" />
                          <a href={`mailto:${showroom.email}`} className="hover:text-daikin-blue transition-colors truncate">
                            {showroom.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Full Width Map Button */}
                    <div className="pt-2 border-t border-slate-100">
                      <a
                        href={showroom.mapQuery}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 bg-slate-100 hover:bg-daikin-blue hover:text-white text-charcoal font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 group/btn shadow-2xs"
                      >
                        <MapPin className="w-4 h-4 text-daikin-blue group-hover/btn:text-white transition-colors" />
                        <span>Petunjuk Lokasi (Google Maps)</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                      </a>
                    </div>

                  </div>

                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="bg-gradient-to-br from-[#061730] via-daikin-blue-dark to-[#005580] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/20 inline-block">
                Jaringan Dealer Resmi
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-white">
                Butuh Bantuan Memilih Dealer Terdekat?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 font-sans max-w-xl font-light leading-relaxed">
                Temukan jaringan dealer resmi iShop & ProShop Daikin di seluruh Indonesia untuk pembelian dan layanan purnajual tepercaya.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <Link
                to="/services/ishop"
                className="px-6 py-3.5 rounded-xl bg-white text-daikin-blue font-bold text-xs sm:text-sm shadow-md hover:bg-sky-50 transition-all flex items-center gap-2"
              >
                <span>Cari Dealer iShop</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </PageTransition>
  )
}
