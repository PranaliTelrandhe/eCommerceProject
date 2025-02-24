const beautyProducts = Array.from({ length: 50 }, (v, i) => {
    const price = Math.floor(199 + Math.random() * 1500); // Random price
    const discount = [5, 10, 15, 20, 25][i % 5]; // Random discount
    const discountedPrice = Math.floor(price - (price * discount) / 100);
  
    return {
      id: i + 1,
      name: `Beauty Product ${i + 1}`,
      brand: ["L'Oreal", "Maybelline", "MAC", "Lakme", "Dove", "Nivea"][i % 6],
      price,
      discount,
      discountedPrice,
      specification: {
        type: ["Skincare", "Makeup", "Haircare", "Fragrance"][i % 4],
        color: ["Red", "Pink", "Natural", "Transparent"][i % 4],
      },
      image: `/assets/images/beauty/product${i + 1}.jpg`,
    };
  });
  
  export default beautyProducts;
  