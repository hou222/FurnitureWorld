import { useNavigate } from "react-router";
import Product from "../product/Product";
import { useContext, useRef, useState } from "react";
import { MyContext } from "../../MyContext";

function CartSlide({ children }) {
  const indexRef = useRef();
  const [move, setMove] = useState(false);
  const { products } = useContext(MyContext);
  const navigate = useNavigate();
  const indexSlide = 0;
  console.log(indexRef.current.children[0].offsetWidth);
  function handleMove() {
    setMove((move) => !move);
  }
  return (
    <div className="px-3 py-6">
      {children}
      <div
        /* className="relative overflow-hidden" */ className="relative bg-yellow-500"
      >
        <button
          className="w-8 h-8 text rounded-sm  bg-[url('src/assets/leftArr.png')] bg-no-repeat bg-center bg-white absolute top-0 bottom-0 left-2 my-auto z-10 drop-shadow-md cursor-pointer hover:bg-green-100 duration-300"
          onClick={() => handleMove()}
        ></button>
        <div
          ref={indexRef}
          className={`py-2 gap-3  flex flex-row justify-start items-center ease-out duration-300 ${
            move
              ? `translate-x-[-${indexRef.current.children[0].offsetWidth}px]`
              : ""
          }`}
        >
          {products.map((product, index) =>
            index <= 3 ? (
              <Product
                key={index}
                product={product}
                onClick={() => {
                  navigate("/cart");
                }}
              />
            ) : (
              ""
            )
          )}
        </div>
        <div className="w-8 h-8 text rounded-sm  bg-[url('src/assets/rightArr.png')] bg-no-repeat bg-center bg-white absolute top-0 bottom-0 right-2 my-auto z-10 mx-2 drop-shadow-md cursor-pointer hover:bg-green-100 duration-300"></div>
      </div>
    </div>
  );
}

export default CartSlide;
