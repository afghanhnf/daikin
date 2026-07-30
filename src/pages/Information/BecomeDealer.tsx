import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight, CheckCircle2, TrendingUp, Globe, Award, Target, Users,
  Building2, ShieldCheck, Sparkles, PhoneCall, Send, ArrowRight, X, Clock, MapPin
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const benefits = [
  {
    icon: Target,
    title: 'Pelayanan Tingkat Tinggi',
    desc: 'Menjadi bagian dari reputasi merek global yang selalu mendedikasikan standar kualitas layanan tertinggi kepada setiap konsumen.',
    badge: 'Kualitas Global'
  },
  {
    icon: Award,
    title: 'Pelatihan Kelas Satu',
    desc: 'Akses penuh ke Daikin Training Center untuk sertifikasi teknisi, prosedur instalasi presisi, dan manajemen penjualan.',
    badge: 'Sertifikasi Resmi'
  },
  {
    icon: TrendingUp,
    title: 'Dukungan Promosi & Branding',
    desc: 'Bantuan materi periklanan, dekorasi showroom resmi (iShop/ProShop), promosi nasional, dan sistem pemasaran terpadu.',
    badge: 'Marketing Support'
  },
  {
    icon: Users,
    title: 'Ahli Tata Udara Terpercaya',
    desc: 'Membangun kepercayaan pelanggan bahwa bisnis Anda adalah spesialis AC resmi dengan jaminan garansi asli pabrik Daikin.',
    badge: 'Reputasi Spesialis'
  },
]

const stats = [
  'Nilai penjualan global lebih dari $10 Miliar USD',
  'Lebih dari 70 lokasi pabrik di seluruh dunia',
  'Jaringan pemasaran aktif di lebih dari 140 negara',
  'Pelopor 3 teknologi inti: Inverter, Refrigerant R-32 & Heat Pump',
  'Investasi riset & teknologi melebihi $300 Juta USD per tahun',
  'Pengalaman industri lebih dari 100 tahun sejak didirikan pada 1924',
  'Sistem manajemen People-Centered untuk perkembangan mitra',
  'Jaringan 14 kantor cabang dan 1.200+ dealer resmi di Indonesia'
]

const steps = [
  {
    num: '01',
    title: 'Pengajuan & Formulir',
    desc: 'Isi formulir pendaftaran dealer online atau hubungi tim bisnis kantor cabang Daikin terdekat di kota Anda.'
  },
  {
    num: '02',
    title: 'Evaluasi & Verifikasi',
    desc: 'Tim Daikin akan melakukan peninjauan profil usaha, kelayakan lokasi toko, dan potensi pasar bersama Anda.'
  },
  {
    num: '03',
    title: 'Kemitraan & Onboarding',
    desc: 'Penandatanganan kemitraan resmi, pelatihan teknis & sales, dukungan materi signage toko, dan siap beroperasi.'
  }
]

