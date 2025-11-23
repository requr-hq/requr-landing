import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // TODO: Add to database or email service (Mailchimp, ConvertKit, etc.)
    console.log('New waitlist signup:', email)

    // For now, just return success
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
  }
}