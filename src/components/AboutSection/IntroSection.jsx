"use client"
import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"

const IntroSection = () => {
  return (
    <Parallax className="parallax-section">
      <motion.div
        className="about-card intro-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="card-content">
          <h3 className="section-title">Hello, World! 👋</h3>
          <div className="intro-hook">
            <p className="large-text">
              I transform <span className="highlight">ideas</span> into <span className="highlight">interactive</span>{" "}
              experiences through code.
            </p>
          </div>

          <div className="divider"></div>

          <div className="who-i-am">
  <h4 className="subsection-title">Who I Am</h4>
  <p>
    I'm a Computer Science student at <span className="highlight">AMC Engineering College</span>, currently in my final years of study with a strong focus on full-stack development and machine learning. I'm deeply passionate about building intuitive, scalable systems that solve real-world problems and create meaningful user experiences.
  </p>
  <p>
    My journey includes developing robust applications using the MERN stack, crafting an interpreted programming language, and creating ML-powered tools for interactive learning. With 200+ coding problems solved and multiple hackathons under my belt, I thrive on solving challenges and collaborating in high-energy environments.
  </p>
</div>

        </div>
      </motion.div>
    </Parallax>
  )
}

export default IntroSection
