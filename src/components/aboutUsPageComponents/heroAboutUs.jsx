
import Image from "next/image"
import hero from "../../../public/img/about us/hero.png"

import fonts from "../fonts/fonts.module.scss"


const Hero = () => {

    return(
        <div className="relative mt-[140px]">
            <Image 
            src={hero}
            alt="hero"
            width={1920}
            height={1030}
            />

            <p className={`${fonts.prodPageHeroTitle} absolute bottom-[20%] left-[10%]`}>Think smart.<span className={`${fonts.prodPageHeroList} pl-[10px]`}>Live smart.</span> </p>
        </div>
    )
}
export default Hero