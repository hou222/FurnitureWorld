import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router";
import { useScroll } from "../../hooks/useScroll";
function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const scroll = useScroll();

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
        className="py-3 px-4 flex gap-3 w-[180px] md:w-[300px] lg:w-[500px]  border-r-2"
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

      <select className="py-3 pl-2  md:pl-5 pr-7 md:pr-10 appearance-none bg-transparent cursor-pointer outline-none bg-[url('src/assets/down-arrow.png')] bg-no-repeat bg-[center_right_9px] md:bg-[center_right_14px] ">
        <option value="All Categories">All Categories </option>
        <option value="Car">Car</option>
        <option value="Clothes">Clothes</option>
        <option value="Electronics">Electronics</option>
      </select>
    </div>
  );
}

export default SearchBar;
