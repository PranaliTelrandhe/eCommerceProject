import React, { useState } from "react";
import HomeLivingCard from "./HomeLivingCard";
import homeLivingProducts from "./HomeLiving_data";
import { filterHomeLivingByBrand, filterUniqueHLBrands } from "./BrandHLfilter";
import BrandHLbutton from "./BrandHLbutton";
import { useEffect } from "react";
const HomeLivingGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [filteredResult, setFilteredResult] = useState(() => homeLivingProducts);
  const [selectedBrand, setSelectedBrand] = useState("All");

  const uniqueBrands = ["All", ...filterUniqueHLBrands(homeLivingProducts)];

  const handleFilter = (brand) => {
    setSelectedBrand(brand);
    setFilteredResult(brand === "All" ? homeLivingProducts : filterHomeLivingByBrand(homeLivingProducts, brand));
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Home & Living Collection</h2>

      {/* Brand Filter Buttons */}
      <div className="d-flex flex-wrap gap-3 justify-content-center my-4">
        {uniqueBrands.map((brand) => (
          <BrandHLbutton
            key={brand}
            brandStyle={`btn ${selectedBrand === brand ? "btn-primary" : "btn-outline-secondary"}`}
            onFilter={() => handleFilter(brand)}
          >
            {brand}
          </BrandHLbutton>
        ))}
      </div>

      {/* Grid layout */}
      <div className="row g-3">
        {filteredResult.map((product) => (
          <div className="col-6 col-sm-4 col-md-3" key={product.id}>
            <HomeLivingCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeLivingGallery;
