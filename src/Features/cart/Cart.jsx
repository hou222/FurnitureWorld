import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
function Cart({ isOpen, handleCart }) {
  const { color } = useContext(MyContext);
  return (
    <div
      className={`flex flex-col justify-between transition-all duration-300 absolute  top-0 h-screen w-full bg-white sm:w-2/3 md:w-1/2 lg:w-1/4      z-20  ${
        isOpen ? "right-0 block" : "-right-full"
      }`}
    >
      <div className=" px-10 py-6 flex justify-between items-center ">
        <div className="flex gap-2 text-sm items-center font-semibold text-[#0f3460]">
          <HiOutlineShoppingBag color="#0f3460" />4 item
        </div>
        <IoMdClose
          color="#7d879c"
          size={23}
          className="cursor-pointer"
          onClick={handleCart}
        />
      </div>
      <div className="overflow-auto h-full">
        <CartItem />
      </div>

      <div className=" px-6 py-6 flex flex-col gap-2">
        <button
          className={`bg-[${
            color ? "#4BB4B4" : "#d23f57"
          }] text-white py-2 font-semibold text-sm w-full rounded-md`}
        >
          Checkout Now ($867.00)
        </button>
        <button
          className={`py-2  w-full border border-[${
            color ? "#4BB4B4" : "#d23f57"
          }] text-[${
            color ? "#4BB4B4" : "#d23f57"
          }] font-semibold text-sm rounded-md`}
        >
          View Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
