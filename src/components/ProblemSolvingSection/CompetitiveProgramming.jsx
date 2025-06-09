"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const CompetitiveProgramming = ({ isInView }) => {
  const [animatedStats, setAnimatedStats] = useState({
    leetcode: 0,
    codeforces: 0,
    hackerrank: 0,
    streak: 0,
  })

  const finalStats = {
    leetcode: 450,
    codeforces: 1200,
    hackerrank: 85,
    streak: 127,
  }

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedStats({
        leetcode: Math.floor(finalStats.leetcode * progress),
        codeforces: Math.floor(finalStats.codeforces * progress),
        hackerrank: Math.floor(finalStats.hackerrank * progress),
        streak: Math.floor(finalStats.streak * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setAnimatedStats(finalStats)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView])

  const platforms = [
    {
      name: "LeetCode",
      icon: "🟠",
      problems: animatedStats.leetcode,
      total: "500+",
      rank: "Knight",
      color: "#ffa116",
      achievements: ["Daily Challenge Streak", "Contest Participant", "Problem Setter"],
    },
    {
      name: "Codeforces",
      icon: "🔵",
      problems: animatedStats.codeforces,
      total: "Rating",
      rank: "Specialist",
      color: "#1976d2",
      achievements: ["Div 2 Participant", "Problem Solver", "Contest Regular"],
    },
    {
      name: "HackerRank",
      icon: "🟢",
      problems: animatedStats.hackerrank,
      total: "100",
      rank: "5 Star",
      color: "#00ea64",
      achievements: ["Algorithm Expert", "Data Structure Pro", "SQL Master"],
    },
  ]

  return (
    <motion.div
      className="competitive-programming"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="cp-header">
        <h3 className="cp-title">
          <span className="cp-icon">⚔️</span>
          Competitive Programming
        </h3>
        <p className="cp-subtitle">Sharpening algorithmic thinking through challenges</p>
      </div>

      <div className="platforms-grid">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            className="platform-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 20px 40px ${platform.color}20`,
            }}
          >
            <div className="platform-header">
              <div className="platform-info">
                <span className="platform-icon">{platform.icon}</span>
                <span className="platform-name">{platform.name}</span>
              </div>
              <div className="platform-rank" style={{ color: platform.color }}>
                {platform.rank}
              </div>
            </div>

            <div className="platform-stats">
              <div className="stat-main">
                <div className="stat-number" style={{ color: platform.color }}>
                  {platform.problems}
                </div>
                <div className="stat-label">{platform.name === "Codeforces" ? "Rating" : "Problems Solved"}</div>
              </div>
            </div>

            <div className="platform-achievements">
              {platform.achievements.map((achievement, idx) => (
                <div key={idx} className="achievement-badge">
                  <span className="badge-icon">🏆</span>
                  <span className="badge-text">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="streak-section"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="streak-card">
          <div className="streak-icon">🔥</div>
          <div className="streak-content">
            <div className="streak-number">{animatedStats.streak}</div>
            <div className="streak-label">Day Coding Streak</div>
            <div className="streak-description">Consistent daily practice across multiple platforms</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="skills-developed"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <h4 className="skills-title">Skills Developed</h4>
        <div className="skills-grid">
          {[
            "Dynamic Programming",
            "Graph Algorithms",
            "Data Structures",
            "Greedy Algorithms",
            "Binary Search",
            "Tree Traversal",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CompetitiveProgramming
