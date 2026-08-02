import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { 
  Headphones, Wrench, ShieldAlert, HelpCircle, PhoneCall, MessageCircle, 
  ChevronRight, ArrowRight, CheckCircle2, Clock, MapPin, ShieldCheck, 
  Sparkles, FileText, Mail, Send, Image as ImageIcon
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import PichonKunHelper from '@/components/sections/PichonKunHelper'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

// ── Data: 4 Layanan Utama (Tone & Color strictly Blue palette) ────────────────
const mainServices = [
  {
    id: 'dukungan-teknis',
    title: 'DUKUNGAN TEKNIS',
    description:
      'Melalui nomor bebas pulsa, Anda dapat menyampaikan pertanyaan Anda dan teknisi kami yang sangat terampil selalu siap untuk setiap pertanyaan teknis terkait dengan produk Daikin yang didistribusikan secara nasional akan segera memberikan tanggapan.',
    icon: Headphones,
    color: 'from-sky-500 to-daikin-blue',
    badge: 'Bebas Pulsa 24/7',
    features: [
      'Respon cepat dari teknisi berpengalaman',
      'Dukungan produk residensial & komersial',
      'Layanan informasi garansi & unit',
      'Pemberian panduan awal dari jarak jauh'
    ],
    actionText: 'Hubungi 0800 1 081 081',
    actionHref: 'tel:08001081081'
  },
  {
    id: 'instalasi',
    title: 'INSTALASI',
    description:
      'Masalah terkait pemasangan produk dapat dikonsultasikan dari jarak jauh atau langsung di tempat.',
    icon: Wrench,
    color: 'from-daikin-blue to-daikin-blue-dark',
    badge: 'Remote & On-Site',
    features: [
      'Survei teknis lokasi sebelum pemasangan',
      'Konsultasi tata letak & kapasitas PK ruangan',
      'Standar instruksi pipa & kelistrikan resmi Daikin',
      'Supervisi pemasangan untuk proyek komersial'
    ],
    actionText: 'Konsultasi Instalasi',
    actionHref: 'https://wa.me/628119048058?text=Halo%20Daikin,%20saya%20ingin%20konsultasi%20instalasi%20AC'
  },
  {
    id: 'penyelesaian-masalah',
    title: 'PENYELESAIAN MASALAH',
    description:
      'Staf teknis berketerampilan tinggi siap membantu Anda memecahkan masalah.',
    icon: ShieldAlert,
    color: 'from-sky-600 to-daikin-blue-dark',
    badge: 'Ahli Diagnostik & Data Teknis',
    features: [
      'Identifikasi kode error produk Daikin',
      'Penanganan kebocoran, dingin berkurang, & suara bising',
      'Akses manual teknis & spesifikasi produk',
      'Suku cadang orisinal tergaransi'
    ],
    actionText: 'Lihat Data Teknis & Manual',
    actionHref: '/services/technical-data'
  },
  {
    id: 'bagaimana-menggunakannya',
    title: 'BAGAIMANA MENGGUNAKANNYA',
    description:
      'Cara mengoperasikan produk Daikin dengan benar dan efektif akan dikonsultasikan secara jarak jauh atau langsung di tempat.',
    icon: HelpCircle,
    color: 'from-cyan-600 to-daikin-blue',
    badge: 'Panduan Pengoperasian',
    features: [
      'Panduan fungsi remote control & mode inverter',
      'Koneksi Wi-Fi & aplikasi pintar Daikin Mobile Controller',
      'Tips perawatan rutin mandiri untuk pengguna',
      'Pengaturan efisiensi konsumsi listrik harian'
    ],
    actionText: 'Panduan Remote & Fitur',
    actionHref: '/solutions/how-to-choose'
  }
]

// ── Card Menu Layanan Teknis Lainnya ────────────────────────────────────────
const relatedTechnicalServices = [
  {
    title: 'Pusat Servis Resmi (Service Center)',
    desc: 'Cari lebih dari 500 titik service center resmi Daikin tersebar di seluruh Indonesia.',
    path: '/services/service-center',
    icon: MapPin,
    badge: '500+ Titik'
  },
  {
    title: 'Layanan Pemeliharaan (Maintenance)',
    desc: 'Kontrak perawatan berkala untuk menjaga keawetan dan performa efisiensi AC Anda.',
    path: '/services/maintenance',
    icon: Clock,
    badge: 'Kontrak Perawatan'
  },
  {
    title: 'Jaminan & Garansi Resmi',
    desc: 'Informasi garansi kompresor hingga 5 tahun dan klaim garansi suku cadang resmi.',
    path: '/services/warranty',
    icon: ShieldCheck,
    badge: 'Garansi 5 Tahun'
  },
  {
    title: 'Spesifikasi & Data Teknis',
    desc: 'Unduh manual teknis, submittal data, dan spesifikasi lengkap produk Daikin.',
    path: '/services/technical-data',
    icon: FileText,
    badge: 'Manual & E-Data'
  }
]

export default function GeneralServices() {
  return (
    <PageTransition>
      <PageMeta
        title="Layanan Umum - PT Daikin Airconditioning Indonesia"
        description="Layanan umum Daikin Indonesia: Dukungan teknis bebas pulsa, konsultasi instalasi, penyelesaian masalah (troubleshooting), dan panduan cara pengoperasikan produk."
        canonical="/services/general-services"
      />

      {/* ── 1. MODERN PAGE BANNER MODEL ────────────────────────────────────────── */}
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
              { label: 'Layanan', path: '/services' }, 
              { label: 'Layanan Umum' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Title & Text */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                  Layanan Resmi Terpadu
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight font-display">
                  Layanan Umum <br />
                  <span className="text-daikin-blue-light font-light">Official Services</span>
                </h1>

                <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl font-sans">
                  Dengan teknisi yang berpengalaman dan terlatih yang dilengkapi dengan peralatan khusus, kami menyediakan berbagai layanan untuk produk perumahan, komersial, dan industri.
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
                    Foto Layanan Umum & Dukungan Teknis Purnajual Teknisi Daikin Indonesia
                  </p>
                </div>
              </div>

            </div>
          </FadeInUp>

        </div>
      </div>

      {/* ── 2. UTAMA: 4 LAYANAN KATEGORI (MAPPED FROM IMAGE) ────────────────── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          
          <FadeInUp className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
              Cakupan Layanan Umum
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-charcoal tracking-tight">
              Kategori Layanan Utama Daikin
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-sans font-light leading-relaxed">
              Empat fokus utama dukungan teknis dan operasional untuk memberikan kenyamanan tanpa batas bagi pelanggan.
            </p>
          </FadeInUp>

          {/* 4 Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((svc, idx) => {
              const Icon = svc.icon
              return (
                <FadeInUp key={svc.id} delay={idx * 0.1}>
                  <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
                    
                    {/* Top Color Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${svc.color}`} />

                    <div className="space-y-6">
                      
                      {/* Header Card */}
                      <div className="flex items-start justify-between gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-daikin-blue bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                          {svc.badge}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-extrabold font-display text-charcoal tracking-tight group-hover:text-daikin-blue transition-colors">
                          {svc.title}
                        </h3>
                        <p className="text-slate-600 text-sm font-sans leading-relaxed font-light">
                          {svc.description}
                        </p>
                      </div>

                      {/* Key Highlights / Features */}
                      <div className="bg-sky-50/60 rounded-2xl p-4 border border-sky-100 space-y-2.5">
                        <span className="text-[11px] font-bold text-daikin-blue uppercase tracking-widest block">
                          Cakupan Bantuan:
                        </span>
                        <ul className="space-y-2 text-xs font-sans text-slate-700">
                          {svc.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Action Footer */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                      {svc.actionHref.startsWith('http') || svc.actionHref.startsWith('tel:') ? (
                        <a
                          href={svc.actionHref}
                          target={svc.actionHref.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-daikin-blue hover:text-daikin-blue-dark transition-colors"
                        >
                          <span>{svc.actionText}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <Link
                          to={svc.actionHref}
                          className="inline-flex items-center gap-2 text-sm font-bold text-daikin-blue hover:text-daikin-blue-dark transition-colors"
                        >
                          <span>{svc.actionText}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}

                      <span className="text-xs text-slate-400 font-semibold">
                        Layanan #{idx + 1}
                      </span>
                    </div>

                  </div>
                </FadeInUp>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 3. TERPUSAT CONTACT / NOMOR BANTUAN DAIKIN (BLUE STYLED) ───────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <div className="bg-gradient-to-br from-[#061730] via-daikin-blue-dark to-[#005580] rounded-3xl p-8 md:p-12 text-white border border-white/20 shadow-2xl relative overflow-hidden space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 inline-block">
                Pusat Bantuan Resmi
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
                Hubungi Layanan Bantuan Daikin
              </h2>
              <p className="text-blue-100/90 text-sm font-sans font-light leading-relaxed">
                Seluruh pertanyaan teknis, konsultasi produk, dan permohonan informasi ditangani secara langsung melalui kontak bantuan terpusat Daikin Indonesia.
              </p>
            </div>

            {/* 3 Centralized Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Call Center */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-white/30 transition-all flex flex-col justify-between space-y-6 text-center group">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 text-cyan-300 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-lg text-white">Call Center Bebas Pulsa</h3>
                    <p className="text-xs font-sans text-blue-100/80 mt-1">Layanan hotline bebas pulsa nasional 24/7</p>
                  </div>
                  <div className="text-xl font-extrabold text-cyan-300 font-display">
                    0800 1 081 081
                  </div>
                </div>

                <a
                  href="tel:08001081081"
                  className="w-full py-3 bg-white text-daikin-blue font-bold text-xs rounded-xl hover:bg-sky-50 transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Telepon Sekarang</span>
                </a>
              </div>

              {/* Card 2: WhatsApp Official */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-white/30 transition-all flex flex-col justify-between space-y-6 text-center group">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 text-cyan-300 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-lg text-white">WhatsApp Official</h3>
                    <p className="text-xs font-sans text-blue-100/80 mt-1">Layanan perpesanan cepat Daikin</p>
                  </div>
                  <div className="text-xl font-extrabold text-cyan-300 font-display">
                    +62 811-9048-058
                  </div>
                </div>

                <a
                  href="https://wa.me/628119048058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-cyan-500 text-white font-bold text-xs rounded-xl hover:bg-cyan-600 transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat WhatsApp</span>
                </a>
              </div>

              {/* Card 3: Form Kontak Resmi */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-white/30 transition-all flex flex-col justify-between space-y-6 text-center group">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 text-cyan-300 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-lg text-white">Formulir Kontak Resmi</h3>
                    <p className="text-xs font-sans text-blue-100/80 mt-1">Kirimkan pertanyaan atau pesan resmi</p>
                  </div>
                  <div className="text-sm font-semibold text-cyan-200 font-sans">
                    Form Kontak / Contact Us
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-3 bg-daikin-blue text-white font-bold text-xs rounded-xl hover:bg-daikin-blue-dark transition-all shadow-md inline-flex items-center justify-center gap-2 border border-white/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Buka Halaman Kontak</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 4. MENU CARD LAYANAN TEKNIS LAINNYA ──────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue">
                Ekosistem Layanan Teknis
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-charcoal mt-1">
                Layanan Teknis Lainnya
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-daikin-blue hover:text-daikin-blue-dark transition-colors"
            >
              <span>LIHAT SERTIFIKASI & DEALER</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedTechnicalServices.map((card) => {
              const Icon = card.icon
              return (
                <Link
                  key={card.title}
                  to={card.path}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-sky-50 text-daikin-blue flex items-center justify-center group-hover:bg-daikin-blue group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-daikin-blue bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                        {card.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold font-display text-base text-charcoal group-hover:text-daikin-blue transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs font-sans text-slate-500 leading-relaxed mt-1.5">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-daikin-blue">
                    <span>Akses Layanan</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </section>

      {/* Floating PichonKun Assistant Helper */}
      <PichonKunHelper />
    </PageTransition>
  )
}
