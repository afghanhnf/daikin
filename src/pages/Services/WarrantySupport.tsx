import { lazy, Suspense } from 'react'
import { 
  ShieldCheck, FileText, PhoneCall, Wrench, CheckCircle2, 
  ArrowRight, MessageCircle, ShieldAlert, BadgeCheck
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import SectionHeading from '@/components/sections/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import FadeInUp from '@/components/animations/FadeInUp'
import { FadeInLeft } from '@/components/animations/FadeInLeft'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

const warrantyItems = [
  { key: 'q1', title: 'Berapa lama garansi standar untuk produk AC Daikin?', content: 'Garansi standar Daikin adalah 1 tahun untuk suku cadang (spare part) & PCB unit, serta 5 tahun khusus untuk kompresor pada semua produk AC inverter & non-inverter untuk penggunaan residensial.' },
  { key: 'q2', title: 'Apa saja syarat agar garansi resmi Daikin tetap berlaku?', content: 'Garansi berlaku apabila unit diinstalasi oleh teknisi resmi/bersertifikat Daikin, dipasang sesuai petunjuk teknis pabrikan, serta menggunakan pipa dan kabel standar Daikin. Kartu garansi dan bukti pembelian/nota fisik juga harus disimpan dengan baik.' },
  { key: 'q3', title: 'Apakah garansi berlaku jika unit diinstalasi oleh teknisi independen?', content: 'Garansi produk Daikin hanya terjamin secara penuh apabila pemasangan dilakukan oleh teknisi bersertifikat Daikin atau mitra ProShop/iShop terdaftar. Instalasi yang salah oleh pihak non-resmi dapat membatalkan garansi.' },
  { key: 'q4', title: 'Bagaimana cara melakukan klaim garansi jika AC mengalami kendala?', content: 'Anda dapat melakukan klaim melalui WhatsApp resmi Daikin di 0811-904-8058, menelepon Customer Care di 0800-1-234567, atau mengisikan formulir klaim online di website ini dengan melampirkan foto serial number dan bukti nota pembelian.' },
  { key: 'q5', title: 'Berapa lama estimasi waktu teknisi Daikin datang ke lokasi?', content: 'Setelah klaim terverifikasi, tim teknisi Daikin Service Center akan menjadwalkan kunjungan dalam waktu 1x24 jam (untuk area perkotaan) hingga maksimal 3 hari kerja tergantung lokasi Anda.' },
  { key: 'q6', title: 'Apakah ada biaya yang dikenakan saat service dalam masa garansi?', content: 'Selama masa garansi aktif dan kerusakan terbukti akibat kecacatan manufaktur, seluruh biaya penggantian suku cadang dan jasa perbaikan teknisi adalah 100% GRATIS tanpa biaya tambahan.' }
]

const claimSteps = [
  {
    step: '01',
    icon: FileText,
    title: 'Siapkan Dokumen',
    desc: 'Siapkan nota pembelian, foto nomor seri (serial number) di samping unit AC, dan deskripsi singkat keluhan.'
  },
  {
    step: '02',
    icon: PhoneCall,
    title: 'Hubungi Customer Care',
    desc: 'Telepon Bebas Pulsa 0800-1-234567 atau WhatsApp Layanan Resmi ke 0811-904-8058.'
  },
  {
    step: '03',
    icon: MessageCircle,
    title: 'Verifikasi & Jadwal',
    desc: 'Tim Daikin memverifikasi kelayakan garansi dan menjadwalkan tanggal kunjungan teknisi resmi.'
  },
  {
    step: '04',
    icon: Wrench,
    title: 'Kunjungan Teknisi',
    desc: 'Teknisi bersertifikat tiba di lokasi untuk melakukan cek diagnosa dan perbaikan langsung.'
  },
  {
    step: '05',
    icon: CheckCircle2,
    title: 'Selesai & Bebas Biaya',
    desc: 'Unit kembali berfungsi optimal. Perbaikan dalam masa garansi resmi 100% Bebas Biaya Jasa & Sparepart.'
  }
]

const warrantyCoverage = [
  {
    title: 'Garansi Unit & PCB',
    period: '1 Tahun',
    desc: 'Melindungi seluruh komponen internal, komponen elektrikal, fan motor, dan modul PCB kontrol dari kecacatan manufaktur.',
    badge: 'Garansi Standar',
    popular: false
  },
  {
    title: 'Garansi Kompresor Inverter',
    period: '3 - 5 Tahun',
    desc: 'Jaminan daya tahan kompresor inverter berteknologi Jepang dengan masa garansi panjang hingga 5 tahun penuh.',
    badge: 'Best Seller Protection',
    popular: true
  },
  {
    title: 'Garansi Diperpanjang (Extended)',
    period: 'Hingga 10 Tahun',
    desc: 'Perlindungan ekstra tanpa rasa cemas untuk lini unit komersial VRV & ProShop dengan jaminan perawatan eksklusif.',
    badge: 'Flagship Protection',
    popular: false
  }
]

export default function WarrantySupport() {
  return (
    <PageTransition>
      <PageMeta 
        title="Jaminan & Garansi Resmi - PT Daikin Airconditioning Indonesia" 
        canonical="/services/warranty" 
      />

      {/* Modern Premium Hero Banner */}
      <div className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-[#061936] via-daikin-blue-dark to-[#007bbf] text-white">
        <Suspense fallback={null}>
          <AirParticles color="white" />
        </Suspense>

        {/* Ambient lighting & background pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '36px 36px',
        }} />

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-daikin-blue-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <Breadcrumb 
            items={[
              { label: 'Layanan', path: '/services' }, 
              { label: 'Jaminan & Garansi' }
            ]} 
            className="text-white/80 mb-8" 
          />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/20 text-white">
                  Perlindungan Konsumen Terjamin
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Jaminan &amp; <br />
                  <span className="text-daikin-blue-light font-light">Garansi Resmi Daikin</span>
                </h1>

                <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
                  Investasi kenyamanan tata udara Anda terlindungi dengan program garansi komprehensif, jaringan suku cadang asli, serta layanan purna jual resmi dari PT Daikin Airconditioning Indonesia.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href="#claim-procedure"
                    className="px-6 py-3.5 bg-gradient-to-r from-daikin-blue-light to-daikin-blue text-white font-bold text-sm rounded-xl shadow-lg hover:from-sky-300 hover:to-daikin-blue transition-all flex items-center gap-2 group"
                  >
                    <span>Panduan Klaim Garansi</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a 
                    href="#warranty-coverage"
                    className="px-6 py-3.5 bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
                  >
                    Cakupan Garansi
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <FadeInUp delay={0.2} className="w-full max-w-md">
                <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-inner shrink-0">
                      <BadgeCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold">Resmi &amp; Terverifikasi</span>
                      <h3 className="text-xl font-bold">100% Original Guarantee</h3>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-xs text-white/85 mb-6">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Jaminan Kompresor Inverter Hingga 5 Tahun</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Garansi Spare Part &amp; PCB Kontrol 1 Tahun</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Bebas Biaya Jasa Servis Teknisi Resmi</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Respon Kunjungan Teknisi 1x24 Jam</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-white/70">
                    <span>PT Daikin Airconditioning Indonesia</span>
                    <ShieldAlert className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>

        </div>
      </div>

      {/* Main Section Body */}
      <div className="bg-slate-50 py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Warranty Tiers Card Grid */}
          <section id="warranty-coverage" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
                Skema Perlindungan
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                Cakupan Garansi Resmi Daikin
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Pahami tingkat perlindungan garansi yang Anda dapatkan untuk setiap pembelian produk AC Daikin original.
              </p>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {warrantyCoverage.map((item, idx) => (
                <FadeInUp key={item.title} delay={idx * 0.1}>
                  <div className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between h-full group ${
                    item.popular 
                      ? 'border-daikin-blue shadow-lg shadow-daikin-blue/10 scale-102' 
                      : 'border-slate-200/80 shadow-2xs hover:shadow-md hover:border-sky-300'
                  }`}>
                    
                    {item.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-daikin-blue to-daikin-blue-dark text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                        {item.badge}
                      </div>
                    )}

                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-sky-50 text-daikin-blue border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-7 h-7" />
                      </div>

                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        {!item.popular && item.badge}
                      </span>

                      <h3 className="text-xl font-bold text-charcoal mb-3">
                        {item.title}
                      </h3>

                      <div className="text-3xl font-extrabold text-daikin-blue mb-4">
                        {item.period}
                      </div>

                      <p className="text-slate-600 text-xs leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Termasuk Jasa &amp; Spare Part Resmi</span>
                    </div>

                  </div>
                </FadeInUp>
              ))}
            </div>
          </section>

          {/* Claim Procedure Timeline */}
          <section id="claim-procedure" className="scroll-mt-32">
            <FadeInUp className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
                Prosedur Mudah
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                Cara Pengajuan Klaim Garansi
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Prosedur klaim garansi Daikin dirancang transparan dan cepat untuk kenyamanan Anda.
              </p>
            </FadeInUp>

            <FadeInUp>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {claimSteps.map((s, i) => (
                  <div key={s.step} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col items-center text-center justify-between h-full group hover:border-sky-300 transition-all">
                    <div className="space-y-4 flex flex-col items-center">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 ${
                        i === 0 || i === 4 
                          ? 'bg-daikin-blue text-white' 
                          : 'bg-sky-50 text-daikin-blue border border-sky-100'
                      }`}>
                        <s.icon className="w-7 h-7" />
                      </div>

                      <span className="text-xs font-extrabold text-daikin-blue bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                        Langkah {s.step}
                      </span>

                      <h3 className="font-bold text-charcoal text-base">
                        {s.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 w-full text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Tahap {i + 1} Dari 5
                    </div>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </section>

          {/* Customer Care Hotline & WhatsApp Action Banner */}
          <section>
            <FadeInUp>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* WhatsApp Assist */}
                <a
                  href="https://wa.me/628119048058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#128C7E] to-[#25D366] text-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Respon Cepat 24/7
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold mb-1">WhatsApp Customer Care</h3>
                      <p className="text-white/90 text-xs leading-relaxed">
                        Konsultasi garansi, panduan klaim, dan bantuan jadwal teknisi langsung lewat pesan WhatsApp.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/20 flex items-center justify-between">
                    <span className="text-xl font-bold tracking-wider">0811-904-8058</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-[#128C7E] px-4 py-2 rounded-xl shadow-sm group-hover:gap-2.5 transition-all">
                      <span>Chat WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Hotline Call */}
                <div className="bg-gradient-to-br from-daikin-blue-dark to-daikin-blue text-white rounded-3xl p-8 shadow-lg flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <PhoneCall className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Bebas Pulsa
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold mb-1">Call Center Daikin Indonesia</h3>
                      <p className="text-white/90 text-xs leading-relaxed">
                        Layanan telepon bantuan bebas pulsa dari seluruh wilayah Indonesia (Senin – Jumat 08.00–17.00 WIB).
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/20 flex items-center justify-between">
                    <span className="text-xl font-bold tracking-wider">0800-1-234567</span>
                    <a 
                      href="tel:08001234567"
                      className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-daikin-blue px-4 py-2 rounded-xl shadow-sm hover:bg-sky-50 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Telepon Bebas Pulsa</span>
                    </a>
                  </div>
                </div>

              </div>
            </FadeInUp>
          </section>

          {/* FAQ Accordion Section */}
          <section className="max-w-4xl mx-auto">
            <FadeInLeft className="text-center mb-10 space-y-2">
              <span className="text-daikin-blue font-bold text-xs uppercase tracking-wider bg-sky-50 px-4 py-1 rounded-full border border-sky-100 inline-block">
                Tanya Jawab
              </span>
              <h2 className="text-3xl font-bold text-charcoal">FAQ Garansi Resmi Daikin</h2>
              <p className="text-xs text-slate-500">Pertanyaan yang sering diajukan mengenai masa berlaku dan prosedur garansi.</p>
            </FadeInLeft>

            <FadeInUp className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-2xs">
              <Accordion items={warrantyItems} />
            </FadeInUp>
          </section>

        </div>
      </div>

    </PageTransition>
  )
}
