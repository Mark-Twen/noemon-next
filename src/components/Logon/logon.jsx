"use client";
import React, { useState } from "react";
import logon from "../../../public/json/logon.json";
import fonts from "../fonts/fonts.module.scss";
import Btn from "../button/btnLogonRight";

import styles from "./logon.module.scss";

const Logon = ({ type }) => {
  const [data, setData] = useState(logon);

  const filterData = data.filter((item) => item.type === type);

  return (
    <div className=" bg-[#565A5C] relative pb-[143px] mt-[120px] layout ">
      {filterData.map((item) => (
        <div key={item.name} className={`${styles.container}`}>
          <div >
            <h1 className={`${fonts.logoTitle} w-[431px] pb-[40px] pl-[80px]`}>
              {item.title}
            </h1>
            <div className={styles.btmPosition}>
              <Btn />
            </div>
          </div>
          <p
            className={`${fonts.callExpertText} w-[1315px] pl-[20px]`}
            style={{ textAlign: "justify" }}
          >
            <span className={`${fonts.logonGreenText}`}>{item.greenText}</span>{" "}
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Logon;
