const fs = require('fs');
const path = require('path');

const VALID_LANGUAGES = ['en', 'hr', 'de', 'it', 'fr', 'ko', 'zh', 'ja'];
const BASE_URL = 'https://www.zagreb-transfers.hr';

// Read AppRoutes.tsx
const appRoutesPath = path.join(__dirname, 'src', 'AppRoutes.tsx');
const routeMapPath = path.join(__dirname, 'src', 'lib', 'route-mapping.ts');

const appRoutesContent = fs.readFileSync(appRoutesPath, 'utf8');

// Also try to read routeMap if we can easily parse it
// Since it's TS, parsing it safely via regex is easier
const routeMapContent = fs.readFileSync(routeMapPath, 'utf8');
const routeMap = {};
// basic parsing routeMap
const blockRegex = /'([^']+)':\s*\{([^}]+)\}/g;
let match;
while ((match = blockRegex.exec(routeMapContent)) !== null) {
    const enPath = match[1];
    const langBlock = match[2];
    routeMap[enPath] = {};

    const langRegex = /([a-z]{2}):\s*'([^']+)'/g;
    let langMatch;
    while ((langMatch = langRegex.exec(langBlock)) !== null) {
        routeMap[enPath][langMatch[1]] = langMatch[2];
    }
}

// Extract routes
const routes = new Set();
const routeRegex = /<Route\s+(?:index\s+)?(path="([^"]*)")?/g;
let rMatch;
while ((rMatch = routeRegex.exec(appRoutesContent)) !== null) {
    let p = rMatch[2];
    if (p === undefined && rMatch[0].includes('index')) {
        p = '/';
    }

    if (p && !p.includes(':')) {
        // normalize
        if (!p.startsWith('/')) p = '/' + p;
        if (p === '/*') continue;
        routes.add(p);
    }
}

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

const formatUrl = (p) => {
    if (p === '/' || p === '') return `${BASE_URL}/`;
    const cleanPath = p.replace(/\/+$/, '');
    return `${BASE_URL}${cleanPath}/`;
};

routes.forEach(enPath => {
    // For each valid language, find localized path
    VALID_LANGUAGES.forEach(lang => {
        let mappedPath = routeMap[enPath]?.[lang] || null;
        if (!mappedPath && routeMap[enPath] && !routeMap[enPath][lang]) {
            // explicitly excluded
            return;
        }
        if (!mappedPath) {
            mappedPath = enPath;
        }

        let fullPath = lang === 'en' ? mappedPath : `/${lang}${mappedPath === '/' ? '' : mappedPath}`;

        sitemap += `  <url>\n    <loc>${formatUrl(fullPath)}</loc>\n  </url>\n`;
    });
});

sitemap += '</urlset>\n';

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully.');
