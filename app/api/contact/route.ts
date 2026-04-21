import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 503 })
  }

  const { name, email, niche, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const to   = process.env.CONTACT_EMAIL_TO   ?? 'djprudhomme04@gmail.com'
  const from = process.env.CONTACT_EMAIL_FROM ?? 'Nuvion Portfolio <onboarding@resend.dev>'

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to,
    reply_to: email,
    subject:  `New inquiry from ${name} — ${niche || 'General'}`,
    text: `
Name:     ${name}
Email:    ${email}
Industry: ${niche || 'Not specified'}

Message:
${message}
    `.trim(),
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
