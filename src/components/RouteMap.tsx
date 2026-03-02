import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card } from '@/components/ui/card';
import { Navigation, Clock, Euro, Loader2 } from 'lucide-react';

// Fix Leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface RouteMapProps {
    pickup: string;
    dropoff: string;
    onRouteCalculated?: (distance: number, duration: number, price: number) => void;
}

const PRICE_PER_KM = 1.5;
const MIN_PRICE = 25;

// Helper to fetch coordinates and route
const fetchRoute = async (startName: string, endName: string) => {
    const getCoords = async (name: string) => {
        const response = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(name)}&limit=1`);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
            const [lng, lat] = data.features[0].geometry.coordinates;
            return { lat, lng };
        }
        return null;
    };

    const start = await getCoords(startName);
    const end = await getCoords(endName);

    if (!start || !end) return null;

    const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`
    );
    const data = await response.json();

    if (data.code !== 'Ok') return null;

    const route = data.routes[0];
    return {
        start,
        end,
        geometry: route.geometry.coordinates.map((c: [number, number]) => [c[1], c[0]]),
        distanceKm: route.distance / 1000,
        durationMin: Math.round(route.duration / 60)
    };
};

const MapResizer = ({ bounds }: { bounds: L.LatLngBoundsExpression }) => {
    const map = useMap();
    useEffect(() => {
        if (bounds) {
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [map, bounds]);
    return null;
};

const RouteMap = ({ pickup, dropoff, onRouteCalculated }: RouteMapProps) => {
    const [routeData, setRouteData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!pickup || !dropoff) return;

        const loadRoute = async () => {
            setIsLoading(true);
            const data = await fetchRoute(pickup, dropoff);
            if (data) {
                setRouteData(data);
                const price = Math.max(MIN_PRICE, Math.ceil(data.distanceKm * PRICE_PER_KM));
                if (onRouteCalculated) {
                    onRouteCalculated(Math.round(data.distanceKm), data.durationMin, price);
                }
            }
            setIsLoading(false);
        };

        loadRoute();
    }, [pickup, dropoff, onRouteCalculated]);

    const bounds = routeData ? L.latLngBounds([routeData.start.lat, routeData.start.lng], [routeData.end.lat, routeData.end.lng]) : null;

    return (
        <div className="space-y-4">
            {/* Stats Cards */}
            {routeData && (
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                    <Card className="p-3 md:p-4 bg-white shadow-md border-primary/10">
                        <div className="flex items-center gap-2 md:gap-3">
                            <Navigation className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            <div>
                                <p className="text-[10px] uppercase text-gray-500 font-bold">Distance</p>
                                <p className="text-sm md:text-lg font-bold">{Math.round(routeData.distanceKm)} km</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-3 md:p-4 bg-white shadow-md border-primary/10">
                        <div className="flex items-center gap-2 md:gap-3">
                            <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            <div>
                                <p className="text-[10px] uppercase text-gray-500 font-bold">Duration</p>
                                <p className="text-sm md:text-lg font-bold">
                                    {Math.floor(routeData.durationMin / 60)}h {routeData.durationMin % 60}m
                                </p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-3 md:p-4 bg-white shadow-md border-primary/10">
                        <div className="flex items-center gap-2 md:gap-3">
                            <Euro className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            <div>
                                <p className="text-[10px] uppercase text-gray-500 font-bold">Price</p>
                                <p className="text-sm md:text-lg font-bold">€{Math.max(MIN_PRICE, Math.ceil(routeData.distanceKm * PRICE_PER_KM))}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            )}

            {/* Map Canvas */}
            <Card className="overflow-hidden h-[400px] relative border-2 border-gray-100 shadow-inner z-0">
                {isLoading && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-50 flex items-center justify-center">
                        <div className="text-center">
                            <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-2" />
                            <p className="text-sm font-medium text-gray-600">Calculating route...</p>
                        </div>
                    </div>
                )}

                <MapContainer
                    center={[45.8150, 15.9819]}
                    zoom={7}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {routeData && (
                        <>
                            <Polyline
                                positions={routeData.geometry}
                                color="#ff5400"
                                weight={5}
                                opacity={0.7}
                            />
                            <Marker position={[routeData.start.lat, routeData.start.lng]}>
                                <Popup>Pickup: {pickup}</Popup>
                            </Marker>
                            <Marker position={[routeData.end.lat, routeData.end.lng]}>
                                <Popup>Drop-off: {dropoff}</Popup>
                            </Marker>
                            <MapResizer bounds={routeData.geometry} />
                        </>
                    )}
                </MapContainer>

                {!pickup && !dropoff && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 pointer-events-none z-10">
                        <p className="bg-white/90 px-4 py-2 rounded-full shadow-lg text-sm text-gray-500 border border-gray-200">
                            Enter route details to see preview
                        </p>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default RouteMap;
