"use client"

import { useState, useEffect } from "react"
import ProjectCard from "./ProjectCard.jsx"
import CategoryFilter from "./CategoryFilter.jsx"
import { projectsData } from "../../data/projectsData.js"
import "./ProjectsSection.css"

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
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

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter((project) => project.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <section id="projects" className="projects-section">
      <div className="projects-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
      </div>

      <div className="projects-container">
        <div className={`projects-header ${isVisible ? "visible" : ""}`}>
          <h2 className="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies
          </p>
        </div>

        <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} isVisible={isVisible} />

        <div className={`projects-grid ${isVisible ? "visible" : ""}`}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
