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
      <section className="py-10 px-5">
        <h2 className="text-[#474747] text-xl font-semibold mb-6 ">
          Produtos em alta
        </h2>

        <div className="relative flex flex-wrap gap-8 justify-center max-w-[1200px] mx-auto">
          {[...Array(8)].map((_, idx) => (
            <button
              key={idx}
              onClick={handleProdutoClick}
              className="relative w-[250px] p-5 text-[18px] text-[#474747] bg-[#f9f8fe] text-left rounded-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="absolute mt-3 bg-[#E7FF86] text-[#474747] text-sm px-2 py-1 rounded-full font-semibold">
                30% OFF
              </span>
              <img
                className="w-[200px] mb-5 rounded shadow-md bg-white"
                src={TenisCard}
                alt="tenis nike page"
              />
              <h3 className="text-left text-[12px] text-[#8f8f8f] font-semibold">
                Tênis
              </h3>
              <p className="text-left">
                Tênis Nike Revolution 6 Next Nature Masculino
              </p>
              <p className="preco text-left">
                <span className="preco-antigo line-through mr-1">$249,00</span>
                <span className="preco-atual font-semibold text-black">
                  $219,00
                </span>
              </p>
            </button>
          ))}
        </div>
      </section>

      <div className="bg-white mx-auto px-4 py-30 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="absolute w-[500px] h-[500px] bg-[#4200FF80] rounded-full z-0"></div>

          <img
            className="relative z-10 w-[600px]"
            src={LayeBanner}
            alt="tenis nike"
          />
        </div>

        <div className="flex-1">
          <p className="text-[#C92071] font-semibold mb-2">Oferta especial</p>
          <h2 className="text-[48px] text-[#474747] font-bold leading-tight mb-4">
            Air Jordan edição de colecionador
          </h2>
          <p className="text-[#474747] text-[16px] mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            necessitatibus odio eaque accusamus eius nam excepturi eum veritatis
            tenetur. Consequatur blanditiis magnam aliquam, alias totam at odit
            amet sequi provident!
          </p>
          <button className="bg-[#C92071] hover:bg-[#a8185e] text-[#F5F5F5] font-semibold py-2 px-10 rounded-md cursor-pointer">
            Ver Oferta
          </button>
        </div>
      </div>
    </div>
  );
}
