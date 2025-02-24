export function filterBeautyByBrand(products, selectedBrand) {
    if (!Array.isArray(products) || !selectedBrand) return [];
    return products.filter(item => item.brand.toLowerCase().includes(selectedBrand.toLowerCase()));
  }
  
  export function filterUniqueBeautyBrands(products) {
    if (!Array.isArray(products)) return [];
    const brands = products.map(item => item.brand);
    return [...new Set(brands)];
  }
  