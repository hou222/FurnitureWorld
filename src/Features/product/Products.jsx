import Product from "./Product";

const db = [
  {
    index: 0,
    image: "chair1",
    nameP: "Comfortable Sofa",
    newPrice: 120.0,
    oldPrice: 150.0,
  },
  {
    index: 1,
    image: "chair4",
    nameP: "Comfortable Sofa",
    newPrice: 120.0,
    oldPrice: 150.0,
  },
  {
    index: 2,
    image: "chair2",
    nameP: "Comfortable Sofa",
    newPrice: 120.0,
    oldPrice: 150.0,
  },
  {
    index: 3,
    image: "chair3",
    nameP: "Comfortable Sofa",
    newPrice: 120.0,
    oldPrice: 150.0,
  },
  {
    index: 4,
    image: "chair1",
    nameP: "Comfortable Sofa",
    newPrice: 120.0,
    oldPrice: 150.0,
  },
  {
    index: 5,
    image: "chair4",
    nameP: "Comfortable Sofa",
    newPrice: 120.0,
    oldPrice: 150.0,
  },
  {
    index: 6,
    image: "chair2",
    nameP: "Comfortable Sofa",
    newPrice: 120.0,
    oldPrice: 150.0,
  },
  {
    index: 7,
    image: "chair3",
    nameP: "Comfortable Sofa",
    newPrice: 120.0,
    oldPrice: 150.0,
  },
  {
    index: 8,
    image: "chair2",
    nameP: "Comfortable Sofa",
    newPrice: 120.0,
    oldPrice: 150.0,
  },
];

function Products() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ll:grid-cols-3">
      {db.map((product) => (
        <Product key={product.index} product={product} />
      ))}
      {/* <Product image="chair1" />
      <Product image="chair4" />
      <Product image="chair3" />
      <Product image="chair1" />
      <Product image="chair4" />
      <Product image="chair3" />
      <Product image="chair1" />
      <Product image="chair4" />
      <Product image="chair3" /> */}
    </div>
  );
}

export default Products;
