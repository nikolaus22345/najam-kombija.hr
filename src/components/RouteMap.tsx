import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Navigation, Clock, Euro, Key } from 'lucide-react';

interface RouteMapProps {
  pickup: string;
  dropoff: string;
  onRouteCalculated?: (distance: number, duration: number, price: number) => void;
}

// Mapa lokacija sa koordinatama
const locationCoordinates: { [key: string]: [number, number] } = {
  'zagreb': [15.9819, 45.8150],
  'split': [16.4401, 43.5081],
  'dubrovnik': [18.0944, 42.6507],
  'zadar': [15.2422, 44.1194],
  'plitvice': [15.6214, 44.8654],
  'rijeka': [14.4420, 45.3271],
  'pula': [13.8481, 44.8666],
  'osijek': [18.6955, 45.5550],
  'karlovac': [15.5478, 45.4870],
  'trogir': [16.2518, 43.5147],
  'makarska': [17.0180, 43.2969],
  'hvar': [16.4414, 43.1729],
  'korcula': [17.1357, 42.9604],
  'vis': [16.1833, 43.0606],
  'bol': [16.6564, 43.2632],
  'novalja': [14.8861, 44.5567],
  'pag': [15.0594, 44.4450],
  'biograd': [15.4428, 43.9425],
  'sibenik': [15.8952, 43.7350],
  'omis': [16.6889, 43.4447],
  'cavtat': [18.2197, 42.5808],
  'mostar': [17.8089, 43.3438],
  'kotor': [18.7706, 42.4247],
  'ljubljana': [14.5058, 46.0569],
  'bled': [14.1146, 46.3683],
  'vienna': [16.3738, 48.2082],
  'budapest': [19.0402, 47.4979],
  'opatija': [14.3059, 45.3372],
  'samobor': [15.7180, 45.8036],
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
  // Osnovna cijena: 1.2€ po km
  const basePrice = distanceKm * 1.2;
  // Zaokruživanje na najbližih 10€
  return Math.round(basePrice / 10) * 10;
};

const RouteMap = ({ pickup, dropoff, onRouteCalculated }: RouteMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [routeInfo, setRouteInfo] = useState<{
    distance: number;
    duration: number;
    price: number;
  } | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(() => {
    return localStorage.getItem('mapbox_token') || '';
  });
  const [tokenInput, setTokenInput] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(!mapboxToken);

  const handleSaveToken = () => {
    if (tokenInput.trim()) {
      localStorage.setItem('mapbox_token', tokenInput.trim());
      setMapboxToken(tokenInput.trim());
      setShowTokenInput(false);
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    const pickupCoords = getCoordinates(pickup);
    const dropoffCoords = getCoordinates(dropoff);

    if (!pickupCoords || !dropoffCoords) {
      console.error('Could not find coordinates for locations');
      return;
    }

    // Postavi Mapbox token
    mapboxgl.accessToken = mapboxToken;

    // Inicijalizacija mape
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [
        (pickupCoords[0] + dropoffCoords[0]) / 2,
        (pickupCoords[1] + dropoffCoords[1]) / 2
      ],
      zoom: 7,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', async () => {
      if (!map.current) return;

      // Dodaj markere
      new mapboxgl.Marker({ color: '#fbbf24' })
        .setLngLat(pickupCoords)
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>Pickup:</strong> ${pickup}`))
        .addTo(map.current);

      new mapboxgl.Marker({ color: '#ef4444' })
        .setLngLat(dropoffCoords)
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>Drop-off:</strong> ${dropoff}`))
        .addTo(map.current);

      // Dohvati rutu od Mapbox Directions API
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoords[0]},${pickupCoords[1]};${dropoffCoords[0]},${dropoffCoords[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
      );

      const json = await query.json();
      const data = json.routes[0];
      const route = data.geometry.coordinates;
      const distanceKm = Math.round(data.distance / 1000);
      const durationMin = Math.round(data.duration / 60);
      const price = calculatePrice(distanceKm);

      setRouteInfo({
        distance: distanceKm,
        duration: durationMin,
        price: price
      });

      if (onRouteCalculated) {
        onRouteCalculated(distanceKm, durationMin, price);
      }

      // Dodaj liniju rute
      const geojson: GeoJSON.Feature<GeoJSON.Geometry> = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };

      if (map.current.getSource('route')) {
        (map.current.getSource('route') as mapboxgl.GeoJSONSource).setData(geojson);
      } else {
        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#fbbf24',
            'line-width': 5,
            'line-opacity': 0.8
          }
        });
      }

      // Prilagodi zoom da prikaže cijelu rutu
      const bounds = new mapboxgl.LngLatBounds();
      route.forEach((coord: [number, number]) => bounds.extend(coord));
      map.current.fitBounds(bounds, { padding: 50 });
    });

    return () => {
      map.current?.remove();
    };
  }, [pickup, dropoff, onRouteCalculated, mapboxToken]);

  return (
    <div className="space-y-4">
      {/* Mapbox Token Input */}
      {showTokenInput && (
        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Key className="w-5 h-5 text-primary mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Mapbox Token Required</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  To display the route map, please enter your Mapbox public token. 
                  Get it from <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a> (free account).
                </p>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="pk.eyJ1Ijoi..."
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleSaveToken}>Save</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Informacije o ruti */}
      {routeInfo && (
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Navigation className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Distance</p>
                <p className="text-2xl font-bold text-foreground">{routeInfo.distance} km</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="text-2xl font-bold text-foreground">
                  {Math.floor(routeInfo.duration / 60)}h {routeInfo.duration % 60}min
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
                <p className="text-sm text-muted-foreground">From</p>
                <p className="text-2xl font-bold text-foreground">€{routeInfo.price}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Mapa */}
      {mapboxToken ? (
        <Card className="overflow-hidden">
          <div ref={mapContainer} className="w-full h-[400px] md:h-[500px]" />
        </Card>
      ) : (
        <Card className="p-12 text-center">
          <Key className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Enter your Mapbox token above to view the route map</p>
        </Card>
      )}
    </div>
  );
};

export default RouteMap;
