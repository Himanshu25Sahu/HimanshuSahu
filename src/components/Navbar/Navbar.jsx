"use client"
import "./Navbar.css"

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const navItems = ["home", "projects", "skills", "about", "contact"]

  return (
    <nav className="navbar">
      <div className="nav-container">
        {navItems.map((item) => (
          <button key={item} onClick={() => scrollToSection(item)} className="nav-item">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
