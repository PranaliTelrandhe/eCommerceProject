export function filterMenByBrand(men, selectedBrand) {
    if (!Array.isArray(men) || !selectedBrand) return [];
    return men.filter(item => item.brand.toLowerCase().includes(selectedBrand.toLowerCase()));
  }
  
  export function filterUniqueBrands(men) {
    if (!Array.isArray(men)) return [];
    const brands = men.map(item => item.brand);
    return [...new Set(brands)];
  }
  