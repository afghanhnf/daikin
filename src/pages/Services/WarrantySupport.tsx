import { ShieldCheck } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeading from '@/components/sections/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import FadeInUp from '@/components/animations/FadeInUp'

const warrantyItems = [
  { key: 'q1', title: 'Berapa lama garansi produk Daikin?', content: 'Garansi standar Daikin adalah 1 tahun untuk unit dan 5 tahun untuk kompressor pada semua produk inverter. Garansi diperpanjang tersedia melalui program Daikin Extended Warranty.' },
  { key: 'q2', title: 'Apa saja yang ditanggung garansi?', content: 'Garansi mencakup kerusakan akibat cacat produksi atau material. Tidak termasuk kerusakan akibat penggunaan yang tidak sesuai, bencana alam, atau instalasi oleh pihak tidak bersertifikat.' },
  { key: 'q3', title: 'Bagaimana cara mengajukan klaim garansi?', content: 'Hubungi Customer Care Daikin di 0800-1-234567 atau kunjungi service center terdekat dengan membawa kartu garansi dan bukti pembelian asli.' },
  { key: 'q4', title: 'Apakah garansi berlaku jika diinstalasi sendiri?', content: 'Garansi hanya berlaku jika instalasi dilakukan oleh teknisi bersertifikat Daikin. Instalasi mandiri dapat membatalkan garansi dan membahayakan keselamatan.' },
  { key: 'q5', title: 'Bagaimana cara mendaftarkan produk untuk garansi diperpanjang?', content: 'Daftarkan produk Anda di website Daikin atau melalui iShop/ProShop terdekat dalam 30 hari setelah pembelian untuk mendapatkan garansi diperpanjang secara otomatis.' },
]

export default function WarrantySupport() {
  return (
    <PageTransition>
      <PageMeta title="Garansi & Dukungan" canonical="/services/warranty" />

      <div className="bg-gradient-to-br from-daikin-blue-dark to-daikin-blue pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Layanan', path: '/services' }, { label: 'Warranty & Support' }]} className="text-white mb-6" />
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Garansi & Dukungan</h1>
            <p className="text-white/80 text-xl max-w-2xl">Investasi Anda terlindungi dengan program garansi komprehensif dan dukungan purna jual Daikin.</p>
          </FadeInUp>
        </div>
      </div>

      <section className="section-container">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[{ title: 'Garansi Unit', period: '1 Tahun', desc: 'Semua komponen unit tercover dari cacat produksi.' },
            { title: 'Garansi Kompressor', period: '5 Tahun', desc: 'Kompressor inverter terlindungi selama 5 tahun penuh.' },
            { title: 'Garansi Diperpanjang', period: 'Hingga 10 Tahun', desc: 'Proteksi maksimal dengan program Extended Warranty.' }].map((w) => (
            <FadeInUp key={w.title}>
              <div className="floating-card p-6 text-center">
                <ShieldCheck className="w-12 h-12 text-daikin-blue mx-auto mb-4" />
                <h3 className="font-bold text-charcoal mb-1">{w.title}</h3>
                <p className="text-3xl font-bold text-daikin-blue mb-2">{w.period}</p>
                <p className="text-sm text-gray-600">{w.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <SectionHeading title="FAQ Garansi" subtitle="Pertanyaan yang sering ditanyakan tentang garansi produk Daikin." />
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <Accordion items={warrantyItems} />
          </FadeInUp>
        </div>
      </section>
    </PageTransition>
  )
}
