import { Link } from "react-router-dom";
import tenis from "../assets/teniscard.png";

export default function Login() {
  return (
    <main className="bg-gradient-to-r from-[#EFEFFF] to-[#B5B6F2] flex flex-col md:flex-row px-6 md:px-20 py-10 gap-10 min-h-screen">
      {/* Formulário */}
      <div className="shadow p-10 w-full max-w-2xl mx-auto bg-white border-2 hover:border-blue-500 rounded-sm">
        <form className="space-y-5">
          <h1 className="text-4xl font-bold mb-6 px-6 mt-6 text-black">
            Acesse sua conta
          </h1>

          <p className="text-black font-medium mb-4 cursor-pointer">
            Novo cliente? Então registre-se{" "}
            <Link
              to="/Cadastro"
              className="hover:underline text-black font-medium"
            >
              aqui.
            </Link>
          </p>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Login*
            </label>
            <input
              type="email"
              placeholder="Insira seu login ou email"
              className="rounded-sm w-full bg-gray-100 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Senha*
            </label>
            <input
              type="password"
              placeholder="Insira sua senha"
              className="rounded-sm w-full bg-gray-100 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="button"
            className="text-sm text-black hover:underline font-medium cursor-pointer"
          >
            Esqueci minha senha
          </button>

          <button
            type="submit"
            className="w-full text-white py-3 rounded-md font-semibold bg-rose-500 hover:bg-rose-600 transition duration-200 cursor-pointer"
          >
            Acessar Conta
          </button>

          <div className="mt-6">
            <p className="text-gray-600 font-medium mb-3 text-center">
              Ou faça login com
            </p>
            <div className="flex justify-center gap-4">
              <button type="button">
                <img
                  src="https://img.icons8.com/?size=96&id=P7UIlhbpWzZm&format=png"
                  alt="Login com Gmail"
                  className="w-8 h-9 cursor-pointer"
                />
              </button>
              <button type="button">
                <img
                  src="https://img.icons8.com/?size=96&id=13912&format=png"
                  alt="Login com Facebook"
                  className="w-8 h-9 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Imagem lateral */}
      <div className="w-full md:w-[45rem] h-[20rem] md:h-[45rem] flex items-center justify-center">
        <img src={tenis} alt="Tênis" className="w-full h-full object-contain" />
      </div>
    </main>
  );
}
