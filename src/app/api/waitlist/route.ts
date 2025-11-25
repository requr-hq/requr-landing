import { NextRequest, NextResponse } from 'next/server'
import { isValidEmail } from '@/lib/utils'
import type { WaitlistResponse } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json<WaitlistResponse>(
        {
          success: false,
          message: 'Invalid email address',
          error: 'Please provide a valid email address',
        },
        { status: 400 }
      )
    }

    // TODO: Add email to database or email service (Mailchimp, ConvertKit, etc.)
    console.log('New waitlist signup:', email)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Return success
    return NextResponse.json<WaitlistResponse>(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist API error:', error)
    
    return NextResponse.json<WaitlistResponse>(
      {
        success: false,
        message: 'Something went wrong',
        error: 'Internal server error',
      },
      { status: 500 }
    )
  }
}