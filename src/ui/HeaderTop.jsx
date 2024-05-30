import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { GrTwitter } from "react-icons/gr";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import { useScroll } from "../hooks/useScroll";
function HeaderTop() {
  const { color } = useContext(MyContext);
  const scroll = useScroll();

  return (
    <div
      className={` bg-[#2b3445] px-4 py-2 md:px-8 ${scroll ? "hidden" : ""}`}
    >
      <div className="flex justify-between  max-w-screen-xl mx-auto">
        <div className="flex gap-5 items-center ">
          <p
            className={`bg-[${
              color ? "#4BB4B4" : "#d23f57"
            }] py-1 px-3 rounded-2xl text-white font-bold text-sm`}
          >
            HOT
          </p>
          <p className="text-white">Free Express Shipping</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaInstagram className="text-white w-4 h-4 md:w-5 md:h-5" />
          <FaFacebookSquare className="text-white w-4 h-4 md:w-5 md:h-5" />
          <GrTwitter className="text-white w-4 h-4 md:w-5 md:h-5" />
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
