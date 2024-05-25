import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../../MyContext";
import Product from "../product/Product";

function TopSell() {
  const { products } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className=" max-w-screen-xl mx-auto">
      <div className="px-3 lg:px-0 py-6">
        <h1 className="font-semibold text-3xl mb-3">Top New Product</h1>
        <p className="text-[#7D879C] text-sm mb-8">
          Tall blind but were, been floks not the expand
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ll:grid-cols-3">
          {products.map((product, index) =>
            index <= 6 ? (
              <div key={product.id} className="px-[6px]">
                <Product
                  product={product}
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                  }}
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default TopSell;
