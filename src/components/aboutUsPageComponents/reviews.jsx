"use client"
import { useEffect, useState } from "react"
import fonts from "../fonts/fonts.module.scss"
import styles from "./aboutUs.module.scss"

const Reviews = () => {

    const [countRetrofit, setCountRetrofit] = useState(1)
    const [light, setLight] = useState(1)
    const [customers, setCustomers ] = useState(1)

    useEffect(() => {
        const countInterval = setInterval(() => {
          setCountRetrofit((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
        }, 80);       
        return () => clearInterval(countInterval);
      }, []);

      useEffect(() => {
        const countInterval = setInterval(() => {
          setLight((prevCount) => (prevCount < 50 ? prevCount + 1 : prevCount));
        }, 80);       
        return () => clearInterval(countInterval);
      }, []);

      useEffect(() => {
        const countInterval = setInterval(() => {
            setCustomers((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
        }, 80);       
        return () => clearInterval(countInterval);
      }, []);


    // Math.floor(countRetrofit + 1)
    return (
        <div>
            <ul className={`${styles.container}`}>
                <li className={`${styles.cardList}`}>
                    <p className={`${fonts.rewiesTitle} pt-[46px] pb-[40px] mx-auto`}>{countRetrofit} +</p>
                    <span className={`${fonts.rewiesText} pb-[46px] mx-auto`}>BUILDINGS RETROFIT</span>
                </li>
                <li className={`${styles.cardList}`}>
                    <p className={`${fonts.rewiesTitle} pt-[46px] pb-[40px] mx-auto`}>{light}k +</p>
                    <span className={`${fonts.rewiesText} pb-[46px] mx-auto`}>Lights changed</span>
                </li>
                <li className={`${styles.cardList}`}>
                    <p className={`${fonts.rewiesTitle} pt-[46px] pb-[40px]  mx-auto`}>{customers} +</p>
                    <span className={`${fonts.rewiesText} pb-[46px] mx-auto`}>Happy customers</span>
                </li>
            </ul>
        </div>
    )
}

export default Reviews