import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Principal from "./pages/Principal.jsx";
import ProductPage from "./pages/ProdDis.jsx";
import CartPage from "./pages/carrinho.jsx";
import Carrinho2 from "./pages/carrinho2.jsx";
import ProdutoPage from "./pages/ProdDis2.jsx";
import Finalizar from "./pages/finalizar.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/produto" element={<ProductPage />} />
      <Route path="/produto2" element={<ProdutoPage />} />
      <Route path="/carrinho" element={<CartPage />} />
      <Route path="/carrinho2" element={<Carrinho2 />} />
      <Route path="/finalizar" element={<Finalizar />} />
    </Routes>
  </Router>
);
