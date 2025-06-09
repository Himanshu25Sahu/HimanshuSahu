"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ActivityCard from "./ActivityCard.jsx"
import { activitiesData } from "../../data/activitiesData.js"
import "./ActivitiesSection.css"

const ActivitiesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="activities" ref={ref} className="activities-section">
      <div className="activities-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="activities-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="activities-header"
        >
          <h2 className="section-title">
            <span className="title-icon">⚡</span>
            Hackathons & Activities
          </h2>
          <p className="section-subtitle">Collaborative experiences where innovation meets implementation</p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="activities-grid">
            {activitiesData.map((activity, index) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                index={index}
                isInView={isInView}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="activities-stats"
        >
          <div className="stat-item">
            <div className="stat-number">12+</div>
            <div className="stat-label">Hackathons</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">Awards</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Collaborators</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">72h</div>
            <div className="stat-label">Avg Duration</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ActivitiesSection
