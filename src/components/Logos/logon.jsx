"use client"
import React, {useState} from "react"
import logon from "../../../public/json/logon.json"
import fonts from "../fonts/fonts.module.scss"


const Logon = ({type, text, name}) => {
    const [data, setData] = useState(logon)

    const filterData = data.filter((item) => item.type === type)

    return (
        <div >
        {filterData.map((item) => (
            <div key={item.name}>
              <p className={fonts.callExpertText}>{item.text}</p>             
            </div>
          ))
        }

       
      </div>
    )
}

export default Logon