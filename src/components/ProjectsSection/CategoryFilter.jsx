"use client"

const CategoryFilter = ({ activeCategory, setActiveCategory, isVisible }) => {
  const categories = ["All", "Full Stack", "Frontend", "Machine Learning", "Systems Programming"]

  return (
    <div className={`category-filter ${isVisible ? "visible" : ""}`}>
      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
