import fonts from "../fonts/fonts.module.scss"
import styles from "./aboutUs.module.scss"

const Reviews = () => {
    return (
        <div>
            <ul className={`${styles.container}`}>
                <li className={`${styles.cardList}`}>
                    <p className={`${fonts.rewiesTitle} pt-[46px] pb-[40px] mx-auto`}>100 +</p>
                    <span className={`${fonts.rewiesText} pb-[46px] mx-auto`}>BUILDINGS RETROFIT</span>
                </li>
                <li className={`${styles.cardList}`}>
                    <p className={`${fonts.rewiesTitle} pt-[46px] pb-[40px] mx-auto`}>50k +</p>
                    <span className={`${fonts.rewiesText} pb-[46px] mx-auto`}>Lights changed</span>
                </li>
                <li className={`${styles.cardList}`}>
                    <p className={`${fonts.rewiesTitle} pt-[46px] pb-[40px]  mx-auto`}>100 +</p>
                    <span className={`${fonts.rewiesText} pb-[46px] mx-auto`}>Happy customers</span>
                </li>
            </ul>
        </div>
    )
}

export default Reviews