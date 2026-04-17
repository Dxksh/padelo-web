import { render, screen } from '@testing-library/react'
import StoreButtons from '@/components/StoreButtons'

describe('StoreButtons', () => {
  it('renders App Store and Google Play links', () => {
    render(<StoreButtons variant="dark" />)
    expect(screen.getByText('App Store')).toBeInTheDocument()
    expect(screen.getByText('Google Play')).toBeInTheDocument()
  })

  it('applies light background when variant is light', () => {
    render(<StoreButtons variant="light" />)
    const links = screen.getAllByRole('link')
    expect(links[0]).toHaveClass('bg-white')
  })
})
