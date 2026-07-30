import { Link } from 'react-router-dom'
import { 
  Leaf, RefreshCcw, Zap, Globe, ShieldCheck, Sparkles, 
  CheckCircle2, ArrowRight, Award, HeartHandshake, ChevronRight
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import AirParticles from '@/components/animations/AirParticles'

const impactHighlights = [
  {
    icon: Zap,
    metric: '58%',
    title: 'Penghematan Energi',
    desc: 'Penggunaan teknologi Inverter Daikin secara signifikan menurunkan konsumsi listrik dibanding AC non-inverter standar.',
    badgeBg: 'bg-daikin-blue-50 border-daikin-blue/20',
    badgeText: 'text-daikin-blue'
  },
  {
    icon: RefreshCcw,
    metric: '100%',
    title: 'Sirkularitas & Maintenance',
    desc: 'Melalui model berlangganan, pemeliharaan rutin dan performa unit tetap terjaga optimal sepanjang masa pemakaian.',
    badgeBg: 'bg-sky-50 border-sky-200',
    badgeText: 'text-daikin-blue'
  },
  {
    icon: Leaf,
    metric: 'Zero Waste',
    title: 'Daur Ulang Refrigeran',
    desc: 'Pencegahan potensi kebocoran gas rumah kaca dengan pengambilan kembali refrigeran R-32 pada akhir masa pakai.',
    badgeBg: 'bg-daikin-blue-50 border-daikin-blue/20',
    badgeText: 'text-daikin-blue'
  }
]

const sustainabilityGoals = [
  'Mengurangi emisi gas rumah kaca sebesar 50% pada tahun 2030 dibanding tahun 2019',
  'Mencapai emisi net-zero gas rumah kaca di seluruh rantai nilai pada tahun 2050',
  'Pengembangan teknologi pendingin hemat energi dan sirkular di seluruh dunia',
  'Promosi pemanfaatan gas refrigeran R-32 dengan potensi pemanasan global (GWP) lebih rendah',
  'Edukasi teknisi dan dealer untuk standar penanganan refrigeran yang aman & ramah lingkungan'
]

export default function Achievements() {
  return (
    <PageTransition>
      <PageMeta 
        title="Pencapaian Berkelanjutan & Inovasi Hijau - Daikin Indonesia" 
        canonical="/about/achievements" 
      />

      {/* Modern Sleek Hero Banner */}
      <div className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue text-white">
        <AirParticles color="white" />
        
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Tentang Kami', path: '/about' }, 
              { label: 'Pencapaian Berkelanjutan' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 backdrop-blur-md border border-white/20">
                  Inovasi Bisnis Hijau & Net-Zero 2050
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                  Inovasi Model <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white font-light">
                    Bisnis Hijau
                  </span>
                </h1>
                
                <p className="text-white/85 text-base md:text-lg font-normal leading-relaxed mb-8 max-w-2xl">
                  Mewujudkan pendinginan udara yang efisien, terjangkau, dan ramah lingkungan melalui teknologi Inverter, daur ulang refrigeran R-32, dan inisiatif berlangganan AC sirkular.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#baridi-baridi"
                    className="px-6 py-3.5 bg-white text-daikin-blue font-bold text-sm rounded-xl shadow-md hover:bg-sky-50 transition-all flex items-center gap-2 group"
                  >
                    <span>Jelajahi Inisiatif Baridi Baridi</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <Link 
                    to="/solutions"
                    className="px-6 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                  >
                    Solusi Lingkungan
                  </Link>
                </div>
              </FadeInUp>
            </div>

            {/* Hero Right-Side Thumbnail Image Box */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md aspect-[4/3]">
                <div className="relative z-10 w-full h-full bg-white/15 rounded-2xl border border-white/25 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                  <span className="text-xs opacity-60 mt-1">(Daikin Sustainability & Green Innovation Initiative)</span>
                </div>
              </FadeInUp>
            </div>
          </div>

        </div>
      </div>

      {/* Sustainability Metrics Bar */}
      <section className="py-8 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-600">58%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Penghematan Listrik Inverter</div>
            </div>
            <div className="text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl md:text-4xl font-extrabold text-daikin-blue">100%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Sirkularitas Daur Ulang Unit</div>
            </div>
            <div className="text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-600">Net-Zero</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Target Emisi Karbon 2050</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-extrabold text-daikin-blue">R-32</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Gas Refrigeran Eco-Friendly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Tantangan Kebutuhan Pendingin Global */}
      <section className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <FadeInUp>
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block mb-4">
                Tantangan Iklim Global
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                Permintaan AC Berpotensi <br />
                <span className="text-daikin-blue">Meningkat 3x Lipat</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Dalam 30 tahun ke depan, kebutuhan global akan pendinginan ruangan diperkirakan melonjak hingga 3 kali lipat. Tanpa inovasi efisiensi energi yang signifikan, beban konsumsi listrik dan emisi dapat mempercepat pemanasan global.
              </p>
              <div className="p-4 bg-sky-50/70 border border-sky-100 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-daikin-blue shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Daikin menjawab tantangan ini dengan menghadirkan AC berteknologi Inverter hemat energi dan mengembangkan model bisnis sirkular untuk menekan dampak ekologis.
                </p>
              </div>
            </FadeInUp>
          </div>

          <div className="lg:col-span-6">
            <FadeInUp delay={0.2}>
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-daikin-blue-dark text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10" />
                </div>
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-sky-200 mb-2">
                  3x
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-sky-200 mb-4">
                  Pertumbuhan Kebutuhan AC Global
                </div>
                <p className="text-xs text-white/80 max-w-md mx-auto leading-relaxed">
                  Peningkatan suhu bumi mendorong tingginya kebutuhan AC. Solusi efisiensi energi tinggi Daikin menjadi krusial untuk menjaga kenyamanan tanpa membebani bumi.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Section 2: Inisiatif Baridi Baridi (Cooling as a Service) */}
      <section id="baridi-baridi" className="py-20 px-4 md:px-8 lg:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 inline-block">
              Inisiatif Model Berlangganan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
              Layanan AC Berlangganan <span className="text-daikin-blue">Baridi Baridi</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Melalui inisiatif Baridi Baridi di Afrika (Tanzania), Daikin memperkenalkan konsep "Cooling as a Service". Pengguna menikmati udara sejuk berbasis biaya langganan tanpa harus membeli unit AC secara langsung.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {impactHighlights.map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full border ${item.badgeBg} ${item.badgeText}`}>
                        {item.metric}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-daikin-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-daikin-blue">
                    <span>Lihat Dampak Inovasi</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Dampak Ekologis & Komitmen Visi 2050 */}
      <section className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
                <HeartHandshake className="w-3.5 h-3.5" /> Visi Lingkungan Daikin 2050
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal leading-snug mb-6">
                Menciptakan Dampak Ekologis & <br />
                <span className="text-daikin-blue">Ekonomis Berkelanjutan</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Daikin berkomitmen meniadakan hambatan biaya awal agar lebih banyak masyarakat menikmati udara sejuk berkualitas. Pada saat yang sama, pengawasan penuh siklus hidup AC mencegah emisi gas rumah kaca.
              </p>

              <div className="space-y-3 mb-8">
                {sustainabilityGoals.map((goal, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">{goal}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>

          {/* Right Box: Clean Summary Card */}
          <div className="lg:col-span-6">
            <FadeInUp delay={0.2}>
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15 text-emerald-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 uppercase tracking-widest font-semibold">Tanggung Jawab Lingkungan</span>
                    <h3 className="text-lg font-bold text-white">Komitmen Net-Zero Emisi</h3>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-white/85 leading-relaxed font-light mb-8">
                  Sebagai pemimpin industri tata udara global, Daikin percaya bahwa pengembangan bisnis harus berjalan seiring dengan perlindungan lingkungan hidup dan pemeliharaan kualitas udara yang sehat bagi generasi mendatang.
                </p>

                <div className="p-4 bg-white/10 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-white/70 font-medium">Pelajari Selengkapnya</div>
                    <div className="text-sm font-bold text-white">Solusi Keberlanjutan Daikin</div>
                  </div>
                  <Link 
                    to="/solutions"
                    className="w-full sm:w-auto px-4 py-2.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-emerald-400 transition-colors text-center shrink-0"
                  >
                    Solusi Hijau
                  </Link>
                </div>
              </div>
            </FadeInUp>
          </div>

        </div>
      </section>

    </PageTransition>
  )
}
