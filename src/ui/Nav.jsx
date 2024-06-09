import { IoMdClose } from "react-icons/io";
import downArrow from "../assets/down-arrow.png";
import List from "./List";
import { useScroll } from "../hooks/useScroll";
import { useEffect, useState } from "react";
function Nav({ isOpen, handleOpen }) {
  const scroll = useScroll();
  const [dropDown, setDropDown] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dropDown ? "" : setId(0);
  }, [dropDown]);

  function handleDropDown(id) {
    setDropDown((down) => !down);
    setId(id);
  }
  return (
    <nav
      className={`px-10 py-24 transition-all duration-300 fixed left-0 top-0 h-screen transform w-full flex justify-center items-start bg-white lg:transition-none lg:h-auto lg:w-fit lg:px-5 lg:py-3 lg:static z-10 ${
        !isOpen ? "-translate-x-full lg:translate-x-0 block " : "-left-full"
      } ${scroll ? " lg:hidden" : ""}`}
    >
      <IoMdClose
        color="#7d879c"
        size={23}
        className="absolute top-8 right-10 cursor-pointer lg:hidden"
        onClick={handleOpen}
      />
      <ul className=" flex flex-col w-full gap-4 lg:flex-row font-semibold text-xl lg:text-base lg:font-normal text-[#4b525e] md:m-3 lg:m-0 ">
        <li className="relative group">
          <div
            className={`flex justify-between items-center gap-2 cursor-pointer lg:hover:text-[#4BB4B4] ${
              id === 1 ? "text-[#4BB4B4]" : ""
            }`}
            onClick={() => handleDropDown(1)}
          >
            <a>Home</a>
            <img src={downArrow} className=" w-4 h-4" />
          </div>
          <List dropDown={dropDown} id={id === 1} />
        </li>
        <li className="relative group">
          <div
            className={`flex justify-between items-center gap-2 cursor-pointer lg:hover:text-[#4BB4B4] ${
              id === 2 ? "text-[#4BB4B4]" : ""
            }`}
            onClick={() => handleDropDown(2)}
          >
            <a>Mega Menu</a>
            <img src={downArrow} className=" w-4 h-4" />
          </div>
          <List dropDown={dropDown} id={id === 2} />
        </li>
        <li className="relative group">
          <div
            className={`flex justify-between items-center gap-2 cursor-pointer lg:hover:text-[#4BB4B4] ${
              id === 3 ? "text-[#4BB4B4]" : ""
            }`}
            onClick={() => handleDropDown(3)}
          >
            <a>Full Screen Menu</a>
            <img src={downArrow} className=" w-4 h-4" />
          </div>
          <List dropDown={dropDown} id={id === 3} />
        </li>
        <li className="relative group">
          <div
            className={`flex justify-between items-center gap-2 cursor-pointer lg:hover:text-[#4BB4B4] ${
              id === 4 ? "text-[#4BB4B4]" : ""
            }`}
            onClick={() => handleDropDown(4)}
          >
            <a>User Account</a>
            <img src={downArrow} className=" w-4 h-4" />
          </div>
          <List dropDown={dropDown} id={id === 4} />
        </li>
        <li className="relative group">
          <div
            className={`flex justify-between items-center gap-2 cursor-pointer lg:hover:text-[#4BB4B4] ${
              id === 5 ? "text-[#4BB4B4]" : ""
            }`}
            onClick={() => handleDropDown(5)}
          >
            <a>Vendor Account</a>
            <img src={downArrow} className=" w-4 h-4" />
          </div>
          <List dropDown={dropDown} id={id === 5} />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
