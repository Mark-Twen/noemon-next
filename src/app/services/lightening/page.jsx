import Lightening from "../../../components/lightening/lightening"
import Logon from "../../../components/Logon/logon"
import RightCards from "../../../components/bigGardsMaket/rightCardsLightening"
import LeftCards from "../../../components/bigGardsMaket/leftCardsLightening"

const serviceLightening = () => {
    return (
        <div className="layout">
            <Lightening />
            <Logon type="lightening" />
            <RightCards type="linearLight_R" />
            <LeftCards type="LighteningControl_L" />
        </div>
    )

}

export default serviceLightening