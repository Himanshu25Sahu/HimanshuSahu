"use client"

import { motion } from "framer-motion"

const RealWorldProblems = ({ isInView }) => {
  const problems = [
    {
      id: 1,
      title: "Student Course Scheduling Optimization",
      problem:
        "University students struggled with course conflicts and optimal schedule planning, leading to delayed graduations and stress.",
      approach:
        "Developed an AI-powered scheduling algorithm that considers prerequisites, time conflicts, professor ratings, and student preferences.",
      outcome: "Reduced scheduling conflicts by 85% and improved student satisfaction scores by 40%.",
      technologies: ["Python", "Graph Theory", "Machine Learning", "React"],
      impact: "500+ students",
      projectLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Local Business Inventory Management",
      problem:
        "Small retail businesses were losing revenue due to overstocking and stockouts, with no efficient way to predict demand.",
      approach:
        "Built a predictive analytics system using historical sales data, seasonal trends, and external factors to optimize inventory levels.",
      outcome: "Reduced inventory costs by 30% and increased revenue by 25% through better stock management.",
      technologies: ["Node.js", "Time Series Analysis", "MongoDB", "Chart.js"],
      impact: "15+ businesses",
      projectLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Accessibility in Web Applications",
      problem:
        "Many web applications lack proper accessibility features, excluding users with disabilities from digital experiences.",
      approach:
        "Created an automated accessibility testing tool that scans websites and provides actionable recommendations for WCAG compliance.",
      outcome: "Helped 50+ websites improve their accessibility scores by an average of 60%.",
      technologies: ["JavaScript", "Web APIs", "Accessibility Standards", "Chrome Extension"],
      impact: "1000+ users",
      projectLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <motion.div
      className="real-world-problems"
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="rwp-header">
        <h3 className="rwp-title">
          <span className="rwp-icon">🌍</span>
          Real-World Problem Solving
        </h3>
        <p className="rwp-subtitle">Identifying and solving actual problems through technology</p>
      </div>

      <div className="problems-list">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.id}
            className="problem-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
            }}
          >
            <div className="problem-header">
              <h4 className="problem-title">{problem.title}</h4>
              <div className="problem-impact">
                <span className="impact-icon">👥</span>
                <span className="impact-text">{problem.impact}</span>
              </div>
            </div>

            <div className="problem-content">
              <div className="problem-section">
                <h5 className="section-title">
                  <span className="section-icon">❗</span>
                  Problem
                </h5>
                <p className="section-text">{problem.problem}</p>
              </div>

              <div className="problem-section">
                <h5 className="section-title">
                  <span className="section-icon">💡</span>
                  Approach
                </h5>
                <p className="section-text">{problem.approach}</p>
              </div>

              <div className="problem-section">
                <h5 className="section-title">
                  <span className="section-icon">✅</span>
                  Outcome
                </h5>
                <p className="section-text">{problem.outcome}</p>
              </div>
            </div>

            <div className="problem-technologies">
              <span className="tech-label">Technologies:</span>
              <div className="tech-tags">
                {problem.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="problem-actions">
              <motion.a
                href={problem.projectLink}
                className="action-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="btn-icon">🔗</span>
                View Project
              </motion.a>
              <motion.a
                href={problem.githubLink}
                className="action-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="btn-icon">📱</span>
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="problem-solving-philosophy"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="philosophy-card">
          <div className="philosophy-icon">🎯</div>
          <div className="philosophy-content">
            <h4 className="philosophy-title">Problem-Solving Philosophy</h4>
            <p className="philosophy-text">
              "I believe the best solutions come from deeply understanding the problem, empathizing with users, and
              iterating based on real feedback. Technology should serve people, not the other way around."
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default RealWorldProblems
