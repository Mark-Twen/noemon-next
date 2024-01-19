"use client";
import styles from "./kitCardsModal.module.scss";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import fonts from "../fonts/fonts.module.scss";
import CallExpertBtm from "../button/callExpertBtm";

import { FcApproval } from "react-icons/fc";

const kitModal = ({ onClose, title, script, description, imageUrl }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          <FcApproval />
        </button>
        <div className="flex flex-row relative">
          <Image
            src={imageUrl}
            alt="Product"
            width={200}
            height={200}
            className="absolute top-[36px] left-[10px]"
          />

          <div className="flex flex-col w-[700px] pl-[230px] pt-[30px] ">
            <h2 className={`mb-[40px] ${fonts.heroBtn}`}>{title}</h2>
            {/* <p>{script}</p> */}
            <p className={`${fonts.callExpertBtm}`}>
              <PortableText value={description} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default kitModal;
