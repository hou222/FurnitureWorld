import Cart from "../Features/cart/Cart";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div>
      <Header />
      {/* <Main /> */}
      <Cart />
    </div>
  );
}

export default AppLayout;
