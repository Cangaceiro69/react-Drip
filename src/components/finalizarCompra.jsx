import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FinalizarCompra() {
  const navigate = useNavigate();

  // Estados dos campos do usuário
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [complemento, setComplemento] = useState("");
  const [titularCartao, setTitularCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validadeCartao, setValidadeCartao] = useState("");
  const [cvv, setCvv] = useState("");

  // Estado para dados do produto
  const [produto, setProduto] = useState(null);

  // Exemplo de useEffect para carregar dados do backend ao montar o componente
  useEffect(() => {
    // Buscar dados do produto
    fetch("https://api.exemplo.com/produto/123") // substitua pela sua URL real
      .then((res) => res.json())
      .then((data) => {
        // data esperado: { nome: "Tênis Nike Revolution", imagem: "url_da_imagem", preco: 249.00, ... }
        setProduto(data);
      })
      .catch((err) => console.error("Erro ao buscar produto:", err));

    // Buscar dados iniciais do usuário (por exemplo, logado)
    fetch("https://api.exemplo.com/usuario/perfil")
      .then((res) => res.json())
      .then((user) => {
        setNome(user.nome || "");
        setEndereco(user.endereco || "");
        setBairro(user.bairro || "");
        setCidade(user.cidade || "");
        setCep(user.cep || "");
        setEmail(user.email || "");
        setCelular(user.celular || "");
      })
      .catch((err) => console.error("Erro ao buscar usuário:", err));
  }, []);

  // ... aqui as funções para formatar campos e handlePagamento continuam iguais

  // Se produto ainda não carregou, pode mostrar um loading simples
  if (!produto) {
    return <div>Carregando produto...</div>;
  }

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
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Insira seu nome"
                className="border border-gray-300 px-4 py-2 rounded w-full outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {/* Demais inputs continuam iguais */}
              {/* ... */}
            </div>
          </div>

          {/* Informações de Entrega */}
          <div className="bg-white p-6 rounded-xl shadow">
            {/* campos de endereço continuam iguais com valores vindo do estado */}
          </div>

          {/* Informações de Pagamento */}
          <div className="bg-white p-6 rounded-xl shadow">
            {/* campos de pagamento continuam iguais */}
          </div>

          {/* Total e botão */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row items-center justify-between">
            <div>
              <p className="text-sm">Total</p>
              <p className="text-lg font-bold text-red-500">
                R$ {produto.preco - (produto.desconto || 0)},00
              </p>
              <p className="text-xs text-gray-500">
                ou 10x de R${" "}
                {((produto.preco - (produto.desconto || 0)) / 10).toFixed(2)}{" "}
                sem juros
              </p>
            </div>
            <button
              onClick={handlePagamento}
              className="mt-4 md:mt-0 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded cursor-pointer"
            >
              Realizar Pagamento
            </button>
          </div>
        </div>

        {/* Resumo */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-sm font-bold mb-4">RESUMO</h2>
          <div className="flex items-center gap-4 border-b pb-4">
            <img
              src={produto.imagem}
              alt="Produto"
              className="w-14 h-14 rounded"
            />
            <p className="text-xs font-medium">{produto.nome}</p>
          </div>
          <div className="text-sm mt-4 space-y-2 border-b pb-4">
            <p className="flex justify-between">
              <span>Subtotal:</span> <span>R$ {produto.preco},00</span>
            </p>
            <p className="flex justify-between">
              <span>Frete:</span> <span>R$ {produto.frete || "0,00"}</span>
            </p>
            <p className="flex justify-between">
              <span>Descontos:</span>{" "}
              <span>R$ {produto.desconto || "0,00"}</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm">Total</p>
            <p className="text-xl font-bold text-red-500">
              R$ {produto.preco - (produto.desconto || 0)},00
            </p>
            <p className="text-xs text-gray-500">
              ou 10x de R${" "}
              {((produto.preco - (produto.desconto || 0)) / 10).toFixed(2)} sem
              juros
            </p>
            <button
              onClick={handlePagamento}
              className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded cursor-pointer"
            >
              Realizar Pagamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
