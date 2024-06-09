import furniture from "../assets/bg-furniture.jpg";
function SlideDetails({ handlerScroll }) {
  return (
    <div
      style={{ "--furniture": `url(${furniture})` }}
      className={`bg-[image:var(--furniture)]  bg-cover h-[600px] w-full bg-center bg-no-repeat flex flex-col justify-center items-center sm:items-start gap-4 p-10 text-[#2B3445]`}
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
      <button
        className="bg-[#4BB4B4] hover:bg-[#3e9292] duration-300 text-white px-6 py-2 mt-5"
        onClick={handlerScroll}
      >
        Shop Now
      </button>
    </div>
  );
}

export default SlideDetails;
