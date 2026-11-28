import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { AuthLayout } from "./features/auth/AuthLayout";
import { SignInForm } from "./features/auth/SignInForm";
import { SignUpForm } from "./features/auth/SignUpForm";
import { HomePage } from "./pages/Home/HomePage";
import Footer from "./component/Footer";
import MobileBottomNav from "./component/MobileBottomNav";
import Navbar from "./component/Navbar";
import ExploreLibrary from "./pages/exploreBooks/ExploreLibrary.jsx";
import Authors from "./pages/author/Authors.jsx";
import Favorites from "./pages/favorite/Favorites.jsx";
import BookDetail from "./pages/bookDetail/BookDetail.jsx";

// Authentication routes where the global header, mobile bottom bar, and footer stay hidden
const AUTH_ROUTES = ["/signin", "/login", "/signup", "/register"];

/**
 * Route guard for authenticated pages.
 * Unauthenticated visitors are sent to `/signin` if they previously accessed the site,
 * or `/signup` on a first-time visit before entering HomePage.
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated, hasAccount } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to={hasAccount ? "/signin" : "/signup"} replace />;
  }
  return children;
}

/**
 * Route guard for guest-only pages (Sign In / Sign Up).
 * Redirects authenticated users directly to Home so they do not re-enter auth flows.
 */
function GuestRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <AuthLayout>{children}</AuthLayout>;
}

/**
 * Inner router shell that enforces authentication on app pages and conditionally
 * hides global navigation chrome on authentication screens.
 */
function AppContent() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();
  const isAuthPage = AUTH_ROUTES.includes(pathname.toLowerCase()) || !isAuthenticated;

  return (
    <>
      {!isAuthPage && <Navbar />}
      {!isAuthPage && <MobileBottomNav />}

      <Routes>
        {/* Protected Main Landing Page */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* Protected Book Catalog & Search */}
        <Route
          path="/explorebooks"
          element={
            <ProtectedRoute>
              <ExploreLibrary />
            </ProtectedRoute>
          }
        />
        <Route path="/explore" element={<Navigate to="/explorebooks" replace />} />

        {/* Protected Saved Favorites Shelf */}
        <Route
          path="/favorite"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route path="/favorites" element={<Navigate to="/favorite" replace />} />

        {/* Protected Authors & Curators Directory */}
        <Route
          path="/author"
          element={
            <ProtectedRoute>
              <Authors />
            </ProtectedRoute>
          }
        />
        <Route path="/authors" element={<Navigate to="/author" replace />} />

        {/* Protected Dynamic Book Detail Page */}
        <Route
          path="/book/:id"
          element={
            <ProtectedRoute>
              <BookDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books/:id"
          element={
            <ProtectedRoute>
              <BookDetail />
            </ProtectedRoute>
          }
        />

        {/* Guest-Only Authentication Pages (aliases normalize to /signin and /signup) */}
        <Route
          path="/signin"
          element={
            <GuestRoute>
              <SignInForm />
            </GuestRoute>
          }
        />
        <Route path="/login" element={<Navigate to="/signin" replace />} />

        <Route
          path="/signup"
          element={
            <GuestRoute>
              <SignUpForm />
            </GuestRoute>
          }
        />
        <Route path="/register" element={<Navigate to="/signup" replace />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isAuthPage && <Footer className="hidden md:block" />}
    </>
  );
}

/**
 * Root application component wrapping the router with global AuthProvider state.
 */
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
