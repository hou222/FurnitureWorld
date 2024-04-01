import { BiSearch } from "react-icons/bi";
function SearchBar() {
  return (
    <div className="hidden lg:flex items-center  bg-[#F3F5F9]  rounded-md">
      <div className="py-3 px-4 flex gap-3  w-[500px] border-r-2">
        <BiSearch size={28} />
        <input
          type="text"
          placeholder="Searching for..."
          className="px-3 outline-none w-full border-l-2 bg-transparent hidden lg:inline-block"
        ></input>
      </div>

      <select className="py-3 px-5 appearance-none bg-transparent cursor-pointer outline-none bg-[url('src/assets/down-arrow.png')] bg-no-repeat top-3 right-3">
        <option value="All Categories">All Categories </option>
        <option value="Car">Car</option>
        <option value="Clothes">Clothes</option>
        <option value="Electronics">Electronics</option>
      </select>
    </div>
  );
}

export default SearchBar;
