import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { MyContext } from "../../MyContext";
function CartItem({ item }) {
  const { color, setCartProducts, cartProducts } = useContext(MyContext);

  function increaseQuantity() {
    const increasedQuantity = cartProducts.map((product) =>
      product.product.id === item.product.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCartProducts(increasedQuantity);
  }
  function decreaseQuantity() {
    const decreasedQuantity = cartProducts.map((product) =>
      product.product.id === item.product.id
        ? {
            ...product,
            quantity:
              product.quantity > 0 ? product.quantity - 1 : product.quantity,
          }
        : product
    );
    setCartProducts(decreasedQuantity);
  }

  function deleteItem() {
    const updateCart = cartProducts.filter(
      (product) => product.product.id !== item.product.id
    );

    setCartProducts(updateCart);
  }

  function handleItemQuantityPrice() {
    return item.product.newPrice * item.quantity;
  }
  return (
    <div className="flex justify-between items-center px-6 py-4 border-t">
      <div className="flex gap-3 justify-start items-center">
        <div className="flex flex-col justify-center items-center">
          <button
            className={`border border-[${
              color ? "#4BB4B4" : "#d23f57"
            }] text-[${
              color ? "#4BB4B4" : "#d23f57"
            }] rounded-full w-7 h-7 flex justify-center text-base`}
            onClick={() => increaseQuantity(item)}
          >
            +
          </button>
          <p>{item.quantity}</p>
          <button
            className="border rounded-full w-7 h-7 flex justify-center text-base "
            onClick={decreaseQuantity}
          >
            -
          </button>
        </div>
        <img
          src={item.product.image}
          alt="product photo"
          className="w-16 h-16"
        />
        <div className="flex flex-col items-start gap-1">
          <p className="font-semibold text-sm">{item.product.nameP}</p>
          <p className="text-xs text-gray-400">
            ${item.product.newPrice}.00 x {item.quantity}
          </p>
          <p
            className={`text-sm font-semibold text-[${
              color ? "#4BB4B4" : "#d23f57"
            }]`}
          >
            ${handleItemQuantityPrice()}.00
          </p>
        </div>
      </div>

      <button
        className="hover:bg-[#F3F5F9] rounded-full p-1 cursor-pointer"
        onClick={deleteItem}
      >
        <IoMdClose color="#7d879c" size={20} />
      </button>
    </div>
  );
}

export default CartItem;
