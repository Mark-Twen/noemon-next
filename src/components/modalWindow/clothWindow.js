"use client"
import { useRef } from "react";

const CloseBtm = () => {
    const modalRef = useRef(null);
  
    const handleClickOutside = (event) => {
      event.stopPropagation();
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowSignUp(!showSignUp);
      }
    };
  
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowSignUp(!showSignUp);
      }
    };
  
    return (
        handleClickOutside()
    )
}

export default CloseBtm