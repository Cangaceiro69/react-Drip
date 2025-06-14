import { useNavigate } from "react-router-dom";
import TenisCard from "../assets/produc-image-1.jpeg";

export default function Produtos() {
  const navigate = useNavigate();

  const handleProdutoClick = () => {
    navigate("/produto");
  };

  return (
    <div className="flex gap-10 max-w-[1200px] mx-auto px-4 py-10">
      {/* Sidebar de filtros */}
      <aside className="hidden lg:block w-[15rem]">
        <p className="text-sm text-[#474747] font-semibold mb-4">Filtrar por</p>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Gênero</h3>
          {["Masculino", "Feminino", "Infantil"].map((item) => (
            <Checkbox key={item} label={item} />
          ))}
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Tamanho</h3>
          {["34", "35", "36", "37", "38", "39", "40", "41", "42", "43"].map(
            (item) => (
              <Checkbox key={item} label={item} />
            )
          )}
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Cor</h3>
          {["Preto", "Branco", "Cinza", "Azul", "Vermelho"].map((item) => (
            <Checkbox key={item} label={item} />
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Marca</h3>
          {["Nike", "Adidas", "Puma", "K-Swiss"].map((item) => (
            <Checkbox key={item} label={item} />
          ))}
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1">
        {/* Topo com quantidade e ordenação */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-[#474747] font-semibold">
            Resultados para "Tênis" - 328 produtos
          </p>

          <select className="border border-gray-300 rounded px-3 py-2 text-sm">
            <option>Ordenar por mais relevantes</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Mais vendidos</option>
          </select>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(16)].map((_, idx) => (
            <div
              key={idx}
              onClick={handleProdutoClick}
              className="relative w-full p-5 text-[1.125rem] text-[#474747] bg-[#f9f8fe] text-left rounded-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Selo de desconto */}
              <span className="absolute top-3 left-3 bg-green-400 text-white text-sm px-2 py-1 rounded-full font-semibold">
                30% OFF
              </span>

              {/* Imagem */}
              <img
                className="w-full max-w-[12.5rem] mb-5 rounded shadow-md bg-white mx-auto"
                src={TenisCard}
                alt="Tênis"
              />

              {/* Informações */}
              <h3 className="text-[0.75rem] text-[#8f8f8f] font-semibold">
                Tênis Nike Revolution 6 Next Nature Masculino
              </h3>
              <p className="text-sm leading-snug">
                <span className="line-through mr-1 text-[#8f8f8f]">
                  $249,00
                </span>
                <span className="font-semibold text-black">$219,00</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ✅ Componente Checkbox
function Checkbox({ label }) {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <input
        type="checkbox"
        id={label}
        className="accent-[#c92071] w-4 h-4 cursor-pointer"
      />
      <label
        htmlFor={label}
        className="text-sm select-none cursor-pointer text-[#474747]"
      >
        {label}
      </label>
    </div>
  );
}
