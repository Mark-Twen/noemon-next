import Hero from "../../components/hero/hero"
import HowIsWork from "../../components/howIsWork/howIsWork"
import Services from "../../components/services/services"
import SmartProducts from "../../components/smartProducts/smartProducts"
import Advantages from "../../components/advantages/advantages"
import Portfolio from "../../components/portfolio/portfolio"
import Partners from "../../components/swiper/swiperBrand"


const MainPage = () => {
return (
   <div>
    <Hero />
    <HowIsWork />
    <Services />
    <SmartProducts />
    <Advantages />
    <Portfolio />
    <Partners />
   </div>
)
}

export default MainPage