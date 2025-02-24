import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryToBag.css";

const CategoryToBag = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const categoryData = [
      { id: 1, name: "Men", image:"../assets/images/catmen.jpg",
         path: "/men" },
      { id: 2, name: "Women", image:"../assets/images/catwomen.jpg"
        , path: "/women" },
      { id: 3, name: "Kids", image:"../assets/images/catkid.jpg"
      , path: "/kids" },
      { id: 4, name: "Home & Living", image:"../assets/images/cathome.jpg"
      , path: "/home-living" },
      { id: 5, name: "Beauty & Personal Care", image:"../assets/images/catbeauty.jpg"
      , path: "/beauty-personal-care" },
    ];
    setCategories(categoryData);
  }, []);

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="category-slider">
      <h2>Categories To Bag</h2>
      <div className="slider-container">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.path)}
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryToBag;
