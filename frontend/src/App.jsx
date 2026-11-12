import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
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

const AUTH_ROUTES = ["/signin", "/login", "/signup", "/register"];

function AppContent() {
  const { pathname } = useLocation();
  const isAuthPage = AUTH_ROUTES.includes(pathname.toLowerCase());

  return (
    <>
      {!isAuthPage && <Navbar />}
      {!isAuthPage && <MobileBottomNav />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explorebooks" element={<ExploreLibrary />} />
        <Route path="/explore" element={<Navigate to="/explorebooks" replace />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/favorites" element={<Navigate to="/favorite" replace />} />
        <Route path="/author" element={<Authors />} />
        <Route path="/authors" element={<Navigate to="/author" replace />} />
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
      {!isAuthPage && <Footer className="hidden md:block" />}
    </>
  );
}

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
