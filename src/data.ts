import { UnitCategory } from './types';

export const UNIT_CATEGORIES: UnitCategory[] = [
  {
    id: 'length',
    name: 'Length',
    iconName: 'Ruler',
    baseUnitId: 'm',
    description: 'Distance, spatial spans, and subatomic scale parameters',
    units: [
      { id: 'nm', name: 'Nanometers', symbol: 'nm', system: 'metric', ratio: 1000000000, toBase: 0.000000001 },
      { id: 'um', name: 'Micrometers', symbol: 'µm', system: 'metric', ratio: 1000000, toBase: 0.000001 },
      { id: 'mm', name: 'Millimeters', symbol: 'mm', system: 'metric', ratio: 1000, toBase: 0.001 },
      { id: 'cm', name: 'Centimeters', symbol: 'cm', system: 'metric', ratio: 100, toBase: 0.01 },
      { id: 'dm', name: 'Decimeters', symbol: 'dm', system: 'metric', ratio: 10, toBase: 0.1 },
      { id: 'm', name: 'Meters', symbol: 'm', system: 'metric', ratio: 1, toBase: 1 },
      { id: 'km', name: 'Kilometers', symbol: 'km', system: 'metric', ratio: 0.001, toBase: 1000 },
      { id: 'in', name: 'Inches', symbol: 'in', system: 'imperial', ratio: 39.3700787, toBase: 0.0254 },
      { id: 'ft', name: 'Feet', symbol: 'ft', system: 'imperial', ratio: 3.2808399, toBase: 0.3048 },
      { id: 'yd', name: 'Yards', symbol: 'yd', system: 'imperial', ratio: 1.0936133, toBase: 0.9144 },
      { id: 'mi', name: 'Miles', symbol: 'mi', system: 'imperial', ratio: 0.000621371, toBase: 1609.344 },
      { id: 'nmi', name: 'Nautical Miles', symbol: 'nmi', system: 'universal', ratio: 0.000539957, toBase: 1852 },
      { id: 'ly', name: 'Light Years', symbol: 'ly', system: 'universal', ratio: 1.05702341e-16, toBase: 9.4607304725808e15 }
    ]
  },
  {
    id: 'weight',
    name: 'Weight & Mass',
    iconName: 'Weight',
    baseUnitId: 'kg',
    description: 'Physical weight, mass, and micro-gravitational metrics',
    units: [
      { id: 'ug', name: 'Micrograms', symbol: 'µg', system: 'metric', ratio: 1000000000, toBase: 0.000000001 },
      { id: 'mg', name: 'Milligrams', symbol: 'mg', system: 'metric', ratio: 1000000, toBase: 0.000001 },
      { id: 'g', name: 'Grams', symbol: 'g', system: 'metric', ratio: 1000, toBase: 0.001 },
      { id: 'kg', name: 'Kilograms', symbol: 'kg', system: 'metric', ratio: 1, toBase: 1 },
      { id: 't', name: 'Metric Tons', symbol: 't', system: 'metric', ratio: 0.001, toBase: 1000 },
      { id: 'oz', name: 'Ounces', symbol: 'oz', system: 'imperial', ratio: 35.2739619, toBase: 0.028349523125 },
      { id: 'lb', name: 'Pounds', symbol: 'lb', system: 'imperial', ratio: 2.20462262, toBase: 0.45359237 },
      { id: 'st', name: 'Stone', symbol: 'st', system: 'imperial', ratio: 0.15747304, toBase: 6.35029318 },
      { id: 'ct', name: 'Carats', symbol: 'ct', system: 'universal', ratio: 5000, toBase: 0.0002 }
    ]
  },
  {
    id: 'temperature',
    name: 'Temperature',
    iconName: 'Thermometer',
    baseUnitId: 'C',
    description: 'Scale transitions including Kelvin, Rankine, and Réaumur',
    units: [
      { id: 'C', name: 'Celsius', symbol: '°C', system: 'metric', ratio: 1, toBase: 1 },
      { id: 'F', name: 'Fahrenheit', symbol: '°F', system: 'imperial', ratio: 1, toBase: 1 },
      { id: 'K', name: 'Kelvin', symbol: 'K', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'R', name: 'Rankine', symbol: '°R', system: 'imperial', ratio: 1, toBase: 1 },
      { id: 'Re', name: 'Réaumur', symbol: '°Re', system: 'universal', ratio: 1, toBase: 1 }
    ]
  },
  {
    id: 'area',
    name: 'Area',
    iconName: 'Square',
    baseUnitId: 'm2',
    description: 'Surface, plot land, and floor sizing metrics',
    units: [
      { id: 'mm2', name: 'Square Millimeters', symbol: 'mm²', system: 'metric', ratio: 1000000, toBase: 0.000001 },
      { id: 'cm2', name: 'Square Centimeters', symbol: 'cm²', system: 'metric', ratio: 10000, toBase: 0.0001 },
      { id: 'm2', name: 'Square Meters', symbol: 'm²', system: 'metric', ratio: 1, toBase: 1 },
      { id: 'km2', name: 'Square Kilometers', symbol: 'km²', system: 'metric', ratio: 0.000001, toBase: 1000000 },
      { id: 'in2', name: 'Square Inches', symbol: 'in²', system: 'imperial', ratio: 1550.0031, toBase: 0.00064516 },
      { id: 'ft2', name: 'Square Feet', symbol: 'ft²', system: 'imperial', ratio: 10.7639104, toBase: 0.09290304 },
      { id: 'yd2', name: 'Square Yards', symbol: 'yd²', system: 'imperial', ratio: 1.19599, toBase: 0.83612736 },
      { id: 'ac', name: 'Acres', symbol: 'ac', system: 'imperial', ratio: 0.000247105, toBase: 4046.8564224 },
      { id: 'ha', name: 'Hectares', symbol: 'ha', system: 'metric', ratio: 0.0001, toBase: 10000 },
      { id: 'mi2', name: 'Square Miles', symbol: 'mi²', system: 'imperial', ratio: 3.861021585e-7, toBase: 2589988.11 }
    ]
  },
  {
    id: 'volume',
    name: 'Volume',
    iconName: 'Droplet',
    baseUnitId: 'L',
    description: 'Dry and wet displacement parameters',
    units: [
      { id: 'ml', name: 'Milliliters', symbol: 'mL', system: 'metric', ratio: 1000, toBase: 0.001 },
      { id: 'cl', name: 'Centiliters', symbol: 'cL', system: 'metric', ratio: 100, toBase: 0.01 },
      { id: 'dl', name: 'Deciliters', symbol: 'dL', system: 'metric', ratio: 10, toBase: 0.1 },
      { id: 'l', name: 'Liters', symbol: 'L', system: 'metric', ratio: 1, toBase: 1 },
      { id: 'm3', name: 'Cubic Meters', symbol: 'm³', system: 'metric', ratio: 0.001, toBase: 1000 },
      { id: 'tsp', name: 'Teaspoons (US)', symbol: 'tsp', system: 'imperial', ratio: 202.884, toBase: 0.00492892159375 },
      { id: 'tbsp', name: 'Tablespoons (US)', symbol: 'tbsp', system: 'imperial', ratio: 67.628, toBase: 0.01478676478125 },
      { id: 'floz', name: 'Fluid Ounces (US)', symbol: 'fl oz', system: 'imperial', ratio: 33.814, toBase: 0.0295735295625 },
      { id: 'cup', name: 'Cups (US)', symbol: 'cup', system: 'imperial', ratio: 4.22675, toBase: 0.2365882365 },
      { id: 'pt', name: 'Pints (US)', symbol: 'pt', system: 'imperial', ratio: 2.11338, toBase: 0.473176473 },
      { id: 'qt', name: 'Quarts (US)', symbol: 'qt', system: 'imperial', ratio: 1.05669, toBase: 0.946352946 },
      { id: 'gal', name: 'Gallons (US)', symbol: 'gal', system: 'imperial', ratio: 0.264172, toBase: 3.785411784 },
      { id: 'cm3', name: 'Cubic Centimeters', symbol: 'cm³', system: 'metric', ratio: 1000, toBase: 0.001 },
      { id: 'in3', name: 'Cubic Inches', symbol: 'in³', system: 'imperial', ratio: 61.023744, toBase: 0.016387064 },
      { id: 'ft3', name: 'Cubic Feet', symbol: 'ft³', system: 'imperial', ratio: 0.035314667, toBase: 28.316846592 }
    ]
  },
  {
    id: 'time',
    name: 'Time',
    iconName: 'Clock',
    baseUnitId: 's',
    description: 'Chronological events and astronomical periods',
    units: [
      { id: 'us', name: 'Microseconds', symbol: 'µs', system: 'universal', ratio: 1000000, toBase: 0.000001 },
      { id: 'ms', name: 'Milliseconds', symbol: 'ms', system: 'universal', ratio: 1000, toBase: 0.001 },
      { id: 's', name: 'Seconds', symbol: 's', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'min', name: 'Minutes', symbol: 'min', system: 'universal', ratio: 1 / 60, toBase: 60 },
      { id: 'h', name: 'Hours', symbol: 'h', system: 'universal', ratio: 1 / 3600, toBase: 3600 },
      { id: 'd', name: 'Days', symbol: 'd', system: 'universal', ratio: 1 / 86400, toBase: 86400 },
      { id: 'wk', name: 'Weeks', symbol: 'wk', system: 'universal', ratio: 1 / 604800, toBase: 604800 },
      { id: 'mo', name: 'Months (Avg)', symbol: 'mo', system: 'universal', ratio: 1 / 2592000, toBase: 2592000 },
      { id: 'yr', name: 'Years', symbol: 'yr', system: 'universal', ratio: 1 / 31536000, toBase: 31536000 },
      { id: 'decade', name: 'Decades', symbol: 'dec', system: 'universal', ratio: 1 / 315360000, toBase: 315360000 }
    ]
  },
  {
    id: 'speed',
    name: 'Speed',
    iconName: 'Gauge',
    baseUnitId: 'm_s',
    description: 'Traveled distance per unit time and velocity',
    units: [
      { id: 'm_s', name: 'Meters per Second', symbol: 'm/s', system: 'metric', ratio: 1, toBase: 1 },
      { id: 'km_h', name: 'Kilometers per Hour', symbol: 'km/h', system: 'metric', ratio: 3.6, toBase: 1 / 3.6 },
      { id: 'mph', name: 'Miles per Hour', symbol: 'mph', system: 'imperial', ratio: 2.23693629, toBase: 0.44704 },
      { id: 'kt', name: 'Knots', symbol: 'kt', system: 'universal', ratio: 1.94384449, toBase: 0.51444444 },
      { id: 'fps', name: 'Feet per Second', symbol: 'fps', system: 'imperial', ratio: 3.2808399, toBase: 0.3048 },
      { id: 'c', name: 'Speed of Light', symbol: 'c', system: 'universal', ratio: 3.33564095e-9, toBase: 299792458 },
      { id: 'mach', name: 'Mach Velocity', symbol: 'Ma', system: 'universal', ratio: 0.00293866, toBase: 340.29 }
    ]
  },
  {
    id: 'digital',
    name: 'Digital Data',
    iconName: 'Cpu',
    baseUnitId: 'B',
    description: 'Binary memory sizing and transmission metrics',
    units: [
      { id: 'bit', name: 'Bits', symbol: 'b', system: 'universal', ratio: 8, toBase: 0.125 },
      { id: 'B', name: 'Bytes', symbol: 'B', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'KB', name: 'Kilobytes', symbol: 'KB', system: 'universal', ratio: 1 / 1024, toBase: 1024 },
      { id: 'MB', name: 'Megabytes', symbol: 'MB', system: 'universal', ratio: 1 / 1048576, toBase: 1048576 },
      { id: 'GB', name: 'Gigabytes', symbol: 'GB', system: 'universal', ratio: 1 / 1073741824, toBase: 1073741824 },
      { id: 'TB', name: 'Terabytes', symbol: 'TB', system: 'universal', ratio: 1 / 1099511627776, toBase: 1099511627776 },
      { id: 'PB', name: 'Petabytes', symbol: 'PB', system: 'universal', ratio: 1 / 1125899906842624, toBase: 1125899906842624 },
      { id: 'EB', name: 'Exabytes', symbol: 'EB', system: 'universal', ratio: 1 / 1152921504606846976, toBase: 1152921504606846976 }
    ]
  },
  {
    id: 'energy',
    name: 'Energy & Work',
    iconName: 'Zap',
    baseUnitId: 'J',
    description: 'Thermal, mechanical, electric, and atomic energy',
    units: [
      { id: 'J', name: 'Joules', symbol: 'J', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'kJ', name: 'Kilorjoules', symbol: 'kJ', system: 'universal', ratio: 0.001, toBase: 1000 },
      { id: 'cal', name: 'Calories', symbol: 'cal', system: 'universal', ratio: 0.239005736, toBase: 4.184 },
      { id: 'kcal', name: 'Kilocalories', symbol: 'kcal', system: 'universal', ratio: 0.000239005736, toBase: 4184 },
      { id: 'Wh', name: 'Watt-hours', symbol: 'Wh', system: 'universal', ratio: 0.000277777778, toBase: 3600 },
      { id: 'kWh', name: 'Kilowatt-hours', symbol: 'kWh', system: 'universal', ratio: 2.77777778e-7, toBase: 3600000 },
      { id: 'btu', name: 'BTUs (British Thermal)', symbol: 'BTU', system: 'imperial', ratio: 0.000947817087, toBase: 1055.05585 },
      { id: 'eV', name: 'Electronvolts', symbol: 'eV', system: 'universal', ratio: 6.24150907e18, toBase: 1.602176634e-19 }
    ]
  },
  {
    id: 'pressure',
    name: 'Pressure & Stress',
    iconName: 'Wind',
    baseUnitId: 'Pa',
    description: 'Stress forces, gauge readings, atmospheric levels',
    units: [
      { id: 'Pa', name: 'Pascals', symbol: 'Pa', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'kPa', name: 'Kilopascals', symbol: 'kPa', system: 'universal', ratio: 0.001, toBase: 1000 },
      { id: 'bar', name: 'Bar', symbol: 'bar', system: 'universal', ratio: 0.00001, toBase: 100000 },
      { id: 'mbar', name: 'Millibar', symbol: 'mbar', system: 'universal', ratio: 0.01, toBase: 100 },
      { id: 'atm', name: 'Atmospheres', symbol: 'atm', system: 'universal', ratio: 9.86923267e-6, toBase: 101325 },
      { id: 'psi', name: 'PSI (Pounds/sq in)', symbol: 'psi', system: 'imperial', ratio: 0.0001450377, toBase: 6894.75729 },
      { id: 'torr', name: 'Torr / mmHg', symbol: 'Torr', system: 'universal', ratio: 0.00750061575, toBase: 133.322368 }
    ]
  },
  {
    id: 'power',
    name: 'Power & Output',
    iconName: 'Activity',
    baseUnitId: 'W',
    description: 'Electric wattage, horsepower, dynamic output speed',
    units: [
      { id: 'mW', name: 'Milliwatts', symbol: 'mW', system: 'universal', ratio: 1000, toBase: 0.001 },
      { id: 'W', name: 'Watts', symbol: 'W', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'kW', name: 'Kilowatts', symbol: 'kW', system: 'universal', ratio: 0.001, toBase: 1000 },
      { id: 'MW', name: 'Megawatts', symbol: 'MW', system: 'universal', ratio: 0.000001, toBase: 1000000 },
      { id: 'hp', name: 'Horsepower (HP)', symbol: 'hp', system: 'imperial', ratio: 0.001341022, toBase: 745.699872 }
    ]
  },
  {
    id: 'angle',
    name: 'Angle & Geometry',
    iconName: 'Compass',
    baseUnitId: 'deg',
    description: 'Geometric rotations, circle arcs, trigonometric values',
    units: [
      { id: 'deg', name: 'Degrees', symbol: '°', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'rad', name: 'Radians', symbol: 'rad', system: 'universal', ratio: 0.0174532925, toBase: 57.295779513 },
      { id: 'grad', name: 'Gradians', symbol: 'grad', system: 'universal', ratio: 1.11111111, toBase: 0.9 },
      { id: 'arcmin', name: 'Arcminutes', symbol: '′', system: 'universal', ratio: 60, toBase: 0.0166666666667 },
      { id: 'arcsec', name: 'Arcseconds', symbol: '″', system: 'universal', ratio: 3600, toBase: 0.0002777777778 }
    ]
  }
];

