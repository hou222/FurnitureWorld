import { IoMdClose } from "react-icons/io";
function CartItem() {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-t">
      <div className="flex gap-3 justify-start items-center">
        <div className="">
          <button className="border border-red-400 text-red-400 rounded-full w-7 h-7 flex justify-center text-base ">
            +
          </button>
          <p>1</p>
          <button className="border rounded-full w-7 h-7 flex justify-center text-base ">
            -
          </button>
        </div>
        <img
          src="src/assets/chair1.png"
          alt="product photo"
          className="w-16 h-16"
        />
        <div className="flex flex-col items-start gap-1">
          <p className="font-semibold text-sm">Comfortable Sofa</p>
          <p className="text-xs text-gray-400">$150.00 x 2</p>
          <p className="text-sm font-semibold text-[#d23f57]">$300.00</p>
        </div>
      </div>
      <IoMdClose color="#7d879c" size={20} className="cursor-pointer" />
    </div>
  );
}

export default CartItem;
