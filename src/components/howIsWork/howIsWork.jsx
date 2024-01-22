"use client"
import { useState } from "react"
import list from "../../../public/json/howIsWork.json"
import fonts from "../fonts/fonts.module.scss"


import Image from "next/image"

const HowIsWork = () => {

const [data, setData] = useState(list)

    return (
        <>
        <h1 className={`${fonts.productCardTitle} text-start mt-[120px] mb-[40px]`}>How does it work  </h1>
        <ul className="flex flex-row justify-around items-center ">
            {data.map((item) => (
                <li key={item.title} className=" flex flex-col px-[24px] bg-[#292D36] w-[348px] border rounded-md">
                    <Image 
                    src={item.icon}
                    alt="icon"
                    width={160}
                    height={160}
                    className="pt-[20px] mx-auto"
                    />
                    <p className={`${fonts.howIsWorkTitle} mx-auto py-[24px]`}>{item.title}</p>
                    <p className={`${fonts.howIsWorkScript} mx-auto w-[300px] h-[130px]`}>{item.script}</p>
                </li>
            ))}            
        </ul>
        </>
    )
}

export default HowIsWork