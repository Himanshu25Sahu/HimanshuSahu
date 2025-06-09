"use client"

import { useState, useEffect } from "react"
import SkillCategory from "./SkillCategory.jsx"
import FloatingIcons from "./FloatingIcons.jsx"
import { skillsData } from "../../data/skillsData.js"
import "./SkillsSection.css"

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const handleScroll = () => setScrollY(window.scrollY)

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="skills" className="skills-section">
      <div className="skills-background">
        <div className="parallax-bg bg-1" style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
        <div className="parallax-bg bg-2" style={{ transform: `translateY(${scrollY * 0.4}px)` }} />
        <div className="parallax-bg bg-3" style={{ transform: `translateY(${scrollY * 0.6}px)` }} />
      </div>

      <div className="skills-container">
        <div className={`skills-header ${isVisible ? "visible" : ""}`}>
          <h2 className="skills-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="skills-subtitle">
            A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>

      <FloatingIcons />
    </section>
  )
}

export default SkillsSection
