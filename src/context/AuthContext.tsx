import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as fbSignOut,
  sendPasswordResetEmail as fbSendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  onSnapshot,
} from 'firebase/firestore';
import { auth, googleProvider, db, syncUserProfile, getAuthErrorMessage } from '../services/firebase.ts';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  favorites: string[];
  signUp: (fullName: string, email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  signIn: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  signInWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  toggleFavorite: (productId: string, name?: string, category?: string) => Promise<void>;
  isFavorite: (productId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Listen for Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        // Sync profile to firestore
        syncUserProfile(currentUser);
      } else {
        setFavorites([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // Listen for user favorites if logged in
  useEffect(() => {
    if (!user) return;

    try {
      const favsRef = collection(db, 'users', user.uid, 'favorites');
      const unsubscribe = onSnapshot(favsRef, (snapshot) => {
        const favIds: string[] = [];
        snapshot.forEach((d) => favIds.push(d.id));
        setFavorites(favIds);
      }, (err) => {
        console.warn('Favorites listener error:', err.message);
      });

      return () => unsubscribe();
    } catch (err) {
      console.warn('Error setting up favorites listener:', err);
    }
  }, [user]);

  // Sign Up with Email, Password & Full Name
  const signUp = async (fullName: string, email: string, pass: string) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), pass);
      if (cred.user) {
        // Set display name in Auth profile
        await updateProfile(cred.user, {
          displayName: fullName.trim(),
        });
        // Create Firestore profile record
        await syncUserProfile(cred.user, fullName.trim());
      }
      return { success: true };
    } catch (err: any) {
      return {
        success: false,
        error: getAuthErrorMessage(err?.code || ''),
      };
    }
  };

  // Sign In with Email & Password
  const signIn = async (email: string, pass: string) => {
    try {
      await signInWithEmailAndPassword(auth, email.trim(), pass);
      return { success: true };
    } catch (err: any) {
      return {
        success: false,
        error: getAuthErrorMessage(err?.code || ''),
      };
    }
  };

  // Sign In with Google
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      if (res.user) {
        await syncUserProfile(res.user);
      }
      return { success: true };
    } catch (err: any) {
      return {
        success: false,
        error: getAuthErrorMessage(err?.code || ''),
      };
    }
  };

  // Password Reset
  const resetPassword = async (email: string) => {
    try {
      await fbSendPasswordResetEmail(auth, email.trim());
      return { success: true };
    } catch (err: any) {
      return {
        success: false,
        error: getAuthErrorMessage(err?.code || ''),
      };
    }
  };

  // Sign Out
  const signOut = async () => {
    try {
      await fbSignOut(auth);
      setFavorites([]);
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  // Toggle favorite / wishlist
  const toggleFavorite = async (productId: string, name?: string, category?: string) => {
    if (!user) return;
    try {
      const favDocRef = doc(db, 'users', user.uid, 'favorites', productId);
      if (favorites.includes(productId)) {
        await deleteDoc(favDocRef);
      } else {
        await setDoc(favDocRef, {
          productId,
          name: name || productId,
          category: category || 'Gadgets',
          savedAt: new Date().toISOString(),
        });
      }
    } catch (err) {
      console.error('Failed to toggle favorite:', err);
    }
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        favorites,
        signUp,
        signIn,
        signOut,
        resetPassword,
        signInWithGoogle,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
