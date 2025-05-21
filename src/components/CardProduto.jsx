import TenisCard from "./assets/teniscard.png";

export default function CardProduto() {
    return (
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
    );
}