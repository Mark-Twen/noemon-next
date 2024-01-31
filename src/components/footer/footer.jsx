import Image from "next/image";
import Logo from "../../../public/img/logo/LOGO-4x.png";
// import ModalWindContacts from "../modalWind/modalWindContact";

import pointImg from "../../../public/icon/placePointAround.png";
import clockImg from "../../../public/icon/clock.png";
import phone from "../../../public/icon/Icons SM.png";
import mail from "../../../public/icon/Mail.png";

import styles from "./footer.module.scss";
import fonts from "../fonts/fonts.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex flex-row w-[screen] items-end justify-around bg-[#282828] mt-[120px] ">
      <div className="flex flex-col pb-[131px]">
        <Image
          src={Logo}
          alt="logo"
          width={254}
          height={81}
          className="pt-[80px] pb-[110px]"
        />
        <a
          className={`flex flex-row relative ${styles.adresslink}`}
          href="https://maps.app.goo.gl/ThuH5UekzaMwf9BM9"
          target="_blank"
        >
          <span className="absolute top-[10%] left-0  rounded-full border-green">
            <Image
              src={pointImg}
              alt="pointImage"
              width={36}
              height={36}
              // className="mx-[8px] my-[4px]"
            />
          </span>
          <span className={` ${fonts.footerSchedule} w-[288px] ml-[50px]`}>
            29 Bermondsey Rd. Toronto, ON, M48 1Z7, Canada
          </span>
        </a>
        {/* <ModalWindContacts>
          29 Bermondsey Rd. Toronto, ON, M48 1Z7, Canada
        </ModalWindContacts> */}
      </div>
      {/* Working hour */}
      <div className="flex flex-row pb-[130px] items-end">
        <div className="">
          <Image
            src={clockImg}
            alt="clockImage"
            width={36}
            height={36}
            className=""
          />
        </div>
        <div className=" ml-[16px] my-auto">
          <table>
            <tr>
              <td className={`${fonts.footerSchedule}`}>Mo - Th: </td>
              <td className={`${fonts.footerSchedule}`}>
                9.00 AM - 9.00 PM
              </td>
            </tr>
            <tr>
              <td className={`${fonts.footerSchedule}`}>Sa - Su: </td>
              <td className={`${fonts.footerSchedule}`}>
                9.00 AM - 5.00 PM
              </td>
            </tr>
          </table>
        </div>
      </div>

      {/* mail and phone */}
      <div className="pb-[130px]">
        <div>
          {/* mail */}
          <Link
            className={`flex flex-row ${fonts.footerSchedule}`}
            href="mailto:info@noemon.ca"
          >
            <Image src={mail} alt="mail" width={36} height={36} />
            <span className="ml-[16px]">info@noemon.ca</span>
          </Link>
        </div>

        {/* phone */}
        <div className="flex flex-row relative w-[320px]">
          <Image
            src={phone}
            alt="phone"
            width={36}
            height={36}
            className="absolute top-[20%] left-0"
          />
          <table className="ml-[50px]">
            <tr>
              <td className={`${fonts.footerSchedule}`}>Landline:</td>
              <td>
                <Link
                  className={`${fonts.footerSchedule}`}
                  href="tel:14169017513"
                >
                  1-416-901-7513
                </Link>
              </td>
            </tr>
            <tr>
              <td className={`${fonts.footerSchedule}`}>Cellphone:</td>
              <td>
                <Link
                  className={`${fonts.footerSchedule}`}
                  href="tel:4162705563"
                >
                  416-270-5563
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Footer;