import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreGadgets: () => void;
  onLatestReviews: () => void;
}

export function Hero({ onExploreGadgets, onLatestReviews }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B0F0E] pt-8 pb-12 lg:pt-10 lg:pb-16 border-b border-[#28332D]/40">
      
      {/* Background Volumetric Green Glow & Diagonal Laser Trails */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central green bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#184628]/40 via-[#39FF14]/15 to-transparent rounded-full blur-[110px]" />
        
        {/* Diagonal laser beam 1 */}
        <div 
          className="absolute top-0 right-1/3 w-[2px] h-[120%] bg-gradient-to-b from-transparent via-[#39FF14]/40 to-transparent rotate-[-42deg] transform-gpu filter blur-[0.5px]"
        />
        {/* Diagonal laser beam 2 */}
        <div 
          className="absolute top-1/4 right-1/4 w-[1px] h-[100%] bg-gradient-to-b from-transparent via-[#39FF14]/30 to-transparent rotate-[-45deg] transform-gpu"
        />
        {/* Subtle geometric crystal facet watermark */}
        <div className="absolute -bottom-10 left-1/3 w-64 h-64 border border-[#39FF14]/10 rotate-45 pointer-events-none" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6">
            
            {/* Kicker Pill: TECH REVIEWS & BUYING GUIDES */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132219] border border-[#23422e] text-[11px] sm:text-xs font-bold text-[#39FF14] tracking-wider uppercase shadow-[0_0_12px_rgba(57,255,20,0.15)]">
              TECH REVIEWS &amp; BUYING GUIDES
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-[58px] font-extrabold text-white tracking-tight leading-[1.12]">
              Discover the Future <br />
              of <span className="text-[#39FF14] drop-shadow-[0_0_25px_rgba(57,255,20,0.45)]">Technology.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed max-w-lg font-normal">
              Explore gadget reviews, compare technology, and find the right devices for your everyday life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreGadgets}
                className="px-6 py-3.5 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-bold text-sm rounded-full flex items-center gap-2 transition-all duration-200 transform hover:scale-[1.02] shadow-[0_0_25px_rgba(57,255,20,0.4)] cursor-pointer"
              >
                <span>Explore Gadgets</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onLatestReviews}
                className="px-6 py-3.5 bg-[#151B19]/80 hover:bg-[#1a231f] text-white hover:text-[#39FF14] border border-[#28332D] hover:border-[#39FF14]/50 font-semibold text-sm rounded-full transition-all duration-200 cursor-pointer"
              >
                Latest Reviews
              </button>
            </div>

          </div>

          {/* Right Column: Hero Gadget Cluster matching the exact visual */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[720px] rounded-2xl overflow-hidden group">
              
              {/* Product Showcase Render with Pedestal, Lasers, and Gadgets */}
              <img
                src="/assets/hero_gadgets_showcase.png"
                alt="TechCrystal Gadget Lineup: Smartphones, Laptops, Earbuds, Smartwatches, and Headset"
                className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Edge fade gradient seamlessly blending with the dark background */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0B0F0E] to-transparent pointer-events-none hidden lg:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
