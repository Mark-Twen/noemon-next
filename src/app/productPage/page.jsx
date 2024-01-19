"use server";

import { client } from "../../utils/configSanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import Hero from "../../components/productPage/prodPageHero";
import stripLight from "../../../public/img/prodPageImg/stripLight.png";

import { urlFor } from "../../utils/configSanity";

import fonts from "../../components/fonts/fonts.module.scss";
import styles from "../../components/cards/blockCards.module.scss";
import { url } from "inspector";

import Logon from "../../components/Logos/logon";
import RightBtm from "../../components/button/btnLogonRight";
import KitCardBlockOne from "../../components/cards/blockCardsOne";
import BlockCardTwo from "../../components/cards/blockCardsTwo";

async function getData() {
  const query = `*[_type == 'prodKit'] {
  title,
  script,
  description,
  _id,
  image
}`;
  const data = await client.fetch(query);
  console.log(data);
  return data;
}

async function getJbl() {
  const query = `*[_type == 'jbl']`;
  const dataJbl = await client.fetch(query);
  return dataJbl;
}
async function getPerlisten() {
  const query = `*[_type == 'perlisten']`;
  const dataPerlisten = await client.fetch(query);
  return dataPerlisten;
}

async function getDataTwo() {
  const query = `*[_type == 'prodKitTwo'] {
  title,
  script,
  description,
  _id,
  image
}`;
  const data = await client.fetch(query);
  return data;
}

const productPage = async () => {
  const data = await getData();
  const dataTwo = await getDataTwo();
  const jbl = await getJbl();
  const perlisten = await getPerlisten();

  return (
    <div className="layout">
      <Hero />
      <div className="pt-[120px] pb-[140px] bg-[#565A5C] px-[104px] mt-[120px] relative">
        <Logon type="productPage" />
        <RightBtm />
      </div>

      {/* First big Card(JDL) {prodCardOne} */}
      <div
        className={`flex item-center justify-center w-[1710px]  mx-auto ${styles.prodCardRight}`}
      >
        {jbl?.map((item) => (
          <ul key={item?._id} className="relative flex flex-row">
            <li className="w-[700px] flex flex-col pl-6">
              <span
                className={`${fonts.productCardTitle} pt-[81px] pb-[24px] `}
              >
                {item.title}
              </span>
              <span
                className={fonts.bigCardDescription}
                style={{ textAlign: "justify" }}
              >
                <PortableText value={item?.description} />
              </span>
            </li>
            <li>
              <Image
                src={urlFor(item.image).url()}
                alt="product image card 1"
                width={1000}
                height={622}
                className={styles.prodCardRightImg}
              />
            </li>
          </ul>
        ))}
      </div>

      {/* First card block with products */}
      <KitCardBlockOne data={data} />

      {/*  productCard Two Perlisten */}

      <div
        className={`w-[1770px] mt-[116px] bg-[#FFF] mx-auto ${styles.prodCard}`}
      >
        {perlisten.map((item) => (
          <div key={item?._id} className={`flex flex-row `}>
            <Image
              src={urlFor(item.image).url()}
              alt="product image card 2"
              width={1000}
              height={622}
              className={`${styles.prodCardLeftImg}`}
            />
            <div className="flex flex-col w-[720px] pl-[48px] justify-start item-start">
              <span
                className={`${fonts.productCardTitle} pt-[81px] pb-[24px] `}
              >
                {item.title}
              </span>
              <span
                className={fonts.bigCardDescription}
                style={{ textAlign: "justify" }}
              >
                <PortableText value={item?.description} />
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* kitCardTwo  */}
      <BlockCardTwo dataTwo={dataTwo} />

      <div className={`flex flex-row w-[1770px] mx-auto ${styles.prodCardRight}`}>
        <div className="flex flex-col pl-[27px] pt-[27px]">
          <p className={`${fonts.productCardTitle} pb-[27px]`}>LED Strip Lights</p>
          <span className={`${fonts.bigCardDescription}`} style={{ textAlign: 'justify' }}>Illuminate your living spaces with the magic of LED Strip Lights, the epitome of modern lighting innovation. Our LED Strip Lights redefine ambiance, offering a dynamic and customizable lighting experience for your smart home. Whether you're creating a vibrant party atmosphere, a cozy reading nook, or a soothing evening glow, our LED Strips effortlessly adapt to your mood and preferences. With smart controls allowing for color adjustments, brightness variations, and synchronized patterns, these versatile lights seamlessly integrate with your smart home ecosystem. Elevate your surroundings with the captivating hues and flexibility of LED Strip Lights, where every room becomes a canvas for personalized illumination.</span>
        </div>
        <Image 
        src={stripLight}
        alt="cards"
        width={1000}
        height={622}
        className={`${styles.prodCardRightImg}`}
        />
      </div>
    </div>
  );
};

export default productPage;
