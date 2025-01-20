import React, { useState, useEffect } from "react";
import "./CategoryToBag.css";
import MenList from "../men/MenList";

const CategoryToBag = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories (Mock API)
  useEffect(() => {
    const fetchCategories = async () => {
      // Replace with API call if needed
      const categoryData = [
        { id: 1, name: "Men", image: "../assets/images/catmen.jpg"  },
        { id: 2, name: "Women", image:"../assets/images/catwomen.jpg" },
        { id: 3, name: "Kids", image: "../assets/images/catkid.jpg" },
        { id: 4, name: "Home & Living", image: "../assets/images/cathome.jpg" },
        { id: 5, name: "Beauty & Personal Care", image: "../assets/images/catbeauty.jpg" },
      
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
