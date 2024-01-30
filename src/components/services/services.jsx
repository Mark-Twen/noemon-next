"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


import arrow from "../../../public/icon/arrowDawn.png";
import ArrowPoint from "./arrow"

import styles from "./services.module.scss";
import fonts from "../fonts/fonts.module.scss";

const Services = () => {
  const [isSubMenuServices, setIsSubMenuServices] = useState(false);
  const [isSubMenuResidencial, setIsSubMenuResidencial] = useState(false);
  const [isSubMenuAuto, setIsSubMenuAuto] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);
  const [iconRotationR, setIconRotationR] = useState(0);
  const [iconRotationA, setIconRotationA] = useState(0);

  // const [leaveTimeout, setLeaveTimeout] = useState(null);

  const handleOnClickServises = () => {
    setIsSubMenuServices(!isSubMenuServices);
    setIconRotation(iconRotation + 180);   
  };

  

  const handleOnClickResidencial = () => {    
    setIsSubMenuResidencial(!isSubMenuResidencial);
    setIconRotationR(iconRotationR + 180); 
   
  };
  const handleOnClickAuto = () => {
    setIsSubMenuAuto(!isSubMenuAuto);
    setIconRotationA(iconRotationA + 180);  
  }; 

  return (
    <>
<div>
  <h1 className={`${fonts.advantagesTitle} mt-[120px] ml-[80px]`}>Our Services</h1>
</div>

      <ul className="my-[120px] layout">
        <li
                 
        >
          <div
            onClick={handleOnClickServises}            
            className={`${fonts.prodPageHeroTitle} ${styles.listTitleServices} `}
          >
            Services
            <Image
              src={arrow}
              alt="arrow"
              width={46}
              height={46}
              style={{ transform: `rotate(${iconRotation}deg)` }}
              className={` mt-[4px] ${styles.arrow}`}
            />
          </div>
        </li>
        {isSubMenuServices && (
          <ul
            className={`flex flex-col  w-[screen]  `}          
        >
            <li className={`w-[100%] py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText}  ml-[45%] flex `} href="services/lightening">Lighting<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="services/evCharges">EV Chargers<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services">Electric Services / Maintenance / Upgrading<ArrowPoint /></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services">Automation<ArrowPoint /></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex`} href="/services/itSolution">IT Solutions / Networking / Wi-Fi<ArrowPoint /></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services"> Conference Room<ArrowPoint /></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="services/lightening">LED Lights Maintenance<ArrowPoint /></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%]  flex`} href="/services">Access Control<ArrowPoint /></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services/av">Audio Visual<ArrowPoint /></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services/security">Security<ArrowPoint /></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services"> Temperature Control<ArrowPoint /></Link>
            </li>
          </ul>
        )}

        <li
          className={`${styles.list} ${styles.navLink} mt-10`}
          // onMouseEnter={handleOnMouseEnterResidancial}
          // onMouseLeave={handleOnMouseLeaveResidancial}
        >
          <div            
            className={`${fonts.prodPageHeroTitle} ${styles.listTitleResidencial} `}
            onClick={handleOnClickResidencial}
          >
            Residencial
            <Image
              src={arrow}
              alt="arrow"
              width={46}
              height={46}
              style={{ transform: `rotate(${iconRotationR}deg)` }}
              className={`mt-[4px] ${styles.arrow}`}
            />
          </div>
        </li>
        {isSubMenuResidencial && (
          <ul
          className={`flex flex-col  w-[screen]}`}        
          >
            <li className={` w-[100%] py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services">Custom Home Automation<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services/security">Security<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="services/evCharges">EV Chargers<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services/itSolution">IT Solutions / Networking / Wi-Fi<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services">Home Cinema or Home Theater<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services/evCharges">Electrical Design / Study<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services">Integrated Structured Wiring<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText}  ml-[45%] flex `} href="/services/av">Multi room Sound System<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services">Temperature Control<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services/av">Audio Visual<ArrowPoint/></Link>
            </li>
          </ul>
        )}

        <li
          className={`${styles.list} mt-10`}        
        >
          <div
            onClick={handleOnClickAuto}
            className={`${fonts.prodPageHeroTitle} ${styles.listTitleSmart} `}
          >
            Smart Automations
            <Image
              src={arrow}
              alt="arrow"
              width={46}
              height={46}
              style={{ transform: `rotate(${iconRotationA}deg)` }}
              className={`mt-[4px] ${styles.arrow}`}
            />
          </div>
        </li>
        {isSubMenuAuto && (
          <ul
          className={`flex flex-col w-[screen]}`}           
          >
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex`} href="/services">Temperature Control<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services/av">Audio Distribution / Multiroom Audio Systems<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services">Shading control<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services/security">Security<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services/itSolution">IT Solutions / Networking / Wi-Fi<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services">Home Cinema<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services">Electrical Design / Study<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%] flex `} href="/services">Integrated Structured Wiring<ArrowPoint/></Link>
            </li>
            <li className={` py-[12px] text-start border-b-[1px] border-[#39b54a]`}>
              <Link className={`${fonts.servicesText} ml-[45%]  flex`} href="/services/security">Access Control<ArrowPoint/></Link>
            </li>
          </ul>
        )}
      </ul>
    </>
  );
};

export default Services;
