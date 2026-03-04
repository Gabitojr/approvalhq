import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Eligibility from "@/components/Eligibility"
import Process from "@/components/Process"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Eligibility />
      <Process />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </>
  )
}
