export type DealerType = 'ishop' | 'proshop' | 'service_center'

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
  websiteUrl?: string
  services?: string[]
  shopeeUrl?: string
  tokopediaUrl?: string
  thumbnailUrl?: string
}

export interface RegionalSummary {
  region: string
  provinces: {
    name: string
    ishopCount: number
    proshopCount: number
    serviceCenterCount: number
    cities: string[]
    highlight?: Dealer[]
  }[]
}

export const dealers: Dealer[] = [
  // ── DKI Jakarta (Seed Data Resmi) ──────────────────────────────────
  {
    id: 'jkt-wahana',
    name: 'AC WAHANA',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Utara',
    address: 'Wisma Artha Gading Niaga, Jl. Boulevard Artha Gading No.8 Blok A, RT.18/RW.8, Kel. Kelapa Gading Barat, Kec. Kelapa Gading, Jakarta Utara 14240',
    phone: '021-45853500',
    isAuthorized: true,
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    websiteUrl: 'https://wahanaco.id',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com'
  },
  {
    id: 'jkt-captain',
    name: 'Captain Air Conditioning Indonesia',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Utara',
    address: 'Ruko Elang Laut Boulevard B-43 Pantai Indah Kapuk, Penjaringan, Kapuk Muara, Jakarta Utara 14470',
    phone: '021-22570425',
    isAuthorized: true,
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    websiteUrl: 'https://captainaircon.id',
    services: ['Penjualan & Pemasangan'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com'
  },
  {
    id: 'jkt-centra',
    name: 'Centra HVACR',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Timur',
    address: 'Jl. Raya Pulo Gebang No.5, RT.7/RW.6, Kel. Pulo Gebang, Kec. Cakung, Jakarta Timur 13950',
    phone: '0851-7313-9000',
    isAuthorized: true,
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    websiteUrl: 'https://centrahvacr.id',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com'
  },
  {
    id: 'jkt-dunia',
    name: 'Dunia Electric',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Barat',
    address: 'Ruko Glodok Plaza Blok F/12A, Kota Jakarta Barat',
    phone: '0816-1799-7231',
    isAuthorized: true,
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    websiteUrl: 'https://duniaelectric.com',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com'
  },
  {
    id: 'jkt-era',
    name: 'ERA TEKNIK',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Pusat',
    address: 'Ruko Mega Grosir Cempaka Mas, Jl. Letjend Suprapto No.3 Blok C1 - C5, Jakarta Pusat',
    phone: '0878-8386-8800',
    isAuthorized: true,
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    websiteUrl: 'https://erateknik.com',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com'
  },
  {
    id: 'jkt-indocool',
    name: 'Indo Cool',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Utara',
    address: 'Jl. Pluit Karang Asri II No.1, RT.5/RW.13, Kec. Penjaringan, Kel. Pluit, Jakarta Utara 14450',
    phone: '0811-1376-0008',
    isAuthorized: true,
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    websiteUrl: 'https://indocool.id',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com'
  },
  {
    id: 'jkt-primajaya',
    name: 'Prima Jaya AC',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Timur',
    address: 'Jalan Jati Negara No.119 Komp. Duren Sawit, Kec. Duren Sawit, Jakarta Timur',
    phone: '0811-915-4304',
    isAuthorized: true,
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    websiteUrl: 'https://primajayaac.shop',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com'
  },
  {
    id: 'jkt-sumbersurya',
    name: 'PT. Sumber Surya Maju Mandiri',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Selatan',
    address: 'Jl. RS. Fatmawati Raya No.3-B, RT.4/RW.3, Cilandak Barat, Kec. Cilandak, Jakarta Selatan 12410',
    phone: '0815-1779-9907',
    isAuthorized: true,
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    websiteUrl: 'https://ptsumbersuryamajumandiri.com',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan', 'Perbaikan AC'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com'
  },
  {
    id: 'jkt-tokojaya',
    name: 'Toko Jaya AC',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Barat',
    address: 'Jl. Raya Joglo No.10A, RT.10/RW.3, Joglo, Kec. Kembangan, Jakarta Barat',
    phone: '0819-3838-8880',
    isAuthorized: true,
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    websiteUrl: 'https://toko-jayaac.com',
    services: ['Penjualan & Pemasangan'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com'
  },
  {
    id: 'jkt-zonanyaman',
    name: 'Zona Nyaman AC',
    type: 'ishop',
    province: 'DKI Jakarta',
    city: 'Jakarta Barat',
    address: 'Ruko Daan Mogot Baru, Cengkareng Barat, Kota Jakarta Barat',
    phone: '0821-1400-0010',
    isAuthorized: true,
    openHours: 'Senin - Sabtu: 08.30 - 17.30',
    websiteUrl: 'https://zonanyamanac.com',
    services: ['Penjualan & Pemasangan', 'Pembersihan & Pemeliharaan'],
    shopeeUrl: 'https://shopee.co.id',
    tokopediaUrl: 'https://tokopedia.com'
  },

  // ── Other Regions ───────────────────────────────────────────
  { id: 'jkt-004', name: 'Daikin ProShop Jakarta Pusat',type: 'proshop',        province: 'DKI Jakarta',     city: 'Jakarta Pusat',   address: 'Jl. Gatot Subroto Kav. 12, Jakarta Pusat 10270',             phone: '021-3456-7890', isAuthorized: true, openHours: 'Senin–Jumat: 08.00–17.00' },
  { id: 'jkt-005', name: 'Daikin Service Center Cempaka',type: 'service_center', province: 'DKI Jakarta',    city: 'Jakarta Pusat',   address: 'Jl. Cempaka Putih Tengah No. 12, Jakarta Pusat',             phone: '021-4244-5566', isAuthorized: true, openHours: 'Senin–Sabtu: 08.00–17.00' },
  { id: 'bjb-001', name: 'Daikin iShop Bandung Dago',   type: 'ishop',          province: 'Jawa Barat',      city: 'Bandung',         address: 'Jl. Dago No. 56, Bandung 40135',                             phone: '022-4567-8901', isAuthorized: true, openHours: 'Senin–Sabtu: 09.00–17.00' },
  { id: 'bjb-002', name: 'Daikin iShop Bandung Pasteur',type: 'ishop',          province: 'Jawa Barat',      city: 'Bandung',         address: 'Jl. Dr. Djundjunan No. 118, Bandung 40163',                  phone: '022-6031-2233', isAuthorized: true, openHours: 'Senin–Sabtu: 09.00–18.00' },
  { id: 'bjb-003', name: 'Daikin ProShop Bekasi',        type: 'proshop',        province: 'Jawa Barat',      city: 'Bekasi',          address: 'Ruko Grand Mall Bekasi Blok A7, Bekasi 17148',                phone: '021-8841-7799', isAuthorized: true, openHours: 'Senin–Sabtu: 09.00–17.00' },
  { id: 'smg-001', name: 'Daikin iShop Semarang',        type: 'ishop',          province: 'Jawa Tengah',     city: 'Semarang',        address: 'Jl. Pandanaran No. 98, Semarang 50134',                      phone: '024-8440-1122', isAuthorized: true, openHours: 'Senin–Sabtu: 09.00–18.00' },
  { id: 'sby-001', name: 'Daikin iShop Surabaya Darmo',  type: 'ishop',          province: 'Jawa Timur',      city: 'Surabaya',        address: 'Jl. Darmo No. 123, Surabaya 60264',                          phone: '031-5678-9012', isAuthorized: true, openHours: 'Senin–Sabtu: 09.00–18.00' },
  { id: 'mdn-001', name: 'Daikin iShop Medan Imam Bonjol',type: 'ishop',         province: 'Sumatera Utara',  city: 'Medan',           address: 'Jl. Imam Bonjol No. 78, Medan 20152',                        phone: '061-5678-9012', isAuthorized: true, openHours: 'Senin–Sabtu: 09.00–17.00' },
]

export const regionalSummary: RegionalSummary[] = [
  {
    region: 'Pulau Jawa',
    provinces: [
      { name: 'DKI Jakarta',   ishopCount: 10, proshopCount: 1, serviceCenterCount: 1, cities: ['Jakarta Selatan', 'Jakarta Utara', 'Jakarta Pusat', 'Jakarta Barat', 'Jakarta Timur'], highlight: dealers.filter(d => d.province === 'DKI Jakarta').slice(0, 3) },
      { name: 'Jawa Barat',    ishopCount: 10, proshopCount: 3, serviceCenterCount: 2, cities: ['Bandung', 'Bekasi', 'Depok', 'Bogor', 'Cirebon'], highlight: dealers.filter(d => d.province === 'Jawa Barat').slice(0, 2) },
      { name: 'Jawa Tengah',   ishopCount: 8,  proshopCount: 2, serviceCenterCount: 2, cities: ['Semarang', 'Solo', 'Yogyakarta', 'Purwokerto'], highlight: dealers.filter(d => d.province === 'Jawa Tengah').slice(0, 1) },
      { name: 'Jawa Timur',    ishopCount: 12, proshopCount: 4, serviceCenterCount: 3, cities: ['Surabaya', 'Malang', 'Kediri', 'Jember', 'Gresik'], highlight: dealers.filter(d => d.province === 'Jawa Timur').slice(0, 3) },
    ],
  },
  {
    region: 'Sumatera',
    provinces: [
      { name: 'Sumatera Utara',    ishopCount: 6,  proshopCount: 1, serviceCenterCount: 2, cities: ['Medan', 'Binjai', 'Pematangsiantar'], highlight: dealers.filter(d => d.province === 'Sumatera Utara').slice(0, 2) },
      { name: 'Sumatera Selatan',  ishopCount: 4,  proshopCount: 1, serviceCenterCount: 1, cities: ['Palembang', 'Lubuklinggau'], highlight: [] },
    ],
  },
]
