import { useState, useMemo } from 'react';
import { 
  Plus, X, Check, ArrowLeft, Sliders, Sparkles, Star, 
  ExternalLink, ArrowUpDown, Search, RotateCcw, ShieldCheck, 
  Layers, Smartphone, Cpu, Eye, Zap, Camera, BatteryCharging, 
  Info, Maximize2, CheckCircle2, XCircle, Share2
} from 'lucide-react';
import { Product } from '../types.ts';
import { SMARTPHONE_PRODUCTS } from '../data/smartphonesData.ts';
import { buildAffiliateUrl } from '../utils/affiliate.ts';

interface SmartphonesComparisonMatrixProps {
  onSelectProduct: (product: Product) => void;
  onBack: () => void;
  customLetter?: string;
  initialSelectedIds?: string[];
}

interface SpecRowDefinition {
  id: string;
  category: 'Overview' | 'Performance' | 'Display' | 'Cameras' | 'Battery & Power' | 'Build & Durability' | 'Software & Audio';
  label: string;
  getValue: (phone: Product) => string;
  icon?: any;
}

const PRESETS = [
  {
    id: 'titanium-flagships',
    label: 'Titanium Flagships',
    desc: 'Apple vs Samsung vs Google top flagships',
    phoneIds: ['iphone-16-pro-max', 'samsung-galaxy-s24-ultra', 'google-pixel-9-pro-xl'],
  },
  {
    id: 'next-gen-foldables',
    label: 'Next-Gen Foldables',
    desc: 'Galaxy Z Fold 6 vs Pixel 9 Pro Fold vs OnePlus Open',
    phoneIds: ['samsung-galaxy-z-fold-6', 'google-pixel-9-pro-fold', 'oneplus-open'],
  },
  {
    id: 'compact-masters',
    label: 'Compact Masters',
    desc: 'Sub-6.3" high-performance pocket powerhouses',
    phoneIds: ['iphone-16-pro', 'samsung-galaxy-s24', 'google-pixel-9-pro', 'xiaomi-14'],
  },
  {
    id: 'performance-gaming',
    label: 'Gaming & Performance',
    desc: 'Maximum frame rates, cooling, and battery life',
    phoneIds: ['asus-rog-phone-8-pro', 'oneplus-12', 'xiaomi-14-ultra'],
  },
  {
    id: 'modern-flips',
    label: 'Modern Clamshells',
    desc: 'Galaxy Z Flip 6 vs Motorola Razr+ 2024',
    phoneIds: ['samsung-galaxy-z-flip-6', 'motorola-razr-plus-2024'],
  },
];

