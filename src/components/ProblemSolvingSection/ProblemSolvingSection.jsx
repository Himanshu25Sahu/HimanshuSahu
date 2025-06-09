"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CompetitiveProgramming from "./CompetitiveProgramming.jsx"
import RealWorldProblems from "./RealWorldProblems.jsx"
import "./ProblemSolvingSection.css"

const ProblemSolvingSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="problem-solving" ref={ref} className="problem-solving-section">
      <div className="section-background">
        <div className="code-pattern"></div>
        <div className="algorithm-visual"></div>
      </div>

      <div className="problem-solving-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            <span className="title-icon">🧠</span>
            Problem Solving & Challenges
          </h2>
          <p className="section-subtitle">From algorithmic challenges to real-world solutions</p>
        </motion.div>

        <div className="content-grid">
          <CompetitiveProgramming isInView={isInView} />
          <RealWorldProblems isInView={isInView} />
        </div>
      </div>
    </section>
  )
}

export default ProblemSolvingSection
