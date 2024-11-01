import "react-slideshow-image/dist/styles.css";
import Slider from "react-slick";
import Products from "../Features/product/Products";
import SlideDetails from "./SlideDetails";
import ImportantDetails from "./ImportantDetails";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../MyContext";
import ProductSlide from "../Features/product/ProductSlide";
import { motion } from "framer-motion";

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
    slide === 0 && index === 1 && slider?.current?.slickPrev();
    slide === 1 && index === 0 && slider?.current?.slickNext();
    setSlide(index);
  }

  const marqueeVariants = {
    animate: {
      x: [600, -600],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };
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

      <div className="px-3 lg:px-0 py-6">
        <div className="bg-[#4BB4B4] text-white p-2 relative flex justify-center ">
          <div className="bg-white text-black w-3/4 sm:w-2/4 sm:1/3 mx-auto text-center font-bold text-2xl py-6 absolute sm:text-nowrap  top-0 z-10  sm:-left-5 flex justify-center items-center sm:bottom-0 xl:w-1/4 sm:-skew-x-[20deg] ">
            BLACK FRIDAY SALE!
          </div>
          <div className="border-dashed border flex justify-center flex-col items-center  w-[100vw] relative max-w-full h-[206px]  overflow-x-hidden  sm:flex-row sm:h-[80px] sm:pt-">
            <motion.div
              className="absolute whitespace-nowrap  will-change-transform"
              variants={marqueeVariants}
              animate="animate"
            >
              <h1 className=" text-3xl text-white  font-bold sm:font-semibold italic">
                pay only for your loving furnitures
              </h1>
            </motion.div>
            <div className="absolute bottom-0 sm:right-0 sm:top-0 sm:bottom-0 bg-[#4BB4B4] flex flex-col align-center p-2 justify-center">
              <button className="bg-white text-black px-4 py-1 font-semibold hover:bg-[#4BB4B4]  hover:text-white ">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>

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
