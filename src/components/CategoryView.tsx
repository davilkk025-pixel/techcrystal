import { useState, useMemo } from 'react';
import { ArrowLeft, SlidersHorizontal, Search, X, Sparkles, Smartphone, Layers, Sliders, ArrowRight } from 'lucide-react';
import { Product, CategoryInfo } from '../types.ts';
import { ProductCard } from './ProductCard.tsx';
import { CATEGORIES } from '../data/mockData.ts';

interface CategoryViewProps {
  categoryId: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onBackToHome: () => void;
  onSelectCategory: (catId: string) => void;
  customLetter?: string;
  onOpenAuth?: (mode: 'signin' | 'signup') => void;
  onOpenMatrix?: () => void;
}

export function CategoryView({
  categoryId,
  products,
  onSelectProduct,
  onBackToHome,
  onSelectCategory,
  customLetter,
  onOpenAuth,
  onOpenMatrix,
}: CategoryViewProps) {
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'name'>('featured');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [phoneTypeFilter, setPhoneTypeFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCategory: CategoryInfo | undefined = CATEGORIES.find(
    (c) => c.id === categoryId
  );

  const isSmartphonesPage = categoryId === 'smartphones';

  // Extract unique brands for this category with device counts
  const brandStats = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      if (p.category === categoryId) {
        counts[p.brand] = (counts[p.brand] || 0) + 1;
      }
    });

    const list = Object.entries(counts).map(([name, count]) => ({
      name,
      count,
    }));

    // Prioritize major phone companies in an intuitive order if on smartphones page
    if (isSmartphonesPage) {
      const priorityOrder = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Nothing', 'Motorola', 'Sony', 'ASUS'];
      list.sort((a, b) => {
        const idxA = priorityOrder.indexOf(a.name);
        const idxB = priorityOrder.indexOf(b.name);
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;
        if (idxA !== -1) return -1;
        if (idxB !== -1) return 1;
        return a.name.localeCompare(b.name);
      });
    } else {
      list.sort((a, b) => b.count - a.count);
    }

    return list;
  }, [products, categoryId, isSmartphonesPage]);

  // Total devices in category
  const totalCategoryDevices = useMemo(() => {
    return products.filter((p) => p.category === categoryId).length;
  }, [products, categoryId]);

  // Filter and sort products
  const categoryProducts = useMemo(() => {
    let list = products.filter((p) => p.category === categoryId);

    // Filter by Brand
    if (selectedBrand !== 'all') {
      list = list.filter((p) => p.brand === selectedBrand);
    }

    // Filter by Phone Sub-Type (for smartphones category)
    if (isSmartphonesPage && phoneTypeFilter !== 'all') {
      if (phoneTypeFilter === 'foldable') {
        list = list.filter((p) => 
          p.name.toLowerCase().includes('fold') || 
          p.name.toLowerCase().includes('flip') || 
          p.name.toLowerCase().includes('open') || 
          p.name.toLowerCase().includes('razr')
        );
      } else if (phoneTypeFilter === 'camera') {
        list = list.filter((p) => 
          p.badge?.toLowerCase().includes('camera') || 
          p.bulletSpecs.some((s) => s.toLowerCase().includes('camera') || s.toLowerCase().includes('leica') || s.toLowerCase().includes('telephoto'))
        );
      } else if (phoneTypeFilter === 'gaming') {
        list = list.filter((p) => 
          p.name.toLowerCase().includes('rog') || 
          p.badge?.toLowerCase().includes('gaming') ||
          p.fullDesc.toLowerCase().includes('gaming')
        );
      } else if (phoneTypeFilter === 'compact') {
        list = list.filter((p) => 
          p.specs.some((s) => s.label === 'Display' && (s.value.includes('6.1"') || s.value.includes('6.2"') || s.value.includes('6.3"'))) ||
          p.badge?.toLowerCase().includes('compact')
        );
      }
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.bulletSpecs.some((s) => s.toLowerCase().includes(q)) ||
        p.specs.some((s) => s.value.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === 'rating') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'name') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [products, categoryId, selectedBrand, phoneTypeFilter, searchQuery, sortBy, isSmartphonesPage]);

  return (
    <div className="py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb & Other Categories Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A7B0AC] hover:text-[#39FF14] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Homepage</span>
          </button>

          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedBrand('all');
                  setPhoneTypeFilter('all');
                  setSearchQuery('');
                  onSelectCategory(cat.id);
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  cat.id === categoryId
                    ? 'bg-[#39FF14] text-[#0B0F0E] font-bold shadow-[0_0_10px_rgba(57,255,20,0.3)]'
                    : 'bg-[#151B19] text-[#A7B0AC] hover:text-white border border-[#28332D]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Header Hero */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#112419] via-[#151B19] to-[#0B0F0E] border border-[#28332D] p-6 sm:p-10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#39FF14] uppercase tracking-wider bg-[#39FF14]/10 border border-[#39FF14]/30 px-3 py-1 rounded-full">
              <Smartphone className="w-3.5 h-3.5" />
              <span>{isSmartphonesPage ? 'Latest 2024–2025 Flagships & Foldables' : 'Verified Tech Category'}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {currentCategory?.name || 'All Products'}
            </h1>

            <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
              {isSmartphonesPage
                ? 'Explore the latest flagship releases from all major manufacturers worldwide: Apple, Samsung, Google, OnePlus, Xiaomi, Nothing, Motorola, Sony, and ASUS. Compare camera benchmarks, silicon processors, and battery endurance.'
                : currentCategory?.description || 'Browse our laboratory tested gadget reviews, detailed specifications, and curated affiliate deals.'}
            </p>

            {/* Quick Stat Pill Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#A7B0AC]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
                <span className="text-white font-semibold">{totalCategoryDevices} devices reviewed</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" />
                <span className="text-white font-semibold">{brandStats.length} major brands</span>
              </div>
              <span>·</span>
              <span className="text-[#39FF14] font-medium">100% independent lab benchmarks</span>
            </div>

            {/* Launch Matrix CTA for Smartphones Category */}
            {isSmartphonesPage && onOpenMatrix && (
              <div className="pt-3">
                <button
                  onClick={onOpenMatrix}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] text-xs font-black shadow-[0_0_20px_rgba(57,255,20,0.35)] transition-all cursor-pointer group"
                >
                  <Sliders className="w-4 h-4" />
                  <span>Launch Side-by-Side Comparison Matrix</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* BRAND SELECTION TABS (All companies) */}
        <div className="bg-[#151B19] border border-[#28332D] rounded-2xl p-4 sm:p-5 space-y-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#39FF14]" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Filter by Manufacturer
              </h3>
            </div>
            <span className="text-xs text-[#A7B0AC]">
              {selectedBrand === 'all' ? `Showing all ${totalCategoryDevices} phones` : `Filtered by ${selectedBrand}`}
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedBrand('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedBrand === 'all'
                  ? 'bg-[#39FF14] text-[#0B0F0E] shadow-[0_0_12px_rgba(57,255,20,0.4)]'
                  : 'bg-[#0B0F0E] text-[#A7B0AC] hover:text-white border border-[#28332D] hover:border-[#39FF14]/40'
              }`}
            >
              All Brands ({totalCategoryDevices})
            </button>

            {brandStats.map((brand) => (
              <button
                key={brand.name}
                onClick={() => setSelectedBrand(brand.name)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  selectedBrand === brand.name
                    ? 'bg-[#39FF14] text-[#0B0F0E] shadow-[0_0_12px_rgba(57,255,20,0.4)]'
                    : 'bg-[#0B0F0E] text-[#A7B0AC] hover:text-white border border-[#28332D] hover:border-[#39FF14]/40'
                }`}
              >
                <span>{brand.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedBrand === brand.name
                      ? 'bg-[#0B0F0E]/20 text-[#0B0F0E] font-bold'
                      : 'bg-[#151B19] text-[#A7B0AC]'
                  }`}
                >
                  {brand.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* SEARCH & SECONDARY CONTROLS BAR */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 bg-[#151B19] border border-[#28332D] rounded-2xl">
          
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search model, silicon (A18, Snapdragon, Tensor), or specs..."
              className="w-full bg-[#0B0F0E] border border-[#28332D] focus:border-[#39FF14] text-xs text-white rounded-xl pl-9 pr-9 py-2.5 placeholder:text-[#67736E] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7B0AC] hover:text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Form Factor / Sub-type Pills (for smartphones) */}
          {isSmartphonesPage && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-[11px] font-semibold text-[#A7B0AC] uppercase tracking-wider mr-1 hidden sm:inline">
                Type:
              </span>
              {[
                { id: 'all', label: 'All' },
                { id: 'camera', label: 'Camera Kings' },
                { id: 'foldable', label: 'Foldables' },
                { id: 'compact', label: 'Compact' },
                { id: 'gaming', label: 'Gaming' },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setPhoneTypeFilter(type.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    phoneTypeFilter === type.id
                      ? 'bg-[#39FF14]/20 border border-[#39FF14] text-[#39FF14] font-bold'
                      : 'bg-[#0B0F0E] text-[#A7B0AC] hover:text-white border border-[#28332D]'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          )}

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0 self-end lg:self-auto">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#39FF14]" />
            <span className="text-xs text-[#A7B0AC]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#0B0F0E] border border-[#28332D] text-xs text-white rounded-xl px-3 py-2 focus:outline-none focus:border-[#39FF14] cursor-pointer"
            >
              <option value="featured">Featured Picks</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>

        </div>

        {/* ACTIVE FILTER STATUS */}
        {(selectedBrand !== 'all' || phoneTypeFilter !== 'all' || searchQuery.trim()) && (
          <div className="flex items-center justify-between bg-[#151B19]/50 border border-[#28332D] px-4 py-2.5 rounded-xl text-xs text-[#A7B0AC]">
            <div className="flex items-center gap-2 flex-wrap">
              <span>Showing <strong className="text-white">{categoryProducts.length}</strong> of {totalCategoryDevices} devices</span>
              {selectedBrand !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-[#39FF14]/10 text-[#39FF14] px-2 py-0.5 rounded border border-[#39FF14]/30">
                  Brand: {selectedBrand}
                  <button onClick={() => setSelectedBrand('all')} className="hover:text-white cursor-pointer"><X className="w-3 h-3" /></button>
                </span>
              )}
              {phoneTypeFilter !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-[#39FF14]/10 text-[#39FF14] px-2 py-0.5 rounded border border-[#39FF14]/30">
                  Type: {phoneTypeFilter}
                  <button onClick={() => setPhoneTypeFilter('all')} className="hover:text-white cursor-pointer"><X className="w-3 h-3" /></button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 bg-[#39FF14]/10 text-[#39FF14] px-2 py-0.5 rounded border border-[#39FF14]/30">
                  Query: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-white cursor-pointer"><X className="w-3 h-3" /></button>
                </span>
              )}
            </div>

            <button
              onClick={() => {
                setSelectedBrand('all');
                setPhoneTypeFilter('all');
                setSearchQuery('');
              }}
              className="text-[#39FF14] hover:underline font-semibold cursor-pointer shrink-0 ml-2"
            >
              Reset all
            </button>
          </div>
        )}

        {/* Products Grid */}
        {categoryProducts.length === 0 ? (
          <div className="p-12 text-center bg-[#151B19] border border-[#28332D] rounded-2xl space-y-4">
            <Smartphone className="w-12 h-12 text-[#A7B0AC] mx-auto opacity-50" />
            <div className="space-y-1">
              <p className="text-base font-bold text-white">No smartphones match this selection.</p>
              <p className="text-xs text-[#A7B0AC]">Try selecting "All Brands" or clearing your search term.</p>
            </div>
            <button
              onClick={() => {
                setSelectedBrand('all');
                setPhoneTypeFilter('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#39FF14] text-[#0B0F0E] text-xs font-bold rounded-xl hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                customLetter={customLetter}
                onOpenAuth={onOpenAuth}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
