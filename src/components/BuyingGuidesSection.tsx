import { ChevronRight, BookOpen } from 'lucide-react';
import { BuyingGuide } from '../types.ts';
import { BUYING_GUIDES } from '../data/mockData.ts';

interface BuyingGuidesSectionProps {
  onSelectGuide: (guide: BuyingGuide) => void;
  onViewAllGuides: () => void;
}

export function BuyingGuidesSection({ onSelectGuide, onViewAllGuides }: BuyingGuidesSectionProps) {
  return (
    <div className="bg-[#151B19] border border-[#28332D] rounded-2xl p-5 sm:p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Latest Buying Guides
          </h3>
          <span className="w-6 h-1 bg-[#39FF14] rounded-full shadow-[0_0_8px_#39FF14]" />
        </div>

        <button
          onClick={onViewAllGuides}
          className="text-xs font-semibold text-[#39FF14] hover:text-white transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Guide List (4 items matching mockup) */}
      <div className="space-y-3">
        {BUYING_GUIDES.slice(0, 4).map((guide) => (
          <button
            key={guide.id}
            onClick={() => onSelectGuide(guide)}
            className="w-full flex items-center justify-between gap-3 p-3 bg-[#0B0F0E] hover:bg-[#1a231f] border border-[#28332D]/70 hover:border-[#39FF14]/50 rounded-xl transition-all duration-200 group text-left cursor-pointer"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              {/* Thumbnail */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-[#151B19] border border-[#28332D] shrink-0">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title & Date */}
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#39FF14] transition-colors line-clamp-1">
                  {guide.title}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-[#A7B0AC]">
                  <span>{guide.date}</span>
                  <span>·</span>
                  <span>{guide.readTime}</span>
                </div>
              </div>
            </div>

            {/* Chevron Right */}
            <div className="w-7 h-7 rounded-full bg-[#151B19] border border-[#28332D] flex items-center justify-center shrink-0 group-hover:border-[#39FF14]/50 group-hover:text-[#39FF14] transition-colors">
              <ChevronRight className="w-4 h-4 text-[#A7B0AC] group-hover:text-[#39FF14] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
