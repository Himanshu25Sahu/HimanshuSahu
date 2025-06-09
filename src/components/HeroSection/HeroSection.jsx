"use client"

import { useState, useEffect } from "react"
import ParallaxBackground from "./ParallaxBackground.jsx"
import HeroContent from "./HeroContent.jsx"
import SocialLinks from "./SocialLinks.jsx"
import ScrollIndicator from "./ScrollIndicator.jsx"
import "./HeroSection.css"

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="home" className="hero-section">
      <ParallaxBackground scrollY={scrollY} mousePosition={mousePosition} />
      <div className="hero-container">
        <HeroContent />
        
        <ScrollIndicator />
      </div>
    </section>
  )
}

export default HeroSection
