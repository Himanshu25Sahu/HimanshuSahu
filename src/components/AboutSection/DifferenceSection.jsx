"use client";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const DifferenceSection = () => {
  return (
    <Parallax  className="parallax-section">
      <motion.div
        className="about-card difference-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: "1" }}
        transition={{ duration: "0.8 "}}
        viewport={{ once: "true "}}
      >
        <div className="card-content">
          <h4 className="section-title">What Sets Me Apart 🚀</h4>

          <div className="difference-content">
            <div className="difference-grid">
              <div className="difference-item">
                <h5>Full-Stack & ML Expertise</h5>
                <p>
                  I craft scalable, user-friendly applications with React, Node.js, and MongoDB, while leveraging TensorFlow and NLP for intelligent solutions.
                </p>
              </div>

              <div className="difference-item">
                <h5>Community-Driven Development</h5>
                <p>
                  From hyperlocal apps like Townsquare to Devsphere, I build platforms that foster collaboration and empower users.
                </p>
              </div>

              <div className="difference-item">
                <h5>Accessible Innovation</h5>
                <p>
                  Through projects like Novascript, I design intuitive tools with English-like syntax to make coding approachable for beginners.
                </p>
              </div>

              <div className="difference-item">
                <h5>Problem-Solving Mindset</h5>
                <p>
                  With 200+ coding challenges solved and 5+ hackathons attended, I thrive on tackling complex problems with clean, efficient code.
                </p>
              </div>
            </div>

            <div className="philosophy-quote">
              <p>
                "Technology should simplify lives and spark creativity, seamlessly blending innovation with human connection."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Parallax>
  );
};

export default DifferenceSection;