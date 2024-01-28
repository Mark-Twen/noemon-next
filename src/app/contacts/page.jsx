
import Location from "../../components/contactsComponent/location"
import fonts from "../../components/fonts/fonts.module.scss"


const Contacts = () => {
    return (
        <div className=" mt-[140px] layout">
            <div className="flex flex-row justify-center">
            <p className={`${fonts.mainHeroTitle} py-[120px] bg-[#FFF;] `}>Connecting Homes, Enhancing Lives: <span className={`${fonts.prodPageHeroList}`}>Reach out to Neomon for a Smarter Tomorrow</span></p>
            </div>
            <Location  />
        </div>
    )
}

export default Contacts