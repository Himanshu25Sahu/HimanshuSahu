import { statsData } from "../../data/statsData.js"

const StatsGrid = ({ isVisible }) => {
  return (
    <div className={`stats-grid ${isVisible ? "visible" : ""}`}>
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`stat-card ${isVisible ? "visible" : ""}`}
          style={{ animationDelay: `${0.8 + index * 0.1}s` }}
        >
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatsGrid
