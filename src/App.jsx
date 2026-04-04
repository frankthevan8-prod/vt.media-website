import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Team from './components/Team.jsx'
import OriginStory from './components/OriginStory.jsx'
import WhyUs from './components/WhyUs.jsx'
import FreeAudit from './components/FreeAudit.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-vt-black text-white min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Team />
        <OriginStory />
        <WhyUs />
        <FreeAudit />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
