const ProjectInfo = ({ project }) => {
  return (
    <div className="project-info">
      <div className="project-header">
        <span className="project-category">{project.category}</span>
        <span className="project-duration">{project.duration}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      {project.features && project.features.length > 0 && (
        <div className="project-features">
          <h4 className="features-title">Key Features:</h4>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="project-tech">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectInfo
