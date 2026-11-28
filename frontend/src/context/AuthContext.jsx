import React, { useState, useCallback } from "react";
import { AuthContext } from "./authInstance";
import { AUTH_USER_KEY, HAS_ACCOUNT_KEY, clearAuthStorage } from "@/api/auth/utils";

/**
 * Provides global authentication state (`user`, `isAuthenticated`, `hasAccount`, `login`, `logout`)
 * backed by localStorage so sessions persist across page reloads.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem(AUTH_USER_KEY);
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [hasAccount, setHasAccount] = useState(() => {
    try {
      return localStorage.getItem(HAS_ACCOUNT_KEY) === "true";
    } catch {
      return false;
    }
  });

  /**
   * Saves the authenticated user profile to React state and localStorage,
   * and marks that this browser has previously registered/signed in.
   */
  const login = useCallback((userData) => {
    if (!userData) return;
    setUser(userData);
    setHasAccount(true);
    try {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(userData));
      localStorage.setItem(HAS_ACCOUNT_KEY, "true");
    } catch {
      // Ignore storage errors in restricted browsing modes
    }
  }, []);

  /**
   * Clears active session tokens and user data while retaining `hasAccount`
   * so returning visitors are guided directly to Sign In.
   */
  const logout = useCallback(() => {
    setUser(null);
    clearAuthStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        hasAccount,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
