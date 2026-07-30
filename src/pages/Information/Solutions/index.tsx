import { Link } from 'react-router-dom'
import { 
  Home, Building2, Factory, ArrowRight, Play, 
  Globe2, CheckCircle2
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import AirParticles from '@/components/animations/AirParticles'

const solutionsList = [
  {
    id: 'residential',
    title: 'Residential',
    subtitle: 'Hunian & Apartemen',
    description: 'Menciptakan kenyamanan suhu dan kualitas udara ideal di setiap sudut rumah Anda dengan teknologi cerdas Inverter yang hemat listrik.',
    icon: Home,
    link: '/products/residential',
    badge: 'Hunian Sehat',
    color: 'from-sky-500/10 to-daikin-blue/10'
  },
  {
    id: 'commercial',
    title: 'Commercial',
    subtitle: 'Gedung & Perkantoran',
    description: 'Mendukung efisiensi operasional bisnis Anda dengan sistem pendinginan VRV & SkyAir terpusat yang tangguh dan teruji.',
    icon: Building2,
    link: '/products/commercial',
    badge: 'Komersial Tangguh',
    color: 'from-daikin-blue/10 to-indigo-500/10'
  },
  {
    id: 'industrial',
    title: 'Industrial',
    subtitle: 'Pabrik & Pusat Data',
    description: 'Sistem ventilasi, Chiller, dan pengondisian udara presisi berkapasitas ultra-besar untuk fasilitas manufaktur dan industri kritis.',
    icon: Factory,
    link: '/contact',
    badge: 'Skala Industri',
    color: 'from-emerald-500/10 to-teal-500/10'
  }
]

export default function Solutions() {
  return (
    <PageTransition>
      <PageMeta 
        title="Daikin Untuk Semua Kebutuhan Anda - Solusi Tata Udara Global" 
        canonical="/information/solutions" 
      />

      {/* Modern Sleek Hero Banner */}
      <div className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue text-white">
        <AirParticles color="white" />
        
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Informasi', path: '/solutions' }, 
              { label: 'Solusi Semua Kebutuhan' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20">
                  DAIKIN. SEMUA YANG ANDA BUTUHKAN PADA AC
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                  Daikin untuk <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-100 font-light">
                    Semua Kebutuhan Anda
                  </span>
                </h1>
                
                <p className="text-white/85 text-base md:text-lg font-normal leading-relaxed mb-8 max-w-2xl">
                  DAIKIN merupakan pemimpin industri yang dapat menyesuaikan berbagai macam kebutuhan AC di seluruh dunia. Apapun temperatur, ruang atau iklim? Pelajari lebih lanjut tentang fleksibilitas DAIKIN dalam menjawab kebutuhan konsumen.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#video-presentation"
                    className="px-6 py-3.5 bg-white text-daikin-blue font-bold text-sm rounded-xl shadow-md hover:bg-sky-50 transition-all flex items-center gap-2 group"
                  >
                    <Play className="w-4 h-4 fill-daikin-blue text-daikin-blue group-hover:scale-110 transition-transform" />
                    <span>Tonton Video Fleksibilitas Daikin</span>
                  </a>

                  <a 
                    href="#solutions-grid"
                    className="px-6 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                  >
                    Lihat Kategori Solusi
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Side Empty Thumbnail Image Placeholder */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md aspect-[4/3]">
                <div className="relative z-10 w-full h-full bg-white/15 rounded-2xl border border-white/25 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">
                  <span className="font-bold text-sm tracking-wider uppercase opacity-80">Sample Image Placeholder</span>
                  <span className="text-xs opacity-60 mt-1">(Daikin Solutions for All Needs)</span>
                </div>
              </FadeInUp>
            </div>
          </div>

        </div>
      </div>

      {/* Main Container */}
      <div className="bg-slate-50 py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* YouTube Embedded Video Section */}
          <section id="video-presentation" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
                Video Presentasi Resmi
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                Daikin. Semua Yang Anda Butuhkan Pada AC
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Saksikan bagaimana fleksibilitas teknologi Daikin beradaptasi dengan beragam bentuk arsitektur, perbedaan iklim ekstrem, dan standar kenyamanan ruangan di seluruh dunia.
              </p>
            </FadeInUp>

            {/* Responsive 16:9 Iframe Container */}
            <FadeInUp delay={0.2} className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <iframe 
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/IPItw19i_-E?si=Lm2S-RuAB_Id_p-C" 
                  title="Daikin - Semua Yang Anda Butuhkan Pada AC" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </FadeInUp>
          </section>

          {/* Compact Solution Cards Grid */}
          <section id="solutions-grid" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 inline-block">
                Kategori Solusi Terpadu
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                Solusi Fleksibel Menurut Ruang & Kebutuhan
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Pilih kategori lingkungan Anda untuk mempelajari aplikasi spesifik teknologi tata udara Daikin secara lebih dalam.
              </p>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutionsList.map((item, i) => (
                <FadeInUp key={item.id} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div>
                      {/* Top Header & Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-daikin-blue group-hover:bg-daikin-blue group-hover:text-white transition-colors duration-300">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 text-[11px] font-bold text-slate-600 bg-slate-100 rounded-full border border-slate-200/70">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-charcoal mb-1 group-hover:text-daikin-blue transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs font-semibold text-daikin-blue mb-3">{item.subtitle}</div>

                      <p className="text-slate-600 text-xs leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <Link 
                        to={item.link}
                        className="w-full py-2.5 bg-slate-50 hover:bg-daikin-blue hover:text-white text-slate-700 font-bold text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border border-slate-200/60 group/btn"
                      >
                        <span>Eksplorasi Solusi</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </section>

          {/* Key Value Proposition */}
          <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-2xs">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal mb-1">Kontrol Temperatur Presisi</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Menjaga stabilitas pendinginan tanpa fluktuasi suhu ekstrim di berbagai zona iklim.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-daikin-blue border border-sky-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal mb-1">Adaptasi Arsitektur</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Desain unit indoor & outdoor yang fleksibel menyatu secara harmonis dengan estetika bangunan.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal mb-1">Efisiensi Daya Tinggi</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Teknologi kompresor Inverter mutakhir menekan pemakaian energi listrik secara signifikan.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

    </PageTransition>
  )
}
