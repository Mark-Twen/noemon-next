import Lightening from "../../../components/lightening/lightening"
import Logon from "../../../components/Logon/logon"
import RightCards from "../../../components/bigGardsMaket/rightCardsLightening"
import LeftCards from "../../../components/bigGardsMaket/leftCardsLightening"
import Partners from "../../../components/swiper/swiperBrand"

const serviceLightening = () => {
    return (
        <div className="layout">
            <Lightening />
            <Logon type="lightening" />
            <RightCards type="linearLight_R" />
            <LeftCards type="LighteningControl_L" />
            <RightCards type="LEDChip" />
            <LeftCards type="LEDDrivers" />
            <RightCards type="lightChannel" />
            <LeftCards type="gasLamps" />
            <RightCards type="electroBuilder" />
            <Partners />

        </div>
    )

}

export default serviceLightening