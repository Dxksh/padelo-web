import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Delete Your Account — Padelo',
  description: 'How to delete your Padelo account and what data is removed.',
}

export default function DeleteAccountPage() {
  return (
    <LegalLayout title="Delete Your Account">

      <h2>Delete from inside the app</h2>
      <p>
        You can delete your account directly from the Padelo app in three steps:
      </p>
      <ol>
        <li>Open the <strong>Profile</strong> tab.</li>
        <li>Tap the settings icon in the top-right corner and select <strong>Delete Account</strong>.</li>
        <li>Follow the on-screen steps to confirm.</li>
      </ol>
      <p>
        The app may ask you to take a few actions first:
      </p>
      <ul>
        <li>
          <strong>Unfinalised matches or tournaments you own</strong> — you will need to
          complete or delete these before the deletion can proceed, because they
          are live records that other players are still participating in.
        </li>
        <li>
          <strong>Groups where you are the sole admin</strong> — if the group has an
          organiser, the app will automatically promote them to admin before
          your account is removed. If there is no organiser, you will need to
          either delete the group or add an organiser first.
        </li>
      </ul>
      <p>
        Once you have typed your username to confirm, the deletion is immediate and cannot be undone.
      </p>

      <h2>Delete by e-mail request</h2>
      <p>
        If you can no longer sign in to your account, you can request deletion
        by e-mailing us at{' '}
        <a href="mailto:TODO@example.com">TODO@example.com</a>. Please include
        the display name or username associated with the account so we can
        locate it. We will process your request within 30 days.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your Firebase Authentication record (you will no longer be able to sign in).</li>
        <li>Your Firestore profile document, including your ELO rating and match statistics.</li>
        <li>Your reserved username.</li>
        <li>Your reserved phone number (if one was linked to your account).</li>
      </ul>

      <h2>What is retained</h2>
      <p>
        Your <strong>display name</strong> is kept inside historical match and
        tournament records, because those records belong to all of the
        participants — not just you. The retained display name cannot be linked
        back to a deleted account: your profile, statistics, and login
        credentials are removed entirely.
      </p>

    </LegalLayout>
  )
}
