function List({ dropDown, id }) {
  const items = ["Dashboard", "Products", "Orders", "Profile"];

  return (
    <ul
      className={`bg-white lg:absolute w-full lg:w-40 flex flex-col items-start   lg:top-9 lg:left-1/2 lg:rounded-md transition-all ease-in-out duration-500 overflow-hidden font-normal hover:visible
        lg:-translate-x-2/4  lg:group-hover:block  ${
          dropDown && id
            ? "max-h-60"
            : "max-h-0 invisible lg:max-h-fit lg:group-hover:visible lg:duration-100"
        }`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="lg:hover:bg-gray-100 w-full text-lg px-4 text-start lg:text-center py-2 cursor-pointer hover:text-[#4BB4B4]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
