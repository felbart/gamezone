import { useTheme } from "../hooks/useTheme";
import logoLight from '../assets/img/brand-logo-light.png';
import logoDark from '../assets/img/brand-logo-dark.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './Header.module.css';
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import Button from "./Button";
import { NAV_LINKS } from "../constants";
const Header = () => {

    const { theme, setTheme } = useTheme();

    const [menuOpen, setMenuOpen] = useState(false);

    const [navSize, setNavSize] = useState(false);

    useEffect(() => {
      const changeNav = () => {
        setNavSize(window.scrollY >= 100);
      };
  
      // Adiciona o listener quando o componente é montado
      window.addEventListener("scroll", changeNav);
  
      // Remove o listener quando o componente é desmontado
      return () => {
        window.removeEventListener("scroll", changeNav);
      };
    }, []);


    return (
      <header
      className={`bg-slate-50 dark:bg-slate-900 md:bg-slate-50/10 md:dark:bg-slate-900/10 dark:border-primary-200/20 ${styles.navbar} ${
          navSize
          ? theme === 'dark'
              ? styles.activeDark 
              : styles.activeLight 
          : ""
      }`}
      >
      <nav className='container flex items-center justify-between'>
          <div className='w-3/12'>
              <img src={theme === 'dark' ? logoLight : logoDark } width={120} />
          </div>
          <div className='w-8/12 flex items-center justify-end gap-8'>
              <ul className='hidden md:flex gap-8 items-center justify-end flex-col md:flex-row'>
                  {NAV_LINKS.map((item, id) => (
                      <li key={id} className='text-base font-medium hover:text-primary-800 text-slate-800 dark:text-slate-200 dark:hover:text-primary-300'>
                      <Link to={item.href} className='hover:text-primary'>{item.label}</Link>
                      </li>
                  ))}
              </ul>
              <Button className="hidden lg:flex">Baixe o App</Button>
              {theme === 'light' ? 
              <button className="p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-300 transition-all duration-300" onClick={()=> setTheme('dark')}>
                  <FiMoon size={24} />
              </button>
              : 
              <button className="p-2 bg-slate-800 text-slate-100 rounded-full hover:bg-slate-600 transition-all duration-300" onClick={()=> setTheme('light')}>
                  <FiSun size={24} />
              </button>
              }
              <button className='md:hidden flex p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 border-2 border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-600 dark:text-slate-100 transition-all duration-300' onClick={() => setMenuOpen(!menuOpen)}>
                  <FiMenu size={30} />
              </button>

              <div className={`absolute xl:hidden top-[79px] left-0 w-full min-h-[60vh] bg-slate-50 border-b border-slate-200 drop-shadow-md shadow-slate-400 dark:shadow-primary-950 dark:border-slate-800 dark:bg-slate-900 flex flex-col items-center justify-start gap-8 px-4 py-8 transform transition-transform ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                  <ul className='flex flex-col items-center justify-start gap-4 w-full'>
                      {NAV_LINKS.map((item, id) => (
                          <li key={id} className='text-base font-medium hover:text-primary-800 text-slate-800 dark:text-slate-200 py-2 border-b border-slate-200 dark:border-slate-800 dark:hover:text-primary-300'>
                          <Link to={`/${item.href}`} className='hover:text-primary'>{item.label}</Link>
                          </li>
                      ))}
                  </ul>

              </div>


          </div>
      </nav>
  </header>
  )
}

export default Header