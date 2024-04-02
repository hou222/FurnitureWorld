import { IoIosMenu } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SearchBar from "../Features/SearchBar";
import { IconContext } from "react-icons";

function HeaderMiddle({ handleOpen }) {
  return (
    <div className=" text-center w-full bg-white p-3 lg:p-5">
      <IconContext.Provider
        value={{ size: "23", color: "#7d879c", className: "cursor-pointer" }}
      >
        <div className="flex justify-center items-center max-w-screen-xl mx-auto relative ">
          <button className="z-1 lg:hidden bg-blue-500" onClick={handleOpen}>
            <IoIosMenu className="absolute top-4  left-6" />
            {/* <IoIosMenu className="absolute top-0 bottom-0 my-auto left-6" /> */}
          </button>
          {/* <Nav isOpen={isOpen} handleOpen={handleOpen} /> */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className=" flex flex-col  border-2 justify-center w-11 h-11 lg:w-14 lg:h-14 rounded-full border-[#2b3445] items-center lg:absolute lg:top-0 lg:bottom-0 lg:my-auto lg:left-6">
              <img src="src/assets/market1.png" alt="market" />
            </div>
            <SearchBar />
          </div>
          <div className="flex justify-center items-center gap-2  absolute top-1 right-6 ">
            {/* <button className="hover:bg-[#F3F5F9] rounded-full p-2">
              <BiSearch className="lg:hidden" />
            </button> */}
            <button className="hover:bg-[#F3F5F9] rounded-full p-2">
              <HiOutlineUser />
            </button>
            <button className="hover:bg-[#F3F5F9] rounded-full p-2">
              <HiOutlineShoppingBag />
            </button>
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
