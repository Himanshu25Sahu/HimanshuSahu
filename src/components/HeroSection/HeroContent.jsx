"use client"

import { useState, useEffect } from "react"

const HeroContent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = '/HimanshuSahu/himanshuSahuResume.pdf' // Path to your PDF in public folder
    link.download = 'Himanshu_Sahu_Resume.pdf' // Suggested filename for download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewWork=()=>{
    const element=document.getElementById('projects');
    if(element){
      element.scrollIntoView({
        behavior:"smooth"
      })
    }

  }

  return (
    <div className={`hero-content ${isVisible ? "visible" : ""}`}>
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="gradient-text">Himanshu Sahu</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer & Creative Technologist in Progress</p>
      </div>

      <p className="hero-description">
        Building the future with code—from scalable apps to designing a programming language. Passionate about crafting intuitive solutions that bridge technology and people.<br></br>
        Let's build the future, one line of code at a time.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary" onClick={handleViewWork}>View My Work</button>
        <button 
          className="btn-secondary"
          onClick={handleDownloadCV}
        >
          Download CV
        </button>
      </div>
    </div>
  )
}

export default HeroContent