import logo from "../assets/logo-header.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-pink-700 font-bold text-xl">
          <img
            src={logo}
            alt="Logo Digital Store"
            className="w-7rem h-7 rounded-md"
          />
        </div>

        {/* Search bar */}
        <div className="hidden lg:flex flex-1 mx-10">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-full max-w-xl">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              className="bg-transparent flex-grow outline-none text-sm text-gray-700 placeholder-gray-400"
            />
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
        </div>

        {/* Auth and cart */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm underline text-gray-700">
            Cadastre-se
          </a>
          <button className="bg-pink-700 text-white text-sm px-4 py-2 rounded-md hover:bg-pink-800 cursor-pointer">
            Entrar
          </button>
          <button className="text-pink-700 hover:text-pink-800 relative">
            <FontAwesomeIcon icon={faCartShopping} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="container mx-auto flex space-x-8 text-sm font-medium px-6 mt-2">
        <a href="/" className="text-pink-700 border-b-2 border-pink-700 pb-1">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-pink-700">
          Produtos
        </a>
        <a href="#" className="text-gray-700 hover:text-pink-700">
          Categorias
        </a>
        <a href="#" className="text-gray-700 hover:text-pink-700">
          Meus Pedidos
        </a>
      </nav>
    </header>
  );
}
