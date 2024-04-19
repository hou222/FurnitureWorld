import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import MainTop from "./MainTop";
import MainCenter from "./MainCenter";
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
          <MainTop key={index} />
        ))}
      </Slide>
      <MainCenter />
      <div className="px-3">
        <h1 className="font-semibold text-3xl">All Product</h1>
        <p className="text-[#7D879C] text-sm">
          Tall blind but were, been floks not the expand
        </p>
        <div className="grid grid-cols-1">
          <div className="border">
            <div className="">
              <div className="bg-[#F6F9FC] w-full h-[200px]"></div>
              <img src="src/assets/chair1.png" alt="chair" />
            </div>
          </div>
          {/* ------------------------------------------------------ */}
          <div className="border">
            <div className="">
              <div className="bg-[#F6F9FC] w-full h-[200px]"></div>
              <img src="src/assets/chair4.png" alt="chair" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
