import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LayeBanner from "../assets/layerbanner.png"; // Mantém o import da imagem do banner

export default function CardProdutos() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch("https://seu-backend.com/api/produtos");
        if (!response.ok) throw new Error("Erro ao buscar produtos");
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

  const handleProdutoClick = (id) => {
    navigate(`/produto/${id}`);
  };

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div className="m-0 p-0 font-sans bg-[#f9f8fe]">
      {/* Produtos em alta */}
      <section className="py-10 px-5">
        {/* Título + Botão "Ver todos" */}
        <div className="flex items-center justify-between mb-6 max-w-[1200px] mx-auto">
          <h2 className="text-[#474747] text-xl font-semibold">
            Coleções em destaque
          </h2>
          <span
            className="text-pink-500 text-sm font-medium hover:underline cursor-pointer"
            onClick={() => navigate("/Prod")}
          >
            Ver todos →
          </span>
        </div>

        {/* Grade de produtos */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          {produtos.map((produto) => (
            <button
              key={produto.id}
              onClick={() => handleProdutoClick(produto.id)}
              className="relative w-full p-5 text-[1.125rem] text-[#474747] bg-[#f9f8fe] text-left rounded-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Selo de desconto */}
              {produto.discount && (
                <span className="absolute top-3 left-3 bg-green-400 text-[white] text-sm px-2 py-1 rounded-full font-semibold">
                  {produto.discount}% OFF
                </span>
              )}

              {/* Imagem do produto */}
              <img
                className="w-full max-w-[12.5rem] mb-5 rounded shadow-md bg-white mx-auto"
                src={produto.image}
                alt={produto.name}
              />

              {/* Informações do produto */}
              <h3 className="text-[0.75rem] text-[#8f8f8f] font-semibold">
                {produto.category}
              </h3>
              <p className="text-sm leading-snug">{produto.name}</p>
              <p className="mt-1">
                {produto.oldPrice && (
                  <span className="line-through mr-1 text-[#8f8f8f]">
                    ${produto.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="font-semibold text-black">
                  ${produto.price.toFixed(2)}
                </span>
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Banner Oferta */}
      <div className="bg-white px-4 py-20 flex flex-col md:flex-row items-center justify-center gap-10 max-w-[1200px] mx-auto overflow-hidden">
        {/* Imagem + círculo */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          {/* Círculo roxo atrás do tênis */}
          <div className="absolute w-[80vw] h-[80vw] md:w-[25rem] md:h-[25rem] bg-[#4200FF80] rounded-full z-0"></div>
          <img
            className="relative z-10 w-[70%] max-w-[400px]"
            src={LayeBanner}
            alt="tenis nike"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 z-10 text-center md:text-left px-2">
          <p className="text-[#C92071] font-semibold mb-2">Oferta especial</p>
          <h2 className="text-3xl md:text-5xl text-[#474747] font-bold leading-tight mb-4">
            Air Jordan edição de colecionador
          </h2>
          <p className="text-[#474747] text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            necessitatibus odio eaque accusamus eius nam excepturi.
          </p>
          <button className="bg-[#C92071] hover:bg-[#a8185e] text-[#F5F5F5] font-semibold py-2 px-10 rounded-md cursor-pointer">
            Ver Oferta
          </button>
        </div>
      </div>
    </div>
  );
}
