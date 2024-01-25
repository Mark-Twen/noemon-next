"use client"
import React, {useState} from "react"
import logon from "../../../public/json/logon.json"
import fonts from "../fonts/fonts.module.scss"
import Btn from "../button/btnLogonRight"


const Logon = ({type}) => {
    const [data, setData] = useState(logon)

    const filterData = data.filter((item) => item.type === type)

    return (
        <div className=" bg-[#565A5C] relative pb-[143px] mt-[120px] layout " >
        {filterData.map((item) => (          
            <div key={item.name}>
              <h1 className={`${fonts.logoTitle} pt-[120px] pb-[24px] pl-[80px]`}>{item.title}</h1>
              <p className={`${fonts.callExpertText} w-[1700px] pl-[80px]`}><span className={`${fonts.logonGreenText}`}>{item.greenText}</span> {item.text}</p>     
              <Btn />        
            </div>
          ))
        }

       
      </div>
    )
}

export default Logon