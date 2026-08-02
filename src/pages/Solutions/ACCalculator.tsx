import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calculator, ChevronRight, ChevronLeft, RotateCcw, Zap, Minus, Plus, 
  CheckCircle2, Info, Sparkles, ShieldCheck 
} from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Button from '@/components/ui/Button'
import FadeInUp from '@/components/animations/FadeInUp'
import AirParticles from '@/components/animations/AirParticles'
import {
  calculateAC,
  type ACCalculatorInput,
  type CeilingHeight,
  type SunExposure,
  type RoomType,
  type WindowSize,
  type RoomFloor,
} from '@/utils/acCalculator'
import {
  calculatePower,
  type Appliance,
  type ACModel,
  type PowerCalcInput,
  AC_MODEL_WATT,
  HOME_VA_OPTIONS,
  PRESET_APPLIANCES,
} from '@/utils/powerCalculator'

// ─── Dummy Product Recommendation Data Interface & Generator ─────────────────

interface DummyProductRecommendation {
  id: string
  name: string
  series: string
  modelNumber: string
  pk: string
  btu: string
  wattage: string
  tag: string
  badgeBg: string
  badgeText: string
  features: string[]
  description: string
  linkPath: string
}

function getDummyProductRecommendations(pk: number): DummyProductRecommendation[] {
  if (pk <= 0.5) {
    return [
      {
        id: 'ftkm15',
        name: 'Daikin FTKM Series',
        series: 'Alpha Inverter (Premium)',
        modelNumber: 'FTKM15SVM2',
        pk: '½ PK',
        btu: '5.100 BTU/h',
        wattage: '180W - 340W',
        tag: 'Pilihan Utama Inverter',
        badgeBg: 'bg-emerald-50 border-emerald-200',
        badgeText: 'text-emerald-700',
        features: ['Teknologi Streamer Air Purifier', 'Sensor Intelligent Eye', 'Sangat Hening 19 dB', 'Freon R-32 Ramah Lingkungan'],
        description: 'Puncak teknologi AC Inverter Daikin dengan penjernih udara Streamer bawaan untuk kenyamanan maksimal.',
        linkPath: '/products/residential/alpha-inverter',
      },
      {
        id: 'ftkq15',
        name: 'Daikin FTKQ Series',
        series: 'Flash Inverter (Super Hemat)',
        modelNumber: 'FTKQ15UVM4',
        pk: '½ PK',
        btu: '5.000 BTU/h',
        wattage: '220W - 380W',
        tag: 'Paling Populer',
        badgeBg: 'bg-sky-50 border-sky-200',
        badgeText: 'text-daikin-blue',
        features: ['Super PCB Tahan Lonjakan Listrik', 'Mode Low Watt 200W', 'Filter Anti-Bakteri Gin-ION', 'Mode Powerful Pendinginan Cepat'],
        description: 'Sangat hemat listrik dan tahan terhadap fluktuasi tegangan daya rumah tangga.',
        linkPath: '/products/residential/single-split',
      },
      {
        id: 'ftp15',
        name: 'Daikin Breeze Series',
        series: 'Standard AC (Buatan Indonesia)',
        modelNumber: 'FTP15AV16',
        pk: '½ PK',
        btu: '5.000 BTU/h',
        wattage: '390W',
        tag: 'Ekonomis & Tangguh',
        badgeBg: 'bg-amber-50 border-amber-200',
        badgeText: 'text-amber-700',
        features: ['Desain Ringkas & Kompak', 'Sirip Blue Fin Anti-Korosi', 'Garansi 3 Tahun Kompresor', 'Buatan Pabrik Indonesia'],
        description: 'Solusi pendingin ruangan yang andal, tahan lama, dan terjangkau untuk hunian Anda.',
        linkPath: '/products/residential/single-split',
      },
    ]
  } else if (pk <= 0.75) {
    return [
      {
        id: 'ftkm20',
        name: 'Daikin FTKM Series',
        series: 'Alpha Inverter ¾ PK',
        modelNumber: 'FTKM20SVM2',
        pk: '¾ PK',
        btu: '6.800 BTU/h',
        wattage: '240W - 440W',
        tag: 'Rekomendasi Terbaik',
        badgeBg: 'bg-emerald-50 border-emerald-200',
        badgeText: 'text-emerald-700',
        features: ['Streamer Technology', '3D Airflow Circulation', 'Intelligent Eye Sensor', 'Efisiensi Inverter Bintang 5'],
        description: 'Kinerja pendinginan sangat presisi dengan fitur penjernih udara alami Streamer.',
        linkPath: '/products/residential/alpha-inverter',
      },
      {
        id: 'ftkq20',
        name: 'Daikin FTKQ Series',
        series: 'Flash Inverter ¾ PK',
        modelNumber: 'FTKQ20UVM4',
        pk: '¾ PK',
        btu: '7.000 BTU/h',
        wattage: '310W - 510W',
        tag: 'Pilihan Inverter Hemat',
        badgeBg: 'bg-sky-50 border-sky-200',
        badgeText: 'text-daikin-blue',
        features: ['Mode Hemat Econo', 'Coanda Airflow System', 'Super PCB 130V-440V', 'Filter PM 2.5'],
        description: 'Distribusi udara sejuk menyeluruh tanpa menghembus langsung ke tubuh.',
        linkPath: '/products/residential/single-split',
      },
      {
        id: 'ftc20',
        name: 'Daikin Super Mini Split',
        series: 'Standard Thailand ¾ PK',
        modelNumber: 'FTC20NV14',
        pk: '¾ PK',
        btu: '7.100 BTU/h',
        wattage: '590W',
        tag: 'Tangguh & Dingin Cepat',
        badgeBg: 'bg-amber-50 border-amber-200',
        badgeText: 'text-amber-700',
        features: ['Dingin Lebih Cepat (Powerful)', 'Lapisan Anti Korosi Outdoor', 'Operasi Sangat Senyap', 'Refrigerant R-32 Ramah Lingkungan'],
        description: 'Pendinginan ekstra cepat dengan performa kompresor tangguh.',
        linkPath: '/products/residential/single-split',
      },
    ]
  } else if (pk <= 1.0) {
    return [
      {
        id: 'ftkm25',
        name: 'Daikin FTKM Series',
        series: 'Alpha Inverter 1 PK',
        modelNumber: 'FTKM25SVM2',
        pk: '1 PK',
        btu: '8.500 BTU/h',
        wattage: '250W - 520W',
        tag: 'Flagship Premium Inverter',
        badgeBg: 'bg-emerald-50 border-emerald-200',
        badgeText: 'text-emerald-700',
        features: ['Teknologi Streamer Air Purifying', 'Intelligent Eye 2-Area', 'Bisa Wi-Fi Smart Control', 'Penghematan Energi Maksimal'],
        description: 'Seri unggulan Daikin 1 PK dengan penghematan listrik tinggi dan penjernih udara.',
        linkPath: '/products/residential/alpha-inverter',
      },
      {
        id: 'ftkq25',
        name: 'Daikin FTKQ Series',
        series: 'Flash Inverter 1 PK',
        modelNumber: 'FTKQ25UVM4',
        pk: '1 PK',
        btu: '9.000 BTU/h',
        wattage: '350W - 680W',
        tag: 'Paling Laris 1 PK',
        badgeBg: 'bg-sky-50 border-sky-200',
        badgeText: 'text-daikin-blue',
        features: ['Aliran Udara Coanda', 'Mode Econo Hemat Listrik', 'Outdoor Anti-Tikus & Serangga', 'Garansi 3 Tahun Kompresor'],
        description: 'AC Inverter paling terfavorit untuk kamar utama dan ruang keluarga sedang.',
        linkPath: '/products/residential/single-split',
      },
      {
        id: 'ftv25',
        name: 'Daikin Nusantara Series',
        series: 'Standard AC 1 PK',
        modelNumber: 'FTV25BXV14',
        pk: '1 PK',
        btu: '9.000 BTU/h',
        wattage: '780W',
        tag: 'Produksi Dalam Negeri',
        badgeBg: 'bg-amber-50 border-amber-200',
        badgeText: 'text-amber-700',
        features: ['TKDN Buatan Indonesia', 'Gold Fin Evaporator', 'Turbo Cooling Mode', 'Diagnosis Mandiri Self-Diagnosis'],
        description: 'Kualitas standar Jepang buatan pabrik Daikin Indonesia.',
        linkPath: '/products/residential/single-split',
      },
    ]
  } else if (pk <= 1.5) {
    return [
      {
        id: 'ftkm35',
        name: 'Daikin FTKM Series',
        series: 'Alpha Inverter 1.5 PK',
        modelNumber: 'FTKM35SVM2',
        pk: '1.5 PK',
        btu: '11.900 BTU/h',
        wattage: '300W - 820W',
        tag: 'Performa Terbaik 1.5 PK',
        badgeBg: 'bg-emerald-50 border-emerald-200',
        badgeText: 'text-emerald-700',
        features: ['Pembersih Udara Streamer', '3D Airflow Hembusan Udara Nyaman', 'Mode Hening 19 dB', 'Kapasitas Pendinginan Presisi'],
        description: 'Kapasitas 1.5 PK ideal untuk ruang tidur utama besar atau ruang tamu keluarga.',
        linkPath: '/products/residential/alpha-inverter',
      },
      {
        id: 'ftkq35',
        name: 'Daikin FTKQ Series',
        series: 'Flash Inverter 1.5 PK',
        modelNumber: 'FTKQ35UVM4',
        pk: '1.5 PK',
        btu: '12.000 BTU/h',
        wattage: '410W - 960W',
        tag: 'Hemat & Nyaman',
        badgeBg: 'bg-sky-50 border-sky-200',
        badgeText: 'text-daikin-blue',
        features: ['Teknologi Inverter Pintar', 'Super PCB Tahan Tegangan Rendah', 'Filter Gin-ION Anti Odor', 'Fungsi Re-Auto Restart'],
        description: 'Daya pendinginan optimal dengan konsumsi energi yang tetap efisien.',
        linkPath: '/products/residential/single-split',
      },
      {
        id: 'multi-s-15',
        name: 'Daikin Multi-S Series',
        series: 'Multi Split Multi-S 3-Connection',
        modelNumber: 'MKC35RVM4',
        pk: '1.5 PK Total',
        btu: '12.000 BTU/h',
        wattage: '380W - 800W',
        tag: 'Hemat Ruang Outdoor',
        badgeBg: 'bg-purple-50 border-purple-200',
        badgeText: 'text-purple-700',
        features: ['1 Outdoor untuk 2-3 Indoor', 'Hemat Tempat Balkon/Dinding', 'Kontrol Daya Bebas Khawatir', 'Inverter Hemat Listrik'],
        description: 'Solusi ideal jika Anda ingin menghubungkan beberapa ruangan hanya dengan 1 unit outdoor.',
        linkPath: '/products/residential/multi-s-3-connection',
      },
    ]
  } else {
    return [
      {
        id: 'ftkm50',
        name: 'Daikin FTKM Series',
        series: 'Alpha Inverter 2 PK',
        modelNumber: 'FTKM50SVM2',
        pk: '2 PK',
        btu: '17.700 BTU/h',
        wattage: '450W - 1.280W',
        tag: 'Daya Dingin Maksimal',
        badgeBg: 'bg-emerald-50 border-emerald-200',
        badgeText: 'text-emerald-700',
        features: ['Streamer Technology Air Purifier', 'Intelligent Eye Sensor', 'Daya Jangkauan Airflow Luas', 'Premium Inverter Efficiency'],
        description: 'Pendinginan kuat untuk ruangan besar tanpa menimbulkan suara bising.',
        linkPath: '/products/residential/alpha-inverter',
      },
      {
        id: 'ftkq50',
        name: 'Daikin FTKQ Series',
        series: 'Flash Inverter 2 PK',
        modelNumber: 'FTKQ50UVM4',
        pk: '2 PK',
        btu: '18.000 BTU/h',
        wattage: '520W - 1.520W',
        tag: 'Kapasitas Besar Inverter',
        badgeBg: 'bg-sky-50 border-sky-200',
        badgeText: 'text-daikin-blue',
        features: ['Hembusan Udara Jarak Jauh', 'Super PCB Protection', 'Refrigerant R-32 Ramah Lingkungan', 'Mode Powerful Turbo'],
        description: 'Efektif untuk area terbuka seperti hall, ruang tamu besar, dan kantor.',
        linkPath: '/products/residential/single-split',
      },
      {
        id: 'vrv-home',
        name: 'Daikin VRV Home Series',
        series: 'AC Central System Hunian',
        modelNumber: 'VRV-H Series',
        pk: 'Central (2 PK - 10 PK+)',
        btu: '24.000+ BTU/h',
        wattage: 'Sesuai Beban Inverter',
        tag: 'Sistem AC Central Mewah',
        badgeBg: 'bg-indigo-50 border-indigo-200',
        badgeText: 'text-indigo-700',
        features: ['Ducting & Cassette Invisible Integration', '1 Outdoor Sambung Banyak Indoor', 'Kontrol Suhu Presisi Per Ruang', 'Estetika Interior Mewah'],
        description: 'Sistem AC Central terbaik untuk hunian mewah, rumah tinggal besar, dan villa.',
        linkPath: '/products/residential/vrv-home',
      },
    ]
  }
}

