import { useEffect, useState } from "react";
import slide1 from "./assets/produc-image-5.jpeg";
import slide2 from "./assets/home-slide-1.jpeg";
import slide3 from "./assets/home-slide-3.jpeg";
import slide4 from "./assets/home-slide-4.jpeg";

const slides = [
  {
    type: "text-image",
    title: "Queima de estoque Nike 🔥",
    subtitle: "Melhores ofertas personalizadas",
    text: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    image: slide1,
  },
  { type: "image", image: slide2 },
  { type: "image", image: slide3 },
  { type: "image", image: slide4 },
];

function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-[#f5f5f5]">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) =>
          slide.type === "text-image" ? (
            <div
              key={index}
              className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-between px-[2rem] md:px-[6rem] py-[2rem] flex-shrink-0"
            >
              <div className="md:w-1/2 text-center md:text-left mt-[2rem] md:mt-0">
                <p className="text-[#fbbf24] text-[0.875rem] font-medium mb-[1rem]">
                  {slide.subtitle}
                </p>
                <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-black leading-tight mb-[1rem]">
                  {slide.title}
                </h1>
                <p className="text-gray-700 text-[0.9375rem] md:text-[1rem] leading-relaxed mb-[2rem]">
                  {slide.text}
                </p>
                <button className="bg-[#c92072] text-white px-[2rem] py-[0.75rem] rounded-[0.5rem] text-[1rem] font-semibold border-none">
                  Ver Ofertas
                </button>
              </div>
              <div className="md:w-1/2 w-full flex justify-center">
                <img
                  src={slide.image}
                  alt="Oferta"
                  className="w-[16rem] md:w-[24rem] lg:w-[32rem] object-contain"
                />
              </div>
            </div>
          ) : (
            <img
              key={index}
              src={slide.image}
              className="w-full h-full object-cover flex-shrink-0"
              alt={`Slide ${index + 1}`}
            />
          )
        )}
      </div>

      <div className="absolute bottom-[1rem] left-0 right-0 flex justify-center space-x-[0.5rem]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-[0.75rem] h-[0.75rem] rounded-full transition-colors ${
              index === current ? "bg-[#c92072]" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default App;
