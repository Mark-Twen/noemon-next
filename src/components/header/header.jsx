import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/img/logo/LOGO-4x.png";
import fonts from "../fonts/fonts.module.scss";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <section className="flex w-screen bg-[#282828] layout">
        {/* LOGO */}
        <div className="py-8 ml-[3%] ">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={254}
              height={81}
              priority={true}
            />
          </Link>
        </div>

        {/* Links */}

        <div className={`flex py-[60px] ml-[40%]  ${fonts.linkcolor}`}>
          {/* <Link className={`pr-[12%] ${fonts.linkcolor}`} href="">
            Home
          </Link> */}
          <Link
            className={`pr-[12%]  ${fonts.linkcolor} ${styles.link}`}
            href=""
          >
            Services
          </Link>
          <Link
            className={`pr-[12%] ${fonts.linkcolor} ${styles.link}`}
            href="/productPage"
          >
            Products
          </Link>
          <Link
            className={`pr-[12%] ${fonts.linkcolor} ${styles.link}`}
            style={{ whiteSpace: "nowrap" }}
            href=""
          >
            About us
          </Link>
          <Link
            className={`pr-[12%] ${fonts.linkcolor} ${styles.link}`}
            href=""
          >
            Contact
          </Link>
        </div>

        {/* Contacts */}
        <div className="flex flex-col pl-[15%] py-[36px] ">
          <Link
            className={`pb-3 ${fonts.linkcolor} ${styles.link}`}
            href="tel:18005339263"
          >
            1-800-533-9263
          </Link>
          <Link
            className={`${fonts.linkcolor} ${styles.link}`}
            href="mailto:info@noemon.ca"
          >
            info@noemon.ca
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;
