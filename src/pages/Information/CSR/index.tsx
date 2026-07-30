import { Link } from 'react-router-dom'
import { 
  Leaf, RefreshCcw, Zap, Globe, ShieldCheck, Sparkles, 
  CheckCircle2, ArrowRight, ShieldAlert, ThermometerSun,
  Flame, CloudRain, Waves, Trees
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import AirParticles from '@/components/animations/AirParticles'

const pillars = [
  {
    icon: Zap,
    title: 'Kebutuhan Pendinginan & Efisiensi Energi',
    description: 'Memaksimalkan efisiensi energi AC melalui teknologi Inverter mutakhir untuk mengurangi beban konsumsi listrik global secara berkesinambungan.',
    badgeBg: 'bg-daikin-blue-50 text-daikin-blue border-daikin-blue/20'
  },
  {
    icon: RefreshCcw,
    title: 'Pemanfaatan Energi Terbarukan & Daur Ulang',
    description: 'Mengembangkan teknologi AC yang kompatibel dengan sumber energi terbarukan (seperti tenaga surya) serta menerapkan sirkularitas daur ulang unit.',
    badgeBg: 'bg-sky-50 text-daikin-blue border-sky-200'
  },
  {
    icon: Leaf,
    title: 'Penurunan Emisi Refrigeran (GWP Rendah)',
    description: 'Transisi menyeluruh ke gas refrigeran R-32 yang ramah lingkungan serta mempromosikan pengumpulan kembali gas refrigeran bekas pakai.',
    badgeBg: 'bg-daikin-blue-50 text-daikin-blue border-daikin-blue/20'
  }
]

const climateImpacts = [
  {
    icon: Flame,
    title: 'Gelombang Panas Ekstrem',
    description: 'Peningkatan suhu rata-rata permukaan bumi yang memicu lonjakan hari-hari dengan cuaca panas ekstrem di berbagai benua.'
  },
  {
    icon: CloudRain,
    title: 'Fluktuasi Cuaca Tak Menentu',
    description: 'Pergeseran pola presipitasi dan badai yang memperluas ancaman banjir serta kekeringan drastis.'
  },
  {
    icon: Waves,
    title: 'Kenaikan Permukaan Air Laut',
    description: 'Pencairan es di wilayah kutub yang mendorong ancaman tenggelamnya wilayah pesisir dan pulau-pulau rendah.'
  },
  {
    icon: Trees,
    title: 'Ancaman Keanekaragaman Hayati',
    description: 'Perubahan suhu habitat yang mempercepat kepunahan spesies flora dan fauna di seluruh ekosistem alami.'
  }
]

export default function CarbonNeutrality() {
  return (
    <PageTransition>
      <PageMeta 
        title="Netralitas Karbon - Carbon Neutrality | Daikin Indonesia" 
        canonical="/information/carbon-neutrality" 
      />

      {/* Hero Banner */}
      <div className="relative pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue text-white">
        <AirParticles color="white" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Informasi', path: '/solutions' }, 
              { label: 'Netralitas Karbon' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20">
                  DAIKIN ENVIRONMENTAL VISION 2050
                </div>
                
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white mb-6 leading-tight tracking-tight">
                  CARBON NEUTRALITY <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white font-light">
                    Memenangkan Tantangan dengan AC
                  </span>
                </h1>
                
                <p className="text-white/85 text-base md:text-lg font-normal leading-relaxed mb-8 max-w-2xl">
                  Untuk mencapai netralitas karbon, Daikin berfokus pada dua hal utama: mempromosikan pemanfaatan energi terbarukan dan mengurangi konsumsi listrik dari penggunaan AC.
                  Mengingat AC menyumbang sekitar 10% dari total konsumsi listrik dunia, efisiensi energi AC menjadi kunci penting dalam mengatasi perubahan iklim.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#three-pillars"
                    className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2 group"
                  >
                    <span>3 Pilar Netralitas Karbon</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
                  </a>

                  <a 
                    href="#life-cycle-emissions"
                    className="px-6 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                  >
                    Siklus Hidup Emisi AC
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Side Empty Thumbnail Image Placeholder */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md aspect-[4/3]">
                <div className="relative z-10 w-full h-full bg-white/15 rounded-2xl border border-white/25 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                  <span className="text-xs opacity-60 mt-1">(Daikin Carbon Neutrality Initiative)</span>
                </div>
              </FadeInUp>
            </div>
          </div>

        </div>
      </div>

      {/* Metrics Highlights Bar */}
      <section className="py-8 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl md:text-4xl font-extrabold text-daikin-blue">10%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Konsumsi Listrik Dunia dari AC</div>
            </div>
            <div className="text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-600">85%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Emisi Karbon pada Fase Penggunaan</div>
            </div>
            <div className="text-center md:text-left border-r border-slate-100 last:border-0 pr-4">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-600">58%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Hemat Listrik Teknologi Inverter</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-extrabold text-daikin-blue">Net-Zero</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Visi Lingkungan Daikin 2050</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Carbon Neutrality dengan Air Conditioner (3 Pillars) */}
      <section id="three-pillars" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-28">
        <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
            Strategi Utama Daikin
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Carbon Neutrality dengan <span className="text-daikin-blue">Air Conditioner</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Sebagai pionir solusi pendingin udara global, Daikin mengarahkan tiga fokus utama untuk meniadakan jejak emisi karbon di seluruh ekosistem industri.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-daikin-blue mb-6 group-hover:bg-daikin-blue group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-daikin-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-daikin-blue flex items-center gap-1">
                  <span>Implementasi Teknologi</span>
                  <CheckCircle2 className="w-4 h-4 text-daikin-blue ml-auto" />
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* Section 2: Carbon Neutrality & Pengaruhnya Terhadap Lingkungan */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <FadeInUp>
                <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block mb-4">
                  Pemahaman Dasar
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                  Apa itu Netralitas Karbon & <br />
                  <span className="text-daikin-blue">Mengapa Sangat Penting?</span>
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  <strong className="text-charcoal font-semibold">Netralitas Karbon</strong> adalah kondisi di mana emisi gas rumah kaca diserap kembali atau diseimbangkan melalui inisiatif keberlanjutan, sehingga tidak ada emisi bersih tambahan yang terlepas ke atmosfer.
                </p>
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Emisi CO2 dari pembakaran bahan bakar fosil memicu lonjakan suhu bumi, yang jika dibiarkan akan mempercepat krisis iklim global secara mendasar.
                  </p>
                </div>
              </FadeInUp>
            </div>

            {/* Right Thumbnail Image Box */}
            <div className="lg:col-span-6">
              <FadeInUp delay={0.2}>
                <div className="w-full aspect-[16/10] bg-slate-900 rounded-3xl p-6 flex flex-col items-center justify-center text-center text-white relative overflow-hidden shadow-lg border border-slate-800">
                  <div className="w-full h-full bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md flex flex-col items-center justify-center p-6">
                    <span className="font-bold text-xs tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                    <span className="text-xs opacity-60 mt-1">(Penyebab Pemanasan Global & Energi Terbarukan)</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>

          {/* 4 Impact Points Grid */}
          <FadeInUp className="mb-6">
            <h3 className="text-xl font-bold text-charcoal mb-6 text-center">
              Dampak Pemanasan Global Tanpa Intervensi Emisi
            </h3>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {climateImpacts.map((impact, idx) => (
              <FadeInUp key={idx} delay={idx * 0.08}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-daikin-blue border border-sky-100 flex items-center justify-center mb-4">
                    <impact.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-charcoal mb-2">{impact.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{impact.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>

        </div>
      </section>

      {/* Section 3: Peran AC & Siklus Hidup Emisi (Life Cycle Emissions) */}
      <section id="life-cycle-emissions" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <FadeInUp>
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block mb-4">
                Siklus Hidup Produk
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                Fase Penggunaan AC Mengontribusi <br />
                <span className="text-daikin-blue">85% Emisi Karbon Total</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Berdasarkan kajian analisis siklus hidup (LCA), mayoritas emisi CO2 AC tidak berasal dari pabrik pembuatannya, melainkan dari <strong className="text-charcoal font-semibold">konsumsi listrik selama masa pemakaian harian (Use Phase)</strong>.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-daikin-blue flex items-center justify-center shrink-0 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal mb-1">Inovasi Kompresor Inverter</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Menurunkan konsumsi listrik hingga 58%, secara langsung mengurangi pembakaran fosil di pembangkit daya.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-daikin-blue flex items-center justify-center shrink-0 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal mb-1">Adopsi Gas Refrigeran R-32</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Memiliki Potensi Pemanasan Global (GWP) 1/3 lebih rendah jika dibandingkan gas generasi terdahulu R-410A.</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Summary Diagram Card */}
          <div className="lg:col-span-6">
            <FadeInUp delay={0.2}>
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-daikin-blue-dark text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15 text-cyan-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cyan-300 uppercase tracking-widest font-semibold">Distribusi Siklus Hidup AC</span>
                    <h3 className="text-lg font-bold text-white">85% Use Phase Emission</h3>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold mb-1">
                      <span>Fase Penggunaan (Listrik Harian)</span>
                      <span className="text-cyan-300 font-extrabold">85%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-daikin-blue rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold mb-1">
                      <span>Manufaktur & Transportasi Unit</span>
                      <span className="text-sky-300 font-extrabold">15%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-400 rounded-full w-[15%]" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/10 rounded-2xl border border-white/15 text-xs text-white/85 font-light leading-relaxed">
                  Fokus utama Daikin pada teknologi hemat energi tinggi adalah kunci paling efektif dalam menekan total jejak karbon global.
                </div>
              </div>
            </FadeInUp>
          </div>

        </div>
      </section>

      {/* Section 4: Visi Lingkungan 2050 Commitment */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="bg-gradient-to-br from-slate-900 via-daikin-blue-dark to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden text-center">
            <div className="max-w-3xl mx-auto">
              <span className="px-4 py-1.5 bg-white/10 text-cyan-300 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 inline-block mb-6">
                Daikin Environmental Vision 2050
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Mencapai Emisi Net-Zero Pada Tahun 2050
              </h2>

              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 font-light">
                Daikin berkomitmen menekan emisi gas rumah kaca sebesar 50% pada tahun 2030 dibanding tahun 2019, dan melangkah penuh menuju target net-zero di seluruh rantai nilai pada tahun 2050.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link 
                  to="/about/achievements"
                  className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs rounded-xl transition-colors shadow-md"
                >
                  Pencapaian Berkelanjutan Daikin
                </Link>
                <Link 
                  to="/solutions/energy-efficiency"
                  className="px-6 py-3.5 bg-white/10 text-white font-semibold text-xs rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Solusi Inverter Hemat Listrik
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

    </PageTransition>
  )
}
