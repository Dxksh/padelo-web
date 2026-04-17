import { render, screen } from '@testing-library/react'
import HowItWorks from '@/components/HowItWorks'

test('renders all three step titles', () => {
  render(<HowItWorks />)
  expect(screen.getByText('Create')).toBeInTheDocument()
  expect(screen.getByText('Score')).toBeInTheDocument()
  expect(screen.getByText('Stats')).toBeInTheDocument()
})
