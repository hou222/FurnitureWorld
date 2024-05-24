import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { MyContext } from "../../MyContext";
import chair1 from "../../assets/chair1.png";
function CartItem() {
  const { color } = useContext(MyContext);
  return (
    <div className="flex justify-between items-center px-6 py-4 border-t">
      <div className="flex gap-3 justify-start items-center">
        <div className="">
          <button
            className={`border border-[${
              color ? "#4BB4B4" : "#d23f57"
            }] text-[${
              color ? "#4BB4B4" : "#d23f57"
            }] rounded-full w-7 h-7 flex justify-center text-base`}
          >
            +
          </button>
          <p>1</p>
          <button className="border rounded-full w-7 h-7 flex justify-center text-base ">
            -
          </button>
        </div>
        <img src={chair1} alt="product photo" className="w-16 h-16" />
        <div className="flex flex-col items-start gap-1">
          <p className="font-semibold text-sm">Comfortable Sofa</p>
          <p className="text-xs text-gray-400">$150.00 x 2</p>
          <p
            className={`text-sm font-semibold text-[${
              color ? "#4BB4B4" : "#d23f57"
            }]`}
          >
            $300.00
          </p>
        </div>
      </div>

      <button className="hover:bg-[#F3F5F9] rounded-full p-1 cursor-pointer">
        <IoMdClose color="#7d879c" size={20} />
      </button>
    </div>
  );
}

export default CartItem;