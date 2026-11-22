import { ArrowRight, Flame } from 'lucide-react';
import { ProductCard } from './ProductCard.tsx';
import { Product } from '../types.ts';
import { PRODUCTS } from '../data/mockData.ts';

interface FeaturedGadgetsProps {
  onSelectProduct: (product: Product) => void;
  onViewAllFeatured: () => void;
  onShopGaming: () => void;
  customLetter?: string;
}

export function FeaturedGadgets({
  onSelectProduct,
  onViewAllFeatured,
  onShopGaming,
  customLetter,
}: FeaturedGadgetsProps) {
  // Grab the 4 featured products from mockup
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-[#39FF14]" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Featured Gadgets
            </h2>
            {/* Neon Green Horizontal Bar Accent */}
            <span className="w-8 h-1 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
          </div>

          <button
            onClick={onViewAllFeatured}
            className="text-xs sm:text-sm font-semibold text-[#39FF14] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group"
          >
            <span>View All Featured</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5-Column Grid on desktop: 4 Product Cards + 1 Gaming Promo Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              customLetter={customLetter}
            />
          ))}

          {/* 5th Column: "Upgrade Your Gaming Experience" Promo Banner Card */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-[#151B19] border border-[#28332D] hover:border-[#39FF14]/60 overflow-hidden transition-all duration-300 shadow-xl group">
            
            {/* Background Image Cropped from Mockup */}
            <div className="relative w-full h-full min-h-[380px] flex flex-col justify-between p-6">
              <img
                src="/assets/banner_gaming_experience.png"
                alt="Upgrade Your Gaming Experience"
                className="absolute inset-0 w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Clickable Overlay */}
              <div className="relative z-10 flex-1" />

              <div className="relative z-10 pt-4">
                <button
                  onClick={onShopGaming}
                  className="w-full py-3 px-4 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)] cursor-pointer"
                >
                  <span>Shop Gaming</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
