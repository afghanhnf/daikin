import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Search, FileDown, Eye } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import FadeInUp from '@/components/animations/FadeInUp'

const AirParticles = lazy(() => import('@/components/animations/AirParticles'))

// Sample data extracted from the screenshot
const tkdnData = [
  { sbu: 'ROOM AIR', type: 'Single Split Wall Mounted', tech: 'Inverter', model: 'FTKH15YV14 & RKH15YV14', tkdn: '45,97%', bmp: '15,00%', total: '60,97%' },
  { sbu: 'ROOM AIR', type: 'Single Split Wall Mounted', tech: 'Inverter', model: 'FTKH20YV14 & RKH20YV14', tkdn: '46,55%', bmp: '15,00%', total: '61,55%' },
  { sbu: 'ROOM AIR', type: 'Single Split Wall Mounted', tech: 'Inverter', model: 'FTKH25YV14 & RKH25YV14', tkdn: '46,56%', bmp: '15,00%', total: '61,56%' },
  { sbu: 'ROOM AIR', type: 'Single Split Wall Mounted', tech: 'Inverter', model: 'FTKH35YV14 & RKH35YV14', tkdn: '47,34%', bmp: '15,00%', total: '62,34%' },
  { sbu: 'ROOM AIR', type: 'Single Split Wall Mounted', tech: 'Inverter', model: 'FTKE15YV14 & RKE15YV14', tkdn: '47,25%', bmp: '15,00%', total: '62,25%' },
  { sbu: 'ROOM AIR', type: 'Single Split Wall Mounted', tech: 'Non-Inverter', model: 'FTC15YV14 & RC15YV14', tkdn: '48,41%', bmp: '15,00%', total: '63,41%' },
  { sbu: 'ROOM AIR', type: 'Single Split Wall Mounted', tech: 'Non-Inverter', model: 'FTC25YV14 & RC25YV14', tkdn: '48,89%', bmp: '15,00%', total: '63,89%' },
  { sbu: 'PACKAGED', type: 'Ducted Unit', tech: 'Non-Inverter', model: 'FDN80HV14', tkdn: '28,27%', bmp: '15,00%', total: '43,27%' },
  { sbu: 'PACKAGED', type: 'Ducted Unit', tech: 'Non-Inverter', model: 'FDN100HV14', tkdn: '26,86%', bmp: '15,00%', total: '41,86%' },
  { sbu: 'PACKAGED', type: 'Ducted Outdoor Unit', tech: 'Non-Inverter', model: 'RN80HY14', tkdn: '28,43%', bmp: '15,00%', total: '43,43%' },
  { sbu: 'PACKAGED', type: 'Floor Standing', tech: 'Non-Inverter', model: 'FVGR8PV14 & RN80HY14A', tkdn: '16,62%', bmp: '15,00%', total: '31,62%' },
  { sbu: 'PACKAGED', type: 'Floor Standing', tech: 'Non-Inverter', model: 'FVGR10PV14 & RCN100HY14A', tkdn: '16,75%', bmp: '15,00%', total: '31,75%' },
]

