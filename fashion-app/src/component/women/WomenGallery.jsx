import React, { useState } from "react"; //  useState
import WomenCard from "./WomenCard";
import women from "./women_data";
import { filterWomenByBrand, filterUniqueBrands } from "../women/Brand_wfilter";
import BrandWbutton from "../women/BrandWbutton";
import { useEffect } from "react";

const WomenGallery = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filteredResult, setFilteredResult] = useState(women);

  const uniqueBrands = filterUniqueBrands(women);
  uniqueBrands.unshift("All");

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Women Collection</h2>
      
      <div className="d-flex flex-column gap-4 my-4">
        {uniqueBrands.map((brand) => (
          <BrandWbutton
            key={brand}
            brandStyle={
              brand === "All" ? "btn btn-outline-primary" : "btn btn-outline-secondary"
            }
            onFilter={
              brand === "All"
                ? () => setFilteredResult(women)
                : () => setFilteredResult(filterWomenByBrand(women, brand))
            }
          >
            {brand}
          </BrandWbutton>
        ))}
      </div>

      {/* Grid layout with responsive breakpoints */}
      <div className="row">
        {filteredResult.map((product) => ( //Fixed from womenProducts to filteredResult
          <div className="col-6 col-sm-4 col-md-3 mb-4" key={product.id}>
            <WomenCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenGallery;
