"use client";
import Image from "next/image";
import React, { useState } from "react";
import bigCard from "../../../public/json/securityCards.json";
import fonts from "../fonts/fonts.module.scss";
import styles from "../cards/blockCards.module.scss";

const RightCard = ({ type }) => {
  const [data, setData] = useState(bigCard);

  const filter = data.filter((item) => item.type === type);

  if (filter.length === 0) {  
    return null;
  }
  const filteredItem = filter[0];

  return (
    <div className={`flex flex-row w-[1680px] justify-around mx-auto ${styles.prodCardRight}`}>        
     
      <div className="flex flex-col w-[670px] pl-[24px] ">
        <span className={`${fonts.productCardTitle} pt-[81px] pb-[24px]`}>{filteredItem.title}</span>
        <span
          className={fonts.bigCardDescription}
          style={{ textAlign: "justify" }}
        >
          {filteredItem.text}
        </span>
      </div>
      <Image
        src={filteredItem.image}
        alt={filteredItem.name}
        width={1000}
        height={620}
        className={`${styles.prodCardRightImg}`}
      />
    </div>
  );
};

export default RightCard;