import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Principal from "./pages/Principal";
import ProductPage from "./pages/ProdDis";
import CartPage from "./components/carrinho";
import Carrinho2 from "./components/carrinho2";
import ProdutoPage from "./pages/ProdDis2";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/produto" element={<ProductPage />} />
      <Route path="/produto2" element={<ProdutoPage />} />
      <Route path="/carrinho" element={<CartPage />} />
      <Route path="/carrinho2" element={<Carrinho2 />} />
    </Routes>
  </Router>
);
