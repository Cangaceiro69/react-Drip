import { useState } from "react";
import img1 from "../assets/produc-image-1.jpeg";
import img2 from "../assets/produc-image-2.jpeg";

const images = [img1, img1, img1, img1, img1];
const sizes = [39, 40, 41, 42, 43];
const colors = ["bg-pink-500", "bg-cyan-500", "bg-purple-800"];

export default function ProductPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="text-sm text-gray-500 mb-4">
        Home / Produtos / Tênis / Nike /{" "}
        <span className="text-black font-medium">
          Tênis Nike Revolution 6 Next Nature Masculino
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          <div className="bg-violet-100 rounded-lg overflow-hidden w-full aspect-square flex items-center justify-center">
            <img
              src={images[selectedImageIndex]}
              alt="Imagem do Produto"
              className="object-contain max-h-full"
            />
          </div>
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`border-2 rounded-md p-1 shrink-0 transition-all cursor-pointer ${
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
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">
            Tênis Nike Revolution 6 Next Nature Masculino
          </h1>
          <p className="text-sm text-gray-600 mb-2">
            Casual Nike | <span className="text-gray-500">REF:38416711</span>
          </p>
          <div className="flex items-center gap-1 text-sm text-yellow-500 mb-2">
            ★ 4.7 <span className="text-gray-500">(90 avaliações)</span>
          </div>

          <div className="text-2xl font-bold text-gray-800 mb-1">
            R$ 219,00{" "}
            <span className="text-sm font-normal text-gray-400 line-through">
              219,00
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <div className="mb-4">
            <p className="mb-2 font-medium">Tamanho</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 py-2 border rounded text-sm transition ${
                    selectedSize === size
                      ? "border-purple-500 text-purple-600"
                      : "border-gray-300 text-gray-700"
                  } cursor-pointer`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="mb-2 font-medium">Tamanho</p>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${color} transition ${
                    selectedColor === color
                      ? "ring-2 ring-purple-500 ring-offset-2 border-purple-500"
                      : "border-gray-300"
                  } cursor-pointer`}
                />
              ))}
            </div>
          </div>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded transition">
            COMPRAR
          </button>
        </div>
      </div>
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg md:text-xl font-semibold">
            Coleções em destaque
          </h2>
          <a href="#" className="text-sm text-pink-600 hover:underline">
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative">
                <img
                  src={img2}
                  alt="Tênis"
                  className="w-full object-cover aspect-square"
                />
                <span className="absolute top-2 left-2 bg-green-400 text-white text-xs font-bold px-2 py-1 rounded">
                  30% OFF
                </span>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-500">Tênis</p>
                <p className="text-gray-800 font-medium">
                  K-Swiss V8 - Masculino
                </p>
                <div className="text-sm mt-1">
                  <span className="line-through text-gray-400 mr-2">$200</span>
                  <span className="text-black font-bold">$170</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
