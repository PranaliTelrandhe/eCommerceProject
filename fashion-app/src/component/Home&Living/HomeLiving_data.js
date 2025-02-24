const homeLivingProducts = Array.from({ length: 50 }, (_, i) => {
    const price = Math.floor(500 + Math.random() * 3000);
    const discount = [10, 15, 20, 25, 30][i % 5];
    const discountedPrice = Math.floor(price - (price * discount) / 100);
  
    return {
      id: i + 1,
      name: `Home Item ${i + 1}`,
      brand: ["IKEA", "HomeCentre", "Urban Ladder", "Pepperfry", "Godrej"][i % 5],
      price,
      discount,
      discountedPrice,
      specification: {
        material: ["Wood", "Metal", "Glass", "Plastic"][i % 4],
        color: ["White", "Black", "Brown", "Gray"][i % 4],
      },
      image: `/assets/images/home/product${i + 1}.jpg`,
    };
  });
  
  export default homeLivingProducts;
  