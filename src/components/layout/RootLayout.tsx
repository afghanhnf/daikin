import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from '@/components/ui/SEO'

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <SEO />
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
