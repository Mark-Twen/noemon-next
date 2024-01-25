"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import commercials from "../../../public/img/services/commercial.png";
import residencial from "../../../public/img/services/residencial.png";
import automations from "../../../public/img/services/automations.png";
import arrow from "../../../public/icon/arrowDawn.png";

import styles from "./services.module.scss";
import fonts from "../fonts/fonts.module.scss";

const Services = () => {
  const [isSubMenuServices, setIsSubMenuServices] = useState(false);
  const [isSubMenuResidencial, setIsSubMenuResidencial] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOnClick = () => {
    setIsSubMenuServices(!isSubMenuServices);
    setIsSubMenuResidencial(!isSubMenuResidencial)
  };

  const handleOnMouseEnterServices = () => {
    setIsSubMenuServices(true);
    
  };
  const handleOnMouseEnterResidancial = () => {   
    setIsSubMenuResidencial(true);
  };

  const handleOnMouseLeaveServises = () => {   
    setIsSubMenuServices(false);
  }
  const handleOnMouseLeaveResidancial = () => {
    setIsSubMenuResidencial(false);
    
  }

  return (
    <>
      <ul className="my-[120px] layout">
        <li className={`${styles.list} ${styles.navLink}`}
         onMouseEnter={handleOnMouseEnterServices}
         onMouseLeave={handleOnMouseLeaveServises}
        >        
          <Link
            onClick={handleOnClick}
            href="services"
            className={`${fonts.prodPageHeroTitle} ${styles.listTitleServices} `}
          >
            Services
            <Image
              src={arrow}
              alt="arrow"
              width={46}
              height={46}
              className={` mt-[4px] ${styles.arrow}`}
            />
          </Link>

          {isSubMenuServices && (
            <ul className={`${styles.subNavLink} ${isHovered ? styles.hovered : ''}`}>
              <li className={styles.subNavLinkItems}>
                <Link href="/services/lightening">Lighting</Link>
              </li>
              <li className={styles.subNavLinkItems}>
                <Link href="#">Menu-2</Link>
              </li>
              <li className={styles.subNavLinkItems}>
                <Link href="#">Menu-3</Link>
              </li>
              <li className={styles.subNavLinkItems}>
                <Link href="#">Menu-4</Link>
              </li>
            </ul>
          )}
        </li>


        <li className={`${styles.list} ${styles.navLink} my-[40px]`}
         onMouseEnter={handleOnMouseEnterResidancial}
         onMouseLeave={handleOnMouseLeaveResidancial}>
       
          <Link href="#" className={`${fonts.prodPageHeroTitle} ${styles.listTitleResidencial} `}>
            Residencial
            <Image
              src={arrow}
              alt="arrow"
              width={46}
              height={46}
              className={`mt-[4px] ${styles.arrow}`}
            />
          </Link>
          {isSubMenuResidencial && (
            <ul className={`${styles.subNavLink} ${isHovered ? styles.hovered : ''}`}>
              <li className={styles.subNavLinkItems}>
                <Link href="/services/lightening">Lighting</Link>
              </li>
              <li className={styles.subNavLinkItems}>
                <Link href="#">Menu-2</Link>
              </li>
              <li className={styles.subNavLinkItems}>
                <Link href="#">Menu-3</Link>
              </li>
              <li className={styles.subNavLinkItems}>
                <Link href="#">Menu-4</Link>
              </li>
            </ul>
          )}
        </li>


        <li className={`${styles.list}`}>
         
          <Link href="" className={`${fonts.prodPageHeroTitle} ${styles.listTitleSmart} `}>
            Smart Automations
            <Image
              src={arrow}
              alt="arrow"
              width={46}
              height={46}
              className={`mt-[4px] ${styles.arrow}`}
            />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Services;
