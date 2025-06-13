import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 importação necessária
import productImage from "../assets/produc-image-1.jpeg";
import relatedImage from "../assets/produc-image-2.jpeg";

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // 👈 inicialização do hook de navegação

  const unitPrice = 219;
  const originalPrice = 249;
  const discount = 30;
  const totalPrice = unitPrice * quantity;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Carrinho */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Produtos no carrinho */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex-1">
          <div className="hidden sm:grid grid-cols-7 gap-4 items-center border-b pb-4 text-sm font-semibold text-gray-700">
            <span className="col-span-2">MEU CARRINHO</span>
            <span className="col-span-2 text-center">QUANTIDADE</span>
            <span className="text-center">UNITÁRIO</span>
            <span className="text-center">TOTAL</span>
          </div>

          {/* Item */}
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 items-center py-4 text-sm border-b">
            <div className="sm:col-span-2 flex gap-4">
              <img
                src={productImage}
                alt="Produto"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <p className="font-semibold">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
                <p>
                  Cor: <span className="text-gray-700">Vermelho / Branco</span>
                </p>
                <p>
                  Tamanho:{" "}
                  <span className="text-gray-700 font-semibold">42</span>
                </p>
                <button className="text-xs text-gray-500 underline mt-2 hover:text-pink-500 cursor-pointer">
                  Remover item
                </button>
              </div>
            </div>

            {/* Quantidade */}
            <div className="sm:col-span-2 flex items-center justify-center gap-2">
              <button
                className="border px-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="border px-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            {/* Unitário */}
            <div className="text-center sm:text-left">
              <p className="text-xs sm:hidden font-semibold mb-1">UNITÁRIO</p>
              <p className="line-through text-gray-400 text-sm">
                R$ {originalPrice},00
              </p>
              <p className="font-semibold text-sm">R$ {unitPrice},00</p>
            </div>

            {/* Total */}
            <div className="text-center font-semibold sm:text-left">
              <p className="text-xs sm:hidden font-semibold mb-1">TOTAL</p>
              <p className="line-through text-gray-400 text-sm">
                R$ {originalPrice * quantity},00
              </p>
              <p className="font-semibold text-sm">R$ {totalPrice},00</p>
            </div>
          </div>

          {/* Cupons e frete */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Cupom de desconto
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Insira seu código"
                  className="border p-2 flex-1 rounded-l-md"
                />
                <button className="bg-pink-500 text-white px-4 rounded-r-md hover:bg-pink-600 cursor-pointer">
                  OK
                </button>
              </div>
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Calcular frete
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Insira seu CEP"
                  className="border p-2 flex-1 rounded-l-md"
                />
                <button className="bg-pink-500 text-white px-4 rounded-r-md hover:bg-pink-600 cursor-pointer">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resumo */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm">
          <h2 className="text-sm font-semibold text-gray-700 border-b pb-2 mb-4">
            RESUMO
          </h2>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>R$ {originalPrice * quantity},00</span>
            </div>
            <div className="flex justify-between">
              <span>Frete:</span>
              <span>R$ 0,00</span>
            </div>
            <div className="flex justify-between">
              <span>Desconto:</span>
              <span>R$ {discount * quantity},00</span>
            </div>
            <div className="border-t pt-2 font-semibold flex justify-between">
              <span>Total</span>
              <span className="text-pink-600">R$ {totalPrice},00</span>
            </div>
            <p className="text-xs text-gray-500">
              ou 10x de R$ {(totalPrice / 10).toFixed(2).replace(".", ",")} sem
              juros
            </p>
            <button
              className="w-full py-2 bg-yellow-400 text-white font-semibold rounded-md mt-2 hover:bg-white hover:text-yellow-500 border border-yellow-400 cursor-pointer"
              onClick={() => navigate("/finalizar")}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>

      {/* Produtos relacionados */}
      <div className="mt-12">
        <h2 className="font-semibold text-lg mb-4">Produtos Relacionados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="border rounded-xl overflow-hidden bg-white shadow-sm cursor-pointer hover:shadow-md transition"
            >
              <div className="relative">
                <img
                  src={relatedImage}
                  alt="Produto relacionado"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  30% OFF
                </span>
              </div>
              <div className="p-4 text-sm">
                <p className="font-semibold">K-Swiss V8 - Masculino</p>
                <p className="line-through text-gray-400 text-xs">R$ 200</p>
                <p className="font-bold">R$ 170</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
