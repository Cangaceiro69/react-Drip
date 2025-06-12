import { useNavigate } from "react-router-dom";
import TenisCard from "../assets/produc-image-1.jpeg";
import LayeBanner from "../assets/layerbanner.png";

export default function CardProdutos() {
  const navigate = useNavigate();

  const handleProdutoClick = () => {
    navigate("/produto");
  };

  return (
    <div className="m-0 p-0 font-sans bg-[#f9f8fe]">
      {/* Produtos em alta */}
      <section className="py-10 px-5">
        <h2 className="text-[#474747] text-xl font-semibold mb-6">
          Produtos em alta
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
          {[...Array(8)].map((_, idx) => (
            <button
              key={idx}
              onClick={handleProdutoClick}
              className="relative w-full p-5 text-[18px] text-[#474747] bg-[#f9f8fe] text-left rounded-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="absolute top-3 left-3 bg-[#E7FF86] text-[#474747] text-sm px-2 py-1 rounded-full font-semibold">
                30% OFF
              </span>
              <img
                className="w-full max-w-[200px] mb-5 rounded shadow-md bg-white mx-auto"
                src={TenisCard}
                alt="tenis nike"
              />
              <h3 className="text-[12px] text-[#8f8f8f] font-semibold">
                Tênis
              </h3>
              <p className="text-sm">
                Tênis Nike Revolution 6 Next Nature Masculino
              </p>
              <p>
                <span className="line-through mr-1">$249,00</span>
                <span className="font-semibold text-black">$219,00</span>
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
