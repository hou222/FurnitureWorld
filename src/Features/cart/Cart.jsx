import { IoMdClose } from "react-icons/io";
function Cart({ isOpen, handleCart }) {
  return (
    <div
      className={` transition-all duration-300 absolute top-0 h-screen w-full bg-white lg:transition-none lg:h-auto lg:w-fit lg:px-5 lg:py-3 lg:static z-10 ${
        !isOpen ? "right-0 block" : "-right-full"
      }`}
    >
      <div className="border-b px-10 py-6 flex justify-between items-center">
        <div>4 item</div>
        <IoMdClose
          color="#7d879c"
          size={23}
          className="cursor-pointer lg:hidden"
          onClick={handleCart}
        />
      </div>
      <div className="bg-red-200 flex justify-between">
        <div>
          <button>+</button>
          <p>1</p>
          <button>-</button>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <p>Comfortable Sofa</p>
            <p>$150.00 x 2</p>
            <p>$300.00</p>
          </div>
        </div>
        <IoMdClose color="#7d879c" size={20} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Cart;
