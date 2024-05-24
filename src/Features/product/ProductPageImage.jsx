import { useState } from "react";

function ProductPageImage({ image }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  function handleSelect() {
    if (check1) {
      setCheck2(false);
      setCheck3(false);
    }
    if (check2) {
      setCheck1(false);
      setCheck3(false);
    }
    if (check3) {
      setCheck2(false);
      setCheck1(false);
    }
  }
  return (
    <div className="flex justify-center items-center flex-col p-2">
      <img
        src={image}
        alt="product"
        className="w-80 h-80 ll:w-[550px] ll:h-[550px]"
      />

      <div className="flex justify-center items-center gap-2 py-3">
        <div
          className={`w-14 h-14 flex border justify-center items-center bg-white rounded-xl cursor-pointer  ${
            check1 ? "border-red-500" : ""
          }`}
          onClick={() => {
            setCheck1((c) => !c);
            handleSelect();
          }}
        >
          <img src={image} alt="product" className="w-10 h-10 " />
        </div>
        <div
          className={`w-14 h-14 flex border justify-center items-center bg-white rounded-xl cursor-pointer ${
            check2 ? "border-red-500" : ""
          }`}
          onClick={() => {
            setCheck2((c) => !c);
            handleSelect();
          }}
        >
          <img src={image} alt="product" className="w-10 h-10" />
        </div>
        <div
          className={`w-14 h-14 flex border justify-center items-center bg-white rounded-xl cursor-pointer ${
            check3 ? "border-red-500" : ""
          }`}
          onClick={() => {
            setCheck3((c) => !c);
            handleSelect();
          }}
        >
          <img src={image} alt="product" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}

export default ProductPageImage;
