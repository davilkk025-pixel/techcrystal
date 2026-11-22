/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { PopularCategories } from './components/PopularCategories.tsx';
import { FeaturedGadgets } from './components/FeaturedGadgets.tsx';
import { BuyingGuidesSection } from './components/BuyingGuidesSection.tsx';
import { ProductComparisonsSection } from './components/ProductComparisonsSection.tsx';
import { NewsletterCard } from './components/NewsletterCard.tsx';
import { Footer } from './components/Footer.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { ComparisonModal } from './components/ComparisonModal.tsx';
import { ArticleReaderModal } from './components/ArticleReaderModal.tsx';
import { AffiliateSettingsModal } from './components/AffiliateSettingsModal.tsx';
import { StaticPagesModal } from './components/StaticPagesModal.tsx';
import { CategoryView } from './components/CategoryView.tsx';
import { ProductCard } from './components/ProductCard.tsx';
import { AuthModal } from './components/AuthModal.tsx';
import { UserProfileModal } from './components/UserProfileModal.tsx';
import { SmartphonesComparisonMatrix } from './components/SmartphonesComparisonMatrix.tsx';
import { AuthProvider, useAuth } from './context/AuthContext.tsx';

import { Product, BuyingGuide, Comparison } from './types.ts';
import { PRODUCTS, BUYING_GUIDES, COMPARISONS } from './data/mockData.ts';
import { getStoredAffiliateLetter } from './utils/affiliate.ts';
import { ArrowLeft, BookOpen, SlidersHorizontal, ShieldCheck } from 'lucide-react';

