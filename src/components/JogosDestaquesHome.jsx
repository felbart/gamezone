import { BsNintendoSwitch, BsPlaystation, BsXbox } from "react-icons/bs"

const JogosDestaquesHome = () => {
  return (
    <section id="destaques" className="h-screen bg-slate-100 dark:bg-slate-900 py-32">
        <div className="flex flex-col items-center justify-start gap-20">
            <div className="container flex flex-row items-center justify-between py-4 gap-4">
                <span><h2 className="text-3xl font-semibold">Jogos em destaque</h2></span>
                <div className="flex items-center justify-between gap-4">
                    <BsXbox size={24}/><BsNintendoSwitch size={24} /><BsPlaystation size={24} />
                </div>
                <div className="flex justify-between items-center gap-4 text-center">
                    <span className="px-6 py-2 uppercase font-light min-w-[100px] border-2 border-slate-600 dark:border-slate-200 rounded-full">PC</span>
                    <span className="px-6 py-2 uppercase font-light min-w-[100px] border-2 border-slate-600 dark:border-slate-200 rounded-full">Console</span>
                    <span className="px-6 py-2 uppercase font-light min-w-[100px] border-2 border-slate-600 dark:border-slate-200 rounded-full">Mobile</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default JogosDestaquesHome