import Product from "./Product";

function Products() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ll:grid-cols-3">
      <Product image="chair1" />
      <Product image="chair4" />
      <Product image="chair3" />
      <Product image="chair1" />
      <Product image="chair4" />
      <Product image="chair3" />
      <Product image="chair1" />
      <Product image="chair4" />
      <Product image="chair3" />
    </div>
  );
}

export default Products;
