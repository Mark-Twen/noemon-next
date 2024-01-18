import Link from "next/link"
import fonts from "../fonts/fonts.module.scss"



const btmExpert = () => {
    return (
        <Link href="tel:18005339263" className={`${fonts.callExpertBtm} px-[74px] py-[13px] bg-[#282828] rounded-md`}>Call Expert</Link>
    )
}

export default btmExpert