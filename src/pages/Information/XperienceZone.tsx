import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MapPin, Phone, Sparkles, Store } from 'lucide-react'
import PageTransition from '@/components/animations/PageTransition'
import FadeInUp, { FadeInItem } from '@/components/animations/FadeInUp'
import PageMeta from '@/components/seo/PageMeta'
import Breadcrumb from '@/components/ui/Breadcrumb'

const locations = [
  {
    city: 'Medan',
    address: ['Jl. H. Adam Malik No. 18', 'Medan Barat, Medan 20114'],
    phone: '(061) 4200 8866',
    email: 'did-medan@daikin.co.id',
  },
  {
    city: 'Tangerang',
    address: ['Jl. Jalur Sutera Blok 29 D No. 36–37', 'Alam Sutera, Tangerang 15320'],
    phone: '(021) 5314 1195',
    email: 'did-tangerang@daikin.co.id',
  },
  { city: 'Pekanbaru', address: ['Xperience Zone Daikin Pekanbaru'] },
  { city: 'Palembang', address: ['Xperience Zone Daikin Palembang'] },
  { city: 'Makassar', address: ['Xperience Zone Daikin Makassar'] },
  { city: 'Semarang', address: ['Xperience Zone Daikin Semarang'] },
]

export default function XperienceZone() {
  return (
    <PageTransition>
      <PageMeta
        title="Xperience Zone Daikin Indonesia"
        description="Kunjungi Xperience Zone Daikin untuk mencoba produk dan berkonsultasi langsung dengan tim Daikin."
        canonical="/information/xperience-zone"
      />

      <section className="relative isolate overflow-hidden bg-daikin-blue pt-32 pb-16 text-white md:pt-40 md:pb-24">
        <img src="/images/zone/showroom.jpg" alt="Daikin Xperience Zone" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-daikin-blue-dark/95 via-daikin-blue/85 to-daikin-blue/60" />
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Informasi', path: '/information' }, { label: 'Xperience Zone' }]} className="mb-9 text-white/80" />
          <FadeInUp className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> Daikin Showroom
            </div>
            <h1 className="text-4xl font-light tracking-tight md:text-6xl">Xperience Zone</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Dapatkan pengalaman secara langsung untuk memilih produk yang sesuai dengan kebutuhan Anda.
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <FadeInUp>
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              PT. Daikin Airconditioning Indonesia telah melakukan ekspansi dengan membuka Xperience Zone di beberapa kota. Pada Februari 2016, Xperience Zone pertama kali didirikan di Tangerang, selanjutnya di Pekanbaru, Palembang, dan Medan. Xperience Zone hadir agar Anda dapat merasakan pengalaman langsung menggunakan produk Daikin serta berkonsultasi dengan sales Daikin untuk memilih produk yang sesuai dengan kebutuhan Anda.
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="bg-daikin-blue-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeInUp className="mb-10 text-center md:mb-14">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-daikin-blue"><Store className="h-4 w-4" /> Kunjungi Kami</div>
            <h2 className="text-3xl font-light text-charcoal md:text-4xl">Xperience Zone Tersedia di Berbagai Kota</h2>
          </FadeInUp>
          <FadeInUp stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <FadeInItem key={location.city}>
                <article className="h-full rounded-2xl border border-daikin-blue/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="mb-4 border-l-4 border-daikin-blue pl-3 text-xl font-bold text-charcoal">{location.city}</h3>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                    <div className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-daikin-blue" /><p>{location.address.map((line) => <span key={line} className="block">{line}</span>)}</p></div>
                    {location.phone && <div className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-daikin-blue" /><span>{location.phone}</span></div>}
                    {location.email && <div className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-daikin-blue" /><a href={`mailto:${location.email}`} className="break-all text-daikin-blue hover:underline">{location.email}</a></div>}
                  </div>
                </article>
              </FadeInItem>
            ))}
          </FadeInUp>
          <FadeInUp className="mt-12 text-center">
            <Link to="/information/find-dealer" className="inline-flex items-center gap-2 rounded-xl bg-daikin-blue px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-daikin-blue-dark">
              Temukan Lokasi Daikin Terdekat <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeInUp>
        </div>
      </section>
    </PageTransition>
  )
}
