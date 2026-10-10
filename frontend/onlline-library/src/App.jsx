import { BrowserRouter, Route, Routes } from "react-router";
import { SignInForm } from "./features/auth/SignInForm";
import { HomePage } from "./pages/Home/HomePage";
import Footer from "./component/Footer";
import MobileBottomNav from "./component/MobileBottomNav";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MobileBottomNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer className="hidden md:block" />
    </BrowserRouter>
  );
}

export default App;
