import BenefitsSecondSection from './components/BenefitsSecondSection'
import BenefitsSection from './components/BenefitsSection'
import CallToActionSection from './components/CallToActionSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorksSecondSection from './components/HowItWorksSecondSection'
import HowItWorksSection from './components/HowItWorksSection'
import PricingSection from './components/PricingSection'
import SuccessStorieSection from './components/SuccessStorieSection'
import SuccessStorieSection2 from './components/SuccessStorieSection2'
import TestimonialsSection from './components/TestimonialsSection'

function App() {

  return (
    <>
      <div className='relative flex flex-col overflow-visible'>
        <Header />
        <HeroSection />
        <BenefitsSection />
        <BenefitsSecondSection />
        <HowItWorksSection />
        <HowItWorksSecondSection />
        <SuccessStorieSection />
        <SuccessStorieSection2 />
        <TestimonialsSection />
        <PricingSection />
        <CallToActionSection />
        <Footer />
      </div>
      
    </>
  )
}

export default App