// ─── PK Calculator Component ──────────────────────────────────────────

type PKStep = 1 | 2 | 3 | 4 | 5

const defaultPKInput: ACCalculatorInput = {
  length: 0,
  width: 0,
  ceilingHeight: 'standard',
  sunExposure: 'north',
  roomType: 'bedroom',
  windowSize: 'medium',
  roomFloor: 'middle',
  occupants: 1,
}

const roomTypeLabels: Record<RoomType, string> = {
  bedroom: 'Kamar Tidur',
  living_room: 'Ruang Tamu/Keluarga',
  kitchen: 'Dapur',
  office: 'Kantor',
  server_room: 'Server Room',
  store: 'Toko/Ruko',
}
const sunExposureLabels: Record<SunExposure, string> = {
  north: 'Utara (Tidak Langsung)',
  south: 'Selatan (Langsung Terik)',
  east: 'Timur (Matahari Pagi)',
  west: 'Barat (Matahari Sore Terik)',
  shaded: 'Teduh / Tertutup',
}
const ceilingHeightLabels: Record<CeilingHeight, { label: string; sub: string }> = {
  low: { label: 'Rendah', sub: '~2.5m' },
  standard: { label: 'Standar', sub: '~3m' },
  high: { label: 'Tinggi', sub: '~3.5m' },
}
const windowSizeLabels: Record<WindowSize, { label: string; sub: string }> = {
  small:  { label: 'Kecil',  sub: '< 1 m²' },
  medium: { label: 'Sedang', sub: '1–2 m²' },
  large:  { label: 'Besar',  sub: '> 2 m²' },
}
const roomFloorLabels: Record<RoomFloor, { label: string; sub: string }> = {
  ground: { label: 'Lantai Dasar', sub: 'Tidak ada atap langsung' },
  middle: { label: 'Lantai Tengah', sub: 'Ada lantai di atas' },
  top:    { label: 'Lantai Atas',   sub: 'Langsung di bawah atap' },
}

