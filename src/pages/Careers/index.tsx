import { lazy, Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  MapPin, Clock, Briefcase, ArrowRight, Globe, BookOpen, DollarSign, 
  HeartHandshake, Users, TrendingUp, Award, CheckCircle2, Sparkles, ChevronRight 
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeading from '@/components/sections/SectionHeading'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'
import { jobs } from '@/data/careers'
import { cn } from '@/utils/cn'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const deptFilters = ['Semua', ...new Set(jobs.map((j) => j.department))]

const typeLabel: Record<string, string> = { 'full-time': 'Full-Time', 'contract': 'Kontrak', 'internship': 'Magang' }
const typeBg: Record<string, string> = { 
  'full-time': 'bg-daikin-blue-50 text-daikin-blue border border-daikin-blue/15', 
  'contract': 'bg-sky-50 text-sky-700 border border-sky-200', 
  'internship': 'bg-cyan-50 text-cyan-700 border border-cyan-200' 
}

const benefits = [
  { icon: Globe, title: 'Jaringan Global', desc: 'Peluang karir dan rotasi di 160+ negara sebagai bagian dari ekosistem global Daikin Group.' },
  { icon: BookOpen, title: 'Learning & Development', desc: 'Akses ke Daikin Academy, e-learning platform, dan program pelatihan internasional secara berkelanjutan.' },
  { icon: DollarSign, title: 'Kompensasi Kompetitif', desc: 'Struktur gaji kompetitif di industri, dilengkapi bonus kinerja, THR, dan berbagai tunjangan.' },
  { icon: HeartHandshake, title: 'Work-Life Balance', desc: 'Lingkungan kerja yang suportif, fleksibel, dan mengedepankan kesehatan fisik maupun mental karyawan.' },
  { icon: TrendingUp, title: 'Jenjang Karir Jelas', desc: 'Sistem promosi berbasis kinerja yang transparan dengan jalur karir yang terstruktur dan terencana.' },
  { icon: Award, title: 'Program Penghargaan', desc: 'Pengakuan prestasi melalui Employee of the Month, Long Service Award, dan program apresiasi lainnya.' },
]

const cultureCards = [
  { title: 'Tim Kolaboratif', gradient: 'from-[#0a1526] to-[#005580]', sub: 'People & Culture' },
  { title: 'Inovasi Tanpa Henti', gradient: 'from-daikin-blue-dark to-daikin-blue', sub: 'Innovation Lab' },
  { title: 'Lingkungan Inklusif', gradient: 'from-[#0080cb] to-sky-500', sub: 'Diversity & Inclusion' },
  { title: 'Belajar Setiap Hari', gradient: 'from-sky-600 to-cyan-500', sub: 'Learning Culture' },
]

const recruitmentSteps = [
  { step: '01', title: 'Lamar Online', desc: 'Kirimkan CV dan surat lamaran melalui portal karir resmi kami. Proses cepat dan mudah.' },
  { step: '02', title: 'Seleksi Administrasi', desc: 'Tim HR kami meninjau kelengkapan dan kesesuaian profil Anda dalam 5–7 hari kerja.' },
  { step: '03', title: 'Tes & Wawancara', desc: 'Sesi wawancara langsung dengan HR dan manajer departemen terkait.' },
  { step: '04', title: 'Offering & Onboarding', desc: 'Presentasi penawaran kerja dan program onboarding intensif untuk karyawan baru.' },
]

export default function Careers() {
  const [activeDept, setActiveDept] = useState('Semua')

  const filtered = activeDept === 'Semua' ? jobs : jobs.filter((j) => j.department === activeDept)

  return (
    <PageTransition>
      <PageMeta
        title="Karir di Daikin Indonesia | Peluang Kerja & Talenta"
        description="Bergabunglah dengan tim Daikin Indonesia - bangun karir bermakna bersama pemimpin industri pendingin udara global berstandar mutu tinggi."
        canonical="/careers"
      />

      {/* ── 1. HERO BANNER (Daikin Blue Tone with AirParticles) ────────────── */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#0080cb] text-white">
        <Suspense fallback={null}><AirParticles color="white" /></Suspense>

        {/* Ambient Glows & Dot Pattern */}
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
              { label: 'Karir di Daikin' }
            ]}
            className="text-white/80 mb-8"
          />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <FadeInLeft className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 border border-white/20">
                <Briefcase className="w-4 h-4 text-cyan-300" />
                PELUANG KARIR & TALENTA
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-tight uppercase drop-shadow-md">
                Karir di Daikin <br/>
                <span className="text-cyan-200 font-light">Indonesia</span>
              </h1>

              <p className="text-white/95 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl drop-shadow-sm">
                Bergabunglah dengan tim Daikin Indonesia dan bangun karir yang bermakna bersama pemimpin industri AC global. Kami percaya karyawan yang bahagia menciptakan produk yang luar biasa.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#openings"
                  className="px-7 py-3.5 bg-white text-daikin-blue rounded-xl font-bold font-display text-xs md:text-sm hover:bg-cyan-50 transition-all shadow-lg flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4 text-daikin-blue" />
                  <span>Lihat Lowongan Kerja</span>
                </a>
              </div>
            </FadeInLeft>

            <FadeInRight className="lg:col-span-5 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0097E0]/20 to-transparent z-0" />
                <div className="aspect-[4/3] w-full bg-white/10 rounded-2xl flex flex-col items-center justify-center border border-white/15 relative z-10 gap-3 text-center p-6 shadow-inner">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 text-cyan-200 flex items-center justify-center mb-1">
                    <Users className="w-8 h-8" />
                  </div>
                  <span className="text-white font-bold font-display text-lg">5.000+ Karyawan Indonesia</span>
                  <span className="text-cyan-200 text-xs font-sans">80.000+ Global Workforce di 160+ Negara</span>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </div>

      {/* ── 2. CULTURE CARDS (BUDAYA KERJA DAIKIN) ───────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          
          <SectionHeading
            title="Budaya Kerja Daikin"
            subtitle="Di Daikin, kami membangun budaya di mana setiap orang merasa dihargai, didukung untuk berkembang, dan terinspirasi memberikan yang terbaik."
          />

          <FadeInUp stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cultureCards.map((card) => (
              <FadeInItem key={card.title}>
                <div className={`rounded-3xl overflow-hidden h-56 bg-gradient-to-br ${card.gradient} relative group p-6 flex flex-col justify-end border border-white/20 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white, transparent 60%)' }} />
                  <div className="relative z-10 space-y-1">
                    <span className="text-cyan-200 text-xs font-bold uppercase tracking-widest block">{card.sub}</span>
                    <h4 className="text-white font-bold font-display text-lg leading-snug">{card.title}</h4>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInUp>

          {/* Detailed Why Join Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-6">
            <FadeInLeft className="space-y-5 text-gray-600 font-sans leading-relaxed">
              <div className="w-12 h-1 bg-daikin-blue rounded-full mb-2" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-charcoal tracking-tight">
                Mengapa Berkarir di Daikin?
              </h2>
              <p className="text-base text-gray-700">
                Daikin Indonesia bukan sekadar tempat bekerja - ini adalah komunitas profesional yang terus tumbuh bersama. Kami memberikan kesempatan nyata untuk berkembang, belajar, dan memberikan dampak yang berarti.
              </p>
              <p className="text-sm">
                Dengan lebih dari 5.000 karyawan di seluruh Indonesia dan akses ke jaringan 80.000+ karyawan global Daikin, Anda akan bergabung dengan ekosistem dinamis dan penuh peluang lintas budaya.
              </p>
              <p className="text-sm">
                Kami juga bangga dengan komitmen terhadap kesetaraan dan inklusi - setiap individu mendapatkan kesempatan yang sama untuk berkontribusi dan maju.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { v: '5.000+', l: 'Karyawan Indonesia' },
                  { v: '80.000+', l: 'Global Workforce' },
                  { v: '160+', l: 'Negara Operasi' }
                ].map(({ v, l }) => (
                  <div key={l} className="bg-daikin-blue-50 rounded-2xl p-4 text-center border border-daikin-blue/15">
                    <div className="text-lg md:text-xl font-bold font-display text-daikin-blue">{v}</div>
                    <div className="text-[11px] font-sans text-gray-600 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </FadeInLeft>

            <FadeInRight className="space-y-4">
              <div className="rounded-3xl overflow-hidden h-52 bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#0080cb] relative p-7 flex flex-col justify-end text-white border border-white/20 shadow-lg">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, white, transparent 50%)' }} />
                <div className="relative z-10 space-y-1">
                  <span className="text-cyan-300 font-bold font-display text-lg">Global Career Network</span>
                  <p className="text-blue-100 text-xs font-sans">160+ negara, peluang pengembangan tanpa batas</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden h-36 bg-gradient-to-br from-daikin-blue-dark to-daikin-blue relative p-5 flex flex-col justify-end text-white shadow-sm">
                  <span className="text-white font-bold font-display text-sm">Daikin Academy</span>
                  <span className="text-blue-100 text-[11px] font-sans">Pelatihan Berkelanjutan</span>
                </div>
                <div className="rounded-2xl overflow-hidden h-36 bg-gradient-to-br from-sky-600 to-cyan-500 relative p-5 flex flex-col justify-end text-white shadow-sm">
                  <span className="text-white font-bold font-display text-sm">Work-Life Balance</span>
                  <span className="text-cyan-100 text-[11px] font-sans">Lingkungan Kerja Suportif</span>
                </div>
              </div>
            </FadeInRight>
          </div>

        </div>
      </section>

      {/* ── 3. BENEFITS & FACILITIES ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          
          <SectionHeading
            title="Benefit & Fasilitas"
            subtitle="Kami menginvestasikan yang terbaik untuk karyawan kami - karena tim yang bahagia adalah fondasi utama keberhasilan Daikin."
            centered
          />

          <FadeInUp stagger className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <FadeInItem key={title}>
                <div className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-daikin-blue/30 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-daikin-blue-50 text-daikin-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold font-display text-charcoal group-hover:text-daikin-blue transition-colors text-base">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-gray-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInUp>

        </div>
      </section>

      {/* ── 4. RECRUITMENT PROCESS ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          
          <SectionHeading
            title="Proses Rekrutmen"
            subtitle="Proses transparan dan efisien - kami menghargai waktu Anda dan berkomitmen memberikan pengalaman rekrutmen yang positif."
            centered
          />

          <FadeInUp stagger className="grid md:grid-cols-4 gap-6">
            {recruitmentSteps.map((step) => (
              <FadeInItem key={step.step}>
                <div className="bg-slate-50 rounded-3xl p-7 border border-gray-200/80 text-center space-y-3 hover:bg-sky-50/50 hover:border-daikin-blue/30 transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-daikin-blue to-daikin-blue-dark text-white font-black font-display text-xl flex items-center justify-center mx-auto shadow-md">
                    {step.step}
                  </div>
                  <h4 className="font-bold font-display text-charcoal text-base">{step.title}</h4>
                  <p className="text-xs font-sans text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInUp>

        </div>
      </section>

      {/* ── 5. JOB LISTINGS SECTION ──────────────────────────────────────── */}
      <section id="openings" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue">
                Peluang Karir Aktif
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal mt-1">
                Lowongan Terbuka
              </h2>
              <p className="text-xs sm:text-sm font-sans text-gray-500 mt-1">
                {filtered.length} posisi tersedia - temukan peluang yang paling sesuai dengan keahlian Anda.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {deptFilters.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={cn(
                    'px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200',
                    activeDept === dept
                      ? 'bg-daikin-blue text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-daikin-blue/40'
                  )}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listing Cards */}
          <FadeInUp stagger className="space-y-4">
            {filtered.map((job) => (
              <FadeInItem key={job.id}>
                <Link to={`/careers/${job.id}`}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-daikin-blue/40 transition-all duration-200 group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="font-bold font-display text-charcoal text-base group-hover:text-daikin-blue transition-colors">
                            {job.title.id}
                          </h3>
                          {job.isHighlight && (
                            <span className="text-[10px] bg-amber-100 text-amber-800 font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border border-amber-300">
                              HOT POSITION
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5 text-daikin-blue" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-daikin-blue" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-daikin-blue" />
                            {job.postedDate}
                          </span>
                          <span className={cn('px-2.5 py-0.5 rounded-md text-[11px] font-bold', typeBg[job.type])}>
                            {typeLabel[job.type]}
                          </span>
                        </div>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-daikin-blue-50 group-hover:bg-daikin-blue text-daikin-blue group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0 mt-1">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInItem>
            ))}
          </FadeInUp>

          {filtered.length === 0 && (
            <div className="bg-white rounded-3xl p-12 border border-gray-200 text-center space-y-3 text-gray-400">
              <Users className="w-12 h-12 mx-auto text-gray-300" />
              <p className="font-medium text-sm text-gray-600">Tidak ada posisi untuk departemen ini saat ini.</p>
              <button
                onClick={() => setActiveDept('Semua')}
                className="inline-flex items-center gap-1 text-xs text-daikin-blue font-bold hover:underline"
              >
                <span>Lihat semua lowongan</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>
      </section>
    </PageTransition>
  )
}