export default function BecomeDealer() {
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    phone: '',
    email: '',
    message: ''
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setShowModal(false)
      setSubmitted(false)
      setFormData({ name: '', company: '', city: '', phone: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <PageTransition>
      <PageMeta title="Menjadi Dealer Resmi Daikin - Kemitraan Bisnis AC" canonical="/information/dealer" />

      {/* Modern Sleek Hero Banner */}
      <div className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue text-white">
        <Suspense fallback={null}><AirParticles /></Suspense>

        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

          <Breadcrumb
            items={[
              { label: 'Informasi', path: '/solutions' },
              { label: 'Menjadi Dealer Daikin' }
            ]}
            className="text-white/80 mb-8"
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 backdrop-blur-md border border-white/15 text-sky-200">
                  <Globe className="w-3.5 h-3.5 text-sky-300" /> Kemitraan Jaringan Global Daikin
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                  Menjadi Dealer <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-300 font-light">
                    Resmi Daikin
                  </span>
                </h1>

                <p className="text-white/85 text-base md:text-lg font-normal leading-relaxed mb-8 max-w-2xl">
                  Bergabunglah menjadi bagian dari jaringan spesialis tata udara nomor 1 di dunia. Tingkatkan pertumbuhan bisnis Anda dengan dukungan teknologi Jepang, pelatihan profesional, dan jaringan terluas di Indonesia.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-6 py-3.5 bg-white text-daikin-blue font-bold text-sm rounded-xl shadow-md hover:bg-sky-50 transition-all flex items-center gap-2 group"
                  >
                    <span>Daftar Kemitraan Dealer</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="#kenapa-daikin"
                    className="px-6 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                  >
                    Pelajari Keuntungan
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Hero Right-Side Thumbnail Image Box */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md aspect-[4/3]">
                <div className="relative z-10 w-full h-full bg-white/15 rounded-2xl border border-white/25 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                  <span className="text-xs opacity-60 mt-1">(Daikin Authorized Dealer & Showroom Network)</span>
                </div>
              </FadeInUp>
            </div>
          </div>

        </div>
      </div>

      {/* Global Stat Highlights Bar */}
      <section className="py-8 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl md:text-4xl font-extrabold text-daikin-blue">$10B+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Penjualan Global Per Tahun</div>
            </div>
            <div className="text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl md:text-4xl font-extrabold text-daikin-blue">70+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Lokasi Pabrik Internasional</div>
            </div>
            <div className="text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl md:text-4xl font-extrabold text-daikin-blue">140+</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Negara Jangkauan Pemasaran</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-extrabold text-daikin-blue">100+ thn</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Pengalaman Sejak Tahun 1924</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Keuntungan Menjadi Dealer Daikin */}
      <section id="kenapa-daikin" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
            Keunggulan Kemitraan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Mengapa Menjadi <span className="text-daikin-blue">Dealer Resmi Daikin?</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Daikin berkomitmen memberikan dukungan penuh kepada setiap dealer agar tumbuh berkembang dan memimpin pasar tata udara lokal.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors duration-300">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/70">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-daikin-blue transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {benefit.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-daikin-blue group-hover:translate-x-1 transition-transform">
                  <span>Standard Daikin Excellence</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* Section 2: Keunggulan Merek & Inovasi Teknologi */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-sky-100/80 text-daikin-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200">
                <Sparkles className="w-3.5 h-3.5" /> Kepemimpinan Industri
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                Produsen Spesialis AC <br />
                <span className="text-daikin-blue">Terkemuka di Dunia</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Daikin adalah satu-satunya pabrikan di dunia yang secara mandiri mengembangkan dan memproduksi seluruh komponen utama AC- mulai dari kompresor, motor, hingga gas refrigerant ramah lingkungan (R-32).
              </p>

              <div className="grid sm:grid-cols-1 gap-3">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">{stat}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>

          {/* Right Highlight Box: Warisan Jepang & Komitmen Riset */}
          <div className="lg:col-span-6">
            <FadeInUp delay={0.2}>
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-daikin-blue-dark text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-daikin-blue/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15 text-sky-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-sky-200 uppercase tracking-widest font-semibold">Reputasi Kualitas</span>
                    <h3 className="text-lg font-bold text-white">Merek Jepang Bersejarah</h3>
                  </div>
                </div>

                <div className="space-y-4 text-xs md:text-sm text-white/85 leading-relaxed font-light mb-8">
                  <p>
                    Didirikan pada tahun <strong className="text-white font-semibold">1924 di Osaka, Jepang</strong>, Daikin telah tumbuh menjadi raksasa industri penyejuk udara global yang mengedepankan kualitas presisi tinggi dan keandalan produk jangka panjang.
                  </p>
                  <p>
                    Tantangan iklim tropis dan komitmen terhadap kelestarian lingkungan mendorong Daikin terus berinvestasi lebih dari <strong className="text-white font-semibold">$300 Juta USD setiap tahunnya</strong> pada pusat riset & pengembangan (R&D) teknologi tata udara.
                  </p>
                </div>

                <div className="p-4 bg-white/10 rounded-2xl border border-white/15 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-white/70 font-medium">Tertarik Menjadi Mitra?</div>
                    <div className="text-sm font-bold text-white">Konsultasikan Bersama Tim Daikin</div>
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-4 py-2 bg-white text-daikin-blue font-bold text-xs rounded-xl hover:bg-sky-50 transition-colors shrink-0"
                  >
                    Formulir Dealer
                  </button>
                </div>
              </div>
            </FadeInUp>
          </div>

        </div>
      </section>

      {/* Section 3: 3-Langkah Menjadi Dealer */}
      <section className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
            Tahapan Kemitraan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            3 Langkah Mudah <span className="text-daikin-blue">Menjadi Dealer</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Proses alur kerja sama yang jelas dan profesional untuk memulai perjalanan bisnis Anda bersama Daikin.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((st, i) => (
            <FadeInUp key={i} delay={i * 0.15}>
              <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-2xs relative group hover:border-daikin-blue/40 transition-all">
                <div className="text-4xl font-black text-daikin-blue/20 group-hover:text-daikin-blue/40 transition-colors mb-4">
                  {st.num}
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{st.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{st.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* CTA Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-daikin-blue-dark to-daikin-blue rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold mb-2">Siap Bergabung dengan Daikin Indonesia?</h3>
            <p className="text-white/80 text-sm max-w-xl">
              Isi formulir pengajuan dealer online dan tim jaringan kemitraan Daikin akan segera menghubungi Anda.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-7 py-3.5 bg-white text-daikin-blue font-bold text-sm rounded-xl shadow-md hover:bg-sky-50 transition-all shrink-0 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Isi Formulir Dealer</span>
          </button>
        </div>
      </section>

      {/* Modal Popup Application Form */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative overflow-hidden border border-slate-100"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">Formulir Terkirim!</h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                    Terima kasih atas minat Anda menjadi Dealer Daikin. Tim Kemitraan kami akan segera menghubungi Anda dalam 1-2 hari kerja.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Building2 className="w-5 h-5 text-daikin-blue" />
                    <h3 className="text-xl font-bold text-charcoal">Form Pendaftaran Dealer</h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-6">
                    Silakan lengkapi data profil usaha Anda di bawah ini:
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Nama Lengkap Pemilik / Penanggung Jawab</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="mis: Bpk. Hendra Wijaya"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-daikin-blue"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Nama Toko / Perusahaan</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="mis: CV. Sejuk Mandiri"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-daikin-blue"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Kota / Provinsi</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="mis: Surabaya, Jatim"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-daikin-blue"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">No. WhatsApp / Telepon</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0812xxxxxxxx"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-daikin-blue"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@toko.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-daikin-blue"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Pesan / Catatan Singkat</label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Pengalaman bidang AC, rencana lokasi toko, dll..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-daikin-blue resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 mt-2 bg-daikin-blue text-white font-bold text-xs rounded-xl hover:bg-daikin-blue-dark transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Pengajuan Kemitraan</span>
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </PageTransition>
  )
}