function TechCrystalApp() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('smartphones');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeGuide, setActiveGuide] = useState<BuyingGuide | null>(null);
  const [activeComparison, setActiveComparison] = useState<Comparison | null>(null);
  const [staticModalType, setStaticModalType] = useState<'about' | 'contact' | 'disclosure' | 'privacy' | 'terms' | null>(null);
  const [affiliateSettingsOpen, setAffiliateSettingsOpen] = useState(false);
  const [customLetter, setCustomLetter] = useState(getStoredAffiliateLetter());

  // Auth modal states
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup' | 'forgot'>('signin');
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // Reviews page filter state
  const [reviewCategoryFilter, setReviewCategoryFilter] = useState<string>('all');
  const [reviewSort, setReviewSort] = useState<'rating' | 'reviews'>('rating');

  const openAuth = (mode: 'signin' | 'signup' | 'forgot' = 'signin') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const openProfile = () => {
    setProfileModalOpen(true);
  };

  // Scroll to top on navigation
  const handleNavigate = (view: string, catId?: string) => {
    if (view === 'about' || view === 'contact') {
      setStaticModalType(view as any);
      return;
    }
    if (view === 'category' && catId) {
      setSelectedCategoryId(catId);
      setCurrentView(`category-${catId}`);
    } else {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategoryId(catId);
    setCurrentView(`category-${catId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0F0E] text-white flex flex-col font-sans">
      
      {/* Top Sticky Navigation Bar */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onSelectProduct={setActiveProduct}
        onSelectGuide={setActiveGuide}
        onSelectComparison={setActiveComparison}
        onOpenAffiliateSettings={() => setAffiliateSettingsOpen(true)}
        onOpenAuth={openAuth}
        onOpenProfile={openProfile}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* VIEW: HOME (Mockup match) */}
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onExploreGadgets={() => {
                const el = document.getElementById('featured-gadgets-anchor');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onLatestReviews={() => handleNavigate('reviews')}
            />

            {/* Popular Categories */}
            <PopularCategories
              onSelectCategory={handleSelectCategory}
              onViewAllCategories={() => handleNavigate('category', 'smartphones')}
            />

            {/* Featured Gadgets */}
            <div id="featured-gadgets-anchor">
              <FeaturedGadgets
                onSelectProduct={setActiveProduct}
                onViewAllFeatured={() => handleNavigate('reviews')}
                onShopGaming={() => handleSelectCategory('gaming')}
                customLetter={customLetter}
              />
            </div>

            {/* Lower Grid: Buying Guides & Product Comparisons (Left) + Newsletter (Right) */}
            <section className="py-10">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column (8 cols): Buying Guides + Product Comparisons */}
                  <div className="lg:col-span-8 space-y-8">
                    <BuyingGuidesSection
                      onSelectGuide={setActiveGuide}
                      onViewAllGuides={() => handleNavigate('guides')}
                    />

                    <ProductComparisonsSection
                      onSelectComparison={setActiveComparison}
                      onViewAllComparisons={() => {
                        setActiveComparison(COMPARISONS[0]);
                      }}
                      onOpenMatrix={() => handleNavigate('matrix')}
                    />
                  </div>

                  {/* Right Column (4 cols): Newsletter Card */}
                  <div className="lg:col-span-4 sticky top-28">
                    <NewsletterCard />
                  </div>

                </div>
              </div>
            </section>
          </>
        )}

        {/* VIEW: CATEGORY (e.g. Smartphones, Headphones, Laptops, etc.) */}
        {currentView.startsWith('category-') && (
          <CategoryView
            categoryId={selectedCategoryId}
            products={PRODUCTS}
            onSelectProduct={setActiveProduct}
            onBackToHome={handleBackToHome}
            onSelectCategory={handleSelectCategory}
            customLetter={customLetter}
            onOpenAuth={openAuth}
            onOpenMatrix={() => handleNavigate('matrix')}
          />
        )}

        {/* VIEW: SMARTPHONES COMPARISON MATRIX */}
        {(currentView === 'matrix' || currentView === 'smartphones-matrix') && (
          <SmartphonesComparisonMatrix
            onSelectProduct={setActiveProduct}
            onBack={() => handleNavigate('category', 'smartphones')}
            customLetter={customLetter}
          />
        )}

        {/* VIEW: BUYING GUIDES FULL PAGE */}
        {currentView === 'guides' && (
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={handleBackToHome}
                className="p-2 rounded-xl bg-[#151B19] border border-[#28332D] hover:border-[#39FF14] text-[#A7B0AC] hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
                  <BookOpen className="w-7 h-7 text-[#39FF14]" />
                  Technology Buying Guides
                </h1>
                <p className="text-sm text-[#A7B0AC] mt-1">
                  In-depth expert buyer walkthroughs, real-world benchmarks, and decision frameworks.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BUYING_GUIDES.map((guide) => (
                <div
                  key={guide.id}
                  onClick={() => setActiveGuide(guide)}
                  className="bg-[#151B19] border border-[#28332D] hover:border-[#39FF14]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.12)] cursor-pointer group flex flex-col justify-between"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151B19] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-[#0B0F0E]/80 backdrop-blur-md border border-[#28332D] text-[#39FF14] text-xs font-semibold px-2.5 py-1 rounded-lg">
                      {guide.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#A7B0AC] mb-2">
                        <span>{guide.date}</span>
                        <span>{guide.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#39FF14] transition-colors leading-snug mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-[#A7B0AC] line-clamp-3 leading-relaxed">
                        {guide.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#28332D] flex items-center justify-between text-xs font-semibold text-[#39FF14]">
                      <span>Read Full Guide</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: REVIEWS FULL CATALOG */}
        {currentView === 'reviews' && (
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleBackToHome}
                  className="p-2 rounded-xl bg-[#151B19] border border-[#28332D] hover:border-[#39FF14] text-[#A7B0AC] hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-3xl font-extrabold text-white">
                    Verified Product Reviews
                  </h1>
                  <p className="text-sm text-[#A7B0AC] mt-1">
                    Hands-on lab tests, verified specifications, and pros &amp; cons.
                  </p>
                </div>
              </div>

              {/* Filtering & Sorting Controls */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 bg-[#151B19] border border-[#28332D] rounded-xl px-3 py-1.5 text-xs text-[#A7B0AC]">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#39FF14]" />
                  <select
                    value={reviewCategoryFilter}
                    onChange={(e) => setReviewCategoryFilter(e.target.value)}
                    className="bg-transparent text-white focus:outline-none cursor-pointer"
                  >
                    <option value="all" className="bg-[#151B19] text-white">All Categories</option>
                    <option value="smartphones" className="bg-[#151B19] text-white">Smartphones</option>
                    <option value="headphones" className="bg-[#151B19] text-white">Headphones</option>
                    <option value="laptops" className="bg-[#151B19] text-white">Laptops</option>
                    <option value="gaming" className="bg-[#151B19] text-white">Gaming Accessories</option>
                    <option value="smarthome" className="bg-[#151B19] text-white">Smart Home</option>
                    <option value="smartwatches" className="bg-[#151B19] text-white">Smartwatches</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 bg-[#151B19] border border-[#28332D] rounded-xl px-3 py-1.5 text-xs text-[#A7B0AC]">
                  <span className="text-[#A7B0AC]">Sort by:</span>
                  <select
                    value={reviewSort}
                    onChange={(e) => setReviewSort(e.target.value as any)}
                    className="bg-transparent text-white focus:outline-none cursor-pointer font-medium"
                  >
                    <option value="rating" className="bg-[#151B19] text-white">Top Rated</option>
                    <option value="reviews" className="bg-[#151B19] text-white">Most Reviewed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS
                .filter(p => reviewCategoryFilter === 'all' || p.category === reviewCategoryFilter)
                .sort((a, b) => {
                  if (reviewSort === 'rating') return b.rating - a.rating;
                  return b.reviewCount - a.reviewCount;
                })
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={setActiveProduct}
                    customLetter={customLetter}
                    onOpenAuth={openAuth}
                  />
                ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setStaticModalType('privacy')}
        onOpenDisclosure={() => setStaticModalType('disclosure')}
        onOpenTerms={() => setStaticModalType('terms')}
        onOpenAffiliateSettings={() => setAffiliateSettingsOpen(true)}
      />

      {/* MODALS */}
      {/* 1. Product Detail & Review Modal */}
      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        customLetter={customLetter}
      />

      {/* 2. Product Comparison Modal */}
      <ComparisonModal
        comparison={activeComparison}
        onClose={() => setActiveComparison(null)}
        customLetter={customLetter}
      />

      {/* 3. Article Reader Modal for Buying Guides */}
      <ArticleReaderModal
        guide={activeGuide}
        onClose={() => setActiveGuide(null)}
        onSelectProduct={setActiveProduct}
        customLetter={customLetter}
      />

      {/* 4. Affiliate Settings Modal */}
      <AffiliateSettingsModal
        isOpen={affiliateSettingsOpen}
        onClose={() => setAffiliateSettingsOpen(false)}
        onLetterUpdated={(newLetter) => setCustomLetter(newLetter)}
      />

      {/* 5. Static Pages Modal (About, Contact, Disclosure, Privacy, Terms) */}
      <StaticPagesModal
        type={staticModalType}
        onClose={() => setStaticModalType(null)}
      />

      {/* 6. Firebase Authentication Modal (Sign In, Sign Up, Forgot Password) */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authModalMode}
        onClose={() => setAuthModalOpen(false)}
      />

      {/* 7. User Profile & Account Dashboard Modal */}
      <UserProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        onSelectProduct={setActiveProduct}
        onOpenAuth={openAuth}
      />

    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <TechCrystalApp />
    </AuthProvider>
  );
}
