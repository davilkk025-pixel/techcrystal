import { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, ChevronRight, User as UserIcon, UserPlus, LogIn } from 'lucide-react';
import { TechCrystalLogo } from './TechCrystalLogo.tsx';
import { Product, BuyingGuide, Comparison } from '../types.ts';
import { PRODUCTS, BUYING_GUIDES } from '../data/mockData.ts';
import { useAuth } from '../context/AuthContext.tsx';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, categoryId?: string) => void;
  onSelectProduct: (product: Product) => void;
  onSelectGuide: (guide: BuyingGuide) => void;
  onSelectComparison: (comparison: Comparison) => void;
  onOpenAffiliateSettings?: () => void;
  onOpenAuth?: (mode: 'signin' | 'signup') => void;
  onOpenProfile?: () => void;
}

export function Header({
  currentView,
  onNavigate,
  onSelectProduct,
  onSelectGuide,
  onSelectComparison,
  onOpenAffiliateSettings,
  onOpenAuth = () => {},
  onOpenProfile = () => {},
}: HeaderProps) {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter search results
  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  const filteredGuides = searchQuery.trim()
    ? BUYING_GUIDES.filter(g =>
        g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        g.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 3)
    : [];

  const navItems = [
    { label: 'Home', view: 'home' },
    { label: 'Smartphones', view: 'category', catId: 'smartphones' },
    { label: 'Compare Matrix', view: 'matrix' },
    { label: 'Headphones', view: 'category', catId: 'headphones' },
    { label: 'Laptops', view: 'category', catId: 'laptops' },
    { label: 'Gaming', view: 'category', catId: 'gaming' },
    { label: 'Smart Home', view: 'category', catId: 'smarthome' },
    { label: 'Buying Guides', view: 'guides' },
    { label: 'Reviews', view: 'reviews' },
    { label: 'About Us', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (filteredProducts.length > 0) {
        onSelectProduct(filteredProducts[0]);
        setSearchDropdownOpen(false);
      } else if (filteredGuides.length > 0) {
        onSelectGuide(filteredGuides[0]);
        setSearchDropdownOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F0E] border-b border-[#28332D]/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Tagline */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-left focus:outline-none group transition-transform active:scale-95 cursor-pointer shrink-0"
            aria-label="TechCrystal Home"
          >
            <TechCrystalLogo size="md" showTagline={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                (item.view === 'home' && currentView === 'home') ||
                (item.view === 'category' && currentView === `category-${item.catId}`) ||
                (item.view === currentView);

              return (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.view, item.catId)}
                  className={`relative py-1.5 transition-colors duration-200 whitespace-nowrap text-sm cursor-pointer ${
                    isActive
                      ? 'text-[#39FF14] font-semibold'
                      : 'text-[#FFFFFF] hover:text-[#39FF14]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#39FF14] shadow-[0_0_8px_#39FF14] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Area: Search Bar exactly matching mockup */}
          <div className="flex items-center gap-3">
            <div ref={searchRef} className="relative hidden md:block w-52 lg:w-64">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <div className="relative w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSearchDropdownOpen(true);
                    }}
                    onFocus={() => setSearchDropdownOpen(true)}
                    placeholder="Search gadgets..."
                    className="w-full bg-[#151B19] border border-[#28332D] text-sm text-white placeholder-[#A7B0AC] pl-9.5 pr-11 py-2 rounded-xl focus:outline-none focus:border-[#39FF14] transition-all"
                  />
                  <button
                    type="submit"
                    aria-label="Submit Search"
                    className="absolute right-1 top-1 bottom-1 w-8.5 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Search className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </form>

              {/* Instant Search Dropdown */}
              {searchDropdownOpen && searchQuery.trim() && (
                <div className="absolute right-0 left-0 mt-2 bg-[#151B19] border border-[#28332D] rounded-xl shadow-2xl p-2 z-50 max-h-96 overflow-y-auto">
                  {filteredProducts.length === 0 && filteredGuides.length === 0 ? (
                    <div className="p-4 text-center text-xs text-[#A7B0AC]">
                      No devices or articles found matching "{searchQuery}".
                    </div>
                  ) : (
                    <>
                      {filteredProducts.length > 0 && (
                        <div className="mb-2">
                          <span className="text-[11px] font-semibold text-[#A7B0AC] uppercase px-2 py-1 block">
                            Products &amp; Reviews
                          </span>
                          {filteredProducts.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => {
                                onSelectProduct(p);
                                setSearchDropdownOpen(false);
                              }}
                              className="w-full text-left flex items-center gap-3 p-2 rounded-lg hover:bg-[#28332D]/60 transition-colors group cursor-pointer"
                            >
                              <img
                                src={p.image}
                                alt={p.name}
                                className="w-9 h-9 object-contain rounded bg-[#0B0F0E] border border-[#28332D]"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-white group-hover:text-[#39FF14] truncate">
                                  {p.name}
                                </p>
                                <p className="text-[11px] text-[#A7B0AC] truncate">
                                  {p.categoryLabel} · ⭐ {p.rating}
                                </p>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-[#A7B0AC] group-hover:text-[#39FF14]" />
                            </button>
                          ))}
                        </div>
                      )}

                      {filteredGuides.length > 0 && (
                        <div>
                          <span className="text-[11px] font-semibold text-[#A7B0AC] uppercase px-2 py-1 block">
                            Buying Guides
                          </span>
                          {filteredGuides.map((g) => (
                            <button
                              key={g.id}
                              onClick={() => {
                                onSelectGuide(g);
                                setSearchDropdownOpen(false);
                              }}
                              className="w-full text-left flex items-center justify-between p-2 rounded-lg hover:bg-[#28332D]/60 transition-colors group cursor-pointer"
                            >
                              <div className="flex-1 min-w-0 pr-2">
                                <p className="text-xs font-semibold text-white group-hover:text-[#39FF14] truncate">
                                  {g.title}
                                </p>
                                <p className="text-[11px] text-[#A7B0AC]">
                                  {g.category} · {g.date}
                                </p>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-[#A7B0AC] group-hover:text-[#39FF14]" />
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Auth Buttons / User Profile */}
            <div className="hidden sm:flex items-center gap-2">
              {user ? (
                <button
                  onClick={onOpenProfile}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#151B19] border border-[#28332D] hover:border-[#39FF14]/50 transition-colors cursor-pointer group"
                  title="Open Account Profile"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#0B0F0E] text-[#39FF14] border border-[#39FF14]/30 flex items-center justify-center text-xs font-bold">
                    {(user.displayName?.charAt(0) || user.email?.charAt(0) || 'U').toUpperCase()}
                  </div>
                  <span className="text-xs font-medium text-white group-hover:text-[#39FF14] max-w-[110px] truncate">
                    {user.displayName || user.email?.split('@')[0] || 'Account'}
                  </span>
                </button>
              ) : (
                <>
                  <button
                    onClick={() => onOpenAuth('signin')}
                    className="text-xs font-semibold text-white hover:text-[#39FF14] px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => onOpenAuth('signup')}
                    className="px-3 py-1.5 rounded-xl bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-semibold text-xs transition-all shadow-[0_0_12px_rgba(57,255,20,0.2)] cursor-pointer flex items-center gap-1.5"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="xl:hidden p-2 text-[#A7B0AC] hover:text-white rounded-lg border border-[#28332D] bg-[#151B19] focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0F0E] border-b border-[#28332D] px-4 pt-3 pb-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* Mobile Search Bar */}
          <div className="mb-4">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gadgets..."
                className="w-full bg-[#151B19] border border-[#28332D] text-sm text-white placeholder-[#A7B0AC] pl-9.5 pr-11 py-2.5 rounded-xl focus:outline-none focus:border-[#39FF14]"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-9 bg-[#39FF14] text-[#0B0F0E] rounded-lg flex items-center justify-center cursor-pointer"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          </div>

          {/* Mobile Auth Status Bar */}
          <div className="mb-4 p-3 bg-[#151B19] border border-[#28332D] rounded-xl">
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0B0F0E] text-[#39FF14] border border-[#39FF14]/40 flex items-center justify-center text-xs font-bold shrink-0">
                    {(user.displayName?.charAt(0) || user.email?.charAt(0) || 'U').toUpperCase()}
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-semibold text-white truncate">
                      {user.displayName || user.email}
                    </p>
                    <p className="text-[10px] text-[#39FF14]">Logged In · My Account</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProfile();
                  }}
                  className="px-3 py-1.5 bg-[#0B0F0E] border border-[#28332D] hover:border-[#39FF14] text-xs font-medium text-white rounded-lg cursor-pointer shrink-0"
                >
                  Dashboard
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signin');
                  }}
                  className="flex-1 py-2 rounded-lg border border-[#28332D] text-white hover:text-[#39FF14] text-xs font-semibold hover:bg-[#0B0F0E] transition-colors cursor-pointer text-center"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signup');
                  }}
                  className="flex-1 py-2 rounded-lg bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] text-xs font-semibold shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile Nav Links */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const isActive =
                (item.view === 'home' && currentView === 'home') ||
                (item.view === 'category' && currentView === `category-${item.catId}`) ||
                (item.view === currentView);

              return (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.view, item.catId);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#151B19] text-[#39FF14] border border-[#39FF14]/40 font-semibold'
                      : 'text-[#A7B0AC] hover:text-white hover:bg-[#151B19]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
