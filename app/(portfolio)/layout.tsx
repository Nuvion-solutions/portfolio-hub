import Navbar from '@/components/portfolio/Navbar'
import Footer from '@/components/portfolio/Footer'
import StickyCTABar from '@/components/portfolio/StickyCTABar'

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
