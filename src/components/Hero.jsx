import Swiper from "swiper"
import { SwiperSlide } from "swiper/react"

const Hero = () => {
  return (
  <>
    <Swiper>
    <SwiperSlide>
      <div id="hero" className="h-[600px] bg-gradient-to-r from-slate-50 to-primary-100 dark:from-slate-950 dark:to-primary-950 flex items-center justify-center">
        <div className="container flex justify-between items-center">
          <div className="text-slate-800 dark:text-slate-50 w-6/12 flex flex-col gap-4">
            <span className="text-primary-400 uppercase tracking-widest font-semibold">LANÇAMENTO</span>
            <h1 className="text-6xl font-extrabold">Ghost of Tsushima Director’s cut</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">Conheça a experiência expandida de Ghost of Tsushima nessa Versão do Diretor.</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
    </Swiper>
  </>
  
  )
}

export default Hero