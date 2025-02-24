import React, { useState } from "react";
import BeautyPersonalCareCard from "./BeautyPersonalCareCard";
import beautyProducts from "./BeautyPersonalCare_data";
import { filterBeautyByBrand, filterUniqueBeautyBrands } from "./BrandFilter";
import BrandButton from "./BrandButton";
import { useEffect } from "react";

const BeautyPersonalCareGallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [filteredResult, setFilteredResult] = useState(beautyProducts);

  const uniqueBrands = filterUniqueBeautyBrands(beautyProducts);
  uniqueBrands.unshift("All");

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Beauty & Personal Care Collection</h2>

      {/* Filter Buttons */}
      <div className="d-flex flex-column gap-4 my-4">
        {uniqueBrands.map((brand) => (
          <BrandButton
            key={brand}
            brandStyle={
              brand === "All" ? "btn btn-outline-primary" : "btn btn-outline-secondary"
            }
            onFilter={
              brand === "All"
                ? () => setFilteredResult(beautyProducts)
                : () => setFilteredResult(filterBeautyByBrand(beautyProducts, brand))
            }
          >
            {brand}
          </BrandButton>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="row">
        {filteredResult.map((product) => (
          <div className="col-6 col-sm-4 col-md-3 mb-4" key={product.id}>
            <BeautyPersonalCareCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyPersonalCareGallery;
