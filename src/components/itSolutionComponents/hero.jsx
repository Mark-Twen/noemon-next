
import Image from "next/image"
import hero from "../../../public/img/itSolution/hero.png"


import styles from "../hero/hero.module.scss"
import fonts from "../fonts/fonts.module.scss"
import Link from "next/link"

const Hero = () => (
    <div className={`${styles.heroContainer} mt-[140px]`}>
        <Image src={hero} alt="hero" className={styles.heroImg} />
        <h1 className={`${fonts.mainHeroTitle} ${styles.heroTitleOne}`}>IT SOLUTIONS</h1>
        <p className={`${fonts.prodPageHeroList} ${styles.heroTitleTwo}`}>Seamless IT Solutions, Smarter Living.</p>
        <Link href="tel:18005339263" className={`${styles.callExpertBtm} ${fonts.heroBtn}`}>Call Expert</Link>
    </div>
)

export default Hero