"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  const scrollSpyActive = useScrollSpy(["about", "experience", "skills", "contact"])

  useEffect(() => {
    setActiveSection(scrollSpyActive)
  }, [scrollSpyActive])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <Hero />

        <div className="py-20">
          <div className="space-y-32">
            {/* About Section */}
            <div id="about" className="scroll-mt-32 animate-fade-in">
              <About />
              <div className="mt-32 h-px bg-gradient-to-r from-border via-border to-transparent" />
            </div>

            {/* Experience Section */}
            <div id="experience" className="scroll-mt-32 animate-fade-in">
              <Experience />
              <div className="mt-32 h-px bg-gradient-to-r from-border via-border to-transparent" />
            </div>

            {/* Skills Section */}
            <div id="skills" className="scroll-mt-32 animate-fade-in">
              <Skills />
              <div className="mt-32 h-px bg-gradient-to-r from-border via-border to-transparent" />
            </div>

            {/* Contact Section */}
            <div id="contact" className="scroll-mt-32 animate-fade-in">
              <Contact />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
