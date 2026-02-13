const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'lib', 'translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix the broken French/Italian closing.
// We saw:
// 1227:     },
// 1228:   },
// 1229:   popularBlogs: {

// It should be one level of indentation more for popularBlogs.
// And 1228 should NOT be there or should be later.

content = content.replace(/\s+},\s+},\s+popularBlogs: {/g, '\n    },\n    popularBlogs: {');

// 2. Remove popularDestinations blocks globally.
// This is risky with regex but the structure is very consistent.
// popularDestinations: { ... },
// We can use a recursive-ish regex or just match to the next known key.

const keysToRemove = [
    'popularDestinations: {\\s+title: "Destinazioni Popolari",[\\s\\S]+?},',
    'popularDestinations: {\\s+title: "Destinations Populaires",[\\s\\S]+?},',
    'popularDestinations: {\\s+title: "인기 목적지",[\\s\\S]+?},',
    'popularDestinations: {\\s+title: "热门目的地",[\\s\\S]+?},',
    'popularDestinations: {\\s+title: "人気の目的地",[\\s\\S]+?},'
];

for (const keyRegex of keysToRemove) {
    content = content.replace(new RegExp(keyRegex, 'g'), '');
}

// 3. Fix the "Popularne Rute" in German
content = content.replace(/title: "Popularne Rute",/g, 'title: "Beliebte Routen",');

// 4. Fix the Croatian About title
content = content.replace(/"Iskusite Hrvatsku s Povjerenjemo"/g, '"Iskusite Hrvatsku s Povjerenjem"');

fs.writeFileSync(filePath, content);
console.log('Fixed translations.ts');
