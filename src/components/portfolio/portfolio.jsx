"use client"

import Image from "next/image"
import portfolioCards from "../../../public/json/portfolioCards.json"

import line from "../../../public/icon/Line.png"

import { useState } from "react"

import styles from "./portfolio.module.scss"
import fonts from "../fonts/fonts.module.scss"

const Portfolio = () => {
    const [data, setData] = useState(portfolioCards)

    return (
        <div>
            <h1 className={`${fonts.productCardTitle} mt-[120px] mb-[50px]`}>Portfolio</h1>
                <div className={styles.container}>
                    {data.map((item) => (
                        <div key={item.id} className={styles.list} >
                             <Image 
                            src={item.img}
                            alt={item.title}
                            layout="cover"
                             width={410}
                             height={534}
                        />
                        <h2 className={`${fonts.heroBtn} pt-[36px] pb-[12px] ml-[16px]`}>{item.title}</h2>
                        <p className={`${fonts.portfolioText} ml-[16px]`}>{item.titleText}</p>

                        <Image 
                            src={line}
                            alt="line"
                            width={370}
                            height={1}
                            className="py-[32px] mx-auto"
                            />


                        <table className="ml-[16px] w-[370px]" >
                            <tr>
                                <td className={`${fonts.portfolioCardsSign}`}>{item.place}</td>
                                <td className={`${fonts.portfolioCardsSign}`}>{item.sqSign}</td>
                                <td className={`${fonts.portfolioCardsSign}`}>{item.year}</td>
                            </tr>
                           
                            <tr>
                                <td className={`${fonts.portfolioCardsdetails}`}>{item.location}</td>
                                <td className={`${fonts.portfolioCardsdetails}`}>{item.sq}</td>
                                <td className={`${fonts.portfolioCardsdetails}`}>{item.complete}</td>
                            </tr>
                        </table>
                        </div>
                       
                    ))}
                </div>
            
        </div>
    )


}

export default Portfolio