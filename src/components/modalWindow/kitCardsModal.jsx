"use client"
import styles from "./kitCardsModal.module.scss"
import { PortableText } from "@portabletext/react";

import { FcApproval } from "react-icons/fc";

const kitModal = ({ onClose, title, script, description }) => {
    return (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button onClick={onClose} className={styles.closeButton}>
              <FcApproval />
            </button>
            <h2>{title}</h2>
            <p>{script}</p>
            <p>
                <PortableText value={description} />
               </p>
          </div>
        </div>
      );
}
export default kitModal
