import React, { useEffect, useState } from "react";
import Img from "../assets/produc-image-1.jpeg";

const PerfilEPedidos = () => {
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando fetch do backend
    async function fetchPerfil() {
      try {
        // Exemplo de chamada real:
        // const response = await fetch("/api/perfil");
        // const data = await response.json();

        // Simulação de dados:
        const data = {
          nome: "João Silva",
          enderecos: ["Rua A, 123", "Av. B, 456"],
          pedidos: [
            {
              id: "2234981932",
              status: "Produto em trânsito",
              statusColor: "text-yellow-500",
            },
            {
              id: "4459810492",
              status: "Finalizado",
              statusColor: "text-gray-400",
            },
            {
              id: "4459810492",
              status: "Cancelado",
              statusColor: "text-rose-500",
            },
          ],
        };

        setPerfil(data);
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPerfil();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (!perfil) return <p>Erro ao carregar dados do perfil.</p>;

  return (
    <main className="flex flex-col md:flex-row px-4 md:px-8 py-8 bg-[#f9f8fc] min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-[18rem] bg-white border rounded-md mb-6 md:mb-0">
        <p className="px-6 py-4 font-semibold text-sm text-[#474747] border-b">
          Meu Perfil
        </p>
        <p className="px-6 py-4 font-semibold text-[#ED017F] border-b">
          Meus Pedidos
        </p>
        <p className="px-6 py-4 font-semibold text-[#474747] border-b hover:text-rose-500 cursor-pointer">
          Minhas Informações
        </p>
        <p className="px-6 py-4 font-semibold text-[#474747] hover:text-rose-500 cursor-pointer">
          Métodos de Pagamento
        </p>
      </aside>

      {/* Conteúdo do perfil e pedidos */}
      <section className="flex-1 bg-white border rounded-md md:ml-8 p-4 md:p-6">
        <h2 className="font-semibold text-lg mb-4 text-[#474747]">
          Olá, {perfil.nome}
        </h2>

        <div className="mb-6">
          <h3 className="font-semibold text-md text-[#474747] mb-2">
            Endereços:
          </h3>
          <ul className="list-disc list-inside text-sm text-[#9E9E9E]">
            {perfil.enderecos.map((endereco, i) => (
              <li key={i}>{endereco}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="font-semibold text-sm text-[#474747]">
              Meus Pedidos
            </h2>
            <span className="font-semibold text-sm text-[#474747] hidden md:block">
              STATUS
            </span>
          </div>

          {perfil.pedidos.map((pedido, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between md:items-center border-b py-6 gap-2"
            >
              <div className="flex gap-4 items-start md:items-center">
                <img
                  src={Img}
                  alt="Tênis"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <span className="text-[0.75rem] text-[#9E9E9E]">
                    Pedido nº {pedido.id}
                  </span>
                  <span className="text-sm font-semibold text-[#474747]">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:items-end">
                <span className="text-[0.75rem] text-[#9E9E9E] md:hidden">
                  STATUS
                </span>
                <span className={`text-sm font-semibold ${pedido.statusColor}`}>
                  {pedido.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PerfilEPedidos;
