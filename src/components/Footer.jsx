import logo from "../assets/logo-footer.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white px-10 py-12 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Coluna 1 - Logo e descrição */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Digital Store Logo" className="h-6 w-auto" />
            <h2 className="text-xl font-semibold">Digital Store</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex items-center gap-4 mt-4 text-gray-400">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Coluna 2 - Informação */}
        <div>
          <h3 className="font-semibold mb-4">Informação</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Sobre Drip Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Segurança
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Trabalhe conosco
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Meus Pedidos
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 - Categorias */}
        <div>
          <h3 className="font-semibold mb-4">Categorias</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Camisetas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Calças
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Bonés
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Headphones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tênis
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4 - Contato */}
        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <address className="text-gray-400 not-italic leading-relaxed">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
            <br />
            <br />
            (85) 3051-3411
          </address>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-xs">
        © 2022 Digital College
      </div>
    </footer>
  );
}
