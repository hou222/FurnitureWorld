function SlideDetails() {
  return (
    <div
      className={`bg-[url("src/assets/bg-furniture.jpg")]  bg-cover h-[600px] w-full bg-center bg-no-repeat flex flex-col justify-center items-center sm:items-start gap-4 p-10 text-[#2B3445]`}
    >
      <p className="font-semibold text-sm sm:text-base">A Beautiful House_</p>
      <p className="text-4xl font-bold w-[190px]  text-center sm:w-full sm:text-start sm:text-5xl lg:text-6xl">
        Modern Furniture.
      </p>
      <p className="text-center text-[#4B566B] text-sm sm:text-start max-w-[600px]">
        How employees , surely the a said drops. bathroom expectec taht systems
        let place. Her safely been little. Enterprises flows films it a fly the
        of {"wasn't"} designer the her thought. Enterprises flows fimls it a fly
        the of {"wasn't"} designer.
      </p>
      <button className="bg-[#4BB4B4] text-white px-6 py-2 mt-5">
        Shop Now
      </button>
      {/* <div className="bg-red-600 w-full flex justify-center gap-2 p-3 absolute bottom-0">
      <div className="w-3 h-3 border  border-blue-600 rounded-full"></div>
      <div className="w-3 h-3 border border-blue-600 rounded-full"></div>
    </div> */}
    </div>
  );
}

export default SlideDetails;
