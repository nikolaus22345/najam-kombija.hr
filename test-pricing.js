const { calculateTransferPrice } = require('./src/lib/pricing.ts');

const tsNodeOptions = require('ts-node').register({
  compilerOptions: { module: 'commonjs' }
});

const pricing = require('./src/lib/pricing.ts');

console.log('Dubrovnik Airport To Zagreb Airport:');
console.log(pricing.calculateTransferPrice('Dubrovnik Airport, Croatia', 'Zagreb Airport, Croatia', 633));

console.log('Split Airport To Zagreb');
console.log(pricing.calculateTransferPrice('Split Airport', 'Zagreb', 410));

console.log('Zadar To Zagreb');
console.log(pricing.calculateTransferPrice('Zadar', 'Zagreb', 300));