export function convertUnits(value: number, fromUnitId: string, toUnitId: string, categoryId: string): number {
  if (isNaN(value)) return 0;
  
  if (categoryId === 'temperature') {
    let celsius = value;
    if (fromUnitId === 'F') {
      celsius = (value - 32) * 5 / 9;
    } else if (fromUnitId === 'K') {
      celsius = value - 273.15;
    } else if (fromUnitId === 'R') {
      celsius = (value - 491.67) * 5 / 9;
    } else if (fromUnitId === 'Re') {
      celsius = value / 0.8;
    }

    if (toUnitId === 'C') {
      return celsius;
    } else if (toUnitId === 'F') {
      return celsius * 9 / 5 + 32;
    } else if (toUnitId === 'K') {
      return celsius + 273.15;
    } else if (toUnitId === 'R') {
      return (celsius + 273.15) * 1.8;
    } else if (toUnitId === 'Re') {
      return celsius * 0.8;
    }
    return 0;
  }

  // Find category
  const cat = UNIT_CATEGORIES.find(c => c.id === categoryId);
  if (!cat) return 0;

  const fromUnit = cat.units.find(u => u.id === fromUnitId);
  const toUnit = cat.units.find(u => u.id === toUnitId);

  if (!fromUnit || !toUnit) return 0;

  // Convert fromUnit back to base, then to toUnit
  const baseValue = value * fromUnit.toBase;
  const targetValue = baseValue / toUnit.toBase;

  return targetValue;
}

