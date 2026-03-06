import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const user = {name: 'Ivan Hernandez'}
    const navigate = useNavigate()

    const logoutUser = () => {
        navigate('/')
    }

  return (
    <div className='shadow bg-white'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
        <Link>
            <img src="/logo.svg" alt="Logo" className='h-11 w-auto' />
        </Link>

        <div className='flex items-center gap-4 text-sm'>
            <p className='max-sm:hidden'>Hola, {user?.name}</p>
            <button onClick={logoutUser} className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors'>
                Cerrar sesión
            </button>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
