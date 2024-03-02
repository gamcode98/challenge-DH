import './css/header.css'
import { Outlet } from 'react-router-dom'

function Header () {
  return (
    <>
      <header className='fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white bg-opacity-70'>
        <nav>
          <ul className='flex'>
            <li className='mr-4'>Inicio</li>
            <li className='mr-4'>Lista</li>
            <li>Agregar Aplicante</li>
          </ul>
        </nav>
        <div>
          <h1>
            <a href='home.html' className='text-3xl text-black font-bold no-underline'>
              RECRUITING
            </a>
          </h1>
        </div>
      </header>
      <Outlet />
    </>
  )
}
export default Header
