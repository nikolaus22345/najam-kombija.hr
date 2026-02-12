import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { filterLocations, getLocationName, Location } from '@/data/locations';
import { MapPin, Plane, Ship, Globe } from 'lucide-react';

interface LocationAutocompleteProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    label: string;
}

const LocationAutocomplete = ({ value, onChange, placeholder, label }: LocationAutocompleteProps) => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        onChange(query);
        setFilteredLocations(filterLocations(query, language));
        setIsOpen(true);
    };

    const handleSelectLocation = (location: Location) => {
        onChange(getLocationName(location, language));
        setIsOpen(false);
    };

    const handleFocus = () => {
        if (!value) {
            setFilteredLocations(filterLocations('', language));
        }
        setIsOpen(true);
    };

    const getLocationIcon = (type: Location['type']) => {
        switch (type) {
            case 'airport':
                return <Plane className="w-4 h-4 text-primary" />;
            case 'island':
                return <Ship className="w-4 h-4 text-blue-500" />;
            case 'international':
                return <Globe className="w-4 h-4 text-purple-500" />;
            default:
                return <MapPin className="w-4 h-4 text-green-500" />;
        }
    };

    const getTypeLabel = (type: Location['type']) => {
        const labels = {
            city: { en: 'City', hr: 'Grad', de: 'Stadt', it: 'Città', fr: 'Ville', ja: '都市' },
            airport: { en: 'Airport', hr: 'Zračna luka', de: 'Flughafen', it: 'Aeroporto', fr: 'Aéroport', ja: '空港' },
            island: { en: 'Island', hr: 'Otok', de: 'Insel', it: 'Isola', fr: 'Île', ja: '島' },
            international: { en: 'International', hr: 'Inozemstvo', de: 'International', it: 'Internazionale', fr: 'International', ja: '国際' },
        };
        return labels[type][language as keyof typeof labels.city] || labels[type].en;
    };

    return (
        <div ref={wrapperRef} className="relative">
            <label className="block text-sm font-medium text-foreground mb-2">
                {label}
            </label>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                onFocus={handleFocus}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                autoComplete="off"
            />

            {isOpen && filteredLocations.length > 0 && (
                <div className="absolute z-50 w-full mt-2 bg-background border border-border rounded-lg shadow-lg max-h-96 overflow-y-auto">
                    {filteredLocations.map((location) => (
                        <button
                            key={location.id}
                            onClick={() => handleSelectLocation(location)}
                            className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-3 border-b border-border last:border-b-0"
                        >
                            {getLocationIcon(location.type)}
                            <div className="flex-1">
                                <div className="font-medium text-foreground">
                                    {getLocationName(location, language)}
                                </div>
                                <div className="text-xs text-muted-foreground flex items-center gap-2">
                                    <span>{getTypeLabel(location.type)}</span>
                                    {location.region && (
                                        <>
                                            <span>•</span>
                                            <span>{location.region}</span>
                                        </>
                                    )}
                                    {location.country !== 'Croatia' && (
                                        <>
                                            <span>•</span>
                                            <span>{location.country}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {isOpen && filteredLocations.length === 0 && value && (
                <div className="absolute z-50 w-full mt-2 bg-background border border-border rounded-lg shadow-lg p-4 text-center text-muted-foreground">
                    No locations found
                </div>
            )}
        </div>
    );
};

export default LocationAutocomplete;
