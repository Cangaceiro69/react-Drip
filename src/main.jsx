import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import Carrossel from "./components/Carrossel.jsx";
import ProductDisplay from "./components/ProductDisplay.jsx";
import Colecao from "./components/Colecao.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ProductDisplay /> */}
    <Carrossel />
    <Colecao />
    <App />
    <Footer />
  </StrictMode>
);
