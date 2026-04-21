import type { Metadata } from 'next'
import Hero               from '@/components/portfolio/sections/Hero'
import FeaturedCaseStudies from '@/components/portfolio/sections/FeaturedCaseStudies'
import ServicesSection    from '@/components/portfolio/sections/ServicesSection'
import ProcessSection     from '@/components/portfolio/sections/ProcessSection'
import AboutSection       from '@/components/portfolio/sections/AboutSection'
import FAQSection         from '@/components/portfolio/sections/FAQSection'
import ContactCTA         from '@/components/portfolio/sections/ContactCTA'
import { getAllCaseStudies } from '@/lib/portfolio/mdx'

export const metadata: Metadata = {
  title:       { absolute: 'Nuvion Solutions — Web Design & AI-Powered Experiences' },
  description: 'Custom websites and AI-powered web systems for businesses of every size. Simple sites from $1,500. Full AI systems from $5,000. Built right, on time, with results you can measure.',
}

export default function HomePage() {
  const featured = getAllCaseStudies()

  return (
    <>
      <Hero />
      <FeaturedCaseStudies studies={featured} />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
      <ContactCTA />
    </>
  )
}
