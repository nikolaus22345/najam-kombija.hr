export const calculateTransferPrice = (origin: string, destination: string, distanceKm: number) => {
    const o = (origin || "").toLowerCase();
    const d = (destination || "").toLowerCase();
    
    // Check if route matches two keywords
    const isRoute = (a: string, b: string) => (o.includes(a) && d.includes(b)) || (o.includes(b) && d.includes(a));
    
    // Fixed overrides (+15% added to user's base quotes)
    if (isRoute('airport', 'zagreb') || isRoute('zračna luka', 'zagreb') || isRoute('zracna luka', 'zagreb') || isRoute('franjo tuđman', 'zagreb')) {
        return { sedan: 58, minivan: 75, minibus: 110 };
    }
    if (isRoute('plitvi', 'zagreb')) {
        return { sedan: 310, minivan: 368, minibus: 500 };
    }
    if (isRoute('zadar', 'zagreb')) {
        return { sedan: 460, minivan: 540, minibus: 750 };
    }
    if (isRoute('split', 'zagreb')) {
        return { sedan: 575, minivan: 690, minibus: 950 };
    }
    if (isRoute('dubrovnik', 'zagreb')) {
        return { sedan: 978, minivan: 1150, minibus: 1600 };
    }
    
    // Base pricing based on user req + 15%
    const minPrice = 35;
    return {
        sedan: Math.max(minPrice, Math.ceil(distanceKm * 1.38)),
        minivan: Math.max(minPrice * 1.2, Math.ceil(distanceKm * 1.55)),
        minibus: Math.max(minPrice * 1.5, Math.ceil(distanceKm * 2.1))
    };
};
