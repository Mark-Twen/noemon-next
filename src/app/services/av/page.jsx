import Hero from "../../../components/avComponents/hero"
import LeftCards from "../../../components/bigGardsMaket/avLeftCardsmaket"
import RightCards from "../../../components/bigGardsMaket/avRightcardsMaket"
import Partners from "../../../components/swiper/swiperBrand"

const AV =() => {

    return (
        <div className="layout">
            <Hero />
            <RightCards type="meetingRoom" />
            <LeftCards type="soundSystem" />
            <RightCards type="audioSystem" />
            <Partners />
        </div>
    )

}
export default AV