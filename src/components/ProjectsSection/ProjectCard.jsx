"use client"

import { useState } from "react"
import ProjectCarousel from "./ProjectCarousel.jsx"
import ProjectInfo from "./ProjectInfo.jsx"
import ProjectActions from "./ProjectActions.jsx"

const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`project-card ${isVisible ? "visible" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card-inner">
        <ProjectCarousel project={project} isHovered={isHovered} />
        <ProjectInfo project={project} />
        <ProjectActions project={project} isHovered={isHovered} />
      </div>
    </div>
  )
}

export default ProjectCard
