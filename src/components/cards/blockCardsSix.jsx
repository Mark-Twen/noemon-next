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




  const KitCardSix = ({dataSix}) => {
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
        <h1 className={`${fonts.productCardTitle} text-center pb-[60px] mt-[120px]  w-[1770px] mx-auto`}>Crafted for seamless integration and versatility, our LED Linear Light Channels not only enhance the aesthetic appeal of your living spaces but also offer a practical and dynamic solution, bringing a touch of modern sophistication to your smart home lighting experience.</h1>
        <div className="grid grid-cols-3 gap-4 grid-rows-4 mx-[80px]">
          {Array.isArray(dataSix) && dataSix.length > 0 ? (
            dataSix.map((item) => (
              <ul key={item?._id} className={styles.cardsContainer} onClick={() => openModal(item)}>
                <li className={styles.cardsList}>
                  <Image
                    src={urlFor(item.image).url()}
                    alt="product image card 1"
                    width={186}
                    height={186}
                    className="absolute top-[16px] left-[16px]"
                  />
                  <div className={`${styles.blockCardsText}`}>
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
  
  export default KitCardSix;