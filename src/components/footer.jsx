export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo e Descrição */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Drip Store</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            sequi, magnam quibusdam inventore doloribus hic cupiditate culpa
            nostrum excepturi! Quibusdam quisquam natus totam sapiente cumque
            tempora, doloremque corrupti eum sed.
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Produtos
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Ajuda */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Ajuda</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Suporte
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Termos de Serviço
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Facebook */}
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 ..."></path>
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832..."></path>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c-5.488 0-9.937..."></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}