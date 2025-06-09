const ProjectActions = ({ project, isHovered }) => {
  return (
    <div className={`project-actions ${isHovered ? "visible" : ""}`}>
      {project.github && project.github !== "NA" && (
        <a href={project.github} className="action-btn github-btn" target="_blank" rel="noopener noreferrer">
          <span className="btn-icon"><img src="/HimanshuSahu/icons8-github.svg" alt="GitHub Icon" /></span>
          <span>Code</span>
        </a>
      )}
      {project.live && project.live !== "NA" && (
        <a href={project.live} className="action-btn live-btn" target="_blank" rel="noopener noreferrer">
          <span className="btn-icon">🌐</span>
          <span>Live Demo</span>
        </a>
      )}
    </div>
  );
};

export default ProjectActions;
