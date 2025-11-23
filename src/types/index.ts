/**
 * Waitlist form submission data
 */
export interface WaitlistFormData {
  email: string
}

/**
 * API response for waitlist submission
 */
export interface WaitlistResponse {
  success: boolean
  message: string
  error?: string
}

/**
 * Service/subscription provider
 */
export interface Service {
  name: string
  icon: string
}

/**
 * Feature card data
 */
export interface Feature {
  title: string
  description: string
  icon: string
}

/**
 * Navigation link
 */
export interface NavLink {
  name: string
  href: string
}

/**
 * Form submission states
 */
export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

/**
 * Button variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

/**
 * Button sizes
 */
export type ButtonSize = 'sm' | 'md' | 'lg'