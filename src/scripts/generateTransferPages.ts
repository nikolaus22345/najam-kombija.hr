// Script to generate all missing transfer route pages
// This will create pages for all routes listed in PopularRoutes.tsx

import * as fs from 'fs';
import * as path from 'path';

interface Route {
    from: string;
    to: string;
    distance: number;
    duration: number;
    price: number;
    fileName: string;
}

const routes: Route[] = [
    // Existing routes (already created)
    { from: "Zagreb", to: "Split", distance: 380, duration: 240, price: 250, fileName: "ZagrebToSplit" },
    { from: "Zagreb", to: "Dubrovnik", distance: 600, duration: 360, price: 400, fileName: "ZagrebToDubrovnik" },
    { from: "Zagreb", to: "Plitvice Lakes", distance: 140, duration: 90, price: 120, fileName: "ZagrebToPlitviceLakes" },
    { from: "Zagreb", to: "Zadar", distance: 285, duration: 180, price: 200, fileName: "ZagrebToZadar" },
    { from: "Zagreb", to: "Rijeka", distance: 165, duration: 120, price: 140, fileName: "ZagrebToRijeka" },
    { from: "Zagreb", to: "Pula", distance: 265, duration: 180, price: 180, fileName: "ZagrebToPula" },
    { from: "Zagreb", to: "Rovinj", distance: 280, duration: 195, price: 190, fileName: "ZagrebToRovinj" },
    { from: "Zagreb", to: "Opatija", distance: 175, duration: 130, price: 150, fileName: "ZagrebToOpatija" },
    { from: "Zagreb", to: "Makarska", distance: 430, duration: 270, price: 280, fileName: "ZagrebToMakarska" },
    { from: "Zagreb", to: "Ljubljana", distance: 140, duration: 90, price: 120, fileName: "ZagrebToLjubljana" },
    { from: "Zagreb", to: "Vienna", distance: 380, duration: 240, price: 250, fileName: "ZagrebToVienna" },
    { from: "Zagreb", to: "Graz", distance: 200, duration: 150, price: 160, fileName: "ZagrebToGraz" },
    { from: "Zagreb", to: "Munich", distance: 550, duration: 360, price: 380, fileName: "ZagrebToMunich" },
    { from: "Zagreb", to: "Poreč", distance: 250, duration: 180, price: 170, fileName: "ZagrebToPorec" },

    // NEW routes to create
    { from: "Zagreb", to: "Osijek", distance: 280, duration: 180, price: 190, fileName: "ZagrebToOsijek" },
    { from: "Zagreb", to: "Slavonski Brod", distance: 200, duration: 150, price: 160, fileName: "ZagrebToSlavonskiBrod" },
    { from: "Zagreb", to: "Varaždin", distance: 80, duration: 60, price: 80, fileName: "ZagrebToVarazdin" },
    { from: "Zagreb", to: "Sisak", distance: 55, duration: 45, price: 70, fileName: "ZagrebToSisak" },
    { from: "Zagreb", to: "Karlovac", distance: 55, duration: 45, price: 70, fileName: "ZagrebToKarlovac" },
    { from: "Zagreb", to: "Novalja", distance: 320, duration: 210, price: 220, fileName: "ZagrebToNovalja" },
    { from: "Zagreb", to: "Tisno", distance: 340, duration: 225, price: 230, fileName: "ZagrebToTisno" },
    { from: "Zagreb", to: "Murter", distance: 340, duration: 225, price: 230, fileName: "ZagrebToMurter" },
    { from: "Zagreb", to: "Trogir", distance: 370, duration: 235, price: 245, fileName: "ZagrebToTrogir" },
    { from: "Zagreb", to: "Belgrade", distance: 380, duration: 240, price: 250, fileName: "ZagrebToBelgrade" },
    { from: "Zagreb", to: "Sarajevo", distance: 400, duration: 270, price: 270, fileName: "ZagrebToSarajevo" },
    { from: "Zagreb", to: "Budapest", distance: 350, duration: 240, price: 240, fileName: "ZagrebToBudapest" },
    { from: "Zagreb", to: "Venice", distance: 420, duration: 300, price: 300, fileName: "ZagrebToVenice" },
    { from: "Zagreb", to: "Trieste", distance: 240, duration: 180, price: 170, fileName: "ZagrebToTrieste" },
    { from: "Zagreb", to: "Milan", distance: 620, duration: 420, price: 430, fileName: "ZagrebToMilan" },
    { from: "Zagreb", to: "Prague", distance: 680, duration: 480, price: 480, fileName: "ZagrebToPrague" },
    { from: "Zagreb", to: "Krakow", distance: 620, duration: 450, price: 450, fileName: "ZagrebToKrakow" },
    { from: "Zagreb", to: "Celje", distance: 110, duration: 90, price: 100, fileName: "ZagrebToCelje" },
    { from: "Zagreb", to: "Portorož", distance: 260, duration: 195, price: 180, fileName: "ZagrebToPortoroz" },
    { from: "Zagreb", to: "Rome", distance: 850, duration: 600, price: 600, fileName: "ZagrebToRome" },
    { from: "Zagreb", to: "Passau", distance: 480, duration: 330, price: 340, fileName: "ZagrebToPassau" },
    { from: "Zagreb", to: "Bihać", distance: 180, duration: 135, price: 150, fileName: "ZagrebToBihac" },
];

const generateTransferPage = (route: Route): string => {
    return `import TransferLandingPage from "@/components/TransferLandingPage";

const ${route.fileName} = () => {
  return (
    <TransferLandingPage
      origin="${route.from}"
      destination="${route.to}"
      distanceKm={${route.distance}}
      durationMin={${route.duration}}
      price={${route.price}}
    />
  );
};

export default ${route.fileName};
`;
};

// Check which files already exist
const transfersDir = path.join(__dirname, '..', 'pages', 'transfers', 'routes');
const existingFiles = fs.readdirSync(transfersDir);

console.log('Generating missing transfer route pages...\n');

let createdCount = 0;
let skippedCount = 0;

routes.forEach(route => {
    const fileName = `${route.fileName}.tsx`;
    const filePath = path.join(transfersDir, fileName);

    if (existingFiles.includes(fileName)) {
        console.log(`✓ ${fileName} already exists - skipping`);
        skippedCount++;
    } else {
        const content = generateTransferPage(route);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✓ Created ${fileName}`);
        createdCount++;
    }
});

console.log(`\n✅ Done! Created ${createdCount} new files, skipped ${skippedCount} existing files.`);
console.log('\nNext steps:');
console.log('1. Add imports to App.tsx');
console.log('2. Add routes to App.tsx');
console.log('3. Test all routes');
