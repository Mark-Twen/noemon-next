"use client"

import { PortableText } from "@portabletext/react";
import Image from "next/image";

import { urlFor } from "../../utils/configSanity";

import fonts from "../fonts/fonts.module.scss";
import styles from "../cards/blockCards.module.scss"
// import { url } from "inspector";

import React, { useState,} from "react";
import CardModal from "../modalWindow/kitCardsModal"


const KitCardTwo = ({ dataThree }) => {
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
      <h1 className={`${fonts.productCardTitle} text-center pb-[60px] mt-[120px] w-[1770px] mx-auto`}>Experience the perfect blend of style and functionality as our LED Strip Lights not only enhance the aesthetics of your space but also provide energy-efficient and long-lasting illumination, adding a touch of brilliance to your smart home.</h1>
      <div className="grid grid-cols-3 gap-4 grid-rows-4 mx-[80px]">
        {Array.isArray(dataThree) && dataThree.length > 0 ? (
          dataThree.map((item) => (
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

export default KitCardTwo;