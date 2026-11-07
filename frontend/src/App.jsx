import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SignInForm } from "./features/auth/SignInForm";
import { HomePage } from "./pages/Home/HomePage";
import Footer from "./component/Footer";
import MobileBottomNav from "./component/MobileBottomNav";
import Navbar from "./component/Navbar";
import ExploreLibrary from "./pages/exploreBooks/ExploreLibrary.jsx";
import Authors from "./pages/author/Authors.jsx";
import Favorites from "./pages/favorite/Favorites.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MobileBottomNav />
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
            <div className="min-h-screen bg-[#F4FAFA] flex items-center justify-center py-12 px-4 sm:px-6">
              <SignInForm />
            </div>
          }
        />
        <Route path="/login" element={<Navigate to="/signin" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer className="hidden md:block" />
    </BrowserRouter>
  );
}

export default App;
