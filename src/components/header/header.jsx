"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/img/logo/LOGO-4x.png";
import phoneIcon from "../../../public/icon/phone.png"
import mailIcom from "../../../public/icon/Mail.png"

import fonts from "../fonts/fonts.module.scss";
import styles from "./header.module.scss";

import arrow from "../../../public/icon/arrowDawn.png";
import { useState } from "react";

// import ServiceList from "./serviceList";

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <section className="flex w-screen bg-[#282828] fixed top-[1px] z-[1000] layout" >
        {/* LOGO */}
        <div className="py-8 ml-[3%] ">
          <Link href="/mainpage">
            <Image
              src={logo}
              alt="logo"
              width={254}
              height={81}
              priority={true}
            />
          </Link>
        </div>

        <div
          className={`flex py-[60px] justify-between   ${fonts.linkcolor}`}
      
          // onFocus={() => setIsHover(true)}
          // onBlur={() => setIsHover(false)}
        >
          <Link
            className={`flex flex-row pl-[60%] pr-[50%]  ${fonts.linkcolor} ${styles.link}`}
            href="#"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            Services
            <Image src={arrow} alt="arrow" className={styles.arrow} />
            {isHover && (
              <div
                className={`${styles.serviceList} `}
                style={{ zIndex: 20, backgroundColor: "#282828", width: 207 }}
              >
                <ul className={` bg-[#282828]`}>
                  <li className={`py-[12px]`}>
                    <Link
                      href="/services/lightening"
                      className={`${styles.servicesLink} ${fonts.linkcolor}`}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Lightening
                    </Link>
                  </li>
                  <li className={`py-[12px]`}>
                    <Link
                      href="/services/evCharges"
                      className={`${styles.servicesLink} ${fonts.linkcolor}`}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      EV Chargers
                    </Link>
                  </li>
                  <li className={`py-[12px]`}>
                    <Link
                      href="/services/security"
                      className={`${styles.servicesLink} ${fonts.linkcolor}`}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Security
                    </Link>
                  </li>
                  <li className={`py-[12px]`}>
                    <Link
                      href="/services/av"
                      className={`${styles.servicesLink} ${fonts.linkcolor}`}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Audio Visual
                    </Link>
                  </li>
                  <li className={`py-[12px]`}>
                    <Link
                      href="/services/itSolution"
                      className={`${styles.servicesLink} ${fonts.linkcolor}`}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      IT Solution
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className={`${styles.servicesLink} ${fonts.linkcolor}`}
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Other Services
                    </Link>
                  </li>
                </ul>
              </div>
            )}
           
          </Link>
          

          <Link
            className={`pr-[50%] ${fonts.linkcolor} ${styles.link}`}
            href="/productPage"
          >
            Products
          </Link>
          <Link
            className={`pr-[50%] ${fonts.linkcolor} ${styles.link}`}
            style={{ whiteSpace: "nowrap" }}
            href="/aboutUs"
          >
            About us
          </Link>
          <Link
            className={`pr-[50%] ${fonts.linkcolor} ${styles.link}`}
            href="contacts"
          >
            Contact
          </Link>
        </div>

        {/* Contacts */}
        <div className="flex flex-col ml-[45%] py-[36px] ">
          
          <Link
            className={`pb-3 ${fonts.linkcolor} ${styles.linkContacts} flex flex-row`}
            href="tel:18005339263"
          >
           <Image 
           src={phoneIcon}
           alt="phoneIcon"
           width={36}
           height={36}
           className="pr-[10px]"
           /> 1-800-533-9263
          </Link>
          <Link
            className={`${fonts.linkcolor} ${styles.linkContacts} flex flex-row`}
            href="mailto:info@noemon.ca"
          >
            <Image 
            src={mailIcom}
            alt="mailIcon"
            width={36}
            height={36}
            className="pr-[10px]"
            />info@noemon.ca
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;

