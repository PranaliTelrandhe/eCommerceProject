import React, { useState } from "react"; //  useState
import KidCard from "../kids/KidCard";
import kid from "../kids/Kid_data";
import { filterKidByBrand, filterUniqueBrands } from "../kids/Brand_kfilter";
import BrandKbutton from "../kids/BrandKbutton";
import { useEffect } from "react";


const KidGallery = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const [filteredResult, setFilteredResult] = useState(kid);

  const uniqueBrands = filterUniqueBrands(kid);
  uniqueBrands.unshift("All");

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Kids Collection</h2>
      
      <div className="d-flex flex-column gap-4 my-4">
        {uniqueBrands.map((brand) => (
           <BrandKbutton
           key={brand}
           brandStyle={
             brand === "All" ? "btn btn-outline-primary" : "btn btn-outline-secondary"
           }
           onFilter={
             brand === "All"
               ? () => setFilteredResult(kid)
               : () => setFilteredResult(filterKidByBrand(kid, brand))
           }
         >
           {brand}
         </BrandKbutton>
        ))}
      </div>

      {/* Grid layout with responsive breakpoints */}
      <div className="row">
        {filteredResult.map((product) => ( //Fixed from womenProducts to filteredResult
          <div className="col-6 col-sm-4 col-md-3 mb-4" key={product.id}>
            <KidCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidGallery;
