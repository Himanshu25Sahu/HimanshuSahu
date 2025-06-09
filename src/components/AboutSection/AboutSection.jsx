"use client"

import { useEffect } from "react"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import IntroSection from "./IntroSection.jsx"
import WhoIAmSection from "./WhoIAmSection.jsx"
import WhatIBuildSection from "./WhatIBuildSection.jsx"
import DifferenceSection from "./DifferenceSection.jsx"
import TechStackSection from "./TechStackSection.jsx"
import GoalsSection from "./GoalsSection.jsx"
import TimelineSection from "./TimelineSection.jsx"
import CurrentFocusSection from "./CurrentFocusSection.jsx"
import FloatingCodeSnippets from "./FloatingCodeSnippets.jsx"
import "./AboutSection.css"

const AboutSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <ParallaxProvider>
      <section id="about" className="about-section">
        <FloatingCodeSnippets />

        <div className="about-container">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="about-header"
          >
            <h2 className="about-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="about-subtitle">The story behind the code - my journey, passions, and aspirations</p>
          </motion.div>

          <div className="about-content">
            <IntroSection />
            <WhatIBuildSection />
            <DifferenceSection />
            
            <Parallax  className="parallax-section">
              <TimelineSection />
            </Parallax>
            <Parallax  className="parallax-section">
              <CurrentFocusSection />
            </Parallax>
            <Parallax  className="parallax-section">
              <GoalsSection />
            </Parallax>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  )
}

export default AboutSection