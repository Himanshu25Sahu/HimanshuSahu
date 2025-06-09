"use client"
import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"

const GoalsSection = () => {
  return (
    <Parallax className="parallax-section">
      <motion.div
        className="about-card goals-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="card-content">
          <h4 className="section-title">What I'm Looking For 🔍</h4>

          <div className="goals-content">
            <div className="goals-grid">
              <div className="goal-item">
                <div className="goal-icon">🌱</div>
                <div className="goal-text">
                  <h5>Growth Environment</h5>
                  <p>
                    I'm seeking opportunities where I can continue to learn and grow alongside experienced developers
                    who are passionate about their craft.
                  </p>
                </div>
              </div>

              <div className="goal-item">
                <div className="goal-icon">🛠️</div>
                <div className="goal-text">
                  <h5>Challenging Projects</h5>
                  <p>
                    I thrive when working on complex problems that push me to expand my skills and think creatively.
                  </p>
                </div>
              </div>

              <div className="goal-item">
                <div className="goal-icon">🤝</div>
                <div className="goal-text">
                  <h5>Collaborative Teams</h5>
                  <p>I value environments that foster collaboration, knowledge sharing, and diverse perspectives.</p>
                </div>
              </div>

              <div className="goal-item">
                <div className="goal-icon">💡</div>
                <div className="goal-text">
                  <h5>Innovation Focus</h5>
                  <p>
                    I'm drawn to companies that prioritize innovation and aren't afraid to explore new technologies and
                    approaches.
                  </p>
                </div>
              </div>
            </div>

            <div className="career-goals">
              <h5>Career Aspirations</h5>
              <p>
                I'm currently seeking <span className="highlight">internship opportunities in the tech field</span> where I can contribute to real-world projects, deepen my experience, and grow as a developer.
              </p>
              <p>
                I learn new technologies incredibly fast and enjoy exploring emerging tools, frameworks, and paradigms. Whether it’s a new language, stack, or domain, adapting quickly has never been a challenge for me.
              </p>
              <p>
                Long-term, I aspire to become a <span className="highlight">technical leader</span> capable of driving innovation and building scalable, impactful solutions that blend performance with usability.
              </p>
            </div>

            <div className="fun-touch">
              <h5>Beyond the Code 🎮 🎸 🏄‍♂️</h5>
              <p>
                When I'm not coding, you'll find me sketching, watching movies, or exploring the mechanics and stories of video games. These interests fuel my creativity and give me fresh perspectives to bring into tech.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Parallax>
  )
}

export default GoalsSection