export function getFormulaString(fromUnitName: string, fromSymbol: string, toUnitName: string, toSymbol: string, categoryId: string): string {
  if (categoryId === 'temperature') {
    if (fromSymbol === '°C' && toSymbol === '°F') return `(${fromSymbol} × 9/5) + 32 = ${toSymbol}`;
    if (fromSymbol === '°F' && toSymbol === '°C') return `(${fromSymbol} − 32) × 5/9 = ${toSymbol}`;
    if (fromSymbol === '°C' && toSymbol === 'K') return `${fromSymbol} + 273.15 = ${toSymbol}`;
    if (fromSymbol === 'K' && toSymbol === '°C') return `${fromSymbol} − 273.15 = ${toSymbol}`;
    if (fromSymbol === '°C' && toSymbol === '°R') return `(${fromSymbol} + 273.15) × 1.8 = ${toSymbol}`;
    if (fromSymbol === '°R' && toSymbol === '°C') return `(${fromSymbol} − 491.67) × 5/9 = ${toSymbol}`;
    if (fromSymbol === '°C' && toSymbol === '°Re') return `${fromSymbol} × 0.8 = ${toSymbol}`;
    if (fromSymbol === '°Re' && toSymbol === '°C') return `${fromSymbol} / 0.8 = ${toSymbol}`;
    if (fromSymbol === '°F' && toSymbol === 'K') return `(${fromSymbol} − 32) × 5/9 + 273.15 = ${toSymbol}`;
    if (fromSymbol === 'K' && toSymbol === '°F') return `(${fromSymbol} − 273.15) × 9/5 + 32 = ${toSymbol}`;
    return `Custom temperature scale conversion formula.`;
  }

  const cat = UNIT_CATEGORIES.find(c => c.id === categoryId);
  if (!cat) return '';

  const fromUnit = cat.units.find(u => u.id === fromUnitIdForCalculation(fromSymbol, cat));
  const toUnit = cat.units.find(u => u.id === toUnitIdForCalculation(toSymbol, cat));

  if (!fromUnit || !toUnit) return '';

  // Calculate ratio: 1 fromUnit = X toUnit
  const baseValue = 1 * fromUnit.toBase;
  const converted = baseValue / toUnit.toBase;
  
  // Format with standard precision
  const factor = formatNumber(converted, 5);
  return `Multiply the value in ${fromUnitName.toLowerCase()} (${fromSymbol}) by ${factor} to obtain the value in ${toUnitName.toLowerCase()} (${toSymbol}).`;
}

