const fs = require('fs');
const Convert = require('./Spec');

const jsonSpec = fs.readFileSync('./bar.vl.json', 'utf-8');
console.log('spec JSON string:', jsonSpec);

const spec = Convert.toSpec(jsonSpec);
console.log('spec Object:', spec);

console.log('specToJson result', Convert.specToJson(spec));

