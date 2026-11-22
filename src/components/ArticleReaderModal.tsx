import { X, Calendar, Clock, CheckSquare, ExternalLink } from 'lucide-react';
import { BuyingGuide, Product } from '../types.ts';
import { PRODUCTS } from '../data/mockData.ts';
import { buildAffiliateUrl } from '../utils/affiliate.ts';

interface ArticleReaderModalProps {
  guide: BuyingGuide | null;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  customLetter?: string;
}

export function ArticleReaderModal({
  guide,
  onClose,
  onSelectProduct,
  customLetter,
}: ArticleReaderModalProps) {
  if (!guide) return null;

  // Find recommended products
  const recommended = PRODUCTS.filter((p) =>
    guide.recommendedProductIds.includes(p.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#151B19] border border-[#28332D] rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#28332D] bg-[#0B0F0E]/80">
          <div className="flex items-center gap-2 text-xs text-[#39FF14] font-semibold uppercase tracking-wider">
            <span>Buying Guide</span>
            <span className="text-[#A7B0AC]">·</span>
            <span className="text-white">{guide.category}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close guide"
            className="p-1.5 rounded-lg text-[#A7B0AC] hover:text-white hover:bg-[#28332D] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Reader Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1">
          
          {/* Article Title & Metadata */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {guide.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#A7B0AC] pt-1 border-b border-[#28332D] pb-4">
              <div className="flex items-center gap-2">
                <img
                  src={guide.author.avatar}
                  alt={guide.author.name}
                  className="w-6 h-6 rounded-full object-cover border border-[#28332D]"
                />
                <span className="text-white font-medium">{guide.author.name}</span>
                <span className="text-[11px] text-[#A7B0AC]">({guide.author.role})</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>{guide.date}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>{guide.readTime}</span>
              </div>
            </div>
          </div>

          {/* Hero Banner */}
          <div className="rounded-2xl overflow-hidden border border-[#28332D] h-56 sm:h-72 bg-[#0B0F0E]">
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Executive Summary */}
          <div className="p-5 bg-[#0B0F0E] border-l-2 border-[#39FF14] rounded-r-2xl">
            <p className="text-sm sm:text-base text-white/90 leading-relaxed italic">
              "{guide.summary}"
            </p>
          </div>

          {/* Article Sections */}
          <div className="space-y-6 text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
            {guide.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {section.heading}
                </h3>
                <p>{section.content}</p>

                {section.tips && section.tips.length > 0 && (
                  <div className="p-4 bg-[#15251d] border border-[#39FF14]/30 rounded-xl space-y-2 my-3">
                    <span className="text-xs font-bold text-[#39FF14] uppercase tracking-wider block">
                      TechCrystal Pro Tip
                    </span>
                    <ul className="space-y-1 text-xs sm:text-sm text-white/90">
                      {section.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-[#39FF14]">▸</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Buyer's Checklist */}
          {guide.checklist && (
            <div className="p-6 bg-[#0B0F0E] border border-[#28332D] rounded-2xl space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#39FF14]" />
                <span>Pre-Purchase Checklist</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {guide.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A7B0AC]">
                    <span className="w-4 h-4 rounded bg-[#39FF14]/15 border border-[#39FF14]/50 flex items-center justify-center shrink-0">
                      <span className="text-[#39FF14] text-[10px] font-bold">✓</span>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Gear in this Guide */}
          {recommended.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-[#28332D]">
              <h4 className="text-base font-bold text-white">
                Featured Gear Mentioned in this Guide
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommended.map((p) => {
                  const pUrl = buildAffiliateUrl(p, customLetter);
                  return (
                    <div
                      key={p.id}
                      className="p-4 bg-[#0B0F0E] border border-[#28332D] rounded-2xl flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-12 h-12 object-contain rounded-lg bg-[#151B19] p-1 border border-[#28332D] shrink-0"
                        />
                        <div className="min-w-0">
                          <h5 className="font-bold text-xs sm:text-sm text-white truncate">
                            {p.name}
                          </h5>
                          <p className="text-[11px] text-[#A7B0AC] truncate">
                            {p.brand} · ⭐ {p.rating}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <a
                          href={pUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-bold text-xs rounded-lg inline-flex items-center gap-1 transition-all"
                        >
                          <span>View Deal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-[9px] text-[#A7B0AC]">(affiliate link)</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
