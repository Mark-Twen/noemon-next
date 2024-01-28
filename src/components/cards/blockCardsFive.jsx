"use client"
import { client } from "../../utils/configSanity";
import { urlFor } from "../../utils/configSanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import fonts from "../../components/fonts/fonts.module.scss";
import styles from "../../components/cards/blockCards.module.scss";
// import { url } from "inspector";

import React, { useState,} from "react";
import CardModal from "../modalWindow/kitCardsModal"




  const KitCardFour = ({dataFive}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState([]);
    
  
    const openModal = (item) => {
      if (item) {
        setSelectedItem(item);
        setIsModalOpen(true);
      } else {
        console.error('Item is undefined or null');
      }
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <h1 className={`${fonts.productCardTitle} text-center pb-[60px] mt-[120px]  w-[1770px] mx-auto`}>Experience the pinnacle of lighting technology with our LED chips, where exceptional performance, reliability, and versatility converge to redefine the boundaries of smart home illumination, offering a spectrum of possibilities for personalized lighting experiences.</h1>
        <div className="grid grid-cols-3 gap-4 grid-rows-4 mx-[80px]">
          {Array.isArray(dataFive) && dataFive.length > 0 ? (
            dataFive.map((item) => (
              <ul key={item?._id} className={styles.cardsContainer} onClick={() => openModal(item)}>
                <li className={styles.cardsList}>
                  <Image
                    src={urlFor(item.image).url()}
                    alt="product image card 1"
                    width={186}
                    height={186}
                    className="absolute top-[16px] left-[16px]"
                  />
                  <div className="flex flex-col pl-[230px] pt-4  w-[486px]">
                    <span className={fonts.portfolioCardsSign}>{item.title}</span>
                    <span className={`${fonts.cardsScript} py-4 `}>{item.script}</span>
                    <span className={`${fonts.cardDescroption} `} style={{ textAlign: 'justify' }}>
                      <PortableText value={item?.description} />
                    </span>
                  </div>
                </li>
              </ul>
            ))
          ) : (
            <p>No data available</p>
          )}
          {isModalOpen && selectedItem && (
            <CardModal onClose={closeModal} title={selectedItem.title} script={selectedItem.script} description={selectedItem.description} imageUrl={urlFor(selectedItem.image).url()} >
              {/* Content for modal window */}
            </CardModal>
          )}
        </div>
      </>
    );
  };
  
  export default KitCardFour;