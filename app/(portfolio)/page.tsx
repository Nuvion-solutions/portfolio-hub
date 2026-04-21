import type { Metadata } from 'next'
import Hero                  from '@/components/portfolio/sections/Hero'
import FeaturedCaseStudies   from '@/components/portfolio/sections/FeaturedCaseStudies'
import ServicesSection       from '@/components/portfolio/sections/ServicesSection'
import AboutSection          from '@/components/portfolio/sections/AboutSection'
import ContactCTA            from '@/components/portfolio/sections/ContactCTA'
import { getFeaturedCaseStudies } from '@/lib/portfolio/mdx'

export const metadata: Metadata = {
  title:       'Nuvion Solutions — AI-Powered Web Experiences',
  description: 'We build AI-powered digital experiences for med spas, startups, restaurants, law firms, and home service businesses.',
}

export default function HomePage() {
  const featured = getFeaturedCaseStudies()

  return (
    <>
      <Hero />
      <FeaturedCaseStudies studies={featured} />
      <ServicesSection />
      <AboutSection />
      <ContactCTA />
    </>
  )
}
