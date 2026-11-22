import { useState } from 'react';
import { ExternalLink, Check, X as XIcon, Star, ChevronDown, ChevronUp, Bookmark, Smartphone } from 'lucide-react';
import { Product } from '../types.ts';
import { buildAffiliateUrl } from '../utils/affiliate.ts';
import { useAuth } from '../context/AuthContext.tsx';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  customLetter?: string;
  onOpenAuth?: (mode: 'signin' | 'signup') => void;
}

export function ProductCard({ product, onSelectProduct, customLetter, onOpenAuth }: ProductCardProps) {
  const [showProsCons, setShowProsCons] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { user, isFavorite, toggleFavorite } = useAuth();
  const bookmarked = isFavorite(product.id);
  const targetUrl = buildAffiliateUrl(product, customLetter);

  return (
    <div className="group relative flex flex-col justify-between bg-[#151B19] hover:bg-[#18201d] border border-[#28332D] hover:border-[#39FF14]/50 rounded-2xl p-4.5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(57,255,20,0.15)]">
      
      {/* Top Media & Badges */}
      <div>
        {/* Crystal Clear High-Definition Product Photo Container */}
        <div 
          onClick={() => onSelectProduct(product)}
          className="relative w-full h-52 sm:h-56 mb-4 bg-[#0B0F0E] rounded-xl border border-[#28332D] overflow-hidden flex items-center justify-center cursor-pointer group-hover:border-[#39FF14]/40 transition-colors"
        >
          {!imgError ? (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.05] group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#18231E] to-[#0E1513] text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] mb-2 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                <Smartphone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-white tracking-wide">{product.brand}</span>
              <span className="text-[11px] text-[#A7B0AC] mt-0.5 line-clamp-1">{product.name}</span>
            </div>
          )}

          {/* Soft vignette to highlight the product */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/80 via-transparent to-transparent pointer-events-none" />

          {/* Bookmark / Save to Account Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (!user) {
                onOpenAuth?.('signin');
              } else {
                toggleFavorite(product.id, product.name, product.categoryLabel);
              }
            }}
            title={bookmarked ? 'Saved in account favorites' : 'Save to account favorites'}
            className={`absolute top-2.5 right-16 p-1.5 rounded-lg border backdrop-blur-md transition-all cursor-pointer ${
              bookmarked
                ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]'
                : 'bg-[#151B19]/80 border-[#28332D] text-[#A7B0AC] hover:text-white hover:border-[#39FF14]/50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#39FF14]' : ''}`} />
          </button>

          {/* Rating Badge */}
          <div className="absolute top-2.5 right-2.5 bg-[#151B19]/90 backdrop-blur-md border border-[#28332D] px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-xs font-semibold text-white shadow-lg">
            <Star className="w-3.5 h-3.5 text-[#39FF14] fill-[#39FF14]" />
            <span>{product.rating}</span>
          </div>

          {/* Category kicker */}
          {product.badge && (
            <div className="absolute top-2.5 left-2.5 bg-[#39FF14]/20 border border-[#39FF14]/60 px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider text-[#39FF14] uppercase shadow-lg">
              {product.badge}
            </div>
          )}

          {/* Quick Click to inspect indicator */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#151B19]/90 border border-[#39FF14]/50 px-2 py-0.5 rounded text-[10px] font-medium text-[#39FF14]">
            Click to view full specs
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <button
            onClick={() => onSelectProduct(product)}
            className="text-left group/title focus:outline-none cursor-pointer w-full"
          >
            <h3 className="text-lg font-bold text-white group-hover/title:text-[#39FF14] transition-colors line-clamp-1">
              {product.name}
            </h3>
          </button>
          
          <p className="text-xs text-[#A7B0AC] mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>
        </div>

        {/* Verified Specifications Bullets (Green Checkmarks) */}
        <div className="space-y-2 mb-4 pt-2 border-t border-[#28332D]/70">
          {product.bulletSpecs.slice(0, 3).map((spec, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#FFFFFF]">
              <span className="w-4 h-4 rounded-full bg-[#39FF14]/15 border border-[#39FF14]/40 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-[#39FF14] stroke-[3]" />
              </span>
              <span className="truncate">{spec}</span>
            </div>
          ))}
        </div>

        {/* Pros & Cons Accordion Toggle */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setShowProsCons(!showProsCons)}
            className="w-full flex items-center justify-between py-1.5 px-2 bg-[#0B0F0E]/70 hover:bg-[#0B0F0E] rounded-lg text-[11px] font-medium text-[#A7B0AC] hover:text-[#39FF14] transition-colors border border-[#28332D]/60 cursor-pointer"
          >
            <span>{showProsCons ? 'Hide Pros & Cons' : 'View Advantages & Disadvantages'}</span>
            {showProsCons ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showProsCons && (
            <div className="mt-2.5 p-3 bg-[#0B0F0E] rounded-xl border border-[#28332D] space-y-2.5 text-xs animate-fadeIn">
              <div>
                <span className="text-[10px] font-bold text-[#39FF14] uppercase tracking-wider block mb-1">
                  Advantages (Pros)
                </span>
                <ul className="space-y-1">
                  {product.advantages.slice(0, 2).map((pro, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[#A7B0AC]">
                      <Check className="w-3 h-3 text-[#39FF14] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#FF5555] uppercase tracking-wider block mb-1">
                  Disadvantages (Cons)
                </span>
                <ul className="space-y-1">
                  {product.disadvantages.slice(0, 2).map((con, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[#A7B0AC]">
                      <XIcon className="w-3 h-3 text-[#FF5555] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer: Affiliate Link & Disclosure */}
      <div className="space-y-2 pt-2">
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 bg-[#151B19] hover:bg-[#202925] border border-[#28332D] hover:border-[#39FF14] text-white hover:text-[#39FF14] font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-200 group/btn"
        >
          <span>View Deal</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>

        {/* Clear affiliate link label */}
        <div className="flex items-center justify-center gap-1">
          <span className="text-[10px] text-[#A7B0AC]/80 tracking-wide">
            (affiliate link)
          </span>
          <span className="text-[10px] text-[#A7B0AC]/60">·</span>
          <button
            onClick={() => onSelectProduct(product)}
            className="text-[10px] text-[#39FF14] hover:underline cursor-pointer"
          >
            Read Review
          </button>
        </div>
      </div>

    </div>
  );
}
