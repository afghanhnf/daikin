import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Zap, Wind, Droplets, Cpu, ChevronRight } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import SectionHeading from '@/components/sections/SectionHeading'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const technologies = [
  { icon: Zap, title: 'Inverter Technology', desc: 'Teknologi inverter Daikin mengatur kecepatan kompressor secara dinamis, menghemat energi hingga 60% dan menjaga suhu konstan tanpa fluktuasi.', badge: 'Flagship' },
  { icon: Wind, title: 'Streamer Technology', desc: 'Teknologi eksklusif yang menghasilkan aliran elektron berenergi tinggi untuk mendisinfeksi udara, menetralisir alergen, virus, dan senyawa kimia berbahaya.', badge: 'Eksklusif' },
  { icon: Droplets, title: '3D Airflow', desc: 'Sistem distribusi udara tiga dimensi memastikan sirkulasi udara merata ke seluruh ruangan tanpa draft langsung yang tidak nyaman.', badge: 'Inovatif' },
  { icon: Cpu, title: 'Smart Control', desc: 'Ekosistem IoT Daikin memungkinkan kontrol penuh via smartphone, integrasi smart home, dan monitoring konsumsi energi secara real-time.', badge: 'Smart' },
]

export default function TechnologyOverview() {
  return (
    <PageTransition>
      <PageMeta title="Teknologi Daikin" canonical="/profile/technology" />

      {/* Modern Premium Hero Banner */}
      <div className="relative h-[450px] flex items-center justify-start overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue">
        <Suspense fallback={null}><AirParticles /></Suspense>
        
        {/* Subtle grid pattern for depth */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mt-16 text-left">
          
          {/* Active Clickable Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-white/70 mb-6 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/profile/about" className="hover:text-white transition-colors">Tentang Kami</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white drop-shadow-md">Teknologi & Inovasi</span>
          </nav>

          <FadeInUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Teknologi & <span className="text-daikin-blue-light font-light">Inovasi</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light leading-relaxed drop-shadow">
              Daikin berinvestasi lebih dari 4% pendapatan globalnya untuk riset dan pengembangan setiap tahun.
            </p>
          </FadeInUp>
        </div>
      </div>

      <section className="section-container">
        <SectionHeading title="Teknologi Unggulan Daikin" subtitle="Setiap teknologi Daikin dirancang untuk memberikan kenyamanan optimal, efisiensi energi, dan kualitas udara terbaik." />
        <div className="space-y-12">
          {technologies.map((tech, i) => {
            const Icon = tech.icon
            const isEven = i % 2 === 0
            return (
              <FadeInUp key={tech.title} delay={i * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-10 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  <div className={`bg-daikin-blue-50 rounded-card h-72 flex items-center justify-center ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <Icon className="w-32 h-32 text-daikin-blue opacity-30" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-daikin-blue text-white text-xs font-bold rounded-full mb-3">{tech.badge}</span>
                    <h3 className="text-2xl font-bold text-charcoal mb-3">{tech.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              </FadeInUp>
            )
          })}
        </div>
      </section>
    </PageTransition>
  )
}
