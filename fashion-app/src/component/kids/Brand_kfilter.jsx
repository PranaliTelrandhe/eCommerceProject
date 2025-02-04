export function filterKidByBrand(kid, selectedBrand) {
    if (!Array.isArray(kid)||!selectedBrand) return [];
    return kid.filter(item => item.brand.toLowerCase().includes(selectedBrand.toLowerCase()));
  }
  
  export function filterUniqueBrands(kid ) {
    if (!Array.isArray(kid)) return [];
    const brands = kid.map(item => item.brand);
    return [...new Set(brands)];
  }
  