function PKCalculator() {
  const [step, setStep] = useState<PKStep>(1)
  const [input, setInput] = useState<ACCalculatorInput>(defaultPKInput)
  const [result, setResult] = useState<ReturnType<typeof calculateAC> | null>(null)

  function handleCalculate() {
    const res = calculateAC(input)
    setResult(res)
    setStep(5)
    // Async tracking placeholder
    void fetch('/api/calculator-track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'pk', ...res }),
    }).catch(() => undefined)
  }

  function reset() {
    setInput(defaultPKInput)
    setResult(null)
    setStep(1)
  }

  const canGoNext = step === 1 ? input.length > 0 && input.width > 0 : true

  return (
    <div className={step === 5 ? "max-w-4xl lg:max-w-5xl mx-auto space-y-10" : "max-w-2xl mx-auto"}>
      {step < 5 && (
        <div className="flex items-center justify-center gap-2 mb-10">
          {([1, 2, 3, 4] as const).map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                step === s ? 'bg-daikin-blue text-white scale-110 shadow-md' : step > s ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-400'
              }`}>
                {step > s ? '✓' : s}
              </div>
              {s < 4 && <div className={`h-0.5 w-10 transition-all ${step > s ? 'bg-emerald-500' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 1: Dimensions */}
        {step === 1 && (
          <motion.div key="pk1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <div className="floating-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-daikin-blue/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-daikin-blue" />
                </div>
                <h2 className="text-xl font-bold text-charcoal">Dimensi Ruangan</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Panjang (meter)</label>
                  <input
                    type="number" min={1} max={50} step={0.1}
                    value={input.length || ''}
                    onChange={(e) => setInput({ ...input, length: parseFloat(e.target.value) || 0 })}
                    placeholder="mis: 4"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Lebar (meter)</label>
                  <input
                    type="number" min={1} max={50} step={0.1}
                    value={input.width || ''}
                    onChange={(e) => setInput({ ...input, width: parseFloat(e.target.value) || 0 })}
                    placeholder="mis: 3"
                    className="input-field"
                  />
                </div>
              </div>
              {input.length > 0 && input.width > 0 && (
                <p className="text-sm text-daikin-blue font-medium bg-sky-50 px-4 py-2 rounded-lg border border-sky-100">
                  Luas ruangan: {(input.length * input.width).toFixed(1)} m²
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Step 2: Window, Floor, Ceiling */}
        {step === 2 && (
          <motion.div key="pk2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <div className="floating-card p-8 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-charcoal mb-3">Tinggi Langit-Langit</h2>
                <div className="grid grid-cols-3 gap-3">
                  {(['low', 'standard', 'high'] as CeilingHeight[]).map((h) => (
                    <button key={h} onClick={() => setInput({ ...input, ceilingHeight: h })}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${input.ceilingHeight === h ? 'border-daikin-blue bg-sky-50/60' : 'border-gray-200 hover:border-daikin-blue/40'}`}>
                      <div className="font-semibold text-sm text-charcoal">{ceilingHeightLabels[h].label}</div>
                      <div className="text-xs text-gray-500">{ceilingHeightLabels[h].sub}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-charcoal mb-3">Ukuran Jendela Kaca</h2>
                <div className="grid grid-cols-3 gap-3">
                  {(['small', 'medium', 'large'] as WindowSize[]).map((w) => (
                    <button key={w} onClick={() => setInput({ ...input, windowSize: w })}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${input.windowSize === w ? 'border-daikin-blue bg-sky-50/60' : 'border-gray-200 hover:border-daikin-blue/40'}`}>
                      <div className="font-semibold text-sm text-charcoal">{windowSizeLabels[w].label}</div>
                      <div className="text-xs text-gray-500">{windowSizeLabels[w].sub}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-charcoal mb-3">Posisi Lantai Ruangan</h2>
                <div className="grid grid-cols-1 gap-2">
                  {(['ground', 'middle', 'top'] as RoomFloor[]).map((f) => (
                    <button key={f} onClick={() => setInput({ ...input, roomFloor: f })}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${input.roomFloor === f ? 'border-daikin-blue bg-sky-50/60' : 'border-gray-200 hover:border-daikin-blue/40'}`}>
                      <span className="font-semibold text-sm text-charcoal">{roomFloorLabels[f].label}</span>
                      <span className="text-xs text-gray-500 ml-2">- {roomFloorLabels[f].sub}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Sun exposure + occupants */}
        {step === 3 && (
          <motion.div key="pk3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <div className="floating-card p-8 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-charcoal mb-3">Arah Paparan Sinar Matahari</h2>
                <div className="grid grid-cols-2 gap-3">
                  {(['north', 'south', 'east', 'west', 'shaded'] as SunExposure[]).map((s) => (
                    <button key={s} onClick={() => setInput({ ...input, sunExposure: s })}
                      className={`p-3 rounded-xl border-2 text-left text-sm transition-all ${input.sunExposure === s ? 'border-daikin-blue bg-sky-50/60' : 'border-gray-200 hover:border-daikin-blue/40'}`}>
                      {sunExposureLabels[s]}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-charcoal mb-3">Jumlah Penghuni Biasanya</h2>
                <div className="flex items-center gap-4">
                  <button onClick={() => setInput({ ...input, occupants: Math.max(1, input.occupants - 1) })}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-daikin-blue transition-colors">
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <div className="text-3xl font-bold text-daikin-blue w-12 text-center">{input.occupants}</div>
                  <button onClick={() => setInput({ ...input, occupants: Math.min(20, input.occupants + 1) })}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-daikin-blue transition-colors">
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="text-gray-500 text-sm">orang</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Room type */}
        {step === 4 && (
          <motion.div key="pk4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <div className="floating-card p-8">
              <h2 className="text-xl font-bold text-charcoal mb-6">Jenis Ruangan</h2>
              <div className="grid grid-cols-2 gap-3">
                {(Object.keys(roomTypeLabels) as RoomType[]).map((rt) => (
                  <button key={rt} onClick={() => setInput({ ...input, roomType: rt })}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${input.roomType === rt ? 'border-daikin-blue bg-sky-50/60' : 'border-gray-200 hover:border-daikin-blue/40'}`}>
                    <span className="text-sm font-medium text-charcoal">{roomTypeLabels[rt]}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 5: Result & Dummy Product Recommendations */}
        {step === 5 && result && (
          <motion.div key="pk-result" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-10">
            {/* Summary Box */}
            <div className="floating-card p-8 text-center max-w-3xl mx-auto border-t-4 border-t-daikin-blue">
              <motion.div
                initial={{ scale: 0, rotate: -15, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="mb-6"
              >
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}>
                  <img src="/images/mascot/icon-daikin-4.png" alt="Pichon-kun" className="h-24 w-auto mx-auto" loading="lazy" />
                </motion.div>
              </motion.div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sky-50 text-daikin-blue text-xs font-bold rounded-full border border-sky-100 mb-3">
                Hasil Perhitungan Akurat
              </div>
              <h2 className="text-2xl font-bold text-charcoal mb-2">Rekomendasi Kapasitas Daikin</h2>

              <div className="my-6">
                <div className="text-gray-500 text-sm mb-1">Kapasitas AC yang Disarankan:</div>
                <div className="text-5xl md:text-6xl font-black text-daikin-blue mb-1">{result.pkLabel}</div>
                <div className="text-gray-600 font-semibold text-base">~{result.btu.toLocaleString('id-ID')} BTU/h</div>
              </div>

              <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-4 mb-6 text-left">
                <p className="text-xs text-daikin-blue font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span>💬 Pichon bilang:</span>
                </p>
                <p className="text-sm text-charcoal leading-relaxed">{result.recommendation}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-6">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <div className="text-gray-400 font-semibold uppercase text-[10px] mb-0.5">Luas Ruangan</div>
                  <div className="font-bold text-charcoal text-sm">{result.area} m² ({input.length}m × {input.width}m)</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <div className="text-gray-400 font-semibold uppercase text-[10px] mb-0.5">Volume Ruang</div>
                  <div className="font-bold text-charcoal text-sm">{result.volume} m³</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <div className="text-gray-400 font-semibold uppercase text-[10px] mb-0.5">Jenis Ruangan</div>
                  <div className="font-bold text-charcoal text-sm">{roomTypeLabels[input.roomType]}</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <div className="text-gray-400 font-semibold uppercase text-[10px] mb-0.5">Jumlah Penghuni</div>
                  <div className="font-bold text-charcoal text-sm">{input.occupants} orang</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button onClick={reset} className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 px-6">
                  <RotateCcw className="w-4 h-4" />
                  Hitung Ruangan Lain
                </button>
                <Link to="/products/residential" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-6">
                  Lihat Semua Katalog AC
                </Link>
              </div>
            </div>

            {/* Dummy Product Recommendation Cards Section */}
            <div className="floating-card p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-daikin-blue" />
                    <span className="text-xs font-bold uppercase tracking-wider text-daikin-blue">Simulasi Rekomendasi Produk</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">
                    Pilihan AC Daikin Terbaik untuk Kapasitas <span className="text-daikin-blue">{result.pkLabel}</span>
                  </h3>
                </div>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200/80 w-fit shrink-0">
                  *Simulasi Data Dummy
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getDummyProductRecommendations(result.pk).map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:shadow-md hover:border-daikin-blue/30 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Header & Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${product.badgeBg} ${product.badgeText}`}>
                          {product.tag}
                        </span>
                        <span className="text-xs font-bold text-slate-500">{product.pk}</span>
                      </div>

                      {/* Product Name */}
                      <h4 className="font-bold text-base text-charcoal group-hover:text-daikin-blue transition-colors">
                        {product.name}
                      </h4>
                      <div className="text-xs text-gray-500 font-medium mb-3">
                        {product.series} · <span className="font-mono text-gray-400">{product.modelNumber}</span>
                      </div>

                      <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Spec Bar */}
                      <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl text-xs mb-4 border border-slate-100">
                        <div className="flex-1 text-center border-r border-slate-200">
                          <span className="block text-[10px] text-gray-400 uppercase font-semibold">Kapasitas</span>
                          <span className="font-bold text-charcoal">{product.btu}</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="block text-[10px] text-gray-400 uppercase font-semibold">Daya Listrik</span>
                          <span className="font-bold text-daikin-blue">{product.wattage}</span>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-2 mb-5">
                        {product.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card CTA */}
                    <Link
                      to={product.linkPath}
                      className="w-full py-2.5 px-4 bg-daikin-blue/10 text-daikin-blue font-bold text-xs rounded-xl hover:bg-daikin-blue hover:text-white transition-all flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>Lihat Detail Produk</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Dummy Data Notice Footer */}
              <div className="mt-6 p-4 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-500 flex items-start sm:items-center gap-2.5">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  <strong>Informasi Katalog:</strong> Data rekomendasi tipe produk di atas merupakan contoh data dummy simulasi UI. Integrasi katalog produk dinamis dari database akan segera terhubung secara otomatis.
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {step < 5 && (
        <div className="flex items-center justify-between mt-6">
          <Button variant="outline" onClick={() => setStep((s) => Math.max(1, s - 1) as PKStep)} disabled={step === 1}>
            <ChevronLeft className="w-4 h-4" />
            Kembali
          </Button>
          {step < 4 ? (
            <Button onClick={() => setStep((s) => (s + 1) as PKStep)} disabled={!canGoNext}>
              Lanjut <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={handleCalculate}>
              Hitung Sekarang <Calculator className="w-4 h-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Daya Calculator ──────────────────────────────────────────────────

const STATUS_CONFIG = {
  green:  { label: 'Aman',        color: 'text-emerald-700', bg: 'bg-emerald-50', bar: 'bg-emerald-500', border: 'border-emerald-200' },
  yellow: { label: 'Perlu Hati-hati', color: 'text-amber-700', bg: 'bg-amber-50', bar: 'bg-amber-400', border: 'border-amber-200' },
  red:    { label: 'Tidak Cukup', color: 'text-red-700', bg: 'bg-red-50', bar: 'bg-red-500', border: 'border-red-200' },
}

function DayaCalculator() {
  const [homeVA, setHomeVA] = useState(2200)
  const [appliances, setAppliances] = useState<Appliance[]>(
    PRESET_APPLIANCES.map((a) => ({ ...a, enabled: ['kulkas', 'tv', 'lampu'].includes(a.id) }))
  )
  const [newACModel, setNewACModel] = useState<ACModel>('inverter')
  const [existingACWatt, setExistingACWatt] = useState(0)

  const powerInput: PowerCalcInput = { homeCapacityVA: homeVA, appliances, newACModel, existingACWatt }
  const result = calculatePower(powerInput)
  const cfg = STATUS_CONFIG[result.status]

  const barPercent = Math.min(100, Math.max(0, (result.totalLoad / result.safeCapacity) * 100))

  useEffect(() => {
    if (result.status !== 'green') {
      void fetch('/api/calculator-track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'daya', status: result.status, va: homeVA }),
      }).catch(() => undefined)
    }
  }, [result.status, homeVA])

  function toggleAppliance(id: string) {
    setAppliances((prev) => prev.map((a) => a.id === id ? { ...a, enabled: !a.enabled } : a))
  }
  function changeQty(id: string, delta: number) {
    setAppliances((prev) => prev.map((a) => a.id === id ? { ...a, qty: Math.max(1, a.qty + delta) } : a))
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">

      {/* Live result card */}
      <FadeInUp>
        <div className={`rounded-2xl border-2 ${cfg.border} ${cfg.bg} p-6`}>
          <div className="flex items-center justify-between mb-3">
            <span className={`font-bold text-lg ${cfg.color}`}>Status Daya Listrik: {cfg.label}</span>
            <span className={`text-2xl font-bold ${cfg.color}`}>
              {result.remaining >= 0 ? `+${result.remaining}W` : `${result.remaining}W`}
            </span>
          </div>
          {/* Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-3">
            <motion.div
              className={`h-3 rounded-full ${cfg.bar}`}
              initial={{ width: 0 }}
              animate={{ width: `${barPercent}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Beban Total: {result.totalLoad}W</span>
            <span>Kapasitas Aman (80%): {result.safeCapacity}W ({homeVA} VA)</span>
          </div>
          <p className={`text-sm mt-3 font-medium ${cfg.color}`}>{result.suggestion}</p>
        </div>
      </FadeInUp>

      {/* Step 1: Home capacity */}
      <div className="floating-card p-6">
        <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2">
          <Zap className="w-4 h-4 text-daikin-blue" /> Kapasitas Daya Listrik Rumah (PLN)
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {HOME_VA_OPTIONS.map((va) => (
            <button key={va} onClick={() => setHomeVA(va)}
              className={`py-2 px-3 rounded-xl border-2 text-sm font-semibold transition-all ${homeVA === va ? 'border-daikin-blue bg-sky-50 text-daikin-blue' : 'border-gray-200 text-gray-600 hover:border-daikin-blue/40'}`}>
              {va.toLocaleString('id-ID')} VA
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Appliances */}
      <div className="floating-card p-6">
        <h3 className="font-bold text-charcoal mb-4">Peralatan Elektronik Menyala Beramai-ramai</h3>
        <div className="space-y-2">
          {appliances.map((a) => (
            <div key={a.id} className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${a.enabled ? 'border-daikin-blue/30 bg-sky-50/40' : 'border-gray-100 bg-gray-50'}`}>
              <input type="checkbox" checked={a.enabled} onChange={() => toggleAppliance(a.id)}
                className="w-4 h-4 accent-daikin-blue flex-shrink-0 cursor-pointer" />
              <span className={`text-sm flex-1 ${a.enabled ? 'text-charcoal font-medium' : 'text-gray-400'}`}>{a.name}</span>
              <span className="text-xs text-gray-400 w-14 text-right">{a.watt}W</span>
              {a.enabled && (
                <div className="flex items-center gap-1">
                  <button onClick={() => changeQty(a.id, -1)} className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-daikin-blue">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-bold w-5 text-center">{a.qty}</span>
                  <button onClick={() => changeQty(a.id, +1)} className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-daikin-blue">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 3: New AC model */}
      <div className="floating-card p-6">
        <h3 className="font-bold text-charcoal mb-4">Model AC yang Ingin Dibeli</h3>
        <div className="grid grid-cols-1 gap-3">
          {(Object.entries(AC_MODEL_WATT) as [ACModel, typeof AC_MODEL_WATT[ACModel]][]).map(([key, info]) => (
            <button key={key} onClick={() => setNewACModel(key)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${newACModel === key ? 'border-daikin-blue bg-sky-50/60' : 'border-gray-200 hover:border-daikin-blue/40'}`}>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-charcoal">{info.label}</span>
                <span className={`text-sm font-bold ${newACModel === key ? 'text-daikin-blue' : 'text-gray-400'}`}>{info.watt}W</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">{info.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Step 4: Existing AC */}
      <div className="floating-card p-6">
        <h3 className="font-bold text-charcoal mb-4">AC yang Sudah Ada (jika menyala bersamaan)</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Tidak Ada',  watt: 0   },
            { label: '1 AC Lama',  watt: 400 },
            { label: '1 AC Inverter', watt: 250 },
          ].map((opt) => (
            <button key={opt.label} onClick={() => setExistingACWatt(opt.watt)}
              className={`p-3 rounded-xl border-2 text-center transition-all ${existingACWatt === opt.watt ? 'border-daikin-blue bg-sky-50/60' : 'border-gray-200 hover:border-daikin-blue/40'}`}>
              <div className="text-sm font-semibold text-charcoal">{opt.label}</div>
              {opt.watt > 0 && <div className="text-xs text-gray-500">~{opt.watt}W</div>}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

// ─── Inverter Calculator ──────────────────────────────────────────────

type PKOption = 0.5 | 0.75 | 1 | 1.5 | 2 | 2.5

const INVERTER_AC_DATA: Record<PKOption, { nonInverter: number; inverter: number; label: string }> = {
  0.5:  { nonInverter: 420,  inverter: 340,  label: '1/2 PK' },
  0.75: { nonInverter: 620,  inverter: 500,  label: '3/4 PK' },
  1:    { nonInverter: 820,  inverter: 660,  label: '1 PK' },
  1.5:  { nonInverter: 1200, inverter: 960,  label: '1.5 PK' },
  2:    { nonInverter: 1600, inverter: 1290, label: '2 PK' },
  2.5:  { nonInverter: 2000, inverter: 1620, label: '2.5 PK' },
}

const PLN_TARIFFS = [
  { label: 'R-1 / 450 VA',      value: 415  },
  { label: 'R-1 / 900 VA',      value: 1352 },
  { label: 'R-1 / 1300–2200 VA', value: 1444 },
  { label: 'R-2 / 3500–5500 VA', value: 1699 },
]

function InverterCalculator() {
  const [pk, setPk]             = useState<PKOption>(1)
  const [hours, setHours]       = useState(8)
  const [tariffIdx, setTariffIdx] = useState(2)

  const tariff   = PLN_TARIFFS[tariffIdx].value
  const data     = INVERTER_AC_DATA[pk]
  const days     = 30

  // Inverter on average runs at ~65% of rated watt (compressor modulates)
  const inverterAvgW    = Math.round(data.inverter * 0.65)
  const nonInverterAvgW = data.nonInverter

  const monthlyKWhInv    = (inverterAvgW    * hours * days) / 1000
  const monthlyKWhNonInv = (nonInverterAvgW * hours * days) / 1000

  const monthlyCostInv    = Math.round(monthlyKWhInv    * tariff)
  const monthlyCostNonInv = Math.round(monthlyKWhNonInv * tariff)
  const monthlySavings    = monthlyCostNonInv - monthlyCostInv
  const yearlySavings     = monthlySavings * 12
  const savingPct         = Math.round((monthlySavings / monthlyCostNonInv) * 100)

  // CO2: Indonesia grid emission factor ~0.85 kg/kWh
  const yearlyCO2 = (((monthlyKWhNonInv - monthlyKWhInv) * 12) * 0.85).toFixed(1)

  const fmt = (n: number) => n.toLocaleString('id-ID')

  return (
    <div className="max-w-2xl mx-auto space-y-6">

      {/* Result card - live */}
      <div className="rounded-2xl bg-gradient-to-br from-daikin-blue-dark to-daikin-blue p-6 text-white shadow-lg">
        <p className="text-sm font-medium text-white/70 mb-1">Estimasi Penghematan Tagihan Listrik Per Bulan</p>
        <div className="text-4xl md:text-5xl font-bold mb-1">Rp {fmt(monthlySavings)}</div>
        <p className="text-white/80 text-sm">
          Hemat <span className="font-bold text-white">{savingPct}%</span> dibanding AC non-inverter ·{' '}
          <span className="font-bold text-white">Rp {fmt(yearlySavings)}</span>/tahun
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm bg-white/10 rounded-xl px-4 py-2.5 w-fit border border-white/10">
          <Zap className="w-4 h-4 text-amber-300" />
          <span className="text-white/90">Jejak Emisi CO₂ berkurang: <span className="font-bold text-white">{yearlyCO2} kg/tahun</span></span>
        </div>
      </div>

      {/* PK selector */}
      <div className="floating-card p-6">
        <h3 className="font-bold text-charcoal mb-4">Kapasitas AC yang Diinginkan</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {(Object.keys(INVERTER_AC_DATA) as unknown as PKOption[]).map((p) => (
            <button
              key={p}
              onClick={() => setPk(p)}
              className={`py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                pk === p ? 'border-daikin-blue bg-sky-50 text-daikin-blue' : 'border-gray-200 text-gray-600 hover:border-daikin-blue/40'
              }`}
            >
              {INVERTER_AC_DATA[p].label}
            </button>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="text-gray-500 text-xs mb-1">Non-Inverter (Beban Maks Konstan)</div>
            <div className="font-bold text-charcoal">{fmt(nonInverterAvgW)} W</div>
          </div>
          <div className="bg-sky-50 rounded-xl p-3">
            <div className="text-gray-500 text-xs mb-1">Inverter Daikin (Rata-rata Aktual)</div>
            <div className="font-bold text-daikin-blue">{fmt(inverterAvgW)} W</div>
          </div>
        </div>
      </div>

      {/* Usage hours */}
      <div className="floating-card p-6">
        <h3 className="font-bold text-charcoal mb-4">Jam Pemakaian AC Per Hari</h3>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setHours((h) => Math.max(1, h - 1))}
            className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-daikin-blue transition-colors"
          >
            <Minus className="w-4 h-4 text-gray-600" />
          </button>
          <div className="text-4xl font-bold text-daikin-blue w-16 text-center">{hours}</div>
          <button
            onClick={() => setHours((h) => Math.min(24, h + 1))}
            className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-daikin-blue transition-colors"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-gray-500 text-sm">jam/hari</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">{hours * days} jam/bulan · {(monthlyKWhInv).toFixed(1)} kWh (inverter) vs {(monthlyKWhNonInv).toFixed(1)} kWh (non-inverter)</p>
      </div>

      {/* Tariff selector */}
      <div className="floating-card p-6">
        <h3 className="font-bold text-charcoal mb-4">Golongan Tarif Listrik PLN</h3>
        <div className="grid grid-cols-2 gap-2">
          {PLN_TARIFFS.map((t, i) => (
            <button
              key={i}
              onClick={() => setTariffIdx(i)}
              className={`p-3 rounded-xl border-2 text-left transition-all ${
                tariffIdx === i ? 'border-daikin-blue bg-sky-50' : 'border-gray-200 hover:border-daikin-blue/40'
              }`}
            >
              <div className={`text-xs font-semibold mb-0.5 ${tariffIdx === i ? 'text-daikin-blue' : 'text-gray-600'}`}>{t.label}</div>
              <div className="text-sm font-bold text-charcoal">Rp {fmt(t.value)}/kWh</div>
            </button>
          ))}
        </div>
      </div>

      {/* Monthly comparison */}
      <div className="floating-card p-6">
        <h3 className="font-bold text-charcoal mb-4">Perbandingan Biaya Operasional Bulanan</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">AC Non-Inverter Standard</span>
              <span className="font-semibold text-charcoal">Rp {fmt(monthlyCostNonInv)}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div className="h-3 rounded-full bg-gray-400" style={{ width: '100%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-daikin-blue font-bold">AC Inverter Daikin</span>
              <span className="font-semibold text-daikin-blue">Rp {fmt(monthlyCostInv)}</span>
            </div>
            <div className="w-full bg-sky-100 rounded-full h-3">
              <motion.div
                className="h-3 rounded-full bg-daikin-blue"
                animate={{ width: `${100 - savingPct}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
          <p className="text-sm text-emerald-800 leading-relaxed">
            Dengan menggunakan <span className="font-bold">AC Inverter Daikin {INVERTER_AC_DATA[pk].label}</span>, Anda berpotensi menghemat pengeluaran tagihan listrik hingga{' '}
            <span className="font-bold text-emerald-700">Rp {fmt(monthlySavings)}/bulan</span> atau setara{' '}
            <span className="font-bold text-emerald-700">Rp {fmt(yearlySavings)}/tahun</span>.
          </p>
        </div>
      </div>

    </div>
  )
}

// ─── Main Page Wrapper Component ──────────────────────────────────────

type Tab = 'pk' | 'daya' | 'inverter'

export default function ACCalculator() {
  const [activeTab, setActiveTab] = useState<Tab>('pk')

  return (
    <PageTransition>
      <PageMeta title="Kalkulator AC Daikin - Hitung Kapasitas PK & Listrik" canonical="/solutions/ac-calculator" />

      <div className="relative overflow-hidden bg-gradient-to-br from-daikin-blue-dark via-[#004f7a] to-daikin-blue text-white pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-24">
        <AirParticles color="white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <Breadcrumb items={[{ label: 'Beranda', path: '/' }, { label: 'Solusi', path: '/solutions' }, { label: 'Kalkulator AC Pintar' }]} className="text-white mb-6" />
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold mb-4 text-cyan-300">
              <span>Simulasi & Hitung Akurat</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Kalkulator AC Pintar Daikin
            </h1>
            <p className="text-blue-100 text-base sm:text-xl max-w-2xl font-light leading-relaxed">
              Hitung kebutuhan kapasitas PK, kelayakan daya listrik rumah, dan simulasi penghematan tagihan listrik Anda dengan akurat.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Sticky Tab Selector */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex gap-3 overflow-x-auto py-3 scrollbar-none">
            {[
              { key: 'pk',       label: '1. Hitung Kapasitas PK',    desc: 'Kebutuhan luas ruangan' },
              { key: 'daya',     label: '2. Cek Daya Listrik',       desc: 'Kelayakan daya rumah' },
              { key: 'inverter', label: '3. Simulasi Hemat Energi',  desc: 'Estimasi hemat tagihan' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as Tab)}
                className={`flex flex-col items-start px-5 py-3 rounded-2xl border text-left transition-all shrink-0 ${
                  activeTab === tab.key
                    ? 'border-daikin-blue bg-daikin-blue-50/80 text-daikin-blue font-bold shadow-sm ring-2 ring-daikin-blue/20'
                    : 'border-gray-200 text-gray-500 hover:text-charcoal hover:bg-gray-50'
                }`}
              >
                <span className="font-bold text-sm">{tab.label}</span>
                <span className="text-xs opacity-70 mt-0.5">{tab.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-container">
        <AnimatePresence mode="wait">
          {activeTab === 'pk' ? (
            <motion.div key="tab-pk" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <PKCalculator />
            </motion.div>
          ) : activeTab === 'daya' ? (
            <motion.div key="tab-daya" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <DayaCalculator />
            </motion.div>
          ) : (
            <motion.div key="tab-inverter" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <InverterCalculator />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  )
}
