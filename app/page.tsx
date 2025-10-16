"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollSpyActive = useScrollSpy(["about", "experience", "skills", "contact"])

  useEffect(() => {
    setActiveSection(scrollSpyActive)
  }, [scrollSpyActive])

  const scrollToSection = (sectionId: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      about: aboutRef,
      experience: experienceRef,
      skills: skillsRef,
      contact: contactRef,
    }
    refs[sectionId].current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 py-20">
          <aside className="lg:col-span-1">
            <nav className="sticky top-32 space-y-8">
              <div className="space-y-6">
                {[
                  { id: "about", label: "ABOUT" },
                  { id: "experience", label: "EXPERIENCE" },
                  { id: "skills", label: "SKILLS" },
                  { id: "contact", label: "CONTACT" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block text-sm tracking-widest transition-all duration-300 relative group ${
                      activeSection === item.id
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-foreground transition-all duration-300 ${
                        activeSection === item.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </aside>

          <div className="lg:col-span-3 space-y-32">
            {/* About Section */}
            <div ref={aboutRef} id="about" className="scroll-mt-32 animate-fade-in">
              <About />
              <div className="mt-32 h-px bg-gradient-to-r from-border via-border to-transparent" />
            </div>

            {/* Experience Section */}
            <div ref={experienceRef} id="experience" className="scroll-mt-32 animate-fade-in">
              <Experience />
              <div className="mt-32 h-px bg-gradient-to-r from-border via-border to-transparent" />
            </div>

            {/* Skills Section */}
            <div ref={skillsRef} id="skills" className="scroll-mt-32 animate-fade-in">
              <Skills />
              <div className="mt-32 h-px bg-gradient-to-r from-border via-border to-transparent" />
            </div>

            {/* Contact Section */}
            <div ref={contactRef} id="contact" className="scroll-mt-32 animate-fade-in">
              <Contact />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-32 py-16 bg-gradient-to-b from-background to-muted/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Statement */}
            <div className="space-y-4">
              <h4 className="text-sm font-light tracking-widest text-foreground">ABOUT</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                10年以上の開発経験を持つシニアエンジニア。モバイル・IoT・ヘルスケア領域での実績多数。
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-light tracking-widest text-foreground">CONNECT</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:zl282145321@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <h4 className="text-sm font-light tracking-widest text-foreground">COLLABORATE</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                新しいプロジェクトや協業の機会をお探しですか？お気軽にお問い合わせください。
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <p>© 2025 朱凱. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Designed with simplicity and elegance in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
