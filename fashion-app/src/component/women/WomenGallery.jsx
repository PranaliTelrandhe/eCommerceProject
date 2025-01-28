import React from 'react';
import WomenCard from './WomenCard';
import womenProducts from './women_data';

const WomenGallery = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Women Collection</h2>
      {/* Grid layout with responsive breakpoints */}
      <div className="row">
        {womenProducts.map((product) => (
          <div className="col-6 col-sm-4 col-md-3 mb-4" key={product.id}>
            <WomenCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenGallery;
