"use client"
import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"

const WhatIBuildSection = () => {
  return (
    <Parallax className="parallax-section">
      <motion.div
        className="about-card build-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="card-content">
          <h4 className="section-title">What I Build 🚀</h4>

          <div className="build-content">
            <p>
              I engineer <span className="highlight">end-to-end applications</span>, explore 
              <span className="highlight"> systems-level programming</span>, and integrate 
              <span className="highlight"> machine learning</span> to create meaningful and educational software.
            </p>

            <div className="build-stack">
              {/* Full-Stack Development */}
              <div className="stack-item">
                <div className="stack-icon">🌐</div>
                <div className="stack-text">
                  <h5>Full-Stack Development</h5>
                  <p>
                    Building production-grade apps using React.js, Node.js, Express.js, and MongoDB. From real-time 
                    chat (Socket.io) to collaboration platforms and educational tools, I focus on scalable architecture 
                    and smooth user experience.
                  </p>
                </div>
              </div>

              {/* Systems Programming */}
              <div className="stack-item">
                <div className="stack-icon">💻</div>
                <div className="stack-text">
                  <h5>Systems Programming</h5>
                  <p>
                    Writing performant C++ code for language design and interpreters. I'm currently building 
                    <strong> Novascript</strong>—an interpreted language with an English-like syntax to make programming more intuitive 
                    and beginner-friendly on the web.
                  </p>
                </div>
              </div>

              {/* AI & ML */}
              <div className="stack-item">
                <div className="stack-icon">🧠</div>
                <div className="stack-text">
                  <h5>AI & Machine Learning</h5>
                  <p>
                    Crafting ML-powered tools and visualizers using Python, TensorFlow, NLTK, and Flask. My projects 
                    demystify core ML concepts with real-time interactivity and accessible NLP interfaces.
                  </p>
                </div>
              </div>
            </div>

            <p className="passion-statement">
              I love solving real-world problems by combining thoughtful UI, solid architecture, and intelligent logic—making software feel both powerful and approachable.
            </p>
          </div>
        </div>
      </motion.div>
    </Parallax>
  )
}

export default WhatIBuildSection
