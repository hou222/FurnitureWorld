import { IoMdClose } from "react-icons/io";
function Nav({ isOpen, handleOpen }) {
  return (
    <nav
      className={`px-10 py-24 transition-all duration-300 absolute top-0 h-screen w-full flex justify-center items-start bg-white lg:transition-none lg:h-auto lg:w-fit lg:px-5 lg:py-3 lg:static z-10 ${
        isOpen ? "left-0 block" : "-left-full"
      }`}
    >
      <IoMdClose
        color="#7d879c"
        size={23}
        className="absolute top-8 right-10 cursor-pointer lg:hidden"
        onClick={handleOpen}
      />
      <ul className=" flex flex-col w-full gap-4 lg:flex-row font-semibold text-xl  lg:font-normal  md:m-3 lg:m-0 text-black ">
        <li className="flex justify-between items-center gap-2 cursor-pointer">
          <a>Home</a>
          <img src="src/assets/down-arrow.png" className=" w-4 h-4" />
        </li>
        <li className="flex justify-between items-center gap-2 cursor-pointer">
          <a>Mega Menu</a>
          <img src="src/assets/down-arrow.png" className=" w-4 h-4" />
        </li>
        <li className="flex justify-between items-center gap-2 cursor-pointer">
          <a>Full Screen Menu</a>
          <img src="src/assets/down-arrow.png" className=" w-4 h-4" />
        </li>
        <li className="flex justify-between items-center gap-2 cursor-pointer">
          <a>User Account</a>
          <img src="src/assets/down-arrow.png" className=" w-4 h-4" />
        </li>
        <li className="flex justify-between items-center gap-2 cursor-pointer">
          <a>Vendor Account</a>
          <img src="src/assets/down-arrow.png" className=" w-4 h-4" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
