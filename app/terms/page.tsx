import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Use — Padelo',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use">
      <p><strong>Last updated:</strong> [Date]</p>

      <h2>1. Acceptance of Terms</h2>
      <p>[By using Padelo, users agree to these terms.]</p>

      <h2>2. Use of the App</h2>
      <p>[Permitted use: personal, non-commercial use for tracking padel matches.]</p>

      <h2>3. User Accounts</h2>
      <p>[Users are responsible for maintaining the security of their account credentials.]</p>

      <h2>4. User Content</h2>
      <p>[Users own their data. They grant Padelo a licence to store and display it within the app.]</p>

      <h2>5. Prohibited Conduct</h2>
      <p>[No scraping, no automated access, no impersonation of other users.]</p>

      <h2>6. Termination</h2>
      <p>[Padelo may terminate accounts that violate these terms.]</p>

      <h2>7. Disclaimer of Warranties</h2>
      <p>[App provided as-is. No warranty of availability or accuracy of data.]</p>

      <h2>8. Governing Law</h2>
      <p>[Jurisdiction — e.g. England and Wales.]</p>

      <h2>9. Contact</h2>
      <p>[Contact email address.]</p>
    </LegalLayout>
  )
}
