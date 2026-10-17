import { BrowserRouter, Route, Routes } from "react-router";
import { SignInForm } from "./features/auth/SignInForm";
import { HomePage } from "./pages/Home/HomePage";
import Footer from "./component/Footer";
import MobileBottomNav from "./component/MobileBottomNav";
import Navbar from "./component/Navbar";

import MyLibrary from "./pages/library/MyLibrary.jsx";
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
        <Route path="/library" element={<MyLibrary />} />
        {/* <Route path="/author" element={<Authors />} /> */}
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
      <Footer className="hidden md:block" />
    </BrowserRouter>
  );
}

export default App;
