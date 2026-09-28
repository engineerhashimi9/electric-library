import { BrowserRouter, Route, Routes } from "react-router";
import { SignInForm } from "./features/auth/SignInForm";
import { HomePage } from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
