
import Hero from "../../components/aboutUsPageComponents/heroAboutUs"
import Reviews from "../../components/aboutUsPageComponents/reviews"
import Card from "../../components/aboutUsPageComponents/card"
import Logon from "../../components/aboutUsPageComponents/aboutUsLogon"
import Information from "../../components/aboutUsPageComponents/neomonInformation"

const AboutUs = () => {
    return (
           
    <div className="layout">
        <Hero />
        <Reviews />
        <Card />
        <Reviews />
        <Logon />
        <Information /> 
    </div>

)

} 

export default AboutUs