import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, ChevronRight, Scale, ShieldCheck, Building2, AlertCircle, CheckCircle2 } from 'lucide-react'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FadeInUp from '@/components/animations/FadeInUp'
import { cn } from '@/utils/cn'

const tocItems = [
  { id: 'overview', label: '1. Ketentuan Penggunaan' },
  { id: 'changes', label: '2. Perubahan Terms of Use' },
  { id: 'consumers', label: '3. Konsumen DAIKIN' },
  { id: 'addition', label: '4. Penambahan Terms of Use' },
  { id: 'privacy', label: '5. Privacy Policy' },
  { id: 'content-change', label: '6. Perubahan Konten' },
  { id: 'obligations', label: '7. Kewajiban Pengguna' },
  { id: 'copyright', label: '8. Hak Milik' },
  { id: 'license', label: '9. Lisensi Penggunaan' },
  { id: 'monitoring', label: '10. Pengawasan' },
  { id: 'external-links', label: '11. Link Situs Lainnya' },
]

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState('overview')

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
        title="Terms & Conditions of Use | PT Daikin Airconditioning Indonesia"
        description="Syarat dan Ketentuan Penggunaan situs web resmi PT Daikin Airconditioning Indonesia."
        canonical="/terms-condition"
      />

      {/* ── 1. HEADER (Clean Documentation Style) ─────────────────────────── */}
      <div className="bg-gradient-to-br from-[#0a1526] via-daikin-blue-dark to-[#0080cb] pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb
            items={[
              { label: 'Profil Perusahaan', path: '/all-about' },
              { label: 'Terms & Conditions of Use' }
            ]}
            className="text-white/80 mb-6"
          />

          <FadeInUp className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-200 border border-white/20">
              <Scale className="w-3.5 h-3.5 text-cyan-300" />
              SYARAT & KETENTUAN PENGGUNAAN
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
              Terms & Conditions of Use
            </h1>
            <p className="text-white/90 text-sm sm:text-base font-sans font-light max-w-2xl leading-relaxed">
              PT Daikin Airconditioning Indonesia – Ketentuan resmi penggunaan situs, konten, layanan, dan fitur resmi.
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
                  <span className="font-bold text-gray-700 block mb-0.5">Versi Dokumen:</span>
                  Ketentuan Resmi Berlaku Bagi Seluruh Pengunjung Situs
                </div>
              </div>
            </aside>

            {/* Main Documentation Content Area */}
            <main className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xs space-y-12 text-gray-700 font-sans text-xs sm:text-sm leading-relaxed">
              
              {/* 1. OVERVIEW */}
              <section id="overview" className="space-y-4 scroll-mt-32">
                <div className="border-b border-daikin-blue/15 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-daikin-blue bg-daikin-blue-50 px-2.5 py-1 rounded-md border border-daikin-blue/15">
                    Pendahuluan
                  </span>
                  <h2 className="text-2xl font-bold font-display text-charcoal mt-2">
                    Terms And Conditions of Use
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed font-light">
                  Selamat datang di <a href="http://www.daikin.co.id/" target="_blank" rel="noreferrer" className="text-daikin-blue font-semibold hover:underline">www.daikin.co.id</a>, situs resmi yang dikelola oleh PT Daikin Airconditioning Indonesia (selanjutnya disebut "pengelola" atau "kami"). Terms of Use berikut adalah ketentuan dalam penggunaan situs, konten, layanan dan fitur yang ada di daikin.co.id.
                </p>

                <p className="text-gray-700 leading-relaxed font-light">
                  Harap Anda membaca Terms of Use ini dengan sebaik-baiknya. Dengan mengakses dan menggunakan daikin.co.id, berarti Anda telah memahami dan setuju untuk terikat dengan semua peraturan yang berlaku di situs ini. Jika Anda tidak setuju untuk terikat dengan semua peraturan yang berlaku, silakan untuk tidak menggunakan situs ini.
                </p>
              </section>

              {/* 2. PERUBAHAN TERMS OF USE */}
              <section id="changes" className="space-y-3 scroll-mt-32 border-t border-gray-150 pt-8">
                <h3 className="text-lg font-bold font-display text-charcoal">
                  PERUBAHAN TERMS OF USE
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Pengelola dapat setiap saat mengganti, menambah atau mengurangi Terms of Use ini. Anda terikat oleh setiap perubahan tersebut dan karenanya secara berkala harus melihat halaman ini untuk memeriksa Terms of Use yang berlaku dan mengikat Anda.
                </p>
              </section>

              {/* 3. KONSUMEN DAIKIN */}
              <section id="consumers" className="space-y-3 scroll-mt-32 border-t border-gray-150 pt-8">
                <h3 className="text-lg font-bold font-display text-charcoal">
                  KONSUMEN DAIKIN
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Beberapa layanan pada situs ini, seperti live chat, form kontak kami, tersedia untuk pengunjung yang kami anggap sebagai konsumen DAIKIN dan bukan pihak yang menawarkan promosi ke kami. Data konsumen yang telah masuk ke pengelola dapat digunakan oleh pengelola untuk promosi Brand DAIKIN.
                </p>
              </section>

              {/* 4. PENAMBAHAN TERMS OF USE */}
              <section id="addition" className="space-y-3 scroll-mt-32 border-t border-gray-150 pt-8">
                <h3 className="text-lg font-bold font-display text-charcoal">
                  PENAMBAHAN TERMS OF USE
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Beberapa area atau layanan dari daikin.co.id, seperti halaman di mana Anda dapat memuat (upload) atau mengunduh (download) dokumen atau berkas, dapat memiliki panduan dan peraturan penggunaan yang akan menambah Terms of Use ini. Dengan menggunakan layanan-layanan tersebut, Anda setuju untuk terikat dengan petunjuk dan peraturan penggunaan yang berlaku tersebut.
                </p>
              </section>

              {/* 5. PRIVACY POLICY */}
              <section id="privacy" className="space-y-3 scroll-mt-32 border-t border-gray-150 pt-8">
                <h3 className="text-lg font-bold font-display text-charcoal">
                  PRIVACY POLICY
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Privacy policy daikin.co.id mengungkapkan kebijakan penanganan data-data pribadi Anda pada saat Anda mengakses daikin.co.id. Penggunaan daikin.co.id secara rutin dan terus menerus menunjukkan persetujuan Anda pada Privacy Policy pengelola. Anda dapat membaca Privacy Policy dengan mengakses tombol "Privacy Policy" di bagian bawah halaman website daikin.co.id atau melalui tautan <Link to="/privacy-policy" className="text-daikin-blue font-semibold hover:underline">Kebijakan Privasi</Link>.
                </p>
              </section>

              {/* 6. PERUBAHAN KONTEN */}
              <section id="content-change" className="space-y-3 scroll-mt-32 border-t border-gray-150 pt-8">
                <h3 className="text-lg font-bold font-display text-charcoal">
                  PERUBAHAN KONTEN
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Pengelola dapat tidak meneruskan atau mengubah data konten atau fitur pada daikin.co.id sewaktu-waktu dan tanpa pemberitahuan terlebih dahulu.
                </p>
              </section>

              {/* 7. KEWAJIBAN PENGGUNA */}
              <section id="obligations" className="space-y-4 scroll-mt-32 border-t border-gray-150 pt-8">
                <h3 className="text-lg font-bold font-display text-charcoal">
                  KEWAJIBAN PENGGUNA
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Penggunaan daikin.co.id harus tunduk pada hukum dan peraturan perundangan dalam wilayah Republik Indonesia. Anda dilarang untuk memuat atau meneruskan melalui daikin.co.id materi atau hal lainnya yang:
                </p>

                <div className="space-y-2.5 bg-slate-50 p-5 rounded-2xl border border-gray-200/80">
                  {[
                    'Melanggar atau menyalahi hak orang lain, termasuk tanpa kecuali, hak paten, merek dagang, rahasia dagang, hak cipta, publisitas atau hak milik lainnya.',
                    'Melanggar hukum, mengancam, menghina, melecehkan, memfitnah, mencemarkan, memperdaya, curang, atau menimbulkan kebencian pada orang atau golongan tertentu.',
                    'Menganiaya, melecehkan, merendahkan atau mengintimidasi individu atau grup individu berdasarkan agama, jenis kelamin, orientasi seksual, ras, etnis, usia atau cacat fisik.',
                    'Melanggar norma kesusilaan, cabul, pornografi.',
                    'Menganjurkan atau menyarankan perbuatan yang melanggar hukum.',
                    'Menyinggung, memicu pertentangan dan atau permusuhan antar Suku, Agama, Ras dan Antar Golongan (SARA).',
                    'Memuat kata-kata atau gambar-gambar yang menimbulkan rasa ngeri, kasar, kotor, jorok, dan sumpah serapah.',
                    'Menyebarkan ideologi atau ajaran tertentu yang pada prinsipnya dilarang oleh hukum yang berlaku di wilayah Republik Indonesia.',
                    'Mengandung virus atau kode komputer lainnya, file atau program yang dapat mengganggu, merusak atau membatasi fungsi dari software atau hardware komputer atau peralatan komunikasi, atau memperbolehkan penggunaan komputer atau jaringan komputer yang tidak sah.',
                    'Melanggar Terms of Use, petunjuk atau kebijakan lainnya yang ada pada daikin.co.id.'
                  ].map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 font-light">
                      <span className="w-5 h-5 rounded-full bg-daikin-blue-50 text-daikin-blue font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5 border border-daikin-blue/15">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed font-light">
                  Anda tidak diperbolehkan menggunakan daikin.co.id dalam kondisi atau cara apapun yang dapat merusak, melumpuhkan, membebani atau mengganggu server atau jaringan daikin.co.id. Anda juga tidak diperbolehkan untuk mengakses layanan, user accounts, sistem komputer atau jaringan secara tidak sah, dengan cara hacking, password mining atau cara lainnya.
                </p>

                <p className="text-gray-700 leading-relaxed font-light">
                  Pengelola akan bekerjasama secara penuh dengan setiap pejabat penegak hukum atau perintah pengadilan yang meminta atau mengarahkan pengelola untuk mengungkapkan identitas dari siapapun yang memuati materi atau informasi seperti tersebut di atas.
                </p>
              </section>

              {/* 8. HAK MILIK */}
              <section id="copyright" className="space-y-3 scroll-mt-32 border-t border-gray-150 pt-8">
                <h3 className="text-lg font-bold font-display text-charcoal">
                  HAK MILIK
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Seluruh rancangan desain, gambar, artwork, audio, video serta kode pemrograman (selanjutnya disebut "konten") dalam situs ini adalah hak cipta milik pengelola. Anda tidak diperkenankan untuk memodifikasi, menyalin, mengubah atau menambah rancangan desain, gambar, artwork, audio, video serta kode pemrograman dalam fasilitas ini dalam keadaan atau kondisi apapun.
                </p>
              </section>

              {/* 9. LISENSI PENGGUNAAN */}
              <section id="license" className="space-y-3 scroll-mt-32 border-t border-gray-150 pt-8">
                <h3 className="text-lg font-bold font-display text-charcoal">
                  LISENSI PENGGUNAAN
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Anda diperkenankan untuk menggunakan daikin.co.id dan konten yang ditawarkan daikin.co.id hanya untuk keperluan komersil brand DAIKIN dan harus melalui persetujuan pengelola terlebih dahulu.
                </p>
                <p className="text-gray-700 leading-relaxed font-light">
                  Anda tidak diperkenankan memproduksi ulang, mencetak, menyalin, menyimpan, mempublikasikan, menayangkan, menyebarkan, memodifikasi, menerjemahkan, menerbitkan, mentransfer, menjual, meminjamkan atau mendistribusikan konten daikin.co.id tanpa ijin tertulis dari pengelola.
                </p>
              </section>

              {/* 10. PENGAWASAN */}
              <section id="monitoring" className="space-y-3 scroll-mt-32 border-t border-gray-150 pt-8">
                <h3 className="text-lg font-bold font-display text-charcoal">
                  PENGAWASAN
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Anda setuju bahwa kami tidak bertanggung jawab atas konten yang disediakan pihak lain. Kami tidak memiliki kewajiban untuk memeriksa konten tersebut, tapi kami berhak menolak untuk memuat atau menyunting konten yang dikirim. Kami memiliki hak untuk menghapus konten untuk berbagai alasan, tapi kami tidak bertanggung jawab atas kegagalan atau penundaan penghapusan materi tersebut.
                </p>
              </section>

              {/* 11. LINK SITUS LAINNYA */}
              <section id="external-links" className="space-y-3 scroll-mt-32 border-t border-gray-150 pt-8">
                <h3 className="text-lg font-bold font-display text-charcoal">
                  LINK SITUS LAINNYA
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  daikin.co.id mungkin menyediakan link ke situs pihak ketiga, termasuk link yang disediakan pada halaman hasil pencarian. Beberapa link situs tersebut mungkin mengandung materi yang tidak menyenangkan, tidak sesuai hukum atau tidak akurat. Link tersebut tidak memperlihatkan bahwa kami menyetujui situs pihak ketiga tersebut. Anda mengetahui dan menyetujui bahwa kami tidak bertanggung jawab atas konten atau materi lainnya yang ada pada situs pihak ketiga tersebut. Setiap perjanjian dan transaksi antara Anda dan pengiklan yang ada di daikin.co.id adalah antara Anda dan pengiklan dan Anda mengetahui dan setuju bahwa kami tidak bertanggung jawab atas setiap kehilangan atau klaim yang mungkin disebabkan oleh perjanjian atau transaksi antara Anda dengan pengiklan.
                </p>

                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200/80 space-y-3 mt-6 text-xs">
                  <span className="font-bold text-charcoal block uppercase tracking-wider">Kontak Penanggung Jawab Hukum:</span>
                  <div className="flex items-start gap-3 text-gray-700">
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

            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
