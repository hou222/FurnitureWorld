import { useState } from "react";

function ProductPageImage({ image }) {
  const [select, setSelect] = useState(0);

  const containers = ["img1", "img2", "img3"];
  function handleSelect(index) {
    setSelect(index);
  }
  return (
    <div className="flex justify-center items-center flex-col p-2">
      <img
        src={image}
        alt="product"
        className="w-80 h-80 ll:w-[550px] ll:h-[550px]"
      />

      <ul className="flex justify-center items-center gap-2 py-3">
        {containers.map((container, index) => (
          <li
            key={container}
            className={`w-14 h-14 flex border justify-center items-center bg-white rounded-xl cursor-pointer  ${
              select === index ? "border-red-500" : ""
            }`}
            onClick={() => {
              handleSelect(index);
            }}
          >
            <img src={image} alt="product" className="w-10 h-10 " />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPageImage;
