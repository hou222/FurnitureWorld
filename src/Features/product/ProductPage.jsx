import { useContext, useEffect } from "react";
import Rating from "../cart/Rating";
import { MyContext } from "../../MyContext";
import { useParams } from "react-router";
import ProductPageImage from "./ProductPageImage";

function ProductPage() {
  const { setColor, products } = useContext(MyContext);
  const { id } = useParams();
  useEffect(() => {
    setColor(false);
  }, [setColor]);

  const selectedProduct = products.filter((product) => {
    if (product.id.toString() === id) return product;
  });
  console.log(selectedProduct);

  return (
    <div className="bg-[#F6F9FC]">
      <div className="max-w-screen-xl mx-auto flex flex-col  ll:flex-row ll:gap-[30px] p-3 ll:py-10">
        <ProductPageImage image={selectedProduct[0].image} />

        {/* //////////////////////////////////////////////////////////////////////////// */}
        <div className="flex flex-col gap-3 items-start ">
          <p className="text-3xl font-bold ll:text-4xl ">
            {selectedProduct[0].nameP}
          </p>
          <p className="text-sm ll:text-base">
            Brand:<span className="font-semibold">Xiaomi</span>
          </p>
          <p className="text-sm flex gap-2  items-center ll:text-base">
            Rated:
            <Rating />
            (50)
          </p>
          <div>
            <p className="text-sm font-semibold ll:text-base">Option</p>
            <div className="flex justify-start items-center gap-2 text-sm py-2">
              <div className="bg-[#FCE9EC] py-2 px-3 rounded-md text-[#d23f57] lg:py-[10px] lg:px-4">
                option 1
              </div>
              <div className="bg-[#00000014] py-2 px-3 rounded-md lg:py-[10px] lg:px-4">
                option 2
              </div>
              <div className="bg-[#00000014] py-2 px-3 rounded-md lg:py-[10px] lg:px-4">
                option 3
              </div>
              <div className="bg-[#00000014] py-2 px-3 rounded-md lg:py-[10px] lg:px-4">
                option 4
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-sm font-semibold ll:text-base">Type</p>
            <div className="flex justify-start items-center gap-2 text-sm py-2 ">
              <div className="bg-[#FCE9EC] py-2 px-3 rounded-md text-[#d23f57] lg:py-[10px] lg:px-4">
                type 1
              </div>
              <div className="bg-[#00000014] py-2 px-3 rounded-md lg:py-[10px] lg:px-4 ">
                type 2
              </div>
              <div className="bg-[#00000014] py-2 px-3 rounded-md  ">
                type 3
              </div>
            </div>
          </div>
          <div className="py-2 flex flex-col gap-1">
            <p className="text-[#d23f57] font-bold text-2xl ll:text-3xl">
              ${selectedProduct[0].newPrice}.00
            </p>
            <p className="text-sm ll:text-base">Stock Available</p>
          </div>
          <button className="text-white bg-[#d23f57] py-2 px-7 rounded-md font-semibold text-sm ll:text-base ll:py-3 ll:px-9">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
