import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import ProductPage from "./pages/ProductDisplay";
import CartPage from "./pages/carrinho";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/produto" element={<ProductPage />} />
      <Route path="/carrinho" element={<CartPage />} />
    </Routes>
  </Router>
);
