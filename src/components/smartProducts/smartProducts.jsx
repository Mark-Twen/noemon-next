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
      <h1 className={`${fonts.productCardTitle} mb-[70px] text-start`}>
        Discover Smart Home Products:
      </h1>
      <ul className={`${styles.container} mx-auto`}>
        {data.map((item) => (
          <li key={item.name} className={`${styles.list} mx-[40px] my-[40px]`}>
            <a href={item.link}>
            <Image
              src={item.img}
              alt="image"
              width={370}
              height={246}
              objectFit="cover"
              className={styles.listImg}
            />
            <p className={`${fonts.productCardTitle} pb-[24px]`}>
              {item.title}
            </p>
            </a>
          </li>
        ))}

        <button
          className={`${fonts.smartProdBtm} px-[68px] py-[13px] ml-[36%] mt-[40px] bg-[#282828] rounded-md `}
        >
          <Link href="productPage">All Products</Link>{" "}
        </button>
      </ul>
    </>
  );
};
export default SmartProducts;
