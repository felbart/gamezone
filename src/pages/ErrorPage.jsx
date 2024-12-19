import Footer from "../components/Footer"
import Header from "../components/Header"
import errorpage from "../assets/img/404.svg"
import Button from "../components/Button"

const ErrorPage = () => {
  return (
    <>
    <Header />
    <section className="h-screen bg-gradient-to-br to-slate-100 from-primary-100 dark:to-slate-950 dark:from-primary-950">

    <div className="container h-full flex flex-col items-center justify-center">
        <div className="w-96 flex flex-col items-center justify-center">
            <img src={errorpage} alt="Página não encontrada" />
            <h1 className="text-9xl dark:text-slate-200 text-slate-800 font-extrabold text-center">404</h1>
            <span className="text-3xl font-semibold text-primary-400">Página não encontrada</span>
            <Button onClick="/home" label="Voltar ao início" />
        </div>
    </div>

    </section>    
    <Footer />
    </>
  )
}

export default ErrorPage