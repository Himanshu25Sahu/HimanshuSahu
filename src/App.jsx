"use client"

import { useEffect } from "react"
import Navbar from "./components/Navbar/Navbar.jsx"
import HeroSection from "./components/HeroSection/HeroSection.jsx"
import ProjectsSection from "./components/ProjectsSection/ProjectsSection.jsx"
import SkillsSection from "./components/SkillsSection/SkillsSection.jsx"
import AboutSection from "./components/AboutSection/AboutSection.jsx"
import ContactSection from "./components/ContactSection/ContactSection.jsx"
import Footer from "./components/Footer/Footer.jsx"
import "./App.css"

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
