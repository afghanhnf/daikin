import { Link } from 'react-router-dom'
import { ArrowLeft, MonitorPlay, Sparkles } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

export default function VirtualTour() {
  return (
    <PageTransition>
      <PageMeta title="Virtual Tour Showroom - Daikin" canonical="/virtual-tour" />

      {/* Top Banner Control Section */}
      <div className="pt-28 pb-6 bg-gradient-to-r from-daikin-blue-dark via-[#005a87] to-daikin-blue text-white border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-xl text-xs font-bold hover:bg-white hover:text-daikin-blue transition-all shadow-2xs group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Website</span>
            </Link>

            <div className="h-5 w-[1px] bg-white/20 hidden sm:block"></div>

            <div className="flex items-center gap-2 text-xs font-medium text-cyan-100">
              <MonitorPlay className="w-4 h-4 text-cyan-300" />
              <span>Daikin Interactive 3D Showroom</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider border border-white/20">
            Matterport 3D Experience
          </div>

        </div>
      </div>

      {/* Iframe 3D Virtual Tour Viewer */}
      <div className="bg-charcoal py-4 sm:py-8 px-2 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="relative w-full h-[75vh] md:h-[82vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
              <iframe
                src="https://my.matterport.com/show/?m=XQsUH5cBBVZ"
                title="Daikin Virtual Tour 3D Showroom"
                className="w-full h-full border-0"
                allow="fullscreen; xr-spatial-tracking"
                allowFullScreen
              ></iframe>
            </div>
          </FadeInUp>
        </div>
      </div>

    </PageTransition>
  )
}
