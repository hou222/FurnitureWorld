import { useContext, useEffect } from "react";
import Rating from "../cart/Rating";
import { MyContext } from "../../MyContext";
import { useParams } from "react-router";
import ProductPageImage from "./ProductPageImage";
import ProductOption from "./ProductOption";
import ProductType from "./ProductType";

function ProductPage() {
  const { setColor, products, setCartProducts, cartProducts } =
    useContext(MyContext);
  const { id } = useParams();
  useEffect(() => {
    setColor(false);
  }, [setColor]);

  const selectedProduct = products.filter((product) => {
    if (product.id.toString() === id) return product;
  });
  //console.log(selectedProduct);

  const addProductToCartFunction = (prod) => {
    const alreadyProduct = cartProducts.find(
      (item) => item.product.id === prod.id
    );

    if (alreadyProduct) {
      const latestProductUpdate = cartProducts.map((item) =>
        item.product.id === prod.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartProducts(latestProductUpdate);
    } else {
      setCartProducts([...cartProducts, { product: prod, quantity: 1 }]);
    }
  };

  return (
    <div className="bg-[#F6F9FC]">
      <div className="max-w-screen-xl mx-auto flex flex-col  ll:flex-row ll:gap-[30px] p-3 ll:py-10">
        <ProductPageImage image={selectedProduct[0].image} />

        <div className="flex flex-col gap-3 items-start ">
          <p className="text-3xl font-bold ll:text-4xl ">
            {selectedProduct[0].nameP}
          </p>
          <p className="text-sm ll:text-base">
            Brand:
            <span className="font-semibold"> {selectedProduct[0].brand}</span>
          </p>
          <p className="text-sm flex gap-2  items-center ll:text-base">
            Rated:
            <Rating rating={selectedProduct[0].rating} />(
            {selectedProduct[0].reaction})
          </p>
          <ProductOption />
          <ProductType />

          <div className="py-2 flex flex-col gap-1">
            <p className="text-[#d23f57] font-bold text-2xl ll:text-3xl">
              ${selectedProduct[0].newPrice}.00
            </p>
            <p className="text-sm ll:text-base">Stock Available</p>
          </div>
          <button
            className="text-white bg-[#d23f57] py-2 px-7 rounded-md font-semibold text-sm ll:text-base ll:py-3 ll:px-9"
            onClick={() => addProductToCartFunction(selectedProduct[0])}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
