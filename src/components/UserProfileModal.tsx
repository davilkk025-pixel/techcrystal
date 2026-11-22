import React, { useState } from 'react';
import {
  X,
  User as UserIcon,
  Mail,
  Calendar,
  LogOut,
  Shield,
  Bookmark,
  ExternalLink,
  Trash2,
  CheckCircle2,
  AlertCircle,
  KeyRound,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext.tsx';
import { PRODUCTS } from '../data/mockData.ts';
import { Product } from '../types.ts';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
}

export function UserProfileModal({
  isOpen,
  onClose,
  onSelectProduct,
  onOpenAuth,
}: UserProfileModalProps) {
  const { user, signOut, favorites, toggleFavorite, resetPassword } = useAuth();
  const [resetSent, setResetSent] = useState(false);
  const [resetError, setResetError] = useState<string | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  if (!isOpen) return null;

  // Filter products that the user has saved
  const savedProducts = PRODUCTS.filter((p) => favorites.includes(p.id));

  // Format creation time
  const joinedDate = user?.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Recent Member';

  const handlePasswordReset = async () => {
    if (!user?.email) return;
    setIsResetting(true);
    setResetError(null);
    setResetSent(false);

    const res = await resetPassword(user.email);
    setIsResetting(false);
    if (res.success) {
      setResetSent(true);
    } else {
      setResetError(res.error || 'Failed to send reset link.');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0B0F0E] border border-[#28332D] rounded-2xl shadow-[0_0_50px_rgba(57,255,20,0.08)] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Glow Strip */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#39FF14] to-transparent opacity-80 shrink-0" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#28332D] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#151B19] border border-[#28332D] flex items-center justify-center text-[#39FF14]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Account Dashboard</h2>
              <p className="text-xs text-[#A7B0AC]">Manage your TechCrystal profile &amp; saved gear</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close user profile"
            className="text-[#A7B0AC] hover:text-white p-1 rounded-lg hover:bg-[#151B19] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!user ? (
            /* Protected fallback if called without session */
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#151B19] border border-[#28332D] flex items-center justify-center mx-auto text-[#A7B0AC]">
                <UserIcon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">Sign In Required</h3>
              <p className="text-xs text-[#A7B0AC] max-w-sm mx-auto">
                Please sign in to access your personal TechCrystal dashboard, track saved gadgets, and manage credentials.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenAuth('signin');
                  }}
                  className="px-5 py-2.5 rounded-xl border border-[#28332D] hover:border-[#39FF14] text-white text-xs font-semibold hover:bg-[#151B19] transition-all cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenAuth('signup');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] text-xs font-semibold shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all cursor-pointer"
                >
                  Create Account
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* User Overview Card */}
              <div className="p-5 bg-[#151B19] border border-[#28332D] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#0B0F0E] border-2 border-[#39FF14]/70 flex items-center justify-center text-lg font-bold text-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.25)]">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || 'User'}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      (user.displayName?.charAt(0) || user.email?.charAt(0) || 'U').toUpperCase()
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white">
                        {user.displayName || 'Tech Crystal Explorer'}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-[#39FF14]/15 border border-[#39FF14]/40 text-[10px] font-semibold text-[#39FF14]">
                        Verified
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#A7B0AC] mt-1">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#39FF14]" />
                        {user.email}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#A7B0AC]" />
                        Joined {joinedDate}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 rounded-xl bg-[#0B0F0E] border border-red-500/40 hover:border-red-500 text-red-300 hover:text-red-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign Out
                </button>
              </div>

              {/* Password & Security Section */}
              <div className="p-5 bg-[#151B19] border border-[#28332D] rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <KeyRound className="w-4 h-4 text-[#39FF14]" />
                      Account Security &amp; Password
                    </h4>
                    <p className="text-xs text-[#A7B0AC] mt-0.5">
                      Send a secure password reset link to your registered email address.
                    </p>
                  </div>
                  <button
                    onClick={handlePasswordReset}
                    disabled={isResetting}
                    className="px-3.5 py-2 bg-[#0B0F0E] border border-[#28332D] hover:border-[#39FF14] text-xs font-medium text-white hover:text-[#39FF14] rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isResetting ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>

                {resetSent && (
                  <div className="p-3 bg-emerald-950/40 border border-[#39FF14]/50 rounded-lg flex items-center gap-2 text-xs text-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-[#39FF14] shrink-0" />
                    Reset instructions have been dispatched to {user.email}.
                  </div>
                )}

                {resetError && (
                  <div className="p-3 bg-red-950/40 border border-red-500/50 rounded-lg flex items-center gap-2 text-xs text-red-200">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    {resetError}
                  </div>
                )}
              </div>

              {/* Saved Gadgets / Wishlist */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#39FF14]" />
                    Saved Gadgets ({savedProducts.length})
                  </h4>
                  <span className="text-xs text-[#A7B0AC]">
                    Stored securely in your cloud profile
                  </span>
                </div>

                {savedProducts.length === 0 ? (
                  <div className="p-8 text-center bg-[#151B19] border border-[#28332D] rounded-xl text-xs text-[#A7B0AC] space-y-2">
                    <Bookmark className="w-8 h-8 mx-auto text-[#28332D]" />
                    <p className="font-medium text-white">No saved gadgets yet</p>
                    <p>Click the bookmark icon on any product or review card to save it here.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
                    {savedProducts.map((p) => (
                      <div
                        key={p.id}
                        className="p-3 bg-[#151B19] border border-[#28332D] hover:border-[#39FF14]/50 rounded-xl flex items-center gap-3 transition-colors group"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-12 h-12 object-contain bg-[#0B0F0E] border border-[#28332D] rounded-lg p-1 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="text-xs font-semibold text-white truncate group-hover:text-[#39FF14] transition-colors">
                            {p.name}
                          </h5>
                          <p className="text-[11px] text-[#A7B0AC] truncate">
                            {p.categoryLabel} · ⭐ {p.rating}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => {
                              onSelectProduct(p);
                              onClose();
                            }}
                            title="View Gadget"
                            className="p-1.5 rounded-lg bg-[#0B0F0E] border border-[#28332D] text-[#A7B0AC] hover:text-[#39FF14] hover:border-[#39FF14] transition-colors cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => toggleFavorite(p.id)}
                            title="Remove from saved"
                            className="p-1.5 rounded-lg bg-[#0B0F0E] border border-[#28332D] text-[#A7B0AC] hover:text-red-400 hover:border-red-400 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#28332D] bg-[#151B19]/50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#151B19] border border-[#28332D] hover:border-[#39FF14] text-xs font-medium text-white rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
