import TenisCard from "./assets/teniscard.png";
import LayeBanner from "./assets/layerbanner.png";
import CardProduto from "./components/CardProduto";

export default function App() {
  return (
    <div className="m-0 p-0 font-sans bg-[#f9f8fe]">
      <section className="py-10 px-5">
        <h2>Produtos em alta</h2>

        <div className="flex flex-wrap gap-8 justify-center max-w-[1200px] mx-auto">
          <div className="w-[250px] p-5 text-[18px] text-[#474747] bg-[#f9f8fe]">
            <span className="desconto">30% OFF</span>
            <img
              className="w-[200px] mb-5 rounded shadow-md bg-white"
              src={TenisCard}
              alt="tenis nike"
            />
            <h3 className="text-left text-[12px] text-[#8f8f8f] font-semibold">
              Tênis
            </h3>
            <p className="text-left">K-Swiss V8 - Masculino</p>
            <p className="preco text-left">
              <span className="preco-antigo line-through mr-1 text-left">
                $200
              </span>
              <span className="preco-atual font-semibold text-black text-left">
                $100
              </span>
            </p>
          </div>

          <div className="w-[250px] p-5 text-[18px] text-[#474747] bg-[#f9f8fe]">
            <span className="desconto">30% OFF</span>
            <img
              className="w-[200px] mb-5 rounded shadow-md bg-white"
              src={TenisCard}
              alt="tenis nike"
            />
            <h3 className="text-left text-[12px] text-[#8f8f8f] font-semibold">
              Tênis
            </h3>
            <p>K-Swiss V8 - Masculino</p>
            <p className="preco">
              <span className="preco-antigo line-through mr-1 text-left">
                $200
              </span>
              <span className="preco-atual font-semibold text-black text-left">
                $100
              </span>
            </p>
          </div>

          <div className="w-[250px] p-5 text-[18px] text-[#474747] bg-[#f9f8fe]">
            <img
              className="w-[200px] mb-5 rounded shadow-md bg-white"
              src={TenisCard}
              alt="tenis nike"
            />
            <h3 className="text-left text-[12px] text-[#8f8f8f] font-semibold">
              Tênis
            </h3>
            <p>K-Swiss V8 - Masculino</p>
            <p className="preco">
              <span className="preco-antigo line-through mr-1 text-left">
                $200
              </span>
              <span className="preco-atual font-semibold text-black text-left">
                $100
              </span>
            </p>
          </div>

          <div className="w-[250px] p-5 text-[18px] text-[#474747] bg-[#f9f8fe]">
            <img
              className="w-[200px] mb-5 rounded shadow-md bg-white"
              src={TenisCard}
              alt="tenis nike"
            />
            <h3 className="text-left text-[12px] text-[#8f8f8f] font-semibold">
              Tênis
            </h3>
            <p>K-Swiss V8 - Masculino</p>
            <p className="preco">
              <span className="preco-antigo line-through mr-1 text-left">
                $200
              </span>
              <span className="preco-atual font-semibold text-black text-left">
                $100
              </span>
            </p>
          </div>

          <div className="w-[250px] p-5 text-[18px] text-[#474747] bg-[#f9f8fe]">
            <img
              className="w-[200px] mb-5 rounded shadow-md bg-white"
              src={TenisCard}
              alt="tenis nike"
            />
            <h3 className="text-left text-[12px] text-[#8f8f8f] font-semibold">
              Tênis
            </h3>
            <p>K-Swiss V8 - Masculino</p>
            <p className="preco">
              <span className="preco-antigo line-through mr-1 text-left">
                $200
              </span>
              <span className="preco-atual font-semibold text-black text-left">
                $100
              </span>
            </p>
          </div>

          <div className="w-[250px] p-5 text-[18px] text-[#474747] bg-[#f9f8fe]">
            <img
              className="w-[200px] mb-5 rounded shadow-md bg-white"
              src={TenisCard}
              alt="tenis nike"
            />
            <h3 className="text-left text-[12px] text-[#8f8f8f] font-semibold">
              Tênis
            </h3>
            <p>K-Swiss V8 - Masculino</p>
            <p className="preco">
              <span className="preco-antigo line-through mr-1 text-left">
                $200
              </span>
              <span className="preco-atual font-semibold text-black text-left">
                $100
              </span>
            </p>
          </div>

          <div className="w-[250px] p-5 text-[18px] text-[#474747] bg-[#f9f8fe]">
            <img
              className="w-[200px] mb-5 rounded shadow-md bg-white"
              src={TenisCard}
              alt="tenis nike"
            />
            <h3 className="text-left text-[12px] text-[#8f8f8f] font-semibold">
              Tênis
            </h3>
            <p>K-Swiss V8 - Masculino</p>
            <p className="preco">
              <span className="preco-antigo line-through mr-1 text-left">
                $200
              </span>
              <span className="preco-atual font-semibold text-black text-left">
                $100
              </span>
            </p>
          </div>

          <div className="w-[250px] p-5 [18px] text-[#474747] bg-[#f9f8fe]">
            <img
              className="w-[200px] mb-5 rounded shadow-md bg-white"
              src={TenisCard}
              alt="tenis nike"
            />
            <h3 className="text-left text-[12px] text-[#8f8f8f] font-semibold">
              Tênis
            </h3>
            <p>K-Swiss V8 - Masculino</p>
            <p className="preco">
              <span className="preco-antigo line-through mr-1 text-left">
                $200
              </span>
              <span className="preco-atual font-semibold text-black text-left">
                $100
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white mx-auto px-4 py-30 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="absolute w-[500px] h-[500px] bg-[#4200FF80] rounded-full z-0"></div>

          <img
            className="relative z-10 w-[600px]"
            src={LayeBanner}
            alt="tenis nike"
          />
        </div>

        <div className="flex-1">
          <p className="text-[#C92071] font-semibold mb-2">Oferta especial</p>
          <h2 className="text-[48px] text-[#474747] font-bold leading-tight mb-4">
            Air Jordan edição de colecionador
          </h2>
          <p className="text-[#474747] text-[16px] mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            necessitatibus odio eaque accusamus eius nam excepturi eum veritatis
            tenetur. Consequatur blanditiis magnam aliquam, alias totam at odit
            amet sequi provident!
          </p>
          <button className="bg-[#C92071] hover:bg-[#a8185e] text-[#F5F5F5] font-semibold py-2 px-10 rounded-md">
            Ver Oferta
          </button>
        </div>
      </div>
    </div>
  );
}
