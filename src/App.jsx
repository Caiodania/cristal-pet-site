import Header from './components/Header'
import Hero from './components/Hero'
import BenefitsCards from './components/BenefitsCards'
import TrustSection from './components/TrustSection'
import Services from './components/Services'
import CtaBanner from './components/CtaBanner'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import CoverageArea from './components/CoverageArea'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitsCards />
        <TrustSection />
        <Services />
        <CtaBanner />
        <About />
        <HowItWorks />
        <Contact />
        <CoverageArea />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
