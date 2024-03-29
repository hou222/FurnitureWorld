import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { GrTwitter } from "react-icons/gr";
function HeaderTop() {
  return (
    <div className=" bg-[#2b3445] px-4 p-4 md:px-8">
      <div className="flex justify-between  max-w-screen-xl mx-auto">
        <div className="flex gap-5 items-center ">
          <p className="bg-[#4BB4B4] py-1 px-3 rounded-2xl text-white font-bold text-sm">
            HOT
          </p>
          <p className="text-white">Free Express Shipping</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdOutlineWbSunny className="text-white w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
          <FaInstagram className="text-white w-4 h-4 md:w-5 md:h-5" />
          <FaFacebookSquare className="text-white w-4 h-4 md:w-5 md:h-5" />
          <GrTwitter className="text-white w-4 h-4 md:w-5 md:h-5" />
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
