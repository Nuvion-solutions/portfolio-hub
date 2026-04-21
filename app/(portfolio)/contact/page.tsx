import type { Metadata } from 'next'
import ContactForm from '@/components/portfolio/ContactForm'

export const metadata: Metadata = {
  title:       'Start a Project',
  description: "Get in touch with Nuvion Solutions. Tell us about your business and we'll respond within 24 hours with a custom strategy.",
}

export default function ContactPage() {
  return <ContactForm />
}
