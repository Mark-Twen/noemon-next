"use client";

import { useState } from "react";
import products from "../../../public/json/smartProduct.json";

import Image from "next/image";

import styles from "./smartProducts.module.scss";
import fonts from "../fonts/fonts.module.scss";
import Link from "next/link";

const SmartProducts = () => {
  const [data, setData] = useState(products);

  return (
    <>
      <h1 className={`${fonts.productCardTitle} mb-[70px] ml-[80px] text-start`}>
        Discover Smart Home Products:
      </h1>
      <ul className={`${styles.container} mx-auto`}>
        {data.map((item, index) => (
          <li key={item.name} className={`${styles.list}   my-[40px]`}>
            <a href={item.link}>
            <Image
              src={item.img}
              alt="image"
              width={370}
              height={246}  
              objectFit="cover"            
              className={`${styles.listImg} ${index !== data.length - 1 ? 'mb-[24px]' : 'mb-[20px] mt-[28px]'}  `}              
            />
            <p className={`${fonts.productCardTitle} text-center`}>
              {item.title}
            </p>           
            </a>
          </li>
        ))}

        <button
          className={`${fonts.smartProdBtm} px-[68px] py-[13px] ml-[5%] mt-[40px] bg-[#282828] rounded-md `}
        >
          <Link href="productPage">All Products</Link>{" "}
        </button>
      </ul>
    </>
  );
};
export default SmartProducts;
