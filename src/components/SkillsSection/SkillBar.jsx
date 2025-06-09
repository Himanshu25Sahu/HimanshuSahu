const SkillBar = ({ skill, index, categoryIndex, isVisible, color }) => {
  const animationDelay = categoryIndex * 0.2 + index * 0.1 + 0.5

  return (
    <div className={`skill-item ${isVisible ? "visible" : ""}`} style={{ animationDelay: `${animationDelay}s` }}>
      <div className="skill-header">
        <div className="skill-info">
          <span className="skill-icon">{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
        </div>
        <span className="skill-percentage">{skill.level}%</span>
      </div>

      <div className="skill-bar-container">
        <div
          className={`skill-bar ${color}`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${animationDelay}s`,
          }}
        >
          <div className="skill-bar-glow"></div>
        </div>
      </div>
    </div>
  )
}

export default SkillBar
