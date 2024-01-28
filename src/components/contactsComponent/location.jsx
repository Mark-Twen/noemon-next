import Image from "next/image";
import mapImg from "../../../public/img/map/location.png";
import Link from "next/link";
import CompanyName from "../../../public/img/map/companiName.png"
import placePoint from "../../../public/icon/placePoint.png"
import placePointAround from "../../../public/icon/placePointAround.png"

import fonts from "../fonts/fonts.module.scss";

const LocationMap = () => {
  return (
    <div className="flex flex-row bg-[#F7F7F7]  ">
      <div className="relative">
      <Image
        src={mapImg}
        alt="mapImg"
        width={1280}
        height={1280}
        className="py-[80px]"
      />
        <Image
        src={CompanyName}
        alt="CompanyName"
        width={83}
        height={28}
        className="bottom-[51%] left-[42%]  absolute"
      />
       <Image
        src={placePoint}
        alt="placePoint"
        width={34}
        height={36}
        className="bottom-[52%] left-[44%]  absolute"
      />

      <div className="flex flex-row w-[340px] absolute top-[100px] left-[20px]">
      <Image
        src={placePointAround}
        alt="placePointAround"
        width={36}
        height={36}
        className="absolute top-[10px] left-[20px]"
      />
      <p className={`${fonts.mapAddress} absolute left-[70px]`}>250 Shields Court Unit #23, Markham, ON. L3R 9W7</p>
      </div>

      </div>
      <div className="flex-col pl-[48px] w-[571px]">
        <p className={`${fonts.productCardTitle} pt-[80px] pb-[20px]`}>
          Find us:
        </p>
        <Link
          className={`${fonts.heroBtn} hover:text-[#39B54A]`}
          href="https://www.google.com/maps/search/29+Bermondsey+Rd.+Toronto,+ON,+M48+1Z7,+Canada/@43.7163896,-79.3130297,17.75z?authuser=0&entry=ttu" target="_blank"
        >
          29 Bermondsey Rd. Toronto, ON, M48 1Z7, Canada
        </Link>

        <div className="flex flex-col">
        <p className={`${fonts.productCardTitle} pt-[100px] pb-[20px]`}>Call us:</p>
        <Link className={`${fonts.heroBtn} pb-[12px] hover:text-[#39B54A]`} href="tel:4169017513">Landline: 416-901-7513</Link>
        <Link className={`${fonts.heroBtn} hover:text-[#39B54A]`} href="tel:4162705563">Cellphone: 416-270-5563</Link>
        </div>

        <div className="flex flex-col">
            <p className={`${fonts.productCardTitle} pt-[100px] pb-[20px]`}>Email us:</p>
            <Link className={`${fonts.heroBtn} hover:text-[#39B54A]`} href="mailto:info@noemon.ca">info@noemon.ca</Link>
        </div>

        <div>
            <p className={`${fonts.productCardTitle} pt-[100px] pb-[20px]`}>Opening Hours:</p>
            <table>
            <tr>
              <td className={`${fonts.heroBtn}`}>Mo - Th: </td>
              <td className={`${fonts.heroBtn}`}>
                9.00 AM - 9.00 PM
              </td>
            </tr>
            <tr>
              <td className={`${fonts.heroBtn}`}>Sa - Su: </td>
              <td className={`${fonts.heroBtn}`}>
                9.00 AM - 5.00 PM
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
