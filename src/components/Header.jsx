import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className='flex justify-between items-center bg-teal-dark pl-3 h-12'>
        <img src={logo} alt="Logo" className="h-12" />
        <div className='flex justify-around items-center h-full'>
            <a className='flex items-center text-white text-xl font-semibold border-x-2 border-gray-100 px-4 h-full hover:bg-teal-800' href='/mapa'>Mapa</a>
            <a className='flex items-center text-white text-xl font-semibold px-4 h-full hover:bg-teal-800' href='/tabla'>Tabla</a>
            <a className='flex items-center text-white text-xl font-semibold border-l-2 border-gray-100 px-4 h-full hover:bg-teal-800' href='/mapa-calor'>Mapa de calor</a>
        </div>
    </div>
  )
}

export default Header