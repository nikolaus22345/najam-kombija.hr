import { useState, useEffect } from 'react';

import { calculateTransferPrice } from '@/lib/pricing';

export interface RouteData {
    distanceKm: number;
    durationMin: number;
    price: number;
    loading: boolean;
    error: string | null;
}

// Fixed coordinates for popular locations to improve accuracy for common routes
const POPULAR_COORDS: { [key: string]: [number, number] } = {
    'zagreb airport': [45.7429, 16.0688],
    'zagreb': [45.8150, 15.9819],
    'split': [43.5081, 16.4401],
    'split airport': [43.5389, 16.2980],
    'zadar': [44.1194, 15.2422],
    'zadar airport': [44.1083, 15.3467],
    'dubrovnik': [42.6507, 18.0944],
    'dubrovnik airport': [42.5614, 18.2615],
    'plitvice': [44.8654, 15.6214],
    'rijeka': [45.3271, 14.4420],
    'pula': [44.8666, 13.8481],
    'ljubljana': [46.0569, 14.5058],
    'vienna': [48.2082, 16.3738],
    'budapest': [47.4979, 19.0402],
};

const getCoords = async (name: string): Promise<[number, number] | null> => {
    const normalized = name.toLowerCase();

    // Check local lookup first
    for (const [key, coords] of Object.entries(POPULAR_COORDS)) {
        if (normalized.includes(key)) return coords;
    }

    // Otherwise, use Photon (Free OSM Geocoder)
    try {
        const response = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(name)}&limit=1`);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
            const [lng, lat] = data.features[0].geometry.coordinates;
            return [lat, lng];
        }
    } catch (e) {
        console.error("Geocoding failed", e);
    }
    return null;
};

export const useRouteData = (origin: string, destination: string): RouteData => {
    const [data, setData] = useState<RouteData>({
        distanceKm: 0,
        durationMin: 0,
        price: 0,
        loading: false,
        error: null,
    });

    useEffect(() => {
        if (!origin || !destination) return;

        const fetchData = async () => {
            setData(prev => ({ ...prev, loading: true, error: null }));

            const start = await getCoords(origin);
            const end = await getCoords(destination);

            if (!start || !end) {
                setData(prev => ({ ...prev, loading: false, error: "Could not find locations" }));
                return;
            }

            try {
                // Use OSRM Public API (Free)
                const response = await fetch(
                    `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=false`
                );
                const result = await response.json();

                if (result.code === 'Ok' && result.routes.length > 0) {
                    const route = result.routes[0];
                    const distanceKm = route.distance / 1000;
                    const durationMin = Math.round(route.duration / 60);

                    const price = calculateTransferPrice(origin, destination, distanceKm).sedan;

                    setData({
                        distanceKm: Math.round(distanceKm),
                        durationMin,
                        price,
                        loading: false,
                        error: null
                    });
                } else {
                    setData(prev => ({ ...prev, loading: false, error: "Route not found" }));
                }
            } catch (error) {
                setData(prev => ({ ...prev, loading: false, error: "Routing service currently unavailable" }));
            }
        };

        fetchData();
    }, [origin, destination]);

    return data;
};
