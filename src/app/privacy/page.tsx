import { Metadata } from 'next'
import Link from 'next/link'
import { APP_NAME, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Privacy Policy - ${APP_NAME}`,
}

export default function PrivacyPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-text-secondary mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We collect information you provide directly to us, including your email address when you join our waitlist.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We use the information we collect to provide, maintain, and improve our services, including to notify you about updates and early access opportunities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Information Sharing</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share aggregate, non-personally identifiable information publicly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Data Security</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Your Rights</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              You have the right to access, update, or delete your personal information at any time. Contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>{' '}
              to exercise these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Contact Us</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at{' '}
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