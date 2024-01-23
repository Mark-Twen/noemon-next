"use client";
import Image from "next/image";
import React, { useState } from "react";
import bigCard from "../../../public/json/servicesCards.json";

import fonts from "../fonts/fonts.module.scss";
import styles from "../cards/blockCards.module.scss";

const LeftCard = ({ type }) => {
  const [data, setData] = useState(bigCard);

  const filter = data.filter((item) => item.type === type);

  if (filter.length === 0) {  
    return null;
  }
  const filteredItem = filter[0];

  return (
    <div className={`flex flex-row w-[1770px]  justify-around mt-[120px] mx-auto pb-[89px] ${styles.prodCard}`}>
      <Image
        src={filteredItem.image}
        alt={filteredItem.name}
        width={filteredItem.width}
        height={filteredItem.height}
        className={`${styles.prodCardLeftImg} pt-[80px]`}
      />
      <div className="flex flex-col w-[670px] pl-[24px] ">
        <span className={`${fonts.productCardTitle} pt-[81px] pb-[24px]`}>{filteredItem.title}</span>
        <span
          className={fonts.bigCardDescription}
          style={{ textAlign: "justify" }}
        >
          {filteredItem.text}
        </span>
      </div>
    </div>
  );
};

export default LeftCard;
