import { useNavigate } from "react-router-dom";
import TenisCard from "../assets/produc-image-1.jpeg";

export default function Produ() {
  const navigate = useNavigate();

  const handleProdutoClick = () => {
    navigate("/produto");
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
      {[...Array(16)].map((_, idx) => (
        <button
          key={idx}
          onClick={handleProdutoClick}
          className="relative w-full p-5 text-[1.125rem] text-[#474747] bg-[#f9f8fe] text-left rounded-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          {/* Selo de desconto */}
          <span className="absolute top-3 left-3 bg-[#E7FF86] text-[#474747] text-sm px-2 py-1 rounded-full font-semibold">
            30% OFF
          </span>

          {/* Imagem do produto */}
          <img
            className="w-full max-w-[12.5rem] mb-5 rounded shadow-md bg-white mx-auto"
            src={TenisCard}
            alt="Tênis Nike"
          />

          {/* Informações do produto */}
          <h3 className="text-[0.75rem] text-[#8f8f8f] font-semibold">Tênis</h3>
          <p className="text-sm leading-snug">
            Tênis Nike Revolution 6 Next Nature Masculino
          </p>
          <p className="mt-1">
            <span className="line-through mr-1 text-[#8f8f8f]">$249,00</span>
            <span className="font-semibold text-black">$219,00</span>
          </p>
        </button>
      ))}
    </div>
  );
}
