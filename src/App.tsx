import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Expertise from './sections/Expertise'
import Industries from './sections/Industries'
import Projects from './sections/Projects'
import WhyEMS from './sections/WhyEMS'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Industries />
        <Projects />
        <WhyEMS />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
