"use client";
import Image from "next/image";
import React, { useState } from "react";
import bigCard from "../../../public/json/bigCard.json";
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
    <div className={`flex flex-row w-[1770px]  justify-between mt-[120px] mx-auto ${styles.prodCard}`}>
      <Image
        src={filteredItem.image}
        alt={filteredItem.name}
        width={1000}
        height={620}
        className={`${styles.prodCardLeftImg}`}
      />
      <div className="flex flex-col w-[670px] px-[24px] ">
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
