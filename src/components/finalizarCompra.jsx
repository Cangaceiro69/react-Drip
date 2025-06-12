import { useState } from "react";
import img1 from "../assets/produc-image-1.jpeg";

export default function FinalizarCompra() {
  const [cpf, setCpf] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [validadeCartao, setValidadeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 11);
    if (value.length > 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    } else if (value.length > 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (value.length > 3) {
      value = value.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }
    setCpf(value);
  };

  const handleCelularChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 11);
    if (value.length > 10) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    }
    setCelular(value);
  };

  const handleCepChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 8);
    setCep(value);
  };

  const handleValidadeCartaoChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setValidadeCartao(value);
  };

  const handleNumeroCartaoChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setNumeroCartao(value);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCvv(value);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8 text-sm">
      <h1 className="text-xl font-bold mb-6">Finalizar Compra</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
          {/* Informações Pessoais */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-sm font-bold mb-4 border-b pb-2">
              Informações Pessoais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                placeholder="Insira seu nome"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                required
                value={cpf}
                onChange={handleCpfChange}
                placeholder="Insira seu CPF"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                required
                placeholder="Insira seu email"
                type="email"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                required
                value={celular}
                onChange={handleCelularChange}
                placeholder="Insira seu celular"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* Informações de Entrega */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-sm font-bold mb-4 border-b pb-2">
              Informações de Entrega
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                placeholder="Insira seu endereço"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                required
                placeholder="Insira seu bairro"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                required
                placeholder="Insira sua cidade"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                required
                value={cep}
                onChange={handleCepChange}
                placeholder="Insira seu CEP"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                placeholder="Insira complemento"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400 col-span-2"
              />
            </div>
          </div>

          {/* Informações de Pagamento */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-sm font-bold mb-4 border-b pb-2">
              Informações de Pagamento
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" name="pagamento" defaultChecked /> Cartão
                  de Crédito
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input type="radio" name="pagamento" /> Boleto Bancário
                </label>
              </div>
              <input
                required
                placeholder="Insira o nome do Cartão"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  value={numeroCartao}
                  onChange={handleNumeroCartaoChange}
                  placeholder="Insira número do Cartão"
                  className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  required
                  value={validadeCartao}
                  onChange={handleValidadeCartaoChange}
                  placeholder="Validade do Cartão"
                  className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <input
                required
                value={cvv}
                onChange={handleCvvChange}
                placeholder="CVV"
                className="border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-yellow-400 w-full md:w-1/2"
              />
            </div>
          </div>

          {/* Total e botão */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row items-center justify-between">
            <div>
              <p className="text-sm">Total</p>
              <p className="text-lg font-bold text-red-500">R$ 219,00</p>
              <p className="text-xs text-gray-500">
                ou 10x de R$ 21,00 sem juros
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded cursor-pointer">
              Realizar Pagamento
            </button>
          </div>
        </div>

        {/* Resumo */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-sm font-bold mb-4">RESUMO</h2>
          <div className="flex items-center gap-4 border-b pb-4">
            <img src={img1} alt="Produto" className="w-14 h-14 rounded" />
            <p className="text-xs font-medium">
              Tênis Nike Revolution 6 Next Nature Masculino
            </p>
          </div>
          <div className="text-sm mt-4 space-y-2 border-b pb-4">
            <p className="flex justify-between">
              <span>Subtotal:</span> <span>R$ 249,00</span>
            </p>
            <p className="flex justify-between">
              <span>Frete:</span> <span>R$ 0,00</span>
            </p>
            <p className="flex justify-between">
              <span>Descontos:</span> <span>R$ 30,00</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm">Total</p>
            <p className="text-xl font-bold text-red-500">R$ 219,00</p>
            <p className="text-xs text-gray-500">
              ou 10x de R$ 21,00 sem juros
            </p>
            <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded cursor-pointer">
              Realizar Pagamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
