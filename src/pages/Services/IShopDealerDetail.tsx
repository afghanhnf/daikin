import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Store, MapPin, Phone, Clock, Award, Wrench, RefreshCw,
  ShoppingCart, Instagram, Navigation, Check, Radio, Star,
  Globe, CreditCard, ChevronLeft, ChevronRight, MessageCircle, ArrowLeft
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import PichonKunHelper from '@/components/sections/PichonKunHelper'
import { ishopStores, IShopStore } from '@/data/ishopDealers'

export default function IShopDealerDetail() {
  const { dealerId } = useParams<{ dealerId: string }>()
  const [store, setStore] = useState<IShopStore | null>(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    if (dealerId) {
      const foundStore = ishopStores.find(s => s.id === dealerId)
      if (foundStore) {
        setStore(foundStore)
      } else {
        setStore(ishopStores[0])
      }
    } else {
      setStore(ishopStores[0])
    }
  }, [dealerId])

  if (!store) return null

  // 6 Gallery Items for 3-Card Sliding Grid
  const galleryItems = [
    {
      title: 'Ruang Pamer Showroom iShop',
      subtitle: 'Display Unit Lengkap AC Residential & Air Purifier',
      tag: 'Showroom Display'
    },
    {
      title: 'Tim Teknisi Tersertifikasi',
      subtitle: 'Standar Pemasangan & Vakum Presisi Daikin Japan',
      tag: 'Technical Team'
    },
    {
      title: 'Fasilitas Bengkel & Service Hub',
      subtitle: 'Peralatan Uji Teknis & Suku Cadang Original Daikin',
      tag: 'Service Hub'
    },
    {
      title: 'Proyek Pemasangan Multi-Split',
      subtitle: 'Instalasi Perpipaan Estetis & Rapi pada Hunian Minimalis',
      tag: 'Multi-Split Project'
    },
    {
      title: 'Ruang Pamer Streamer Tech',
      subtitle: 'Demo Fitur Pemurni Udara & Filter HEPA Elektrostatik',
      tag: 'Streamer Demo'
    },
    {
      title: 'Fasilitas Perpipaan & Vakum',
      subtitle: 'Peralatan Uji Teknis Berstandar Pabrikan Daikin',
      tag: 'Vacuum Station'
    }
  ]

  // Testimonials Array
  const testimonials = store.testimonials && store.testimonials.length > 0
    ? store.testimonials
    : [
      {
        name: 'Winda Yuliyanti',
        rating: 5,
        text: 'Punya AC Daikin memang paling mantap, dingin cepat dan pelayanan instalasi teknisi dari dealer resmi ini sangat rapi dan tepat waktu!'
      },
      {
        name: 'Rere Afryria',
        rating: 5,
        text: 'Air Purifier Daikin menghadirkan udara sejuk dan bersih di rumah. Pilihan terbaik untuk menjaga kesehatan keluarga bebas polusi dan alergen!'
      },
      {
        name: 'Hendra Wijaya',
        rating: 5,
        text: 'Sangat puas dari konsultasi pemilihan kapasitas PK hingga pemasangan unit Inverter di rumah. Pelayanan profesional dan ramah.'
      }
    ]

  const handleNextGallery = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const handlePrevGallery = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // 3 Active Visible Gallery Cards
  const visibleGallery = [
    galleryItems[currentGalleryIndex % galleryItems.length],
    galleryItems[(currentGalleryIndex + 1) % galleryItems.length],
    galleryItems[(currentGalleryIndex + 2) % galleryItems.length]
  ]

  return (
    <PageTransition>
      <PageMeta
        title={`${store.name} - Official Daikin iShop Dealer`}
        description={`Informasi lengkap dealer resmi Daikin iShop ${store.name} di ${store.city}. Konsultasi AC, instalasi presisi, dan jaminan produk bergaransi resmi.`}
        canonical={`/services/ishop/dealer/${store.id}`}
      />

      {/* ── 1. HERO BANNER HEADER ────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#041d33] via-daikin-blue-dark to-[#005a9c] text-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden">
        {/* Ambient Radial Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            items={[
              { label: 'Layanan', path: '/services' },
              { label: 'Daikin iShop', path: '/services/ishop' },
              { label: store.name }
            ]}
            className="text-cyan-200/90 mb-6"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header Copywriting */}
            <div className="lg:col-span-7 space-y-4">
              <Link
                to="/services/ishop"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-cyan-200 text-xs font-bold transition-colors mb-2 backdrop-blur-md"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali ke Jaringan iShop</span>
              </Link>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 text-xs font-extrabold uppercase">
                  Official Daikin iShop Dealer
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 text-xs font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-cyan-300" /> {store.region} • {store.city}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {store.name}
              </h1>
              <p className="text-sm sm:text-base text-blue-100/90 font-light max-w-2xl leading-relaxed">
                Mitra Resmi Daikin Airconditioning Indonesia yang menghadirkan konsultasi kapasitas PK presisi, instalasi profesional tersertifikasi, dan garansi purnajual terjamin.
              </p>
            </div>

            {/* Right: Clean Empty Thumbnail Image Placeholder (No Marketplace Buttons Header) */}
            <div className="lg:col-span-5">
              <div className="w-full aspect-[16/10] bg-[#002b54]/60 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col items-center justify-center text-center text-white shadow-xl relative overflow-hidden group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Store className="w-6 h-6 text-cyan-300" />
                </div>
                <span className="text-xs font-extrabold tracking-wider uppercase text-cyan-200">Thumbnail Image Placeholder</span>
                <span className="text-[11px] text-blue-100/80 mt-1">Visual Gedung / Showroom {store.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. MAIN CONTENT BODY ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ── A. HERO GRID: BUILDING PHOTO & SUARA PEMILIK ── */}
        <FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Store Exterior Image Graphic */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-daikin-blue-dark to-slate-950 rounded-3xl border border-slate-800 p-8 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group min-h-[320px]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold bg-cyan-400/20 text-cyan-200 px-3 py-1 rounded-full border border-cyan-400/30">
                  {store.region}
                </span>
                <span className="text-xs font-bold text-cyan-300 flex items-center gap-1">
                  <Award className="w-4 h-4 text-cyan-300" /> Verified Dealership
                </span>
              </div>

              <div className="my-auto py-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Store className="w-8 h-8 text-cyan-300" />
                </div>
                <h2 className="text-2xl font-extrabold text-white tracking-tight">{store.name}</h2>
                <p className="text-xs text-cyan-200/80 mt-1 font-semibold">Dealer Resmi & Service Center Terdaftar</p>
              </div>

              <div className="flex items-center justify-between text-xs text-blue-100/70 pt-4 border-t border-white/15">
                <span>Mitra Resmi Daikin Airconditioning Indonesia</span>
              </div>
            </div>

            {/* Right: Suara Pemilik Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-sky-50 via-sky-50/80 to-blue-50 rounded-3xl p-7 sm:p-8 border border-sky-100 flex flex-col justify-between relative overflow-hidden shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-charcoal">Suara</span>
                    <span className="px-3 py-1 bg-[#0097e6] text-white rounded-lg font-extrabold text-sm shadow-xs">
                      Pemilik
                    </span>
                  </div>
                  {/* Mascot Badge */}
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-daikin-blue font-extrabold text-xs">
                    💧
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 font-normal">
                  {store.ownerVoice ||
                    `Sebagai mitra resmi Daikin Indonesia, ${store.name} berkomitmen memberikan pelayanan tata udara terbaik. Melayani hunian residensial hingga komersial dengan garansi resmi dan teknisi terlatih.`}
                </p>
              </div>

              <a
                href={`tel:${store.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-charcoal hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl transition-colors shadow-md inline-flex items-center justify-center gap-2 self-start"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>Telepon Dealer ({store.phone})</span>
              </a>
            </div>
          </div>
        </FadeInUp>

        {/* ── B. TENTANG DEALER & KONTAK (UNIFIED MONOCHROME ICONS) ── */}
        <FadeInUp delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Tentang Dealer Column */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-6">
              <h3 className="text-2xl font-extrabold text-charcoal tracking-tight">Tentang Dealer</h3>

              {/* Address & Google Map Button */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-daikin-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed">
                      {store.address}
                    </p>
                    <a
                      href={store.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-daikin-blue hover:underline mt-2 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100"
                    >
                      <Navigation className="w-3.5 h-3.5 text-daikin-blue" />
                      <span>Buka di Google Map</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="space-y-2 pt-2 text-xs text-gray-600 border-t border-gray-100">
                <div className="flex items-center gap-2 text-charcoal font-bold mb-1.5">
                  <Clock className="w-4 h-4 text-daikin-blue" />
                  <span>Jam Operasional:</span>
                </div>
                <div className="pl-7 space-y-1.5">
                  <p><strong className="text-gray-800">Senin - Jumat:</strong> {store.detailedHours?.weekday || store.openHours}</p>
                  <p><strong className="text-gray-800">Sabtu:</strong> {store.detailedHours?.saturday || '09:00 - 15:00'}</p>
                  <p><strong className="text-gray-800">Minggu:</strong> {store.detailedHours?.sunday || '09:00 - 17:30'}</p>
                  <p className="text-rose-600 font-semibold">{store.detailedHours?.holiday || 'Libur Hari Besar: Tutup'}</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="pt-2 text-xs border-t border-gray-100">
                <span className="font-bold text-charcoal flex items-center gap-2 mb-2">
                  <CreditCard className="w-4 h-4 text-daikin-blue" />
                  Metode Pembayaran:
                </span>
                <div className="flex flex-wrap gap-2 pl-7">
                  {(store.paymentMethods || ['Tunai', 'Kartu Kredit', 'Transfer Bank']).map((pay, pIdx) => (
                    <span key={pIdx} className="px-3.5 py-1.5 rounded-xl bg-gray-100 text-gray-700 font-semibold border border-gray-200">
                      {pay}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Kontak Column with Monochromatic Icons */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-7 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-2xl font-extrabold tracking-tight text-white mb-6">Kontak Informasi</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 flex items-center justify-center shrink-0">
                    <Instagram className="w-4.5 h-4.5 text-cyan-300" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-semibold">Instagram</span>
                    <span className="font-bold text-white">{store.socials?.instagram || '@acwahana'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 flex items-center justify-center shrink-0">
                    <Globe className="w-4.5 h-4.5 text-cyan-300" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] text-gray-400 font-semibold">Website Resmi</span>
                    <a href={store.websiteUrl} target="_blank" rel="noreferrer" className="font-bold text-cyan-300 truncate block hover:underline">
                      {store.websiteUrl}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 flex items-center justify-center shrink-0">
                    <Radio className="w-4.5 h-4.5 text-cyan-300" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-semibold">TikTok</span>
                    <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="font-bold text-white hover:underline">
                      Kunjungi Tiktok
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4.5 h-4.5 text-cyan-300" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-semibold">Telepon / WhatsApp</span>
                    <a href={`https://wa.me/${store.whatsapp || '6281234567890'}`} target="_blank" rel="noreferrer" className="font-bold text-cyan-300 hover:underline">
                      {store.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* ── C. APA YANG KITA TAWARKAN? (WITH THUMBNAIL CARDS & MATCHED TONE) ── */}
        <FadeInUp delay={0.2}>
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xs space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-daikin-blue-50 border border-daikin-blue/20 text-daikin-blue text-xs font-bold uppercase tracking-wider mb-3">
                Layanan & Produk
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
                Apa Yang <span className="underline decoration-[#0097e6] decoration-4 underline-offset-4">Kita Tawarkan?</span>
              </h3>
              <p className="text-xs text-gray-500 mt-2">
                Solusi lengkap tata udara Daikin dari unit residential, pemeliharaan berkala, hingga perbaikan resmi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Penjualan dan Pemasangan */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Clean Empty Thumbnail Placeholder Box */}
                  <div className="w-full aspect-[16/10] bg-slate-900 rounded-xl border border-slate-800 p-4 flex flex-col items-center justify-center text-center text-white mb-4 group-hover:bg-slate-800 transition-colors">
                    <ShoppingCart className="w-7 h-7 text-cyan-300 mb-1.5" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-200">Thumbnail Image Placeholder</span>
                    <span className="text-[9px] text-gray-400 mt-0.5">Penjualan & Pemasangan</span>
                  </div>

                  <h4 className="text-base font-extrabold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors">
                    Penjualan dan Pemasangan
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Pilihan unit AC Daikin terlengkap bergaransi resmi dilengkapi instalasi teknisi tersertifikasi.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {(store.offerings?.sales || ['Single split AC', 'Multi split AC', 'Commercial AC', 'Industrial AC', 'Air purifier']).map((item, iIdx) => (
                      <span key={iIdx} className="px-2.5 py-1 rounded-lg bg-sky-50 text-daikin-blue border border-sky-100 font-extrabold text-[10px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: Pembersihan dan Pemeliharaan */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Clean Empty Thumbnail Placeholder Box */}
                  <div className="w-full aspect-[16/10] bg-slate-900 rounded-xl border border-slate-800 p-4 flex flex-col items-center justify-center text-center text-white mb-4 group-hover:bg-slate-800 transition-colors">
                    <RefreshCw className="w-7 h-7 text-cyan-300 mb-1.5" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-200">Thumbnail Image Placeholder</span>
                    <span className="text-[9px] text-gray-400 mt-0.5">Pembersihan & Maintenance</span>
                  </div>

                  <h4 className="text-base font-extrabold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors">
                    Pembersihan dan Pemeliharaan
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Layanan cuci AC & perawatan rutin berkala untuk menjaga efisiensi energi dan kesegaran udara.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {(store.offerings?.maintenance || ['Single split AC', 'Multi split AC', 'Commercial AC']).map((item, iIdx) => (
                      <span key={iIdx} className="px-2.5 py-1 rounded-lg bg-sky-50 text-daikin-blue border border-sky-100 font-extrabold text-[10px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 3: Perbaikan */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Clean Empty Thumbnail Placeholder Box */}
                  <div className="w-full aspect-[16/10] bg-slate-900 rounded-xl border border-slate-800 p-4 flex flex-col items-center justify-center text-center text-white mb-4 group-hover:bg-slate-800 transition-colors">
                    <Wrench className="w-7 h-7 text-cyan-300 mb-1.5" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-200">Thumbnail Image Placeholder</span>
                    <span className="text-[9px] text-gray-400 mt-0.5">Perbaikan Resmi</span>
                  </div>

                  <h4 className="text-base font-extrabold text-charcoal mb-2 group-hover:text-daikin-blue transition-colors">
                    Perbaikan Resmi
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Perbaikan masalah teknis dengan peralatan akurat dan penggantian suku cadang original Daikin.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {(store.offerings?.repair || ['Single split AC', 'Multi split AC', 'Commercial AC']).map((item, iIdx) => (
                      <span key={iIdx} className="px-2.5 py-1 rounded-lg bg-sky-50 text-daikin-blue border border-sky-100 font-extrabold text-[10px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* ── D. GALERI DEALER (3 THUMBNAIL CARDS GRID SLIDER) ── */}
        <FadeInUp delay={0.3}>
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <span className="text-2xl font-extrabold text-charcoal">Galeri</span>
                <span className="px-3 py-1 bg-[#0097e6] text-white rounded-lg font-extrabold text-sm shadow-xs uppercase">
                  DEALER
                </span>
              </div>

              {/* Interactive Slide Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevGallery}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-sky-50 hover:border-daikin-blue transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-daikin-blue" />
                </button>
                <button
                  onClick={handleNextGallery}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-sky-50 hover:border-daikin-blue transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-daikin-blue" />
                </button>
              </div>
            </div>

            {/* 3 Thumbnail Grid Carousel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleGallery.map((item, gIdx) => (
                <div
                  key={gIdx}
                  className="bg-slate-900 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between text-white shadow-md hover:border-cyan-400/40 transition-all group"
                >
                  {/* Clean Empty Thumbnail Image Placeholder */}
                  <div className="w-full aspect-[16/10] bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col items-center justify-center text-center mb-4 group-hover:bg-slate-900 transition-colors">
                    <Store className="w-7 h-7 text-cyan-300 mb-1.5" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-200">Thumbnail Placeholder</span>
                    <span className="text-[8px] text-gray-400 mt-0.5">({item.tag})</span>
                  </div>

                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 inline-block mb-2">
                      {item.tag}
                    </span>
                    <h4 className="font-extrabold text-sm text-white mb-1 group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Indicator Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {galleryItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentGalleryIndex(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentGalleryIndex ? 'w-8 bg-daikin-blue' : 'w-2 bg-gray-200'
                    }`}
                />
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* ── E. TESTIMONI PELANGGAN (SLIDER IMPLEMENTATION) ── */}
        <FadeInUp delay={0.4}>
          <div className="bg-gray-50/80 p-8 sm:p-10 rounded-3xl border border-gray-200/80 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-extrabold text-charcoal tracking-tight">Testimoni Pelanggan</h3>
                <p className="text-xs text-gray-500 mt-1">Ulasan Pengalaman Pelanggan Terverifikasi</p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevTestimonial}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-sky-50 hover:border-daikin-blue transition-colors shadow-xs"
                >
                  <ChevronLeft className="w-5 h-5 text-daikin-blue" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-sky-50 hover:border-daikin-blue transition-colors shadow-xs"
                >
                  <ChevronRight className="w-5 h-5 text-daikin-blue" />
                </button>
              </div>
            </div>

            {/* Active Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 space-y-4 shadow-sm relative overflow-hidden transition-all duration-300">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: testimonials[currentTestimonialIndex].rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium italic">
                "{testimonials[currentTestimonialIndex].text}"
              </p>
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="font-extrabold text-charcoal">{testimonials[currentTestimonialIndex].name}</span>
                <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md font-bold border border-emerald-200">
                  ✓ Pelanggan Terverifikasi
                </span>
              </div>
            </div>

            {/* Testimonial Indicator Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentTestimonialIndex ? 'w-8 bg-daikin-blue' : 'w-2 bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* ── F. JUMP TO MARKETPLACE ACTION FOOTER ── */}
        <FadeInUp delay={0.5}>
          <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-cyan-50 p-8 sm:p-10 rounded-3xl border border-sky-100 space-y-4 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-extrabold text-charcoal">Marketplace Official Store</h4>
                <p className="text-xs text-gray-600 mt-1">Beli unit AC resmi Daikin secara online langsung di platform pilihan Anda.</p>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={store.shopeeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs inline-flex items-center gap-2 shadow-md transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Shopee Store</span>
                </a>
                <a
                  href={store.tokopediaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs inline-flex items-center gap-2 shadow-md transition-colors"
                >
                  <Store className="w-4 h-4" />
                  <span>Tokopedia Store</span>
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>

      </section>

      {/* PichonKun Mascot Helper */}
      <PichonKunHelper message={`Terima kasih telah mengunjungi dealer resmi Daikin iShop ${store.name}! Konsultasikan kapasitas PK AC rumah Anda sekarang. 🏠❄️`} />
    </PageTransition>
  )
}
