import React, { useState, useEffect } from "react";
import "./CategoryToBag.css";

const CategoryToBag = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories (Mock API)
  useEffect(() => {
    const fetchCategories = async () => {
      // Replace with API call if needed
      const categoryData = [
        { id: 1, name: "Men", image: "https://via.placeholder.com/200x200?" },
        { id: 2, name: "Women", image: "https://via.placeholder.com/200x200?" },
        { id: 3, name: "Kids", image: "https://via.placeholder.com/200x200?" },
        { id: 4, name: "", image: "https://via.placeholder.com/200x200?text" },
        { id: 5, name: "", image: "https://via.placeholder.com/200x200?text" },
        { id: 6, name: "", image: "https://via.placeholder.com/200x200?text" },
      ];
      setCategories(categoryData);
    };

    fetchCategories();
  }, []);

  // Handle category click
  const handleCategoryClick = (categoryName) => {
    alert(`You clicked on ${categoryName}!`);
    // Navigate to category-specific page or load data
  };

  return (
    <div className="category-slider">
      <h2>Categories To Bag</h2>
      <div className="slider-container">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryToBag;
