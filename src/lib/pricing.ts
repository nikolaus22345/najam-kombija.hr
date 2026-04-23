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
    
    // Vodice routes (+15% added to spreadsheet values)
    if (isRoute('vodice', 'zagreb')) {
        return { sedan: 610, minivan: 730, minibus: 990 };
    }
    if (isRoute('vodice', 'dubrovnik')) {
        return { sedan: 610, minivan: 730, minibus: 990 };
    }
    if (isRoute('vodice', 'split')) {
        return { sedan: 160, minivan: 195, minibus: 280 };
    }
    if (isRoute('vodice', 'zadar')) {
        return { sedan: 160, minivan: 195, minibus: 280 };
    }
    if (isRoute('vodice', 'plitvi')) {
        return { sedan: 380, minivan: 450, minibus: 620 };
    }
    if (isRoute('vodice', 'makarska')) {
        return { sedan: 380, minivan: 450, minibus: 620 };
    }
    if (isRoute('vodice', 'šibenik') || isRoute('vodice', 'sibenik')) {
        return { sedan: 35, minivan: 45, minibus: 65 };
    }
    if (isRoute('vodice', 'primošten') || isRoute('vodice', 'primosten')) {
        return { sedan: 95, minivan: 115, minibus: 165 };
    }
    if (isRoute('vodice', 'rogoznica')) {
        return { sedan: 100, minivan: 125, minibus: 175 };
    }
    if (isRoute('vodice', 'skradin')) {
        return { sedan: 60, minivan: 75, minibus: 110 };
    }
    if (isRoute('vodice', 'murter')) {
        return { sedan: 60, minivan: 75, minibus: 110 };
    }
    if (isRoute('vodice', 'trogir')) {
        return { sedan: 140, minivan: 175, minibus: 250 };
    }
    if (isRoute('vodice', 'sukošan') || isRoute('vodice', 'sukosan')) {
        return { sedan: 140, minivan: 175, minibus: 250 };
    }
    if (isRoute('vodice', 'biograd')) {
        return { sedan: 95, minivan: 115, minibus: 165 };
    }
    if (isRoute('vodice', 'krka')) {
        return { sedan: 50, minivan: 65, minibus: 95 };
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
