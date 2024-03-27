import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBar from "../Features/SearchBar";
import { IconContext } from "react-icons";
function HeaderMiddle() {
  return (
    <div
      /* className=" bg-fuchsia-400 flex justify-around items-center" */ className=" text-center relative inline-block w-full"
    >
      <IconContext.Provider value={{ size: "25" }}>
        <IoIosMenu className="absolute top-0 bottom-0 my-auto left-5 " />
        <div className=" flex flex-col justify-center items-center">
          <MdOutlineShoppingCart />
          <p>E-commerce</p>
        </div>
        <div className="flex justify-center items-center gap-2  absolute top-0 bottom-0 my-auto right-5">
          <CiSearch />
          {/* <SearchBar /> */}
          <CiUser />
          <MdOutlineShoppingCart />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default HeaderMiddle;
