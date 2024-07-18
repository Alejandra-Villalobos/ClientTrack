import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center bg-teal-dark pl-3 h-12 top-0 left-0">
      <img src={logo} alt="Logo" className="h-12" />
      <div className="sm:flex justify-around items-center h-full hidden">
        <a
          className="flex items-center text-white text-xl font-semibold border-x-2 border-gray-100 px-4 h-full hover:bg-teal-800"
          href="/mapa"
        >
          Mapa
        </a>
        <a
          className="flex items-center text-white text-xl font-semibold px-4 h-full hover:bg-teal-800"
          href="/tabla"
        >
          Tabla
        </a>
        <a
          className="flex items-center text-white text-xl font-semibold border-x-2 border-gray-100 px-4 h-full hover:bg-teal-800"
          href="/mapa-calor"
        >
          Mapa de calor
        </a>
        <button
          className="flex items-center gap-2 text-white text-2xl h-full font-semibold hover:bg-teal-800 px-4"
          onClick={handleLogout}
        >
          <MdLogout size={25} />
          Cerrar sesión
        </button>
      </div>
      <div className="sm:hidden pr-3" onClick={() => setShowMenu(!showMenu)}>
        <IoMdMenu size={30} color="white" />
        {showMenu && (
          <div
            className={`z-50 absolute pt-4 top-12 right-0 bg-teal-dark w-full bg-opacity-80 backdrop-blur-sm h-full gap-4 flex flex-col items-center ${
              showMenu ? "animate-slideIn" : "animate-slideOut"
            }`}
          >
            <a
              className="text-white text-2xl font-semibold hover:bg-teal-800"
              href="/mapa"
            >
              Mapa
            </a>
            <a
              className="text-white text-2xl font-semibold hover:bg-teal-800"
              href="/tabla"
            >
              Tabla
            </a>
            <a
              className="text-white text-2xl font-semibold hover:bg-teal-800"
              href="/mapa-calor"
            >
              Mapa de calor
            </a>
            <button
              className="flex items-center gap-2 text-white text-2xl h-full font-semibold hover:bg-teal-800 py-12"
              onClick={handleLogout}
            >
              <MdLogout size={25} />
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
