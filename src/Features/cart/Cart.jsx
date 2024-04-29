import { useContext, useEffect } from "react";
import Rating from "./Rating";
import { MyContext } from "../../MyContext";

function Cart() {
  const { setColor } = useContext(MyContext);
  useEffect(() => {
    setColor(false);
  }, [setColor]);
  return (
    <div className="bg-[#F6F9FC] p-3">
      <div className="flex justify-center items-center p-2">
        <img
          src={`src/assets/chair5.png`}
          alt="product"
          className="w-80 h-80"
        />
      </div>
      <div className="flex justify-center items-center gap-2 py-3">
        <div className="w-14 h-14 flex border justify-center items-center bg-white rounded-xl border-red-500">
          <img
            src="src/assets/chair5.png"
            alt="product"
            className="w-10 h-10"
          />
        </div>
        <div className="w-14 h-14 flex border justify-center items-center bg-white rounded-xl">
          <img
            src="src/assets/chair5.png"
            alt="product"
            className="w-10 h-10"
          />
        </div>
        <div className="w-14 h-14 flex border justify-center items-center bg-white rounded-xl">
          <img
            src="src/assets/chair5.png"
            alt="product"
            className="w-10 h-10"
          />
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////// */}
      <div className="flex flex-col gap-3 items-start ">
        <p className="text-3xl font-bold ">Grey Sofa</p>
        <p className="text-sm">
          Brand:<span className="font-semibold">Xiaomi</span>
        </p>
        <p className="text-sm flex gap-2  items-center">
          Rated:
          <Rating />
          (50)
        </p>
        <div>
          <p className="text-sm font-semibold">Option</p>
          <div className="flex justify-start items-center gap-2 text-sm py-2">
            <div className="bg-[#FCE9EC] py-2 px-3 rounded-md text-[#d23f57]">
              option 1
            </div>
            <div className="bg-[#00000014] py-2 px-3 rounded-md">option 2</div>
            <div className="bg-[#00000014] py-2 px-3 rounded-md">option 3</div>
            <div className="bg-[#00000014] py-2 px-3 rounded-md">option 4</div>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Type</p>
          <div className="flex justify-start items-center gap-2 text-sm py-2">
            <div className="bg-[#FCE9EC] py-2 px-3 rounded-md text-[#d23f57]">
              type 1
            </div>
            <div className="bg-[#00000014] py-2 px-3 rounded-md">type 2</div>
            <div className="bg-[#00000014] py-2 px-3 rounded-md">type 3</div>
          </div>
        </div>
        <div className="py-2">
          <p className="text-[#d23f57] font-bold text-2xl">$200.00</p>
          <p className="text-sm">Stock Available</p>
        </div>
        <button className="text-white bg-[#d23f57] py-2 px-7 rounded-md font-semibold text-sm">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
