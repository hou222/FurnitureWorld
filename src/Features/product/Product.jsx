function Product({ product, onClick }) {
  return (
    <div
      className=" border-2 border-[#F6F9FC] relative p-3 w-full h-[410px]  cursor-pointer "
      onClick={onClick}
    >
      <div className="bg-[#F6F9FC] w-full h-[200px] absolute top-0 right-0 left-0 p-3">
        <p className="bg-[#4BB4B4] w-fit px-4 py-1 text-[11px] text-white font-semibold">
          5% off
        </p>
        {product.newProd && (
          <img
            src="src/assets/new.png"
            alt="new"
            className="absolute top-0 right-0"
          />
        )}
      </div>
      <img
        src={product.image}
        alt="chair"
        className="w-[250px] h-[250px] absolute top-10 left-0 right-0 m-auto"
      />
      <div className="absolute  bottom-0 left-0 right-0 p-3">
        <p className="font-semibold text-2xl">{product.nameP}</p>
        <div className="flex gap-2 mt-5">
          <div className="rounded-full w-3 h-3 bg-[#7D879C]"></div>
          <div className="rounded-full w-3 h-3 bg-[#4E97FD]"></div>
          <div className="rounded-full w-3 h-3 bg-[#33D067]"></div>
          <div className="rounded-full w-3 h-3 bg-[#BE7374]"></div>
        </div>
        <div className="flex justify-between mt-2 items-center">
          <p className="text-green-600 text-sm font-semibold xl:text-base">
            ${product.newPrice}.00{" "}
            <span className="line-through text-[#7D879C]">
              ${product.oldPrice}.00
            </span>
          </p>
          <div className="w-8 h-8  text-2xl border border-[#4BB4B4]  text-[#4BB4B4] bg-[url('src/assets/plus.png')] bg-no-repeat bg-center "></div>
        </div>
      </div>
    </div>
  );
}

export default Product;
