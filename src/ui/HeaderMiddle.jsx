import { IoIosMenu } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
/* import SearchBar from "../Features/SearchBar"; */
import { IconContext } from "react-icons";
function HeaderMiddle() {
  return (
    <div className=" text-center   w-full bg-white p-3">
      <IconContext.Provider value={{ size: "23", color: "#7d879c" }}>
        <div className="flex justify-center items-center max-w-screen-xl mx-auto relative">
          <IoIosMenu className="absolute top-0 bottom-0 my-auto left-6" />
          <div className=" flex flex-col border-2 justify-center p-3 rounded-full border-[#2b3445] items-center">
            <img src="src/assets/market1.png" alt="market" />
          </div>
          <div className="flex justify-center items-center gap-2  absolute top-0 bottom-0 my-auto right-6 ">
            <BiSearch />
            {/* <SearchBar /> */}
            <HiOutlineUser />
            <HiOutlineShoppingBag />
            <p className="w-5 h-5 bg-[#4BB4B4] rounded-full text-center text-[13px] text-white font-semibold absolute top-2 -right-4">
              3
            </p>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default HeaderMiddle;
