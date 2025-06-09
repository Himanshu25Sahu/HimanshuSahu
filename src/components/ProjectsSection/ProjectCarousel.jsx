"use client"

import { useState, useRef } from "react"

const ProjectCarousel = ({ project, isHovered }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const media = project.media || []
  const videoRefs = useRef([])

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index]
    if (!video) return

    if (video.paused) {
      video.play().catch(error => console.log("Video play failed:", error))
    } else {
      video.pause()
    }
  }

  const nextSlide = () => {
    // Pause current video before switching
    const currentVideo = videoRefs.current[currentSlide]
    if (currentVideo) currentVideo.pause()
    
    setCurrentSlide((prev) => (prev + 1) % media.length)
  }

  const prevSlide = () => {
    // Pause current video before switching
    const currentVideo = videoRefs.current[currentSlide]
    if (currentVideo) currentVideo.pause()
    
    setCurrentSlide((prev) => (prev - 1 + media.length) % media.length)
  }

  const goToSlide = (index) => {
    // Pause current video before switching
    const currentVideo = videoRefs.current[currentSlide]
    if (currentVideo) currentVideo.pause()
    
    setCurrentSlide(index)
  }

  if (media.length === 0) return null

  return (
    <div className="project-carousel">
      <div className="carousel-container">
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {media.map((item, index) => (
            <div 
              key={index} 
              className="carousel-slide"
              onClick={() => item.type === "video" && togglePlayPause(index)}
            >
              {item.type === "video" ? (
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={item.url}
                  alt={`${project.title} - ${item.type}`}
                  className="carousel-media"
                  muted={!isHovered} // Unmute when hovered (note: autoplay with sound may still be blocked)
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={item.url || "/placeholder.svg"}
                  alt={`${project.title} - ${item.type}`}
                  className="carousel-media"
                />
              )}
              {item.type === "video" && (
                <div className="media-overlay">
                  <span className="media-type">
                    {videoRefs.current[index]?.paused ? '▶' : '❚❚'}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {media.length > 1 && (
          <>
            <button className="carousel-btn carousel-prev" onClick={prevSlide}>
              ‹
            </button>
            <button className="carousel-btn carousel-next" onClick={nextSlide}>
              ›
            </button>
          </>
        )}

        {/* Dots indicator */}
        {media.length > 1 && (
          <div className="carousel-dots">
            {media.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCarousel