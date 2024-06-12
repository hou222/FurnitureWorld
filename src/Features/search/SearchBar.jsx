import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router";
import { useScroll } from "../../hooks/useScroll";
import rightArr from "../../assets/right.png";
import { NavLink } from "react-router-dom";
function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const scroll = useScroll();
  const [isOpen1, setIsOpen1] = useState(false);
  function handleDropDown() {
    setIsOpen1((open) => !open);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    setQuery("");
    navigate(`/search/${query}`);
  }

  return (
    <div
      className={`flex items-center bg-[#F3F5F9]  rounded-md text-xs md:text-base ${
        scroll ? "hidden lg:flex" : ""
      }`}
    >
      <form
        className="py-3 px-4 flex gap-3 w-[180px] md:w-[300px] lg:w-[500px]  border-r-2 lg:border-r-0 "
        onSubmit={handleSubmit}
      >
        <BiSearch className="w-5 h-5 md:w-7 md:h-7" />
        <input
          type="text"
          placeholder="Searching for..."
          className="px-3 outline-none w-full border-l-2 bg-transparent lg:inline-block"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          value={query}
        ></input>
      </form>

      {/* <select className="py-3 pl-2  md:pl-5 pr-7 md:pr-10 appearance-none bg-transparent cursor-pointer outline-none bg-[url('src/assets/down-arrow.png')] bg-no-repeat bg-[center_right_9px] md:bg-[center_right_14px] ">
        <option value="All Categories">All Categories </option>
        <option value="/category/new">Top New Product</option>
        <option value="clothes">Clothes</option>
        <option value="Electronics">Electronics</option>
      </select> */}

      <div
        className={`relative z-20 text-gray-600 ${scroll ? " lg:hidden" : ""}`}
      >
        <button
          className="flex lg:w-[200px]  rounded-sm text-sm bg-transparent lg:hidden gap-2 items-center justify-between px-2 py-1 cursor-pointer "
          onClick={handleDropDown}
        >
          <div className="flex gap-2">
            <p>Categories</p>
          </div>

          <img src={rightArr} alt="right-arrow" className="w-3 h-3" />
        </button>
        <ul
          className={`border bg-white w-[130px] absolute top-9  left-0 rounded-sm text-xs ${
            !isOpen1 && "hidden"
          }`}
        >
          <NavLink
            to="/category/new"
            className="flex gap-2 px-3 py-2  hover:bg-slate-50 hover:cursor-pointer hover:text-[#4BB4B4]"
            onClick={handleDropDown}
          >
            <p>Top New Product</p>
          </NavLink>
          <NavLink
            to="/category/top"
            className="flex gap-2 px-3 py-2  hover:bg-slate-50 hover:cursor-pointer hover:text-[#4BB4B4]"
            onClick={handleDropDown}
          >
            <p>Top Selling Product</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
