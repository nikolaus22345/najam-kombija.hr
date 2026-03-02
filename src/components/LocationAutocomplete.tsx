import { useState, useRef, useEffect, useCallback } from 'react';
import { MapPin, Plane, Building2, Search, Loader2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const POPULAR_LOCATIONS = [
    "Zagreb Airport", "Zagreb City Center", "Split Airport", "Split City Center",
    "Zadar Airport", "Zadar City Center", "Dubrovnik Airport", "Dubrovnik City Center",
    "Plitvice Lakes National Park", "Novalja (Pag Island)", "Vodice", "Sibenik", "Rijeka", "Pula",
    "Opatija", "Rovinj", "Porec", "Umag", "Makarska", "Murter", "Tisno", "Nin", "Biograd na Moru"
];

interface LocationAutocompleteProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

interface PhotonFeature {
    properties: {
        name: string;
        city?: string;
        country?: string;
        type: string;
        state?: string;
    };
    geometry: {
        coordinates: [number, number];
    };
}

const LocationAutocomplete = ({ id, label, value, onChange, placeholder, className }: LocationAutocompleteProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [suggestions, setSuggestions] = useState<PhotonFeature[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>();
    const abortControllerRef = useRef<AbortController | null>(null);

    const fetchSuggestions = useCallback(async (query: string, signal?: AbortSignal) => {
        if (query.trim().length < 2) {
            setSuggestions([]);
            return;
        }

        setIsLoading(true);
        try {
            // Fetch from Photon
            const response = await fetch(
                `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=10`,
                { signal }
            );

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();

            // Check local popular locations
            const localMatches = POPULAR_LOCATIONS
                .filter(loc => loc.toLowerCase().includes(query.toLowerCase()))
                .map(loc => ({
                    properties: {
                        name: loc,
                        country: "Croatia",
                        type: loc.toLowerCase().includes('airport') ? 'airport' : 'city'
                    },
                    geometry: { coordinates: [0, 0] }
                })) as PhotonFeature[];

            // Merge local and remote
            const combined = [...localMatches];

            // Add remote features that aren't already represented by a local match
            if (data.features) {
                data.features.forEach((feat: PhotonFeature) => {
                    const exists = combined.some(c => c.properties.name.toLowerCase() === feat.properties.name.toLowerCase());
                    if (!exists) combined.push(feat);
                });
            }

            if (!signal?.aborted) {
                setSuggestions(combined.slice(0, 10));
                if (combined.length > 0) {
                    setIsOpen(true);
                }
            }
        } catch (error) {
            if ((error as Error).name === 'AbortError') return;
            console.error('Failed to fetch locations', error);
        } finally {
            if (!signal?.aborted) {
                setIsLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (abortControllerRef.current) abortControllerRef.current.abort();
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        onChange(query);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (abortControllerRef.current) abortControllerRef.current.abort();

        if (query.trim().length >= 2) {
            timeoutRef.current = setTimeout(() => {
                const controller = new AbortController();
                abortControllerRef.current = controller;
                fetchSuggestions(query, controller.signal);
            }, 300);
        } else {
            setSuggestions([]);
            setIsOpen(false);
        }
    };

    const handleSelectLocation = (feature: PhotonFeature) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (abortControllerRef.current) abortControllerRef.current.abort();

        const { name, city, country } = feature.properties;
        const displayName = city && city !== name
            ? `${name}, ${city}, ${country}`
            : `${name}, ${country}`;

        onChange(displayName);
        setIsOpen(false);
    };

    const getLocationIcon = (type: string) => {
        if (type === 'airport') return <Plane className="w-4 h-4 text-primary" />;
        if (type === 'station') return <Building2 className="w-4 h-4 text-primary" />;
        return <MapPin className="w-4 h-4 text-primary" />;
    };

    return (
        <div ref={wrapperRef} className="relative">
            <Label htmlFor={id} className="text-sm font-medium text-gray-700 mb-2 block">
                {label}
            </Label>
            <div className="relative">
                <Input
                    id={id}
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    onFocus={() => {
                        if (value.length >= 2 && suggestions.length > 0) {
                            setIsOpen(true);
                        }
                    }}
                    placeholder={placeholder}
                    className={className}
                    autoComplete="off"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                    ) : (
                        <Search className="w-4 h-4 text-muted-foreground" />
                    )}
                </div>
            </div>

            {isOpen && (isLoading || suggestions.length > 0) && (
                <div className="absolute z-[100] w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-80 overflow-y-auto animate-in fade-in zoom-in duration-200">
                    {isLoading && suggestions.length === 0 && (
                        <div className="px-4 py-6 text-center text-sm text-gray-500">
                            <Loader2 className="w-5 h-5 animate-spin text-primary mx-auto mb-2" />
                            Searching for locations...
                        </div>
                    )}

                    {suggestions.map((feature, index) => (
                        <button
                            key={index}
                            type="button"
                            onMouseDown={(e) => {
                                e.preventDefault();
                                handleSelectLocation(feature);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-start gap-3 border-b border-gray-100 last:border-b-0 transition-colors"
                        >
                            <div className="mt-1">
                                {getLocationIcon(feature.properties.type)}
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="font-semibold text-gray-900 truncate">
                                    {feature.properties.name}
                                </div>
                                <div className="text-xs text-gray-500 truncate">
                                    {[feature.properties.city, feature.properties.state, feature.properties.country]
                                        .filter(Boolean)
                                        .join(', ')}
                                </div>
                            </div>
                        </button>
                    ))}

                    {!isLoading && suggestions.length === 0 && value.length >= 2 && (
                        <div className="px-4 py-4 text-center text-sm text-gray-500 italic">
                            No locations found. Try being more specific.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default LocationAutocomplete;
