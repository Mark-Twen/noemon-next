import Image from "next/image"
import hero from "../../../public/img/services/hero.png"
import styles from "../hero/hero.module.scss"
import fonts from "../fonts/fonts.module.scss"
import Link from "next/link"

const Hero = () => {
return (
    <div>
      <div className={`${styles.heroContainer}`}>
        <Image src={hero} alt="hero" className={styles.heroImg} />
        <h1 className={`${fonts.mainHeroTitle} ${styles.heroTitleOne}`}>MORE ADVANTEGES</h1>
        <p className={`${fonts.prodPageHeroList} ${styles.heroTitleTwo}`}>Illuminating Your Smart Living Experience</p>
        <Link href="tel:18005339263" className={`${styles.callExpertBtm} ${fonts.heroBtn}`}>Call Expert</Link>
    </div>
    </div>
)
}

export default Hero