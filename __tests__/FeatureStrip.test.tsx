import { render, screen } from '@testing-library/react'
import FeatureStrip from '@/components/FeatureStrip'

test('renders all four feature headings', () => {
  render(<FeatureStrip />)
  expect(screen.getByText('Track every match')).toBeInTheDocument()
  expect(screen.getByText('Americano tournaments')).toBeInTheDocument()
  expect(screen.getByText('ELO & stats')).toBeInTheDocument()
  expect(screen.getByText('Groups & friends')).toBeInTheDocument()
})
