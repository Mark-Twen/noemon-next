
import fonts from "../fonts/fonts.module.scss"



const logon = () => {

return (
    <div className="flex flex-col items-center bg-[#565A5C] w-[100%] ">
        <p className={`${fonts.aboutUsLogoText} pt-[120px] w-[1400px]`}><span className={`${fonts.logonTitleName}`}>Neomon </span>is dedicated to the pursuit of energy efficiency and cost savings through the use of the latest LED technology.</p>
        <p className={`${fonts.aboutUsLogoText} w-[1400px] py-[40px] `}>We are always looking for the best solutions to improve your everyday life.</p>
        <p className={`${fonts.aboutUsLogoText} pb-[120px] w-[1400px] `}>Noemon approaches projects with a can-do attitude with excellent two-way communication. We demonstrate professionalism at all levels with technical proficiency, high safety levels, and expert knowledge. </p>
    </div>
)
}

export default logon