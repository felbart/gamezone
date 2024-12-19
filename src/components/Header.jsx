import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { useTheme } from "../hooks/useTheme";
import logolight from '../assets/img/brand-logo-light.png';
import logodark from '../assets/img/brand-logo-dark.png';
import { Link } from "react-router-dom";

const Header = () => {

    const { theme, setTheme } = useTheme();

    return (
    <header className="w-full flex justify-between items-center py-4 fixed top-0 bg-slate-100/30 text-slate-800 backdrop-blur-lg dark:bg-slate-900/30 dark:text-slate-200 border-b-2">
      <div className="container flex items-center justify-between">
        <div className="w-[200px]">
            { theme === 'light' ? <img src={logodark} /> : <img src={logolight} /> }
        </div>
        <div className="flex justify-center items-center gap-4">
            <nav className="flex items-center justify-between gap-10">
                <ul className="flex items-center justify-between gap-10">
                    <li className="text-base font-semibold uppercase"><Link to='/' className='hover:text-primary-500 duration-300'>Home</Link></li>
                    <li className="text-base font-semibold uppercase"><Link to='destaques' className='hover:text-primary-500 duration-300'>Destaques</Link></li>
                    <li className="text-base font-semibold uppercase"><Link to='blog' className='hover:text-primary-500 duration-300'>Novidades</Link></li>
                    <li className="text-base font-semibold uppercase"><Link to='ofertas' className='hover:text-primary-500 duration-300'>Oferta</Link></li>
                </ul>
                <Link to="contato" className="px-6 py-2 rounded-md bg-primary-600 font-semibold uppercase hover:bg-primary-900 duration-300 transition-all">Contato</Link>
            </nav>
            <span className="text-2xl cursor-pointer p-1 text-slate-400 rounded-md bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-400">
            {theme === "light" ?
            <MdOutlineDarkMode onClick={()=> setTheme('dark')} /> :
            <MdOutlineLightMode onClick={()=> setTheme('light')}/>
            }
            </span>
        </div>
      </div>
    </header>
  )
}

export default Header