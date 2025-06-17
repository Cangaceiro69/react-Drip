import { useState } from "react";

export default function Cadastro() {
  const [cpf, setCpf] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");

  const formatCpf = (value) => {
    const onlyNums = value.replace(/\D/g, "").slice(0, 11);
    return onlyNums
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const handleCpfChange = (e) => {
    const value = e.target.value;
    setCpf(formatCpf(value));
  };

  const formatCelular = (value) => {
    const onlyNums = value.replace(/\D/g, "").slice(0, 11);
    if (onlyNums.length <= 10) {
      return onlyNums
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      return onlyNums
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
  };

  const handleCelularChange = (e) => {
    const value = e.target.value;
    setCelular(formatCelular(value));
  };

  const formatCep = (value) => {
    const onlyNums = value.replace(/\D/g, "").slice(0, 8);
    return onlyNums.replace(/(\d{5})(\d)/, "$1-$2");
  };

  const handleCepChange = (e) => {
    const value = e.target.value;
    setCep(formatCep(value));
  };

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-8 bg-[#fcfbff]">
      <h1 className="text-xl md:text-2xl font-bold text-[#1f1f1f] mb-6">
        Criar Conta
      </h1>

      {/* Informações Pessoais */}
      <div className="bg-white w-full max-w-md rounded-md border border-gray-200 mb-6">
        <div className="border-b border-gray-300 px-6 py-4">
          <p className="text-sm font-semibold text-[#1f1f1f]">
            Informações Pessoais
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-[#1f1f1f]">
              Nome Completo *
            </label>
            <input
              type="text"
              placeholder="Insira seu nome"
              required
              className="w-full mt-1 rounded-md bg-[#fcfbff] border border-gray-200 px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#c92071]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#1f1f1f]">
              CPF *
            </label>
            <input
              type="text"
              placeholder="999.999.999-99"
              value={cpf}
              onChange={handleCpfChange}
              required
              className="w-full mt-1 rounded-md bg-[#fcfbff] border border-gray-200 px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#c92071]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#1f1f1f]">
              E-mail *
            </label>
            <input
              type="email"
              placeholder="Insira seu email"
              required
              className="w-full mt-1 rounded-md bg-[#fcfbff] border border-gray-200 px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#c92071]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#1f1f1f]">
              Celular *
            </label>
            <input
              type="text"
              placeholder="(99) 99999-9999"
              value={celular}
              onChange={handleCelularChange}
              required
              className="w-full mt-1 rounded-md bg-[#fcfbff] border border-gray-200 px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#c92071]"
            />
          </div>
        </div>
      </div>

      {/* Informações de Entrega */}
      <div className="bg-white w-full max-w-md rounded-md border border-gray-200 mb-6">
        <div className="border-b border-gray-300 px-6 py-4">
          <p className="text-sm font-semibold text-[#1f1f1f]">
            Informações de Entrega
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-[#1f1f1f]">
              Endereço *
            </label>
            <input
              type="text"
              placeholder="Insira seu endereço"
              required
              className="w-full mt-1 rounded-md bg-[#fcfbff] border border-gray-200 px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#c92071]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#1f1f1f]">
              Bairro *
            </label>
            <input
              type="text"
              placeholder="Insira seu bairro"
              required
              className="w-full mt-1 rounded-md bg-[#fcfbff] border border-gray-200 px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#c92071]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#1f1f1f]">
              Cidade *
            </label>
            <input
              type="text"
              placeholder="Insira sua cidade"
              required
              className="w-full mt-1 rounded-md bg-[#fcfbff] border border-gray-200 px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#c92071]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#1f1f1f]">
              CEP *
            </label>
            <input
              type="text"
              placeholder="99999-999"
              value={cep}
              onChange={handleCepChange}
              required
              className="w-full mt-1 rounded-md bg-[#fcfbff] border border-gray-200 px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#c92071]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[#1f1f1f]">
              Complemento
            </label>
            <input
              type="text"
              placeholder="Insira complemento"
              className="w-full mt-1 rounded-md bg-[#fcfbff] border border-gray-200 px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#c92071]"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 mr-2 accent-[#c92071]"
              id="newsletter"
            />
            <label
              htmlFor="newsletter"
              className="text-[10px] text-[#474747] font-medium"
            >
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </label>
          </div>

          <button
            type="submit"
            className="w-full text-white py-2 rounded-md font-semibold bg-[#c92071] hover:bg-[#a0185b] transition"
          >
            Criar Conta
          </button>
        </div>
      </div>
    </main>
  );
}
