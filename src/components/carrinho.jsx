import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulando chamada ao backend para buscar o produto
    async function fetchProduct() {
      try {
        const response = await fetch("https://meu-backend.com/api/produto/1");
        if (!response.ok) throw new Error("Erro ao buscar produto");
        const data = await response.json();

        // data esperado: { id, nome, imagem, cor, tamanho, precoUnitario, precoOriginal, desconto }
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProduct();
  }, []);

  if (!product) {
    return <div>Carregando produto...</div>;
  }

  const totalPrice = product.precoUnitario * quantity;
  const originalTotalPrice = product.precoOriginal * quantity;
  const discountTotal = product.desconto * quantity;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6 flex-1">
          <div className="hidden sm:grid grid-cols-7 gap-4 items-center border-b pb-4 text-sm font-semibold text-gray-700">
            <span className="col-span-2">MEU CARRINHO</span>
            <span className="col-span-2 text-center">QUANTIDADE</span>
            <span className="text-center">UNITÁRIO</span>
            <span className="text-center">TOTAL</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 items-center py-4 text-sm border-b">
            <div className="sm:col-span-2 flex gap-4">
              <img
                src={product.imagem}
                alt={product.nome}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <p className="font-semibold">{product.nome}</p>
                <p>
                  Cor: <span className="text-gray-700">{product.cor}</span>
                </p>
                <p>
                  Tamanho:{" "}
                  <span className="text-gray-700 font-semibold">
                    {product.tamanho}
                  </span>
                </p>
                <button className="text-xs text-gray-500 underline mt-2 hover:text-pink-500 cursor-pointer">
                  Remover item
                </button>
              </div>
            </div>

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

            <div className="text-center sm:text-left">
              <p className="text-xs sm:hidden font-semibold mb-1">UNITÁRIO</p>
              <p className="line-through text-gray-400 text-sm">
                R$ {product.precoOriginal},00
              </p>
              <p className="font-semibold text-sm">
                R$ {product.precoUnitario},00
              </p>
            </div>

            <div className="text-center font-semibold sm:text-left">
              <p className="text-xs sm:hidden font-semibold mb-1">TOTAL</p>
              <p className="line-through text-gray-400 text-sm">
                R$ {originalTotalPrice},00
              </p>
              <p className="font-semibold text-sm">R$ {totalPrice},00</p>
            </div>
          </div>

          {/* Cupom e frete continuam iguais */}
          {/* ... */}
        </div>

        {/* Resumo */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm">
          <h2 className="text-sm font-semibold text-gray-700 border-b pb-2 mb-4">
            RESUMO
          </h2>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>R$ {originalTotalPrice},00</span>
            </div>
            <div className="flex justify-between">
              <span>Frete:</span>
              <span>R$ 0,00</span>
            </div>
            <div className="flex justify-between">
              <span>Desconto:</span>
              <span>R$ {discountTotal},00</span>
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
    </div>
  );
}
