import { render, screen } from '@testing-library/react'
import LegalLayout from '@/components/LegalLayout'

test('renders title and back link', () => {
  render(<LegalLayout title="Privacy Policy"><p>Content</p></LegalLayout>)
  expect(screen.getByRole('heading', { name: 'Privacy Policy' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /back to padelo/i })).toHaveAttribute('href', '/')
})
