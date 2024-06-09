import "react-slideshow-image/dist/styles.css";
import Slider from "react-slick";
import Products from "../Features/product/Products";
import SlideDetails from "./SlideDetails";
import ImportantDetails from "./ImportantDetails";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../MyContext";
import ProductSlide from "../Features/product/ProductSlide";

function Home() {
  const { setColor } = useContext(MyContext);
  const [slide, setSlide] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    setColor(true);
  }, [setColor]);

  const handlerScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const slider = useRef(null);
  function handleSlide(index) {
    setSlide(index);
    index === 0 ? slider?.current?.slickPrev() : slider?.current?.slickNext();
  }
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="relative">
        <Slider ref={slider} {...settings}>
          {slideImages.map((image, index) => (
            <SlideDetails key={index} handlerScroll={handlerScroll} />
          ))}
        </Slider>
        <div className=" absolute bottom-0  left-0 right-0 flex justify-center items-center gap-2 py-7">
          {slideImages.map((_, index) => (
            <button
              key={index}
              className={`w-5 h-5 border border-[#4BB4B4] rounded-full flex justify-center items-center ${
                slide === index ? "" : ""
              }`}
              onClick={() => handleSlide(index)}
            >
              <div
                className={`${
                  slide === index ? "bg-[#4BB4B4]" : "bg-transparent"
                } w-3 h-3 rounded-full`}
              ></div>
            </button>
          ))}
        </div>
      </div>
      <ImportantDetails />

      <ProductSlide newP={false}>
        <h1 className="font-semibold text-3xl mb-3">Top Selling Product</h1>
        <p className="text-[#7D879C] text-sm mb-8">
          Tall blind but were, been floks not the expand
        </p>
      </ProductSlide>

      <ProductSlide newP={true}>
        <h1 className="font-semibold text-3xl mb-3">Top New Product</h1>
        <p className="text-[#7D879C] text-sm mb-8">
          Tall blind but were, been floks not the expand
        </p>
      </ProductSlide>

      <Products>
        <h1 className="font-semibold text-3xl mb-3" ref={myRef}>
          All Product
        </h1>
        <p className="text-[#7D879C] text-sm mb-8">
          Tall blind but were, been floks not the expand
        </p>
      </Products>
    </div>
  );
}

export default Home;
