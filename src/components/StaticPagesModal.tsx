import { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Send } from 'lucide-react';

interface StaticPagesModalProps {
  type: 'about' | 'contact' | 'disclosure' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function StaticPagesModal({ type, onClose }: StaticPagesModalProps) {
  if (!type) return null;

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('Product Review Inquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && contactEmail && contactMessage) {
      setContactSent(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#151B19] border border-[#28332D] rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#28332D] bg-[#0B0F0E]/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
            <h3 className="text-base sm:text-lg font-bold text-white capitalize">
              {type === 'about' && 'About TechCrystal'}
              {type === 'contact' && 'Contact Editorial & Testing Team'}
              {type === 'disclosure' && 'Independent Affiliate Disclosure'}
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms and Conditions'}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-[#A7B0AC] hover:text-white hover:bg-[#28332D] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm text-[#A7B0AC] leading-relaxed">
          
          {/* ABOUT US */}
          {type === 'about' && (
            <div className="space-y-5">
              <div className="p-5 bg-[#0B0F0E] border border-[#28332D] rounded-2xl space-y-2">
                <h4 className="text-lg font-bold text-white">Smart Tech. Better Life.</h4>
                <p>
                  TechCrystal is an independent technology review and consumer hardware publication founded to deliver uncompromised, objective testing for modern gadgets, flagship smartphones, noise-canceling audio, gaming equipment, and smart home automation.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-white">Our 4-Pillar Testing Protocol</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#0B0F0E] rounded-xl border border-[#28332D]">
                    <span className="font-bold text-[#39FF14] block mb-1">1. Hands-On Benchmarking</span>
                    <span>Every device undergoes real-world battery drain tests, audio frequency response analysis, and sustained thermal stress testing.</span>
                  </div>
                  <div className="p-3 bg-[#0B0F0E] rounded-xl border border-[#28332D]">
                    <span className="font-bold text-[#39FF14] block mb-1">2. Zero Paid Reviews</span>
                    <span>We do not accept paid placement or sponsor-dictated scores. Brands cannot pay for higher rankings in our roundups.</span>
                  </div>
                  <div className="p-3 bg-[#0B0F0E] rounded-xl border border-[#28332D]">
                    <span className="font-bold text-[#39FF14] block mb-1">3. Balanced Advantages &amp; Flaws</span>
                    <span>No gadget is perfect. We prominently list genuine disadvantages alongside advantages on every product card.</span>
                  </div>
                  <div className="p-3 bg-[#0B0F0E] rounded-xl border border-[#28332D]">
                    <span className="font-bold text-[#39FF14] block mb-1">4. Long-Term Reliability</span>
                    <span>We revisit hardware 6 months after release to evaluate software update health and physical wear and tear.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CONTACT US */}
          {type === 'contact' && (
            <div className="space-y-5">
              <p>
                Have a device you'd like us to benchmark or a question regarding one of our buying guides? Send a direct transmission to our laboratory editors.
              </p>

              {contactSent ? (
                <div className="p-6 bg-[#0B0F0E] border border-[#39FF14]/50 rounded-2xl text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-[#39FF14] mx-auto" />
                  <h4 className="text-lg font-bold text-white">Transmission Sent!</h4>
                  <p className="text-xs text-[#A7B0AC]">
                    Thank you for reaching out, {contactName}. A TechCrystal technical editor will respond to {contactEmail} within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full bg-[#0B0F0E] border border-[#28332D] text-sm text-white px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#39FF14]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full bg-[#0B0F0E] border border-[#28332D] text-sm text-white px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#39FF14]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1">Inquiry Type</label>
                    <select
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="w-full bg-[#0B0F0E] border border-[#28332D] text-sm text-white px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#39FF14]"
                    >
                      <option value="Product Review Inquiry">Product Review Inquiry</option>
                      <option value="Buying Guide Correction">Buying Guide / Spec Correction</option>
                      <option value="Affiliate Disclosure Feedback">Affiliate Disclosure Feedback</option>
                      <option value="Hardware Testing Question">Hardware Testing Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Describe your question or device request..."
                      className="w-full bg-[#0B0F0E] border border-[#28332D] text-sm text-white px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#39FF14]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-bold text-sm rounded-xl transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* AFFILIATE DISCLOSURE */}
          {type === 'disclosure' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#0B0F0E] border border-[#39FF14]/40 rounded-2xl flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#39FF14] shrink-0" />
                <p className="text-white text-xs sm:text-sm font-medium">
                  TechCrystal operates as an independent review publication. We support our ongoing hardware laboratory testing through independent affiliate partnerships and direct referral agreements.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-white">How Our Affiliate Links Work</h4>
                <p>
                  When you click on buttons marked <strong>"View Deal"</strong> or labeled with <strong>(affiliate link)</strong>, you may be redirected to an official brand or merchant store through our partner referral tracking. If you complete a qualifying purchase, TechCrystal may earn a referral commission.
                </p>
                <p className="text-white font-medium">
                  This comes at <strong>zero additional cost to you</strong>. Retail and promotional pricing remains completely identical whether you click through our site or go directly to the store.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-base font-bold text-white">Editorial Independence &amp; Integrity</h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-[#A7B0AC]">
                  <li>All affiliate links are clearly marked with "(affiliate link)" adjacent to purchase actions.</li>
                  <li>Our scores, pros, and cons reflect objective benchmark testing and are never altered for referral compensation.</li>
                  <li>Site visitors can customize or inspect active affiliate referral letters anytime using the Affiliate Letter tool.</li>
                </ul>
              </div>
            </div>
          )}

          {/* PRIVACY POLICY */}
          {type === 'privacy' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">Privacy Policy</h4>
              <p>
                TechCrystal values your digital privacy. We do not sell, rent, or trade your personal information with third parties.
              </p>
              <h5 className="font-semibold text-white">Information We Collect</h5>
              <p>
                When you subscribe to the TechCrystal Dispatch newsletter or submit an inquiry via our contact form, we collect your email address solely to deliver requested tech digests and support replies.
              </p>
              <h5 className="font-semibold text-white">Referral Tracking Cookies</h5>
              <p>
                Clicking external store links may set an affiliate referral cookie governed by the respective merchant's privacy policy. You can manage cookies in your browser preferences at any time.
              </p>
            </div>
          )}

          {/* TERMS AND CONDITIONS */}
          {type === 'terms' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">Terms and Conditions</h4>
              <p>
                By accessing TechCrystal, you agree to these terms of service. All content, gadget photography, comparison analyses, and benchmark figures published on TechCrystal are the intellectual property of TechCrystal.
              </p>
              <p>
                While we strive for absolute accuracy in hardware specifications and compatibility data, manufacturers may alter specifications or firmware without notice. Always verify final hardware configurations on the merchant site prior to purchase.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
