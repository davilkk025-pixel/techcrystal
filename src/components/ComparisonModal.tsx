import { X, ExternalLink, Award } from 'lucide-react';
import { Comparison } from '../types.ts';
import { buildAffiliateUrl } from '../utils/affiliate.ts';

interface ComparisonModalProps {
  comparison: Comparison | null;
  onClose: () => void;
  customLetter?: string;
}

export function ComparisonModal({ comparison, onClose, customLetter }: ComparisonModalProps) {
  if (!comparison) return null;

  const { product1: p1, product2: p2 } = comparison;
  const p1Url = buildAffiliateUrl(p1, customLetter);
  const p2Url = buildAffiliateUrl(p2, customLetter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#151B19] border border-[#28332D] rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#28332D] bg-[#0B0F0E]/80">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {comparison.title}
            </h3>
            <p className="text-xs text-[#A7B0AC]">{comparison.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close comparison"
            className="p-1.5 rounded-lg text-[#A7B0AC] hover:text-white hover:bg-[#28332D] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Side-by-Side Product Cards Top */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            
            {/* Center VS circle on desktop */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B0F0E] border-2 border-[#39FF14] text-[#39FF14] font-black items-center justify-center text-xs shadow-[0_0_15px_rgba(57,255,20,0.5)] z-10">
              VS
            </div>

            {/* Product 1 */}
            <div className="bg-[#0B0F0E] border border-[#28332D] rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-[#151B19] rounded-xl border border-[#28332D] p-2 flex items-center justify-center shrink-0">
                  <img src={p1.image} alt={p1.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">{p1.name}</h4>
                  <p className="text-xs text-[#A7B0AC]">{p1.brand} · ⭐ {p1.rating}</p>
                </div>
              </div>

              <a
                href={p1Url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#151B19] hover:bg-[#202925] border border-[#28332D] hover:border-[#39FF14] text-white hover:text-[#39FF14] text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <span>View {p1.name} Deal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Product 2 */}
            <div className="bg-[#0B0F0E] border border-[#28332D] rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-[#151B19] rounded-xl border border-[#28332D] p-2 flex items-center justify-center shrink-0">
                  <img src={p2.image} alt={p2.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">{p2.name}</h4>
                  <p className="text-xs text-[#A7B0AC]">{p2.brand} · ⭐ {p2.rating}</p>
                </div>
              </div>

              <a
                href={p2Url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#151B19] hover:bg-[#202925] border border-[#28332D] hover:border-[#39FF14] text-white hover:text-[#39FF14] text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <span>View {p2.name} Deal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Comparison Matrix Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-[#39FF14]" />
              <span>Direct Specification Matchup</span>
            </h4>

            <div className="border border-[#28332D] rounded-2xl overflow-hidden bg-[#0B0F0E]">
              <div className="grid grid-cols-12 bg-[#151B19] py-3 px-4 text-xs font-bold text-[#A7B0AC] border-b border-[#28332D]">
                <div className="col-span-4">Specification</div>
                <div className="col-span-4 text-center">{p1.name}</div>
                <div className="col-span-4 text-center">{p2.name}</div>
              </div>

              <div className="divide-y divide-[#28332D]">
                {comparison.features.map((feat, idx) => (
                  <div key={idx} className="grid grid-cols-12 py-3 px-4 text-xs items-center hover:bg-[#151B19]/50 transition-colors">
                    <div className="col-span-4 font-semibold text-[#A7B0AC]">
                      {feat.name}
                    </div>

                    <div className={`col-span-4 text-center px-2 font-medium ${
                      feat.winner === 'p1' ? 'text-[#39FF14] font-bold' : 'text-white'
                    }`}>
                      {feat.p1Value}
                      {feat.winner === 'p1' && (
                        <span className="block text-[10px] text-[#39FF14] font-normal">Winner ★</span>
                      )}
                    </div>

                    <div className={`col-span-4 text-center px-2 font-medium ${
                      feat.winner === 'p2' ? 'text-[#39FF14] font-bold' : 'text-white'
                    }`}>
                      {feat.p2Value}
                      {feat.winner === 'p2' && (
                        <span className="block text-[10px] text-[#39FF14] font-normal">Winner ★</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Editorial Verdict */}
          <div className="p-5 bg-gradient-to-r from-[#15251d] to-[#151B19] border border-[#39FF14]/40 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-[#39FF14] uppercase tracking-wider">
              Comparison Verdict
            </span>
            <p className="text-sm text-white leading-relaxed">
              {comparison.verdict}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
