"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import ResearchSection from "@/components/research-section"
import LanguagesSection from "@/components/languages-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import ParticleBackground from "@/components/particle-background"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <ParticleBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 transform-gpu z-50"
        style={{ scaleX }}
      />

      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ResearchSection />
        <LanguagesSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
