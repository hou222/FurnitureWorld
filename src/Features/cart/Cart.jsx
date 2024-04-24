function Cart({ image }) {
  return (
    <div className="bg-[#F6F9FC]">
      <div>
        <img src={`src/assets/chair5.png`} alt="product" />
      </div>
      <div className="flex justify-center items-center gap-2">
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
    </div>
  );
}

export default Cart;
