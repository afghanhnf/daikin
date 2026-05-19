import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Button from '@/components/ui/Button'
import FadeInUp from '@/components/animations/FadeInUp'
import { calculateAC, type ACCalculatorInput, type CeilingHeight, type SunExposure, type RoomType } from '@/utils/acCalculator'

type Step = 1 | 2 | 3 | 4

const defaultInput: ACCalculatorInput = {
  length: 0,
  width: 0,
  ceilingHeight: 'standard',
  sunExposure: 'north',
  roomType: 'bedroom',
}

const roomTypeLabels: Record<RoomType, string> = {
  bedroom: 'Kamar Tidur', living_room: 'Ruang Tamu/Keluarga', kitchen: 'Dapur', office: 'Kantor', server_room: 'Server Room', store: 'Toko/Ruko',
}
const sunExposureLabels: Record<SunExposure, string> = {
  north: 'Utara (Tidak Langsung)', south: 'Selatan (Langsung Terik)', east: 'Timur (Pagi)', west: 'Barat (Sore)', shaded: 'Teduh / Tertutup',
}
const ceilingHeightLabels: Record<CeilingHeight, { label: string; sub: string }> = {
  low: { label: 'Rendah', sub: '~2.5m' }, standard: { label: 'Standar', sub: '~3m' }, high: { label: 'Tinggi', sub: '~3.5m' },
}

