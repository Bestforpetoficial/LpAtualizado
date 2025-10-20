import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoBFP from "../assets/Logo_BFP.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-red-900 border-b border-black/30 z-10 fixed top-0 left-0">
      {/* Logo da empresa */}
      <Link to="/" className="flex items-center mr-4">
        <img src={LogoBFP} alt="Logo da Empresa" className="h-[4rem] sm:h-18 w-auto" />
      </Link>

      {/* Menu Hamburguer para dispositivos móveis */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Menu Lateral */}
      <div
        className={`fixed top-0 left-0 h-1/2 bg-gray-800 text-white w-3/5 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ zIndex: 999 }}
      >
        <div className="flex flex-col p-6 space-y-6">
          <ul className="space-y-4 items-center text-center">
            <li><Link to="/Beneficio" className="text-lg hover:text-yellow-500" onClick={closeMenu}>Benefícios</Link></li>
            <li><Link to="https://www.bestforpet.com.br/" target="_blank" className="text-lg hover:text-yellow-500" onClick={closeMenu}>Cardápio</Link></li>
            <li><Link to="/Midia" className="text-lg hover:text-yellow-500" onClick={closeMenu}>Mídia</Link></li>
            <li><Link to="/Depoimento" className="text-lg hover:text-yellow-500" onClick={closeMenu}>Depoimento</Link></li>
            <li><Link to="/Calculo" className="text-lg hover:text-yellow-500" onClick={closeMenu}>Cálculo</Link></li>
          </ul>

          {/* Ícones das redes sociais */}
          <div className="mt-auto flex space-x-6 justify-center">
            <Link to="https://www.facebook.com/bestforpetoficial?mibextid=LQQJ4d&rdid=wBGEhxyWDYZr10OI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1gh83cNnqjXtToYa%2F%3Fmibextid%3DLQQJ4d" target="_blank" onClick={closeMenu}>
              <FaFacebook className="text-3xl hover:text-blue-500 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-[#2525fd] text-white p-1 rounded-full" />
            </Link>
            <Link to="https://api.whatsapp.com/send?phone=5519996042970&text=" target="_blank" onClick={closeMenu}>
              <FaWhatsapp className="text-3xl hover:text-green-600 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-[#08cf08] text-white p-1 rounded-full" />
            </Link>
            <Link to="https://www.instagram.com/bestforpetoficial/?igsh=MXd2andhYjU2YzJ0eQ%3D%3D#" target="_blank" onClick={closeMenu}>
              <FaInstagram className="text-3xl hover:text-pink-500 transition-all duration-300 hover:shadow-lg hover:scale-105  bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white p-1 rounded-full" />
            </Link>
          </div>
        </div>
      </div>

      {/* Menu horizontal para telas grandes */}
      <div className="hidden sm:flex space-x-6 items-center">
        <ul className="flex space-x-10 mr-52">
          <li><Link to="/Beneficio" className="text-lg hover:text-yellow-500 text-white duration-300">Benefícios</Link></li>
          <li><Link to="https://www.bestforpet.com.br/" target="_blank" className="text-lg hover:text-yellow-500 text-white duration-300">Cardápio</Link></li>
          <li><Link to="/Midia" className="text-lg hover:text-yellow-500 text-white duration-300">Mídia</Link></li>
          <li><Link to="/Depoimento" className="text-lg hover:text-yellow-500 text-white duration-300">Depoimento</Link></li>
          <li><Link to="/Calculo" className="text-lg hover:text-yellow-500 text-white duration-300">Cálculo</Link></li>
        </ul>

        {/* Ícones sociais no menu horizontal para telas grandes */}
        <div className="flex space-x-6">
          <Link to="https://www.facebook.com/bestforpetoficial?mibextid=LQQJ4d&rdid=z1KW9QlbjB2kxNSh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1gh83cNnqjXtToYa%2F%3Fmibextid%3DLQQJ4d" target="_blank">
            <FaFacebook className="text-2xl text-white hover:scale-125 transition-all duration-700 hover:rotate-360 bg-[#2525fd] rounded-sm flex h-7 w-7 p-1" />
          </Link>
          <Link to="https://api.whatsapp.com/message/O7OXIRLLBCPLM1?autoload=1&app_absent=0" target="_blank">
            <FaWhatsapp className="text-2xl text-white hover:scale-125 transition-all duration-700 hover:rotate-360 bg-[#08cf08] rounded-sm h-7 w-7 shadow-lg p-1" />
          </Link>
          <Link to="https://www.instagram.com/bestforpetoficial/?igsh=MXd2andhYjU2YzJ0eQ%3D%3D#" target="_blank" >
            <FaInstagram className="text-2xl text-white hover:scale-125 transition-all duration-700 hover:rotate-360 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-sm h-7 w-7 p-1" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
