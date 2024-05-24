import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { MyContext } from "../../MyContext";
import Product from "../product/Product";

function Search() {
  const { query } = useParams();
  const { products, setColor } = useContext(MyContext);
  //const [filtredProducts, setFiltredProducts] = useState("");
  const navigate = useNavigate();
  //console.log(`the result is: ${query}`);

  useEffect(() => {
    setColor(true);
  }, [setColor]);

  const filteredProducts = products.filter((product) => {
    if (product.nameP.toLowerCase().includes(query)) return product;
  });

  //console.log(filteredProducts);

  return (
    <div className=" max-w-screen-xl mx-auto  ">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ll:grid-cols-3 px-3 py-6">
        {filteredProducts.map((product, index) => (
          <Product
            key={index}
            product={product}
            onClick={() => {
              navigate(`/product/${product.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
