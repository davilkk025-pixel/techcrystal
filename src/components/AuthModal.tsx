import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  Mail,
  User as UserIcon,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext.tsx';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'signin' | 'signup' | 'forgot';
  onClose: () => void;
  onSuccess?: () => void;
}

export function AuthModal({
  isOpen,
  initialMode = 'signin',
  onClose,
  onSuccess,
}: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { signIn, signUp, resetPassword, signInWithGoogle } = useAuth();

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setErrorMessage(null);
      setSuccessMessage(null);
    }
  }, [isOpen, initialMode]);

  // Reset errors when switching mode
  const switchMode = (newMode: 'signin' | 'signup' | 'forgot') => {
    setMode(newMode);
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  if (!isOpen) return null;

  // Password validation criteria
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  const strengthScore = [hasMinLength, hasUppercase, hasNumber, hasSpecial].filter(Boolean).length;
  const isPasswordStrong = strengthScore >= 3 && hasMinLength;

  // Email format validator
  const isValidEmail = (str: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str.trim());
  };

  const handleSignInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    setLoading(true);
    const res = await signIn(email, password);
    setLoading(false);

    if (res.success) {
      onSuccess?.();
      onClose();
    } else {
      setErrorMessage(res.error || 'Failed to sign in. Please verify your credentials.');
    }
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!isPasswordStrong) {
      setErrorMessage('Password must be at least 8 characters and include uppercase, number, or special characters.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify both fields.');
      return;
    }

    setLoading(true);
    const res = await signUp(fullName, email, password);
    setLoading(false);

    if (res.success) {
      onSuccess?.();
      onClose();
    } else {
      setErrorMessage(res.error || 'Failed to create account.');
    }
  };

  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter your registered email address.');
      return;
    }

    setLoading(true);
    const res = await resetPassword(email);
    setLoading(false);

    if (res.success) {
      setSuccessMessage('Password reset link sent! Check your inbox to set a new password.');
    } else {
      setErrorMessage(res.error || 'Unable to send password reset email. Please ensure the email is correct.');
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);
    const res = await signInWithGoogle();
    setLoading(false);

    if (res.success) {
      onSuccess?.();
      onClose();
    } else {
      // Friendly handling if Google provider isn't enabled in console yet
      if (res.error?.includes('not enabled') || res.error?.includes('operation-not-allowed')) {
        setErrorMessage('Google Sign-In is not enabled yet in your Firebase Authentication console. You can use Email & Password registration.');
      } else {
        setErrorMessage(res.error || 'Google sign-in was canceled or could not be completed.');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#0B0F0E] border border-[#28332D] rounded-2xl shadow-[0_0_50px_rgba(57,255,20,0.08)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#39FF14] to-transparent opacity-80" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close auth dialog"
          className="absolute top-4 right-4 text-[#A7B0AC] hover:text-white p-1 rounded-lg hover:bg-[#151B19] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          
          {/* Header Branding */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#151B19] border border-[#28332D] mb-3 text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.15)]">
              {mode === 'forgot' ? (
                <ShieldCheck className="w-6 h-6" />
              ) : (
                <Sparkles className="w-6 h-6" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {mode === 'signin' && 'Welcome Back'}
              {mode === 'signup' && 'Create Your Account'}
              {mode === 'forgot' && 'Reset Password'}
            </h2>
            <p className="text-xs text-[#A7B0AC] mt-1">
              {mode === 'signin' && 'Sign in to access your saved gadgets, reviews & alerts'}
              {mode === 'signup' && 'Join TechCrystal for verified tech specs & saved gear'}
              {mode === 'forgot' && 'Enter your email to receive recovery instructions'}
            </p>
          </div>

          {/* Mode Switch Tabs (Sign In / Sign Up) */}
          {mode !== 'forgot' && (
            <div className="flex bg-[#151B19] p-1 rounded-xl border border-[#28332D] mb-6">
              <button
                type="button"
                onClick={() => switchMode('signin')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  mode === 'signin'
                    ? 'bg-[#0B0F0E] text-[#39FF14] border border-[#39FF14]/30 shadow-sm'
                    : 'text-[#A7B0AC] hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => switchMode('signup')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  mode === 'signup'
                    ? 'bg-[#0B0F0E] text-[#39FF14] border border-[#39FF14]/30 shadow-sm'
                    : 'text-[#A7B0AC] hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Feedback Alerts */}
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-950/40 border border-red-500/50 rounded-xl flex items-start gap-2.5 text-xs text-red-200">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-emerald-950/40 border border-[#39FF14]/50 rounded-xl flex items-start gap-2.5 text-xs text-emerald-200">
              <Check className="w-4 h-4 text-[#39FF14] shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* FORM: SIGN IN */}
          {mode === 'signin' && (
            <form onSubmit={handleSignInSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#A7B0AC] mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#151B19] border border-[#28332D] text-sm text-white placeholder-[#526058] pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-[#39FF14] transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-medium text-[#A7B0AC]">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => switchMode('forgot')}
                    className="text-xs text-[#39FF14] hover:underline cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#151B19] border border-[#28332D] text-sm text-white placeholder-[#526058] pl-10 pr-10 py-2.5 rounded-xl focus:outline-none focus:border-[#39FF14] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7B0AC] hover:text-white cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-semibold text-sm rounded-xl transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-[#0B0F0E] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* FORM: SIGN UP */}
          {mode === 'signup' && (
            <form onSubmit={handleSignUpSubmit} className="space-y-3.5">
              {/* 1. Full Name */}
              <div>
                <label className="block text-xs font-medium text-[#A7B0AC] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alex Vance"
                    className="w-full bg-[#151B19] border border-[#28332D] text-sm text-white placeholder-[#526058] pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:border-[#39FF14] transition-all"
                  />
                </div>
              </div>

              {/* 2. Email Address */}
              <div>
                <label className="block text-xs font-medium text-[#A7B0AC] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@techcrystal.com"
                    className="w-full bg-[#151B19] border border-[#28332D] text-sm text-white placeholder-[#526058] pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:border-[#39FF14] transition-all"
                  />
                </div>
              </div>

              {/* 3. Password */}
              <div>
                <label className="block text-xs font-medium text-[#A7B0AC] mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className="w-full bg-[#151B19] border border-[#28332D] text-sm text-white placeholder-[#526058] pl-10 pr-10 py-2 rounded-xl focus:outline-none focus:border-[#39FF14] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7B0AC] hover:text-white cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {password && (
                  <div className="mt-2 space-y-1.5">
                    <div className="flex gap-1 h-1.5 w-full">
                      <div
                        className={`flex-1 rounded-full transition-all ${
                          strengthScore >= 1 ? 'bg-red-500' : 'bg-[#28332D]'
                        }`}
                      />
                      <div
                        className={`flex-1 rounded-full transition-all ${
                          strengthScore >= 2 ? 'bg-amber-400' : 'bg-[#28332D]'
                        }`}
                      />
                      <div
                        className={`flex-1 rounded-full transition-all ${
                          strengthScore >= 3 ? 'bg-[#39FF14]' : 'bg-[#28332D]'
                        }`}
                      />
                      <div
                        className={`flex-1 rounded-full transition-all ${
                          strengthScore === 4 ? 'bg-[#39FF14] shadow-[0_0_6px_#39FF14]' : 'bg-[#28332D]'
                        }`}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#A7B0AC]">
                      <span>
                        Strength:{' '}
                        <strong
                          className={
                            strengthScore < 2
                              ? 'text-red-400 font-medium'
                              : strengthScore === 2 || strengthScore === 3
                              ? 'text-amber-400 font-medium'
                              : 'text-[#39FF14] font-medium'
                          }
                        >
                          {strengthScore < 2 ? 'Weak' : strengthScore === 3 ? 'Good' : 'Strong'}
                        </strong>
                      </span>
                      <span>8+ chars, upper &amp; numbers</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Confirm Password */}
              <div>
                <label className="block text-xs font-medium text-[#A7B0AC] mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    className={`w-full bg-[#151B19] border text-sm text-white placeholder-[#526058] pl-10 pr-10 py-2 rounded-xl focus:outline-none transition-all ${
                      confirmPassword && !passwordsMatch
                        ? 'border-red-500/70 focus:border-red-400'
                        : confirmPassword && passwordsMatch
                        ? 'border-[#39FF14]/70 focus:border-[#39FF14]'
                        : 'border-[#28332D] focus:border-[#39FF14]'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7B0AC] hover:text-white cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {confirmPassword && !passwordsMatch && (
                  <p className="text-[11px] text-red-400 mt-1">Passwords do not match.</p>
                )}
                {confirmPassword && passwordsMatch && (
                  <p className="text-[11px] text-[#39FF14] mt-1 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Passwords match
                  </p>
                )}
              </div>

              {/* 5. Create Account Button */}
              <button
                type="submit"
                disabled={loading || (confirmPassword ? !passwordsMatch : false)}
                className="w-full mt-2 py-2.5 px-4 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-semibold text-sm rounded-xl transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-[#0B0F0E] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* FORM: FORGOT PASSWORD */}
          {mode === 'forgot' && (
            <form onSubmit={handleForgotSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#A7B0AC] mb-1.5">
                  Registered Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0AC]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#151B19] border border-[#28332D] text-sm text-white placeholder-[#526058] pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-[#39FF14] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-[#39FF14] hover:bg-[#32e012] text-[#0B0F0E] font-semibold text-sm rounded-xl transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-[#0B0F0E] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>Send Reset Email</>
                )}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => switchMode('signin')}
                  className="text-xs text-[#A7B0AC] hover:text-white transition-colors cursor-pointer"
                >
                  ← Return to Sign In
                </button>
              </div>
            </form>
          )}

          {/* Social Divider & Google Auth Option (Requirement 6) */}
          {mode !== 'forgot' && (
            <>
              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#28332D]" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-[#0B0F0E] px-3 text-[#A7B0AC]">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full py-2.5 px-4 bg-[#151B19] hover:bg-[#28332D]/60 border border-[#28332D] hover:border-[#39FF14]/40 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                {/* Google "G" icon SVG */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span className="group-hover:text-[#39FF14] transition-colors">
                  Continue with Google
                </span>
              </button>
            </>
          )}

          {/* Terms Footer */}
          <p className="mt-5 text-[11px] text-center text-[#526058]">
            By continuing, you agree to TechCrystal's Terms of Service and Privacy Policy.
          </p>

        </div>
      </div>
    </div>
  );
}
