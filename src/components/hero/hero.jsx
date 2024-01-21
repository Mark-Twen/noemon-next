import Image from "next/image"
import hero from "../../../public/img/mainPage/hero.png"


import styles from "./hero.module.scss"
import fonts from "../fonts/fonts.module.scss"
import Link from "next/link"

const Hero = () => (
    <div>
        <Image src={hero} alt="hero" className={styles.heroImg} />
        <h1 className={`${fonts.mainHeroTitle} ${styles.heroTitleOne}`}>THINK SMART</h1>
        <p className={`${fonts.prodPageHeroList} ${styles.heroTitleTwo}`}>Live smart</p>
        <Link href="tel:18005339263" className={`${styles.callExpertBtm} ${fonts.heroBtn}`}>Call Expert</Link>
    </div>
)

export default Hero