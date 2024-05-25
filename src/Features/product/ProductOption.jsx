import { useState } from "react";

function ProductOption() {
  const [select, setSelect] = useState(0);
  const containers = ["option 1", "option 2", "option 3", "option 4"];

  function handleSelect(index) {
    setSelect(index);
  }
  return (
    <div>
      <p className="text-sm font-semibold ll:text-base">Option</p>
      <div className="flex justify-start items-center gap-2 text-sm py-2">
        {containers.map((container, index) => (
          <div
            key={container}
            className={` py-2 px-3 cursor-pointer rounded-md  lg:py-[10px] lg:px-4 ${
              select === index
                ? "bg-[#FCE9EC] text-[#d23f57]"
                : "bg-[#00000014] text-black"
            }`}
            onClick={() => {
              handleSelect(index);
            }}
          >
            {container}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOption;
