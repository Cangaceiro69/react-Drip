import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../assets/produc-image-1.jpeg";
import img1 from "../assets/produc-image-2.jpeg";

const images = [img1, img1, img1, img1, img1];
const sizes = [39, 42, 43];
const colors = ["bg-pink-500", "bg-cyan-500", "bg-purple-800"];

export default function ProductPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-7xl mx-auto relative">
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg font-semibold mb-4">
              Produto adicionado ao carrinho!
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  console.log("Navegando para carrinho2");
                  navigate("/carrinho2");
                }}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 cursor-pointer"
              >
                Ir para o carrinho
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="border border-black-300 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
              >
                Continuar comprando
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home / Produtos / Tênis / Nike /{" "}
        <span className="text-black font-medium">K-Swiss V8 - Masculino</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Imagem principal e miniaturas */}
        <div>
          <div className="bg-violet-100 rounded-lg overflow-hidden w-full aspect-square flex items-center justify-center">
            <img
              src={images[selectedImageIndex]}
              alt="Imagem do Produto"
              className="object-contain max-h-full"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`border-2 rounded-md p-1 transition-all cursor-pointer ${
                  selectedImageIndex === idx
                    ? "border-pink-500"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Informações do produto */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">
            K-Swiss V8 - Masculino
          </h1>
          <p className="text-sm text-gray-600 mb-2">
            Casual Nike | ref: 2349871m
          </p>
          <div className="flex items-center gap-1 text-sm text-yellow-500 mb-2">
            ★ 4.7 <span className="text-gray-500">(200 avaliações)</span>
          </div>
          <div className="text-xl font-bold text-gray-800 mb-1">
            R$ 170,00{" "}
            <span className="text-sm font-normal text-gray-400 line-through">
              R$ 200,00
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2 mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Tamanhos */}
          <div className="mb-4">
            <p className="mb-2 font-medium">Tamanho</p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded cursor-pointer transition font-medium ${
                    selectedSize === size
                      ? "border-purple-500 text-purple-600"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Cores */}
          <div className="mb-4">
            <p className="mb-2 font-medium">Cor</p>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${color} cursor-pointer transition ${
                    selectedColor === color
                      ? "ring-2 ring-purple-500 ring-offset-2 border-purple-500"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded transition cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            COMPRAR
          </button>
        </div>
      </div>

      {/* Produtos relacionados */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Produtos Relacionados</h2>
          <a href="#" className="text-sm text-pink-600 hover:underline">
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, idx) => (
            <button
              key={idx}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition text-left"
              onClick={() => navigate("/produto")}
            >
              <div className="relative">
                <img
                  src={img2}
                  alt="Tênis"
                  className="w-full object-cover aspect-square"
                />
                <span className="absolute top-2 left-2 bg-green-400 text-white text-xs font-bold px-2 py-1 rounded">
                  {idx % 1 === 0 ? "30% OFF" : ""}
                </span>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-500">Tênis</p>
                <p className="text-gray-800 font-medium">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
                <div className="text-sm mt-1">
                  <span className="line-through text-gray-400 mr-2">
                    R$249,00
                  </span>
                  <span className="text-black font-bold">R$219,00</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
