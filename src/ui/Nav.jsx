import { IoMdClose } from "react-icons/io";
function Nav({ isOpen, handleOpen }) {
  return (
    <nav
      className={`px-10 py-24 transition-all duration-300 absolute top-0 h-screen w-full flex justify-center items-start bg-white lg:transition-none lg:h-auto lg:w-fit lg:px-5 lg:py-10 lg:static z-10 ${
        isOpen ? "left-0 block" : "-left-full "
      }`}
    >
      <IoMdClose
        color="#7d879c"
        size={23}
        className="absolute top-8 right-10 cursor-pointer lg:hidden"
        onClick={handleOpen}
      />
      <ul className=" flex flex-col w-full gap-4 lg:flex-row font-semibold text-xl    md:m-3 lg:m-0 text-black ">
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
