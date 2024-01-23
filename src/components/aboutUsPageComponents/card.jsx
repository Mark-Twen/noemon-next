import Image from "next/image"
import cardImg from "../../../public/img/about us/weAreNeoman.png"

import fonts from "../fonts/fonts.module.scss"

const card = () => {

    return (
        <div className="flex flex-row justify-between w-[100%] bg-[#F8F9FA]">
            <div className="flex flex-col pl-[104px] pr-[48px] ">
                <p className={`${fonts.logoTitle} pt-[104px] pb-[24px] items-center  `}>We are Noemon</p>
                <span className={`${fonts.bigCardDescription}`} style={{textAlign: "justify"}}>Noemon is an industry leader in lighting technology. We provide our clients with top quality LED lights and services that will grant instant satisfaction. Our amazing Save-and-Pay programs allow you to buy with confidence without worrying about extra costs or having to pay the full price of a retrofit all at once. We offer no-interest financing plans and work very closely with saveonenergy retrofit programs that qualify for big rebates to ensure you the best possible price. It's that simple.
Our dedicated team is ready to support your individual needs. You can also count on us for customer support, sales assistance, design support, all of which are available from Noemon now.</span>
            </div>

            <Image 
            src={cardImg}
            alt="card"
            width={1097}
            height={580}
            className="py-[80px]"
            />
        </div>
    )

}

export default card