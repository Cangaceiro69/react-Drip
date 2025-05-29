import React from "react";
import Camisa from "../assets/tshirt.svg"

export default function Colecao() {
  return (
    <div className="py-10 px-4 max-w-[1200px] mx-auto text-center">
      {/* Título */}
      <p className="text-[#474747] font-semibold text-xl mb-8">
        Coleções em Destaque
      </p>

      {/* Cards das imagens */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {/* CARD 1 */}
        <div className="relative w-[300px]">
          <img
            src="https://github.com/jotaveeo/imagens-projeto/blob/main/public/collection-1.png?raw=true"
            alt="camisa"
            className="w-full"
          />
          <span className="absolute top-2 left-4 bg-[#E7FF86] text-[#474747] text-sm px-2 py-1 rounded-full font-semibold">
            30% OFF
          </span>
          <button className="absolute bottom-6 left-1/4 transform -translate-x-1/2 bg-[#F5F5F5] text-[#C92071] px-6 py-2 rounded font-semibold shadow">
            Comprar
          </button>
        </div>

        {/* CARD 2 */}
        <div className="relative w-[300px]">
          <img
            src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-2.png?raw=true"
            alt="tenis"
            className="w-full"
          />
          <span className="absolute top-2 left-4 bg-[#E7FF86] text-[#474747] text-sm px-2 py-1 rounded-full font-semibold">
            30% OFF
          </span>
          <button className="absolute bottom-6 left-1/4 transform -translate-x-1/2 bg-[#F5F5F5] text-[#C92071] px-6 py-2 rounded font-semibold shadow">
            Comprar
          </button>
        </div>

        {/* CARD 3 */}
        <div className="relative w-[300px]">
          <img
            src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-3.png?raw=true"
            alt="headphone"
            className="w-full"
          />
          <span className="absolute top-2 left-4 bg-[#E7FF86] text-[#474747] text-sm px-2 py-1 rounded-full font-semibold">
            30% OFF
          </span>
          <button className="absolute bottom-6 left-1/4 transform -translate-x-1/2 bg-[#F5F5F5] text-[#C92071] px-6 py-2 rounded font-semibold shadow">
            Comprar
          </button>
        </div>
      </div>

      {/* Aqui começa a parte de ícones (camiseta, calça, etc.) */}
      <div>
        <p className="text-[#474747] font-semibold mb-4">Coleções em Destaque</p>
        <div className="flex flex-row justify-center items-center gap-8">
          {/* Ícones e textos */}
          <div>
            <img src="/path/to/tshirt.svg" alt="camisa" />
            <h3>Camisetas</h3>
          </div>
          <div>
            <img src="https://client-drip-store.vercel.app/assets/iconPants-d98ecbda.svg" alt="calças" />
            <h3>Calças</h3>
          </div>
          <div>
            <img src="https://client-drip-store.vercel.app/assets/iconPants-d98ecbda.svg" alt="bonés" />
            <h3>Bonês</h3>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/jotaveeo/imagens-projeto/601c2710ccb0ec8691c19239260f071ab3d5033c/public/headphones_1.svg" alt="headphones" />
            <h3>Headphones</h3>
          </div>
          <div>
            <img src="https://client-drip-store.vercel.app/assets/iconSneakers-d162a3bf.svg" alt="Tênis" />
            <h3>Tênis</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

