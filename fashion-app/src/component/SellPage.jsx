import React, { useState } from 'react';

// SellPage Component
const SellPage = () => {
  // State to hold the form
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product "${product.name}" has been listed for sale at ₹${product.price}!`);
    // Here, you would normally call an API to submit the form data
    setProduct({
      name: '',
      price: '',
      description: '',
      category: '',
    }); // Reset form after submit
  };

  return (
    <div className="sell-page">
      <h1>Sell on Fashion</h1>
      <p>List your product and start selling on Fashion!</p>

      <form onSubmit={handleSubmit} className="product-form">
        {/* Product Name Input */}
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price Input */}
        <div>
          <label htmlFor="price">Price (₹):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description">Product Description:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category Input */}
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">List Product</button>
      </form>
    </div>
  );
};

export default SellPage;
