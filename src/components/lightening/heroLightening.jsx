import Image from "next/image"
import hero from "../../../public/img/lightening/hero.png"



import styles from "./lightening.module.scss"
import fonts from "../fonts/fonts.module.scss"
import Link from "next/link"

const Hero = () => (
    <div className={`${styles.heroContainer} mt-[140px]`}>
        <Image src={hero} alt="hero" className={styles.heroImg} />
        <h1 className={`${fonts.prodPageHeroTitle} ${styles.heroTitleOne}`}>LIGHTENING</h1>
        <p className={`${fonts.heroTitleMainePage} ${styles.heroTitleTwo}`}>Illuminating Your Smart Living Experience</p>
        <Link href="tel:18005339263" className={`${styles.callExpertBtm} ${fonts.heroBtn}`}>Call Expert</Link>
    </div>
)

export default Hero