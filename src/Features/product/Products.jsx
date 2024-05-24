import { useContext } from "react";
import Product from "./Product";
import { MyContext } from "../../MyContext";
import { useNavigate } from "react-router";
function Products({ children }) {
  const { products } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className="px-3 py-6">
      {children}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ll:grid-cols-3">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            onClick={() => {
              navigate("/product");
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