export default function ACCalculator() {
  const [step, setStep] = useState<Step>(1)
  const [input, setInput] = useState<ACCalculatorInput>(defaultInput)
  const [result, setResult] = useState<ReturnType<typeof calculateAC> | null>(null)

  function handleCalculate() {
    const res = calculateAC(input)
    setResult(res)
    setStep(4 as Step)
  }

  function reset() {
    setInput(defaultInput)
    setResult(null)
    setStep(1)
  }

  const canGoNext = step === 1 ? input.length > 0 && input.width > 0 : true

  return (
    <PageTransition>
      <PageMeta title="Kalkulator AC" canonical="/solutions/ac-calculator" />

      <div className="bg-gradient-to-br from-daikin-blue-dark to-daikin-blue pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Solusi', path: '/solutions' }, { label: 'Kalkulator AC' }]} className="text-white mb-6" />
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kalkulator AC</h1>
            <p className="text-white/80 text-xl max-w-2xl">Hitung kapasitas AC yang tepat untuk ruangan Anda — cepat, mudah, dan akurat.</p>
          </FadeInUp>
        </div>
      </div>

      <section className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-2 mb-10">
              {([1, 2, 3] as const).map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step === s ? 'bg-daikin-blue text-white scale-110 shadow-md' : step > s ? 'bg-green-500 text-white' : 'bg-soft-gray-2 text-gray-400'
                  }`}>
                    {step > s ? '✓' : s}
                  </div>
                  {s < 3 && <div className={`h-0.5 w-12 transition-all ${step > s ? 'bg-green-500' : 'bg-soft-gray-2'}`} />}
                </div>
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* Step 1: Dimensions */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="floating-card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-daikin-blue-50 flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-daikin-blue" />
                    </div>
                    <h2 className="text-xl font-bold text-charcoal">Dimensi Ruangan</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Panjang Ruangan (meter)</label>
                      <input
                        type="number"
                        min={1} max={50} step={0.1}
                        value={input.length || ''}
                        onChange={(e) => setInput({ ...input, length: parseFloat(e.target.value) || 0 })}
                        placeholder="mis: 4"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Lebar Ruangan (meter)</label>
                      <input
                        type="number"
                        min={1} max={50} step={0.1}
                        value={input.width || ''}
                        onChange={(e) => setInput({ ...input, width: parseFloat(e.target.value) || 0 })}
                        placeholder="mis: 3"
                        className="input-field"
                      />
                    </div>
                  </div>
                  {input.length > 0 && input.width > 0 && (
                    <div className="text-sm text-daikin-blue font-medium">
                      Luas ruangan: {(input.length * input.width).toFixed(1)} m²
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 2: Ceiling & Sun */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="floating-card p-8 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-charcoal mb-4">Tinggi Langit-Langit</h2>
                    <div className="grid grid-cols-3 gap-3">
                      {(['low', 'standard', 'high'] as CeilingHeight[]).map((h) => (
                        <button key={h} onClick={() => setInput({ ...input, ceilingHeight: h })}
                          className={`p-3 rounded-xl border-2 text-center transition-all ${input.ceilingHeight === h ? 'border-daikin-blue bg-daikin-blue-50' : 'border-soft-gray-2 hover:border-daikin-blue-light'}`}>
                          <div className="font-semibold text-sm text-charcoal">{ceilingHeightLabels[h].label}</div>
                          <div className="text-xs text-gray-500">{ceilingHeightLabels[h].sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-charcoal mb-4">Arah Paparan Matahari</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {(['north', 'south', 'east', 'west', 'shaded'] as SunExposure[]).map((s) => (
                        <button key={s} onClick={() => setInput({ ...input, sunExposure: s })}
                          className={`p-3 rounded-xl border-2 text-left text-sm transition-all ${input.sunExposure === s ? 'border-daikin-blue bg-daikin-blue-50' : 'border-soft-gray-2 hover:border-daikin-blue-light'}`}>
                          {sunExposureLabels[s]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Room type */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="floating-card p-8">
                  <h2 className="text-xl font-bold text-charcoal mb-6">Jenis Ruangan</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {(Object.keys(roomTypeLabels) as RoomType[]).map((rt) => (
                      <button key={rt} onClick={() => setInput({ ...input, roomType: rt })}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${input.roomType === rt ? 'border-daikin-blue bg-daikin-blue-50' : 'border-soft-gray-2 hover:border-daikin-blue-light'}`}>
                        <span className="text-sm font-medium text-charcoal">{roomTypeLabels[rt]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Result */}
            {step === 4 && result && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="floating-card p-8 text-center">
                  {/* Pichon-kun result */}
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

                  <h2 className="text-xl font-bold text-charcoal mb-2">Rekomendasi Daikin</h2>

                  <div className="my-6">
                    <div className="text-gray-500 text-sm mb-1">Kapasitas AC yang disarankan</div>
                    <div className="text-6xl font-bold text-daikin-blue mb-1">{result.pkLabel}</div>
                    <div className="text-gray-500 text-sm">{result.btu.toLocaleString('id-ID')} BTU/h</div>
                  </div>

                  <div className="bg-daikin-blue-50 rounded-xl p-4 mb-6 text-left">
                    <p className="text-sm text-daikin-blue font-medium mb-1">💬 Pichon bilang:</p>
                    <p className="text-sm text-charcoal">{result.recommendation}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                    <div className="bg-soft-gray rounded-xl p-3">
                      <div className="text-gray-500 text-xs mb-1">Ukuran Ruangan</div>
                      <div className="font-semibold">{input.length} × {input.width} m</div>
                    </div>
                    <div className="bg-soft-gray rounded-xl p-3">
                      <div className="text-gray-500 text-xs mb-1">Jenis Ruangan</div>
                      <div className="font-semibold">{roomTypeLabels[input.roomType]}</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`/products/residential`} className="btn-primary flex-1 justify-center inline-flex">
                      Lihat AC {result.pkLabel}
                    </a>
                    <button onClick={reset} className="btn-secondary flex-1 flex items-center justify-center gap-2">
                      <RotateCcw className="w-4 h-4" />
                      Hitung Ulang
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {step < 4 && (
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setStep((s) => Math.max(1, s - 1) as Step)}
                disabled={step === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Kembali
              </Button>
              {step < 3 ? (
                <Button
                  onClick={() => setStep((s) => (s + 1) as Step)}
                  disabled={!canGoNext}
                >
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
      </section>
    </PageTransition>
  )
}