export default function TKDN() {
  const [search, setSearch] = useState('')

  const filteredData = tkdnData.filter(item => 
    item.model.toLowerCase().includes(search.toLowerCase()) || 
    item.type.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <PageTransition>
      <PageMeta title="Informasi TKDN" canonical="/profile/tkdn" />

      {/* Modern Premium Hero Banner */}
      <div className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-daikin-blue-dark to-charcoal">
        <Suspense fallback={null}><AirParticles /></Suspense>
        
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-daikin-blue-light/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          
          <nav className="flex items-center space-x-2 text-white/70 mb-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/profile/about" className="hover:text-white transition-colors">Tentang Kami</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white drop-shadow-md">Informasi TKDN</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                Informasi Tingkat Komponen <br/><span className="text-daikin-blue-light font-light">Dalam Negeri (TKDN)</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed drop-shadow max-w-2xl">
                Dalam mendukung program pemerintah dan sebagai salah satu bentuk kontribusi untuk Indonesia, DAIKIN hadir dengan berbagai produk bersertifikasi TKDN.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2} className="hidden lg:block">
              {/* Floating image placeholder mimicking a modern UI card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-daikin-blue/20 to-transparent z-0" />
                <div className="aspect-[4/3] w-full bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 relative z-10">
                  <span className="text-white/50 tracking-widest text-sm uppercase font-medium">Factory Image Placeholder</span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>

      <section className="bg-white py-24 relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gray-50 rounded-full blur-3xl -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <FadeInUp>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-charcoal mb-6">Mendukung Kemandirian Ekonomi</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                <strong className="text-charcoal font-semibold">Tingkat Komponen Dalam Negeri (TKDN)</strong> adalah persentase besaran kandungan komponen lokal, baik bahan baku, tenaga kerja, maupun jasa, yang terkandung dalam produk barang atau jasa yang diproduksi di Indonesia.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Temukan berbagai pilihan produk yang dapat disesuaikan dengan kebutuhan ruang udara mulai dari hunian hingga fasilitas umum dan gedung yang telah tersertifikasi.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-8">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-charcoal">Daftar Produk Bersertifikat TKDN</h3>
                  <p className="text-sm text-gray-500 mt-1">Menampilkan {filteredData.length} produk terdaftar.</p>
                </div>
                
                <div className="relative max-w-sm w-full">
                  <input 
                    type="text" 
                    placeholder="Cari Tipe / Model..."
                    className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-daikin-blue focus:bg-white transition-all text-sm shadow-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-gray-100">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-gray-50/80">
                    <tr>
                      <th className="px-5 py-4 font-semibold text-charcoal border-b border-gray-100">SBU</th>
                      <th className="px-5 py-4 font-semibold text-charcoal border-b border-gray-100">Tipe</th>
                      <th className="px-5 py-4 font-semibold text-charcoal border-b border-gray-100">Tech</th>
                      <th className="px-5 py-4 font-semibold text-charcoal border-b border-gray-100">Model</th>
                      <th className="px-5 py-4 font-semibold text-charcoal border-b border-gray-100 text-right">TKDN</th>
                      <th className="px-5 py-4 font-semibold text-charcoal border-b border-gray-100 text-right">BMP</th>
                      <th className="px-5 py-4 font-semibold text-charcoal border-b border-gray-100 text-right">Total Nilai</th>
                      <th className="px-5 py-4 font-semibold text-charcoal border-b border-gray-100 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredData.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="px-6 py-12 text-center text-gray-400">Tidak ada data produk ditemukan.</td>
                      </tr>
                    ) : (
                      filteredData.map((item, i) => (
                        <tr key={i} className="hover:bg-daikin-blue-50/30 transition-colors group">
                          <td className="px-5 py-4 text-gray-600">{item.sbu}</td>
                          <td className="px-5 py-4 font-medium text-charcoal">{item.type}</td>
                          <td className="px-5 py-4 text-gray-500 text-xs">
                            <span className="bg-gray-100 px-2.5 py-1 rounded-md">{item.tech}</span>
                          </td>
                          <td className="px-5 py-4 font-semibold text-daikin-blue">{item.model}</td>
                          <td className="px-5 py-4 font-medium text-charcoal text-right">{item.tkdn}</td>
                          <td className="px-5 py-4 font-medium text-charcoal text-right">{item.bmp}</td>
                          <td className="px-5 py-4 font-bold text-emerald-600 text-right bg-emerald-50/30">{item.total}</td>
                          <td className="px-5 py-4 text-center">
                            <div className="flex items-center justify-center gap-2 transition-opacity">
                              <button className="p-1.5 rounded-lg bg-daikin-blue-50 text-daikin-blue hover:bg-daikin-blue hover:text-white transition-colors" title="Informasi Produk">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors" title="Download Sertifikat">
                                <FileDown className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              
            </div>
          </FadeInUp>

        </div>
      </section>
    </PageTransition>
  )
}
