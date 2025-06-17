import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Produtos() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulando endpoint do backend para pegar produtos
  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch("https://api.exemplo.com/produtos"); // Substitua pela URL real do backend
        if (!response.ok) throw new Error("Erro ao buscar produtos");
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error(error);
        setProdutos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

  const handleProdutoClick = (produtoId) => {
    navigate(`/produto/${produtoId}`);
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
            Resultados para "Tênis" - {produtos.length} produtos
          </p>

          <select className="border border-gray-300 rounded px-3 py-2 text-sm">
            <option>Ordenar por mais relevantes</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Mais vendidos</option>
          </select>
        </div>

        {loading ? (
          <p>Carregando produtos...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                onClick={() => handleProdutoClick(produto.id)}
                className="relative w-full p-5 text-[1.125rem] text-[#474747] bg-[#f9f8fe] text-left rounded-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                {produto.descontoPercentual && (
                  <span className="absolute top-3 left-3 bg-green-400 text-white text-sm px-2 py-1 rounded-full font-semibold">
                    {produto.descontoPercentual}% OFF
                  </span>
                )}

                <img
                  className="w-full max-w-[12.5rem] mb-5 rounded shadow-md bg-white mx-auto"
                  src={produto.imagemUrl}
                  alt={produto.nome}
                />

                <h3 className="text-[0.75rem] text-[#8f8f8f] font-semibold">
                  {produto.nome}
                </h3>
                <p className="text-sm leading-snug">
                  {produto.precoAntigo && (
                    <span className="line-through mr-1 text-[#8f8f8f]">
                      ${produto.precoAntigo.toFixed(2)}
                    </span>
                  )}
                  <span className="font-semibold text-black">
                    ${produto.precoAtual.toFixed(2)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
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
