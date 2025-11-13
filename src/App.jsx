import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Documentation from './components/Documentation'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import EligibilityForm from './components/EligibilityForm'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Hero />
      <About />
      <Expertise />
      <Documentation />
      <Testimonials />
      <Process />
      <EligibilityForm />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
