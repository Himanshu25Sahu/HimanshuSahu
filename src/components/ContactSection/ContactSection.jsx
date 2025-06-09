"use client"

import { useState, useEffect } from "react"
import "./ContactSection.css"

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background">
        <div className="animated-bg bg-1"></div>
        <div className="animated-bg bg-2"></div>
      </div>

      <div className="contact-container">
        <div className={`contact-header ${isVisible ? "visible" : ""}`}>
          <h2 className="contact-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact-subtitle">
            I'd love to hear from you! Reach out through any of these channels and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className={`contact-methods-container ${isVisible ? "visible" : ""}`}>
          <div className="contact-methods-grid">
            {/* Email */}
            <a href="mailto:himpreetak@gmail.com" className="contact-card email-card">
              <div className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="contact-card-title">Email</h3>
              <p className="contact-card-detail">himpreetak@gmail.com</p>
              <div className="contact-card-hover">
                <span>Send me an email</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/himanshu-sahu-303b2b25a/" target="_blank" rel="noopener noreferrer" className="contact-card linkedin-card">
              <div className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <h3 className="contact-card-title">LinkedIn</h3>
              <p className="contact-card-detail">linkedin.com/in/himanshu-sahu-303b2b25a/</p>
              <div className="contact-card-hover">
                <span>Connect with me</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+919886467724" className="contact-card phone-card">
              <div className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="contact-card-title">Phone</h3>
              <p className="contact-card-detail">+91 9886467724</p>
              <div className="contact-card-hover">
                <span>Call me</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection