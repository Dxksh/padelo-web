import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeatureStrip from '@/components/FeatureStrip'
import HowItWorks from '@/components/HowItWorks'
import DownloadCTA from '@/components/DownloadCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <HowItWorks />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
