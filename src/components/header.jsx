import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Drip Store
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">Início</a>
          <a href="#" className="text-gray-400 hover:text-white">Produtos</a>
          <a href="#" className="text-gray-400 hover:text-white">Sobre Nós</a>
          <a href="#" className="text-gray-400 hover:text-white">Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-400 hover:text-white focus:outline-none" aria-label="Abrir menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;