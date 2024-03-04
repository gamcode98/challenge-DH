
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom'

function Header () {
  return (
    <>
      <header className='fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white bg-opacity-70 z-10'>
        <nav className='hidden md:block'>
          <ul className='flex'>
            <Link to="/"><li className='mr-4'>Inicio</li></Link>
            <Link to="/applicants"><li className='mr-4'>Lista</li></Link>
            <Link to="/create-applicant"><li>Agregar Aplicante</li></Link>
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
