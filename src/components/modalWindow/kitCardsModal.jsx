"use client";
import styles from "./kitCardsModal.module.scss";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import fonts from "../fonts/fonts.module.scss";

import closeBtm from "../../../public/icon/closeBtm.png";
import { useState } from "react";

const KitModal = ({onClose, title, script, description, imageUrl }) => {

  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose(true);
    onClose();
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={(e) => handleClickOutside(e)}>
      <div className={styles.modal}>
        {/* <button onClick={onClose} className={styles.closeButton}>
        <Image src={closeBtm} alt="clothBtm" onClick={(e) => handleClose(e)} />
        </button> */}
        <div className="flex flex-row relative">
          <div className="absolute top-[20px] left-[20px] ">
            <Image
              src={imageUrl}
              alt="Product"
              width={662}
              height={654}
              className="pb-[6px]"
            />
          </div>

          <div className="flex flex-col w-[1250px] pl-[710px] pt-[30px]  ">
            <h2 className={` ${fonts.advantagesTitle}`}>{title}</h2>
            <p className={`${fonts.heroBtn} my-[48px]`}>{script}</p>
            <p className={`${fonts.neomonInfo} pb-[400px]`}>
              <PortableText value={description} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KitModal;
