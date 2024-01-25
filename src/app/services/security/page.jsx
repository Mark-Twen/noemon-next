import Hero from "../../../components/securityComponents/hero"
import Logon from "../../../components/Logon/logon"
import LeftCards from "../../../components/bigGardsMaket/leftSecurityCardsMaket"
import RightCardsMarket from "../../../components/bigGardsMaket/rightSecurityCardsMaket"
import Partners from "../../../components/swiper/swiperBrand"

const Security = () => {

    return (
        <div className="layout">
            <Hero />
            <Logon type="Security" />
            <RightCardsMarket type="videoTablet" />
            <LeftCards type="accessTablet"/>
            <RightCardsMarket type="cctv" />
            <Partners />
        </div>
    )
    

}

export default Security