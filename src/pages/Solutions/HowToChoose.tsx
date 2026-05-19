import { Link } from 'react-router-dom'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeading from '@/components/sections/SectionHeading'
import FadeInUp from '@/components/animations/FadeInUp'
import PichonKunHelper from '@/components/sections/PichonKunHelper'

const steps = [
  { step: '01', title: 'Ukur Ruangan Anda', desc: 'Ukur panjang, lebar, dan tinggi langit-langit ruangan yang akan dipasang AC. Catat juga apakah ruangan banyak terkena sinar matahari langsung.' },
  { step: '02', title: 'Tentukan Kapasitas (PK)', desc: 'Gunakan Kalkulator AC Daikin untuk menghitung kapasitas yang tepat. Aturan umum: ½ PK untuk 10 m², 1 PK untuk 20 m², 1½ PK untuk 30 m².' },
  { step: '03', title: 'Pilih Tipe AC', desc: 'Wall Mounted untuk kamar biasa, Ceiling Cassette untuk ruang kantor, atau Multi-Split untuk beberapa ruangan sekaligus.' },
  { step: '04', title: 'Pertimbangkan Fitur', desc: 'Inverter untuk hemat energi jangka panjang, Streamer Technology untuk kualitas udara bersih, dan WiFi Control untuk kemudahan operasional.' },
  { step: '05', title: 'Pilih Instalasi Resmi', desc: 'Pastikan instalasi dilakukan oleh teknisi bersertifikat Daikin untuk garansi tetap berlaku dan keamanan optimal.' },
]

export default function HowToChoose() {
  return (
    <PageTransition>
      <PageMeta title="Cara Memilih AC" canonical="/solutions/how-to-choose" />

      <div className="bg-gradient-to-br from-daikin-blue-dark to-daikin-blue pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Solusi', path: '/solutions' }, { label: 'Cara Memilih AC' }]} className="text-white mb-6" />
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cara Memilih AC yang Tepat</h1>
            <p className="text-white/80 text-xl max-w-2xl">Panduan lengkap 5 langkah memilih AC yang sesuai kebutuhan dan ukuran ruangan Anda.</p>
          </FadeInUp>
        </div>
      </div>

      <section className="section-container">
        <SectionHeading title="5 Langkah Memilih AC" />
        <div className="max-w-3xl space-y-6">
          {steps.map((s, i) => (
            <FadeInUp key={s.step} delay={i * 0.08}>
              <div className="flex gap-6 p-6 bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow">
                <div className="text-4xl font-bold text-daikin-blue-100 flex-shrink-0 leading-none">{s.step}</div>
                <div>
                  <h3 className="font-bold text-charcoal mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp className="mt-12">
          <div className="bg-daikin-blue-50 rounded-card p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-charcoal mb-2">Masih Bingung? Coba Kalkulator AC Kami!</h3>
              <p className="text-gray-600">Kalkulator otomatis kami akan menghitung kapasitas AC yang tepat berdasarkan dimensi ruangan Anda.</p>
            </div>
            <Link to="/solutions/ac-calculator" className="btn-primary whitespace-nowrap inline-flex">
              Buka Kalkulator AC
            </Link>
          </div>
        </FadeInUp>
      </section>

      <PichonKunHelper message="Perlu bantuan memilih AC? Gunakan Kalkulator AC Daikin untuk rekomendasi yang tepat!" variant="help" />
    </PageTransition>
  )
}
