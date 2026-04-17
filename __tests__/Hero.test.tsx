import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

test('renders headline and store buttons', () => {
  render(<Hero />)
  expect(screen.getByText(/your padel game/i)).toBeInTheDocument()
  expect(screen.getByText('App Store')).toBeInTheDocument()
  expect(screen.getByText('Google Play')).toBeInTheDocument()
})
