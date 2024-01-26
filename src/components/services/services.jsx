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
  const [isSubMenuAuto, setIsSubMenuAuto] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState(null);

  const handleOnClick = () => {
    setIsSubMenuServices(!isSubMenuServices);
    setIsSubMenuResidencial(!isSubMenuResidencial);
    setIsSubMenuAuto(!isSubMenuAuto);
  };

  const handleOnMouseEnterServices = () => {
    setIsSubMenuServices(true);
    setIsSubMenuResidencial(false);
    setIsSubMenuAuto(false);
    clearTimeout(leaveTimeout);
  };

  const handleOnMouseEnterResidancial = () => {
    setIsSubMenuResidencial(true);
    setIsSubMenuServices(false);
    setIsSubMenuAuto(false);
    clearTimeout(leaveTimeout);
  };
  const handleOnMouseEnterAutomation = () => {
    setIsSubMenuServices(false);
    setIsSubMenuResidencial(false);
    setIsSubMenuAuto(true);
    clearTimeout(leaveTimeout);
  };

  const handleOnMouseLeaveServices = () => {
    setLeaveTimeout(setTimeout(() => setIsSubMenuServices(false), 2000));
  };;
  const handleOnMouseLeaveResidancial = () => {
    setLeaveTimeout(setTimeout(() => setIsSubMenuResidencial(false), 2000));
  };

  const handleOnMouseLeaveAutomation = () => {
    setLeaveTimeout(setTimeout(() => setIsSubMenuAuto(false), 2000));
  };

  return (
    <>
      <ul className="my-[120px] layout">
        <li
          className={`${styles.list} ${styles.navLink}`}
          onMouseEnter={handleOnMouseEnterServices}
          onMouseLeave={handleOnMouseLeaveServices}
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
        </li>
        {isSubMenuServices && (
          <ul
            className={`${styles.subNavLink}`}
            onMouseEnter={handleOnMouseEnterServices}
            onMouseLeave={handleOnMouseLeaveServices}
          >
            <li className={styles.subNavLinkItems}>
              <Link href="/services/lightening">Lighting</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="">EV Chargers</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Electric Services / Maintenance / Upgrading</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Automation</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">IT Solutions / Networking / Wi-Fi</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#"> Conference Room</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">LED Lights Maintenance</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Access Control</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Audio Visual</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Security</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#"> Temperature Control</Link>
            </li>
          </ul>
        )}

        <li
          className={`${styles.list} ${styles.navLink} mt-10`}
          onMouseEnter={handleOnMouseEnterResidancial}
          onMouseLeave={handleOnMouseLeaveResidancial}
        >
          <Link
            href="#"
            className={`${fonts.prodPageHeroTitle} ${styles.listTitleResidencial} `}
          >
            Residencial
            <Image
              src={arrow}
              alt="arrow"
              width={46}
              height={46}
              className={`mt-[4px] ${styles.arrow}`}
            />
          </Link>
        </li>
        {isSubMenuResidencial && (
          <ul
            className={`${styles.subNavLink}`}
            onMouseEnter={handleOnMouseEnterResidancial}
            //  onMouseLeave={handleOnMouseLeaveResidancial}
          >
            <li className={styles.subNavLinkItems}>
              <Link href="/services/lightening">Custom Home Automation</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="">EV Security</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">IT Solutions / EV Chargers</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Home Cinema or Home Theater</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Electrical Design / Study</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Integrated Structured Wiring</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Multi room Sound System</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Temperature Control</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Audio Visual</Link>
            </li>
          </ul>
        )}

        <li
          className={`${styles.list} mt-10`}
          onMouseEnter={handleOnMouseEnterAutomation}
          onMouseLeave={handleOnMouseLeaveAutomation}
        >
          <Link
            href=""
            className={`${fonts.prodPageHeroTitle} ${styles.listTitleSmart} `}
          >
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
        {isSubMenuAuto && (
          <ul
            className={`${styles.subNavLink}`}
            onMouseEnter={handleOnMouseEnterAutomation}
             onMouseLeave={handleOnMouseLeaveAutomation}
          >
            <li className={styles.subNavLinkItems}>
              <Link href="/services/lightening">Custom Home Automation</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="">EV Security</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">IT Solutions / EV Chargers</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Home Cinema or Home Theater</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Electrical Design / Study</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Integrated Structured Wiring</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Multi room Sound System</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Temperature Control</Link>
            </li>
            <li className={styles.subNavLinkItems}>
              <Link href="#">Audio Visual</Link>
            </li>
          </ul>
        )}
      </ul>
    </>
  );
};

export default Services;
