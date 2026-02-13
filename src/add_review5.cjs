const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lib', 'translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

const review5Data = {
    en: 'review5: {\n        name: "Elena Rodriguez",\n        text: "Very reliable and professional service. The car was top-notch and the transfer was smooth.",\n        date: "February 2024",\n      },',
    hr: 'review5: {\n        name: "Elena Rodriguez",\n        text: "Vrlo pouzdana i profesionalna usluga. Automobil je bio vrhunski, a transfer bez poteškoća.",\n        date: "Veljača 2024",\n      },',
    de: 'review5: {\n        name: "Elena Rodriguez",\n        text: "Sehr zuverlässiger und professioneller Service. Das Auto war erstklassig und der Transfer verlief reibungslos.",\n        date: "Februar 2024",\n      },',
    it: 'review5: {\n        name: "Elena Rodriguez",\n        text: "Servizio molto affidabile e professionale. L\'auto era di alto livello e il trasferimento è stato agevole.",\n        date: "Febbraio 2024",\n      },',
    fr: 'review5: {\n        name: "Elena Rodriguez",\n        text: "Service très fiable et professionnel. La voiture était de premier ordre et le transfert s\'est déroulé sans accroc.",\n        date: "Février 2024",\n      },',
    ko: 'review5: {\n        name: "Elena Rodriguez",\n        text: "매우 안정적이고 전문적인 서비스입니다. 차량은 최고였고 픽업은 순조로웠습니다.",\n        date: "2024년 2월",\n      },',
    zh: 'review5: {\n        name: "Elena Rodriguez",\n        text: "非常可靠和专业的服务。车辆是一流 grain 的，接送过程非常顺利。",\n        date: "2024년 2월",\n      },',
    ja: 'review5: {\n        name: "Elena Rodriguez",\n        text: "非常に信頼性が高く、プロフェッショナルなサービスです。車は最高級で、送迎もスムーズでした。",\n        date: "2024年2月",\n      },'
};

// We will insert review5 after review4 in each language.
// Languages are en, hr, de, it, fr, ko, zh, ja.
const langs = ['en', 'hr', 'de', 'it', 'fr', 'ko', 'zh', 'ja'];

for (const lang of langs) {
    // Find review4 of the current language by looking for its specific textual patterns would be hard.
    // Instead, let's find the next occurrence of "review4: {" and insert after its closing "},".
    // Since we are iterating lang by lang, we can try to find them in order.
}

// Better: use a regex that finds review4 and its contents and appends review5.
// We need to do this carefully because "review4" appears many times.
// We can use a global replace with a counter or something.

let count = 0;
content = content.replace(/(review4: \{[\s\S]+?\},)/g, (match) => {
    const lang = langs[count++];
    if (lang && review5Data[lang]) {
        return match + '\n      ' + review5Data[lang];
    }
    return match;
});

fs.writeFileSync(filePath, content);
console.log('Added review5 to all languages.');
