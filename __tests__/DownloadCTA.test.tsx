import { render, screen } from '@testing-library/react'
import DownloadCTA from '@/components/DownloadCTA'

test('renders CTA headline and store buttons', () => {
  render(<DownloadCTA />)
  expect(screen.getByText(/ready to play smarter/i)).toBeInTheDocument()
  expect(screen.getByText('App Store')).toBeInTheDocument()
  expect(screen.getByText('Google Play')).toBeInTheDocument()
})
