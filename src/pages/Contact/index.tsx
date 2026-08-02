import { lazy, Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2,
  Headphones, Sparkles, HelpCircle, ArrowRight, FileText, Image as ImageIcon,
  ChevronDown
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import Button from '@/components/ui/Button'
import { daikinSocialLinks } from '@/components/ui/SocialIcons'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const contactChannels = [
  {
    icon: Phone,
    title: 'Telepon Bebas Pulsa',
    value: '0800 1 081 081',
    sub: 'Senin – Jumat 08.00–17.00 WIB',
    gradient: 'from-[#0a1526] via-daikin-blue-dark to-daikin-blue',
  },
  {
    icon: Mail,
    title: 'Email Layanan',
    value: 'customercare@daikin.co.id',
    sub: 'Respons cepat 1×24 jam kerja',
    gradient: 'from-daikin-blue-dark to-sky-600',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Official',
    value: '+62 811-1000-0202',
    sub: 'Chat langsung dengan tim CS',
    gradient: 'from-[#0080cb] to-cyan-500',
  },
  {
    icon: MapPin,
    title: 'Kantor Pusat Head Quarter',
    value: 'Menara Astra Lt. 7 & 8',
    sub: 'Jalan Jendral Sudirman Kav. 5-6, Jakarta Pusat 10220',
    gradient: 'from-sky-600 to-daikin-blue-dark',
  },
]

const officeHours = [
  { day: 'Senin – Jumat', hours: '08.00 – 17.00 WIB' },
  { day: 'Sabtu', hours: '08.00 – 13.00 WIB' },
  { day: 'Minggu & Libur Nasional', hours: 'Tutup' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [captchaChecked, setCaptchaChecked] = useState(false)

  const [formState, setFormState] = useState({
    requestCategory: 'Surat Penawaran',
    name: '',
    phone: '',
    email: '',
    company: '',
    address: '',
    province: 'Bali',
    businessSector: 'Pengguna',
    productType: 'Residential (Split, Multi-Split, Air Purifier)',
    requestDetail: '',
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <PageMeta
        title="Hubungi Kami | PT Daikin Airconditioning Indonesia"
        description="Hubungi tim Daikin Indonesia - kami siap membantu pertanyaan seputar produk AC, layanan servis garansi, dan dealer resmi."
        canonical="/contact"
      />

      {/* ── 1. HERO BANNER (Daikin Blue Tone with AirParticles) ────────────── */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#0080cb] text-white">
        <Suspense fallback={null}><AirParticles color="white" /></Suspense>

        {/* Ambient Glow & Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-300/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          <Breadcrumb
            items={[
              { label: 'Profil Perusahaan', path: '/all-about' },
              { label: 'Hubungi Kami' }
            ]}
            className="text-white/80 mb-8"
          />

          <FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Title & Text */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 border border-white/20">
                  <Headphones className="w-4 h-4 text-cyan-300" />
                  LAYANAN PELANGGAN TERPADU
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-tight uppercase drop-shadow-md">
                  Kami Siap <br />
                  <span className="text-cyan-200 font-light">Membantu Anda</span>
                </h1>

                <p className="text-white/95 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  Punya pertanyaan seputar produk AC, layanan garansi, atau dealer resmi? Tim Daikin Indonesia hadir melayani Anda melalui berbagai saluran komunikasi resmi.
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
                    Foto Tim Contact Center & Call Center Layanan Pelanggan Daikin Indonesia
                  </p>
                </div>
              </div>

            </div>
          </FadeInUp>
        </div>
      </div>

      {/* ── 2. CONTACT CHANNELS MATRIX & FAQ QUICK LINK ──────────────────── */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-6">
          <FadeInUp stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactChannels.map(({ icon: Icon, title, value, sub, gradient }) => (
              <FadeInItem key={title}>
                <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${gradient} p-7 text-white h-full border border-white/20 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between space-y-4`}>
                  <div className="absolute inset-0 opacity-[0.07]" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }} />
                  <div className="relative z-10 space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/25">
                      <Icon className="w-6 h-6 text-cyan-200" />
                    </div>
                    <div>
                      <div className="text-[11px] text-cyan-200 font-bold uppercase tracking-wider mb-1">{title}</div>
                      <div className="font-bold font-display text-lg leading-snug text-white">{value}</div>
                    </div>
                  </div>
                  <div className="relative z-10 text-white/80 text-xs font-sans pt-2 border-t border-white/15">
                    {sub}
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInUp>

          {/* ── CARD PUSAT TIPS & INFORMASI (FAQ REDIRECTION - LITE STYLE) ── */}
          <FadeInUp>
            <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6 mt-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-daikin-blue-50 text-daikin-blue flex items-center justify-center border border-daikin-blue/15 flex-shrink-0">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-daikin-blue bg-daikin-blue-50 px-2.5 py-0.5 rounded-md border border-daikin-blue/15">
                      Pusat Solusi Mandiri
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-charcoal">
                    Tips & Informasi (FAQ)
                  </h3>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-xl">
                    Cari jawaban cepat seputar kendala operasional AC, indikator berkedip, pembersihan filter Air Purifier, dan panduan perawatan mandiri.
                  </p>
                </div>
              </div>

              <Link
                to="/insights/faq"
                className="px-5 py-2.5 bg-daikin-blue text-white font-bold text-xs rounded-xl hover:bg-daikin-blue-dark transition-all shadow-2xs inline-flex items-center gap-2 flex-shrink-0"
              >
                <span>Lihat FAQ & Informasi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── 3. FORM & LOCATION INFO SECTION ──────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Contact Form */}
            <FadeInLeft className="lg:col-span-7">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-daikin-blue-50 px-3.5 py-1.5 rounded-full border border-daikin-blue/15">
                  Formulir Komunikasi
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-charcoal tracking-tight">
                  Kirim Pesan Kepada Kami
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm font-sans">
                  Isi formulir berikut dan tim Customer Care Daikin akan menghubungi Anda secepatnya.
                </p>
              </div>

              {submitted ? (
                <div className="bg-slate-50 border border-emerald-200 rounded-3xl p-10 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-charcoal">Pesan Terkirim!</h3>
                  <p className="text-gray-600 text-xs sm:text-sm font-sans max-w-md leading-relaxed">
                    Terima kasih telah menghubungi kami. Tim Customer Care Daikin Indonesia akan merespons pesan Anda dalam 1×24 jam kerja.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-daikin-blue hover:bg-daikin-blue-dark text-white text-xs font-bold font-display rounded-xl transition-all shadow-xs"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-2xs">
                  
                  {/* 1. Kategori Permintaan */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1">Kategori Permintaan</label>
                    <div className="relative">
                      <select
                        value={formState.requestCategory}
                        onChange={(e) => setFormState({ ...formState, requestCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue transition-all appearance-none pr-9"
                      >
                        <option value="Surat Penawaran">Surat Penawaran</option>
                        <option value="Informasi Produk">Informasi Produk</option>
                        <option value="Layanan Purnajual / Garansi">Layanan Purnajual / Garansi</option>
                        <option value="Keluhan & Feedback">Keluhan & Feedback</option>
                        <option value="Pengajuan Kemitraan Dealer">Pengajuan Kemitraan Dealer</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* 2. Nama */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1">Nama</label>
                    <input
                      type="text"
                      required
                      placeholder="Nama"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue transition-all"
                    />
                  </div>

                  {/* 3. Nomor Telepon */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1">Nomor Telepon</label>
                    <input
                      type="tel"
                      required
                      placeholder="Nomor Telepon"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue transition-all"
                    />
                  </div>

                  {/* 4. Alamat Email */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1">Alamat Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Alamat Email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue transition-all"
                    />
                  </div>

                  {/* 5. Perusahaan / Organisasi */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1">Perusahaan / Organisasi</label>
                    <input
                      type="text"
                      placeholder="Perusahaan / Organisasi"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue transition-all"
                    />
                  </div>

                  {/* 6. Alamat */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1">Alamat</label>
                    <textarea
                      rows={3}
                      placeholder="Alamat"
                      value={formState.address}
                      onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue transition-all resize-y min-h-[80px]"
                    />
                  </div>

                  {/* 7. Provinsi */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1">Provinsi</label>
                    <div className="relative">
                      <select
                        value={formState.province}
                        onChange={(e) => setFormState({ ...formState, province: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue transition-all appearance-none pr-9"
                      >
                        <option value="Bali">Bali</option>
                        <option value="DKI Jakarta">DKI Jakarta</option>
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jawa Tengah">Jawa Tengah</option>
                        <option value="Jawa Timur">Jawa Timur</option>
                        <option value="Banten">Banten</option>
                        <option value="Sumatera Utara">Sumatera Utara</option>
                        <option value="Sumatera Selatan">Sumatera Selatan</option>
                        <option value="Riau">Riau</option>
                        <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* 8. Bidang Usaha */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1">Bidang Usaha</label>
                    <div className="relative">
                      <select
                        value={formState.businessSector}
                        onChange={(e) => setFormState({ ...formState, businessSector: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue transition-all appearance-none pr-9"
                      >
                        <option value="Pengguna">Pengguna</option>
                        <option value="Konsultan HVAC / Arsitek">Konsultan HVAC / Arsitek</option>
                        <option value="Kontraktor / Developer">Kontraktor / Developer</option>
                        <option value="Dealer / Toko AC">Dealer / Toko AC</option>
                        <option value="Instansi Pemerintah">Instansi Pemerintah</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* 9. Tipe Produk */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1">Tipe Produk</label>
                    <div className="relative">
                      <select
                        value={formState.productType}
                        onChange={(e) => setFormState({ ...formState, productType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue transition-all appearance-none pr-9"
                      >
                        <option value="Residential (Split, Multi-Split, Air Purifier)">Residential (Split, Multi-Split, Air Purifier)</option>
                        <option value="Commercial (SkyAir)">Commercial (SkyAir)</option>
                        <option value="Industrial / Building (VRV System, Chiller)">Industrial / Building (VRV System, Chiller)</option>
                        <option value="Aksesori & Spare Parts">Aksesori & Spare Parts</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* 10. Detail Permintaan */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1">Detail Permintaan</label>
                    <textarea
                      rows={4}
                      placeholder="Detail Permintaan"
                      value={formState.requestDetail}
                      onChange={(e) => setFormState({ ...formState, requestDetail: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-sans text-charcoal focus:outline-none focus:border-daikin-blue transition-all resize-y min-h-[90px]"
                    />
                  </div>

                  {/* 11. reCAPTCHA Box Simulation */}
                  <div className="bg-[#f9f9f9] border border-[#d3d3d3] rounded-md p-3.5 flex items-center justify-between max-w-[280px]">
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={captchaChecked}
                        onChange={(e) => setCaptchaChecked(e.target.checked)}
                        className="w-5 h-5 rounded border-gray-300 text-daikin-blue focus:ring-daikin-blue cursor-pointer"
                      />
                      <span className="text-xs text-gray-700 font-medium font-sans">I'm not a robot</span>
                    </label>
                    <div className="flex flex-col items-center justify-center text-[9px] text-gray-400 font-sans leading-tight">
                      <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-[9px] mb-0.5">
                        ⚡
                      </div>
                      <span>reCAPTCHA</span>
                    </div>
                  </div>

                  {/* 12. Submit Button: KIRIM */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#0097E0] hover:bg-daikin-blue-dark text-white font-bold text-sm tracking-wider uppercase rounded-lg transition-colors shadow-2xs font-display text-center"
                  >
                    KIRIM
                  </button>

                </form>
              )}
            </FadeInLeft>

            {/* Info Panel: Office Hours, Location Map & Tips FAQ Link */}
            <FadeInRight className="lg:col-span-5 space-y-8">

              {/* Jam Operasional */}
              <div className="bg-slate-50 p-6 sm:p-7 rounded-3xl border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-daikin-blue-50 text-daikin-blue flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-charcoal text-base">Jam Operasional</h3>
                    <span className="text-[11px] font-sans text-gray-500">Daikin Contact Center</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-xs sm:text-sm font-sans">
                  {officeHours.map(({ day, hours }) => (
                    <div key={day} className="flex items-center justify-between py-2 border-b border-gray-200/60 last:border-0">
                      <span className="text-gray-600 font-medium">{day}</span>
                      <span className={`font-bold ${hours === 'Tutup' ? 'text-rose-500' : 'text-daikin-blue'}`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media Sosial Resmi Daikin (6 Icons matching uploaded design) */}
              <div className="bg-slate-50 p-6 sm:p-7 rounded-3xl border border-gray-200/80 space-y-4">
                <div>
                  <h3 className="font-bold font-display text-charcoal text-base">Media Sosial Resmi Daikin</h3>
                  <p className="text-xs text-gray-500 font-sans mt-0.5">
                    Ikuti kanal media sosial resmi Daikin Indonesia untuk kabar & promo terbaru.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                  {daikinSocialLinks.map(({ id, icon: Icon, href, label }) => (
                    <a
                      key={id}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-[#0097E0] hover:bg-daikin-blue-dark text-white flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110 group"
                    >
                      <Icon className="w-5 h-5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Tips & Informasi Quick Card - Lite Style */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-daikin-blue-50 text-daikin-blue flex items-center justify-center border border-daikin-blue/15">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold font-display text-charcoal text-sm">Tips & Informasi FAQ</h4>
                  </div>
                  <span className="text-[10px] font-bold text-daikin-blue bg-daikin-blue-50 px-2.5 py-1 rounded-md border border-daikin-blue/15">
                    Solusi Mandiri
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  Cek halaman FAQ kami untuk petunjuk penanganan masalah AC, pembersihan filter, dan pengoperasian produk secara mandiri.
                </p>
                <Link
                  to="/insights/faq"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-daikin-blue hover:text-daikin-blue-dark pt-1 transition-colors"
                >
                  <span>Buka Halaman FAQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Map Location Card */}
              <div className="bg-slate-50 p-6 sm:p-7 rounded-3xl border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-daikin-blue-50 text-daikin-blue flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-charcoal text-base">Lokasi Head Quarter</h3>
                    <span className="text-[11px] font-sans text-gray-500">PT Daikin Airconditioning Indonesia</span>
                  </div>
                </div>

                <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50 border border-daikin-blue/20 shadow-xs flex flex-col items-center justify-center text-center p-6 space-y-2">
                  <MapPin className="w-8 h-8 text-daikin-blue" />
                  <p className="text-xs font-bold font-display text-charcoal leading-relaxed">
                    Menara Astra Lt. 7 & 8<br />
                    <span className="font-sans font-normal text-gray-600">Jalan Jendral Sudirman Kav. 5-6, Karet Tengsin, Jakarta Pusat 10220, Indonesia</span>
                  </p>
                </div>
              </div>

            </FadeInRight>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
