"use client"
import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"

const CurrentFocusSection = () => {
  const focusAreas = [
    {
      title: "Advanced TypeScript",
      description: "Diving deep into generics, utility types, type-level programming, and scalable code architecture.",
      progress: 70,
      icon: "🔷",
    },
    {
      title: "Deep Learning & NLP",
      description: "Exploring Differnet Neural Network architectures, LLM fine-tuning, embeddings, and advanced NLP workflows.",
      progress: 55,
      icon: "🧠",
    },
    {
      title: "Performance-Centric Development",
      description: "Learning how to architect lightning-fast applications with optimal memory and CPU efficiency.",
      progress: 60,
      icon: "⚡",
    },
  ]

  return (
    <Parallax className="parallax-section">
      <motion.div
        className="about-card focus-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="card-content">
          <h4 className="section-title">Current Focus 🎯</h4>

          <div className="focus-content">
            <p className="focus-intro">
              I'm currently sharpening my skills across cutting-edge technologies and concepts to become a more well-rounded engineer:
            </p>

            <div className="focus-grid">
              {focusAreas.map((focus, index) => (
                <motion.div
                  key={index}
                  className="focus-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="focus-header">
                    <div className="focus-icon">{focus.icon}</div>
                    <h5>{focus.title}</h5>
                  </div>
                  <p>{focus.description}</p>
                  <div className="focus-progress">
                    <div className="progress-label">Progress</div>
                    <div className="progress-bar-container">
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${focus.progress}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <span className="progress-percentage">{focus.progress}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="learning-resources">
              <h5>Learning Resources</h5>
              <div className="resources-list">
                <div className="resource-item">
                  <span className="resource-icon">📚</span>
                  <span>Books & Official Docs</span>
                </div>
                <div className="resource-item">
                  <span className="resource-icon">🎓</span>
                  <span>Interactive Courses</span>
                </div>
                <div className="resource-item">
                  <span className="resource-icon">👨‍💻</span>
                  <span>Real-world Projects</span>
                </div>
                <div className="resource-item">
                  <span className="resource-icon">🧪</span>
                  <span>Open Source & Experiments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Parallax>
  )
}

export default CurrentFocusSection
