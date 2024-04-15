import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
function Main() {
  const slideImages = [
    {
      url: "src/assets/bg-furniture.jpg",
      caption: 1,
    },
    {
      url: "src/assets/bg-furniture.jpg",
      caption: 2,
    },
  ];
  return (
    <div>
      <Slide>
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`bg-[url(${image.url})]  bg-cover h-[600px] w-full bg-center bg-no-repeat flex flex-col justify-center items-center gap-4 p-10 text-[#2B3445] relative`}
          >
            <p className="font-semibold text-sm">A Beautiful House_</p>
            <p className="text-4xl font-bold w-[190px]  text-center">
              Modern Furniture.
            </p>
            <p className="text-center text-[#4B566B] text-sm">
              How employees , surely the a said drops. bathroom expectec taht
              systems let place. Her safely been little. Enterprises flows films
              it a fly the of {"wasn't"} designer the her thought. Enterprises
              flows fimls it a fly the of {"wasn't"} designer.
            </p>
            <button className="bg-[#4BB4B4] text-white px-6 py-2 mt-5">
              Shop Now
            </button>
            <div className="bg-red-600 w-full flex justify-center gap-2 p-3 absolute bottom-0">
              <div className="w-3 h-3 border border-blue-600 rounded-full"></div>
              <div className="w-3 h-3 border border-blue-600 rounded-full"></div>
            </div>
          </div>
        ))}
      </Slide>
      <div>ljljlkjlkjljljljl</div>
    </div>
  );
}

export default Main;
