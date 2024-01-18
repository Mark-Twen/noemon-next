"use server"

import { client } from "../../utils/configSanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import  Hero from "../../components/productPage/prodPageHero"

import { urlFor } from "../../utils/configSanity";

import fonts from "../../components/fonts/fonts.module.scss";
import styles from "../../components/cards/blockCards.module.scss"
import { url } from "inspector";

import Logon from "../../components/Logos/logon"
import RightBtm from "../../components/button/btnLogonRight"



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

 

const productPage = async () => {
  const data = await getData();
  const jbl = await getJbl();
  const perlisten = await getPerlisten()
  

  return (
    <div className="layout">
<Hero />
<div className="pt-[120px] pb-[140px] bg-[#565A5C] px-[104px] mt-[120px] relative">
  <Logon type="productPage"  />
  <RightBtm />
</div>

{/* First big Card(JDL) {prodCardOne} */}
    <div className={`flex item-center justify-center w-[1710px]  mx-auto ${styles.prodCardRight}`}>
      {jbl?.map((item) => (
          <ul key={item?._id} className="relative flex flex-row" >
            <li className="w-[700px] flex flex-col pl-6">              
              <span className={`${fonts.productCardTitle} pt-[81px] pb-[24px] `}>{item.title}</span>
              <span className={fonts.bigCardDescription} style={{ textAlign: 'justify' }}>
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
      ))
      }
    </div>

    {/* First card block with products */}
    <h1 className={`${fonts.productCardTitle} text-center pb-[60px]`}>Elevate your home entertainment experience to new heights with our range of smart speakers, soundbars, and audio solutions</h1>
      <div className="grid grid-cols-3 gap-4 grid-rows-4 mx-[80px]">
        {data?.map((item) => (
          <ul key={item?._id} className={styles.cardsContainer}>
           <li className={styles.cardsList}>           
              <Image
                src={urlFor(item.image).url()}
                alt="product image card 1"
                width={186}
                height={186}
                className="absolute top-[16px] left-[16px]"
              />            
            <li className="flex flex-col pl-[230px] pt-4  w-[486px]">
              <span className={fonts.portfolioCardsSign}>{item.title}</span>
              <span className={`${fonts.cardsScript} py-4 `}>{item.script}</span> 
                          
              <span className={`${fonts.cardDescroption} `} style={{ textAlign: 'justify' }}>
              <PortableText  value={item?.description} />
              </span>
            </li>
           </li>
          </ul>  
        ))}
      </div>
      {/*  productCard Two Perlisten */}

      <div className={`w-[1770px] mt-[116px] bg-[#FFF] mx-auto ${styles.prodCard}`}>
        {perlisten.map((item) => (
          <div key={item?._id} className={`flex flex-row ${styles.prodCard}`}>
            <Image 
             src={urlFor(item.image).url()}
             alt="product image card 2"
             width={1000}
             height={622}
            />
            <div className="flex flex-col w-[720px] pl-[48px] justify-start item-start">
            <span className={`${fonts.productCardTitle} pt-[81px] pb-[24px] `}>{item.title}</span>
              <span className={fonts.bigCardDescription} style={{ textAlign: 'justify' }}>
                <PortableText value={item?.description} />
              </span> 
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default productPage;
