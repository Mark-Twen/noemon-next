import Link from "next/link";
import fonts from "../fonts/fonts.module.scss";

const btnLogonRight = () => {
  return (
    <div>
      <button >
        <Link
          className={`${fonts.callExpertBtm} px-[27px] py-[10px] bg-[#282828] rounded-md  ml-[80px]`}
          href="tel:18005339263"
        >
          Call Expert
        </Link>
      </button>
    </div>
  );
};
export default btnLogonRight;
