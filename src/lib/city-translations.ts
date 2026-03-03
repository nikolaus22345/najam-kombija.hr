import { Language } from "./translations";

export const cityTranslations: Record<string, Partial<Record<Language, string>>> = {
    "Zagreb": { hr: "Zagreba", it: "Zagabria", ko: "자그레브", zh: "萨格勒布", ja: "ザグレブ" },
    "Split": { hr: "Splita", it: "Spalato", ko: "스플리트", zh: "斯普利特", ja: "スプリト" },
    "Dubrovnik": { hr: "Dubrovnika", it: "Ragusa", ko: "두브로브니크", zh: "杜布罗夫尼克", ja: "ドゥブロヴニク" },
    "Plitvice Lakes": { hr: "Plitvičkih jezera", de: "Plitvicer Seen", fr: "Lacs de Plitvice", it: "Laghi di Plitvice", ko: "플리트비체 호수", zh: "普利特维采湖", ja: "プリトヴィツェ湖" },
    "Zadar": { hr: "Zadra", it: "Zara", ko: "자다르", zh: "扎达尔", ja: "ザダル" },
    "Rijeka": { hr: "Rijeke", it: "Fiume", ko: "리예카", zh: "里耶卡", ja: "リエカ" },
    "Pula": { hr: "Pule", it: "Pola", ko: "풀라", zh: "普拉", ja: "プーラ" },
    "Rovinj": { hr: "Rovinja", it: "Rovigno", ko: "로빈", zh: "罗维尼", ja: "ロヴィニ" },
    "Opatija": { hr: "Opatije", it: "Abbazia", ko: "오파티야", zh: "奥帕蒂亚", ja: "オパティヤ" },
    "Makarska": { hr: "Makarske", it: "Macarsca", ko: "마카르스카", zh: "马卡尔斯卡", ja: "マカルスカ" },
    "Osijek": { hr: "Osijeka", it: "Esseg", ko: "오시예크", zh: "奥西耶克", ja: "オシエク" },
    "Slavonski Brod": { hr: "Slavonskog Broda" },
    "Varazdin": { hr: "Varaždina", de: "Warasdin", ko: "바라주딘", zh: "瓦拉日丁", ja: "ヴァラジュディン" },
    "Sisak": { hr: "Siska" },
    "Karlovac": { hr: "Karlovca" },
    "Novalja": { hr: "Novalje" },
    "Tisno": { hr: "Tisnog" },
    "Murter": { hr: "Murtera" },
    "Trogir": { hr: "Trogira", it: "Traù" },
    "Belgrade": { hr: "Beograda", de: "Belgrad", fr: "Belgrade", it: "Belgrado", ko: "베오그라드", zh: "贝尔格莱德", ja: "ベオグラード" },
    "Sarajevo": { hr: "Sarajeva", ko: "사라예보", zh: "萨拉热窝", ja: "サラエボ" },
    "Ljubljana": { hr: "Ljubljane", de: "Laibach", it: "Lubiana", ko: "류블랴나", zh: "卢布尔雅那", ja: "リュブリャナ" },
    "Vienna": { hr: "Beča", de: "Wien", fr: "Vienne", it: "Vienna", ko: "빈", zh: "维也纳", ja: "ウィーン" },
    "Budapest": { hr: "Budimpešte", de: "Budapest", fr: "Budapest", it: "Budapest", ko: "부다페스트", zh: "布达佩斯", ja: "ブダペスト" },
    "Venice": { hr: "Venecije", de: "Venedig", fr: "Venise", it: "Venezia", ko: "베네치아", zh: "威尼斯", ja: "ヴェネツィア" },
    "Trieste": { hr: "Trsta", de: "Triest", fr: "Trieste", it: "Trieste", ko: "트리에스테", zh: "的里雅斯特", ja: "トリエステ" },
    "Milan": { hr: "Milana", de: "Mailand", fr: "Milan", it: "Milano", ko: "밀라노", zh: "米兰", ja: "ミラノ" },
    "Munich": { hr: "Münchena", de: "München", fr: "Munich", it: "Monaco di Baviera", ko: "뮌헨", zh: "慕尼黑", ja: "ミュンヘン" },
    "Graz": { hr: "Graza", ko: "그라츠", zh: "格拉茨", ja: "グラーツ" },
    "Prague": { hr: "Praga", de: "Prag", fr: "Prague", it: "Praga", ko: "프라하", zh: "布拉格", ja: "プラ하" },
    "Krakow": { hr: "Krakova", de: "Krakau", fr: "Cracovie", it: "Cracovia", ko: "크라쿠프", zh: "克拉科夫", ja: "クラクフ" },
    "Celje": { hr: "Celja" },
    "Portoroz": { hr: "Portoroža", it: "Portorose" },
    "Rome": { hr: "Rima", de: "Rom", fr: "Rome", it: "Roma", ko: "로마", zh: "罗马", ja: "ローマ" },
    "Passau": { hr: "Passaua" },
    "Bihac": { hr: "Bihaća" }
};

export const getCityTranslation = (city: string, language: Language, isOriginForHrH1: boolean = false): string => {
    // For HR title "Transfer {origin} do {destination}", origin must remain in nominative, while destination gets genitive
    // The dictionary has HR in Genitive.
    if (language === 'hr' && isOriginForHrH1) {
        return city;
    }

    // For normal UI translation (like "Zagreb - Split") we don't need genitive but nominative in HR.
    // However, our dictionary is built for Genitive in HR.
    // For Italian, "Zagabria - Spalato" both are nominative translations.
    // Let's add a separate logic for "A to B" buttons.
    return cityTranslations[city]?.[language] || city;
};

