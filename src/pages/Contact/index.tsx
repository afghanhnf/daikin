import { lazy, Suspense, useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Headphones, Sparkles } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import Button from '@/components/ui/Button'

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
  { day: 'Sabtu',         hours: '08.00 – 13.00 WIB' },
  { day: 'Minggu & Libur Nasional', hours: 'Tutup' },
]

const topics = [
  'Pertanyaan Produk & Rekomendasi',
  'Informasi Dealer & Showroom',
  'Jaminan Garansi & Layanan Servis',
  'Pelatihan & Sertifikasi Teknisi',
  'Kemitraan & Dealer Baru',
  'Lainnya',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

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

          <FadeInUp className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 border border-white/20">
              <Headphones className="w-4 h-4 text-cyan-300" />
              LAYANAN PELANGGAN TERPADU
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-tight uppercase drop-shadow-md">
              Kami Siap <br/>
              <span className="text-cyan-200 font-light">Membantu Anda</span>
            </h1>

            <p className="text-white/95 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl drop-shadow-sm">
              Punya pertanyaan seputar produk AC, layanan garansi, atau dealer resmi? Tim Daikin Indonesia hadir melayani Anda melalui berbagai saluran komunikasi resmi.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── 2. CONTACT CHANNELS MATRIX ───────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
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
                <form onSubmit={handleSubmit} className="space-y-5 bg-slate-50/70 p-7 rounded-3xl border border-gray-200/80 shadow-2xs">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold font-display text-charcoal mb-1.5">Nama Lengkap *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Masukkan nama lengkap Anda" 
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-xs font-sans focus:outline-none focus:border-daikin-blue focus:ring-2 focus:ring-daikin-blue/20 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold font-display text-charcoal mb-1.5">Email Aktif *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="nama@domain.com" 
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-xs font-sans focus:outline-none focus:border-daikin-blue focus:ring-2 focus:ring-daikin-blue/20 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold font-display text-charcoal mb-1.5">Nomor Telepon / WA</label>
                      <input 
                        type="tel" 
                        placeholder="+62 8xx xxxx xxxx" 
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-xs font-sans focus:outline-none focus:border-daikin-blue focus:ring-2 focus:ring-daikin-blue/20 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold font-display text-charcoal mb-1.5">Topik Pertanyaan *</label>
                      <select 
                        required 
                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-xs font-sans focus:outline-none focus:border-daikin-blue focus:ring-2 focus:ring-daikin-blue/20 transition-all"
                      >
                        <option value="">Pilih topik pertanyaan...</option>
                        {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-display text-charcoal mb-1.5">Pesan / Pertanyaan Detail *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tuliskan pertanyaan atau kebutuhan Anda secara detail..."
                      className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-xs font-sans focus:outline-none focus:border-daikin-blue focus:ring-2 focus:ring-daikin-blue/20 transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="rounded-xl shadow-md font-bold font-display">
                    <Send className="w-4 h-4 mr-1.5" /> Kirim Pesan
                  </Button>
                </form>
              )}
            </FadeInLeft>

            {/* Info Panel: Office Hours & Location Map */}
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
