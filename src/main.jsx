import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Principal from "./pages/Principal.jsx";
import ProductPage from "./pages/ProdDis.jsx";
import CartPage from "./pages/carrinho.jsx";
import Finalizar from "./pages/finalizar.jsx";
import Product from "./pages/Product.jsx";
import CompraRealizada from "./pages/fim.jsx";
import PerfilEPedid from "./pages/Perf.jsx";
import Cadastr from "./pages/Cadrasto.jsx";
import Login from "./pages/Login.jsx";
import Cadas from "./pages/Cada.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/Produto" element={<ProductPage />} />
      <Route path="/Carrinho" element={<CartPage />} />
      <Route path="/finalizar" element={<Finalizar />} />
      <Route path="/Prod" element={<Product />} />
      <Route path="/Compra-realizada" element={<CompraRealizada />} />
      <Route path="/Perfil" element={<PerfilEPedid />} />
      <Route path="/Cadastro-form" element={<Cadastr />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Cadastro" element={<Cadas />} />
    </Routes>
  </Router>
);
