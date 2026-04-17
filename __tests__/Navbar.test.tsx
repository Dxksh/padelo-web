import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

test('renders Padelo wordmark', () => {
  render(<Navbar />)
  expect(screen.getByText('Padelo')).toBeInTheDocument()
})
