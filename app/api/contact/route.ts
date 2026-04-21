import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, niche, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const to = process.env.CONTACT_EMAIL_TO ?? 'hello@nuvion-solutions.com'

  const { error } = await resend.emails.send({
    from:    'Nuvion Portfolio <onboarding@resend.dev>',
    to,
    reply_to: email,
    subject: `New inquiry from ${name} — ${niche || 'General'}`,
    text: `
Name:    ${name}
Email:   ${email}
Niche:   ${niche || 'Not specified'}

Message:
${message}
    `.trim(),
  })

  if (error) {
    console.error('[contact] Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
