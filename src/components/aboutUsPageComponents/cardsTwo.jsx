import Image from "next/image";
import cardImg from "../../../public/img/about us/teamProject.png";

import fonts from "../fonts/fonts.module.scss";

const card = () => {
  return (
    <div className="flex flex-row justify-between w-[100%] bg-[#F8F9FA] mt-[120px]">
      <Image
        src={cardImg}
        alt="card"
        width={1097}
        height={580}
        className="py-[80px]"
      />
      <div className="flex flex-col pl-[48px] pr-[104px] ">
        <p
          className={`${fonts.bigCardDescription} pt-[104px] w-[671px]`}
          style={{ textAlign: "justify" }}
        >
          A dedicated team lies at the heart of any successful business, and our
          company is no exception. Our team embodies diversity, expertise, and a
          shared commitment to excellence. Each member brings a unique set of
          skills and experiences, creating a dynamic synergy that propels us
          forward.
        </p>

        <p
          className={`${fonts.bigCardDescription} py-[40px] `}
          style={{ textAlign: "justify" }}
        >
          Collaboration is our cornerstone. From visionary leaders charting the
          course to passionate innovators crafting cutting-edge solutions, every
          individual plays a vital role
        </p>

        <p
          className={`${fonts.bigCardDescription}`}
          style={{ textAlign: "justify" }}
        >
          Ultimately, our team is more than the sum of its parts. We're a
          cohesive force, dedicated to delivering exceptional service,
          innovative solutions, and a shared vision of success for our company
          and the clients we serve.
        </p>
      </div>
    </div>
  );
};

export default card;
