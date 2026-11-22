import { useState } from 'react';
import { X, Tag, ShieldCheck, Check, ExternalLink, RefreshCw, Link as LinkIcon, Edit3 } from 'lucide-react';
import {
  getStoredAffiliateLetter,
  saveAffiliateLetter,
  getCustomProductLinks,
  saveCustomProductLink,
  DEFAULT_AFFILIATE_LETTER,
} from '../utils/affiliate.ts';
import { PRODUCTS } from '../data/mockData.ts';

interface AffiliateSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLetterUpdated: (newLetter: string) => void;
}

export function AffiliateSettingsModal({
  isOpen,
  onClose,
  onLetterUpdated,
}: AffiliateSettingsModalProps) {
  if (!isOpen) return null;

  const currentLetter = getStoredAffiliateLetter();
  const [letterInput, setLetterInput] = useState(currentLetter);
  const [productLinks, setProductLinks] = useState<Record<string, string>>(getCustomProductLinks());
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'letter' | 'products'>('letter');

  const handleSaveLetter = (e: React.FormEvent) => {
    e.preventDefault();
    const finalLetter = letterInput.trim() || DEFAULT_AFFILIATE_LETTER;
    saveAffiliateLetter(finalLetter);
    onLetterUpdated(finalLetter);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleProductLinkChange = (productId: string, url: string) => {
    saveCustomProductLink(productId, url);
    setProductLinks({ ...productLinks, [productId]: url });
  };

  const handleResetLetter = () => {
    setLetterInput(DEFAULT_AFFILIATE_LETTER);
    saveAffiliateLetter(DEFAULT_AFFILIATE_LETTER);
    onLetterUpdated(DEFAULT_AFFILIATE_LETTER);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#151B19] border border-[#28332D] rounded-3xl shadow-2xl overflow-hidden my-8 p-6 sm:p-8 space-y-6 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#28332D]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#39FF14]/15 border border-[#39FF14]/40 flex items-center justify-center">
              <Tag className="w-5 h-5 text-[#39FF14]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Affiliate Letter &amp; Links Manager
              </h3>
              <p className="text-xs text-[#A7B0AC]">
                Configure your custom affiliate letters and product direct links
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-[#A7B0AC] hover:text-white hover:bg-[#28332D] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch: Global Affiliate Letter vs Per-Product Direct Links */}
        <div className="flex items-center gap-2 p-1 bg-[#0B0F0E] rounded-xl border border-[#28332D]">
          <button
            type="button"
            onClick={() => setActiveTab('letter')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'letter'
                ? 'bg-[#39FF14] text-[#0B0F0E] shadow-[0_0_10px_rgba(57,255,20,0.3)]'
                : 'text-[#A7B0AC] hover:text-white'
            }`}
          >
            Global Affiliate Letter / Referral Code
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('products')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'products'
                ? 'bg-[#39FF14] text-[#0B0F0E] shadow-[0_0_10px_rgba(57,255,20,0.3)]'
                : 'text-[#A7B0AC] hover:text-white'
            }`}
          >
            Custom Links Per Product ({Object.keys(productLinks).length} set)
          </button>
        </div>

        {/* TAB 1: Global Affiliate Letter */}
        {activeTab === 'letter' && (
          <form onSubmit={handleSaveLetter} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-white mb-1.5 uppercase tracking-wider">
                Your Custom Affiliate Letter / Tracking Identifier
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={letterInput}
                  onChange={(e) => setLetterInput(e.target.value)}
                  placeholder="e.g. YOUR-AFFILIATE-LETTER"
                  className="w-full bg-[#0B0F0E] border border-[#28332D] text-sm font-mono text-[#39FF14] px-4 py-3 rounded-xl focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14]"
                />
              </div>
              <p className="text-[11px] text-[#A7B0AC] mt-1.5">
                This affiliate letter or referral code is automatically appended to store links as <code className="text-[#39FF14]">?aff={letterInput || 'YOUR-CODE'}</code>.
              </p>
            </div>

            <div className="p-4 bg-[#0B0F0E] border border-[#28332D] rounded-xl space-y-2">
              <span className="text-xs font-semibold text-white">Generated Sample Link:</span>
              <p className="font-mono text-xs text-[#A7B0AC] break-all select-all bg-[#151B19] p-2 rounded border border-[#28332D]">
                https://www.apple.com/iphone-16/?aff={encodeURIComponent(letterInput || DEFAULT_AFFILIATE_LETTER)}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handleResetLetter}
                className="text-xs text-[#A7B0AC] hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset ({DEFAULT_AFFILIATE_LETTER})</span>
              </button>

              <button
                type="submit"
                className="px-5 py-2.5 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all cursor-pointer"
              >
                Save Affiliate Letter
              </button>
            </div>

            {savedSuccess && (
              <div className="p-3 bg-[#39FF14]/15 border border-[#39FF14]/50 rounded-xl text-xs text-[#39FF14] font-medium flex items-center gap-2 animate-fadeIn">
                <Check className="w-4 h-4" />
                <span>Affiliate letter successfully saved and applied to all product buttons!</span>
              </div>
            )}
          </form>
        )}

        {/* TAB 2: Per-Product Direct Affiliate Links */}
        {activeTab === 'products' && (
          <div className="space-y-4 overflow-y-auto pr-1 flex-1">
            <p className="text-xs text-[#A7B0AC]">
              Paste your exact custom affiliate URL for any product below. When filled, the website will direct users straight to your custom affiliate link for that specific item!
            </p>

            <div className="space-y-3">
              {PRODUCTS.map((product) => {
                const currentVal = productLinks[product.id] || '';
                return (
                  <div
                    key={product.id}
                    className="p-3.5 bg-[#0B0F0E] border border-[#28332D] rounded-xl space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-7 h-7 object-contain rounded bg-[#151B19] p-0.5 border border-[#28332D]"
                        />
                        <span className="text-xs font-bold text-white truncate">
                          {product.name}
                        </span>
                        <span className="text-[10px] text-[#A7B0AC]">
                          ({product.brand})
                        </span>
                      </div>

                      {currentVal ? (
                        <span className="text-[10px] font-bold text-[#39FF14] bg-[#39FF14]/15 border border-[#39FF14]/40 px-2 py-0.5 rounded">
                          Custom Link Active
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#A7B0AC]">
                          Using Global Letter
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="url"
                        value={currentVal}
                        onChange={(e) => handleProductLinkChange(product.id, e.target.value)}
                        placeholder={`Paste your custom affiliate link for ${product.name}...`}
                        className="w-full bg-[#151B19] border border-[#28332D] text-xs text-white placeholder-[#A7B0AC]/60 px-3 py-2 rounded-lg focus:outline-none focus:border-[#39FF14]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Independent Compliance Note */}
        <div className="p-3.5 bg-[#0B0F0E] border border-[#28332D] rounded-xl space-y-1 text-xs text-[#A7B0AC]">
          <div className="flex items-center gap-2 text-white font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
            <span>Independent Affiliate Architecture</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            TechCrystal uses a flexible, non-Amazon independent affiliate routing system. All button clicks seamlessly route through your configured affiliate letters and direct links with standard consumer disclosures.
          </p>
        </div>

      </div>
    </div>
  );
}
