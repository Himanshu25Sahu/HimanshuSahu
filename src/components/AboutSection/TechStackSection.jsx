"use client"

import { useState } from "react"
import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const techCategories = {
    frontend: [
      { name: "React", icon: "⚛️", level: 90 },
      { name: "JavaScript", icon: "📜", level: 95 },
      { name: "TypeScript", icon: "🔷", level: 85 },
      { name: "HTML/CSS", icon: "🎨", level: 92 },
      { name: "Next.js", icon: "▲", level: 88 },
      { name: "Tailwind CSS", icon: "🌊", level: 90 },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", level: 87 },
      { name: "Express", icon: "🚂", level: 85 },
      { name: "Python", icon: "🐍", level: 80 },
      { name: "Django", icon: "🎸", level: 75 },
      { name: "GraphQL", icon: "◯", level: 82 },
      { name: "REST APIs", icon: "🔄", level: 90 },
    ],
    tools: [
      { name: "Git", icon: "🔄", level: 95 },
      { name: "Docker", icon: "🐳", level: 80 },
      { name: "AWS", icon: "☁️", level: 75 },
      { name: "Figma", icon: "🎨", level: 85 },
      { name: "VS Code", icon: "📝", level: 95 },
      { name: "Terminal", icon: "💻", level: 90 },
    ],
    databases: [
      { name: "MongoDB", icon: "🍃", level: 85 },
      { name: "PostgreSQL", icon: "🐘", level: 80 },
      { name: "Firebase", icon: "🔥", level: 88 },
      { name: "Redis", icon: "🔴", level: 75 },
      { name: "Supabase", icon: "⚡", level: 82 },
      { name: "MySQL", icon: "🐬", level: 78 },
    ],
  }

  return (
    <Parallax translateY={[-5, 5]} className="parallax-section">
      <motion.div
        className="about-card tech-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="card-content">
          <h4 className="section-title">Tech I Love 💻</h4>

          <div className="tech-content">
            <div className="tech-categories">
              <button
                className={`category-btn ${activeCategory === "frontend" ? "active" : ""}`}
                onClick={() => setActiveCategory("frontend")}
              >
                Frontend
              </button>
              <button
                className={`category-btn ${activeCategory === "backend" ? "active" : ""}`}
                onClick={() => setActiveCategory("backend")}
              >
                Backend
              </button>
              <button
                className={`category-btn ${activeCategory === "tools" ? "active" : ""}`}
                onClick={() => setActiveCategory("tools")}
              >
                Tools
              </button>
              <button
                className={`category-btn ${activeCategory === "databases" ? "active" : ""}`}
                onClick={() => setActiveCategory("databases")}
              >
                Databases
              </button>
            </div>

            <div className="tech-grid">
              {techCategories[activeCategory].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="tech-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="tech-icon">{tech.icon}</div>
                  <div className="tech-info">
                    <h5>{tech.name}</h5>
                    <div className="tech-bar-container">
                      <div className="tech-bar-bg">
                        <motion.div
                          className="tech-bar-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        ></motion.div>
                      </div>
                      <span className="tech-level">{tech.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Parallax>
  )
}

export default TechStackSection
