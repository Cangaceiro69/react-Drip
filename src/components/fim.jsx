import { useNavigate, useLocation } from "react-router-dom";
import img1 from "../assets/produc-image-1.jpeg";

export default function CompraRealizada() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    nome,
    cpf,
    email,
    celular,
    endereco,
    bairro,
    cidade,
    cep,
    titularCartao,
    finalCartao,
  } = state || {};

  return (
    <div className="bg-[#FAF9FF] min-h-screen p-8">
      <div className="bg-white max-w-3xl mx-auto p-8 rounded-xl shadow">
        <div className="flex flex-col items-center">
          <span className="text-3xl">🎉</span>
          <h1 className="text-2xl font-bold text-center mt-2">
            Compra Realizada <br /> com sucesso!
          </h1>
        </div>

        {/* Informações Pessoais */}
        <div className="mt-8 border-b pb-4">
          <h2 className="font-semibold text-sm mb-2">Informações Pessoais</h2>
          <p>Nome: {nome}</p>
          <p>CPF: {cpf}</p>
          <p>Email: {email}</p>
          <p>Celular: {celular}</p>
        </div>

        {/* Informações de Entrega */}
        <div className="mt-4 border-b pb-4">
          <h2 className="font-semibold text-sm mb-2">Informações de Entrega</h2>
          <p>Endereço: {endereco}</p>
          <p>Bairro: {bairro}</p>
          <p>Cidade: {cidade}</p>
          <p>CEP: {cep}</p>
        </div>

        {/* Informações de Pagamento */}
        <div className="mt-4 border-b pb-4">
          <h2 className="font-semibold text-sm mb-2">
            Informações de Pagamento
          </h2>
          <p>Titular do Cartão: {titularCartao}</p>
          <p>Final ********{finalCartao}</p>
        </div>

        {/* Resumo da Compra */}
        <div className="mt-4">
          <h2 className="font-semibold text-sm mb-4">Resumo da compra</h2>
          <div className="flex items-center gap-4 mb-4">
            <img src={img1} alt="Produto" className="w-14 h-14 rounded" />
            <p className="text-xs font-medium">
              Tênis Nike Revolution 6 Next Nature <br /> Masculino
            </p>
          </div>

          <div className="bg-[#FFF8EE] p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm">Total</p>
              <p className="text-xl font-bold">R$ 219,00</p>
            </div>
            <p className="text-xs text-right text-gray-500">
              ou 10x de R$ 21,00 sem juros
            </p>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-6 text-center">
          <button
            className="text-sm text-gray-500 underline cursor-pointer"
            onClick={() => window.print()}
          >
            Imprimir Recibo
          </button>

          <button
            onClick={() => navigate("/")}
            className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded cursor-pointer"
          >
            Voltar para Home
          </button>
        </div>
      </div>
    </div>
  );
}
