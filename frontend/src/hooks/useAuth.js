import { useContext } from "react";
import { AuthContext } from "@/context/authInstance";

/**
 * Custom hook to access global authentication state (`user`, `isAuthenticated`, `login`, `logout`).
 * Must be called inside `<AuthProvider>`.
 */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
