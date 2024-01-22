
import Link from "next/link"
import Image from "next/image"
import pic from "../../../public/img/mainPage/advantages.png"

import arrowRight from "../../../public/icon/cursorRight.png"


import fonts from "../fonts/fonts.module.scss"
import styles from "./advantages.module.scss"

const Advantages = () => {
return (
    <div className="relative bg-[#F8F9FA]">
    <h1 className={`${fonts.advantagesTitle} mb-[40px] mt-[120px] pt-[40px] pl-[100px]`}>Why we are better</h1>
    <div className={`${styles.container} mx-auto pb-[80px]`}>
        <Image 
        src={pic}
        alt="pic"
        width={720}
        height={606}
        />

<div className="flex flex-col pt-[24px]">
<span className={`${fonts.bigCardDescription}`}>Neomon Canada has smart home experience that transcends borders. What sets us apart is not just our commitment to cutting-edge technology and innovative design, but our extensive international experience that has honed our expertise. With a track record of successful projects around the globe, we bring a wealth of knowledge and a diverse perspective to every smart home endeavor.</span>
        <span className={`${fonts.bigCardDescription} py-[60px]`}>Our team's international exposure ensures that we stay at the forefront of industry trends, offering you solutions that seamlessly integrate global best practices with personalized, locally relevant experiences. Elevate your living spaces with a touch of international excellence, where every smart home solution is a testament to our commitment to unparalleled quality and innovation.</span>
        <span className={`${fonts.bigCardDescription}`}>Neomon Canada is the best choice for those looking for a smart home system installation.</span>

</div>
        
    <Link className={`flex flex-row absolute  bottom-[10%] left-[44%] w-[237px] ${fonts.heroBtn} bg-[]`} href="#">Read More
    <Image 
    src={arrowRight}
    alt="arrow"
    width={30}
    height={30} 
    className="pl-[4px]"  
    />
    </Link>
    </div>
    

   
    </div>
    
)
}

export default Advantages