function fromUnitIdForCalculation(symbol: string, cat: any) {
  return cat.units.find((u: any) => u.symbol === symbol)?.id || '';
}

function toUnitIdForCalculation(symbol: string, cat: any) {
  return cat.units.find((u: any) => u.symbol === symbol)?.id || '';
}

export function formatNumber(val: number, maxDecimals: number = 6): string {
  if (val === 0) return '0';
  
  // Check if really small
  if (Math.abs(val) < 0.000001) {
    return val.toExponential(4);
  }
  
  // Clean trailing decimal zeroes
  const fixed = val.toFixed(maxDecimals);
  const parsed = parseFloat(fixed);
  
  // If parsing matches close to the actual value or is a clean number
  if (Math.abs(parsed - val) < 1e-10) {
    return parsed.toString();
  }
  
  // Return fixed decimals, trimming extra zeros after dot
  return fixed.replace(/\.?0+$/, '');
}

export interface PresetPair {
  id: string;
  name: string;
  categoryId: string;
  fromUnitId: string;
  toUnitId: string;
  description: string;
}

export const POPULAR_PRESETS: PresetPair[] = [
  { id: 'p1', name: 'Inches to Centimeters', categoryId: 'length', fromUnitId: 'in', toUnitId: 'cm', description: 'Height, margins, crafts' },
  { id: 'p2', name: 'Celsius to Fahrenheit', categoryId: 'temperature', fromUnitId: 'C', toUnitId: 'F', description: 'Weather and cooking temperatures' },
  { id: 'p10', name: 'Celsius to Kelvin', categoryId: 'temperature', fromUnitId: 'C', toUnitId: 'K', description: 'Scientific thermal scale absolute calculations' },
  { id: 'p3', name: 'Pounds to Kilograms', categoryId: 'weight', fromUnitId: 'lb', toUnitId: 'kg', description: 'Body weight and groceries' },
  { id: 'p4', name: 'Kilometers to Miles', categoryId: 'length', fromUnitId: 'km', toUnitId: 'mi', description: 'Driving speeds and travel distances' },
  { id: 'p5', name: 'Liters to Gallons (US)', categoryId: 'volume', fromUnitId: 'l', toUnitId: 'gal', description: 'Fuel efficiency and liquid volumes' },
  { id: 'p6', name: 'Gigabytes to Megabytes', categoryId: 'digital', fromUnitId: 'GB', toUnitId: 'MB', description: 'Data file sizes and storage sizes' },
  { id: 'p7', name: 'Watts to Horsepower (HP)', categoryId: 'power', fromUnitId: 'W', toUnitId: 'hp', description: 'Engine and motor power capabilities' },
  { id: 'p8', name: 'Joules to Kilocalories', categoryId: 'energy', fromUnitId: 'J', toUnitId: 'kcal', description: 'Physics mechanical work energy to food nutrition' },
  { id: 'p9', name: 'Atmospheres to PSI', categoryId: 'pressure', fromUnitId: 'atm', toUnitId: 'psi', description: 'Gases pressure pressure scaling references' }
];
