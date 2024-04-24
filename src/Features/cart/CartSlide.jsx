import Product from "../product/Product";

function CartSlide() {
  return (
    <div className="">
      <div className="bg-red-400 py-2 gap-3 relative">
        {/* <div className="w-8 h-8 text rounded-sm  bg-[url('src/assets/leftArr.png')] bg-no-repeat bg-center bg-white absolute top-0 bottom-0 left-2 my-auto z-10 drop-shadow-md"></div> */}
        <Product image="chair1" />

        {/* <div className="w-8 h-8 text rounded-sm  bg-[url('src/assets/rightArr.png')] bg-no-repeat bg-center bg-white absolute top-0 bottom-0 right-2 my-auto z-10 mx-2 drop-shadow-md"></div> */}
      </div>
    </div>
  );
}

export default CartSlide;
