export const calculateTransferPrice = (origin: string, destination: string, distanceKm: number) => {
    const o = (origin || "").toLowerCase();
    const d = (destination || "").toLowerCase();
    
    // Check if route matches two keywords
    const isRoute = (a: string, b: string) => (o.includes(a) && d.includes(b)) || (o.includes(b) && d.includes(a));
    
    // Fixed overrides (+15% added to user's base quotes)
    // Ordered from farthest to nearest to prevent substring shadowing
    // e.g. "Split Airport" to "Zagreb" shouldn't trigger local airport price.
    
    if (isRoute('dubrovnik', 'zagreb')) {
        return { sedan: 978, minivan: 1150, minibus: 1600 };
    }
    if (isRoute('split', 'zagreb')) {
        return { sedan: 575, minivan: 690, minibus: 950 };
    }
    if (isRoute('zadar', 'zagreb')) {
        return { sedan: 460, minivan: 540, minibus: 750 };
    }
    if (isRoute('plitvi', 'zagreb')) {
        return { sedan: 310, minivan: 368, minibus: 500 };
    }
    
    // Only match Zagreb Airport (not other airports)
    if (isRoute('zagreb airport', 'zagreb') || 
        isRoute('franjo tuđman', 'zagreb') ||
        isRoute('franjo tudman', 'zagreb') ||
        isRoute('zračna luka zagreb', 'zagreb') ||
        isRoute('zracna luka zagreb', 'zagreb') ||
        // Fallback for generic 'airport' or 'zracna luka' if other cities are excluded
        ((isRoute('airport', 'zagreb') || isRoute('zračna luka', 'zagreb') || isRoute('zracna luka', 'zagreb')) 
         && !o.includes('split') && !d.includes('split') 
         && !o.includes('zadar') && !d.includes('zadar') 
         && !o.includes('dubrovnik') && !d.includes('dubrovnik'))) {
        return { sedan: 58, minivan: 75, minibus: 110 };
    }
    
    // Base pricing based on user req + 15%
    const minPrice = 35;
    return {
        sedan: Math.max(minPrice, Math.ceil(distanceKm * 1.38)),
        minivan: Math.max(minPrice * 1.2, Math.ceil(distanceKm * 1.55)),
        minibus: Math.max(minPrice * 1.5, Math.ceil(distanceKm * 2.1))
    };
};
