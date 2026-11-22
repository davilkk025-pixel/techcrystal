import { X, ExternalLink, Check, X as XIcon, Star, Cpu, Award, ZoomIn } from 'lucide-react';
import { Product } from '../types.ts';
import { buildAffiliateUrl, getStoredAffiliateLetter } from '../utils/affiliate.ts';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  customLetter?: string;
}

export function ProductDetailModal({ product, onClose, customLetter }: ProductDetailModalProps) {
  if (!product) return null;

  const targetUrl = buildAffiliateUrl(product, customLetter);
  const letter = customLetter || getStoredAffiliateLetter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#151B19] border border-[#28332D] rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#28332D] bg-[#0B0F0E]/80">
          <div className="flex items-center gap-2 text-xs text-[#A7B0AC]">
            <span>{product.categoryLabel}</span>
            <span>/</span>
            <span className="text-white font-semibold">{product.brand}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-[#A7B0AC] hover:text-white hover:bg-[#28332D] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Top Hero: Image & Fast Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Crystal Clear High-Res Product Image Frame */}
            <div className="md:col-span-5 bg-[#0B0F0E] border border-[#28332D] rounded-2xl overflow-hidden relative min-h-[300px] sm:h-80 flex items-center justify-center group shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.05] group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/70 via-transparent to-transparent pointer-events-none" />

              {product.badge && (
                <div className="absolute top-3 left-3 bg-[#39FF14]/20 border border-[#39FF14]/60 px-3 py-1 rounded-md text-[11px] font-bold text-[#39FF14] tracking-wider uppercase shadow-lg">
                  {product.badge}
                </div>
              )}

              <div className="absolute bottom-3 right-3 bg-[#151B19]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#28332D] flex items-center gap-1.5 text-[11px] text-[#39FF14]">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>8K Studio Photography</span>
              </div>
            </div>

            {/* Title, Rating, Short summary & CTA */}
            <div className="md:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {product.name}
              </h2>

              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 bg-[#0B0F0E] px-2.5 py-1 rounded-lg border border-[#28332D]">
                  <Star className="w-4 h-4 text-[#39FF14] fill-[#39FF14]" />
                  <span className="font-bold text-white text-sm">{product.rating}</span>
                  <span className="text-[#A7B0AC]">/ 5</span>
                </div>
                <span className="text-[#A7B0AC]">
                  Based on {product.reviewCount.toLocaleString()} verified user evaluations
                </span>
              </div>

              <p className="text-sm text-[#A7B0AC] leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Purchase Box */}
              <div className="pt-2 p-4 bg-[#0B0F0E] border border-[#28332D] rounded-2xl space-y-2">
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-bold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.45)]"
                >
                  <span>Check Official Deal</span>
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </a>

                <div className="flex items-center justify-between text-[11px] text-[#A7B0AC] pt-1">
                  <span className="font-mono text-[10px] text-[#39FF14]">
                    Affiliate Code: {letter}
                  </span>
                  <span>(affiliate link · No extra cost to you)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Advantages vs Disadvantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Pros */}
            <div className="p-5 bg-[#0B0F0E] border border-[#39FF14]/30 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#39FF14]">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Advantages (Pros)</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A7B0AC]">
                {product.advantages.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#39FF14] font-bold">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="p-5 bg-[#0B0F0E] border border-[#FF5555]/30 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#FF5555]">
                <XIcon className="w-4 h-4 stroke-[3]" />
                <span>Disadvantages (Cons)</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A7B0AC]">
                {product.disadvantages.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#FF5555] font-bold">✗</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Scores Breakdown (if available) */}
          {product.scores && (
            <div className="p-5 bg-[#0B0F0E] border border-[#28332D] rounded-2xl space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-[#39FF14]" />
                <span>TechCrystal Lab Performance Benchmark</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 bg-[#151B19] rounded-xl border border-[#28332D]">
                  <span className="text-[11px] text-[#A7B0AC] block">Design & Ergonomics</span>
                  <span className="text-xl font-mono font-bold text-[#39FF14]">{product.scores.design} / 10</span>
                </div>
                <div className="p-3 bg-[#151B19] rounded-xl border border-[#28332D]">
                  <span className="text-[11px] text-[#A7B0AC] block">Raw Performance</span>
                  <span className="text-xl font-mono font-bold text-[#39FF14]">{product.scores.performance} / 10</span>
                </div>
                <div className="p-3 bg-[#151B19] rounded-xl border border-[#28332D]">
                  <span className="text-[11px] text-[#A7B0AC] block">Battery Endurance</span>
                  <span className="text-xl font-mono font-bold text-[#39FF14]">{product.scores.battery} / 10</span>
                </div>
                <div className="p-3 bg-[#151B19] rounded-xl border border-[#28332D]">
                  <span className="text-[11px] text-[#A7B0AC] block">Value Rating</span>
                  <span className="text-xl font-mono font-bold text-[#39FF14]">{product.scores.value} / 10</span>
                </div>
              </div>
            </div>
          )}

          {/* Verified Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#39FF14]" />
              <span>Verified Hardware Specifications</span>
            </h4>

            <div className="border border-[#28332D] rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-[#28332D]">
                  {product.specs.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-[#0B0F0E]' : 'bg-[#151B19]'}>
                      <td className="py-2.5 px-4 font-semibold text-[#A7B0AC] w-1/3">
                        {item.label}
                      </td>
                      <td className="py-2.5 px-4 text-white font-medium">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* TechCrystal Verdict */}
          <div className="p-5 bg-gradient-to-r from-[#15251d] to-[#151B19] border border-[#39FF14]/40 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-[#39FF14] uppercase tracking-wider">
              The TechCrystal Verdict
            </span>
            <p className="text-sm text-white leading-relaxed">
              {product.verdict}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
