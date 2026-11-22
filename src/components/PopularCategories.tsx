import { ArrowRight, Smartphone, Headphones, Laptop, Gamepad2, Home, Watch } from 'lucide-react';
import { CATEGORIES } from '../data/mockData.ts';
import { CategoryInfo } from '../types.ts';

interface PopularCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
  onViewAllCategories: () => void;
}

export function PopularCategories({ onSelectCategory, onViewAllCategories }: PopularCategoriesProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'smartphones':
        return <Smartphone className="w-5 h-5 text-[#39FF14]" />;
      case 'headphones':
        return <Headphones className="w-5 h-5 text-[#39FF14]" />;
      case 'laptops':
        return <Laptop className="w-5 h-5 text-[#39FF14]" />;
      case 'gaming':
        return <Gamepad2 className="w-5 h-5 text-[#39FF14]" />;
      case 'smarthome':
        return <Home className="w-5 h-5 text-[#39FF14]" />;
      case 'smartwatches':
        return <Watch className="w-5 h-5 text-[#39FF14]" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Popular Categories
            </h2>
            {/* Neon Green Horizontal Bar Accent */}
            <span className="w-8 h-1 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
          </div>

          <button
            onClick={onViewAllCategories}
            className="text-xs sm:text-sm font-semibold text-[#39FF14] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Categories Grid (6 items) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat: CategoryInfo) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative flex flex-col items-center justify-between p-5 bg-[#151B19] hover:bg-[#1a221f] border border-[#28332D] hover:border-[#39FF14]/60 rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] text-center cursor-pointer"
            >
              {/* Product Thumbnail / Silhouette */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 flex items-center justify-center rounded-xl bg-[#0B0F0E] border border-[#28332D]/70 group-hover:border-[#39FF14]/50 overflow-hidden transition-all shadow-inner">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.05] group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title & Explore link */}
              <div className="space-y-1.5 w-full">
                <h3 className="text-sm font-bold text-white group-hover:text-[#39FF14] transition-colors truncate">
                  {cat.name}
                </h3>
                
                <div className="inline-flex items-center gap-1 text-[11px] font-medium text-[#39FF14] group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Subtle top-right category icon */}
              <div className="absolute top-2.5 right-2.5 opacity-40 group-hover:opacity-100 transition-opacity">
                {getIcon(cat.id)}
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
