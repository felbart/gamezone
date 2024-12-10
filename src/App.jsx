import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { useTheme } from "./hooks/useTheme"

function App() {

  const { theme, setTheme } = useTheme();

  return (
    <>
      <h1 className="text-5xl font-extrabold dark:text-slate-100">Game Zone</h1>
      <div className="flex justify-center items-center gap-4">
        <span className="text-slate-100 text-2xl cursor-pointer p-4 bg-slate-400 hover:bg-slate-700">
        {theme === "light" ?
          <MdOutlineDarkMode onClick={()=> setTheme('dark')} /> :
          <MdOutlineLightMode onClick={()=> setTheme('light')}/>
        }
        </span>
      </div>
      
    </>
  )
}

export default App
