"use client"

import { motion } from "framer-motion"

const ActivityCard = ({ activity, index, isInView, isLeft }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      y: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  }

  const getAwardIcon = (award) => {
    switch (award?.toLowerCase()) {
      case "winner":
      case "1st place":
        return "🥇"
      case "runner-up":
      case "2nd place":
        return "🥈"
      case "3rd place":
        return "🥉"
      case "best design":
        return "🎨"
      case "best innovation":
        return "💡"
      case "people's choice":
        return "❤️"
      default:
        return "🏆"
    }
  }

  return (
    <motion.div
      className={`activity-card ${isLeft ? "left" : "right"}`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <div className="timeline-marker">
        <div className="marker-dot"></div>
        <div className="marker-year">{activity.year}</div>
      </div>

      <div className="card-content">
        <div className="activity-header">
          <div className="activity-title-section">
            <h3 className="activity-title">{activity.name}</h3>
            <div className="activity-meta">
              <span className="activity-duration">{activity.duration}</span>
              {activity.award && (
                <div className="activity-award">
                  <span className="award-icon">{getAwardIcon(activity.award)}</span>
                  <span className="award-text">{activity.award}</span>
                </div>
              )}
            </div>
          </div>
          <div className="activity-type">
            <span className="type-badge">{activity.type}</span>
          </div>
        </div>

        <div className="activity-body">
          <p className="activity-summary">{activity.summary}</p>

          <div className="activity-details">
            <div className="detail-item">
              <span className="detail-icon">👥</span>
              <span className="detail-label">Role:</span>
              <span className="detail-value">{activity.role}</span>
            </div>

            {activity.teamSize && (
              <div className="detail-item">
                <span className="detail-icon">🤝</span>
                <span className="detail-label">Team Size:</span>
                <span className="detail-value">{activity.teamSize}</span>
              </div>
            )}
          </div>

          {activity.techStack && (
            <div className="tech-stack">
              <span className="tech-label">Tech Stack:</span>
              <div className="tech-tags">
                {activity.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="key-learnings">
            <h4 className="learnings-title">Key Learnings:</h4>
            <ul className="learnings-list">
              {activity.learnings.map((learning, idx) => (
                <li key={idx} className="learning-item">
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="activity-footer">
          {activity.projectLink && (
            <motion.a
              href={activity.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-icon">🔗</span>
              View Project
            </motion.a>
          )}
          {activity.githubLink && (
            <motion.a
              href={activity.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="link-icon">📱</span>
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ActivityCard
