export function filterHomeLivingByBrand(products, selectedBrand) {
    if (!Array.isArray(products) || !selectedBrand) return [];
    return products.filter(item => item.brand.toLowerCase().includes(selectedBrand.toLowerCase()));
  }
  
  export function filterUniqueHLBrands(products) {
    if (!Array.isArray(products)) return [];
    const brands = products.map(item => item.brand);
    return [...new Set(brands)];
  }
  