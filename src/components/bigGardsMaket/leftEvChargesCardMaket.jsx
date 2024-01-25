"use client"
import Image from "next/image";
import React, { useState } from "react";

import Cards from "../../../public/json/evChargesCards.json"

import fonts from "../fonts/fonts.module.scss"

const LeftCards = ({type}) => {
    const [data, setData] = useState(Cards);

    const filter = data.filter((item) => item.type === type);
  
    if (filter.length === 0) {  
      return null;
    }
    const filteredItem = filter[0];

    return (
        <div className="flex flex-row bg-[#F8F9FA]">
            <Image             
            src={filteredItem.image}
            alt={filteredItem.name}
            width={1000}
            height={620}
            className="py-[80px]"
            />

        <div className="flex flex-col w-[671px] pl-[78px] pt-[104px]   ">
            <p className={`${fonts.productCardTitle} pb-[24px]`}>{filteredItem.title}</p>
            <p className={fonts.neomonInfo} style={{ textAlign: "justify" }}>{filteredItem.text}</p>
        </div>

        </div>
    )

}

export default LeftCards