import Img from "../assets/produc-image-1.jpeg";

const PerfilEPedidos = () => {
  const pedidos = [
    {
      id: "2234981932",
      status: "Produto em trânsito",
      statusColor: "text-yellow-500",
    },
    { id: "4459810492", status: "Finalizado", statusColor: "text-gray-400" },
    { id: "4459810492", status: "Cancelado", statusColor: "text-rose-500" },
    { id: "4459810492", status: "Finalizado", statusColor: "text-gray-400" },
    { id: "4459810492", status: "Finalizado", statusColor: "text-gray-400" },
  ];

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

      {/* Conteúdo dos pedidos */}
      <section className="flex-1 bg-white border rounded-md md:ml-8 p-4 md:p-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="font-semibold text-sm text-[#474747]">Meus Pedidos</h2>
          <span className="font-semibold text-sm text-[#474747] hidden md:block">
            STATUS
          </span>
        </div>

        {pedidos.map((pedido, index) => (
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
      </section>
    </main>
  );
};

export default PerfilEPedidos;
