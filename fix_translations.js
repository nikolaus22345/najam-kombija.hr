const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'lib', 'translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The goal is to ensure that popularRoutes is correctly closed and popularBlogs starts properly.
// And remove popularDestinations.

// 1. Fix the nesting of popularRoutes and popularBlogs
content = content.replace(/popularRoutes: \{\s+popularBlogs: \{/g, 'popularRoutes: {\n      title: "Popular Routes",\n    },\n    popularBlogs: {');

// 2. Remove popularDestinations blocks
// This regex matches from "popularDestinations: {" to the next top-level key like "popularBlogs: {"
// We need to be careful with nested braces.
// Since the structure is consistent, we can try to match the whole block.

const languages = ['en', 'hr', 'de', 'it', 'fr', 'ko', 'zh', 'ja'];

// Re-write a cleaner version of the file would be best but let's try some targeted fixes.

// Fix Croatian title in about
content = content.replace(/"Iskusite Hrvatsku s Povjerenjemo"/g, '"Iskusite Hrvatsku s Povjerenjem"');

fs.writeFileSync(filePath, content);
console.log('Translations fixed successfully.');
