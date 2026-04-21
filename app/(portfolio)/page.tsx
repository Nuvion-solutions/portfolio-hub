import type { Metadata } from 'next'
import dynamic           from 'next/dynamic'
import Hero              from '@/components/portfolio/sections/Hero'
import FeaturedCaseStudies from '@/components/portfolio/sections/FeaturedCaseStudies'
import { getAllCaseStudies } from '@/lib/portfolio/mdx'

const ServicesSection = dynamic(() => import('@/components/portfolio/sections/ServicesSection'))
const ProcessSection  = dynamic(() => import('@/components/portfolio/sections/ProcessSection'))
const AboutSection    = dynamic(() => import('@/components/portfolio/sections/AboutSection'))
const FAQSection      = dynamic(() => import('@/components/portfolio/sections/FAQSection'))
const ContactCTA      = dynamic(() => import('@/components/portfolio/sections/ContactCTA'))

export const metadata: Metadata = {
  title:       { absolute: 'Nuvion Solutions — Web Design & AI-Powered Experiences' },
  description: 'Custom websites and digital experiences for businesses of every size — from simple 5-page sites to full AI-powered systems. No templates, no surprises.',
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
