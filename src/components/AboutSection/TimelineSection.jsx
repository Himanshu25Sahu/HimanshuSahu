"use client"
import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2020",
      title: "First Line of Code",
      description: "Wrote my first Python code, diving into the basics of programming language and logic, laying the foundation for my tech journey.",
      icon: "🐣",
    },
    {
      year: "2021",
      title: "First Python Project",
      description: "Built my first Python project, a banking operations system integrated with database systems, mastering the art of data management.",
      icon: "🌐",
    },
    {
      year: "2022",
      title: "Started Bachelors in Computer Science and Engineering",
      description: "Began my Computer Science journey at AMC Engineering College",
      icon: "🎓",
    },
    {
      year: "2022",
      title: "Learning MERN Stack",
      description: "Started exploring the MERN stack (MongoDB, Express.js, React, Node.js), embracing full-stack development to create dynamic web applications.",
      icon: "🧩",
    },
    {
      year: "2023",
      title: "First MERN App & DSA",
      description: "Developed my first MERN application, showcasing full-stack capabilities. Began studying Data Structures and Algorithms (DSA) in parallel to sharpen problem-solving skills.",
      icon: "💼",
    },
    {
      year: "2024",
      title: "Devsphere & Machine Learning",
      description: "Strengthened DSA and development expertise while launching Devsphere, a major developer collaboration platform. Ventured into machine learning, exploring intelligent systems.",
      icon: "🚀",
    },
    {
      year: "2025",
      title: "Present: Year of Projects",
      description: "Created Townsquare, a hyperlocal community app, and AlgoViz, an interactive ML visualizer. Completed machine learning and basic NLP, started deep learning, and developed Novascript, an interpreted language with English-like syntax using C++. Currently learning TypeScript, advancing in deep learning, and strengthening DSA.",
      icon: "🤖",
    },
  ]

  return (
    <Parallax className="parallax-section">
      <motion.div
        className="about-card timeline-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="card-content">
          <h4 className="section-title">My Journey 🗺️</h4>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className="timeline-event"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-icon">{event.icon}</div>
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h5 className="timeline-title">{event.title}</h5>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Parallax>
  )
}

export default TimelineSection
