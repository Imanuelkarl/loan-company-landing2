import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Markets from './components/Markets'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }, [])

  return (
    <div className="bg-dark-900 text-gray-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Markets />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App