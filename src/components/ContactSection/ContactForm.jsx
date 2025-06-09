"use client"

import { useState } from "react"

const ContactForm = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className={`contact-form-container ${isVisible ? "visible" : ""}`}>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder=" "
            />
            <label className="form-label">Your Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder=" "
            />
            <label className="form-label">Your Email</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="form-input"
            placeholder=" "
          />
          <label className="form-label">Subject</label>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="form-textarea"
            placeholder=" "
          />
          <label className="form-label">Your Message</label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={`submit-btn ${isSubmitted ? "success" : isSubmitting ? "loading" : ""}`}
        >
          {isSubmitted ? (
            <>
              <span>✓</span>
              <span>Message Sent!</span>
            </>
          ) : isSubmitting ? (
            <>
              <div className="spinner"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>📤</span>
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
