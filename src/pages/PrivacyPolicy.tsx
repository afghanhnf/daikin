import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, FileText, ChevronRight, Scale, Building2, MapPin, CheckCircle2 } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import { cn } from '@/utils/cn'

const tocItems = [
  { id: 'privacy-policy', label: 'Kebijakan Privasi DAIKIN' },
  { id: 'terms-1', label: '1. Syarat' },
  { id: 'terms-2', label: '2. Lisensi' },
  { id: 'terms-3', label: '3. Disclaimer' },
  { id: 'terms-4', label: '4. Keterbatasan' },
  { id: 'terms-5', label: '5. Akurasi Materi' },
  { id: 'terms-6', label: '6. Tautan' },
  { id: 'terms-7', label: '7. Modifikasi' },
  { id: 'terms-8', label: '8. Hukum yang Mengatur' },
  { id: 'terms-9', label: '9. Perhatian & Kontak Hukum' },
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('privacy-policy')

  // Auto ScrollSpy to detect active section when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(tocItems[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -120
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full relative">
      <PageMeta
        title="Kebijakan Privasi & Ketentuan Layanan | PT Daikin Airconditioning Indonesia"
        description="Dokumen resmi Kebijakan Privasi dan Ketentuan Layanan PT Daikin Airconditioning Indonesia."
        canonical="/privacy-policy"
      />

      {/* ── 1. HEADER (Clean Documentation Style) ─────────────────────────── */}
      <div className="bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#0080cb] pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Profil Perusahaan', path: '/all-about' },
              { label: 'Kebijakan Privasi & Ketentuan Layanan' }
            ]}
            className="text-white/80 mb-6"
          />

          <FadeInUp className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 border border-white/20">
              <Scale className="w-3.5 h-3.5 text-cyan-300" />
              DOKUMEN HUKUM RESMI
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
              Kebijakan Privasi & Ketentuan Layanan
            </h1>
            <p className="text-white/90 text-sm sm:text-base font-sans font-light max-w-2xl leading-relaxed">
              PT Daikin Airconditioning Indonesia – Dokumen kebijakan perlindungan data pribadi dan syarat ketentuan penggunaan situs web resmi.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* ── 2. DOCUMENTATION BODY WITH STICKY TABLE OF CONTENTS SIDEBAR ───── */}
      <div className="bg-slate-50/70 py-12 md:py-20 border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* STICKY TABLE OF CONTENTS SIDEBAR */}
            <aside className="lg:col-span-4 sticky top-28 self-start z-30 space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-150">
                  <FileText className="w-4 h-4 text-daikin-blue" />
                  <h3 className="font-bold font-display text-charcoal text-xs uppercase tracking-wider">
                    Daftar Isi Dokumentasi
                  </h3>
                </div>

                <nav className="space-y-1 font-sans text-xs">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={cn(
                        'w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between font-medium',
                        activeSection === item.id
                          ? 'bg-daikin-blue-50 text-daikin-blue font-bold border border-daikin-blue/20 shadow-2xs'
                          : 'text-gray-600 hover:bg-gray-100/70 hover:text-charcoal'
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={cn('w-3.5 h-3.5 transition-transform duration-200', activeSection === item.id ? 'text-daikin-blue translate-x-0.5' : 'opacity-40')} />
                    </button>
                  ))}
                </nav>

                <div className="pt-3 border-t border-gray-150 text-[11px] text-gray-500 font-sans leading-relaxed">
                  <span className="font-bold text-gray-700 block mb-0.5">Mulai Berlaku:</span>
                  12 Februari 2020 (Versi Terbaru Dikaji 2026)
                </div>
              </div>
            </aside>

            {/* Main Documentation Content Area */}
            <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xs space-y-12 text-gray-700 font-sans text-xs sm:text-sm leading-relaxed">
              
              {/* SECTION: KEBIJAKAN PRIVASI DAIKIN */}
              <section id="privacy-policy" className="space-y-4 scroll-mt-32">
                <div className="border-b border-daikin-blue/15 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-daikin-blue bg-daikin-blue-50 px-2.5 py-1 rounded-md border border-daikin-blue/15">
                    Dokumen Utama
                  </span>
                  <h2 className="text-2xl font-bold font-display text-charcoal mt-2">
                    Kebijakan Privasi DAIKIN
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed font-light">
                  Privasi Anda penting bagi kami. Ini adalah Kebijakan PT. Daikin Airconditioning Indonesia untuk menghormati privasi Anda mengenai setiap informasi yang kami kumpulkan dari Anda di situs web kami, <a href="http://www.daikin.co.id/" target="_blank" rel="noreferrer" className="text-daikin-blue font-semibold hover:underline">http://www.daikin.co.id/</a>, dan situs lain yang kami miliki dan operasikan.
                </p>

                <p className="text-gray-700 leading-relaxed font-light">
                  Kami hanya meminta informasi pribadi ketika kami benar-benar membutuhkannya untuk memberikan layanan kepada Anda. Kami mengumpulkannya dengan cara yang adil dan sah, dengan sepengetahuan dan persetujuan Anda. Kami juga memberi tahu Anda mengapa kami mengumpulkannya dan bagaimana itu akan digunakan.
                </p>

                <p className="text-gray-700 leading-relaxed font-light">
                  Kami hanya menyimpan informasi yang dikumpulkan selama diperlukan untuk menyediakan layanan yang Anda minta. Data apa yang kami simpan, akan kami lindungi dengan cara yang dapat diterima secara komersial untuk mencegah kehilangan dan pencurian, serta akses, pengungkapan, penyalinan, penggunaan, atau modifikasi yang tidak sah.
                </p>

                <p className="text-gray-700 leading-relaxed font-light">
                  Kami tidak membagikan informasi pengenal pribadi apa pun secara publik atau dengan pihak ketiga, kecuali jika diwajibkan oleh hukum.
                </p>

                <p className="text-gray-700 leading-relaxed font-light">
                  Situs web kami dapat menautkan ke situs eksternal yang tidak dioperasikan oleh kami. Perlu diketahui bahwa kami tidak memiliki kendali atas konten dan praktik situs-situs ini, dan tidak dapat menerima tanggung jawab atau kewajiban atas kebijakan privasi masing-masing.
                </p>

                <p className="text-gray-700 leading-relaxed font-light">
                  Anda bebas menolak permintaan kami untuk informasi pribadi Anda, dengan pengertian bahwa kami mungkin tidak dapat menyediakan beberapa layanan yang Anda inginkan.
                </p>

                <p className="text-gray-700 leading-relaxed font-light">
                  Penggunaan Anda yang berkelanjutan atas situs web kami akan dianggap sebagai penerimaan praktik kami seputar privasi dan informasi pribadi. Jika Anda memiliki pertanyaan tentang bagaimana kami menangani data pengguna dan informasi pribadi, jangan ragu untuk menghubungi kami.
                </p>

                <div className="p-4 bg-slate-50 rounded-xl border border-gray-200 text-xs font-medium text-gray-600">
                  Kebijakan ini berlaku mulai <span className="font-bold text-charcoal">12 Februari 2020</span>.
                </div>
              </section>

              <hr className="border-gray-200 my-8" />

              {/* SECTION: KETENTUAN LAYANAN */}
              <div className="space-y-8">
                <div className="border-b border-daikin-blue/15 pb-3">
                  <h2 className="text-2xl font-bold font-display text-charcoal">
                    Ketentuan Layanan PT. Daikin Airconditioning Indonesia
                  </h2>
                </div>

                {/* 1. Syarat */}
                <section id="terms-1" className="space-y-2.5 scroll-mt-32">
                  <h3 className="text-base font-bold font-display text-charcoal">
                    1. Syarat
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light">
                    Dengan mengakses situs web di <a href="http://www.daikin.co.id/" target="_blank" rel="noreferrer" className="text-daikin-blue font-semibold hover:underline">http://www.daikin.co.id/</a>, Anda setuju untuk terikat dengan persyaratan layanan ini, semua hukum dan peraturan yang berlaku, dan setuju bahwa Anda bertanggung jawab untuk mematuhi hukum setempat yang berlaku. Jika Anda tidak setuju dengan salah satu persyaratan ini, Anda dilarang menggunakan atau mengakses situs ini. Materi yang terkandung dalam situs web ini dilindungi oleh undang-undang hak cipta dan merek dagang yang berlaku.
                  </p>
                </section>

                {/* 2. Lisensi */}
                <section id="terms-2" className="space-y-3 scroll-mt-32">
                  <h3 className="text-base font-bold font-display text-charcoal">
                    2. Lisensi
                  </h3>
                  <div className="space-y-3 text-gray-700 font-light">
                    <p>
                      1. Izin diberikan untuk mengunduh sementara satu salinan materi (informasi atau perangkat lunak) di PT. Situs web Daikin Airconditioning Indonesia hanya untuk tampilan sementara nonkomersial. Ini adalah pemberian lisensi, bukan pengalihan hak, dan di bawah lisensi ini Anda tidak boleh:
                    </p>
                    <ul className="list-decimal pl-6 space-y-1.5 font-sans">
                      <li>memodifikasi atau menyalin materi;</li>
                      <li>menggunakan materi untuk tujuan komersial apa pun, atau untuk tampilan publik apa pun (komersial atau non-komersial);</li>
                      <li>mencoba mendekompilasi atau merekayasa balik perangkat lunak apa pun yang terdapat di PT. Situs web Daikin Airconditioning Indonesia;</li>
                      <li>menghapus hak cipta atau notasi kepemilikan lainnya dari materi; atau</li>
                      <li>mentransfer materi ke orang lain atau "mencerminkan" materi di server lain mana pun.</li>
                    </ul>
                    <p>
                      2. Lisensi ini akan berakhir secara otomatis jika Anda melanggar salah satu batasan ini dan dapat diakhiri oleh PT. Daikin Airconditioning Indonesia setiap saat. Setelah menghentikan penayangan materi ini atau setelah penghentian lisensi ini, Anda harus memusnahkan materi unduhan apa pun yang Anda miliki baik dalam format elektronik atau cetak.
                    </p>
                  </div>
                </section>

                {/* 3. Disclaimer */}
                <section id="terms-3" className="space-y-3 scroll-mt-32">
                  <h3 className="text-base font-bold font-display text-charcoal">
                    3. Disclaimer
                  </h3>
                  <div className="space-y-2 text-gray-700 font-light">
                    <p>
                      1. Materi di Situs web PT. Daikin Airconditioning Indonesia disediakan berdasarkan 'apa adanya'. PT. Daikin Airconditioning Indonesia tidak memberikan jaminan, tersurat maupun tersirat, dan dengan ini menolak dan meniadakan semua jaminan lainnya termasuk, tanpa batasan, jaminan tersirat atau kondisi yang dapat diperjualbelikan, kesesuaian untuk tujuan tertentu, atau non-pelanggaran kekayaan intelektual atau pelanggaran hak lainnya.
                    </p>
                    <p>
                      2. Selanjutnya, PT. Daikin Airconditioning Indonesia tidak menjamin atau membuat pernyataan apa pun mengenai keakuratan, kemungkinan hasil, atau keandalan penggunaan materi di situs webnya atau yang berkaitan dengan materi tersebut atau di situs mana pun yang tertaut ke situs ini.
                    </p>
                  </div>
                </section>

                {/* 4. Keterbatasan */}
                <section id="terms-4" className="space-y-2.5 scroll-mt-32">
                  <h3 className="text-base font-bold font-display text-charcoal">
                    4. Keterbatasan
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light">
                    Dalam hal apapun PT . Daikin Airconditioning Indonesia atau pemasoknya bertanggung jawab atas segala kerusakan (termasuk, tidak terbatas pada, kerusakan karena hilangnya data atau keuntungan, atau karena gangguan bisnis) yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan materi di PT. Website Daikin Airconditioning Indonesia, meskipun PT . Daikin Airconditioning Indonesia atau PT. Perwakilan resmi Daikin Airconditioning Indonesia telah diberitahukan secara lisan atau tertulis tentang kemungkinan kerusakan tersebut. Karena beberapa yurisdiksi tidak mengizinkan batasan pada jaminan tersirat, atau batasan tanggung jawab atas kerusakan konsekuensial atau insidental, batasan ini mungkin tidak berlaku untuk Anda.
                  </p>
                </section>

                {/* 5. Akurasi Materi */}
                <section id="terms-5" className="space-y-2.5 scroll-mt-32">
                  <h3 className="text-base font-bold font-display text-charcoal">
                    5. Akurasi Materi
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light">
                    Materi yang muncul di Situs web PT. Daikin Airconditioning Indonesia dapat berisi kesalahan teknis, tipografi, atau fotografi. PT. Daikin Airconditioning Indonesia tidak menjamin bahwa materi apa pun di situs webnya akurat, lengkap, atau terkini. PT. Daikin Airconditioning Indonesia dapat mengubah materi yang terdapat di situs webnya sewaktu-waktu tanpa pemberitahuan. Namun PT. Daikin Airconditioning Indonesia tidak berkomitmen untuk memperbarui materi.
                  </p>
                </section>

                {/* 6. Tautan */}
                <section id="terms-6" className="space-y-2.5 scroll-mt-32">
                  <h3 className="text-base font-bold font-display text-charcoal">
                    6. Tautan
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light">
                    PT. Daikin Airconditioning Indonesia belum meninjau semua situs yang tertaut ke situs webnya dan tidak bertanggung jawab atas konten dari situs tertaut tersebut. Dimasukkannya tautan apa pun tidak menyiratkan pengesahan oleh PT. Daikin Airconditioning Indonesia dari situs tersebut. Penggunaan situs web tertaut tersebut merupakan risiko pengguna sendiri.
                  </p>
                </section>

                {/* 7. Modifikasi */}
                <section id="terms-7" className="space-y-2.5 scroll-mt-32">
                  <h3 className="text-base font-bold font-display text-charcoal">
                    7. Modifikasi
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light">
                    PT. Daikin Airconditioning Indonesia dapat merevisi persyaratan layanan ini untuk situs webnya kapan saja tanpa pemberitahuan. Dengan menggunakan situs web ini, Anda setuju untuk terikat dengan versi persyaratan layanan saat ini.
                  </p>
                </section>

                {/* 8. Hukum yang Mengatur */}
                <section id="terms-8" className="space-y-2.5 scroll-mt-32">
                  <h3 className="text-base font-bold font-display text-charcoal">
                    8. Hukum yang Mengatur
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light">
                    Syarat dan ketentuan ini diatur oleh dan ditafsitkan sesuai dengan hukum Indonesia dan Anda secara tidak dapat ditarik kembali tunduk pada yurisdiksi eksklusif pengadilan di Negara Bagian atau lokasi tersebut.
                  </p>
                </section>

                {/* 9. Perhatian & Kontak Hukum */}
                <section id="terms-9" className="space-y-4 scroll-mt-32 pt-4">
                  <h3 className="text-base font-bold font-display text-charcoal">
                    9. Perhatian
                  </h3>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200/80 space-y-4 text-xs font-sans">
                    <div className="space-y-1">
                      <span className="font-bold text-charcoal block">1. Komunikasi Pemasaran</span>
                      <span className="font-bold text-charcoal block">2. Departemen Hukum</span>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-gray-200/80 text-gray-700">
                      <Building2 className="w-4 h-4 text-daikin-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-charcoal block">PT Daikin Airconditioning Indonesia</span>
                        <span className="text-gray-600 block mt-0.5">
                          Menara Astra Lt. 7 & 8, Jalan Jendral Sudirman Kav. 5-6 - Jakarta Pusat 10220, Indonesia
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

              </div>

            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
