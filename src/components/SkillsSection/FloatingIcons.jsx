const FloatingIcons = () => {
  const icons = ["⚛️", "📘", "🐍", "🐳", "☁️", "🎨", "📱", "🚀", "💻", "🔧", "⚡", "🌟"]

  return (
    <div className="floating-icons">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="floating-icon"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  )
}

export default FloatingIcons
