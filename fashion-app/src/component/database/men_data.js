const menProducts = Array.from({ length: 100 }, (v, j) => {
  const price = Math.floor(999 + Math.random() * 3000); // Random price between 999 and 3999
  const discount = [10, 15, 20, 25, 30][j % 5]; // Random discount percentage from a fixed set
  const discountedPrice = Math.floor(price - (price * discount) / 100); // Apply discount

  return {
    id: j + 1,
    name: `Prod ${j + 1}`,
    brand: ["H&M", "Levi's", "Nike", "Adidas", "Zara", "Puma", "Biba", "FabIndia"][j % 8],
    price,
    discount,
    discountedPrice, // Add discounted price
    specification: {
      size: ["S, M, L, XL", "M, L, XL, XXL"][j % 2],
      material: ["Cotton", "Polyester", "Denim", "Viscose"][j % 4],
      color: ["Red", "Blue", "Black", "White", "Green"][j % 5],
    },
    image: `/assets/images/women/prod${j + 1}.jpg`,
  };
});

export default menProducts;
