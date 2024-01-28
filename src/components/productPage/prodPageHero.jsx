import Image from "next/image";
import heroImg from "../../../public/img/prodPageHero/hero.png";
import fonts from "../fonts/fonts.module.scss";

import BtmExpert from "../button/callExpertBtm";

const heroBlock = () => {
  return (
    <div className="relative bg-[#FFF] mt-[140px]">
      <Image src={heroImg} alt="hero" width={1920} height={1030} />

      <p
        className={`${fonts.prodPageHeroTitle} absolute bottom-[30%] left-[7%]`}
      >
        PRODUCTS
      </p>

      <p
        className={`${fonts.prodPageHeroList} absolute bottom-[23%] left-[7%]`}
      >
        Smart Choices, Brilliant Living.
      </p>

      <div className="absolute bottom-[10%] left-[7%] ">
        <BtmExpert />
      </div>
    </div>
  );
};
export default heroBlock;
