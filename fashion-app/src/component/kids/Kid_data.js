const kidProducts = Array.from({ length: 100 }, (v, i) => {
    const price = Math.floor(999 + Math.random() * 3000); // Random price between 999 and 3999
    const discount = [10, 15, 20, 25, 30][i % 5]; // Random discount percentage from a fixed set
    const discountedPrice = Math.floor(price - (price * discount) / 100); // Apply discount
  
    return {
      id: i + 1,
      name: `Product ${i + 1}`,
      brand: ["H&M", "Levi's", "Nike", "Adidas", "Zara", "Puma", "Biba", "FabIndia"][i % 8],
      price,
      discount,
      discountedPrice, // Add discounted price
      specification: {
        size: ["0-2, 2-4, 4-6, 6-7", "8, 9, 10, 11-12"][i % 2],
        material: ["Cotton", "Polyester", "Denim", "Viscose"][i % 4],
        color: ["Red", "Blue", "Black", "White", "Green"][i % 5],
      },
      image: `/assets/images/kid/product${i + 1}.jpg`,
    };
  });
  
  export default kidProducts;
  