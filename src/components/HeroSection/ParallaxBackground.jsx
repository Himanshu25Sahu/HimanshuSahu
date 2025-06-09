const ParallaxBackground = ({ scrollY, mousePosition }) => {
  const parallaxOffset1 = scrollY * 0.5
  const parallaxOffset2 = scrollY * 0.3
  const parallaxOffset3 = scrollY * 0.7

  return (
    <div className="parallax-background">
      {/* Main gradient background */}
      <div
        className="gradient-bg"
        style={{
          transform: `translateY(${parallaxOffset1}px)`,
          background: `linear-gradient(135deg, 
            hsl(${280 + mousePosition.x * 0.5}, 70%, 25%) 0%, 
            hsl(${240 + mousePosition.y * 0.3}, 80%, 30%) 50%, 
            hsl(${220 + mousePosition.x * 0.2}, 75%, 35%) 100%)`,
        }}
      />

      {/* Floating shapes with enhanced parallax */}
      <div
        className="floating-shape shape-1"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1 + parallaxOffset2}px) rotate(${scrollY * 0.1}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.2})`,
        }}
      />
      <div
        className="floating-shape shape-2"
        style={{
          transform: `translate(${-mousePosition.x * 0.05}px, ${-mousePosition.y * 0.05 + parallaxOffset3}px) rotate(${-scrollY * 0.15}deg) scale(${0.8 + Math.cos(scrollY * 0.008) * 0.2})`,
        }}
      />
      <div
        className="floating-shape shape-3"
        style={{
          transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08 + parallaxOffset1}px) rotate(${scrollY * 0.2}deg)`,
        }}
      />

      {/* Additional parallax layers */}
      <div className="parallax-layer layer-1" style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
      <div className="parallax-layer layer-2" style={{ transform: `translateY(${scrollY * 0.4}px)` }} />
    </div>
  )
}

export default ParallaxBackground
