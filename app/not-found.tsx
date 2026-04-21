import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/portfolio/Navbar'
import Footer from '@/components/portfolio/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-p-accent">404</p>
        <h1 className="font-heading text-5xl font-bold text-p-fg">Page Not Found</h1>
        <p className="mt-4 max-w-sm text-p-muted">
          This page doesn&apos;t exist. Let&apos;s get you back to something that does.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/case-studies">View Our Work</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  )
}
