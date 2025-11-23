/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, FormEvent } from 'react'
import Button from './Button'
import Input from './Input'
import { isValidEmail } from '@/lib/utils'
import type { FormStatus } from '@/types'
import { cn } from '@/lib/utils'
interface WaitlistFormProps {
  className?: string
  buttonText?: string
  placeholder?: string
}

export default function WaitlistForm({
  className = '',
  buttonText = 'Join Waitlist',
  placeholder = 'Enter your email address',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate email
    if (!isValidEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Thanks for joining! Check your email.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Connection error. Please check your internet and try again.')
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            disabled={status === 'loading'}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={status === 'loading'}
          size="lg"
          className="whitespace-nowrap"
        >
          {status === 'loading' ? 'Joining...' : buttonText}
        </Button>
      </form>

      {message && (
        <div
          className={cn(
            'mt-4 text-sm text-center font-medium',
            status === 'success' ? 'text-accent-green' : 'text-red-500'
          )}
        >
          {message}
        </div>
      )}

      {status === 'success' && (
        <p className="mt-3 text-xs text-center text-text-muted">
          We&rsquo;ll send you updates about early access.
        </p>
      )}
    </div>
  )
}