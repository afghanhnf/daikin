export type DealerType = 'ishop' | 'proshop'

export interface Dealer {
  id: string
  name: string
  type: DealerType
  province: string
  city: string
  address: string
  phone: string
  isAuthorized: boolean
  openHours?: string
}

export const dealers: Dealer[] = [
  {
    id: 'dealer-001',
    name: 'Daikin iShop Sudirman',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Selatan',
    address: 'Jl. Jend. Sudirman No. 45, Jakarta Selatan 12190',
    phone: '021-5678-9012',
    isAuthorized: true,
    openHours: 'Senin–Sabtu: 09.00–18.00',
  },
  {
    id: 'dealer-002',
    name: 'Daikin iShop Kelapa Gading',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Utara',
    address: 'Mal Kelapa Gading 2 Lt. 1, Jakarta Utara',
    phone: '021-4567-8901',
    isAuthorized: true,
    openHours: 'Setiap Hari: 10.00–22.00',
  },
  {
    id: 'dealer-003',
    name: 'Daikin ProShop Jakarta',
    type: 'proshop',
    province: 'DKI Jakarta',
    city: 'Jakarta Pusat',
    address: 'Jl. Gatot Subroto Kav. 12, Jakarta Pusat 10270',
    phone: '021-3456-7890',
    isAuthorized: true,
    openHours: 'Senin–Jumat: 08.00–17.00',
  },
  {
    id: 'dealer-004',
    name: 'Daikin iShop Surabaya',
    type: 'ishop',
    province: 'Jawa Timur',
    city: 'Surabaya',
    address: 'Jl. Darmo No. 123, Surabaya 60264',
    phone: '031-5678-9012',
    isAuthorized: true,
    openHours: 'Senin–Sabtu: 09.00–18.00',
  },
  {
    id: 'dealer-005',
    name: 'Daikin ProShop Surabaya',
    type: 'proshop',
    province: 'Jawa Timur',
    city: 'Surabaya',
    address: 'Ruko Manyar Permai Blok B-12, Surabaya',
    phone: '031-6789-0123',
    isAuthorized: true,
    openHours: 'Senin–Jumat: 08.30–17.30',
  },
  {
    id: 'dealer-006',
    name: 'Daikin iShop Bandung',
    type: 'ishop',
    province: 'Jawa Barat',
    city: 'Bandung',
    address: 'Jl. Dago No. 56, Bandung 40135',
    phone: '022-4567-8901',
    isAuthorized: true,
    openHours: 'Senin–Sabtu: 09.00–17.00',
  },
  {
    id: 'dealer-007',
    name: 'Daikin iShop Medan',
    type: 'ishop',
    province: 'Sumatera Utara',
    city: 'Medan',
    address: 'Jl. Imam Bonjol No. 78, Medan 20152',
    phone: '061-5678-9012',
    isAuthorized: true,
    openHours: 'Senin–Sabtu: 09.00–17.00',
  },
  {
    id: 'dealer-008',
    name: 'Daikin iShop Makassar',
    type: 'ishop',
    province: 'Sulawesi Selatan',
    city: 'Makassar',
    address: 'Jl. Ratulangi No. 34, Makassar 90123',
    phone: '0411-3456-789',
    isAuthorized: true,
    openHours: 'Senin–Sabtu: 09.00–17.00',
  },
]

export const provinces = [...new Set(dealers.map((d) => d.province))].sort()

export function getDealersByType(type: DealerType) {
  return dealers.filter((d) => d.type === type)
}

export function getDealersByProvince(province: string) {
  return dealers.filter((d) => d.province === province)
}
