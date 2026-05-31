import { useState, useEffect, useMemo } from 'react';
import {
  Ruler,
  Weight,
  Thermometer,
  Square,
  Droplet,
  Clock,
  Gauge,
  Cpu,
  Search,
  Star,
  ArrowRightLeft,
  Copy,
  Check,
  Info,
  Grid,
  Layers,
  Heart,
  Undo,
  ChevronRight,
  ListFilter,
  Sparkles,
  RefreshCw,
  Clock3,
  HelpCircle,
  Zap,
  Wind,
  Activity,
  Compass
} from 'lucide-react';
import { UNIT_CATEGORIES, convertUnits, getFormulaString, formatNumber, POPULAR_PRESETS, PresetPair } from './data';
import { FavoriteConversion } from './types';

// Helper to safely render icons
const getCategoryIcon = (iconName: string, className?: string) => {
  switch (iconName) {
    case 'Ruler': return <Ruler className={className} />;
    case 'Weight': return <Weight className={className} />;
    case 'Thermometer': return <Thermometer className={className} />;
    case 'Square': return <Square className={className} />;
    case 'Droplet': return <Droplet className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'Gauge': return <Gauge className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Compass': return <Compass className={className} />;
    default: return <Ruler className={className} />;
  }
};

export default function App() {
  // Theme layout perspectives:
  // - 'clean_focus': A minimalist centered conversion block
  // - 'bento_dashboard': A real-time matrix calculating all units in the category at once
  // - 'split_comparative': A double-column interactive slider system
  const [activeLayout, setActiveLayout] = useState<'clean_focus' | 'bento_dashboard' | 'split_comparative'>('clean_focus');

  // Core conversion States
  const [activeCategoryId, setActiveCategoryId] = useState<string>('length');
  const [fromUnitId, setFromUnitId] = useState<string>('m');
  const [toUnitId, setToUnitId] = useState<string>('in');
  const [inputValue, setInputValue] = useState<string>('1');
  
  // Custom states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [systemFilter, setSystemFilter] = useState<'all' | 'metric' | 'imperial'>('all');
  const [favorites, setFavorites] = useState<FavoriteConversion[]>([]);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null); // holds id/type for displaying checkmark
  const [history, setHistory] = useState<{ id: string, categoryId: string, fromUnit: string, fromVal: string, toUnit: string, toVal: string, timestamp: number }[]>([]);

  // Category search matches
  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return UNIT_CATEGORIES;
    return UNIT_CATEGORIES.filter(cat => 
      cat.name.toLowerCase().includes(query) ||
      cat.description.toLowerCase().includes(query) ||
      cat.units.some(u => u.name.toLowerCase().includes(query) || u.symbol.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Handle active category change, resets the default from/to values securely
  const selectCategory = (catId: string) => {
    setActiveCategoryId(catId);
    const cat = UNIT_CATEGORIES.find(c => c.id === catId);
    if (cat && cat.units.length >= 2) {
      setFromUnitId(cat.units[0].id);
      setToUnitId(cat.units[1].id);
    }
  };

  const activeCategory = useMemo(() => {
    return UNIT_CATEGORIES.find(c => c.id === activeCategoryId) || UNIT_CATEGORIES[0];
  }, [activeCategoryId]);

  // Load favorites & history on mount
  useEffect(() => {
    const storedFavs = localStorage.getItem('unit_conv_favs_v2');
    if (storedFavs) {
      try {
        setFavorites(JSON.parse(storedFavs));
      } catch (e) {
        console.error("Could not load favorites");
      }
    }

    const storedHist = localStorage.getItem('unit_conv_history_v2');
    if (storedHist) {
      try {
        setHistory(JSON.parse(storedHist));
      } catch (e) {
         console.error("Could not load history");
      }
    }
  }, []);

  // Save favorites to storage helper
  const saveFavorites = (newFavs: FavoriteConversion[]) => {
    setFavorites(newFavs);
    localStorage.setItem('unit_conv_favs_v2', JSON.stringify(newFavs));
  };

  // Toggle favorite conversion pair
  const isFavorite = useMemo(() => {
    return favorites.some(f => f.categoryId === activeCategoryId && f.fromUnitId === fromUnitId && f.toUnitId === toUnitId);
  }, [favorites, activeCategoryId, fromUnitId, toUnitId]);

  const toggleFavorite = () => {
    if (isFavorite) {
      const remaining = favorites.filter(f => !(f.categoryId === activeCategoryId && f.fromUnitId === fromUnitId && f.toUnitId === toUnitId));
      saveFavorites(remaining);
    } else {
      const newFav: FavoriteConversion = {
        id: `fav_${Date.now()}`,
        categoryId: activeCategoryId,
        fromUnitId: fromUnitId,
        toUnitId: toUnitId,
        createdAt: Date.now()
      };
      saveFavorites([...favorites, newFav]);
    }
  };

  // Convert favorites metadata to readable information
  const enrichedFavorites = useMemo(() => {
    return favorites.map(fav => {
      const cat = UNIT_CATEGORIES.find(c => c.id === fav.categoryId);
      const fromU = cat?.units.find(u => u.id === fav.fromUnitId);
      const toU = cat?.units.find(u => u.id === fav.toUnitId);
      return {
        ...fav,
        categoryName: cat?.name || 'Unknown',
        fromSymbol: fromU?.symbol || '',
        toSymbol: toU?.symbol || '',
        fromName: fromU?.name || '',
        toName: toU?.name || ''
      };
    });
  }, [favorites]);

  // Save conversion result to history list
  const addConversionToHistory = (fromVal: string, toVal: string) => {
    if (!fromVal || isNaN(Number(fromVal))) return;
    const cat = activeCategory;
    const fromU = cat.units.find(u => u.id === fromUnitId);
    const toU = cat.units.find(u => u.id === toUnitId);
    if (!fromU || !toU) return;

    const newHistItem = {
      id: `hist_${Date.now()}`,
      categoryId: activeCategoryId,
      fromUnit: fromU.symbol,
      fromVal: fromVal,
      toUnit: toU.symbol,
      toVal: toVal,
      timestamp: Date.now()
    };

    const updated = [newHistItem, ...history.slice(0, 19)]; // limit to 20 items
    setHistory(updated);
    localStorage.setItem('unit_conv_history_v2', JSON.stringify(updated));
  };

  // Calculate conversion output
  const numericInput = useMemo(() => {
    const val = parseFloat(inputValue);
    return isNaN(val) ? 0 : val;
  }, [inputValue]);

  const conversionResult = useMemo(() => {
    return convertUnits(numericInput, fromUnitId, toUnitId, activeCategoryId);
  }, [numericInput, fromUnitId, toUnitId, activeCategoryId]);

  const formatResultDisplay = useMemo(() => {
    return formatNumber(conversionResult, 7);
  }, [conversionResult]);

  // Formula presentation
  const activeFormula = useMemo(() => {
    const fromU = activeCategory.units.find(u => u.id === fromUnitId);
    const toU = activeCategory.units.find(u => u.id === toUnitId);
    if (!fromU || !toU) return '';
    return getFormulaString(fromU.name, fromU.symbol, toU.name, toU.symbol, activeCategoryId);
  }, [activeCategory, fromUnitId, toUnitId, activeCategoryId]);

  // Trigger swap
  const handleSwapUnits = () => {
    const temp = fromUnitId;
    setFromUnitId(toUnitId);
    setToUnitId(temp);
  };

  // Load a quick conversion preset
  const handleApplyPreset = (preset: PresetPair) => {
    setActiveCategoryId(preset.categoryId);
    setFromUnitId(preset.fromUnitId);
    setToUnitId(preset.toUnitId);
    setInputValue('1');
  };

  // Clipboard copy handlers
  const handleCopyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(id);
    setTimeout(() => {
      setCopyFeedback(null);
    }, 2000);
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem('unit_conv_history_v2');
  };

  // Filter category units based on measuring system
  const filteredUnits = useMemo(() => {
    if (systemFilter === 'all') return activeCategory.units;
    return activeCategory.units.filter(u => u.system === systemFilter || u.system === 'universal');
  }, [activeCategory, systemFilter]);

  // Convert presets info to render tags
  const renderPopularPresets = useMemo(() => {
    return POPULAR_PRESETS.map((p) => {
      const cat = UNIT_CATEGORIES.find(c => c.id === p.categoryId);
      const fromU = cat?.units.find(u => u.id === p.fromUnitId);
      const toU = cat?.units.find(u => u.id === p.toUnitId);
      return {
        ...p,
        fromSymbol: fromU?.symbol || '',
        toSymbol: toU?.symbol || ''
      };
    });
  }, []);

  // Sync results to history when input stable
  useEffect(() => {
    if (!inputValue || isNaN(Number(inputValue)) || Number(inputValue) === 0) return;
    const timer = setTimeout(() => {
      addConversionToHistory(inputValue, formatResultDisplay);
    }, 1500); // 1.5s debounce to keep from cluttering history log
    return () => clearTimeout(timer);
  }, [inputValue, fromUnitId, toUnitId, activeCategoryId]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-teal-100 selection:text-teal-900 transition-colors duration-300">
      
      {/* Top Beautiful Minimalist Header */}
      <header className="border-b border-teal-100/60 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl shadow-md shadow-teal-500/10">
              <RefreshCw className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h1 id="app-title" className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
                Precision<span className="text-teal-600 font-extrabold text-sm uppercase tracking-widest bg-teal-50 px-2 py-0.5 rounded border border-teal-100">Unit</span>
              </h1>
              <p className="text-xs text-slate-500">Real-time instant dimensional metric translation</p>
            </div>
          </div>

          {/* Interactive Layout Reselect Panel */}
          <div className="flex flex-col items-center sm:items-end gap-1 bg-teal-50/50 p-1.5 rounded-xl border border-teal-100/50">
            <span className="text-[10px] font-semibold text-teal-800 tracking-wider uppercase px-2">
              Reselect Design Layout
            </span>
            <div className="flex bg-slate-100 rounded-lg p-1 gap-1">
              <button
                id="layout-btn-focus"
                onClick={() => setActiveLayout('clean_focus')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeLayout === 'clean_focus'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
                title="Focus Mode: Dedicated clean visual card UI"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Focus Card</span>
              </button>
              
              <button
                id="layout-btn-grid"
                onClick={() => setActiveLayout('bento_dashboard')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeLayout === 'bento_dashboard'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
                title="Multi-Grid Mode: Compute all categories side units at once"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Multi Grid</span>
              </button>

              <button
                id="layout-btn-split"
                onClick={() => setActiveLayout('split_comparative')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeLayout === 'split_comparative'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
                title="Dual Comparative: Large split panels side-by-side"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Dual Split</span>
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Layout Row Header & Quick Metrics Search */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Categories Selection Sidebar */}
          <section id="sidebar-categories" className="lg:col-span-4 space-y-6">
            
            {/* Search Input for categories & units */}
            <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold tracking-wide text-slate-800" htmlFor="category-search-input">
                  Search Categories
                </label>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-medium">
                  {filteredCategories.length} categories
                </span>
              </div>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input
                  id="category-search-input"
                  type="text"
                  placeholder="Type index unit e.g., miles, bits, l..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable Categories List */}
            <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-2 max-h-[380px] overflow-y-auto custom-scrollbar">
              <span className="text-xs font-bold text-slate-400 tracking-wider uppercase px-2 block mb-2">
                Measurement Types
              </span>
              <div className="space-y-1">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((cat) => {
                    const isSelected = cat.id === activeCategoryId;
                    return (
                      <button
                        key={cat.id}
                        id={`category-item-${cat.id}`}
                        onClick={() => selectCategory(cat.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-200 group ${
                          isSelected
                            ? 'bg-teal-50 text-teal-900 border-l-4 border-teal-600 font-medium'
                            : 'hover:bg-slate-50 border-l-4 border-transparent text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg transition-colors ${
                            isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700'
                          }`}>
                            {getCategoryIcon(cat.iconName, 'w-4 h-4')}
                          </div>
                          <div>
                            <span className={`text-sm ${isSelected ? 'font-semibold text-teal-950' : 'text-slate-800'}`}>
                              {cat.name}
                            </span>
                            <p className="text-[11px] text-slate-400 line-clamp-1 group-hover:text-slate-500">
                              {cat.description}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 text-slate-300 transition-transform ${
                          isSelected ? 'text-teal-600 translate-x-0.5' : 'group-hover:translate-x-0.5'
                        }`} />
                      </button>
                    );
                  })
                ) : (
                  <div className="text-center py-8 text-slate-400">
                    <HelpCircle className="w-8 h-8 mx-auto stroke-1 mb-2 text-slate-300" />
                    <p className="text-xs">No matching categories found</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="mt-2 text-xs text-teal-600 hover:underline font-semibold"
                    >
                      Reset active search
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Popular Conversion Presets Trigger Box */}
            <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4.5 h-4.5 text-teal-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Popular Quick Conversions</h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {renderPopularPresets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleApplyPreset(preset)}
                    className="p-2 bg-slate-50/50 hover:bg-teal-50/40 border border-slate-100 hover:border-teal-100 rounded-xl text-left transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-xs font-semibold text-slate-800 group-hover:text-teal-900 block">
                        {preset.name}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {preset.description}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-teal-600 bg-teal-50 p-1 px-1.5 rounded">
                      {preset.fromSymbol} → {preset.toSymbol}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </section>

          {/* Right Column: Key Converter Canvas depends on activeLayout selection */}
          <section id="converter-canvas" className="lg:col-span-8 space-y-6">
            
            {/* --- Active View Layout 1: CLEAN FOCUS --- */}
            {activeLayout === 'clean_focus' && (
              <div className="bg-white rounded-3xl border border-teal-100/40 p-6 md:p-8 shadow-md relative overflow-hidden transition-all duration-300">
                {/* Visual Accent Top Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600"></div>

                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-slate-100 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-teal-50 text-teal-700 rounded-xl">
                      {getCategoryIcon(activeCategory.iconName, 'w-5 h-5')}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">{activeCategory.name} Focus Converter</h2>
                      <p className="text-xs text-slate-400">Centered clean view metrics converter</p>
                    </div>
                  </div>

                  {/* System Filters */}
                  <div className="flex bg-slate-50 rounded-xl p-1 border border-slate-100 self-stretch sm:self-center">
                    <button
                      onClick={() => setSystemFilter('all')}
                      className={`flex-1 sm:flex-initial text-center px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        systemFilter === 'all'
                          ? 'bg-white text-teal-900 shadow-sm'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      All Systems
                    </button>
                    <button
                      onClick={() => setSystemFilter('metric')}
                      className={`flex-1 sm:flex-initial text-center px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        systemFilter === 'metric'
                          ? 'bg-white text-teal-900 shadow-sm'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Metric Only
                    </button>
                    <button
                      onClick={() => setSystemFilter('imperial')}
                      className={`flex-1 sm:flex-initial text-center px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        systemFilter === 'imperial'
                          ? 'bg-white text-teal-900 shadow-sm'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Imperial Only
                    </button>
                  </div>
                </div>

                {/* Conversion Grid Field Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-9 gap-6 items-center">
                  
                  {/* From Field Card */}
                  <div className="md:col-span-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between space-y-4 hover:border-teal-100/60 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        From Metric Value
                      </span>
                      <span className="text-[10px] capitalize bg-slate-200/60 text-slate-600 px-2 py-0.5 rounded font-mono">
                        {activeCategory.units.find(u => u.id === fromUnitId)?.system || 'General'}
                      </span>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <input
                        id="convert-input-value"
                        type="text"
                        inputMode="decimal"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="text-3xl font-extrabold text-slate-900 focus:outline-none bg-transparent w-full"
                        placeholder="0"
                      />
                      
                      <select
                        id="convert-select-from"
                        value={fromUnitId}
                        onChange={(e) => setFromUnitId(e.target.value)}
                        className="w-full bg-white border border-slate-200 hover:border-teal-300 rounded-xl px-3 py-2.5 text-sm font-semibold select-custom text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all cursor-pointer"
                      >
                        {filteredUnits.map(unit => (
                          <option key={unit.id} value={unit.id}>
                            {unit.name} ({unit.symbol})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Intersecting Swap Action Icon */}
                  <div className="md:col-span-1 flex justify-center">
                    <button
                      id="convert-btn-swap"
                      onClick={handleSwapUnits}
                      className="p-3 bg-white hover:bg-teal-600 border border-teal-100 hover:border-teal-600 rounded-full text-teal-600 hover:text-white shadow-md active:scale-95 transition-all text-center focus:outline-none"
                      title="Swap Source and Destination Units"
                    >
                      <ArrowRightLeft className="w-5 h-5" />
                    </button>
                  </div>

                  {/* To Field Card */}
                  <div className="md:col-span-4 bg-teal-50/20 p-5 rounded-2xl border border-teal-100/30 flex flex-col justify-between space-y-4 hover:border-teal-200/50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-teal-700/80 uppercase tracking-widest">
                        To Destination Converted
                      </span>
                      <span className="text-[10px] capitalize bg-teal-50/80 text-teal-700 px-2 py-0.5 rounded font-mono border border-teal-100/50">
                        {activeCategory.units.find(u => u.id === toUnitId)?.system || 'General'}
                      </span>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-3xl font-extrabold text-teal-950 font-mono tracking-tight select-all truncate max-w-[80%]">
                          {formatResultDisplay}
                        </span>
                        
                        {/* Copy button */}
                        <button
                          onClick={() => handleCopyToClipboard(formatResultDisplay, 'focus_main')}
                          className="p-2 hover:bg-teal-50 text-slate-400 hover:text-teal-600 rounded-lg transition-colors cursor-pointer"
                          title="Copy conversions result value with symbol"
                        >
                          {copyFeedback === 'focus_main' ? (
                            <Check className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      <select
                        id="convert-select-to"
                        value={toUnitId}
                        onChange={(e) => setToUnitId(e.target.value)}
                        className="w-full bg-white border border-slate-200 hover:border-teal-300 rounded-xl px-3 py-2.5 text-sm font-semibold select-custom text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all cursor-pointer"
                      >
                        {filteredUnits.map(unit => (
                          <option key={unit.id} value={unit.id}>
                            {unit.name} ({unit.symbol})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                </div>

                {/* Inline Action Triggers (Save Favorite) */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={toggleFavorite}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      isFavorite 
                        ? 'bg-rose-50 text-rose-600 border border-rose-100'
                        : 'bg-teal-50/50 text-teal-800 hover:bg-teal-100/50 border border-teal-100/30'
                    }`}
                  >
                    <Star className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 stroke-rose-500' : 'text-teal-700'}`} />
                    {isFavorite ? 'Saved to Favorites' : 'Pin to Favorite Conversions'}
                  </button>

                  <div className="text-[11px] font-mono text-slate-400">
                    Base unit used: <span className="font-bold underline text-slate-600">{activeCategory.baseUnitId}</span>
                  </div>
                </div>

                {/* Calculations details & formulas */}
                {activeFormula && (
                  <div className="mt-5 bg-teal-50/30 border border-teal-100/40 p-3.5 rounded-xl flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-teal-900 leading-relaxed">
                      <span className="font-bold block mb-0.5 text-teal-950 uppercase tracking-wider text-[10px]">Conversion Scale Formula</span>
                      {activeFormula}
                    </p>
                  </div>
                )}

              </div>
            )}


            {/* --- Active View Layout 2: MULTI-UNIT BENTO MATRIX GRID --- */}
            {activeLayout === 'bento_dashboard' && (
              <div className="bg-white rounded-3xl border border-teal-100/30 p-6 md:p-8 shadow-md relative overflow-hidden transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600"></div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Bento Matrix Category Screen</h2>
                    <p className="text-xs text-slate-400">Modify the active field; see conversions across all units instantly</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Source:</span>
                    <select
                      value={fromUnitId}
                      onChange={(e) => setFromUnitId(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none"
                    >
                      {activeCategory.units.map(unit => (
                        <option key={unit.id} value={unit.id}>
                          {unit.name} ({unit.symbol})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Primary Input Panel */}
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 rounded-2xl shadow-inner mb-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-teal-200">
                      Active Source Value
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-teal-100 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                      Dynamic Calculations
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      inputMode="decimal"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="text-4xl font-black bg-transparent border-b-2 border-white/20 focus:border-white focus:outline-none w-full tracking-tight text-white mb-1"
                      placeholder="0"
                    />
                    <div className="text-right shrink-0">
                      <span className="text-2xl font-bold bg-white/10 px-3 py-1 rounded-xl">
                        {activeCategory.units.find(u => u.id === fromUnitId)?.symbol}
                      </span>
                      <p className="text-[11px] text-teal-200 mt-1">
                        {activeCategory.units.find(u => u.id === fromUnitId)?.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Matrix Grid */}
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Calculated Value Matrix</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeCategory.units.map((unit) => {
                    const isSourceUnit = unit.id === fromUnitId;
                    const calculated = convertUnits(numericInput, fromUnitId, unit.id, activeCategoryId);
                    const isFavPair = favorites.some(f => f.categoryId === activeCategoryId && f.fromUnitId === fromUnitId && f.toUnitId === unit.id);
                    
                    return (
                      <div
                        key={unit.id}
                        className={`p-4 rounded-2xl transition-all duration-200 border flex flex-col justify-between space-y-2 relative group hover:shadow-md ${
                          isSourceUnit
                            ? 'bg-teal-50/50 border-teal-300/60 ring-1 ring-teal-400/20'
                            : 'bg-white border-slate-100 hover:border-teal-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-widest text-slate-400 capitalize bg-slate-100 px-1.5 py-0.5 rounded">
                            {unit.system}
                          </span>
                          
                          {/* Inner Star / Copy elements */}
                          {!isSourceUnit && (
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                              <button
                                onClick={() => {
                                  // toggle this specifically
                                  if (isFavPair) {
                                    const remaining = favorites.filter(f => !(f.categoryId === activeCategoryId && f.fromUnitId === fromUnitId && f.toUnitId === unit.id));
                                    saveFavorites(remaining);
                                  } else {
                                    saveFavorites([...favorites, {
                                      id: `fav_${Date.now()}`,
                                      categoryId: activeCategoryId,
                                      fromUnitId: fromUnitId,
                                      toUnitId: unit.id,
                                      createdAt: Date.now()
                                    }]);
                                  }
                                }}
                                className="p-1 hover:bg-slate-50 text-slate-400 hover:text-amber-500 rounded transition-colors"
                                title="Star conversion"
                              >
                                <Star className={`w-3.5 h-3.5 ${isFavPair ? 'fill-amber-400 text-amber-400' : ''}`} />
                              </button>
                              <button
                                onClick={() => handleCopyToClipboard(formatNumber(calculated, 7), `bento_card_${unit.id}`)}
                                className="p-1 hover:bg-slate-50 text-slate-400 hover:text-teal-600 rounded transition-colors"
                              >
                                {copyFeedback === `bento_card_${unit.id}` ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          )}
                        </div>

                        <div>
                          <p className="text-[11px] font-medium text-slate-400 truncate">{unit.name}</p>
                          <div className="flex items-baseline gap-1.5 justify-between">
                            <span className="text-xl font-bold font-mono tracking-tight text-slate-800 break-all select-all">
                              {formatNumber(calculated, 6)}
                            </span>
                            <span className="text-xs font-black text-teal-600 font-mono shrink-0">
                              {unit.symbol}
                            </span>
                          </div>
                        </div>

                        {/* Relative scale indicator */}
                        {numericInput > 0 && !isSourceUnit && (
                          <p className="text-[10px] text-slate-400 border-t border-slate-100/60 pt-1 border-dashed mt-1 italic">
                            1 {activeCategory.units.find(u => u.id === fromUnitId)?.symbol} ≈ {formatNumber(convertUnits(1, fromUnitId, unit.id, activeCategoryId), 4)} {unit.symbol}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}


            {/* --- Active View Layout 3: DUAL SPLIT COMPARATIVE CANVAS --- */}
            {activeLayout === 'split_comparative' && (
              <div className="bg-white rounded-3xl border border-teal-100/30 p-6 md:p-8 shadow-md relative overflow-hidden transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600"></div>

                <div className="mb-6 pb-4 border-b border-slate-100">
                  <h2 className="text-lg font-bold text-slate-900">Dual Split Interactive Comparative Columns</h2>
                  <p className="text-xs text-slate-400">Beautiful proportional panel showing relative weights side by side</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  
                  {/* Left Column (Source) */}
                  <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Input Column</span>
                      <div className="flex items-center justify-between">
                        <select
                          value={fromUnitId}
                          onChange={(e) => setFromUnitId(e.target.value)}
                          className="font-bold text-sm bg-white border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none"
                        >
                          {activeCategory.units.map(unit => (
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                          ))}
                        </select>
                        <span className="text-xs font-mono bg-teal-100/50 text-teal-800 px-2 py-0.5 rounded">
                          {activeCategory.units.find(u => u.id === fromUnitId)?.symbol}
                        </span>
                      </div>
                    </div>

                    <div className="py-4">
                      <input
                        type="text"
                        inputMode="decimal"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="text-4xl font-extrabold focus:outline-none text-slate-950 bg-transparent w-full"
                        placeholder="Enter value..."
                      />
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Proportional Reference:</span>
                      <span className="font-mono">1 = {activeCategory.units.find(u => u.id === fromUnitId)?.toBase} Base ratio</span>
                    </div>
                  </div>

                  {/* Absolute Center Divider Arrow */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-teal-100 text-teal-600 p-2 rounded-full shadow-md z-12 cursor-pointer" onClick={handleSwapUnits}>
                    <ArrowRightLeft className="w-4 h-4" />
                  </div>

                  {/* Right Column (Target) */}
                  <div className="p-6 bg-teal-50/20 border border-teal-100/50 rounded-2xl flex flex-col justify-between space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">Translated Destination</span>
                      <div className="flex items-center justify-between">
                        <select
                          value={toUnitId}
                          onChange={(e) => setToUnitId(e.target.value)}
                          className="font-bold text-sm bg-white border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none"
                        >
                          {activeCategory.units.map(unit => (
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                          ))}
                        </select>
                        <span className="text-xs font-mono bg-teal-600 text-white px-2 py-0.5 rounded">
                          {activeCategory.units.find(u => u.id === toUnitId)?.symbol}
                        </span>
                      </div>
                    </div>

                    <div className="py-4 flex items-center justify-between">
                      <span className="text-4xl font-black text-teal-900 tracking-tight select-all truncate max-w-[80%]">
                        {formatResultDisplay}
                      </span>
                      <button
                        onClick={() => handleCopyToClipboard(formatResultDisplay, 'split_main')}
                        className="p-1.5 bg-white border border-teal-100 rounded text-slate-400 hover:text-teal-600 transition-all hover:shadow-sm shrink-0"
                      >
                        {copyFeedback === 'split_main' ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Proportional Reference:</span>
                      <span className="font-mono">1 = {activeCategory.units.find(u => u.id === toUnitId)?.toBase} Base ratio</span>
                    </div>
                  </div>

                </div>

                {/* Comparative relative scale bar indicator */}
                {numericInput > 0 && (
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest block mb-2">System Comparatives (Scale)</span>
                    <div className="relative h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-teal-400 rounded-full" style={{ width: `${Math.min(100, Math.max(5, (1 / (numericInput || 1)) * 100))}%` }}></div>
                    </div>
                    <div className="flex justify-between items-center text-slate-400 text-[10px] font-mono mt-1.5">
                      <span>1 Unit Scale Rate</span>
                      <span>1 {activeCategory.units.find(u => u.id === fromUnitId)?.symbol} = {formatNumber(convertUnits(1, fromUnitId, toUnitId, activeCategoryId), 5)} {activeCategory.units.find(u => u.id === toUnitId)?.symbol}</span>
                    </div>
                  </div>
                )}

              </div>
            )}


            {/* Lower Row Grid for Favorites & History tracking */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1: Saved Favorites List */}
              <div id="favorites-box" className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-amber-50 text-amber-500 rounded">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">Saved Favorites</h3>
                  </div>
                  <span className="text-[11px] text-slate-400">{enrichedFavorites.length} saved</span>
                </div>

                <div className="space-y-2 max-h-[190px] overflow-y-auto custom-scrollbar">
                  {enrichedFavorites.length > 0 ? (
                    enrichedFavorites.map((fav) => (
                      <div
                        key={fav.id}
                        className="p-2.5 bg-slate-50 border border-slate-100/80 rounded-xl flex items-center justify-between hover:border-teal-100 hover:bg-teal-50/10 transition-all group"
                      >
                        <button
                          onClick={() => {
                            setActiveCategoryId(fav.categoryId);
                            setFromUnitId(fav.fromUnitId);
                            setToUnitId(fav.toUnitId);
                          }}
                          className="flex-1 text-left flex items-center gap-2"
                        >
                          <div className="text-xs bg-white border border-slate-200 rounded px-1.5 py-0.5 font-bold font-mono text-slate-500">
                            {fav.categoryName.substring(0, 4).toUpperCase()}
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-slate-700 block">
                              {fav.fromSymbol} → {fav.toSymbol}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {fav.fromName.split(' ')[0]} to {fav.toName.split(' ')[0]}
                            </span>
                          </div>
                        </button>

                        <button
                          onClick={() => {
                            const remaining = favorites.filter(f => f.id !== fav.id);
                            saveFavorites(remaining);
                          }}
                          className="text-slate-300 hover:text-rose-500 p-1 opacity-60 group-hover:opacity-100 transition-opacity"
                          title="Remove favorite"
                        >
                          <Undo className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-slate-400 space-y-1">
                      <Star className="w-6 h-6 mx-auto stroke-1 text-slate-300" />
                      <p className="text-[11px]">No pinned favorites yet</p>
                      <p className="text-[9px]">Star any conversions above to quick-access them here</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Box 2: Conversion Audit History Log */}
              <div id="history-box" className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-teal-50 text-teal-600 rounded">
                      <Clock3 className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">Recent Conversions</h3>
                  </div>
                  {history.length > 0 && (
                    <button
                      onClick={handleClearHistory}
                      className="text-[10px] text-slate-400 hover:text-rose-600 font-semibold"
                    >
                      Clear Log
                    </button>
                  )}
                </div>

                <div className="space-y-1.5 max-h-[190px] overflow-y-auto custom-scrollbar">
                  {history.length > 0 ? (
                    history.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          // Allow loading previous conversion state
                          setActiveCategoryId(item.categoryId);
                          // We need to look up units. Simple lookup:
                          const cat = UNIT_CATEGORIES.find(c => c.id === item.categoryId);
                          const fU = cat?.units.find(u => u.symbol === item.fromUnit);
                          const tU = cat?.units.find(u => u.symbol === item.toUnit);
                          if (fU && tU) {
                            setFromUnitId(fU.id);
                            setToUnitId(tU.id);
                            setInputValue(item.fromVal);
                          }
                        }}
                        className="p-2 hover:bg-slate-50 rounded-lg text-xs flex items-center justify-between text-slate-600 border border-transparent hover:border-slate-100 cursor-pointer transition-colors"
                        title="Click to reload this calculation state"
                      >
                        <span className="font-mono text-slate-700">
                          {item.fromVal} <span className="font-bold text-teal-600">{item.fromUnit}</span>
                        </span>
                        <ChevronRight className="w-3 h-3 text-slate-300" />
                        <span className="font-mono font-bold text-slate-950">
                          {item.toVal} <span className="text-teal-600">{item.toUnit}</span>
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-6 text-slate-400 space-y-1">
                      <Clock3 className="w-6 h-6 mx-auto stroke-1 text-slate-300" />
                      <p className="text-[11px]">No conversion history logged yet</p>
                      <p className="text-[9px]">Values log here automatically after typing stops</p>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </section>

        </div>

      </main>

      {/* Decorative Minimalist Site Footer */}
      <footer className="border-t border-slate-100 bg-white/50 py-8 mt-12 text-center text-xs text-slate-400">
        <p>© 2026 PrecisionUnit. Handcrafted in a pristine Teal & White minimalist design.</p>
        <p className="mt-1">Allows real-time instant fluid computations offline-first.</p>
      </footer>

    </div>
  );
}
