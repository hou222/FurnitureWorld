import { IoMdClose } from "react-icons/io";
function Nav({ isOpen, handleOpen }) {
  return (
    <nav
      className={`px-10 py-24 transition-all duration-300 absolute top-0 h-screen w-full flex justify-center items-start bg-white lg:hidden lg:transition-none  z-10 ${
        isOpen ? "left-0 block" : "-left-full "
      }`}
    >
      <IoMdClose
        color="#7d879c"
        size={23}
        className="absolute top-8 right-10 cursor-pointer"
        onClick={handleOpen}
      />
      <ul className=" flex flex-col w-full gap-4 font-semibold text-xl    md:m-3 text-black ">
        <li className="flex justify-between">
          <a>Home</a>
          <span>{">"}</span>
        </li>
        <li className="flex justify-between">
          <a>Mega Menu</a>
          <span>{">"}</span>
        </li>
        <li className="flex justify-between">
          <a>Full Screen Menu</a>
          <span>{">"}</span>
        </li>
        <li className="flex justify-between">
          <a>User Account</a>
          <span>{">"}</span>
        </li>
        <li className="flex justify-between">
          <a>Vendor Account</a>
          <span>{">"}</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
