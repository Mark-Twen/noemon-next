import Hero from "../../../components/itSolutionComponents/hero"
import Logan from "../../../components/Logon/logon"
import LeftCards from "../../../components/bigGardsMaket/itSolutionLeftcardsMaket"
import RightCards from "../../../components/bigGardsMaket/itSolutionRightCardsMaket"
import Partners from "../../../components/swiper/swiperBrand"

const ItSolution = () => {
    return (
        <div className="layout">
            <Hero />
            <Logan type="it" />
            <RightCards type="itDesign" />
            <LeftCards type="integrareStructure" />
            <RightCards type="netWorking" />
            <LeftCards type="wiFi" />
            <Partners />
        </div>
    )
}

export default ItSolution