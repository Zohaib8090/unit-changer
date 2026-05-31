export type MeasurementSystem = 'metric' | 'imperial' | 'universal';

export interface Unit {
  id: string;
  name: string;
  symbol: string;
  system: MeasurementSystem;
  ratio: number; // Multiply by this to convert from base unit to this unit, or divide to convert this unit to base unit
  // Or: ratio is standard conversion factor (e.g. value_in_base * ratio = value_in_this_unit, wait - standard toBase or fromBase)
  // Let's specify: value_in_base = value_in_unit * toBase; value_in_unit = value_in_base / toBase
  toBase: number; 
}

export interface UnitCategory {
  id: string;
  name: string;
  iconName: string; // Lucide icon name
  baseUnitId: string;
  description: string;
  units: Unit[];
}

export interface FavoriteConversion {
  id: string;
  categoryId: string;
  fromUnitId: string;
  toUnitId: string;
  label?: string;
  createdAt: number;
}

export interface ConversionState {
  categoryId: string;
  fromUnitId: string;
  toUnitId: string;
  inputValue: string;
}
