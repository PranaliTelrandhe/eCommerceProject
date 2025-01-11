import React, { useState, useEffect } from "react";
import "./BrandPortfolio.css";

const BrandPortfolio = () => {
  // State  hold brand data
  const [brands, setBrands] = useState([]);

  // Simulate fetching brand data
  useEffect(() => {
    const fetchBrands = async () => {
      const topBrands = [
        { id: 1, name: "H&M",  logo: "../assets/images/brand1.jpg", description: "Min 60-70% Off" },
        { id: 2, name: "Levi's", logo: "", description: "Min 40% Off" },
        { id: 3, name: "Nike", logo: "", description: "" },
        { id: 4, name: "Adidas", logo: "", description: "" },
        { id: 5, name: "Zara", logo: "", description: "" },
        { id: 6, name: "Puma", logo: "", description: "" },
        { id: 7, name: "Biba", logo: "", description: "" },
        { id: 8, name: "FabIndia", logo: "", description: "" },
        
      ];

      // API call 
      setTimeout(() => {
        setBrands(topBrands);
      }, 1000);
    };

    fetchBrands();
  }, []);

  return (
    <div className="portfolio-container">
      <h1>Top Clothing Brands </h1>
      {brands.length === 0 ? (
        <p>Loading brands...</p>
      ) : (
        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-card">
              <img src={brand.logo} alt={`${brand.name} logo`} className="brand-logo" />
              <h2>{brand.name}</h2>
              <p>{brand.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandPortfolio;
