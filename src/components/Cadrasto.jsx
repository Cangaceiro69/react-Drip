import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const location = useLocation();
  const navigate = useNavigate();

  const emailFromForm = location.state?.email || "";

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState(""); // novo estado para senha
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState(emailFromForm);
  const [celular, setCelular] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [complemento, setComplemento] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const formatCpf = (value) => {
    const onlyNums = value.replace(/\D/g, "").slice(0, 11);
    return onlyNums
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const handleCpfChange = (e) => setCpf(formatCpf(e.target.value));

  const formatCelular = (value) => {
    const onlyNums = value.replace(/\D/g, "").slice(0, 11);
    return onlyNums.length <= 10
      ? onlyNums
          .replace(/(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{4})(\d)/, "$1-$2")
      : onlyNums
          .replace(/(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{5})(\d)/, "$1-$2");
  };

  const handleCelularChange = (e) => setCelular(formatCelular(e.target.value));

  const formatCep = (value) => {
    const onlyNums = value.replace(/\D/g, "").slice(0, 8);
    return onlyNums.replace(/(\d{5})(\d)/, "$1-$2");
  };

  const handleCepChange = (e) => setCep(formatCep(e.target.value));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = {
      nome,
      senha, // enviar senha para o backend
      cpf,
      email,
      celular,
      endereco,
      bairro,
      cidade,
      cep,
      complemento,
      newsletter,
    };

    try {
      const response = await fetch("https://seu-backend-api.com/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!response.ok) throw new Error("Erro ao cadastrar");

      // Redireciona para a página inicial
      navigate("/");
    } catch (err) {
      console.error("Erro no cadastro:", err);
      alert("Ocorreu um erro ao tentar criar a conta.");
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-8 bg-[#fcfbff]">
      <h1 className="text-2xl font-bold text-[#1f1f1f] mb-6">Criar Conta</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 bg-white border border-gray-200 rounded-md p-6"
      >
        <div>
          <p className="text-sm font-semibold text-[#1f1f1f] mb-4">
            Informações Pessoais
          </p>

          <label className="text-xs font-semibold text-[#1f1f1f]">
            Nome Completo *
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Insira seu nome"
            required
            className="w-full mt-1 mb-4 rounded-md bg-[#fcfbff] border px-4 py-2 text-xs"
          />

          <label className="text-xs font-semibold text-[#1f1f1f]">
            Senha *
          </label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Insira sua senha"
            required
            className="w-full mt-1 mb-4 rounded-md bg-[#fcfbff] border px-4 py-2 text-xs"
          />

          <label className="text-xs font-semibold text-[#1f1f1f]">CPF *</label>
          <input
            type="text"
            value={cpf}
            onChange={handleCpfChange}
            placeholder="999.999.999-99"
            required
            className="w-full mt-1 mb-4 rounded-md bg-[#fcfbff] border px-4 py-2 text-xs"
          />

          <label className="text-xs font-semibold text-[#1f1f1f]">
            E-mail *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu email"
            required
            className="w-full mt-1 mb-4 rounded-md bg-[#fcfbff] border px-4 py-2 text-xs"
          />

          <label className="text-xs font-semibold text-[#1f1f1f]">
            Celular *
          </label>
          <input
            type="text"
            value={celular}
            onChange={handleCelularChange}
            placeholder="(99) 99999-9999"
            required
            className="w-full mt-1 mb-4 rounded-md bg-[#fcfbff] border px-4 py-2 text-xs"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-[#1f1f1f] mb-4">
            Informações de Entrega
          </p>

          <label className="text-xs font-semibold text-[#1f1f1f]">
            Endereço *
          </label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="Insira seu endereço"
            required
            className="w-full mt-1 mb-4 rounded-md bg-[#fcfbff] border px-4 py-2 text-xs"
          />

          <label className="text-xs font-semibold text-[#1f1f1f]">
            Bairro *
          </label>
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            placeholder="Insira seu bairro"
            required
            className="w-full mt-1 mb-4 rounded-md bg-[#fcfbff] border px-4 py-2 text-xs"
          />

          <label className="text-xs font-semibold text-[#1f1f1f]">
            Cidade *
          </label>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Insira sua cidade"
            required
            className="w-full mt-1 mb-4 rounded-md bg-[#fcfbff] border px-4 py-2 text-xs"
          />

          <label className="text-xs font-semibold text-[#1f1f1f]">CEP *</label>
          <input
            type="text"
            value={cep}
            onChange={handleCepChange}
            placeholder="99999-999"
            required
            className="w-full mt-1 mb-4 rounded-md bg-[#fcfbff] border px-4 py-2 text-xs"
          />

          <label className="text-xs font-semibold text-[#1f1f1f]">
            Complemento
          </label>
          <input
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            placeholder="Insira complemento"
            className="w-full mt-1 mb-4 rounded-md bg-[#fcfbff] border px-4 py-2 text-xs"
          />

          <div className="flex items-start gap-2 mb-4">
            <input
              type="checkbox"
              id="newsletter"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="accent-[#c92071]"
            />
            <label htmlFor="newsletter" className="text-[10px] text-[#474747]">
              Quero receber por email ofertas e novidades das lojas da Digital
              Store.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white py-2 rounded-md font-semibold bg-[#c92071] hover:bg-[#a0185b] transition"
        >
          Criar Conta
        </button>
      </form>
    </main>
  );
}
