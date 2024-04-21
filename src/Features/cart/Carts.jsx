import Cart from "./Cart";

function Carts() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ll:grid-cols-3">
      <Cart image="chair1" />
      <Cart image="chair4" />
      <Cart image="chair3" />
      <Cart image="chair1" />
      <Cart image="chair4" />
      <Cart image="chair3" />
      <Cart image="chair1" />
      <Cart image="chair4" />
      <Cart image="chair3" />
    </div>
  );
}

export default Carts;
