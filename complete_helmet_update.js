const fs = require('fs');
const path = require('path');

// Define the files and their update patterns
const updates = [
  // Location pages
  {
    file: 'src/pages/Noblesville.tsx',
    title: 'Noblesville, IN Pressure Washing - Professional Service',
    description: 'Professional pressure washing services in Noblesville, IN. Specialized lakeside cleaning for Morse Reservoir properties, downtown brick facades, and restaurant patios.',
    canonical: 'https://brownsburgpressurewashing.com/service-areas/noblesville'
  },
  {
    file: 'src/pages/Westfield.tsx', 
    title: 'Westfield, IN Pressure Washing - Fast Growing Suburbs',
    description: 'Professional pressure washing services in Westfield, IN. Specialized cleaning for fast-growing suburbs and new construction with expert care.',
    canonical: 'https://brownsburgpressurewashing.com/service-areas/westfield'
  },
  {
    file: 'src/pages/Plainfield.tsx',
    title: 'Plainfield, IN Pressure Washing - Logistics Hub Cleaning',  
    description: 'Professional pressure washing services in Plainfield, IN. Specialized cleaning for logistics facilities, family neighborhoods, and warehouse complexes.',
    canonical: 'https://brownsburgpressurewashing.com/service-areas/plainfield'
  },
  {
    file: 'src/pages/Danville.tsx',
    title: 'Danville, IN Pressure Washing - Small Town Service',
    description: 'Professional pressure washing services in Danville, IN. Quality cleaning for residential and commercial properties in this charming small town.',
    canonical: 'https://brownsburgpressurewashing.com/service-areas/danville'  
  },
  {
    file: 'src/pages/Carmel.tsx',
    title: 'Carmel, IN Pressure Washing - Luxury Home Cleaning',
    description: 'Professional pressure washing services in Carmel, IN. Specialized cleaning for luxury homes, upscale neighborhoods, and premium properties.',
    canonical: 'https://brownsburgpressurewashing.com/service-areas/carmel'
  },
  {
    file: 'src/pages/Avon.tsx',
    title: 'Avon, IN Pressure Washing - Premium Cleaning Services',
    description: 'Professional pressure washing services in Avon, IN. Premium cleaning for newer vinyl siding subdivisions and brick estates.',
    canonical: 'https://brownsburgpressurewashing.com/service-areas/avon'
  }
];

console.log('Files to update:', updates.map(u => u.file).join(', '));