// Nominative translations for UI elements (buttons, links)
export const uiCityTranslations: Record<string, Partial<Record<Language, string>>> = {
    "Zagreb": { hr: "Zagreb", it: "Zagabria", ko: "자그레브", zh: "萨格勒布", ja: "ザグレブ", de: "Zagreb", fr: "Zagreb" },
    "Split": { hr: "Split", it: "Spalato", ko: "스플리트", zh: "斯普利特", ja: "スプリト", de: "Split", fr: "Split" },
    "Dubrovnik": { hr: "Dubrovnik", it: "Ragusa", ko: "두브로브니크", zh: "杜布罗夫尼克", ja: "ドゥブロヴニク", de: "Dubrovnik", fr: "Dubrovnik" },
    "Plitvice Lakes": { hr: "Plitvička jezera", de: "Plitvicer Seen", fr: "Lacs de Plitvice", it: "Laghi di Plitvice", ko: "플리트비체 호수", zh: "普利特维采湖", ja: "プリトヴィツェ湖" },
    "Zadar": { hr: "Zadar", it: "Zara", ko: "자다르", zh: "扎达尔", ja: "ザダル", de: "Zadar", fr: "Zadar" },
    "Rijeka": { hr: "Rijeka", it: "Fiume", ko: "리예카", zh: "里耶卡", ja: "リエカ", de: "Rijeka", fr: "Rijeka" },
    "Pula": { hr: "Pula", it: "Pola", ko: "풀라", zh: "普拉", ja: "プーラ", de: "Pula", fr: "Pula" },
    "Rovinj": { hr: "Rovinj", it: "Rovigno", ko: "로빈", zh: "罗维尼", ja: "ロヴィニ", de: "Rovinj", fr: "Rovinj" },
    "Opatija": { hr: "Opatija", it: "Abbazia", ko: "오파티야", zh: "奥帕蒂亚", ja: "オパティヤ", de: "Opatija", fr: "Opatija" },
    "Makarska": { hr: "Makarska", it: "Macarsca", ko: "마카르스카", zh: "马卡尔斯卡", ja: "マカルスカ", de: "Makarska", fr: "Makarska" },
    "Osijek": { hr: "Osijek", it: "Esseg", ko: "오시예크", zh: "奥西耶克", ja: "オシエク", de: "Osijek", fr: "Osijek" },
    "Varazdin": { hr: "Varaždin", de: "Warasdin", ko: "바라주딘", zh: "瓦拉日丁", ja: "ヴァラジュディン", fr: "Varaždin" },
    "Trogir": { hr: "Trogir", it: "Traù" },
    "Belgrade": { hr: "Beograd", de: "Belgrad", fr: "Belgrade", it: "Belgrado", ko: "베오그라드", zh: "贝尔格莱德", ja: "ベオグラード" },
    "Sarajevo": { hr: "Sarajevo", ko: "사라예보", zh: "萨拉热窝", ja: "サラエボ" },
    "Ljubljana": { hr: "Ljubljana", de: "Laibach", fr: "Ljubljana", it: "Lubiana", ko: "류블랴나", zh: "卢布尔雅那", ja: "リュブリャナ" },
    "Vienna": { hr: "Beč", de: "Wien", fr: "Vienne", it: "Vienna", ko: "빈", zh: "维也纳", ja: "ウィーン" },
    "Budapest": { hr: "Budimpešta", de: "Budapest", fr: "Budapest", it: "Budapest", ko: "부다페스트", zh: "布达佩斯", ja: "ブダペスト" },
    "Venice": { hr: "Venecija", de: "Venedig", fr: "Venise", it: "Venezia", ko: "베네치아", zh: "威尼斯", ja: "ヴェネツィア" },
    "Trieste": { hr: "Trst", de: "Triest", fr: "Trieste", it: "Trieste", ko: "트리에스테", zh: "的里雅斯特", ja: "トリエステ" },
    "Milan": { hr: "Milano", de: "Mailand", fr: "Milan", it: "Milano", ko: "밀라노", zh: "米兰", ja: "ミラノ" },
    "Munich": { hr: "München", de: "München", fr: "Munich", it: "Monaco di Baviera", ko: "뮌헨", zh: "慕尼黑", ja: "ミュンヘン" },
    "Graz": { hr: "Graz", ko: "그라츠", zh: "格拉茨", ja: "グラーツ" },
    "Prague": { hr: "Prag", de: "Prag", fr: "Prague", it: "Praga", ko: "프라하", zh: "布拉格", ja: "プラ하" },
    "Krakow": { hr: "Krakov", de: "Krakau", fr: "Cracovie", it: "Cracovia", ko: "크라쿠프", zh: "克拉科夫", ja: "クラクフ" },
    "Celje": { hr: "Celje" },
    "Portoroz": { hr: "Portorož", it: "Portorose" },
    "Rome": { hr: "Rim", de: "Rom", fr: "Rome", it: "Roma", ko: "로마", zh: "罗马", ja: "ローマ" },
    "Passau": { hr: "Passau" },
    "Bihac": { hr: "Bihać" },
    "Slavonski Brod": { hr: "Slavonski Brod" },
    "Sisak": { hr: "Sisak" },
    "Karlovac": { hr: "Karlovac" },
    "Novalja": { hr: "Novalja" },
    "Tisno": { hr: "Tisno" },
    "Murter": { hr: "Murter" }
};

export const getRouteButtonText = (origin: string, destination: string, language: Language): string => {
    const locOrigin = uiCityTranslations[origin]?.[language] || origin;
    const locDest = uiCityTranslations[destination]?.[language] || destination;
    return `${locOrigin} - ${locDest}`;
};
