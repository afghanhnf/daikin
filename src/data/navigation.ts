import type { NavItem } from '@/types/navigation'

export const navItems: NavItem[] = [
  {
    labelKey: 'nav:profile.label',
    path: '/profile',
    isMegaMenu: false,
    children: [
      { labelKey: 'nav:profile.about', path: '/profile/about', description: 'Mengenal Daikin Indonesia lebih dekat' },
      { labelKey: 'nav:profile.group', path: '/profile/daikin-group', description: 'Daikin Industries, Ltd. global' },
      { labelKey: 'nav:profile.history', path: '/profile/history', description: 'Perjalanan kami sejak 1924' },
      { labelKey: 'nav:profile.philosophy', path: '/profile/brand-philosophy', description: 'Nilai dan filosofi brand' },
      { labelKey: 'nav:profile.technology', path: '/profile/technology', description: 'Inovasi teknologi Daikin' },
      { labelKey: 'nav:profile.streamer', path: '/profile/streamer', description: 'Teknologi Streamer eksklusif' },
      { labelKey: 'nav:profile.awards', path: '/profile/awards', description: 'Penghargaan dan sertifikasi' },
    ],
  },
  {
    labelKey: 'nav:products.label',
    path: '/products',
    isMegaMenu: true,
    disabled: true,
    children: [
      { labelKey: 'nav:products.residential', path: '#', icon: 'Home', description: 'AC untuk hunian', disabled: true },
      { labelKey: 'nav:products.commercial', path: '#', icon: 'Building2', description: 'Solusi komersial & proyek', disabled: true },
      { labelKey: 'nav:products.accessories', path: '#', icon: 'Package', description: 'Aksesori pelengkap', disabled: true },
      { labelKey: 'nav:products.spareParts', path: '#', icon: 'Settings', description: 'Suku cadang resmi', disabled: true },
      { labelKey: 'nav:products.catalogue', path: '#', icon: 'BookOpen', description: 'Unduh e-catalogue', disabled: true },
    ],
  },
  {
    labelKey: 'nav:services.label',
    path: '/services',
    disabled: true,
    children: [
      { labelKey: 'nav:services.ishop', path: '#', description: 'Dealer resmi hunian', disabled: true },
      { labelKey: 'nav:services.proshop', path: '#', description: 'Dealer komersial & central AC', disabled: true },
      { labelKey: 'nav:services.maintenance', path: '#', description: 'Servis & perawatan berkala', disabled: true },
      { labelKey: 'nav:services.center', path: '#', description: 'Lokasi pusat servis', disabled: true },
      { labelKey: 'nav:services.warranty', path: '#', description: 'Garansi & dukungan', disabled: true },
    ],
  },
  {
    labelKey: 'nav:solutions.label',
    path: '/solutions',
    children: [
      { labelKey: 'nav:solutions.howToChoose', path: '/solutions/how-to-choose', description: 'Panduan memilih AC' },
      { labelKey: 'nav:solutions.energy', path: '/solutions/energy-efficiency', description: 'Hemat energi dengan inverter' },
      { labelKey: 'nav:solutions.calculator', path: '/solutions/ac-calculator', description: 'Kalkulator PK AC' },
      { labelKey: 'nav:solutions.airQuality', path: '/solutions/air-quality', description: 'Kualitas udara dalam ruangan' },
      { labelKey: 'nav:solutions.tips', path: '/solutions/maintenance-tips', description: 'Tips perawatan AC' },
    ],
  },
  {
    labelKey: 'nav:insights.label',
    path: '/insights',
    disabled: true,
    children: [
      { labelKey: 'nav:insights.news', path: '#', description: 'Berita terbaru', disabled: true },
      { labelKey: 'nav:insights.promotions', path: '#', description: 'Promo spesial', disabled: true },
      { labelKey: 'nav:insights.events', path: '#', description: 'Acara & kegiatan', disabled: true },
      { labelKey: 'nav:insights.training', path: '#', description: 'Pelatihan & sertifikasi', disabled: true },
      { labelKey: 'nav:insights.csr', path: '#', description: 'Program CSR Daikin', disabled: true },
    ],
  },
  {
    labelKey: 'nav:campaign.label',
    path: '/campaign',
    disabled: true,
    children: [
      { labelKey: 'nav:campaign.idealAir', path: '#', disabled: true },
      { labelKey: 'nav:campaign.power', path: '#', disabled: true },
      { labelKey: 'nav:campaign.perfecting', path: '#', disabled: true },
    ],
  },
  // { labelKey: 'nav:competition.label', path: '/competition' }, // hidden
  {
    labelKey: 'nav:careers.label',
    path: '/careers',
  },
  {
    labelKey: 'nav:contact.label',
    path: '/contact',
  },
]
