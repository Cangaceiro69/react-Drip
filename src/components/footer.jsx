import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo e Descrição */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Drip Store</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi, magnam quibusdam inventore
            doloribus hic cupiditate culpa nostrum excepturi! Quibusdam quisquam natus totam sapiente cumque
            tempora, doloremque corrupti eum sed.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Início</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Produtos</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Sobre Nós</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
          </ul>
        </div>

        {/* Ajuda */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ajuda</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Suporte</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Termos de Serviço</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
          <div className="flex space-x-4">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0zM7.188 20.452H3.547V9.045h3.641v11.407zM5.368 7.462c-1.165 0-2.11-.945-2.11-2.11s.945-2.11 2.11-2.11 2.11.945 2.11 2.11-.945 2.11-2.11 2.11zm15.084 12.99h-3.641v-5.605c0-1.337-.027-3.06-1.865-3.06-1.865 0-2.151 1.457-2.151 2.961v5.704h-3.641V9.045h3.494v1.561h.05"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124C7.88 8.31 3.998 6.11 1.57 3.13c-.423.725-.666 1.562-.666 2.457 0 1.694.863 3.188 2.173 4.065a4.934 4.934 0 0 1-2.213-.616v.062c0 2.366 1.684 4.342 3.918 4.788a4.936 4.936 0 0 1-1.287.171c-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.014-.637a10.056 10.056 0 0 0 2.457-2.549z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c-5.488 0-9.937 4.448-9.937 9.937 0 4.389 3.584 8.032 8.207 8.032.599 0 1.188-.07 1.762-.207V2.163z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;