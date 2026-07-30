import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '@/components/ui/SEO'
import FadeInUp from '@/components/animations/FadeInUp'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'
import { 
  Building2, 
  Globe2, 
  DollarSign, 
  Wind, 
  Cpu, 
  Lightbulb, 
  Leaf, 
  Calendar,
  Users,
  ChevronRight
} from 'lucide-react'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const facts = [
  {
    title: "Penjualan Bersih > $29 Miliar",
    description: "Pendapatan stabil dan terus tumbuh menjadikan Daikin pemimpin global (Berdasarkan FY2022).",
    icon: <DollarSign className="w-6 h-6" />,
    className: "md:col-span-2 !bg-white/5 !border-white/10 backdrop-blur-md text-white hover:!bg-white/10",
  },
  {
    title: "> 100 Basis Produksi",
    description: "Fasilitas manufaktur mutakhir yang tersebar di seluruh belahan dunia.",
    icon: <Building2 className="w-6 h-6" />,
    className: "md:col-span-1 !bg-white/5 !border-white/10 backdrop-blur-md text-white hover:!bg-white/10",
  },
  {
    title: "Hadir di > 170 Negara",
    description: "Jaringan distribusi dan layanan purna jual yang kuat dan luas di seluruh dunia.",
    icon: <Globe2 className="w-6 h-6" />,
    className: "md:col-span-1 !bg-white/5 !border-white/10 backdrop-blur-md text-white hover:!bg-white/10",
  },
  {
    title: "Pakar Tata Udara (Air Specialists)",
    description: "Satu-satunya produsen di dunia yang memproduksi mesin AC sekaligus refrigerannya secara mandiri.",
    icon: <Wind className="w-6 h-6" />,
    className: "md:col-span-2 !bg-white/5 !border-white/10 backdrop-blur-md text-white hover:!bg-white/10",
  },
  {
    title: "3 Core Technologies",
    description: "Keunggulan kami terletak pada Inverter, Heat Pump, dan kontrol refrigeran.",
    icon: <Cpu className="w-6 h-6" />,
    className: "md:col-span-2 !bg-white/5 !border-white/10 backdrop-blur-md text-white hover:!bg-white/10",
  },
  {
    title: "$300 Juta R&D Center",
    description: "Investasi masif untuk Technology and Innovation Center (TIC) demi inovasi masa depan.",
    icon: <Lightbulb className="w-6 h-6" />,
    className: "md:col-span-1 !bg-white/5 !border-white/10 backdrop-blur-md text-white hover:!bg-white/10",
  },
  {
    title: "Solusi R-32",
    description: "Pelopor penggunaan refrigeran R-32 yang memiliki GWP (Global Warming Potential) 1/3 dari R-410A.",
    icon: <Leaf className="w-6 h-6" />,
    className: "md:col-span-1 !bg-white/5 !border-white/10 backdrop-blur-md text-white hover:!bg-white/10",
  },
  {
    title: "Berdiri Sejak 1924",
    description: "Lebih dari satu abad mendedikasikan diri untuk kesempurnaran tata udara.",
    icon: <Calendar className="w-6 h-6" />,
    className: "md:col-span-1 !bg-white/5 !border-white/10 backdrop-blur-md text-white hover:!bg-white/10",
  },
  {
    title: "People-Centered Management",
    description: "Filosofi bisnis kami berpusat pada pengembangan dan kesejahteraan manusia.",
    icon: <Users className="w-6 h-6" />,
    className: "md:col-span-1 !bg-white/5 !border-white/10 backdrop-blur-md text-white hover:!bg-white/10",
  },
]

export default function Glance() {
  return (
    <>
      <SEO 
        title="Sekilas Daikin (Daikin at a Glance) | Daikin Indonesia" 
        description="Fakta-fakta menarik mengapa Daikin adalah pemimpin global di industri tata udara (Air Specialists)." 
      />
      
      <div className="relative h-[450px] lg:h-[500px] flex items-center justify-start overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-daikin-blue">
        <Suspense fallback={null}><AirParticles /></Suspense>
        
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mt-16 text-left">
          <nav className="flex items-center space-x-2 text-white/70 mb-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/profile/about" className="hover:text-white transition-colors">Tentang Kami</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white drop-shadow-md">Sekilas Daikin</span>
          </nav>
          
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Sekilas <span className="text-daikin-blue-light font-light">Daikin</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed drop-shadow max-w-2xl">
              9 Fakta mengapa kami adalah pemimpin global di industri tata udara (Air Specialists).
            </p>
          </FadeInUp>
        </div>
      </div>

      <section className="py-24 relative bg-[#0a1628] overflow-hidden">
        {/* Background elements for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-daikin-blue-dark/50 via-transparent to-[#0a1628]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-daikin-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-daikin-blue/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="container px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">Daikin at a Glance</h2>
            <p className="text-white/80 text-lg">
              Sebagai pionir dan inovator nomor satu di dunia untuk solusi udara, kami tidak pernah berhenti melampaui batasan.
            </p>
          </motion.div>

          <BentoGrid>
            {facts.map((fact, i) => (
              <BentoGridItem
                key={i}
                index={i}
                title={fact.title}
                description={fact.description}
                icon={fact.icon}
                className={fact.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
    </>
  )
}
