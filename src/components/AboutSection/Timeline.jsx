import { timelineData } from "../../data/timelineData.js"

const Timeline = ({ isVisible }) => {
  return (
    <div className={`timeline-section ${isVisible ? "visible" : ""}`}>
      <h3 className="timeline-title">My Journey</h3>
      <div className="timeline">
        <div className="timeline-line"></div>

        <div className="timeline-items">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="timeline-icon">
                <span className="icon-emoji">{item.icon}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4 className="timeline-item-title">{item.title}</h4>
                  <span className="timeline-year">{item.year}</span>
                </div>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
