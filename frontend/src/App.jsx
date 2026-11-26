import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider, useFavoritesContext } from "./context/FavoritesContext";
import { AuthLayout } from "./features/auth/AuthLayout";
import Navbar from "./components/layout/Navbar";
import MobileBottomNav from "./components/layout/MobileBottomNav";
import Footer from "./components/layout/Footer";
import LiteraryLoader from "./components/common/LiteraryLoader";
import Toast from "./components/ui/Toast";

// Route-level code splitting for optimized bundle performance
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const ExploreLibrary = lazy(() => import("./pages/Explore/ExploreLibrary"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Authors = lazy(() => import("./pages/Authors/Authors"));
const BookDetail = lazy(() => import("./pages/BookDetail/BookDetail"));
const SignInForm = lazy(() =>
  import("./features/auth/SignInForm").then((m) => ({ default: m.SignInForm }))
);
const SignUpForm = lazy(() =>
  import("./features/auth/SignUpForm").then((m) => ({ default: m.SignUpForm }))
);

const AUTH_ROUTES = ["/signin", "/login", "/signup", "/register"];

function GlobalToast() {
  const { toast, closeToast, undoRemove } = useFavoritesContext();
  if (!toast) return null;

  return (
    <Toast
      message={toast.message}
      undo={Boolean(toast.action)}
      onUndo={undoRemove}
      onClose={closeToast}
    />
  );
}

function AppContent() {
  const { pathname } = useLocation();
  const isAuthPage = AUTH_ROUTES.includes(pathname.toLowerCase());

  return (
    <div className="app-shell">
      {!isAuthPage && <Navbar />}
      {!isAuthPage && <MobileBottomNav />}

      <Suspense fallback={<LiteraryLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explorebooks" element={<ExploreLibrary />} />
          <Route path="/explore" element={<Navigate to="/explorebooks" replace />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/favorites" element={<Navigate to="/favorite" replace />} />
          <Route path="/author" element={<Authors />} />
          <Route path="/authors" element={<Navigate to="/author" replace />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route
            path="/signin"
            element={
              <AuthLayout>
                <SignInForm />
              </AuthLayout>
            }
          />
          <Route path="/login" element={<Navigate to="/signin" replace />} />
          <Route
            path="/signup"
            element={
              <AuthLayout>
                <SignUpForm />
              </AuthLayout>
            }
          />
          <Route path="/register" element={<Navigate to="/signup" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      {!isAuthPage && <Footer className="hidden-mobile" />}
      <GlobalToast />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
