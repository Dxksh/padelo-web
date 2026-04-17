import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

test('renders privacy and terms links', () => {
  render(<Footer />)
  expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute('href', '/privacy')
  expect(screen.getByRole('link', { name: /terms of use/i })).toHaveAttribute('href', '/terms')
})