export function SmartphonesComparisonMatrix({
  onSelectProduct,
  onBack,
  customLetter,
  initialSelectedIds = ['iphone-16-pro-max', 'samsung-galaxy-s24-ultra', 'google-pixel-9-pro-xl'],
}: SmartphonesComparisonMatrixProps) {
  // Selected phone IDs
  const [selectedIds, setSelectedIds] = useState<string[]>(initialSelectedIds);
  // Picker modal state
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerSearch, setPickerSearch] = useState('');
  const [pickerBrand, setPickerBrand] = useState('all');
  // Matrix display toggles
  const [highlightDifferences, setHighlightDifferences] = useState(true);
  const [onlyShowDifferences, setOnlyShowDifferences] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  // Maximum allowed phones for side-by-side comparison
  const MAX_PHONES = 5;

  // Selected phone objects
  const selectedPhones = useMemo(() => {
    return selectedIds
      .map((id) => SMARTPHONE_PRODUCTS.find((p) => p.id === id))
      .filter((p): p is Product => Boolean(p));
  }, [selectedIds]);

  // Brand list for picker
  const brands = useMemo(() => {
    const set = new Set<string>();
    SMARTPHONE_PRODUCTS.forEach((p) => set.add(p.brand));
    return ['all', ...Array.from(set)];
  }, []);

  // Filtered smartphones in picker
  const filteredCatalog = useMemo(() => {
    return SMARTPHONE_PRODUCTS.filter((p) => {
      const matchesBrand = pickerBrand === 'all' || p.brand === pickerBrand;
      const matchesSearch =
        !pickerSearch.trim() ||
        p.name.toLowerCase().includes(pickerSearch.toLowerCase()) ||
        p.brand.toLowerCase().includes(pickerSearch.toLowerCase()) ||
        p.bulletSpecs.some((s) => s.toLowerCase().includes(pickerSearch.toLowerCase()));
      return matchesBrand && matchesSearch;
    });
  }, [pickerBrand, pickerSearch]);

  // Add a phone
  const handleAddPhone = (id: string) => {
    if (selectedIds.includes(id)) return;
    if (selectedIds.length >= MAX_PHONES) return;
    setSelectedIds([...selectedIds, id]);
  };

  // Remove a phone
  const handleRemovePhone = (id: string) => {
    if (selectedIds.length <= 1) return; // Keep at least one phone
    setSelectedIds(selectedIds.filter((pId) => pId !== id));
  };

  // Apply a preset
  const handleApplyPreset = (phoneIds: string[]) => {
    setSelectedIds(phoneIds);
  };

  // Helper to extract a spec value from product specs array
  const findSpec = (phone: Product, labelKey: string): string => {
    const item = phone.specs.find((s) => s.label.toLowerCase().includes(labelKey.toLowerCase()));
    return item ? item.value : '—';
  };

  // Definitions for all comparison rows
  const specDefinitions: SpecRowDefinition[] = [
    // Overview
    {
      id: 'brand',
      category: 'Overview',
      label: 'Manufacturer',
      getValue: (p) => p.brand,
    },
    {
      id: 'releaseYear',
      category: 'Overview',
      label: 'Release Generation',
      getValue: (p) => p.releaseYear,
    },
    {
      id: 'badge',
      category: 'Overview',
      label: 'TechCrystal Distinction',
      getValue: (p) => p.badge || 'Verified Flagship',
    },
    {
      id: 'overallScore',
      category: 'Overview',
      label: 'Overall Lab Score',
      getValue: (p) => `${p.scores?.overall ? p.scores.overall : p.rating} / 10`,
    },
    {
      id: 'userRating',
      category: 'Overview',
      label: 'User Rating',
      getValue: (p) => `★ ${p.rating} (${p.reviewCount.toLocaleString()} reviews)`,
    },
    
    // Performance
    {
      id: 'processor',
      category: 'Performance',
      label: 'Processor Chipset',
      icon: Cpu,
      getValue: (p) => findSpec(p, 'Processor'),
    },
    {
      id: 'perfScore',
      category: 'Performance',
      label: 'Performance Benchmark Index',
      icon: Zap,
      getValue: (p) => `${p.scores?.performance ?? 9.5} / 10`,
    },

    // Display
    {
      id: 'display',
      category: 'Display',
      label: 'Display Specifications',
      icon: Eye,
      getValue: (p) => findSpec(p, 'Display') !== '—' ? findSpec(p, 'Display') : findSpec(p, 'Main Display'),
    },
    {
      id: 'innerDisplay',
      category: 'Display',
      label: 'Secondary / Inner Screen (Foldables)',
      icon: Layers,
      getValue: (p) => {
        const inner = findSpec(p, 'Inner Display');
        const cover = findSpec(p, 'Cover Display');
        if (inner !== '—') return `Inner: ${inner}`;
        if (cover !== '—') return `Cover: ${cover}`;
        return 'Standard Single Display';
      },
    },
    {
      id: 'designScore',
      category: 'Display',
      label: 'Design & Visual Ergonomics',
      getValue: (p) => `${p.scores?.design ?? 9.0} / 10`,
    },

    // Cameras
    {
      id: 'rearCameras',
      category: 'Cameras',
      label: 'Rear Camera System',
      icon: Camera,
      getValue: (p) => {
        const rc = findSpec(p, 'Rear Cameras');
        if (rc !== '—') return rc;
        const mc = findSpec(p, 'Main Camera');
        const tele = findSpec(p, 'Telephoto Cameras');
        if (mc !== '—') return `${mc} + ${tele !== '—' ? tele : ''}`;
        return findSpec(p, 'Cameras');
      },
    },
    {
      id: 'telephoto',
      category: 'Cameras',
      label: 'Optical Telephoto & Zoom',
      icon: Maximize2,
      getValue: (p) => {
        const full = p.fullDesc + ' ' + p.specs.map(s => s.value).join(' ');
        if (full.includes('Continuous')) return '85-170mm Continuous Optical Zoom';
        if (full.includes('100x Space Zoom') || full.includes('200MP Quad')) return '5x 50MP Periscope + 3x Optical (100x Space Zoom)';
        if (full.includes('5x Tetraprism') || full.includes('5x telephoto')) return '5x Optical Telephoto (120mm equivalent)';
        if (full.includes('3x Periscope') || full.includes('64MP 3x')) return '3x Periscope Optical (Up to 6x lossless in-sensor)';
        if (full.includes('3x Telephoto') || full.includes('3x dedicated')) return '3x Dedicated Optical Telephoto';
        if (full.includes('2x Telephoto')) return '2x Optical Telephoto';
        return '2x Sensor Crop / Digital Zoom';
      },
    },

    // Battery & Power
    {
      id: 'battery',
      category: 'Battery & Power',
      label: 'Battery & Charging Speeds',
      icon: BatteryCharging,
      getValue: (p) => findSpec(p, 'Battery'),
    },
    {
      id: 'batteryScore',
      category: 'Battery & Power',
      label: 'Battery Endurance Score',
      getValue: (p) => `${p.scores?.battery ?? 9.0} / 10`,
    },

    // Build & Durability
    {
      id: 'weight',
      category: 'Build & Durability',
      label: 'Chassis Weight',
      getValue: (p) => findSpec(p, 'Weight') !== '—' ? findSpec(p, 'Weight') : findSpec(p, 'Thickness'),
    },
    {
      id: 'durability',
      category: 'Build & Durability',
      label: 'Materials & Ingress Protection',
      icon: ShieldCheck,
      getValue: (p) => {
        const d = findSpec(p, 'Durability');
        if (d !== '—') return d;
        const build = findSpec(p, 'Build');
        if (build !== '—') return build;
        const water = findSpec(p, 'Waterproof');
        if (water !== '—') return water;
        return 'Aerospace Aluminum, Gorilla Glass Victus, IP68';
      },
    },

    // Software & Audio
    {
      id: 'software',
      category: 'Software & Audio',
      label: 'Software Support & OS Updates',
      getValue: (p) => {
        const updates = findSpec(p, 'Updates');
        if (updates !== '—') return updates;
        const sw = findSpec(p, 'Software Updates');
        if (sw !== '—') return sw;
        const ss = findSpec(p, 'Software Support');
        if (ss !== '—') return ss;
        if (p.brand === 'Apple') return '5-6 Years of continuous major iOS updates';
        if (p.brand === 'Samsung' || p.brand === 'Google') return '7 Years guaranteed OS & Security updates';
        return '4 Years Android OS & 5 Years Security';
      },
    },
    {
      id: 'ports',
      category: 'Software & Audio',
      label: 'Ports & Audio Ecosystem',
      getValue: (p) => {
        const audio = findSpec(p, 'Audio Ports');
        const ports = findSpec(p, 'Ports');
        const port = findSpec(p, 'Port');
        if (audio !== '—') return `${audio} + ${port !== '—' ? port : 'USB-C'}`;
        if (ports !== '—') return ports;
        if (port !== '—') return port;
        return 'USB-C High-Speed Port, Stereo Speakers';
      },
    },
    {
      id: 'specialFeatures',
      category: 'Software & Audio',
      label: 'Exclusive Hardware Highlights',
      getValue: (p) => {
        const stylus = findSpec(p, 'Stylus');
        if (stylus !== '—') return `Built-in Bluetooth S Pen with Air Actions`;
        const matrix = findSpec(p, 'Back Matrix');
        if (matrix !== '—') return `AirTrigger Ultrasonic Sensors + AniMe Vision LEDs`;
        const glyph = findSpec(p, 'Glyph LEDs');
        if (glyph !== '—') return `33-Zone Addressable Glyph Interface`;
        if (p.brand === 'Apple' && p.id.includes('16')) return `Dedicated Camera Control Capacitive Slider & Action Button`;
        if (p.id.includes('xperia')) return `Two-Stage Physical Camera Shutter Button & MicroSD Slot`;
        if (p.id.includes('ultra') && p.brand === 'Xiaomi') return `Stepless Variable Physical Aperture (f/1.63 - f/4.0)`;
        return p.bulletSpecs[0] || 'Dual SIM, NFC, 5G Ultra-Wideband';
      },
    },
  ];

  // Group definitions by category
  const categories: ('Overview' | 'Performance' | 'Display' | 'Cameras' | 'Battery & Power' | 'Build & Durability' | 'Software & Audio')[] = [
    'Overview',
    'Performance',
    'Display',
    'Cameras',
    'Battery & Power',
    'Build & Durability',
    'Software & Audio',
  ];

  // Check if a row differs across selected phones
  const doesRowDiffer = (def: SpecRowDefinition): boolean => {
    if (selectedPhones.length <= 1) return false;
    const firstVal = def.getValue(selectedPhones[0]).trim().toLowerCase();
    return selectedPhones.some((p) => def.getValue(p).trim().toLowerCase() !== firstVal);
  };

  // Filtered rows based on user options
  const visibleRows = useMemo(() => {
    let rows = specDefinitions;
    if (activeTab !== 'all') {
      rows = rows.filter((r) => r.category === activeTab);
    }
    if (onlyShowDifferences) {
      rows = rows.filter((r) => doesRowDiffer(r));
    }
    return rows;
  }, [specDefinitions, activeTab, onlyShowDifferences, selectedPhones]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Breadcrumb & Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A7B0AC] hover:text-[#39FF14] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Smartphones Catalog</span>
          </button>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#151B19] border border-[#28332D] hover:border-[#39FF14]/50 text-xs font-medium text-[#A7B0AC] hover:text-white transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#39FF14]" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Matrix'}</span>
            </button>

            <button
              onClick={() => setSelectedIds(['iphone-16-pro-max', 'samsung-galaxy-s24-ultra'])}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#151B19] border border-[#28332D] hover:border-[#39FF14]/50 text-xs font-medium text-[#A7B0AC] hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Default</span>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#112419] via-[#151B19] to-[#0B0F0E] border border-[#28332D] p-6 sm:p-10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#39FF14] uppercase tracking-wider bg-[#39FF14]/10 border border-[#39FF14]/30 px-3 py-1 rounded-full">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Smartphones Matrix</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Smartphones Comparison Matrix
            </h1>

            <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
              Compare up to {MAX_PHONES} flagship smartphones side-by-side with verified laboratory specifications, benchmark scores, camera sensor details, and direct affiliate offer access.
            </p>

            {/* Quick Presets Pills */}
            <div className="pt-3">
              <span className="text-xs font-semibold text-[#A7B0AC] uppercase tracking-wider block mb-2">
                Popular Head-to-Head Presets:
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleApplyPreset(preset.phoneIds)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#0B0F0E] hover:bg-[#1a2520] border border-[#28332D] hover:border-[#39FF14]/60 text-xs text-white font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 group"
                    title={preset.desc}
                  >
                    <Sparkles className="w-3 h-3 text-[#39FF14] group-hover:scale-110 transition-transform" />
                    <span>{preset.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Matrix Controls & Filter Toolbar */}
        <div className="bg-[#151B19] border border-[#28332D] rounded-2xl p-4 sm:p-5 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Category Section Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#39FF14] text-[#0B0F0E] font-bold shadow-[0_0_10px_rgba(57,255,20,0.3)]'
                    : 'bg-[#0B0F0E] text-[#A7B0AC] hover:text-white border border-[#28332D]'
                }`}
              >
                All Specs ({specDefinitions.length})
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === cat
                      ? 'bg-[#39FF14] text-[#0B0F0E] font-bold shadow-[0_0_10px_rgba(57,255,20,0.3)]'
                      : 'bg-[#0B0F0E] text-[#A7B0AC] hover:text-white border border-[#28332D]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Matrix Options & Add Device Button */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              {/* Highlight Differences Toggle */}
              <label className="flex items-center gap-2 text-xs text-[#A7B0AC] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={highlightDifferences}
                  onChange={(e) => setHighlightDifferences(e.target.checked)}
                  className="rounded border-[#28332D] text-[#39FF14] focus:ring-[#39FF14] bg-[#0B0F0E] cursor-pointer"
                />
                <span>Highlight Differences</span>
              </label>

              {/* Only Show Differences Toggle */}
              <label className="flex items-center gap-2 text-xs text-[#A7B0AC] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyShowDifferences}
                  onChange={(e) => setOnlyShowDifferences(e.target.checked)}
                  className="rounded border-[#28332D] text-[#39FF14] focus:ring-[#39FF14] bg-[#0B0F0E] cursor-pointer"
                />
                <span>Differences Only</span>
              </label>

              {/* Add Phone Button */}
              <button
                onClick={() => setPickerOpen(true)}
                disabled={selectedPhones.length >= MAX_PHONES}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedPhones.length >= MAX_PHONES
                    ? 'bg-[#1a2320] text-[#67736E] border border-[#28332D] cursor-not-allowed'
                    : 'bg-[#39FF14] text-[#0B0F0E] shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:brightness-110'
                }`}
              >
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                <span>Add Smartphone ({selectedPhones.length}/{MAX_PHONES})</span>
              </button>
            </div>
          </div>
        </div>

        {/* COMPARISON MATRIX TABLE */}
        <div className="bg-[#151B19] border border-[#28332D] rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#28332D] scrollbar-track-[#0B0F0E]">
            <table className="w-full text-left border-collapse min-w-[760px]">
              
              {/* TABLE HEADER: Product Cards */}
              <thead>
                <tr className="border-b border-[#28332D] bg-[#0E1412]">
                  {/* Left Corner Cell */}
                  <th className="p-4 sm:p-5 w-52 sm:w-64 sticky left-0 z-20 bg-[#0E1412] border-r border-[#28332D] align-bottom">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#39FF14]">
                        Specifications Matrix
                      </div>
                      <div className="text-xs text-[#A7B0AC]">
                        Comparing {selectedPhones.length} devices
                      </div>
                    </div>
                  </th>

                  {/* Device Columns */}
                  {selectedPhones.map((phone) => {
                    const targetUrl = buildAffiliateUrl(phone, customLetter);

                    return (
                      <th
                        key={phone.id}
                        className="p-4 sm:p-5 align-top min-w-[240px] sm:min-w-[280px] max-w-[320px] border-r border-[#28332D]/80 last:border-r-0 bg-[#0E1412]/90"
                      >
                        <div className="flex flex-col justify-between h-full space-y-4">
                          
                          {/* Top: Remove Button & Brand */}
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/30 px-2 py-0.5 rounded">
                              {phone.brand}
                            </span>

                            {selectedPhones.length > 1 && (
                              <button
                                onClick={() => handleRemovePhone(phone.id)}
                                title="Remove from matrix"
                                className="p-1 rounded-lg hover:bg-[#28332D] text-[#A7B0AC] hover:text-rose-400 transition-colors cursor-pointer"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>

                          {/* Image Container */}
                          <div 
                            onClick={() => onSelectProduct(phone)}
                            className="relative w-full h-36 bg-[#0B0F0E] rounded-xl border border-[#28332D] overflow-hidden flex items-center justify-center cursor-pointer group hover:border-[#39FF14]/50 transition-colors"
                          >
                            <img
                              src={phone.image}
                              alt={phone.name}
                              loading="lazy"
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            {phone.badge && (
                              <div className="absolute top-2 left-2 bg-[#39FF14]/20 border border-[#39FF14]/60 px-2 py-0.5 rounded text-[9px] font-bold text-[#39FF14] uppercase">
                                {phone.badge}
                              </div>
                            )}
                          </div>

                          {/* Device Title & Score */}
                          <div>
                            <button
                              onClick={() => onSelectProduct(phone)}
                              className="text-left font-bold text-white hover:text-[#39FF14] transition-colors text-sm sm:text-base line-clamp-1 cursor-pointer"
                            >
                              {phone.name}
                            </button>

                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1 text-xs text-amber-400">
                                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                <span className="font-semibold text-white">{phone.rating}</span>
                              </div>
                              <span className="text-xs text-[#A7B0AC]">·</span>
                              <span className="text-xs text-[#39FF14] font-semibold">
                                Score: {phone.scores?.overall ? phone.scores.overall : phone.rating}/10
                              </span>
                            </div>
                          </div>

                          {/* Actions: Direct Affiliate Deal & Full Review */}
                          <div className="space-y-2 pt-2 border-t border-[#28332D]/60">
                            <a
                              href={targetUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-2 px-3 rounded-xl bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(57,255,20,0.25)] transition-all cursor-pointer"
                            >
                              <span>View Offer</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>

                            <button
                              onClick={() => onSelectProduct(phone)}
                              className="w-full py-1.5 px-3 rounded-xl bg-[#0B0F0E] hover:bg-[#18231E] border border-[#28332D] hover:border-[#39FF14]/40 text-xs font-semibold text-[#A7B0AC] hover:text-white transition-colors cursor-pointer"
                            >
                              Read Full Review
                            </button>
                          </div>

                        </div>
                      </th>
                    );
                  })}

                  {/* Empty Slot Card (+ Add Another) */}
                  {selectedPhones.length < MAX_PHONES && (
                    <th className="p-4 sm:p-5 align-middle min-w-[200px] border-r border-[#28332D]/40 bg-[#0B0F0E]/40">
                      <button
                        onClick={() => setPickerOpen(true)}
                        className="w-full h-full min-h-[220px] rounded-xl border-2 border-dashed border-[#28332D] hover:border-[#39FF14]/50 hover:bg-[#151B19]/50 flex flex-col items-center justify-center p-4 transition-all cursor-pointer group text-center"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#151B19] border border-[#28332D] group-hover:border-[#39FF14] flex items-center justify-center text-[#A7B0AC] group-hover:text-[#39FF14] group-hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all mb-2">
                          <Plus className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-white group-hover:text-[#39FF14] transition-colors">
                          Add Another Phone
                        </span>
                        <span className="text-[11px] text-[#A7B0AC] mt-1">
                          Up to {MAX_PHONES} devices
                        </span>
                      </button>
                    </th>
                  )}
                </tr>
              </thead>

              {/* TABLE BODY: Categorized Specifications */}
              <tbody>
                {visibleRows.length === 0 ? (
                  <tr>
                    <td colSpan={selectedPhones.length + 2} className="p-8 text-center text-xs text-[#A7B0AC]">
                      No specification differences found under this section.
                    </td>
                  </tr>
                ) : (
                  visibleRows.map((spec, rowIndex) => {
                    const differs = doesRowDiffer(spec);
                    const isEven = rowIndex % 2 === 0;

                    return (
                      <tr 
                        key={spec.id} 
                        className={`border-b border-[#28332D]/60 hover:bg-[#18231E]/40 transition-colors ${
                          isEven ? 'bg-[#151B19]' : 'bg-[#101614]'
                        }`}
                      >
                        {/* Sticky Left Column: Spec Label */}
                        <td className={`p-4 sm:p-5 text-xs font-semibold sticky left-0 z-10 border-r border-[#28332D] ${
                          isEven ? 'bg-[#151B19]' : 'bg-[#101614]'
                        }`}>
                          <div className="flex items-center gap-2">
                            {spec.icon && <spec.icon className="w-3.5 h-3.5 text-[#39FF14] shrink-0" />}
                            <span className="text-white">{spec.label}</span>
                          </div>
                          <span className="text-[10px] text-[#A7B0AC] block mt-0.5">
                            {spec.category}
                          </span>
                        </td>

                        {/* Spec Values for each phone */}
                        {selectedPhones.map((phone) => {
                          const val = spec.getValue(phone);

                          return (
                            <td
                              key={phone.id}
                              className={`p-4 sm:p-5 text-xs text-[#D8DCDA] border-r border-[#28332D]/60 last:border-r-0 align-top ${
                                highlightDifferences && differs
                                  ? 'bg-[#39FF14]/5 text-white font-medium'
                                  : ''
                              }`}
                            >
                              <div className="leading-relaxed whitespace-pre-line">
                                {val}
                              </div>
                            </td>
                          );
                        })}

                        {/* Filler Cell if < MAX_PHONES */}
                        {selectedPhones.length < MAX_PHONES && (
                          <td className="p-4 bg-[#0B0F0E]/20 border-r border-[#28332D]/30" />
                        )}
                      </tr>
                    );
                  })
                )}

                {/* PROS & CONS SECTION ROW */}
                <tr className="border-t-2 border-[#28332D] bg-[#0E1412]">
                  <td className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-[#39FF14] sticky left-0 z-10 bg-[#0E1412] border-r border-[#28332D] align-top">
                    Lab Pros & Cons
                  </td>
                  {selectedPhones.map((phone) => (
                    <td key={phone.id} className="p-4 sm:p-5 border-r border-[#28332D]/60 last:border-r-0 align-top">
                      <div className="space-y-4">
                        {/* Pros */}
                        <div className="space-y-1.5">
                          <span className="text-[11px] font-bold text-[#39FF14] uppercase tracking-wide flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Key Advantages
                          </span>
                          <ul className="space-y-1">
                            {phone.advantages.slice(0, 3).map((adv, idx) => (
                              <li key={idx} className="text-[11px] text-[#A7B0AC] flex items-start gap-1.5 leading-snug">
                                <span className="text-[#39FF14] font-bold">✓</span>
                                <span>{adv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div className="space-y-1.5">
                          <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Disadvantages
                          </span>
                          <ul className="space-y-1">
                            {phone.disadvantages.slice(0, 2).map((dis, idx) => (
                              <li key={idx} className="text-[11px] text-[#A7B0AC] flex items-start gap-1.5 leading-snug">
                                <span className="text-rose-400 font-bold">✗</span>
                                <span>{dis}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </td>
                  ))}
                  {selectedPhones.length < MAX_PHONES && (
                    <td className="p-4 bg-[#0B0F0E]/20 border-r border-[#28332D]/30" />
                  )}
                </tr>

                {/* BOTTOM AFFILIATE OFFER BUTTONS ROW */}
                <tr className="border-t border-[#28332D] bg-[#0B0F0E]">
                  <td className="p-4 sm:p-5 text-xs font-bold text-white sticky left-0 z-10 bg-[#0B0F0E] border-r border-[#28332D]">
                    Direct Verified Deal
                  </td>
                  {selectedPhones.map((phone) => {
                    const targetUrl = buildAffiliateUrl(phone, customLetter);
                    return (
                      <td key={phone.id} className="p-4 sm:p-5 border-r border-[#28332D]/60 last:border-r-0">
                        <a
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-3 rounded-xl bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-black text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all cursor-pointer"
                        >
                          <span>Check {phone.name}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    );
                  })}
                  {selectedPhones.length < MAX_PHONES && (
                    <td className="p-4 bg-[#0B0F0E]/20 border-r border-[#28332D]/30" />
                  )}
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* ================= DEVICE PICKER MODAL ================= */}
        {pickerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div 
              className="relative w-full max-w-3xl bg-[#151B19] border border-[#28332D] rounded-3xl p-6 sm:p-8 space-y-6 max-h-[90vh] flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-[#39FF14]" />
                    Select Smartphones to Compare
                  </h3>
                  <p className="text-xs text-[#A7B0AC] mt-1">
                    Choose up to {MAX_PHONES} devices ({selectedPhones.length} currently selected)
                  </p>
                </div>

                <button
                  onClick={() => setPickerOpen(false)}
                  className="p-2 rounded-xl bg-[#0B0F0E] border border-[#28332D] text-[#A7B0AC] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search & Brand Filter */}
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
                  <input
                    type="text"
                    value={pickerSearch}
                    onChange={(e) => setPickerSearch(e.target.value)}
                    placeholder="Search model name, brand, or feature..."
                    className="w-full bg-[#0B0F0E] border border-[#28332D] focus:border-[#39FF14] text-xs text-white rounded-xl pl-9 pr-4 py-2.5 placeholder:text-[#67736E] focus:outline-none"
                  />
                </div>

                {/* Brand Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => setPickerBrand(b)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                        pickerBrand === b
                          ? 'bg-[#39FF14] text-[#0B0F0E]'
                          : 'bg-[#0B0F0E] text-[#A7B0AC] hover:text-white border border-[#28332D]'
                      }`}
                    >
                      {b === 'all' ? 'All Brands' : b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Devices */}
              <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-[#28332D]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredCatalog.map((phone) => {
                    const isSelected = selectedIds.includes(phone.id);
                    const canAdd = selectedIds.length < MAX_PHONES;

                    return (
                      <div
                        key={phone.id}
                        onClick={() => {
                          if (isSelected) {
                            handleRemovePhone(phone.id);
                          } else if (canAdd) {
                            handleAddPhone(phone.id);
                          }
                        }}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#39FF14]/10 border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.15)]'
                            : canAdd
                            ? 'bg-[#0B0F0E] border-[#28332D] hover:border-[#39FF14]/50'
                            : 'bg-[#0B0F0E]/50 border-[#28332D] opacity-60 cursor-not-allowed'
                        }`}
                      >
                        {/* Thumbnail & Info */}
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={phone.image}
                            alt={phone.name}
                            className="w-12 h-12 object-cover rounded-xl border border-[#28332D] shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold text-[#39FF14] uppercase tracking-wider block">
                              {phone.brand}
                            </span>
                            <h4 className="text-xs font-bold text-white truncate">
                              {phone.name}
                            </h4>
                            <p className="text-[10px] text-[#A7B0AC] truncate mt-0.5">
                              {phone.bulletSpecs[0] || phone.shortDesc}
                            </p>
                          </div>
                        </div>

                        {/* Status Checkbox / Toggle */}
                        <div className="shrink-0">
                          {isSelected ? (
                            <div className="w-7 h-7 rounded-full bg-[#39FF14] text-[#0B0F0E] flex items-center justify-center font-bold">
                              <Check className="w-4 h-4 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-7 h-7 rounded-full border border-[#28332D] flex items-center justify-center text-[#A7B0AC] hover:border-[#39FF14]">
                              <Plus className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#28332D]">
                <span className="text-xs text-[#A7B0AC]">
                  {selectedIds.length} of {MAX_PHONES} phones selected
                </span>
                <button
                  onClick={() => setPickerOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#39FF14] text-[#0B0F0E] text-xs font-bold shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:brightness-110 cursor-pointer"
                >
                  Done Comparing
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
