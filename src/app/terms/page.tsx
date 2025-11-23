import { Metadata } from 'next'
import Link from 'next/link'
import { APP_NAME, CONTACT_EMAIL } from '@/src/lib/constants'

export const metadata: Metadata = {
  title: `Terms of Service - ${APP_NAME}`,
}

export default function TermsPage() {
  return (
    <div className="min-h-screen px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-text-secondary mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              By accessing and using {APP_NAME}, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Permission is granted to temporarily access {APP_NAME} for personal, non-commercial use only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Disclaimer</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              The materials on {APP_NAME} are provided on an &rsquo;as is&rsquo; basis. {APP_NAME} makes no warranties, expressed or implied, and hereby disclaims all other warranties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Limitations</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              In no event shall {APP_NAME} or its suppliers be liable for any damages arising out of the use or inability to use the materials on {APP_NAME}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Contact</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}