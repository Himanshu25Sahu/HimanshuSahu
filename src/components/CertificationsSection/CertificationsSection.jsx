"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import CertificationCard from "./CertificationCard.jsx"
import { certificationsData } from "../../data/certificationsData.js"
import "./CertificationsSection.css"

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const carouselRef = useRef(null)

  const totalCertifications = certificationsData.length
  const visibleCards = 3 // Number of cards visible at once on desktop

  useEffect(() => {
    if (!isAutoPlaying || isDragging) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCertifications)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isDragging, totalCertifications])

  const handleDragStart = () => {
    setIsDragging(true)
    setIsAutoPlaying(false)
  }

  const handleDragEnd = (event, info) => {
    setIsDragging(false)
    const threshold = 50

    if (info.offset.x > threshold) {
      setCurrentIndex((prev) => (prev - 1 + totalCertifications) % totalCertifications)
    } else if (info.offset.x < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % totalCertifications)
    }

    setTimeout(() => setIsAutoPlaying(true), 2000)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCertifications)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCertifications) % totalCertifications)
  }

  return (
    <section id="certifications" ref={ref} className="certifications-section">
      <div className="certifications-background">
        <div className="bg-gradient bg-gradient-1"></div>
        <div className="bg-gradient bg-gradient-2"></div>
      </div>

      <div className="certifications-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="certifications-header"
        >
          <h2 className="section-title">
            <span className="title-icon">🏆</span>
            Certifications
          </h2>
          <p className="section-subtitle">Professional certifications and achievements that validate my expertise</p>
        </motion.div>

        <div className="carousel-container">
          <button className="carousel-nav carousel-nav-prev" onClick={prevSlide} aria-label="Previous certification">
            ‹
          </button>

          <motion.div
            ref={carouselRef}
            className="carousel-track"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={{
              x: `-${(currentIndex * 100) / visibleCards}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              width: `${(totalCertifications * 100) / visibleCards}%`,
            }}
          >
            {certificationsData.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                certification={cert}
                index={index}
                isInView={isInView}
                isActive={index === currentIndex}
              />
            ))}
          </motion.div>

          <button className="carousel-nav carousel-nav-next" onClick={nextSlide} aria-label="Next certification">
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {certificationsData.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-controls">
          <button
            className={`control-btn ${isAutoPlaying ? "active" : ""}`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? "⏸️" : "▶️"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
