import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import MainTop from "./MainTop";
import MainCenter from "./MainCenter";
import Carts from "../Features/cart/Carts";
import CartSlide from "../Features/cart/CartSlide";
import Products from "../Features/product/Products";
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
    <div className="max-w-screen-xl mx-auto">
      <Slide>
        {slideImages.map((image, index) => (
          <MainTop key={index} />
        ))}
      </Slide>
      <MainCenter />
      <div className="px-3 py-6">
        <h1 className="font-semibold text-3xl mb-3">Top New Product</h1>
        <p className="text-[#7D879C] text-sm mb-8">
          Tall blind but were, been floks not the expand
        </p>
        <CartSlide />
      </div>
      <div className="px-3 py-6">
        <h1 className="font-semibold text-3xl mb-3">All Product</h1>
        <p className="text-[#7D879C] text-sm mb-8">
          Tall blind but were, been floks not the expand
        </p>
        <Products />
      </div>
    </div>
  );
}

export default Main;
