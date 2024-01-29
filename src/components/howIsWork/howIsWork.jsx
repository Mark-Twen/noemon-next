"use client";
import React, { useState } from "react";
import list from "../../../public/json/howIsWork.json";
import fonts from "../fonts/fonts.module.scss";

import doubleArrow from "../../../public/icon/doubleArrow.png";

import Image from "next/image";

const HowIsWork = () => {
  const [data, setData] = useState(list);

  return (
    <>
    <h1 className={`${fonts.productCardTitle} text-start mt-[120px] mb-[40px]`}>
      How does it work{" "}
    </h1>
    <ul className="flex flex-row justify-around items-center ">
      {data.map((item, index) => (
        <React.Fragment key={item.title}>
          <li
            className={`flex flex-col px-[24px] bg-[#292D36] w-[348px] border rounded-md ${
              index !== data.length - 1 ? 'mb-[20px]' : ''
            }`}
          >
            <Image
              src={item.icon}
              alt="icon"
              width={160}
              height={160}
              className="pt-[20px] mx-auto hover:scale-110"
            />
            <p className={`${fonts.howIsWorkTitle} mx-auto py-[24px]`}>
              {item.title}
            </p>
            <p className={`${fonts.howIsWorkScript} mx-auto w-[300px] h-[130px]`}>
              {item.script}
            </p>
          </li>          
          {index !== data.length - 1 && (
            <li className="flex items-center">
              <Image src={doubleArrow} alt="doubleArrow" width={76} height={76} />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  </>
  );
};

export default HowIsWork;
