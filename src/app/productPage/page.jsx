"use server";

import { client } from "../../utils/configSanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import Hero from "../../components/productPage/prodPageHero";

import { urlFor } from "../../utils/configSanity";

import fonts from "../../components/fonts/fonts.module.scss";
import styles from "../../components/cards/blockCards.module.scss";
import { url } from "inspector";

import Logon from "../../components/Logos/logon";
import RightBtm from "../../components/button/btnLogonRight";
import KitCardBlockOne from "../../components/cards/blockCardsOne";
import BlockCardTwo from "../../components/cards/blockCardsTwo";
import BlockCardThree from "../../components/cards/blockCardsThree";
import BlockCardFour from "../../components/cards/blockCardsFour";
import BlockCardFive from "../../components/cards/blockCardsFive";
import BlockCardSix from "../../components/cards/blockCardsSix";

import RightCards from "../../components/bigGardsMaket/rightCardsMaket";
import LeftCard from "../../components/bigGardsMaket/leftCardMaket";

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

async function getDataThree() {
  const query = `*[_type == 'prodcardthree'] `;
  const dataThree = await client.fetch(query);

  return dataThree;
}
async function getDataFour() {
  const query = `*[_type == 'prodCardsFour'] {
  title,
  script,
  description,
  _id,
  image
}`;
  const dataFour = await client.fetch(query);
  return dataFour;
}

async function getDataFive() {
  const query = `*[_type == 'prodCardFive'] {
  title,
  script,
  description,
  _id,
  image
}`;
  const dataFive = await client.fetch(query);

  return dataFive;
}

async function getDataSix() {
  const query = `*[_type == 'prodCardFive'] {
  title,
  script,
  description,
  _id,
  image
}`;
  const dataSix = await client.fetch(query);

  return dataSix;
}
const productPage = async () => {
  const data = await getData();
  const dataTwo = await getDataTwo();
  const dataThree = await getDataThree();
  const dataFour = await getDataFour();
  const dataFive = await getDataFive();
  const dataSix = await getDataSix();
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
      {/* kitCardTwo END */}

      <RightCards type="ledStrip_R" />

      {/* kitCardThree */}
      <BlockCardThree dataThree={dataThree} />

      <LeftCard type="ledDrivers_L" />

      {/* kitCardFour  */}
      <BlockCardFour dataFour={dataFour} />

      <RightCards type="ledChip_R" />

      {/* kitCardFive  */}

      <BlockCardFive dataFive={dataFive} />

      <LeftCard type="ledChannels_L" />

      <BlockCardSix dataSix={dataSix} />
    </div>
  );
};

export default productPage;
