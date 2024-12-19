import logolight from '../assets/img/brand-logo-light.png'
import logodark from '../assets/img/brand-logo-dark.png'
import logogray from '../assets/img/brand-logo-gray.png'
import { useTheme } from '../hooks/useTheme'



const Footer = () => {

  const { theme } = useTheme();
  
  return (

    <footer className="bg-slate-50 dark:bg-slate-900 pt-20 flex flex-col justify-between min-h-96">
        <div className="container flex py-8 items-start justify-between">
          <div className="flex flex-col justify-start items-start w-3/12">
           { theme === 'light' ? <img src={logodark} className='w-[180px]'/> : <img src={logolight} className='w-[180px]' /> }
          </div>
          <div className="flex flex-col justify-start items-start w-3/12 gap-4">
          <span className='text-lg font-semibold text-gray-400'>Navegação</span>
            <ul className='flex flex-col items-start justify-center gap-2'>
              
              <li className='text-md text-gray-600 uppercase'><a href="#">item.label</a></li>
              
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start w-3/12 gap-4">
            <span className='text-lg font-semibold text-gray-400'>Institucional</span>
            <ul className='flex flex-row items-start justify-center gap-2'>
              <li className='text-md text-gray-600 uppercase'><a href="#"><i>social.icon</i></a></li>
            </ul>  
          </div>
          <div className='flex flex-col justify-end items-start w-3/12 gap-4'>
          <span className='text-lg font-semibold text-gray-400'>Contato</span>
            <ul className='flex flex-row items-start justify-center gap-2'>
              <li className='text-md text-gray-600 uppercase'><a href="#"><i>social.icon</i></a></li>
            </ul>
          </div>
        </div>
        <div className="container flex items-center justify-center border-t-2 gap-4 border-gray-800 w-full py-2">
            <img src={logogray} alt="GameZone" className='opacity-40' />
            <span className="text-sm text-gray-600">Gamezone - Todos os direitos reservados</span>
        </div>
    </footer>
  )
}

export default Footer