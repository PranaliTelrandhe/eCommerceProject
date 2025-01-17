import { useState } from "react";
import men from "../database/men_data";
import { filterMenByBrand, filterUniqueBrands } from "../men/Brand_filter";
import MenItem from "./MenItem";
import BrandButton from "./BrandButton";

const MenList = () => {
  const [filteredResult, setFilteredResult] = useState(men);

  const uniqueBrands = filterUniqueBrands(men);
  uniqueBrands.unshift("All");

  return (
    <div className="d-flex gap-2 m-2">
      <div className="d-flex flex-column gap-2">
        {uniqueBrands.map(brand => (
          <BrandButton
            key={brand}
            brandStyle={brand === "All" ? "btn btn-outline-primary" : "btn btn-outline-secondary"}
            onFilter={brand === "All" ? () => setFilteredResult(men) : () => setFilteredResult(filterMenByBrand(men, brand))}
          >
            {brand}
          </BrandButton>
        ))}
      </div>
      <div className="d-flex flex-column gap-2">
        <div className="row gap-3">
          {filteredResult.map(item => (
            <div className="col" key={item.model}>
              <MenItem men={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenList;
