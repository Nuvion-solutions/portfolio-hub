import Navbar from '@/components/portfolio/Navbar'
import Footer from '@/components/portfolio/Footer'
import StickyCTABar from '@/components/portfolio/StickyCTABar'

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-p-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
