import { useNavigate } from "react-router";
import Product from "./Product";
import Slider from "react-slick";
import { useContext, useRef } from "react";
import { MyContext } from "../../MyContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSlide({ children }) {
  const { products } = useContext(MyContext);
  const navigate = useNavigate();

  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-3 py-6">
      {children}
      <div className="slider-container relative">
        <button
          className="w-8 h-8 xl:w-11 xl:h-11  text rounded-sm  bg-[url('src/assets/leftArr.png')] bg-no-repeat bg-center bg-white absolute top-0 bottom-0 left-2 my-auto z-10 drop-shadow-md cursor-pointer hover:bg-green-100 duration-300"
          onClick={() => slider?.current?.slickPrev()}
        ></button>
        <Slider ref={slider} {...settings}>
          {products.map((product, index) =>
            index <= 6 ? (
              <div key={index}>
                <Product
                  product={product}
                  onClick={() => {
                    navigate("/cart");
                  }}
                />
              </div>
            ) : (
              ""
            )
          )}
        </Slider>
        <button
          className="w-8 h-8 xl:w-11 xl:h-11 text rounded-sm  bg-[url('src/assets/rightArr.png')] bg-no-repeat bg-center bg-white absolute top-0 bottom-0 right-2 my-auto z-10 mx-2 drop-shadow-md cursor-pointer hover:bg-green-100 duration-300"
          onClick={() => slider?.current?.slickNext()}
        ></button>
      </div>
    </div>
  );
}

export default ProductSlide;
