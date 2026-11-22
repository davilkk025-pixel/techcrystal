import { ArrowRight, Sliders } from 'lucide-react';
import { Comparison } from '../types.ts';
import { COMPARISONS } from '../data/mockData.ts';

interface ProductComparisonsSectionProps {
  onSelectComparison: (comparison: Comparison) => void;
  onViewAllComparisons: () => void;
  onOpenMatrix?: () => void;
}

export function ProductComparisonsSection({
  onSelectComparison,
  onViewAllComparisons,
  onOpenMatrix,
}: ProductComparisonsSectionProps) {
  const comparisonImages: Record<string, string> = {
    'iphone-16-vs-samsung-galaxy-s24': '/assets/comp_iphone_s24.png',
    'macbook-air-m3-vs-dell-xps-13': '/assets/comp_macbook_dell.png',
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Product Comparisons
          </h3>
          <span className="w-8 h-1 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
        </div>

        <div className="flex items-center gap-3">
          {onOpenMatrix && (
            <button
              onClick={onOpenMatrix}
              className="text-xs font-bold text-[#39FF14] bg-[#39FF14]/10 hover:bg-[#39FF14]/20 border border-[#39FF14]/40 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_10px_rgba(57,255,20,0.15)]"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Smartphones Matrix</span>
            </button>
          )}

          <button
            onClick={onViewAllComparisons}
            className="text-xs sm:text-sm font-semibold text-[#A7B0AC] hover:text-white flex items-center gap-1 transition-colors cursor-pointer group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Comparisons Grid (2 cards matching mockup) */}
      <div className="space-y-4">
        {COMPARISONS.map((comp) => {
          const compImg = comparisonImages[comp.id];

          return (
            <div
              key={comp.id}
              className="bg-[#151B19] border border-[#28332D] hover:border-[#39FF14]/50 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.1)] group flex flex-col sm:flex-row items-center gap-5"
            >
              {/* Visual: Side-by-side products matching mockup */}
              <div className="relative flex items-center justify-center bg-[#0B0F0E] border border-[#28332D] rounded-xl p-2 shrink-0 w-full sm:w-56 h-28 overflow-hidden">
                {compImg ? (
                  <img
                    src={compImg}
                    alt={comp.title}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full">
                    <img src={comp.product1.image} alt={comp.product1.name} className="w-16 h-16 object-contain" />
                    <div className="px-2 py-0.5 bg-[#0B0F0E] border border-[#39FF14] text-[#39FF14] font-black text-[11px] rounded mx-1">
                      VS
                    </div>
                    <img src={comp.product2.image} alt={comp.product2.name} className="w-16 h-16 object-contain" />
                  </div>
                )}
              </div>

              {/* Description & Action */}
              <div className="flex-1 space-y-2 text-center sm:text-left w-full">
                <h4 className="text-base font-bold text-white group-hover:text-[#39FF14] transition-colors">
                  {comp.title}
                </h4>
                <p className="text-xs text-[#A7B0AC] leading-relaxed line-clamp-2">
                  {comp.summary}
                </p>
                
                <div className="pt-2">
                  <button
                    onClick={() => onSelectComparison(comp)}
                    className="px-4 py-2 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-bold text-xs rounded-xl inline-flex items-center gap-1.5 transition-all duration-200 shadow-[0_0_15px_rgba(57,255,20,0.25)] cursor-pointer"
                  >
                    <span>View Comparison</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
