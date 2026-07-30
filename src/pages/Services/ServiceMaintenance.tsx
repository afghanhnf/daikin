import { lazy, Suspense } from 'react'
import { 
  DollarSign, Leaf, Lock, Clock, Brain, Wrench, 
  ArrowRight, MessageCircle
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeading from '@/components/sections/SectionHeading'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const maintenanceBenefits = [
  {
    id: 'penghematan',
    title: 'PENGHEMATAN',
    desc: 'Anda dapat merencanakan anggaran Anda dengan mudah karena tidak akan ada pengeluaran tak terduga untuk peralatan perbaikan.',
    icon: DollarSign,
    color: 'bg-sky-50 text-daikin-blue border-sky-100'
  },
  {
    id: 'ramah-lingkungan',
    title: 'RAMAH LINGKUNGAN',
    desc: 'Perangkat beroperasi secara efisien, sehingga mengurangi konsumsi energi dan membantu melestarikan lingkungan.',
    icon: Leaf,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
  },
  {
    id: 'keamanan',
    title: 'KEAMANAN',
    desc: 'Keselamatan adalah salah satu persyaratan terpenting untuk AC yang menggunakan gas bertekanan tinggi dan komponen listrik.',
    icon: Lock,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100'
  },
  {
    id: 'hidup-lebih-lama',
    title: 'HIDUP LEBIH LAMA',
    desc: 'Hati-hati dan melalui pemeliharaan perpanjangan masa penggunaan peralatan Anda.',
    icon: Clock,
    color: 'bg-amber-50 text-amber-600 border-amber-100'
  },
  {
    id: 'fungsi-smarter',
    title: 'FUNGSI SMARTER',
    desc: 'Inspeksi berkala membuat perangkat yang Anda gunakan tetap dalam kondisi optimal untuk memberikan kontrol suhu yang akurat.',
    icon: Brain,
    color: 'bg-purple-50 text-purple-600 border-purple-100'
  }
]

export default function ServiceMaintenance() {
  return (
    <PageTransition>
      <PageMeta 
        title="Layanan Pemeliharaan AC - PT Daikin Airconditioning Indonesia" 
        canonical="/services/maintenance" 
      />

      {/* Modern Premium Hero Banner */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#061834] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Layanan', path: '/services' }, 
              { label: 'Maintenance' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text Extracted From Image */}
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                  Kontrak Perawatan Resmi Daikin
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Layanan <br />
                  <span className="text-daikin-blue-light font-light">Pemeliharaan</span>
                </h1>

                <div className="space-y-4 text-white/90 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
                  <p>
                    Unit pendingin dan pendinginan udara memiliki fungsi penting bagi toko, gedung, fasilitas produksi, ruang komputer, dan kamar dengan suhu serta kelembaban yang konstan.
                  </p>
                  <p className="text-sm md:text-base text-white/80">
                    Jika mereka gagal berfungsi dengan baik, dapat mengakibatkan ketidaknyamanan. Daikin menawarkan kontrak perawatan untuk mencegah ketidaknyamanan yang muncul pada AC dan untuk memastikan sistem pendingin dapat bekerja secara optimal selama bertahun-tahun.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#keuntungan-kontrak"
                    className="px-6 py-3.5 bg-gradient-to-r from-daikin-blue-light to-daikin-blue text-white font-bold text-sm rounded-xl shadow-lg hover:from-sky-300 hover:to-daikin-blue transition-all flex items-center gap-2 group"
                  >
                    <span>Keuntungan Kontrak</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a 
                    href="https://wa.me/628119048058"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Konsultasi Pemeliharaan</span>
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right Column Glassmorphic Image Placeholder */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md aspect-[4/3]">
                <div className="relative z-10 w-full h-full bg-white/10 rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden flex flex-col items-center justify-center p-8 text-center text-white shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-4 text-sky-300">
                    <Wrench className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-sm tracking-wider uppercase text-sky-300">Sample Image Placeholder</span>
                  <span className="text-xs text-white/70 mt-1">(Teknisi Pemeliharaan Resmi Daikin Indonesia)</span>
                </div>
              </FadeInUp>
            </div>

          </div>

        </div>
      </div>

      {/* Main Content Body */}
      <div className="bg-slate-50 py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* KEUNTUNGAN DARI KONTRAK PEMELIHARAAN DAIKIN Section */}
          <section id="keuntungan-kontrak" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
                Nilai Lebih Perawatan Berkala
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight">
                Keuntungan dari Kontrak Pemeliharaan Daikin
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Manfaat jangka panjang mempercayakan kontrak perawatan AC Anda secara berkala dengan teknisi resmi Daikin.
              </p>
            </FadeInUp>

            {/* 5 Benefits Grid Extracted from Image */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {maintenanceBenefits.map((item, idx) => (
                <FadeInUp key={item.id} delay={idx * 0.08}>
                  <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between h-full group text-center">
                    <div>
                      {/* Circle Icon */}
                      <div className={`w-16 h-16 rounded-full ${item.color} border flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xs`}>
                        <item.icon className="w-7 h-7" />
                      </div>

                      <h3 className="text-sm font-extrabold text-charcoal mb-3 tracking-wide">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Benefit #{idx + 1}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </section>

        </div>
      </div>

    </PageTransition>
  )
}
