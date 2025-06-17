import { Link } from "react-router-dom";
import tenisImg from "../assets/teniscard.png";

const FormularioConta = () => {
  return (
    <div className="flex flex-col md:flex-row px-6 md:px-20 py-10 gap-10 bg-gradient-to-r from-[#EFEFFF] to-[#B5B6F2]">
      {/* Formulário */}
      <div className="shadow p-10 w-full max-w-2xl mx-auto bg-white border-2 hover:border-blue-500 rounded-sm">
        <form className="space-y-5">
          <h1 className="text-4xl font-bold mb-6 px-6 mt-6 text-black">
            Crie sua conta
          </h1>

          <p className="text-black font-medium mb-4">
            Já possui uma conta? Entre{" "}
            <Link
              to="/Login"
              className="hover:underline text-black font-medium"
            >
              aqui.
            </Link>
          </p>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              placeholder="Insira seu email"
              className="rounded-sm w-full bg-gray-100 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white py-3 rounded-md font-semibold bg-rose-500 hover:bg-rose-600 transition duration-200"
          >
            Criar Conta
          </button>

          <div className="mt-6 flex flex-row justify-center gap-5">
            <p className="text-gray-600 font-medium mb-3">Ou faça login com</p>
            <div className="flex justify-center gap-4">
              <button type="button">
                <img
                  src="https://img.icons8.com/?size=96&id=P7UIlhbpWzZm&format=png"
                  alt="Login com Gmail"
                  className="w-8 h-9"
                />
              </button>
              <button type="button">
                <img
                  src="https://img.icons8.com/?size=96&id=13912&format=png"
                  alt="Login com Facebook"
                  className="w-8 h-9"
                />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Imagem lateral */}
      <div className="w-full md:w-[35em] h-[35rem] flex items-center justify-center">
        <img
          src={tenisImg}
          alt="Tênis Nike Drip"
          className="w-full rounded-sm"
        />
      </div>
    </div>
  );
};

export default FormularioConta;
