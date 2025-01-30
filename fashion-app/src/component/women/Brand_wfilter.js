export function filterWomenByBrand(women, selectedBrand) {
    if (!Array.isArray(women) || !selectedBrand) return [];
    return women.filter(item => item.brand.toLowerCase().includes(selectedBrand.toLowerCase()));
  }
  
  export function filterUniqueBrands(women) {
    if (!Array.isArray(women)) return [];
    const brands = women.map(item => item.brand);
    return [...new Set(brands)];
  }
  