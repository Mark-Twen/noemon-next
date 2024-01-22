"use client"

import { useState } from "react"
import products from "../../../public/json/smartProduct.json"

import Image from "next/image"

import styles from "./smartProducts.module.scss"
import fonts from "../fonts/fonts.module.scss"

const SmartProducts = () => {

    const [data, setData] = useState(products)

    return (
        <>
        <ul className={`${styles.container} mx-auto`}>
            {data.map((item) => (
                <li key={item.name} className={`${styles.list} mx-[40px] my-[40px]`}>
                    <Image 
                    src={item.img}
                    alt="image"
                    width={370}
                    height={246}
                    objectFit="cover"
                    className={styles.listImg}
                    />
                    <p className={`${fonts.productCardTitle} pb-[24px]`}>{item.title}</p>
                </li>
            ))}
        </ul>
        </>
    )

}
export default SmartProducts