"use client"

import { motion } from "framer-motion"

const CertificationCard = ({ certification, index, isInView, isActive }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  }

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className={`certification-card ${isActive ? "active" : ""}`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      variants={{ ...cardVariants, ...hoverVariants }}
    >
      <div className="card-inner">
        <div className="cert-header">
          <div className="cert-logo">
            <img
              src={certification.logo || "/placeholder.svg?height=60&width=60"}
              alt={`${certification.organization} logo`}
              className="logo-image"
            />
          </div>
          <div className="cert-badge">
            <span className="badge-icon">✓</span>
          </div>
        </div>

        <div className="cert-content">
          <h3 className="cert-title">{certification.title}</h3>
          <p className="cert-organization">{certification.organization}</p>
          {certification.date && <p className="cert-date">{certification.date}</p>}
          {certification.skills && (
            <div className="cert-skills">
              {certification.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        <motion.div
          className="cert-actions"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="view-cert-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-icon">🔗</span>
            View Certificate
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CertificationCard
