export type RoomType = 'bedroom' | 'living_room' | 'kitchen' | 'office' | 'server_room' | 'store'
export type SunExposure = 'north' | 'south' | 'east' | 'west' | 'shaded'
export type CeilingHeight = 'low' | 'standard' | 'high'
export type WindowSize = 'small' | 'medium' | 'large'
export type RoomFloor = 'ground' | 'middle' | 'top'

export interface ACCalculatorInput {
  length: number
  width: number
  ceilingHeight: CeilingHeight
  sunExposure: SunExposure
  roomType: RoomType
  windowSize: WindowSize
  roomFloor: RoomFloor
  occupants: number
}

export interface ACCalculatorResult {
  btu: number
  pk: number
  pkLabel: string
  recommendation: string
  area: number
  volume: number
}

const CEILING_HEIGHT_METERS: Record<CeilingHeight, number> = {
  low: 2.5,
  standard: 3.0,
  high: 3.5,
}

// Factor pengali panas berdasarkan orientasi sinar matahari (Tropis Indonesia)
const SUN_EXPOSURE_FACTOR: Record<SunExposure, number> = {
  north: 1.0,  // Utara (Tidak terpapar langsung)
  shaded: 1.0, // Teduh / Terlindung
  east: 1.05,  // Timur (Matahari pagi)
  south: 1.10, // Selatan (Terik sedang)
  west: 1.15,  // Barat (Matahari sore terik maksimal)
}

// Factor pengali panas berdasarkan beban jenis ruangan
const ROOM_TYPE_FACTOR: Record<RoomType, number> = {
  bedroom: 1.0,     // Kamar tidur (Beban standar)
  living_room: 1.05,// Ruang keluarga/tamu (Sering buka pintu)
  office: 1.10,     // Kantor (Ada laptop & peralatan elektronik)
  kitchen: 1.20,    // Dapur (Beban panas kompor/peralatan masak)
  store: 1.20,      // Toko/Ruko (Lalu lalang pengunjung)
  server_room: 1.35,// Server room (Panas kontinu alat elektronik tinggi)
}

// Factor pengali berdasarkan luas jendela kaca
const WINDOW_SIZE_FACTOR: Record<WindowSize, number> = {
  small: 1.0,   // Jendela kecil (<1 m²)
  medium: 1.05, // Jendela sedang (1-2 m²)
  large: 1.12,  // Jendela besar (>2 m², radiasi kaca tinggi)
}

// Factor pengali berdasarkan posisi lantai
const ROOM_FLOOR_FACTOR: Record<RoomFloor, number> = {
  middle: 1.0,  // Lantai tengah (Terlindungi lantai atas)
  ground: 1.02, // Lantai dasar
  top: 1.15,    // Lantai teratas (Langsung terpapar radiasi atap)
}

/**
 * Kalkulasi Kapasitas AC Berdasarkan Standar Teknik HVAC Tropis Indonesia
 * Rumus Dasar: Volume (m³) × 170 BTU/m³ + Penyesuaian Beban Termal Lingkungan
 */
export function calculateAC(input: ACCalculatorInput): ACCalculatorResult {
  const { length, width, ceilingHeight, sunExposure, roomType, windowSize, roomFloor, occupants } = input

  const heightM = CEILING_HEIGHT_METERS[ceilingHeight] || 3.0
  const area = length * width
  const volume = area * heightM

  // Beban dasar pendinginan: 170 BTU per meter kubik (~510 BTU/m² pada tinggi 3m)
  let btu = volume * 170

  // Terapkan faktor lingkungan termal
  btu *= SUN_EXPOSURE_FACTOR[sunExposure] || 1.0
  btu *= ROOM_TYPE_FACTOR[roomType] || 1.0
  btu *= WINDOW_SIZE_FACTOR[windowSize] || 1.0
  btu *= ROOM_FLOOR_FACTOR[roomFloor] || 1.0

  // Beban metabolik penghuni: 500 BTU per orang tambahan (penghuni ke-2 dan seterusnya)
  const extraOccupants = Math.max(0, (occupants ?? 1) - 1)
  btu += extraOccupants * 500

  const roundedBTU = Math.round(btu)

  // Pemetaan Kapasitas PK AC Daikin Standar Indonesia
  let pk = 0.5
  let pkLabel = '½ PK'

  if (roundedBTU <= 5500) {
    pk = 0.5
    pkLabel = '½ PK'
  } else if (roundedBTU <= 7500) {
    pk = 0.75
    pkLabel = '¾ PK'
  } else if (roundedBTU <= 10000) {
    pk = 1.0
    pkLabel = '1 PK'
  } else if (roundedBTU <= 14000) {
    pk = 1.5
    pkLabel = '1½ PK'
  } else if (roundedBTU <= 20000) {
    pk = 2.0
    pkLabel = '2 PK'
  } else if (roundedBTU <= 26000) {
    pk = 2.5
    pkLabel = '2½ PK'
  } else {
    pk = 3.0
    pkLabel = '3 PK+'
  }

  const recommendation = getRecommendation(pk, roundedBTU, area)

  return {
    btu: roundedBTU,
    pk,
    pkLabel,
    recommendation,
    area: Math.round(area * 10) / 10,
    volume: Math.round(volume * 10) / 10,
  }
}

function getRecommendation(pk: number, btu: number, area: number): string {
  if (pk <= 0.5) {
    return `Untuk luas ruangan ${area} m² dengan beban pendinginan ~${btu.toLocaleString('id-ID')} BTU/h, AC ½ PK sangat ideal dan efisien energi tanpa mendinginkan secara berlebihan.`
  }
  if (pk <= 0.75) {
    return `Ruangan seluas ${area} m² membutuhkan daya pendinginan ~${btu.toLocaleString('id-ID')} BTU/h. AC ¾ PK akan mendinginkan suhu secara cepat dan stabil.`
  }
  if (pk <= 1.0) {
    return `Untuk area ${area} m² dengan estimasi ~${btu.toLocaleString('id-ID')} BTU/h, disarankan memakai AC 1 PK agar ruangan tetap sejuk maksimal saat cuaca terik.`
  }
  if (pk <= 1.5) {
    return `Kebutuhan pendinginan mencapai ~${btu.toLocaleString('id-ID')} BTU/h. AC 1½ PK adalah pilihan tepat untuk menjaga kenyamanan thermal tanpa membuat kompresor bekerja ekstra.`
  }
  if (pk <= 2.0) {
    return `Area ruangan luas ${area} m² dengan beban termal ~${btu.toLocaleString('id-ID')} BTU/h memerlukan AC 2 PK atau kombinasi Multi-Split Daikin untuk sirkulasi udara merata.`
  }
  if (pk <= 2.5) {
    return `Beban pendinginan ~${btu.toLocaleString('id-ID')} BTU/h tergolong tinggi. Direkomendasikan AC 2½ PK Daikin Inverter atau SkyAir Commercial series.`
  }
  return `Kebutuhan pendinginan melebihi ~${btu.toLocaleString('id-ID')} BTU/h. Disarankan menggunakan sistem Daikin Multi-Split / VRV Home Central System untuk efisiensi ruang & energi terbaik.`
}
