import { IoIosMenu } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SearchBar from "../Features/search/SearchBar";
import { IconContext } from "react-icons";
import { useContext, useState } from "react";
import Nav from "./Nav";
import { MyContext } from "../MyContext";
import { useNavigate } from "react-router";
import Logo from "./Logo";
import Cart from "../Features/cart/Cart";
import category from "../assets/category.png";
import rightArr from "../assets/right.png";
import { NavLink } from "react-router-dom";
import Product from "../Features/product/Product";

function HeaderMiddle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { color, cartProducts } = useContext(MyContext);
  const navigate = useNavigate();

  function handleNav() {
    setIsOpen((open) => !open);
    isOpen
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  }
  function handleDropDown() {
    setIsOpen1((open) => !open);
  }
  function handleCart() {
    setCartOpen((open) => !open);
    cartOpen
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  }
  return (
    <div className="">
      <div className=" text-center w-full p-3 lg:px-5 lg:pt-5 lg:p-0 ">
        <IconContext.Provider
          value={{ size: "23", color: "#7d879c", className: "cursor-pointer" }}
        >
          <div className=" max-w-screen-xl mx-auto  ">
            <div className="flex justify-center items-center relative ">
              <button className="z-1 lg:hidden bg-blue-500" onClick={handleNav}>
                <IoIosMenu className="absolute top-4  left-6" />
              </button>
              {/* <Nav isOpen={isOpen} handleOpen={handleOpen} /> */}
              <div className="flex flex-col justify-center items-center gap-5 ">
                <Logo
                  onClick={() => {
                    navigate("/home");
                  }}
                />
                <SearchBar />
              </div>
              <div className="flex justify-center items-center gap-2  absolute top-1 right-6 ">
                <button className="hover:bg-[#F3F5F9] rounded-full p-2">
                  <HiOutlineUser />
                </button>
                <button
                  className="hover:bg-[#F3F5F9] rounded-full p-2"
                  onClick={handleCart}
                >
                  <HiOutlineShoppingBag />
                </button>

                {cartProducts.length > 0 && (
                  <p
                    className={`w-5 h-5 bg-[${
                      color ? "#4BB4B4" : "#d23f57"
                    }] rounded-full text-center text-[13px] text-white font-semibold absolute top-0 -right-2`}
                  >
                    {cartProducts.length}
                  </p>
                )}
              </div>
            </div>
            <div className=" lg:flex lg:justify-between lg:items-center lg:mt-7">
              <div className="relative z-20">
                <button
                  className="hidden lg:w-[200px] border rounded-sm drop-shadow-xl bg-[#F3F5F9] lg:flex lg:gap-2 lg:items-center lg:justify-between px-2 py-1 cursor-pointer "
                  onClick={handleDropDown}
                >
                  <div className="flex gap-2">
                    <img src={category} alt="category" />
                    <p>Categories</p>
                  </div>

                  <img src={rightArr} alt="right-arrow" className="w-3 h-3" />
                </button>
                <ul
                  className={`border bg-white w-[200px] absolute top-8  left-0 rounded-sm ${
                    !isOpen1 && "hidden"
                  }`}
                >
                  <NavLink
                    to="/category/new"
                    className="flex gap-2 px-3 py-2  hover:bg-slate-50 hover:cursor-pointer hover:text-[#4BB4B4]"
                    onClick={handleDropDown}
                  >
                    <img src={category} alt="category" />
                    <p>Top New Product</p>
                  </NavLink>
                  <NavLink
                    to="/category/top"
                    className="flex gap-2 px-3 py-2  hover:bg-slate-50 hover:cursor-pointer hover:text-[#4BB4B4]"
                    onClick={handleDropDown}
                  >
                    <img src={category} alt="category" />
                    <p>Top Selling Product</p>
                  </NavLink>
                </ul>
              </div>
              <Nav isOpen={isOpen} handleOpen={handleNav} />
              <Cart isOpen={cartOpen} handleCart={handleCart} />
              <div
                className={`absolute z-40 top-0 left-0 right-0 bottom-0 sm:bg-[#00000094] duration-300 ${
                  cartOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
              ></div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default HeaderMiddle;
