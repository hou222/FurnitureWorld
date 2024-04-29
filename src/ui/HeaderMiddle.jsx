import { IoIosMenu } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SearchBar from "../Features/SearchBar";
import { IconContext } from "react-icons";
import { useContext, useState } from "react";
import Nav from "./Nav";
import { MyContext } from "../MyContext";

function HeaderMiddle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const { color } = useContext(MyContext);
  function handleOpen() {
    setIsOpen((open) => !open);
  }
  function handleOpen1() {
    setIsOpen1((open) => !open);
  }
  return (
    <div className=" text-center w-full p-3 lg:px-5 lg:pt-5 lg:p-0">
      <IconContext.Provider
        value={{ size: "23", color: "#7d879c", className: "cursor-pointer" }}
      >
        <div className=" max-w-screen-xl mx-auto  ">
          <div className="flex justify-center items-center relative">
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

              <p
                className={`w-5 h-5 bg-[${
                  color ? "#4BB4B4" : "red"
                }] rounded-full text-center text-[13px] text-white font-semibold absolute top-0 -right-2`}
              >
                3
              </p>
            </div>
          </div>
          <div className=" lg:flex lg:justify-between lg:items-center lg:mt-7">
            <button
              className="hidden lg:w-[200px] border rounded-sm drop-shadow-xl bg-[#F3F5F9] lg:flex lg:gap-2 lg:items-center lg:justify-between px-2 py-1 cursor-pointer relative"
              onClick={handleOpen1}
            >
              <div className="flex gap-2">
                <img src="src/assets/category.png" alt="category" />
                <p>Categories</p>
              </div>

              <img
                src="src/assets/right.png"
                alt="right-arrow"
                className="w-3 h-3"
              />
              <ul
                className={`border bg-[#F3F5F9] w-[200px] absolute top-8  left-0 rounded-sm z-[100] ${
                  isOpen1 && "hidden"
                }`}
              >
                <li className="flex gap-2 px-3 py-2  hover:bg-slate-300">
                  <img src="src/assets/category.png" alt="" />
                  <p>Bikes</p>
                </li>
                <li className="flex gap-2 px-3 py-2  hover:bg-slate-300">
                  <img src="src/assets/category.png" alt="" />
                  <p>Electronics</p>
                </li>
                <li className="flex gap-2 px-3 py-2  hover:bg-slate-300">
                  <img src="src/assets/category.png" alt="" />
                  <p>Books</p>
                </li>
                <li className="flex gap-2 px-3 py-2  hover:bg-slate-300">
                  <img src="src/assets/category.png" alt="" />
                  <p>Games</p>
                </li>
              </ul>
            </button>
            <Nav isOpen={isOpen} handleOpen={handleOpen} />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default HeaderMiddle;
