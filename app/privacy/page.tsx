import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy — Padelo',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p><strong>Last updated:</strong> [Date]</p>

      <h2>1. Information We Collect</h2>
      <p>[Describe what data the app collects — e.g. email address, display name, match scores, phone number.]</p>

      <h2>2. How We Use Your Information</h2>
      <p>[Describe how data is used — displaying stats, match history, ELO calculations.]</p>

      <h2>3. Data Storage</h2>
      <p>[Describe Firebase Firestore storage, where data is stored (EU/US), and retention policy.]</p>

      <h2>4. Third-Party Services</h2>
      <p>[List Firebase Authentication and Firestore. Link to Google&apos;s privacy policy.]</p>

      <h2>5. Data Sharing</h2>
      <p>[Describe what is visible to other users — display name, stats, match results.]</p>

      <h2>6. Your Rights</h2>
      <p>[Describe how users can request account deletion or a copy of their data, and the contact address for such requests.]</p>

      <h2>7. Contact</h2>
      <p>[Contact email address for privacy enquiries.]</p>
    </LegalLayout>
  )
}
