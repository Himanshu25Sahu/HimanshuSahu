const PersonalInfo = ({ isVisible }) => {
  const personalDetails = [
    { icon: "📍", text: "San Francisco, CA" },
    { icon: "📅", text: "Available for new opportunities" },
    { icon: "☕", text: "Fueled by coffee and curiosity" },
  ]

  return (
    <div className={`personal-info ${isVisible ? "visible" : ""}`}>
      <div className="profile-image">
        <img src="/placeholder.svg?height=400&width=400" alt="Alex Chen" className="profile-img" />
        <div className="image-overlay"></div>
      </div>

      <div className="personal-details">
        {personalDetails.map((detail, index) => (
          <div key={index} className="detail-item">
            <span className="detail-icon">{detail.icon}</span>
            <span className="detail-text">{detail.text}</span>
          </div>
        ))}
      </div>

      <p className="personal-description">
        I'm a passionate full-stack developer with over 3 years of experience creating digital solutions that make a
        difference. I love working with cutting-edge technologies and turning complex problems into simple, beautiful
        designs. When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
        or enjoying a good cup of coffee.
      </p>
    </div>
  )
}

export default PersonalInfo
