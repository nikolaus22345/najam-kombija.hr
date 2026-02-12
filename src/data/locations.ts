export interface Location {
    id: string;
    name: string;
    nameHr: string;
    nameDe: string;
    nameIt: string;
    nameFr: string;
    nameJa: string;
    type: 'city' | 'airport' | 'island' | 'international';
    country: string;
    region?: string;
    popular: boolean;
}

export const locations: Location[] = [
    // Major Croatian Cities
    { id: 'zagreb', name: 'Zagreb', nameHr: 'Zagreb', nameDe: 'Zagreb', nameIt: 'Zagabria', nameFr: 'Zagreb', nameJa: 'ザグレブ', type: 'city', country: 'Croatia', region: 'Central Croatia', popular: true },
    { id: 'split', name: 'Split', nameHr: 'Split', nameDe: 'Split', nameIt: 'Spalato', nameFr: 'Split', nameJa: 'スプリト', type: 'city', country: 'Croatia', region: 'Dalmatia', popular: true },
    { id: 'dubrovnik', name: 'Dubrovnik', nameHr: 'Dubrovnik', nameDe: 'Dubrovnik', nameIt: 'Ragusa', nameFr: 'Dubrovnik', nameJa: 'ドゥブロヴニク', type: 'city', country: 'Croatia', region: 'South Dalmatia', popular: true },
    { id: 'zadar', name: 'Zadar', nameHr: 'Zadar', nameDe: 'Zadar', nameIt: 'Zara', nameFr: 'Zadar', nameJa: 'ザダル', type: 'city', country: 'Croatia', region: 'North Dalmatia', popular: true },
    { id: 'rijeka', name: 'Rijeka', nameHr: 'Rijeka', nameDe: 'Rijeka', nameIt: 'Fiume', nameFr: 'Rijeka', nameJa: 'リエカ', type: 'city', country: 'Croatia', region: 'Kvarner', popular: true },
    { id: 'pula', name: 'Pula', nameHr: 'Pula', nameDe: 'Pula', nameIt: 'Pola', nameFr: 'Pula', nameJa: 'プーラ', type: 'city', country: 'Croatia', region: 'Istria', popular: true },
    { id: 'osijek', name: 'Osijek', nameHr: 'Osijek', nameDe: 'Osijek', nameIt: 'Osijek', nameFr: 'Osijek', nameJa: 'オシエク', type: 'city', country: 'Croatia', region: 'Slavonia', popular: false },
    { id: 'sibenik', name: 'Šibenik', nameHr: 'Šibenik', nameDe: 'Šibenik', nameIt: 'Sebenico', nameFr: 'Šibenik', nameJa: 'シベニク', type: 'city', country: 'Croatia', region: 'North Dalmatia', popular: true },
    { id: 'makarska', name: 'Makarska', nameHr: 'Makarska', nameDe: 'Makarska', nameIt: 'Macarsca', nameFr: 'Makarska', nameJa: 'マカルスカ', type: 'city', country: 'Croatia', region: 'Dalmatia', popular: true },
    { id: 'trogir', name: 'Trogir', nameHr: 'Trogir', nameDe: 'Trogir', nameIt: 'Traù', nameFr: 'Trogir', nameJa: 'トロギール', type: 'city', country: 'Croatia', region: 'Dalmatia', popular: true },
    { id: 'rovinj', name: 'Rovinj', nameHr: 'Rovinj', nameDe: 'Rovinj', nameIt: 'Rovigno', nameFr: 'Rovinj', nameJa: 'ロヴィニ', type: 'city', country: 'Croatia', region: 'Istria', popular: true },
    { id: 'porec', name: 'Poreč', nameHr: 'Poreč', nameDe: 'Poreč', nameIt: 'Parenzo', nameFr: 'Poreč', nameJa: 'ポレチュ', type: 'city', country: 'Croatia', region: 'Istria', popular: true },
    { id: 'opatija', name: 'Opatija', nameHr: 'Opatija', nameDe: 'Opatija', nameIt: 'Abbazia', nameFr: 'Opatija', nameJa: 'オパティヤ', type: 'city', country: 'Croatia', region: 'Kvarner', popular: true },
    { id: 'cavtat', name: 'Cavtat', nameHr: 'Cavtat', nameDe: 'Cavtat', nameIt: 'Cavtat', nameFr: 'Cavtat', nameJa: 'ツァヴタット', type: 'city', country: 'Croatia', region: 'South Dalmatia', popular: false },
    { id: 'omis', name: 'Omiš', nameHr: 'Omiš', nameDe: 'Omiš', nameIt: 'Almissa', nameFr: 'Omiš', nameJa: 'オミシュ', type: 'city', country: 'Croatia', region: 'Dalmatia', popular: false },
    { id: 'primosten', name: 'Primošten', nameHr: 'Primošten', nameDe: 'Primošten', nameIt: 'Primošten', nameFr: 'Primošten', nameJa: 'プリモシュテン', type: 'city', country: 'Croatia', region: 'Dalmatia', popular: false },
    { id: 'vodice', name: 'Vodice', nameHr: 'Vodice', nameDe: 'Vodice', nameIt: 'Vodice', nameFr: 'Vodice', nameJa: 'ヴォディツェ', type: 'city', country: 'Croatia', region: 'Dalmatia', popular: false },
    { id: 'biograd', name: 'Biograd na Moru', nameHr: 'Biograd na Moru', nameDe: 'Biograd', nameIt: 'Biograd', nameFr: 'Biograd', nameJa: 'ビオグラード', type: 'city', country: 'Croatia', region: 'North Dalmatia', popular: false },
    { id: 'nin', name: 'Nin', nameHr: 'Nin', nameDe: 'Nin', nameIt: 'Nona', nameFr: 'Nin', nameJa: 'ニン', type: 'city', country: 'Croatia', region: 'North Dalmatia', popular: false },
    { id: 'novalja', name: 'Novalja', nameHr: 'Novalja', nameDe: 'Novalja', nameIt: 'Novalja', nameFr: 'Novalja', nameJa: 'ノヴァリャ', type: 'city', country: 'Croatia', region: 'Pag Island', popular: false },
    { id: 'motovun', name: 'Motovun', nameHr: 'Motovun', nameDe: 'Motovun', nameIt: 'Montona', nameFr: 'Motovun', nameJa: 'モトヴン', type: 'city', country: 'Croatia', region: 'Istria', popular: false },
    { id: 'umag', name: 'Umag', nameHr: 'Umag', nameDe: 'Umag', nameIt: 'Umago', nameFr: 'Umag', nameJa: 'ウマグ', type: 'city', country: 'Croatia', region: 'Istria', popular: false },
    { id: 'novigrad', name: 'Novigrad', nameHr: 'Novigrad', nameDe: 'Novigrad', nameIt: 'Cittanova', nameFr: 'Novigrad', nameJa: 'ノヴィグラード', type: 'city', country: 'Croatia', region: 'Istria', popular: false },
    { id: 'vrsar', name: 'Vrsar', nameHr: 'Vrsar', nameDe: 'Vrsar', nameIt: 'Orsera', nameFr: 'Vrsar', nameJa: 'ヴルサル', type: 'city', country: 'Croatia', region: 'Istria', popular: false },

    // Croatian Islands
    { id: 'hvar', name: 'Hvar', nameHr: 'Hvar', nameDe: 'Hvar', nameIt: 'Lesina', nameFr: 'Hvar', nameJa: 'フヴァル', type: 'island', country: 'Croatia', region: 'Dalmatia', popular: true },
    { id: 'korcula', name: 'Korčula', nameHr: 'Korčula', nameDe: 'Korčula', nameIt: 'Curzola', nameFr: 'Korčula', nameJa: 'コルチュラ', type: 'island', country: 'Croatia', region: 'Dalmatia', popular: true },
    { id: 'brac', name: 'Brač', nameHr: 'Brač', nameDe: 'Brač', nameIt: 'Brazza', nameFr: 'Brač', nameJa: 'ブラチ', type: 'island', country: 'Croatia', region: 'Dalmatia', popular: true },
    { id: 'bol', name: 'Bol', nameHr: 'Bol', nameDe: 'Bol', nameIt: 'Bol', nameFr: 'Bol', nameJa: 'ボル', type: 'island', country: 'Croatia', region: 'Brač Island', popular: true },
    { id: 'vis', name: 'Vis', nameHr: 'Vis', nameDe: 'Vis', nameIt: 'Lissa', nameFr: 'Vis', nameJa: 'ヴィス', type: 'island', country: 'Croatia', region: 'Dalmatia', popular: false },
    { id: 'pag', name: 'Pag', nameHr: 'Pag', nameDe: 'Pag', nameIt: 'Pago', nameFr: 'Pag', nameJa: 'パグ', type: 'island', country: 'Croatia', region: 'North Dalmatia', popular: false },
    { id: 'krk', name: 'Krk', nameHr: 'Krk', nameDe: 'Krk', nameIt: 'Veglia', nameFr: 'Krk', nameJa: 'クルク', type: 'island', country: 'Croatia', region: 'Kvarner', popular: false },
    { id: 'rab', name: 'Rab', nameHr: 'Rab', nameDe: 'Rab', nameIt: 'Arbe', nameFr: 'Rab', nameJa: 'ラブ', type: 'island', country: 'Croatia', region: 'Kvarner', popular: false },
    { id: 'cres', name: 'Cres', nameHr: 'Cres', nameDe: 'Cres', nameIt: 'Cherso', nameFr: 'Cres', nameJa: 'ツレス', type: 'island', country: 'Croatia', region: 'Kvarner', popular: false },
    { id: 'losinj', name: 'Lošinj', nameHr: 'Lošinj', nameDe: 'Lošinj', nameIt: 'Lussino', nameFr: 'Lošinj', nameJa: 'ロシニ', type: 'island', country: 'Croatia', region: 'Kvarner', popular: false },
    { id: 'mljet', name: 'Mljet', nameHr: 'Mljet', nameDe: 'Mljet', nameIt: 'Meleda', nameFr: 'Mljet', nameJa: 'ムリェト', type: 'island', country: 'Croatia', region: 'South Dalmatia', popular: false },

    // Croatian Airports
    { id: 'zagreb-airport', name: 'Zagreb Airport', nameHr: 'Zračna luka Zagreb', nameDe: 'Flughafen Zagreb', nameIt: 'Aeroporto di Zagabria', nameFr: 'Aéroport de Zagreb', nameJa: 'ザグレブ空港', type: 'airport', country: 'Croatia', region: 'Central Croatia', popular: true },
    { id: 'split-airport', name: 'Split Airport', nameHr: 'Zračna luka Split', nameDe: 'Flughafen Split', nameIt: 'Aeroporto di Spalato', nameFr: 'Aéroport de Split', nameJa: 'スプリト空港', type: 'airport', country: 'Croatia', region: 'Dalmatia', popular: true },
    { id: 'dubrovnik-airport', name: 'Dubrovnik Airport', nameHr: 'Zračna luka Dubrovnik', nameDe: 'Flughafen Dubrovnik', nameIt: 'Aeroporto di Ragusa', nameFr: 'Aéroport de Dubrovnik', nameJa: 'ドゥブロヴニク空港', type: 'airport', country: 'Croatia', region: 'South Dalmatia', popular: true },
    { id: 'zadar-airport', name: 'Zadar Airport', nameHr: 'Zračna luka Zadar', nameDe: 'Flughafen Zadar', nameIt: 'Aeroporto di Zara', nameFr: 'Aéroport de Zadar', nameJa: 'ザダル空港', type: 'airport', country: 'Croatia', region: 'North Dalmatia', popular: true },
    { id: 'pula-airport', name: 'Pula Airport', nameHr: 'Zračna luka Pula', nameDe: 'Flughafen Pula', nameIt: 'Aeroporto di Pola', nameFr: 'Aéroport de Pula', nameJa: 'プーラ空港', type: 'airport', country: 'Croatia', region: 'Istria', popular: true },
    { id: 'rijeka-airport', name: 'Rijeka Airport', nameHr: 'Zračna luka Rijeka', nameDe: 'Flughafen Rijeka', nameIt: 'Aeroporto di Fiume', nameFr: 'Aéroport de Rijeka', nameJa: 'リエカ空港', type: 'airport', country: 'Croatia', region: 'Kvarner', popular: false },

    // National Parks
    { id: 'plitvice', name: 'Plitvice Lakes', nameHr: 'Plitvička jezera', nameDe: 'Plitvicer Seen', nameIt: 'Laghi di Plitvice', nameFr: 'Lacs de Plitvice', nameJa: 'プリトヴィツェ湖群', type: 'city', country: 'Croatia', region: 'Central Croatia', popular: true },
    { id: 'krka', name: 'Krka National Park', nameHr: 'NP Krka', nameDe: 'Krka-Nationalpark', nameIt: 'Parco nazionale della Cherca', nameFr: 'Parc national de Krka', nameJa: 'クルカ国立公園', type: 'city', country: 'Croatia', region: 'North Dalmatia', popular: false },

    // International - Slovenia
    { id: 'ljubljana', name: 'Ljubljana', nameHr: 'Ljubljana', nameDe: 'Laibach', nameIt: 'Lubiana', nameFr: 'Ljubljana', nameJa: 'リュブリャナ', type: 'international', country: 'Slovenia', popular: true },
    { id: 'bled', name: 'Bled', nameHr: 'Bled', nameDe: 'Bled', nameIt: 'Bled', nameFr: 'Bled', nameJa: 'ブレッド', type: 'international', country: 'Slovenia', popular: false },
    { id: 'koper', name: 'Koper', nameHr: 'Koper', nameDe: 'Koper', nameIt: 'Capodistria', nameFr: 'Koper', nameJa: 'コペル', type: 'international', country: 'Slovenia', popular: false },
    { id: 'piran', name: 'Piran', nameHr: 'Piran', nameDe: 'Piran', nameIt: 'Pirano', nameFr: 'Piran', nameJa: 'ピラン', type: 'international', country: 'Slovenia', popular: false },

    // International - Austria
    { id: 'vienna', name: 'Vienna', nameHr: 'Beč', nameDe: 'Wien', nameIt: 'Vienna', nameFr: 'Vienne', nameJa: 'ウィーン', type: 'international', country: 'Austria', popular: true },
    { id: 'graz', name: 'Graz', nameHr: 'Graz', nameDe: 'Graz', nameIt: 'Graz', nameFr: 'Graz', nameJa: 'グラーツ', type: 'international', country: 'Austria', popular: true },
    { id: 'salzburg', name: 'Salzburg', nameHr: 'Salzburg', nameDe: 'Salzburg', nameIt: 'Salisburgo', nameFr: 'Salzbourg', nameJa: 'ザルツブルク', type: 'international', country: 'Austria', popular: false },

    // International - Italy
    { id: 'venice', name: 'Venice', nameHr: 'Venecija', nameDe: 'Venedig', nameIt: 'Venezia', nameFr: 'Venise', nameJa: 'ヴェネツィア', type: 'international', country: 'Italy', popular: true },
    { id: 'trieste', name: 'Trieste', nameHr: 'Trst', nameDe: 'Triest', nameIt: 'Trieste', nameFr: 'Trieste', nameJa: 'トリエステ', type: 'international', country: 'Italy', popular: true },
    { id: 'milan', name: 'Milan', nameHr: 'Milano', nameDe: 'Mailand', nameIt: 'Milano', nameFr: 'Milan', nameJa: 'ミラノ', type: 'international', country: 'Italy', popular: false },
    { id: 'rome', name: 'Rome', nameHr: 'Rim', nameDe: 'Rom', nameIt: 'Roma', nameFr: 'Rome', nameJa: 'ローマ', type: 'international', country: 'Italy', popular: false },

    // International - Hungary
    { id: 'budapest', name: 'Budapest', nameHr: 'Budimpešta', nameDe: 'Budapest', nameIt: 'Budapest', nameFr: 'Budapest', nameJa: 'ブダペスト', type: 'international', country: 'Hungary', popular: true },

    // International - Bosnia and Herzegovina
    { id: 'sarajevo', name: 'Sarajevo', nameHr: 'Sarajevo', nameDe: 'Sarajevo', nameIt: 'Sarajevo', nameFr: 'Sarajevo', nameJa: 'サラエヴォ', type: 'international', country: 'Bosnia and Herzegovina', popular: true },
    { id: 'mostar', name: 'Mostar', nameHr: 'Mostar', nameDe: 'Mostar', nameIt: 'Mostar', nameFr: 'Mostar', nameJa: 'モスタル', type: 'international', country: 'Bosnia and Herzegovina', popular: false },

    // International - Germany
    { id: 'munich', name: 'Munich', nameHr: 'München', nameDe: 'München', nameIt: 'Monaco di Baviera', nameFr: 'Munich', nameJa: 'ミュンヘン', type: 'international', country: 'Germany', popular: false },
];

// Helper function to get location name by language
export const getLocationName = (location: Location, language: string): string => {
    switch (language) {
        case 'hr':
            return location.nameHr;
        case 'de':
            return location.nameDe;
        case 'it':
            return location.nameIt;
        case 'fr':
            return location.nameFr;
        case 'ja':
            return location.nameJa;
        default:
            return location.name;
    }
};

// Helper function to filter locations by search query
export const filterLocations = (query: string, language: string = 'en'): Location[] => {
    if (!query) return locations.filter(loc => loc.popular);

    const lowerQuery = query.toLowerCase();
    return locations.filter(location => {
        const name = getLocationName(location, language).toLowerCase();
        return name.includes(lowerQuery) || location.name.toLowerCase().includes(lowerQuery);
    });
};

// Helper function to get popular locations
export const getPopularLocations = (): Location[] => {
    return locations.filter(loc => loc.popular);
};

// Helper function to get locations by type
export const getLocationsByType = (type: Location['type']): Location[] => {
    return locations.filter(loc => loc.type === type);
};
