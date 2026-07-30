import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Award, ShieldCheck, CheckCircle2, FileCheck, Sparkles, Building2 } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import { FadeInLeft, FadeInRight } from '@/components/animations/FadeInLeft'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

export default function AwardsCertifications() {
  return (
    <PageTransition>
      <PageMeta
        title="Penghargaan & Sertifikasi | Daikin Indonesia"
        description="Menjadi salah satu perusahaan terkemuka di Indonesia, PT Daikin Airconditioning Indonesia telah dianugerahi berbagai penghargaan dan sertifikasi resmi dari lembaga nasional dan internasional."
        canonical="/profile/awards"
      />

      {/* ── 1. HERO BANNER (Daikin Blue Tone) ─────────────────────────────── */}
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
        <div className="absolute -left-64 top-0 w-[800px] h-[800px] bg-cyan-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          
          <Breadcrumb
            items={[
              { label: 'Profil Perusahaan', path: '/all-about' },
              { label: 'Penghargaan & Sertifikasi' }
            ]}
            className="text-white/80 mb-8"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 border border-white/20">
                <Award className="w-4 h-4 text-cyan-300" />
                REKOGNISI GLOBAL & NASIONAL
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight uppercase drop-shadow-md">
                Penghargaan &<br/>
                <span className="text-cyan-200 font-light">Sertifikasi</span>
              </h1>

              <p className="text-white/95 text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed max-w-xl drop-shadow-sm">
                Menjadi salah satu perusahaan terkemuka di Indonesia, PT Daikin Airconditioning Indonesia telah dianugerahi penghargaan dan sertifikasi resmi dari berbagai lembaga nasional dan internasional.
              </p>
            </FadeInLeft>

            <FadeInRight className="hidden lg:block">
              {/* Floating Image Box Placeholder */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0097E0]/20 to-transparent z-0" />
                <div className="aspect-[4/3] w-full bg-white/10 rounded-2xl flex flex-col items-center justify-center border border-white/15 relative z-10 gap-3 text-center p-6 shadow-inner">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 text-cyan-200 flex items-center justify-center mb-1">
                    <Award className="w-9 h-9" />
                  </div>
                  <span className="text-white/80 tracking-widest text-xs uppercase font-bold">THUMBNAIL PLACEHOLDER</span>
                  <span className="text-white/50 text-[11px] font-sans">Visual Trofi & Sertifikat Resmi Daikin</span>
                </div>
              </div>
            </FadeInRight>
          </div>

        </div>
      </div>

      {/* ── 2. ISMS ISO 27001 SECTION ──────────────────────────────────────── */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-16">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-daikin-blue-50 px-3.5 py-1.5 rounded-full border border-daikin-blue/15">
              Standar Keamanan Informasi (ISO 27001:2022)
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-charcoal tracking-tight">
              Sertifikasi Sistem Manajemen Keamanan Informasi
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-sans leading-relaxed font-light">
              PT Daikin Airconditioning Indonesia berkomitmen tinggi menjaga perlindungan data, privasi pelanggan, dan tata kelola keamanan informasi berstandar internasional.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Certificate Image Frame */}
            <FadeInLeft className="lg:col-span-5">
              <div className="bg-slate-50 p-6 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl transition-all">
                <div className="bg-white p-4 rounded-2xl border border-gray-150 shadow-xs">
                  <img
                    src="/images/bahan-dev/sertifikat-iso.jpg"
                    alt="Certificate of Registration ISO 27001"
                    className="w-full h-auto rounded-lg border border-gray-100"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x560?text=Certificate+ISO+27001')}
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs font-bold text-charcoal font-display uppercase tracking-wider block">
                    Sertifikat ISO 27001:2022
                  </span>
                  <span className="text-[11px] font-sans text-gray-500 block mt-0.5">
                    Diterbitkan oleh TUV Rheinland
                  </span>
                </div>
              </div>
            </FadeInLeft>

            {/* Right Content Details */}
            <FadeInRight className="lg:col-span-7 space-y-8 text-gray-700 font-sans text-sm md:text-base leading-relaxed">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 space-y-2">
                <h3 className="font-bold font-display text-daikin-blue uppercase tracking-wider text-xs">
                  Visi Keamanan Informasi
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Meningkatkan kesadaran kepada seluruh personel PT Daikin Airconditioning Indonesia tentang pentingnya integritas dan kerahasiaan sistem keamanan informasi.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold font-display text-charcoal uppercase tracking-wider text-xs">
                  Misi Sistem Manajemen Keamanan Informasi (ISMS)
                </h3>
                <div className="space-y-2.5">
                  {[
                    'Melaksanakan Sistem Manajemen Keamanan Informasi perusahaan sesuai peraturan untuk menentukan langkah-langkah preventif dalam menghadapi risiko.',
                    'Memastikan Sistem Manajemen Keamanan Informasi berjalan selaras dengan tujuan dan strategi jangka panjang perusahaan.'
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200/80 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm font-sans text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold font-display text-charcoal uppercase tracking-wider text-xs">
                  Kebijakan Keamanan Informasi
                </h3>
                <div className="grid gap-2.5">
                  {[
                    'Mendorong kegiatan pengamanan informasi dan pencegahan insiden dengan melaksanakan ISO 27001:2022.',
                    'Menaati seluruh hukum dan peraturan perundang-undangan nasional yang berkaitan dengan keamanan data.',
                    'Meningkatkan kesadaran berkelanjutan seluruh karyawan akan pentingnya keamanan informasi.',
                    'Menjamin keberlangsungan keamanan data dalam ekosistem operasional bisnis.'
                  ].map((policy, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-daikin-blue-50/60 p-3.5 rounded-xl border border-daikin-blue/15 text-xs sm:text-sm text-gray-700">
                      <ShieldCheck className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-0.5" />
                      <span>{policy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInRight>
          </div>

        </div>
      </div>

      {/* ── 3. GALERI SERTIFIKAT NASIONAL & ISO (SNI & TUK) ───────────────── */}
      <div className="bg-[#F8FAFC] py-16 md:py-24 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-daikin-blue bg-daikin-blue-50 px-3.5 py-1.5 rounded-full border border-daikin-blue/15">
              Sertifikasi Mutu & Standar Nasional
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-charcoal">
              Sertifikat Resmi Produk & Kompetensi
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-sans font-light">
              PT Daikin Airconditioning Indonesia telah memenuhi berbagai standar sertifikasi mutu produk SNI dan lisensi Tempat Uji Kompetensi (TUK).
            </p>
          </div>

          {/* Top Row: 3 Certificates */}
          <FadeInUp stagger className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                img: '/images/bahan-dev/iso-9001.jpg',
                alt: 'ISO 9001:2015',
                title: 'ISO 9001:2015',
                desc: 'Sertifikat sistem manajemen mutu berstandar global ISO 9001:2015 oleh TUV Rheinland.'
              },
              {
                img: '/images/bahan-dev/sertifikat-lisensi.jpg',
                alt: 'Sertifikat Lisensi TUK',
                title: 'Lisensi TUK (Tempat Uji Kompetensi)',
                desc: 'Sertifikat lisensi resmi tempat uji kompetensi teknisi AC berstandar nasional.'
              },
              {
                img: '/images/bahan-dev/sertifikat-sni-indoor.jpg',
                alt: 'Sertifikat SNI Indoor Unit',
                title: 'SNI Indoor Unit',
                desc: 'Sertifikat Standar Nasional Indonesia (SNI) resmi untuk unit pendingin ruangan indoor.'
              }
            ].map((cert, i) => (
              <FadeInItem key={i}>
                <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-daikin-blue/30 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[340px] h-full group">
                  <div className="w-full flex items-center justify-center p-3 bg-slate-50 rounded-2xl border border-gray-100 group-hover:bg-sky-50/50 transition-colors mb-5">
                    <img
                      src={cert.img}
                      alt={cert.alt}
                      className="h-44 object-contain transition-transform group-hover:scale-105 duration-300"
                      onError={(e) => (e.currentTarget.src = `https://placehold.co/240x300?text=${encodeURIComponent(cert.title)}`)}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold font-display text-charcoal group-hover:text-daikin-blue transition-colors text-sm uppercase tracking-wide mb-1.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-sans text-gray-500 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInUp>

          {/* Bottom Row: 2 Split/Multi-Split Certificates */}
          <FadeInUp delay={0.2} stagger className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              {
                img: '/images/bahan-dev/sertifikat-sni-split.jpg',
                alt: 'Sertifikat SNI Tipe Single Split',
                title: 'SNI Tipe Single Split',
                desc: 'Sertifikat Standar Nasional Indonesia (SNI) resmi untuk AC tipe Single Split.'
              },
              {
                img: '/images/bahan-dev/sertifikat-sni-multi.jpg',
                alt: 'Sertifikat SNI Tipe Multi Split',
                title: 'SNI Tipe Multi Split',
                desc: 'Sertifikat Standar Nasional Indonesia (SNI) resmi untuk sistem AC Multi Split.'
              }
            ].map((cert, i) => (
              <FadeInItem key={i}>
                <div className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-daikin-blue/30 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[340px] h-full group">
                  <div className="w-full flex items-center justify-center p-3 bg-slate-50 rounded-2xl border border-gray-100 group-hover:bg-sky-50/50 transition-colors mb-5">
                    <img
                      src={cert.img}
                      alt={cert.alt}
                      className="h-44 object-contain transition-transform group-hover:scale-105 duration-300"
                      onError={(e) => (e.currentTarget.src = `https://placehold.co/240x300?text=${encodeURIComponent(cert.title)}`)}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold font-display text-charcoal group-hover:text-daikin-blue transition-colors text-sm uppercase tracking-wide mb-1.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-sans text-gray-500 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInUp>

        </div>
      </div>

    </PageTransition>
  )
}
