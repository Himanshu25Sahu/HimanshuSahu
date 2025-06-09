import SkillBar from "./SkillBar.jsx"

const SkillCategory = ({ category, index, isVisible }) => {
  return (
    <div className={`skill-category ${isVisible ? "visible" : ""}`} style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="category-card">
        <div className={`category-icon ${category.color}`}>
          <span className="icon-text">{category.title[0]}</span>
        </div>

        <h3 className="category-title">{category.title}</h3>

        <div className="skills-list">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={skillIndex}
              categoryIndex={index}
              isVisible={isVisible}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCategory
