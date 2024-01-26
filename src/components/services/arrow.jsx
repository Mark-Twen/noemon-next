 import Image from  "next/image"
 import arrowPoint from "../../../public/icon/Arrow_right_light.png"


 const arrow = () => {

    return (
        <div className="mt-[4px] pl-[10px] " >
            <Image 
            src={arrowPoint}
            alt="arrow"
            width={20}
            height={17}            
            />
        </div>
    )

 }
 export default arrow