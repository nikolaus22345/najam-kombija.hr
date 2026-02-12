import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { Card } from '@/components/ui/card';
import { Navigation, Clock, Euro } from 'lucide-react';

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

const locationCoordinates: { [key: string]: [number, number] } = {
  'zagreb': [45.8150, 15.9819],
  'split': [43.5081, 16.4401],
  'dubrovnik': [42.6507, 18.0944],
  'zadar': [44.1194, 15.2422],
  'plitvice': [44.8654, 15.6214],
  'rijeka': [45.3271, 14.4420],
  'pula': [44.8666, 13.8481],
  'osijek': [45.5550, 18.6955],
  'karlovac': [45.4870, 15.5478],
  'trogir': [43.5147, 16.2518],
  'makarska': [43.2969, 17.0180],
  'hvar': [43.1729, 16.4414],
  'korcula': [42.9604, 17.1357],
  'vis': [43.0606, 16.1833],
  'bol': [43.2632, 16.6564],
  'novalja': [44.5567, 14.8861],
  'pag': [44.4450, 15.0594],
  'biograd': [43.9425, 15.4428],
  'sibenik': [43.7350, 15.8952],
  'omis': [43.4447, 16.6889],
  'cavtat': [42.5808, 18.2197],
  'mostar': [43.3438, 17.8089],
  'kotor': [42.4247, 18.7706],
  'ljubljana': [46.0569, 14.5058],
  'bled': [46.3683, 14.1146],
  'vienna': [48.2082, 16.3738],
  'budapest': [47.4979, 19.0402],
  'opatija': [45.3372, 14.3059],
  'samobor': [45.8036, 15.7180],
};

const getCoordinates = (location: string): [number, number] | null => {
  const normalized = location.toLowerCase();
  for (const [key, coords] of Object.entries(locationCoordinates)) {
    if (normalized.includes(key)) {
      return coords;
    }
  }
  return null;
};

const calculatePrice = (distanceKm: number): number => {
  // New pricing derived from user request: ~0.7€ per km (e.g. 380km = 250€)
  const pricePerKm = 0.7;
  const minPrice = 25;
  const calculatedPrice = distanceKm * pricePerKm;
  return Math.max(minPrice, Math.round(calculatedPrice / 5) * 5); // Round to nearest 5
};

const RoutingMachine = ({ pickup, dropoff, onRouteFound }: {
  pickup: [number, number],
  dropoff: [number, number],
  onRouteFound: (distance: number, duration: number) => void
}) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(pickup[0], pickup[1]),
        L.latLng(dropoff[0], dropoff[1])
      ],
      routeWhileDragging: false,
      showAlternatives: false,
      fitSelectedRoutes: true,
      show: false, // Don't show the text instructions
      lineOptions: {
        styles: [{ color: '#fbbf24', opacity: 0.8, weight: 6 }],
        extendToWaypoints: true,
        missingRouteTolerance: 10
      }
    }).addTo(map);

    routingControl.on('routesfound', (e) => {
      const routes = e.routes;
      const summary = routes[0].summary;
      // distance is in meters, duration in seconds
      onRouteFound(summary.totalDistance / 1000, summary.totalTime / 60);
    });

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, pickup, dropoff, onRouteFound]);

  return null;
};

const RouteMap = ({ pickup, dropoff, onRouteCalculated }: RouteMapProps) => {
  const [routeInfo, setRouteInfo] = useState<{
    distance: number;
    duration: number;
    price: number;
  } | null>(null);

  const pickupCoords = getCoordinates(pickup);
  const dropoffCoords = getCoordinates(dropoff);

  const handleRouteFound = (distanceKm: number, durationMin: number) => {
    const price = calculatePrice(distanceKm);

    // Only update if values changed significantly to avoid infinite loops
    if (!routeInfo || Math.abs(routeInfo.distance - distanceKm) > 1) {
      setRouteInfo({
        distance: Math.round(distanceKm),
        duration: Math.round(durationMin),
        price
      });
      console.log('Route found:', { distanceKm, durationMin, price }); // Debug log
      if (onRouteCalculated) {
        onRouteCalculated(Math.round(distanceKm), Math.round(durationMin), price);
      }
    }
  };

  // Default center (approximate center of Croatia)
  const defaultCenter: [number, number] = [45.1, 15.2];

  const center = (pickupCoords && dropoffCoords)
    ? [(pickupCoords[0] + dropoffCoords[0]) / 2, (pickupCoords[1] + dropoffCoords[1]) / 2] as [number, number]
    : defaultCenter;

  return (
    <div className="space-y-4">
      {/* Route Info Cards */}
      {routeInfo && pickupCoords && dropoffCoords && (
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Navigation className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold">Distance</p>
                <p className="text-xl md:text-2xl font-bold text-foreground">{routeInfo.distance} km</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold">Duration</p>
                <p className="text-xl md:text-2xl font-bold text-foreground">
                  {Math.floor(routeInfo.duration / 60)}h {routeInfo.duration % 60}m
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Euro className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold">Price</p>
                <p className="text-xl md:text-2xl font-bold text-foreground">€{routeInfo.price}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Map */}
      <Card className="overflow-hidden border-2 border-muted h-[400px] md:h-[500px] relative z-0">
        <MapContainer
          key={`${center[0]}-${center[1]}`}
          center={center}
          zoom={7}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pickupCoords && dropoffCoords && (
            <RoutingMachine
              pickup={pickupCoords}
              dropoff={dropoffCoords}
              onRouteFound={handleRouteFound}
            />
          )}
        </MapContainer>
        {(!pickupCoords || !dropoffCoords) && (
          <div className="absolute inset-0 bg-black/5 pointer-events-none flex items-center justify-center z-[400]">
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-sm font-medium text-muted-foreground">
              Enter pickup and dropoff locations to see route
            </div>
          </div>
        )}
      </Card>

      <p className="text-xs text-center text-muted-foreground mt-2">
        * Estimates based on average traffic. Route calculating via OSRM (Open Source Routing Machine).
      </p>
    </div>
  );
};

export default RouteMap;
