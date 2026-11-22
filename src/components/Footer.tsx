import { Info, Youtube, Facebook, Twitter, Instagram } from 'lucide-react';
import { TechCrystalLogo } from './TechCrystalLogo.tsx';

interface FooterProps {
  onNavigate: (view: string, categoryId?: string) => void;
  onOpenPrivacy: () => void;
  onOpenDisclosure: () => void;
  onOpenTerms: () => void;
  onOpenAffiliateSettings: () => void;
}

export function Footer({
  onNavigate,
  onOpenPrivacy,
  onOpenDisclosure,
  onOpenTerms,
  onOpenAffiliateSettings,
}: FooterProps) {
  const navLinks = [
    { label: 'Home', view: 'home' },
    { label: 'Smartphones', view: 'category', catId: 'smartphones' },
    { label: 'Headphones', view: 'category', catId: 'headphones' },
    { label: 'Laptops', view: 'category', catId: 'laptops' },
    { label: 'Gaming', view: 'category', catId: 'gaming' },
    { label: 'Smart Home', view: 'category', catId: 'smarthome' },
    { label: 'Buying Guides', view: 'guides' },
    { label: 'Reviews', view: 'reviews' },
    { label: 'About Us', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <footer className="bg-[#0B0F0E] border-t border-[#28332D] pt-12 pb-24 md:pb-16 mt-16 text-[#A7B0AC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Row: Logo, Nav, Socials */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 pb-8 border-b border-[#28332D]/70">
          
          {/* Logo & Brand */}
          <button
            onClick={() => onNavigate('home')}
            className="text-left focus:outline-none cursor-pointer"
          >
            <TechCrystalLogo size="md" showTagline={true} />
          </button>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view, item.catId)}
                className="hover:text-[#39FF14] transition-colors whitespace-nowrap cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 text-[#A7B0AC]">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#151B19] border border-[#28332D] hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
              aria-label="TechCrystal YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#151B19] border border-[#28332D] hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
              aria-label="TechCrystal Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#151B19] border border-[#28332D] hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
              aria-label="TechCrystal X / Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#151B19] border border-[#28332D] hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
              aria-label="TechCrystal Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Middle Row: Copyright & Legal Policies */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <p>© 2025 TechCrystal. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 text-[#A7B0AC]">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={onOpenDisclosure}
              className="hover:text-[#39FF14] transition-colors cursor-pointer font-medium"
            >
              Affiliate Disclosure
            </button>
            <span>|</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms and Conditions
            </button>
            <span>|</span>
            <button
              onClick={onOpenAffiliateSettings}
              className="text-[#39FF14] hover:underline cursor-pointer"
            >
              Affiliate Letter Config
            </button>
          </div>
        </div>

      </div>

      {/* Persistent Bottom Affiliate Notice without Amazon */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#0B0F0E]/95 backdrop-blur-md border-t border-[#28332D] py-2.5 px-4 text-center">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-2.5 text-[11px] sm:text-xs text-[#A7B0AC] leading-snug">
          <Info className="w-4 h-4 text-[#39FF14] shrink-0" />
          <p>
            <span className="text-white font-medium">Independent Editorial Notice:</span>
            <span className="mx-2 hidden sm:inline text-[#28332D]">|</span>
            <span>This website contains affiliate links. If you click on a partner link and make a purchase, we may receive a commission at no additional cost to you.</span>
          </p>
          <button
            onClick={onOpenDisclosure}
            className="text-[#39FF14] underline text-[10px] sm:text-[11px] shrink-0 hover:text-white cursor-pointer ml-1"
          >
            Learn more
          </button>
        </div>
      </div>
    </footer>
  );
}
