import { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

export function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#151B19] border border-[#28332D] rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#39FF14]/10 rounded-full blur-2xl pointer-events-none" />

      <div>
        {/* Glowing mail icon in circular badge */}
        <div className="w-12 h-12 rounded-xl bg-[#39FF14]/15 border border-[#39FF14]/40 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(57,255,20,0.25)]">
          <Mail className="w-6 h-6 text-[#39FF14]" />
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight mb-2">
          Stay Updated
        </h3>

        <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed mb-6">
          Get the latest tech reviews, buying guides, and special offers straight to your inbox.
        </p>

        {submitted ? (
          <div className="p-4 bg-[#0B0F0E] border border-[#39FF14]/50 rounded-xl space-y-2 text-center animate-fadeIn">
            <div className="w-8 h-8 rounded-full bg-[#39FF14]/20 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#39FF14]" />
            </div>
            <p className="text-sm font-bold text-white">You're Subscribed!</p>
            <p className="text-xs text-[#A7B0AC]">
              Welcome to TechCrystal Dispatch. Keep an eye out for our weekly gadget reviews.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-[#0B0F0E] border border-[#28332D] text-sm text-white placeholder-[#A7B0AC] px-4 py-3 rounded-xl focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-all"
              />
            </div>

            {error && (
              <p className="text-xs text-[#FF5555] font-medium">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-bold text-sm rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-[#28332D]/70 flex items-center gap-2 text-[11px] text-[#A7B0AC]">
        <ShieldCheck className="w-3.5 h-3.5 text-[#39FF14]" />
        <span>We respect your privacy. No spam, ever.</span>
      </div>
    </div>
  );
}
