import Hero from "../../../components/evChargesComponents/heroEvChargers"
import Logon from "../../../components/Logon/logon"
import LeftCards from "../../../components/bigGardsMaket/leftEvChargesCardMaket"
import RightCards from "../../../components/bigGardsMaket/rigntEvChargesCardsMaket"
import Partners from "../../../components/swiper/swiperBrand"

const EVChargesPage = () => {

    return (
        <div className="layout">
            <Hero />
            <Logon type="evCharges" />
            <RightCards type="chargerInstallation"/>
            <LeftCards type="wirlingInstallationCar" />
            <RightCards type="evStation"/>
            <LeftCards type="wiringInstallation" />
            <Partners />
        </div>
    )

}
export default EVChargesPage