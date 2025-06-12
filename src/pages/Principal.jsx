import CardProdutos from "../components/CardProduto.jsx";
import Footer from "../components/Footer.jsx";
import Carrossel from "../components/Carrossel.jsx";
import Colecao from "../components/Colecao.jsx";
import Header from "../components/Header.jsx";

export default function Prin() {
  return (
    <>
      <Header />
      <Carrossel />
      <Colecao />
      <CardProdutos />
      <Footer />
    </>
  );
}
