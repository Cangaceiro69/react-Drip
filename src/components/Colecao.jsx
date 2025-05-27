import React from "react";
import Camisa from "../assets/tshirt.svg"

export default function Colecao() {
  return (
    <div className="App">
      <p>Coleções em Destaque</p>
      <div className="flex flex-row">
        <div>
          <img
            src="https://github.com/jotaveeo/imagens-projeto/blob/main/public/collection-1.png?raw=true"
            alt="camisa"
          />
          <div>30% OFF</div>
          <div>Comprar</div>
        </div>
        <div>
          <img
            src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-2.png?raw=true"
            alt="tenis"
          />
          <div>30% OFF</div>
          <div>Comprar</div>
        </div>
        <div>
          <img
            src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/collection-3.png?raw=true"
            alt="headphone"
          />
          <div>30% OFF</div>
          <div>Comprar</div>
        </div>
      </div>

      <p>Coleções em Destaque</p>

      <div className="flex flex-row justify-center">
        <div>
          <img
            src={Camisa}
            alt="camisa"
          />
          <h3>Camisetas</h3>
        </div>
        <div>
          <img
            src="https://client-drip-store.vercel.app/assets/iconPants-d98ecbda.svg"
            alt="calcas"
          />
          <h3>Calças</h3>
        </div>
        <div>
          <img
            src="https://client-drip-store.vercel.app/assets/iconPants-d98ecbda.svg"
            alt="calcas"
          />
          <h3>Bonês</h3>
        </div>
        <div>
          <img
            src="https://raw.githubusercontent.com/jotaveeo/imagens-projeto/601c2710ccb0ec8691c19239260f071ab3d5033c/public/headphones_1.svg"
            alt="Headphones"
          />
          <h3>Headphones</h3>
        </div>
        <div>
          <img
            src="https://client-drip-store.vercel.app/assets/iconSneakers-d162a3bf.svg"
            alt="Tênis"
          />
          <h3>Tênis</h3>
        </div>
      </div>
    </div>
  );
}