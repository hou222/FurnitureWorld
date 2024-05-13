import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import CartSlide from "../Features/cart/CartSlide";
import Products from "../Features/product/Products";
import SlideDetails from "./SlideDetails";
import ImportantDetails from "./ImportantDetails";
import { useContext, useEffect } from "react";
import { MyContext } from "../MyContext";
function Home() {
  const { setColor } = useContext(MyContext);
  useEffect(() => {
    setColor(true);
  }, [setColor]);
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
    <div className="max-w-screen-xl mx-auto">
      <Slide>
        {slideImages.map((image, index) => (
          <SlideDetails key={index} />
        ))}
      </Slide>
      <ImportantDetails />

      <CartSlide>
        <h1 className="font-semibold text-3xl mb-3">Top New Product</h1>
        <p className="text-[#7D879C] text-sm mb-8">
          Tall blind but were, been floks not the expand
        </p>
      </CartSlide>

      <Products>
        <h1 className="font-semibold text-3xl mb-3">All Product</h1>
        <p className="text-[#7D879C] text-sm mb-8">
          Tall blind but were, been floks not the expand
        </p>
      </Products>
    </div>
  );
}

export default Home;
