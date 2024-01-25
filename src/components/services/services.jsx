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
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const handleOnClick = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  const handleOnMouseEnter = () => {
    setIsSubMenuVisible(true);
  };

  const handleOnMouseLeave = () => {
    setIsSubMenuVisible(false);
  }

  return (
    <>
      <ul className="my-[120px] layout">
        <li className={`${styles.list} ${styles.navLink}`}
         onMouseEnter={handleOnMouseEnter}
         onMouseLeave={handleOnMouseLeave}
        >
          <Image
            src={commercials}
            alt="commercials"
            className={styles.listImg}
          />
          <Link
            onClick={handleOnClick}
            href="services"
            className={`${fonts.prodPageHeroTitle} ${styles.listTitle} `}
          >
            Services
            <Image
              src={arrow}
              alt="arrow"
              width={46}
              height={46}
              className={`mt-[4px] ${styles.arrow}`}
            />
          </Link>

          {isSubMenuVisible && (
            <ul className={`${styles.subNavLink}`}>
              <li className={styles.subNavLinkItems}>
                <Link href="#">Menu-1</Link>
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


        <li className={`${styles.list} my-[40px]`}>
          <Image
            src={residencial}
            alt="residencial"
            className={styles.listImg}
          />
          <p className={`${fonts.prodPageHeroTitle} ${styles.listTitle} `}>
            Residencial
            <Image
              src={arrow}
              alt="arrow"
              width={46}
              height={46}
              className={`mt-[4px] ${styles.arrow}`}
            />
          </p>
        </li>
        <li className={`${styles.list}`}>
          <Image
            src={automations}
            alt="coautomationsmrcials"
            className={styles.listImg}
          />
          <p className={`${fonts.prodPageHeroTitle} ${styles.listTitle} `}>
            Smart Automations
            <Image
              src={arrow}
              alt="arrow"
              width={46}
              height={46}
              className={`mt-[4px] ${styles.arrow}`}
            />
          </p>
        </li>
      </ul>
    </>
  );
};

export default Services;
