import { UnitCategory } from './types';

export const UNIT_CATEGORIES: UnitCategory[] = [
  {
    id: 'length',
    name: 'Length',
    iconName: 'Ruler',
    baseUnitId: 'm',
    description: 'Distance, spatial spans, and cosmic/subatomic scale factors',
    units: [
      { id: 'pm', name: 'Picometers', symbol: 'pm', system: 'metric', ratio: 1e12, toBase: 1e-12 },
      { id: 'nm', name: 'Nanometers', symbol: 'nm', system: 'metric', ratio: 1e9, toBase: 1e-9 },
      { id: 'um', name: 'Micrometers', symbol: 'µm', system: 'metric', ratio: 1e6, toBase: 1e-6 },
      { id: 'mm', name: 'Millimeters', symbol: 'mm', system: 'metric', ratio: 1000, toBase: 0.001 },
      { id: 'cm', name: 'Centimeters', symbol: 'cm', system: 'metric', ratio: 100, toBase: 0.01 },
      { id: 'dm', name: 'Decimeters', symbol: 'dm', system: 'metric', ratio: 10, toBase: 0.1 },
      { id: 'm', name: 'Meters', symbol: 'm', system: 'metric', ratio: 1, toBase: 1 },
      { id: 'dam', name: 'Decameters', symbol: 'dam', system: 'metric', ratio: 0.1, toBase: 10 },
      { id: 'hm', name: 'Hectometers', symbol: 'hm', system: 'metric', ratio: 0.01, toBase: 100 },
      { id: 'km', name: 'Kilometers', symbol: 'km', system: 'metric', ratio: 0.001, toBase: 1000 },
      { id: 'in', name: 'Inches', symbol: 'in', system: 'imperial', ratio: 39.37007874, toBase: 0.0254 },
      { id: 'ft', name: 'Feet', symbol: 'ft', system: 'imperial', ratio: 3.2808399, toBase: 0.3048 },
      { id: 'yd', name: 'Yards', symbol: 'yd', system: 'imperial', ratio: 1.0936133, toBase: 0.9144 },
      { id: 'mi', name: 'Miles', symbol: 'mi', system: 'imperial', ratio: 0.00062137119, toBase: 1609.344 },
      { id: 'nmi', name: 'Nautical Miles', symbol: 'nmi', system: 'universal', ratio: 0.0005399568, toBase: 1852 },
      { id: 'mil', name: 'Mils', symbol: 'mil', system: 'imperial', ratio: 39370.07874, toBase: 0.0000254 },
      { id: 'fathom', name: 'Fathoms', symbol: 'ftm', system: 'universal', ratio: 0.5468066, toBase: 1.8288 },
      { id: 'fur', name: 'Furlongs', symbol: 'fur', system: 'imperial', ratio: 0.00497096, toBase: 201.168 },
      { id: 'au', name: 'Astronomical Units', symbol: 'au', system: 'universal', ratio: 6.68458712e-12, toBase: 149597870700 },
      { id: 'ly', name: 'Light Years', symbol: 'ly', system: 'universal', ratio: 1.05702341e-16, toBase: 9.4607304725808e15 },
      { id: 'pc', name: 'Parsecs', symbol: 'pc', system: 'universal', ratio: 3.24077929e-17, toBase: 3.085677581e16 }
    ]
  },
  {
    id: 'weight',
    name: 'Weight & Mass',
    iconName: 'Weight',
    baseUnitId: 'kg',
    description: 'Physical weight, chemical loads, and commercial weights',
    units: [
      { id: 'ng', name: 'Nanograms', symbol: 'ng', system: 'metric', ratio: 1e12, toBase: 1e-12 },
      { id: 'ug', name: 'Micrograms', symbol: 'µg', system: 'metric', ratio: 1e9, toBase: 1e-9 },
      { id: 'mg', name: 'Milligrams', symbol: 'mg', system: 'metric', ratio: 1e6, toBase: 1e-6 },
      { id: 'g', name: 'Grams', symbol: 'g', system: 'metric', ratio: 1000, toBase: 0.001 },
      { id: 'kg', name: 'Kilograms', symbol: 'kg', system: 'metric', ratio: 1, toBase: 1 },
      { id: 't', name: 'Metric Tons', symbol: 't', system: 'metric', ratio: 0.001, toBase: 1000 },
      { id: 'oz', name: 'Ounces', symbol: 'oz', system: 'imperial', ratio: 35.2739619, toBase: 0.028349523125 },
      { id: 'lb', name: 'Pounds', symbol: 'lb', system: 'imperial', ratio: 2.20462262, toBase: 0.45359237 },
      { id: 'st', name: 'Stones', symbol: 'st', system: 'imperial', ratio: 0.15747304, toBase: 6.35029318 },
      { id: 'ct', name: 'Carats', symbol: 'ct', system: 'universal', ratio: 5000, toBase: 0.0002 },
      { id: 'gr', name: 'Grains', symbol: 'gr', system: 'imperial', ratio: 15432.35835, toBase: 0.00006479891 },
      { id: 'dr', name: 'Drams', symbol: 'dr', system: 'imperial', ratio: 564.38339, toBase: 0.0017718451953125 },
      { id: 'slug', name: 'Slugs', symbol: 'slug', system: 'universal', ratio: 0.06852176, toBase: 14.5939029 },
      { id: 'us_ton', name: 'US Short Tons', symbol: 's ton', system: 'imperial', ratio: 0.0011023113, toBase: 907.18474 },
      { id: 'uk_ton', name: 'Imperial Long Tons', symbol: 'l ton', system: 'imperial', ratio: 0.0009842065, toBase: 1016.0469088 }
    ]
  },
  {
    id: 'temperature',
    name: 'Temperature',
    iconName: 'Thermometer',
    description: 'Scale transitions including Kelvin, Rankine, and Réaumur',
    baseUnitId: 'C',
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
    description: 'Land size, surface, room floor layout, and micro-grid zones',
    units: [
      { id: 'um2', name: 'Square Micrometers', symbol: 'µm²', system: 'metric', ratio: 1e12, toBase: 1e-12 },
      { id: 'mm2', name: 'Square Millimeters', symbol: 'mm²', system: 'metric', ratio: 1e6, toBase: 1e-6 },
      { id: 'cm2', name: 'Square Centimeters', symbol: 'cm²', system: 'metric', ratio: 10000, toBase: 0.0001 },
      { id: 'dm2', name: 'Square Decimeters', symbol: 'dm²', system: 'metric', ratio: 100, toBase: 0.01 },
      { id: 'm2', name: 'Square Meters', symbol: 'm²', system: 'metric', ratio: 1, toBase: 1 },
      { id: 'km2', name: 'Square Kilometers', symbol: 'km²', system: 'metric', ratio: 1e-6, toBase: 1000000 },
      { id: 'in2', name: 'Square Inches', symbol: 'in²', system: 'imperial', ratio: 1550.0031, toBase: 0.00064516 },
      { id: 'ft2', name: 'Square Feet', symbol: 'ft²', system: 'imperial', ratio: 10.7639104, toBase: 0.09290304 },
      { id: 'yd2', name: 'Square Yards', symbol: 'yd²', system: 'imperial', ratio: 1.19599, toBase: 0.83612736 },
      { id: 'are', name: 'Ares', symbol: 'a', system: 'metric', ratio: 0.01, toBase: 100 },
      { id: 'ha', name: 'Hectares', symbol: 'ha', system: 'metric', ratio: 0.0001, toBase: 10000 },
      { id: 'ac', name: 'Acres', symbol: 'ac', system: 'imperial', ratio: 0.000247105, toBase: 4046.8564224 },
      { id: 'mi2', name: 'Square Miles', symbol: 'mi²', system: 'imperial', ratio: 3.861021585e-7, toBase: 2589988.11 },
      { id: 'township', name: 'Townships', symbol: 'twp', system: 'imperial', ratio: 1.072506e-8, toBase: 93239572 }
    ]
  },
  {
    id: 'volume',
    name: 'Volume',
    iconName: 'Droplet',
    baseUnitId: 'L',
    description: 'Dry, fluid, culinary capacities and bulk tank conversions',
    units: [
      { id: 'ul', name: 'Microliters', symbol: 'µL', system: 'metric', ratio: 1e6, toBase: 1e-6 },
      { id: 'ml', name: 'Milliliters', symbol: 'mL', system: 'metric', ratio: 1000, toBase: 0.001 },
      { id: 'cl', name: 'Centiliters', symbol: 'cL', system: 'metric', ratio: 100, toBase: 0.01 },
      { id: 'dl', name: 'Deciliters', symbol: 'dL', system: 'metric', ratio: 10, toBase: 0.1 },
      { id: 'l', name: 'Liters', symbol: 'L', system: 'metric', ratio: 1, toBase: 1 },
      { id: 'hl', name: 'Hectoliters', symbol: 'hL', system: 'metric', ratio: 0.01, toBase: 100 },
      { id: 'm3', name: 'Cubic Meters', symbol: 'm³', system: 'metric', ratio: 0.001, toBase: 1000 },
      { id: 'cm3', name: 'Cubic Centimeters', symbol: 'cm³', system: 'metric', ratio: 1000, toBase: 0.001 },
      { id: 'in3', name: 'Cubic Inches', symbol: 'in³', system: 'imperial', ratio: 61.023744, toBase: 0.016387064 },
      { id: 'ft3', name: 'Cubic Feet', symbol: 'ft³', system: 'imperial', ratio: 0.035314667, toBase: 28.316846592 },
      { id: 'yd3', name: 'Cubic Yards', symbol: 'yd³', system: 'imperial', ratio: 0.00130795, toBase: 764.554857984 },
      { id: 'tsp', name: 'Teaspoons (US)', symbol: 'tsp', system: 'imperial', ratio: 202.884, toBase: 0.00492892159375 },
      { id: 'tbsp', name: 'Tablespoons (US)', symbol: 'tbsp', system: 'imperial', ratio: 67.628, toBase: 0.01478676478125 },
      { id: 'floz', name: 'Fluid Ounces (US)', symbol: 'fl oz', system: 'imperial', ratio: 33.814, toBase: 0.0295735295625 },
      { id: 'cup', name: 'Cups (US)', symbol: 'cup', system: 'imperial', ratio: 4.22675, toBase: 0.2365882365 },
      { id: 'pt', name: 'Pints (US)', symbol: 'pt', system: 'imperial', ratio: 2.11338, toBase: 0.473176473 },
      { id: 'qt', name: 'Quarts (US)', symbol: 'qt', system: 'imperial', ratio: 1.05669, toBase: 0.946352946 },
      { id: 'gal', name: 'Gallons (US)', symbol: 'gal', system: 'imperial', ratio: 0.264172, toBase: 3.785411784 },
      { id: 'floz_uk', name: 'Fluid Ounces (Imperial)', symbol: 'fl oz (UK)', system: 'imperial', ratio: 35.195, toBase: 0.0284130625 },
      { id: 'pt_uk', name: 'Pints (Imperial)', symbol: 'pt (UK)', system: 'imperial', ratio: 1.75975, toBase: 0.56826125 },
      { id: 'qt_uk', name: 'Quarts (Imperial)', symbol: 'qt (UK)', system: 'imperial', ratio: 0.879877, toBase: 1.1365225 },
      { id: 'gal_uk', name: 'Gallons (Imperial)', symbol: 'gal (UK)', system: 'imperial', ratio: 0.219969, toBase: 4.54609 },
      { id: 'bbl', name: 'Oil Barrels', symbol: 'bbl', system: 'universal', ratio: 0.0062898, toBase: 158.987294928 }
    ]
  },
  {
    id: 'time',
    name: 'Time',
    iconName: 'Clock',
    baseUnitId: 's',
    description: 'Chronological time, cycles, periods, and high-frequency benchmarks',
    units: [
      { id: 'ns', name: 'Nanoseconds', symbol: 'ns', system: 'universal', ratio: 1e9, toBase: 1e-9 },
      { id: 'us', name: 'Microseconds', symbol: 'µs', system: 'universal', ratio: 1e6, toBase: 1e-6 },
      { id: 'ms', name: 'Milliseconds', symbol: 'ms', system: 'universal', ratio: 1000, toBase: 0.001 },
      { id: 's', name: 'Seconds', symbol: 's', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'min', name: 'Minutes', symbol: 'min', system: 'universal', ratio: 0.0166666666667, toBase: 60 },
      { id: 'h', name: 'Hours', symbol: 'h', system: 'universal', ratio: 0.0002777777778, toBase: 3600 },
      { id: 'd', name: 'Days', symbol: 'd', system: 'universal', ratio: 0.000011574074, toBase: 86400 },
      { id: 'wk', name: 'Weeks', symbol: 'wk', system: 'universal', ratio: 1.653439e-6, toBase: 604800 },
      { id: 'fortnight', name: 'Fortnights', symbol: 'fn', system: 'universal', ratio: 8.267195e-7, toBase: 1209600 },
      { id: 'mo', name: 'Months (Avg)', symbol: 'mo', system: 'universal', ratio: 3.802648e-7, toBase: 2629746 },
      { id: 'quarter_yr', name: 'Quarters (Avg)', symbol: 'qtr', system: 'universal', ratio: 1.267549e-7, toBase: 7889238 },
      { id: 'yr', name: 'Years (Avg)', symbol: 'yr', system: 'universal', ratio: 3.168808e-8, toBase: 31556952 },
      { id: 'decade', name: 'Decades', symbol: 'dec', system: 'universal', ratio: 3.168808e-9, toBase: 315569520 },
      { id: 'century', name: 'Centuries', symbol: 'cent', system: 'universal', ratio: 3.168808e-10, toBase: 3155695200 },
      { id: 'millennium', name: 'Millenniums', symbol: 'mil', system: 'universal', ratio: 3.168808e-11, toBase: 31556952000 }
    ]
  },
  {
    id: 'speed',
    name: 'Speed',
    iconName: 'Gauge',
    baseUnitId: 'm_s',
    description: 'Velocity tracking, wind travel parameters, and high physics velocity',
    units: [
      { id: 'm_s', name: 'Meters per Second', symbol: 'm/s', system: 'metric', ratio: 1, toBase: 1 },
      { id: 'km_h', name: 'Kilometers per Hour', symbol: 'km/h', system: 'metric', ratio: 3.6, toBase: 0.277777777778 },
      { id: 'mph', name: 'Miles per Hour', symbol: 'mph', system: 'imperial', ratio: 2.236936, toBase: 0.44704 },
      { id: 'kt', name: 'Knots', symbol: 'kt', system: 'universal', ratio: 1.943844, toBase: 0.514444444444 },
      { id: 'fps', name: 'Feet per Second', symbol: 'fps', system: 'imperial', ratio: 3.28084, toBase: 0.3048 },
      { id: 'in_s', name: 'Inches per Second', symbol: 'in/s', system: 'imperial', ratio: 39.3700787, toBase: 0.0254 },
      { id: 'km_s', name: 'Kilometers per Second', symbol: 'km/s', system: 'metric', ratio: 0.001, toBase: 1000 },
      { id: 'mi_s', name: 'Miles per Second', symbol: 'mi/s', system: 'imperial', ratio: 0.000621371, toBase: 1609.344 },
      { id: 'mach', name: 'Mach Velocity', symbol: 'Ma', system: 'universal', ratio: 0.00293866, toBase: 340.29 },
      { id: 'c', name: 'Speed of Light', symbol: 'c', system: 'universal', ratio: 3.33564e-9, toBase: 299792458 }
    ]
  },
  {
    id: 'digital',
    name: 'Digital Data & Memory',
    iconName: 'Cpu',
    baseUnitId: 'B',
    description: 'Storage sizes comparing both decimal SI and binary IEC systems',
    units: [
      { id: 'bit', name: 'Bits (b)', symbol: 'b', system: 'universal', ratio: 8, toBase: 0.125 },
      { id: 'B', name: 'Bytes (B)', symbol: 'B', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'kb', name: 'Kilobits (kb - Decimal)', symbol: 'kb', system: 'universal', ratio: 0.008, toBase: 125 },
      { id: 'Mb', name: 'Megabits (Mb - Decimal)', symbol: 'Mb', system: 'universal', ratio: 0.000008, toBase: 125000 },
      { id: 'Gb', name: 'Gigabits (Gb - Decimal)', symbol: 'Gb', system: 'universal', ratio: 8e-9, toBase: 125000000 },
      { id: 'Tb', name: 'Terabits (Tb - Decimal)', symbol: 'Tb', system: 'universal', ratio: 8e-12, toBase: 125000000000 },
      { id: 'Pb', name: 'Petabits (Pb - Decimal)', symbol: 'Pb', system: 'universal', ratio: 8e-15, toBase: 125000000000000 },
      { id: 'KB', name: 'Kilobytes (KB - Decimal)', symbol: 'KB', system: 'universal', ratio: 0.001, toBase: 1000 },
      { id: 'MB', name: 'Megabytes (MB - Decimal)', symbol: 'MB', system: 'universal', ratio: 0.000001, toBase: 1000000 },
      { id: 'GB', name: 'Gigabytes (GB - Decimal)', symbol: 'GB', system: 'universal', ratio: 1e-9, toBase: 1000000000 },
      { id: 'TB', name: 'Terabytes (TB - Decimal)', symbol: 'TB', system: 'universal', ratio: 1e-12, toBase: 1000000000000 },
      { id: 'PB', name: 'Petabytes (PB - Decimal)', symbol: 'PB', system: 'universal', ratio: 1e-15, toBase: 1000000000000000 },
      { id: 'EB', name: 'Exabytes (EB - Decimal)', symbol: 'EB', system: 'universal', ratio: 1e-18, toBase: 1e18 },
      { id: 'KiB', name: 'Kibibytes (KiB - Binary)', symbol: 'KiB', system: 'universal', ratio: 0.0009765625, toBase: 1024 },
      { id: 'MiB', name: 'Mebibytes (MiB - Binary)', symbol: 'MiB', system: 'universal', ratio: 9.536743e-7, toBase: 1048576 },
      { id: 'GiB', name: 'Gibibytes (GiB - Binary)', symbol: 'GiB', system: 'universal', ratio: 9.313225e-10, toBase: 1073741824 },
      { id: 'TiB', name: 'Tebibytes (TiB - Binary)', symbol: 'TiB', system: 'universal', ratio: 9.094947e-13, toBase: 1099511627776 },
      { id: 'PiB', name: 'Pebibytes (PiB - Binary)', symbol: 'PiB', system: 'universal', ratio: 8.881784e-16, toBase: 1125899906842624 },
      { id: 'EiB', name: 'Exbibytes (EiB - Binary)', symbol: 'EiB', system: 'universal', ratio: 8.673617e-19, toBase: 1152921504606846976 }
    ]
  },
  {
    id: 'energy',
    name: 'Energy & Work',
    iconName: 'Zap',
    baseUnitId: 'J',
    description: 'Thermal, mechanical work, culinary calories, and atomic energy',
    units: [
      { id: 'mJ', name: 'Millijoules', symbol: 'mJ', system: 'universal', ratio: 1000, toBase: 0.001 },
      { id: 'J', name: 'Joules', symbol: 'J', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'kJ', name: 'Kilojoules', symbol: 'kJ', system: 'universal', ratio: 0.001, toBase: 1000 },
      { id: 'MJ', name: 'Megajoules', symbol: 'MJ', system: 'universal', ratio: 1e-6, toBase: 1000000 },
      { id: 'GJ', name: 'Gigajoules', symbol: 'GJ', system: 'universal', ratio: 1e-9, toBase: 1000000000 },
      { id: 'cal', name: 'Calories', symbol: 'cal', system: 'universal', ratio: 0.2390057, toBase: 4.184 },
      { id: 'kcal', name: 'Kilocalories', symbol: 'kcal', system: 'universal', ratio: 0.0002390057, toBase: 4184 },
      { id: 'Wh', name: 'Watt-hours', symbol: 'Wh', system: 'universal', ratio: 0.000277778, toBase: 3600 },
      { id: 'kWh', name: 'Kilowatt-hours', symbol: 'kWh', system: 'universal', ratio: 2.77778e-7, toBase: 3600000 },
      { id: 'MWh', name: 'Megawatt-hours', symbol: 'MWh', system: 'universal', ratio: 2.77778e-10, toBase: 3600000000 },
      { id: 'btu', name: 'BTUs (British Thermal)', symbol: 'BTU', system: 'imperial', ratio: 0.000947817, toBase: 1055.05585262 },
      { id: 'eV', name: 'Electronvolts', symbol: 'eV', system: 'universal', ratio: 6.241509e18, toBase: 1.602176634e-19 },
      { id: 'erg', name: 'Ergs', symbol: 'erg', system: 'universal', ratio: 1e7, toBase: 1e-7 },
      { id: 'thm', name: 'Therms (US)', symbol: 'thm', system: 'imperial', ratio: 9.48043e-9, toBase: 105480400 },
      { id: 'ft_lb', name: 'Foot-pounds', symbol: 'ft-lb', system: 'imperial', ratio: 0.7375621, toBase: 1.3558179483 }
    ]
  },
  {
    id: 'pressure',
    name: 'Pressure & Stress',
    iconName: 'Wind',
    baseUnitId: 'Pa',
    description: 'Gas loads, gauge mechanics, vacuum indices, and sound heights',
    units: [
      { id: 'Pa', name: 'Pascals', symbol: 'Pa', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'hPa', name: 'Hectopascals', symbol: 'hPa', system: 'universal', ratio: 0.01, toBase: 100 },
      { id: 'kPa', name: 'Kilopascals', symbol: 'kPa', system: 'universal', ratio: 0.001, toBase: 1000 },
      { id: 'mbar', name: 'Millibar', symbol: 'mbar', system: 'universal', ratio: 0.01, toBase: 100 },
      { id: 'bar', name: 'Bar', symbol: 'bar', system: 'universal', ratio: 1e-5, toBase: 100000 },
      { id: 'MPa', name: 'Megapascals', symbol: 'MPa', system: 'universal', ratio: 1e-6, toBase: 1000000 },
      { id: 'GPa', name: 'Gigapascals', symbol: 'GPa', system: 'universal', ratio: 1e-9, toBase: 1000000000 },
      { id: 'atm', name: 'Atmospheres', symbol: 'atm', system: 'universal', ratio: 9.86923e-6, toBase: 101325 },
      { id: 'psi', name: 'PSI (Pounds/sq in)', symbol: 'psi', system: 'imperial', ratio: 0.0001450377, toBase: 6894.757293 },
      { id: 'torr', name: 'Torr', symbol: 'Torr', system: 'universal', ratio: 0.0075006, toBase: 133.322368 },
      { id: 'inhg', name: 'Inches of Mercury', symbol: 'inHg', system: 'imperial', ratio: 0.0002952998, toBase: 3386.388667 },
      { id: 'mmhg', name: 'Millimeters of Mercury', symbol: 'mmHg', system: 'universal', ratio: 0.00750061, toBase: 133.322387 },
      { id: 'kgf_cm2', name: 'Kilogram-force/cm²', symbol: 'kgf/cm²', system: 'universal', ratio: 0.000010197, toBase: 98066.5 }
    ]
  },
  {
    id: 'power',
    name: 'Power',
    iconName: 'Activity',
    baseUnitId: 'W',
    description: 'Electric wattage, motor horse power, and dynamic heat outputs',
    units: [
      { id: 'uW', name: 'Microwatts', symbol: 'µW', system: 'universal', ratio: 1e6, toBase: 1e-6 },
      { id: 'mW', name: 'Milliwatts', symbol: 'mW', system: 'universal', ratio: 1000, toBase: 0.001 },
      { id: 'W', name: 'Watts', symbol: 'W', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'kW', name: 'Kilowatts', symbol: 'kW', system: 'universal', ratio: 0.001, toBase: 1000 },
      { id: 'MW', name: 'Megawatts', symbol: 'MW', system: 'universal', ratio: 1e-6, toBase: 1000000 },
      { id: 'GW', name: 'Gigawatts', symbol: 'GW', system: 'universal', ratio: 1e-9, toBase: 1000000000 },
      { id: 'hp', name: 'Horsepower (Mechanical)', symbol: 'hp', system: 'imperial', ratio: 0.001341022, toBase: 745.69987158 },
      { id: 'hp_metric', name: 'Horsepower (Metric)', symbol: 'hp (M)', system: 'metric', ratio: 0.00135962, toBase: 735.49875 },
      { id: 'btu_h', name: 'BTUs per hour', symbol: 'BTU/h', system: 'imperial', ratio: 3.412141, toBase: 0.29307107 },
      { id: 'refrigeration_ton', name: 'Tons of Refrigeration', symbol: 'RT', system: 'universal', ratio: 0.000284345, toBase: 3516.85284 }
    ]
  },
  {
    id: 'angle',
    name: 'Angle & Geometry',
    iconName: 'Compass',
    baseUnitId: 'deg',
    description: 'Rotational orbits, trigonometric angles, arcs, and field scopes',
    units: [
      { id: 'deg', name: 'Degrees', symbol: '°', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'rad', name: 'Radians', symbol: 'rad', system: 'universal', ratio: 0.017453292519943295, toBase: 57.29577951308232 },
      { id: 'grad', name: 'Gradians', symbol: 'grad', system: 'universal', ratio: 1.11111111, toBase: 0.9 },
      { id: 'arcmin', name: 'Arcminutes', symbol: '′', system: 'universal', ratio: 60, toBase: 0.01666666666667 },
      { id: 'arcsec', name: 'Arcseconds', symbol: '″', system: 'universal', ratio: 3600, toBase: 0.00027777777777778 },
      { id: 'turn', name: 'Full Turns', symbol: 'turn', system: 'universal', ratio: 0.0027777777778, toBase: 360 },
      { id: 'quadrant', name: 'Quadrants', symbol: 'quad', system: 'universal', ratio: 0.011111111111, toBase: 90 },
      { id: 'sextant', name: 'Sextants', symbol: 'sext', system: 'universal', ratio: 0.0166666666667, toBase: 60 }
    ]
  },
  {
    id: 'current',
    name: 'Electric Current',
    iconName: 'Zap',
    baseUnitId: 'A',
    description: 'Electrical load rate, electron flows, and high-energy physics scales',
    units: [
      { id: 'uA', name: 'Microamperes', symbol: 'µA', system: 'universal', ratio: 1e6, toBase: 1e-6 },
      { id: 'mA', name: 'Milliamperes', symbol: 'mA', system: 'universal', ratio: 1000, toBase: 0.001 },
      { id: 'A', name: 'Amperes', symbol: 'A', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'kA', name: 'Kiloamperes', symbol: 'kA', system: 'universal', ratio: 0.001, toBase: 1000 },
      { id: 'MA', name: 'Megaamperes', symbol: 'MA', system: 'universal', ratio: 1e-6, toBase: 1000000 },
      { id: 'abA', name: 'Abamperes', symbol: 'abA', system: 'universal', ratio: 0.1, toBase: 10 },
      { id: 'statA', name: 'Statamperes', symbol: 'statA', system: 'universal', ratio: 2.99792458e9, toBase: 3.33564e-10 }
    ]
  },
  {
    id: 'frequency',
    name: 'Frequency',
    iconName: 'Activity',
    baseUnitId: 'Hz',
    description: 'Cyclical waves, computing processing clock rates, and rotation speed',
    units: [
      { id: 'mHz', name: 'Millihertz', symbol: 'mHz', system: 'universal', ratio: 1000, toBase: 0.001 },
      { id: 'Hz', name: 'Hertz', symbol: 'Hz', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'kHz', name: 'Kilohertz', symbol: 'kHz', system: 'universal', ratio: 0.001, toBase: 1000 },
      { id: 'MHz', name: 'Megahertz', symbol: 'MHz', system: 'universal', ratio: 1e-6, toBase: 1000000 },
      { id: 'GHz', name: 'Gigahertz', symbol: 'GHz', system: 'universal', ratio: 1e-9, toBase: 1000000000 },
      { id: 'THz', name: 'Terahertz', symbol: 'THz', system: 'universal', ratio: 1e-12, toBase: 1000000000000 },
      { id: 'rpm', name: 'Rotations per Minute', symbol: 'rpm', system: 'universal', ratio: 60, toBase: 0.01666666666667 },
      { id: 'rad_s', name: 'Radians per Second', symbol: 'rad/s', system: 'universal', ratio: 6.283185307, toBase: 0.15915494309189535 }
    ]
  },
  {
    id: 'data_rate',
    name: 'Data Transfer Rate',
    iconName: 'Cpu',
    baseUnitId: 'B_s',
    description: 'Digital transit speed, bandwidth rates, and internet connection speeds',
    units: [
      { id: 'bps', name: 'Bits per second (bps)', symbol: 'bps', system: 'universal', ratio: 8, toBase: 0.125 },
      { id: 'kbps', name: 'Kilobits per second (kbps)', symbol: 'kbps', system: 'universal', ratio: 0.008, toBase: 125 },
      { id: 'Mbps', name: 'Megabits per second (Mbps)', symbol: 'Mbps', system: 'universal', ratio: 0.000008, toBase: 125000 },
      { id: 'Gbps', name: 'Gigabits per second (Gbps)', symbol: 'Gbps', system: 'universal', ratio: 8e-9, toBase: 125000000 },
      { id: 'Tbps', name: 'Terabits per second (Tbps)', symbol: 'Tbps', system: 'universal', ratio: 8e-12, toBase: 125000000000 },
      { id: 'B_s', name: 'Bytes per second (B/s)', symbol: 'B/s', system: 'universal', ratio: 1, toBase: 1 },
      { id: 'KB_s', name: 'Kilobytes per second (KB/s)', symbol: 'KB/s', system: 'universal', ratio: 0.001, toBase: 1000 },
      { id: 'MB_s', name: 'Megabytes per second (MB/s)', symbol: 'MB/s', system: 'universal', ratio: 0.000001, toBase: 1000000 },
      { id: 'GB_s', name: 'Gigabytes per second (GB/s)', symbol: 'GB/s', system: 'universal', ratio: 1e-9, toBase: 1000000000 },
      { id: 'TB_s', name: 'Terabytes per second (TB/s)', symbol: 'TB/s', system: 'universal', ratio: 1e-12, toBase: 1000000000000 },
      { id: 'KiB_s', name: 'Kibibytes per second (KiB/s)', symbol: 'KiB/s', system: 'universal', ratio: 0.0009765625, toBase: 1024 },
      { id: 'MiB_s', name: 'Mebibytes per second (MiB/s)', symbol: 'MiB/s', system: 'universal', ratio: 9.536743e-7, toBase: 1048576 },
      { id: 'GiB_s', name: 'Gibibytes per second (GiB/s)', symbol: 'GiB/s', system: 'universal', ratio: 9.313225e-10, toBase: 1073741824 }
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
  { id: 'p11', name: 'Megabits to Megabytes', categoryId: 'digital', fromUnitId: 'Mb', toUnitId: 'MB', description: 'Telecom speeds to actual file download sizes' },
  { id: 'p7', name: 'Watts to Horsepower (HP)', categoryId: 'power', fromUnitId: 'W', toUnitId: 'hp', description: 'Engine and motor power capabilities' },
  { id: 'p8', name: 'Joules to Kilocalories', categoryId: 'energy', fromUnitId: 'J', toUnitId: 'kcal', description: 'Physics mechanical work energy to food nutrition' },
  { id: 'p9', name: 'Atmospheres to PSI', categoryId: 'pressure', fromUnitId: 'atm', toUnitId: 'psi', description: 'Gases pressure pressure scaling references' }
];
