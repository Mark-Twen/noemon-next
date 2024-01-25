import Hero from "../../../components/securityComponents/hero"
import LeftCards from "../../../components/bigGardsMaket/leftSecurityCardsMaket"
import RightCardsMarket from "../../../components/bigGardsMaket/rightSecurityCardsMaket"
import Partners from "../../../components/swiper/swiperBrand"

const Security = () => {

    return (
        <div className="layout">
            <Hero />
            <RightCardsMarket type="videoTablet" />
            <LeftCards type="accessTablet"/>
            <RightCardsMarket type="cctv" />
            <Partners />
        </div>
    )
    

}

export default Security