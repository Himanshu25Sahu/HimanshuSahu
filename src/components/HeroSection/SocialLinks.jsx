const SocialLinks = () => {
  const socialLinks = [
    { name: "GitHub", icon: "📱", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Email", icon: "📧", href: "#" },
  ]

  return (
    <div className="social-links">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.href} className="social-link" aria-label={social.name}>
          <span className="social-icon">{social.icon}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
